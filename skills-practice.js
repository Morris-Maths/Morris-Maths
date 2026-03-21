// ============================================================================
// SKILLS PRACTICE MODULE
// Handles atomised skills sessions from the Targeted Revision "Skills" button.
// Bypasses SessionEngine — uses its own lightweight question picker and UI
// with rolling 6-attempt mastery window and misconception reason tracking.
// ============================================================================
// ENCODING RULE: ONLY ASCII characters (0x00-0x7F). Use Unicode escapes.
// ============================================================================
"use strict";

// Store name constants are defined in app-config.js:
// STORE_SKILLS_MASTERY, STORE_SKILLS_ATTEMPTS

var SkillsPractice = {

    // ---- Session state ----
    active: false,
    _pts: [],              // filtered PT objects for this session
    _queue: [],            // { pt, difficulty, qid, q, a } items to serve
    _currentItem: null,
    _sessionGoal: 10,
    _questionsServed: 0,
    _questionsCorrect: 0,
    _questionsIncorrect: 0,
    _startTime: null,
    _areaId: "targeted-question-area",
    _topicLabel: "",
    _answerRevealed: false,
    _questionStartTime: null,
    _masteryCache: {},     // pt_id -> mastery snapshot (loaded at start)

    // Topic name aliases: taxonomy name -> atomised data topic name
    _topicAliases: {
        "Kinematics": "Rectilinear Motion"
    },

    // ============================================================
    // PUBLIC: Start a skills practice session
    // ============================================================
    /**
     * @param {string} topic    - topic name from taxonomy
     * @param {string} subtopic - subtopic name, or "" for whole topic
     */
    start: function(topic, subtopic) {
        var self = SkillsPractice;

        // Check ATOMISED_DATA is loaded
        if (typeof ATOMISED_DATA === "undefined" || !ATOMISED_DATA.questions) {
            self._showError("Skills data not loaded. Please refresh the page.");
            return;
        }

        // Resolve topic aliases (taxonomy name may differ from atomised data)
        var resolvedTopic = self._topicAliases[topic] || topic;

        // Filter PTs by topic and optionally subtopic
        var pts = [];
        if (subtopic) {
            // Try getForSubtopic method, then bySubtopic index, then linear scan
            pts = (ATOMISED_DATA.getForSubtopic ? ATOMISED_DATA.getForSubtopic(subtopic) : null) ||
                  (ATOMISED_DATA.bySubtopic ? ATOMISED_DATA.bySubtopic[subtopic] : null) || [];
            if (pts.length === 0) {
                ATOMISED_DATA.questions.forEach(function(pt) {
                    if (pt.subtopic === subtopic) pts.push(pt);
                });
            }
            self._topicLabel = subtopic;
        } else {
            // Try getForTopic method, then byTopic index, then linear scan
            pts = (ATOMISED_DATA.getForTopic ? ATOMISED_DATA.getForTopic(resolvedTopic) : null) ||
                  (ATOMISED_DATA.byTopic ? ATOMISED_DATA.byTopic[resolvedTopic] : null) || [];
            if (pts.length === 0) {
                ATOMISED_DATA.questions.forEach(function(pt) {
                    if (pt.topic === resolvedTopic) pts.push(pt);
                });
            }
            self._topicLabel = topic;
        }

        if (pts.length === 0) {
            self._showError("No Skills questions available for <strong>" +
                self._esc(subtopic || topic) + "</strong>.");
            return;
        }

        self._pts = pts;
        self.active = true;
        self._questionsServed = 0;
        self._questionsCorrect = 0;
        self._questionsIncorrect = 0;
        self._sessionGoal = 10;
        self._startTime = new Date();
        self._answerRevealed = false;
        self._currentItem = null;

        // Load mastery data, then build queue and serve first question
        self._loadMasteryForPTs(pts).then(function() {
            self._buildQueue();
            if (self._queue.length === 0) {
                self._showError("No questions available. All skills may be mastered!");
                return;
            }
            self._serveNext();
        });
    },

    // ============================================================
    // MASTERY: IndexedDB operations
    // ============================================================

    _loadMasteryForPTs: function(pts) {
        var self = SkillsPractice;
        self._masteryCache = {};
        var promises = pts.map(function(pt) {
            return DB.get(STORE_SKILLS_MASTERY, pt.pt_id).then(function(record) {
                if (record) {
                    self._masteryCache[pt.pt_id] = record;
                }
            }).catch(function() {
                // Store may not exist yet if DB version hasn't been bumped
            });
        });
        return Promise.all(promises);
    },

    _getMastery: function(ptId) {
        return this._masteryCache[ptId] || null;
    },

    _getStatus: function(ptId) {
        var m = this._getMastery(ptId);
        return m ? m.status : "new";
    },

    /**
     * Record an attempt and recompute mastery for a PT.
     */
    _recordAttempt: function(ptId, qid, correct, reasonId, timeSec) {
        var self = SkillsPractice;
        var now = new Date().toISOString();

        // 1) Save immutable attempt event
        var attempt = {
            attempt_id: self._uuid(),
            qid: qid,
            pt_id: ptId,
            result: correct ? "correct" : "incorrect",
            reason_id: reasonId || null,
            time_sec: timeSec || 0,
            timestamp: now
        };

        var attemptPromise = DB.put(STORE_SKILLS_ATTEMPTS, attempt).catch(function(e) {
            console.warn("SkillsPractice: Failed to save attempt", e);
        });

        // 2) Update mastery snapshot
        var mastery = self._masteryCache[ptId] || {
            pt_id: ptId,
            status: "new",
            window: [],
            correct_in_window: 0,
            reason_counts_window: {},
            last_attempt_at: null,
            next_review_due: null
        };

        // Add to rolling window (max 6)
        mastery.window.push(correct);
        if (mastery.window.length > 6) mastery.window.shift();

        // Recount
        mastery.correct_in_window = 0;
        mastery.window.forEach(function(w) { if (w) mastery.correct_in_window++; });

        // Track reasons in window (only last 6 incorrect reasons)
        if (!correct && reasonId) {
            mastery.reason_counts_window[reasonId] =
                (mastery.reason_counts_window[reasonId] || 0) + 1;
        }

        mastery.last_attempt_at = now;

        // Compute new status
        var n = mastery.window.length;
        var c = mastery.correct_in_window;
        if (n === 0) {
            mastery.status = "new";
        } else if (n >= 6 && c >= 5) {
            mastery.status = "mastered";
        } else if (n >= 3 && c / n >= 0.6) {
            mastery.status = "improving";
        } else {
            mastery.status = "struggling";
        }

        self._masteryCache[ptId] = mastery;

        var masteryPromise = DB.put(STORE_SKILLS_MASTERY, mastery).catch(function(e) {
            console.warn("SkillsPractice: Failed to save mastery", e);
        });

        return Promise.all([attemptPromise, masteryPromise]);
    },

    // ============================================================
    // QUEUE: Build and manage the question queue
    // ============================================================

    _buildQueue: function() {
        var self = SkillsPractice;
        self._queue = [];

        // Categorise PTs by status
        var struggling = [], improving = [], fresh = [], mastered = [];
        self._pts.forEach(function(pt) {
            var status = self._getStatus(pt.pt_id);
            switch (status) {
                case "struggling": struggling.push(pt); break;
                case "improving":  improving.push(pt); break;
                case "mastered":
                case "review":     mastered.push(pt); break;
                default:           fresh.push(pt); break;
            }
        });

        // Interleave: struggling first, then fresh, then improving, then mastered
        // Pick questions at appropriate difficulty
        var ordered = [];

        // Struggling: easy questions
        self._shuffle(struggling);
        struggling.forEach(function(pt) {
            var q = self._pickQuestion(pt, "easy");
            if (q) ordered.push(q);
        });

        // Fresh: easy then medium
        self._shuffle(fresh);
        fresh.forEach(function(pt) {
            var q = self._pickQuestion(pt, "easy") || self._pickQuestion(pt, "medium");
            if (q) ordered.push(q);
        });

        // Improving: medium, with some hard
        self._shuffle(improving);
        improving.forEach(function(pt, i) {
            var diff = (i % 3 === 0) ? "hard" : "medium";
            var q = self._pickQuestion(pt, diff) || self._pickQuestion(pt, "medium") ||
                    self._pickQuestion(pt, "easy");
            if (q) ordered.push(q);
        });

        // Mastered: hard (quick review)
        self._shuffle(mastered);
        mastered.forEach(function(pt) {
            var q = self._pickQuestion(pt, "hard") || self._pickQuestion(pt, "medium");
            if (q) ordered.push(q);
        });

        self._queue = ordered;
    },

    _pickQuestion: function(pt, difficulty) {
        var pool = pt[difficulty];
        if (!pool || pool.length === 0) {
            // Fallback: try other difficulties
            if (difficulty === "easy") pool = pt.medium;
            else if (difficulty === "hard") pool = pt.medium;
            else pool = pt.easy;
            if (!pool || pool.length === 0) return null;
            difficulty = (difficulty === "easy") ? "medium" :
                         (difficulty === "hard") ? "medium" : "easy";
        }

        var q = pool[Math.floor(Math.random() * pool.length)];
        return {
            pt: pt,
            difficulty: difficulty,
            qid: q.qid,
            q: q.q,
            a: q.a
        };
    },

    // ============================================================
    // UI: Render questions and feedback
    // ============================================================

    _serveNext: function() {
        var self = SkillsPractice;

        if (self._questionsServed >= self._sessionGoal || self._queue.length === 0) {
            self._showSummary();
            return;
        }

        // If queue is running low, rebuild it (for longer sessions)
        if (self._queue.length === 0) {
            self._buildQueue();
            if (self._queue.length === 0) {
                self._showSummary();
                return;
            }
        }

        self._currentItem = self._queue.shift();
        self._questionsServed++;
        self._answerRevealed = false;
        self._questionStartTime = new Date();

        self._renderQuestion();
    },

    _renderQuestion: function() {
        var self = SkillsPractice;
        var item = self._currentItem;
        var area = document.getElementById(self._areaId);
        if (!area || !item) return;

        var statusLabel = self._getStatus(item.pt.pt_id);
        var statusClass = "sp-status-" + statusLabel;
        var diffLabel = item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1);

        var html = '<div class="sp-container">';

        // Progress bar
        html += '<div class="sp-progress-bar">';
        html += '<div class="sp-progress-fill" style="width:' +
            Math.round((self._questionsServed / self._sessionGoal) * 100) + '%"></div>';
        html += '</div>';

        // Header
        html += '<div class="sp-header">';
        html += '<div class="sp-header-left">';
        html += '<span class="sp-concept">' + self._esc(item.pt.concept) + '</span>';
        html += '<span class="sp-skill">' + self._esc(item.pt.pt) + '</span>';
        html += '</div>';
        html += '<div class="sp-header-right">';
        html += '<span class="sp-counter">Q ' + self._questionsServed +
            ' of ' + self._sessionGoal + '</span>';
        html += '<span class="sp-diff sp-diff-' + item.difficulty + '">' + diffLabel + '</span>';
        html += '<span class="sp-status ' + statusClass + '">' +
            self._statusEmoji(statusLabel) + '</span>';
        html += '</div>';
        html += '</div>';

        // Question
        html += '<div class="sp-question-box">';
        html += '<div class="sp-question">' + item.q + '</div>';
        html += '</div>';

        // Answer area (hidden until revealed)
        html += '<div class="sp-answer-section" id="sp-answer-section" style="display:none;">';
        html += '<div class="sp-answer-label">Answer</div>';
        html += '<div class="sp-answer">' + item.a + '</div>';
        html += '</div>';

        // Buttons
        html += '<div class="sp-actions" id="sp-actions">';
        html += '<button class="btn btn-primary btn-large sp-reveal-btn" ' +
            'id="sp-reveal-btn" onclick="SkillsPractice._revealAnswer()">Show Answer</button>';
        html += '</div>';

        // Feedback area (shown after reveal)
        html += '<div class="sp-feedback" id="sp-feedback" style="display:none;"></div>';

        // End session button
        html += '<div class="sp-end-row">';
        html += '<button class="btn btn-secondary sp-end-btn" ' +
            'onclick="SkillsPractice._showSummary()">End Session</button>';
        html += '</div>';

        html += '</div>';

        area.innerHTML = html;
        self._typeset();
    },

    _revealAnswer: function() {
        var self = SkillsPractice;
        self._answerRevealed = true;

        var answerSection = document.getElementById("sp-answer-section");
        var actionsDiv = document.getElementById("sp-actions");
        if (answerSection) answerSection.style.display = "block";

        // Replace reveal button with correct/incorrect buttons
        if (actionsDiv) {
            actionsDiv.innerHTML =
                '<button class="btn sp-btn-correct" onclick="SkillsPractice._markCorrect()">' +
                SYMBOLS.CHECK + ' Got it</button>' +
                '<button class="btn sp-btn-incorrect" onclick="SkillsPractice._markIncorrect()">' +
                SYMBOLS.CROSS + ' Need more practice</button>';
        }

        self._typeset();
    },

    _markCorrect: function() {
        var self = SkillsPractice;
        var item = self._currentItem;
        if (!item) return;

        self._questionsCorrect++;
        var timeSec = Math.round((new Date() - self._questionStartTime) / 1000);

        self._recordAttempt(item.pt.pt_id, item.qid, true, null, timeSec).then(function() {
            // Check for mastery promotion
            var mastery = self._getMastery(item.pt.pt_id);
            if (mastery && mastery.status === "mastered" && mastery.window.length === 6 &&
                mastery.correct_in_window >= 5) {
                self._showBriefFeedback("correct", "Skill mastered! " + SYMBOLS.TROPHY);
            } else {
                self._showBriefFeedback("correct", null);
            }
        });
    },

    _markIncorrect: function() {
        var self = SkillsPractice;
        self._questionsIncorrect++;
        self._showReasonPicker();
    },

    _showBriefFeedback: function(type, message) {
        var self = SkillsPractice;
        var feedback = document.getElementById("sp-feedback");
        var actions = document.getElementById("sp-actions");
        if (!feedback) return;

        if (type === "correct") {
            feedback.innerHTML = '<div class="sp-feedback-msg sp-feedback-correct">' +
                SYMBOLS.CHECK + ' Correct!' +
                (message ? '<br><span class="sp-feedback-extra">' + message + '</span>' : '') +
                '</div>';
            feedback.style.display = "block";
            if (actions) actions.innerHTML = "";

            // Auto-advance after a brief pause
            setTimeout(function() {
                self._serveNext();
            }, 800);
        }
    },

    _showReasonPicker: function() {
        var self = SkillsPractice;
        var item = self._currentItem;
        var feedback = document.getElementById("sp-feedback");
        var actions = document.getElementById("sp-actions");
        if (!feedback || !item) return;

        if (actions) actions.innerHTML = "";

        // Build reason picker from PT's reason_bank
        var reasonBank = item.pt.reason_bank || ["not_sure"];
        var reasonLookup = {};
        ATOMISED_REASONS.forEach(function(r) { reasonLookup[r.id] = r.label; });

        var html = '<div class="sp-feedback-msg sp-feedback-incorrect">' +
            SYMBOLS.CROSS + ' Not quite</div>';
        html += '<div class="sp-reason-picker">';
        html += '<p class="sp-reason-prompt">What went wrong?</p>';

        reasonBank.forEach(function(rid) {
            var label = reasonLookup[rid] || rid;
            html += '<label class="sp-reason-option">' +
                '<input type="radio" name="sp-reason" value="' + rid + '"> ' +
                '<span>' + self._esc(label) + '</span></label>';
        });

        html += '<button class="btn btn-primary sp-continue-btn" id="sp-continue-btn" ' +
            'onclick="SkillsPractice._submitReason()" disabled>Continue ' +
            SYMBOLS.ARROW_RIGHT + '</button>';
        html += '</div>';

        feedback.innerHTML = html;
        feedback.style.display = "block";

        // Enable continue button when a reason is selected
        var radios = feedback.querySelectorAll('input[name="sp-reason"]');
        radios.forEach(function(r) {
            r.addEventListener("change", function() {
                var btn = document.getElementById("sp-continue-btn");
                if (btn) btn.disabled = false;
            });
        });
    },

    _submitReason: function() {
        var self = SkillsPractice;
        var item = self._currentItem;
        if (!item) return;

        var selected = document.querySelector('input[name="sp-reason"]:checked');
        var reasonId = selected ? selected.value : "not_sure";
        var timeSec = Math.round((new Date() - self._questionStartTime) / 1000);

        self._recordAttempt(item.pt.pt_id, item.qid, false, reasonId, timeSec).then(function() {
            self._serveNext();
        });
    },

    // ============================================================
    // SESSION SUMMARY
    // ============================================================

    _showSummary: function() {
        var self = SkillsPractice;
        self.active = false;

        var area = document.getElementById(self._areaId);
        if (!area) return;

        var duration = self._startTime ?
            Math.round((new Date() - self._startTime) / 60000) : 0;
        var accuracy = self._questionsServed > 0 ?
            Math.round((self._questionsCorrect / self._questionsServed) * 100) : 0;

        // Collect mastery status counts
        var statusCounts = { mastered: 0, improving: 0, struggling: 0, "new": 0 };
        self._pts.forEach(function(pt) {
            var s = self._getStatus(pt.pt_id);
            if (s === "review") s = "mastered";
            if (statusCounts[s] !== undefined) statusCounts[s]++;
            else statusCounts["new"]++;
        });

        var html = '<div class="session-summary">';

        // Header with icon
        html += '<div class="summary-header">';
        if (accuracy >= 80) {
            html += '<div class="summary-icon">' + SYMBOLS.TROPHY + '</div>';
            html += '<h2>Excellent Skills Session!</h2>';
        } else if (accuracy >= 60) {
            html += '<div class="summary-icon">' + SYMBOLS.STAR + '</div>';
            html += '<h2>Good Skills Practice!</h2>';
        } else {
            html += '<div class="summary-icon">' + SYMBOLS.GRAPH + '</div>';
            html += '<h2>Skills Session Complete</h2>';
        }
        html += '<p class="sp-summary-topic">' + self._esc(self._topicLabel) + '</p>';
        html += '</div>';

        // Stats grid (reuses existing summary-stats / summary-card classes)
        html += '<div class="summary-stats">';
        html += self._summaryCard("Questions", self._questionsServed);
        html += self._summaryCard("Correct", self._questionsCorrect +
            " / " + self._questionsServed);
        html += self._summaryCard("Accuracy", accuracy + "%");
        html += self._summaryCard("Duration", duration + " min");
        html += '</div>';

        // Mastery overview
        html += '<div class="sp-mastery-overview">';
        html += '<h3>Skills Progress</h3>';
        html += '<div class="sp-mastery-bars">';
        var total = self._pts.length;
        if (total > 0) {
            var segments = [
                { label: "Mastered", count: statusCounts.mastered, cls: "mastered" },
                { label: "Improving", count: statusCounts.improving, cls: "improving" },
                { label: "Struggling", count: statusCounts.struggling, cls: "struggling" },
                { label: "New", count: statusCounts["new"], cls: "new" }
            ];
            html += '<div class="sp-stacked-bar">';
            segments.forEach(function(seg) {
                if (seg.count > 0) {
                    var pct = Math.round((seg.count / total) * 100);
                    html += '<div class="sp-bar-seg sp-bar-' + seg.cls +
                        '" style="width:' + pct + '%" title="' +
                        seg.label + ': ' + seg.count + '/' + total + '"></div>';
                }
            });
            html += '</div>';
            html += '<div class="sp-bar-legend">';
            segments.forEach(function(seg) {
                if (seg.count > 0) {
                    html += '<span class="sp-legend-item">' +
                        '<span class="sp-legend-dot sp-bar-' + seg.cls + '"></span>' +
                        seg.label + ' ' + seg.count + '</span>';
                }
            });
            html += '</div>';
        }
        html += '</div></div>';

        // Actions
        html += '<div class="summary-actions">';
        html += '<button class="btn btn-primary btn-large" ' +
            'onclick="SkillsPractice._restart()">Start New Session</button>';
        html += '<button class="btn btn-secondary" ' +
            'onclick="ConceptsUI.backToTopicsFromSession()">Back to Topics</button>';
        html += '</div>';

        html += '</div>';
        area.innerHTML = html;
    },

    _restart: function() {
        var self = SkillsPractice;
        // Re-start with the same PTs
        self.active = true;
        self._questionsServed = 0;
        self._questionsCorrect = 0;
        self._questionsIncorrect = 0;
        self._startTime = new Date();

        self._loadMasteryForPTs(self._pts).then(function() {
            self._buildQueue();
            if (self._queue.length === 0) {
                self._showError("All skills mastered! Nothing left to practice.");
                return;
            }
            self._serveNext();
        });
    },

    _summaryCard: function(label, value) {
        return '<div class="summary-card"><div class="summary-value">' +
            value + '</div><div class="summary-label">' + label + '</div></div>';
    },

    // ============================================================
    // HELPERS
    // ============================================================

    _showError: function(msg) {
        var area = document.getElementById(SkillsPractice._areaId);
        if (area) {
            area.innerHTML = '<div class="session-empty"><p>' + msg + '</p>' +
                '<button class="btn btn-primary" ' +
                'onclick="ConceptsUI.backToTopicsFromSession()">Back to Topics</button></div>';
        }
    },

    _typeset: function() {
        if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
            var el = document.getElementById(SkillsPractice._areaId);
            if (el) MathJax.typesetPromise([el]).catch(function() {});
        }
    },

    _shuffle: function(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
        }
    },

    _uuid: function() {
        if (typeof crypto !== "undefined" && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
    },

    _esc: function(s) {
        var d = document.createElement("div");
        d.textContent = s || "";
        return d.innerHTML;
    },

    _statusEmoji: function(status) {
        switch (status) {
            case "mastered": return SYMBOLS.CHECK;
            case "improving": return SYMBOLS.ARROW_UP;
            case "struggling": return SYMBOLS.CROSS;
            case "review": return SYMBOLS.REVIEW;
            default: return SYMBOLS.STAR_EMPTY;
        }
    }
};
