// ============================================================================
// CONCEPTS UI MODULE
// Handles the Targeted Revision tab: topic tree with Concepts / Skills /
// Exam Questions buttons, flashcard-based concept review with spaced
// repetition, and progress tracking via IndexedDB.
// ============================================================================
var ConceptsUI = {

    // ---- State ----
    _progressData: {},        // { qid: { nailed: bool, attempts: int, lastSeen: timestamp } }
    _reviewQueue: [],
    _reviewIndex: 0,
    _reviewToRevisit: [],     // qids needing re-insertion
    _insertCounter: 0,
    _sessionNailed: 0,
    _sessionRevise: 0,
    _currentTopicKey: "",
    _currentSubtopicFilter: "",
    _loaded: false,

    // ---- Multi-select state ----
    // Each entry: { topic, subtopic, pool }
    //   pool = "concepts", "practice" (skills), or "original" (exam qs)
    _selections: [],
    _pendingAfterConcepts: { skills: [], exam: [] },

    // ---- Canonical taxonomy (topics -> subtopics) ----
    // Fallback only — prefer CourseLoader.getTaxonomy() at runtime.
    TAXONOMY: {
        "Further Differentiation and Applications": [
            "Basic Differentiation Skills",
            "Exponential Growth and Decay",
            "Second Derivatives",
            "Small Increments",
            "Applications of Differentiation",
            "Optimisation Problems"
        ],
        "Kinematics": [
            "Kinematics: Differentiation",
            "Kinematics: Integration"
        ],
        "Integrals": [
            "Anti-differentiation",
            "Definite Integrals",
            "Fundamental Theorem",
            "Applications of Integration"
        ],
        "Discrete Random Variables": [
            "General Discrete Random Variables",
            "Bernoulli Distributions",
            "Binomial Distributions"
        ],
        "The Logarithmic Function": [
            "Logarithmic Functions",
            "Calculus of the Natural Logarithmic Function"
        ],
        "Continuous Random Variables and the Normal Distribution": [
            "General Continuous Random Variables",
            "Normal Distributions"
        ],
        "Interval Estimates for Proportions": [
            "Random Sampling",
            "Sample Proportions",
            "Confidence Intervals for Proportions"
        ]
    },

    // ---- All loaded concepts data ----
    // Populated by _registerConceptsData() from global CONCEPTS_* variables
    _conceptsBank: {},  // { "Integrals": { sections: [...] } }

    // ================================================================
    // INITIALISATION
    // ================================================================
    init: function() {
        if (ConceptsUI._loaded) return;
        ConceptsUI._loaded = true;

        // Register any CONCEPTS_* globals
        ConceptsUI._registerConceptsData();

        // Load saved progress from IndexedDB (fall back to localStorage)
        ConceptsUI._loadProgress(function() {
            // Build the topic tree
            ConceptsUI.buildTree();
        });

        // Wire up the back button
        var backBtn = document.getElementById("concepts-back-btn");
        if (backBtn) {
            backBtn.addEventListener("click", function() {
                ConceptsUI.backToTopics();
            });
        }

        // Wire up targeted-revision toggle buttons
        ConceptsUI._bindToggleGroup("targeted-section-group");
        ConceptsUI._bindToggleGroup("targeted-answer-group");
        ConceptsUI._bindToggleGroup("targeted-marking-group");

        console.log("ConceptsUI: initialised, " +
            Object.keys(ConceptsUI._conceptsBank).length + " topic(s) with concepts data");
    },

    // ================================================================
    // DATA REGISTRATION
    // ================================================================
    _registerConceptsData: function() {
        // Use CourseLoader's registration list (from course-config.js) if available,
        // so global variable names and topic labels stay in sync with the course config.
        var globals = (typeof CourseLoader !== "undefined" && CourseLoader.getConceptsRegistration)
            ? CourseLoader.getConceptsRegistration()
            : [];

        globals.forEach(function(entry) {
            if (typeof window[entry.varName] !== "undefined") {
                ConceptsUI._conceptsBank[entry.topic] = window[entry.varName];
                console.log("ConceptsUI: registered concepts for " + entry.topic +
                    " (" + ConceptsUI._countQuestions(window[entry.varName]) + " questions)");
            }
        });
    },

    _countQuestions: function(data) {
        var count = 0;
        if (data && data.sections) {
            data.sections.forEach(function(sec) {
                count += (sec.questions || []).length;
            });
        }
        return count;
    },

    // ================================================================
    // PROGRESS PERSISTENCE
    // ================================================================
    _loadProgress: function(callback) {
        // Try IndexedDB first (uses the existing DB infrastructure)
        if (typeof DB !== "undefined" && DB.get) {
            DB.get(STORE_CONFIG, "concepts_progress").then(function(record) {
                if (record && record.data) {
                    ConceptsUI._progressData = record.data;
                }
                if (callback) callback();
            }).catch(function() {
                // Fall back to localStorage
                ConceptsUI._loadProgressLocalStorage();
                if (callback) callback();
            });
        } else {
            ConceptsUI._loadProgressLocalStorage();
            if (callback) callback();
        }
    },

    _loadProgressLocalStorage: function() {
        try {
            var saved = localStorage.getItem("morris_concepts_progress");
            if (saved) ConceptsUI._progressData = JSON.parse(saved);
        } catch(e) { /* ignore */ }
    },

    _saveProgress: function() {
        // Save to IndexedDB
        if (typeof DB !== "undefined" && DB.put) {
            DB.put(STORE_CONFIG, {
                id: "concepts_progress",
                data: ConceptsUI._progressData
            }).catch(function() {
                // Fall back to localStorage
                ConceptsUI._saveProgressLocalStorage();
            });
        } else {
            ConceptsUI._saveProgressLocalStorage();
        }
    },

    _saveProgressLocalStorage: function() {
        try {
            localStorage.setItem("morris_concepts_progress",
                JSON.stringify(ConceptsUI._progressData));
        } catch(e) { /* ignore */ }
    },

    // ================================================================
    // TOPIC TREE BUILDER
    // ================================================================
    buildTree: function() {
        var container = document.getElementById("targeted-topic-tree");
        if (!container) return;

        // Use CourseLoader taxonomy if available, fall back to hardcoded TAXONOMY
        var taxonomy = (typeof CourseLoader !== "undefined" && CourseLoader.getTaxonomy)
            ? CourseLoader.getTaxonomy()
            : ConceptsUI.TAXONOMY;

        var html = "";
        var topics = Object.keys(taxonomy);

        topics.forEach(function(topic) {
            var hasConcepts = !!ConceptsUI._conceptsBank[topic];
            var topicQids = ConceptsUI._getQidsForTopic(topic);
            var topicRate = ConceptsUI._calcSuccessRate(topicQids);
            var reviewCount = ConceptsUI._countNeedReview(topicQids);
            var tAttr = ConceptsUI._escAttr(topic);

            html += '<div class="cs-topic-block" data-topic="' + tAttr + '">';

            // Topic header row
            html += '<div class="cs-topic-header" onclick="ConceptsUI.toggleTopic(this)">';
            html += '<div class="cs-topic-left">';
            html += '<span class="cs-chevron">' + SYMBOLS.ARROW_RIGHT + '</span>';
            html += '<span class="cs-topic-name">' + ConceptsUI._escHTML(topic) + '</span>';
            if (reviewCount > 0) {
                html += '<span class="cs-review-badge">' + reviewCount + ' to review</span>';
            }
            html += '</div>';
            html += '<div class="cs-topic-actions">';
            html += ConceptsUI._pillHTML(topicRate);
            html += '<button class="cs-btn cs-btn-concepts' +
                ConceptsUI._selClass(topic, '', 'concepts') + '" ' +
                (hasConcepts ?
                'onclick="event.stopPropagation(); ConceptsUI.toggleSelection(\'' +
                tAttr + '\', \'\', \'concepts\', this)"' :
                'disabled title="Coming soon"') + '>Concepts</button>';
            html += '<button class="cs-btn cs-btn-skills' +
                ConceptsUI._selClass(topic, '', 'practice') + '" ' +
                'onclick="event.stopPropagation(); ConceptsUI.toggleSelection(\'' +
                tAttr + '\', \'\', \'practice\', this)">Skills</button>';
            html += '<button class="cs-btn cs-btn-exam' +
                ConceptsUI._selClass(topic, '', 'original') + '" ' +
                'onclick="event.stopPropagation(); ConceptsUI.toggleSelection(\'' +
                tAttr + '\', \'\', \'original\', this)">Exam Qs</button>';
            html += '</div>';
            html += '</div>';

            // Subtopics (collapsed)
            html += '<div class="cs-subtopic-list">';
            taxonomy[topic].forEach(function(sub) {
                var subQids = ConceptsUI._getQidsForSubtopic(topic, sub);
                var subRate = ConceptsUI._calcSuccessRate(subQids);
                var hasSubConcepts = subQids.length > 0;
                var subReviewCount = ConceptsUI._countNeedReview(subQids);
                var sAttr = ConceptsUI._escAttr(sub);

                html += '<div class="cs-subtopic-row">';
                html += '<span class="cs-subtopic-name">' + ConceptsUI._escHTML(sub);
                if (subReviewCount > 0) {
                    html += '<span class="cs-review-badge">' + subReviewCount + '</span>';
                }
                html += '</span>';
                html += '<div class="cs-topic-actions">';
                html += ConceptsUI._pillHTML(subRate);
                html += '<button class="cs-btn cs-btn-concepts' +
                    ConceptsUI._selClass(topic, sub, 'concepts') + '" ' +
                    (hasSubConcepts ?
                    'onclick="ConceptsUI.toggleSelection(\'' +
                    tAttr + '\', \'' + sAttr + '\', \'concepts\', this)"' :
                    'disabled title="No concepts yet"') + '>Concepts</button>';
                html += '<button class="cs-btn cs-btn-skills' +
                    ConceptsUI._selClass(topic, sub, 'practice') + '" ' +
                    'onclick="ConceptsUI.toggleSelection(\'' +
                    tAttr + '\', \'' + sAttr + '\', \'practice\', this)">Skills</button>';
                html += '<button class="cs-btn cs-btn-exam' +
                    ConceptsUI._selClass(topic, sub, 'original') + '" ' +
                    'onclick="ConceptsUI.toggleSelection(\'' +
                    tAttr + '\', \'' + sAttr + '\', \'original\', this)">Exam Qs</button>';
                html += '</div>';
                html += '</div>';
            });
            html += '</div>';

            html += '</div>';
        });

        container.innerHTML = html;
        // Restore selection-bar padding class
        ConceptsUI._updateSelectionBar();
    },

    toggleTopic: function(headerEl) {
        var block = headerEl.parentElement;
        block.classList.toggle("cs-open");
    },

    // ================================================================
    // CONCEPT DATA HELPERS
    // ================================================================
    _getConceptsForTopic: function(topicKey) {
        var data = ConceptsUI._conceptsBank[topicKey];
        if (!data || !data.sections) return [];
        var all = [];
        data.sections.forEach(function(sec) {
            (sec.questions || []).forEach(function(q) {
                all.push({
                    qid: q.qid,
                    q: q.q,
                    answer: q.answer,
                    diagram: q.diagram || null,
                    section: sec.section,
                    subtopic: sec.subtopic || ""
                });
            });
        });
        return all;
    },

    _getConceptsForSubtopic: function(topicKey, subtopic) {
        var data = ConceptsUI._conceptsBank[topicKey];
        if (!data || !data.sections) return [];
        var all = [];
        data.sections.forEach(function(sec) {
            if (sec.subtopic === subtopic) {
                (sec.questions || []).forEach(function(q) {
                    all.push({
                        qid: q.qid,
                        q: q.q,
                        answer: q.answer,
                        diagram: q.diagram || null,
                        section: sec.section,
                        subtopic: sec.subtopic || ""
                    });
                });
            }
        });
        return all;
    },

    _getQidsForTopic: function(topicKey) {
        return ConceptsUI._getConceptsForTopic(topicKey).map(function(c) { return c.qid; });
    },

    _getQidsForSubtopic: function(topicKey, subtopic) {
        return ConceptsUI._getConceptsForSubtopic(topicKey, subtopic).map(function(c) { return c.qid; });
    },

    // ================================================================
    // PROGRESS CALCULATIONS
    // ================================================================
    _calcSuccessRate: function(qids) {
        if (!qids.length) return -1;
        var attempted = 0, nailed = 0;
        qids.forEach(function(qid) {
            if (ConceptsUI._progressData[qid]) {
                attempted++;
                if (ConceptsUI._progressData[qid].nailed) nailed++;
            }
        });
        if (attempted === 0) return -1;
        return Math.round((nailed / attempted) * 100);
    },

    _countNeedReview: function(qids) {
        var count = 0;
        qids.forEach(function(qid) {
            if (ConceptsUI._progressData[qid] && !ConceptsUI._progressData[qid].nailed) {
                count++;
            }
        });
        return count;
    },

    _pillHTML: function(rate) {
        if (rate === -1) return '<span class="cs-pill cs-pill-new">New</span>';
        if (rate >= 90) return '<span class="cs-pill cs-pill-mastered">' + rate + '%</span>';
        if (rate >= 70) return '<span class="cs-pill cs-pill-success">' + rate + '%</span>';
        if (rate >= 40) return '<span class="cs-pill cs-pill-warning">' + rate + '%</span>';
        return '<span class="cs-pill cs-pill-danger">' + rate + '%</span>';
    },

    // ================================================================
    // CONCEPT REVIEW ENGINE
    // ================================================================
    startConceptReview: function(topicKey, subtopicFilter) {
        ConceptsUI._currentTopicKey = topicKey;
        ConceptsUI._currentSubtopicFilter = subtopicFilter;

        var concepts;
        if (subtopicFilter) {
            concepts = ConceptsUI._getConceptsForSubtopic(topicKey, subtopicFilter);
        } else {
            concepts = ConceptsUI._getConceptsForTopic(topicKey);
        }

        if (concepts.length === 0) return;

        // Categorise by progress
        var needsReview = [];
        var nailed = [];
        var fresh = [];

        concepts.forEach(function(c) {
            var p = ConceptsUI._progressData[c.qid];
            if (!p) {
                fresh.push(c);
            } else if (!p.nailed) {
                needsReview.push(c);
            } else {
                nailed.push(c);
            }
        });

        // Shuffle each group
        ConceptsUI._shuffle(fresh);
        ConceptsUI._shuffle(needsReview);
        ConceptsUI._shuffle(nailed);

        // Build queue: fresh first, interleave review items every 5 cards
        var baseQueue = fresh.slice();
        var reviewInsertions = needsReview.slice();
        var finalQueue = [];
        var rIdx = 0;

        for (var i = 0; i < baseQueue.length; i++) {
            finalQueue.push(baseQueue[i]);
            if ((i + 1) % 5 === 0 && rIdx < reviewInsertions.length) {
                finalQueue.push(reviewInsertions[rIdx]);
                rIdx++;
            }
        }
        // Append remaining review items
        while (rIdx < reviewInsertions.length) {
            finalQueue.push(reviewInsertions[rIdx]);
            rIdx++;
        }
        // Nailed items go at the end (only after all others)
        finalQueue = finalQueue.concat(nailed);

        ConceptsUI._reviewQueue = finalQueue;
        ConceptsUI._reviewIndex = 0;
        ConceptsUI._reviewToRevisit = [];
        ConceptsUI._insertCounter = 0;
        ConceptsUI._sessionNailed = 0;
        ConceptsUI._sessionRevise = 0;

        if (ConceptsUI._reviewQueue.length === 0) return;

        // Show review screen, hide topic tree
        document.getElementById("targeted-home").style.display = "none";
        document.getElementById("concepts-review-view").style.display = "block";
        ConceptsUI._showCurrentCard();
    },

    _showCurrentCard: function() {
        if (ConceptsUI._reviewIndex >= ConceptsUI._reviewQueue.length) {
            ConceptsUI._showReviewComplete();
            return;
        }

        var card = ConceptsUI._reviewQueue[ConceptsUI._reviewIndex];
        var total = ConceptsUI._reviewQueue.length;

        // Update progress bar and counter
        var fill = document.getElementById("concepts-progress-fill");
        var counter = document.getElementById("concepts-counter");
        if (fill) fill.style.width = ((ConceptsUI._reviewIndex / total) * 100) + "%";
        if (counter) counter.textContent = (ConceptsUI._reviewIndex + 1) + " / " + total;

        var html = '<div class="cs-flashcard">';
        // Show type badge in mixed sessions
        var isSkill = card._itemType === "skill";
        if (ConceptsUI._currentTopicKey === "__mixed__") {
            html += '<div class="cs-flashcard-type-badge ' +
                (isSkill ? 'cs-badge-skill' : 'cs-badge-concept') + '">' +
                (isSkill ? 'Skill' : 'Concept') + '</div>';
        }
        html += '<div class="cs-flashcard-section">' + ConceptsUI._escHTML(card.section) + '</div>';
        if (isSkill && card._skill_name) {
            html += '<div class="cs-flashcard-skill-name">' + ConceptsUI._escHTML(card._skill_name) + '</div>';
        }
        html += '<div class="cs-flashcard-question">' + card.q + '</div>';

        // Diagram placeholder (if present)
        if (card.diagram) {
            html += '<div class="cs-flashcard-diagram">';
            // Extract filename from "[IMAGE: filename.png]" format
            var diagFile = card.diagram.replace(/\[IMAGE:\s*/, "").replace(/\]$/, "");
            html += '<img src="concepts_diagrams/' + ConceptsUI._escAttr(diagFile) +
                '" alt="Diagram" onerror="this.style.display=\'none\'" ' +
                'style="max-width:100%;border-radius:8px;margin-top:8px;">';
            html += '</div>';
        }

        // Reveal button (hidden after click)
        html += '<button class="cs-reveal-btn" id="cs-reveal-btn" ' +
            'onclick="ConceptsUI.revealAnswer()">Reveal Answer</button>';

        // Rating buttons ABOVE the answer so user doesn't need to scroll
        html += '<div class="cs-rating-buttons" id="cs-rating-buttons">';
        html += '<button class="cs-rating-btn cs-rating-btn-sm cs-btn-nailed" ' +
            'onclick="ConceptsUI.rateCard(true)">Nailed it!</button>';
        html += '<button class="cs-rating-btn cs-rating-btn-sm cs-btn-revise-again" ' +
            'onclick="ConceptsUI.rateCard(false)">Revise again</button>';
        html += '</div>';

        // Answer content (revealed by revealAnswer)
        html += '<div class="cs-flashcard-answer" id="cs-card-answer">';
        html += '<div class="cs-flashcard-answer-content">' + card.answer + '</div>';
        html += '</div>';
        html += '</div>';

        document.getElementById("concepts-flashcard-area").innerHTML = html;

        // Typeset MathJax
        ConceptsUI._typeset("concepts-flashcard-area");
    },

    revealAnswer: function() {
        var answer = document.getElementById("cs-card-answer");
        var revealBtn = document.getElementById("cs-reveal-btn");
        var ratingBtns = document.getElementById("cs-rating-buttons");

        if (answer) answer.classList.add("cs-shown");
        if (revealBtn) revealBtn.style.display = "none";
        if (ratingBtns) ratingBtns.classList.add("cs-shown");

        // Typeset the newly revealed answer
        ConceptsUI._typeset("cs-card-answer");
    },

    rateCard: function(nailed) {
        var card = ConceptsUI._reviewQueue[ConceptsUI._reviewIndex];
        var isSkill = card._itemType === "skill";

        if (isSkill) {
            // Record attempt via SkillsPractice mastery system
            if (typeof SkillsPractice !== "undefined" && SkillsPractice._recordAttempt) {
                SkillsPractice._recordAttempt(
                    card._pt_id, card.qid, nailed, null, 0
                ).catch(function() {});
            }
        } else {
            // Update concept progress
            if (!ConceptsUI._progressData[card.qid]) {
                ConceptsUI._progressData[card.qid] = { nailed: false, attempts: 0 };
            }
            ConceptsUI._progressData[card.qid].attempts++;
            ConceptsUI._progressData[card.qid].nailed = nailed;
            ConceptsUI._progressData[card.qid].lastSeen = Date.now();
        }

        if (nailed) {
            ConceptsUI._sessionNailed++;
            // Remove from revisit list if present
            ConceptsUI._reviewToRevisit = ConceptsUI._reviewToRevisit.filter(
                function(qid) { return qid !== card.qid; }
            );
        } else {
            ConceptsUI._sessionRevise++;
            // Add to revisit list
            if (ConceptsUI._reviewToRevisit.indexOf(card.qid) === -1) {
                ConceptsUI._reviewToRevisit.push(card.qid);
            }
        }

        ConceptsUI._saveProgress();

        // Re-insert a revisit item every 5 cards
        ConceptsUI._insertCounter++;
        if (ConceptsUI._insertCounter >= 5 && ConceptsUI._reviewToRevisit.length > 0) {
            ConceptsUI._insertCounter = 0;
            var revisitQid = ConceptsUI._reviewToRevisit[0];
            var revisitCard = null;
            // For combined/mixed mode, search the full queue; otherwise use topic lookup
            if (ConceptsUI._currentTopicKey === "__combined__" ||
                ConceptsUI._currentTopicKey === "__mixed__") {
                // Find the card from already-served portion of queue
                for (var i = 0; i < ConceptsUI._reviewIndex; i++) {
                    if (ConceptsUI._reviewQueue[i] && ConceptsUI._reviewQueue[i].qid === revisitQid) {
                        revisitCard = ConceptsUI._reviewQueue[i]; break;
                    }
                }
            } else {
                var allConcepts = ConceptsUI._currentSubtopicFilter ?
                    ConceptsUI._getConceptsForSubtopic(
                        ConceptsUI._currentTopicKey, ConceptsUI._currentSubtopicFilter) :
                    ConceptsUI._getConceptsForTopic(ConceptsUI._currentTopicKey);
                for (var i = 0; i < allConcepts.length; i++) {
                    if (allConcepts[i].qid === revisitQid) { revisitCard = allConcepts[i]; break; }
                }
            }
            if (revisitCard) {
                ConceptsUI._reviewQueue.splice(ConceptsUI._reviewIndex + 1, 0, revisitCard);
            }
        }

        // Advance to next card
        ConceptsUI._reviewIndex++;
        ConceptsUI._showCurrentCard();
    },

    _showReviewComplete: function() {
        var total = ConceptsUI._sessionNailed + ConceptsUI._sessionRevise;
        var pct = total > 0 ? Math.round((ConceptsUI._sessionNailed / total) * 100) : 0;
        var label = (ConceptsUI._currentTopicKey === "__combined__" ||
            ConceptsUI._currentTopicKey === "__mixed__")
            ? "Mixed Review" : (ConceptsUI._currentSubtopicFilter || ConceptsUI._currentTopicKey);

        // Check if there are pending skills/exam selections to launch next
        var pending = ConceptsUI._pendingAfterConcepts || { skills: [], exam: [] };
        var hasMore = pending.skills.length > 0 || pending.exam.length > 0;

        var html = '<div class="cs-review-complete">';
        html += '<h2>Review Complete!</h2>';
        html += '<p>' + ConceptsUI._escHTML(label) +
            ' ' + SYMBOLS.EM_DASH + ' ' + total + ' concepts reviewed</p>';
        html += '<div class="cs-review-stats">';
        html += '<div class="cs-review-stat">' +
            '<span class="cs-review-stat-value cs-stat-nailed">' +
            ConceptsUI._sessionNailed + '</span>' +
            '<span class="cs-review-stat-label">Nailed it</span></div>';
        html += '<div class="cs-review-stat">' +
            '<span class="cs-review-stat-value cs-stat-revise">' +
            ConceptsUI._sessionRevise + '</span>' +
            '<span class="cs-review-stat-label">Need to revise</span></div>';
        html += '<div class="cs-review-stat">' +
            '<span class="cs-review-stat-value" style="color:var(--accent-primary);">' +
            pct + '%</span>' +
            '<span class="cs-review-stat-label">Success rate</span></div>';
        html += '</div>';

        if (hasMore) {
            html += '<button class="btn btn-primary btn-large" ' +
                'onclick="ConceptsUI._launchPendingAfterConcepts()">Continue to Practice</button>';
            html += '<button class="btn btn-secondary" style="margin-top:8px;" ' +
                'onclick="ConceptsUI.backToTopics()">Back to Topics</button>';
        } else {
            html += '<button class="btn btn-primary btn-large" ' +
                'onclick="ConceptsUI.backToTopics()">Back to Topics</button>';
        }
        html += '</div>';

        document.getElementById("concepts-flashcard-area").innerHTML = html;

        var fill = document.getElementById("concepts-progress-fill");
        var counter = document.getElementById("concepts-counter");
        if (fill) fill.style.width = "100%";
        if (counter) counter.textContent = "Done!";
    },

    backToTopics: function() {
        document.getElementById("concepts-review-view").style.display = "none";
        document.getElementById("targeted-home").style.display = "block";
        document.getElementById("concepts-flashcard-area").innerHTML = "";
        // Clear selections and pending state
        ConceptsUI._selections = [];
        ConceptsUI._pendingAfterConcepts = { skills: [], exam: [] };
        // Rebuild tree to update progress pills
        ConceptsUI.buildTree();
    },

    /**
     * After a concepts review completes, launch remaining skills/exam selections.
     */
    _launchPendingAfterConcepts: function() {
        var pending = ConceptsUI._pendingAfterConcepts || { skills: [], exam: [] };
        ConceptsUI._pendingAfterConcepts = { skills: [], exam: [] };

        // Hide concepts review, show targeted question area
        document.getElementById("concepts-review-view").style.display = "none";
        document.getElementById("concepts-flashcard-area").innerHTML = "";

        if (pending.skills.length > 0 && pending.exam.length === 0) {
            document.getElementById("targeted-home").style.display = "none";
            document.getElementById("targeted-question-area").style.display = "block";
            ConceptsUI._launchCombinedSkills(pending.skills);
        } else if (pending.exam.length > 0 && pending.skills.length === 0) {
            ConceptsUI._launchCombinedExam(pending.exam);
        } else {
            // Both -- launch blended
            document.getElementById("targeted-home").style.display = "none";
            document.getElementById("targeted-question-area").style.display = "block";
            ConceptsUI._launchBlendedSkillsExam(pending.skills, pending.exam);
        }
    },

    // ================================================================
    // UTILITIES
    // ================================================================
    _shuffle: function(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    },

    _typeset: function(elementId) {
        if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
            var el = document.getElementById(elementId);
            if (el) MathJax.typesetPromise([el]).catch(function() {});
        }
    },

    _escHTML: function(s) {
        var d = document.createElement("div");
        d.textContent = s;
        return d.innerHTML;
    },

    _escAttr: function(s) {
        return s.replace(/'/g, "\\'").replace(/"/g, "&quot;").replace(/</g, "&lt;");
    },

    // ================================================================
    // TOGGLE HELPERS (for Targeted Revision config bar)
    // ================================================================
    _bindToggleGroup: function(groupId) {
        var group = document.getElementById(groupId);
        if (!group) return;
        var btns = group.querySelectorAll(".config-toggle");
        btns.forEach(function(btn) {
            btn.addEventListener("click", function() {
                btns.forEach(function(b) { b.setAttribute("aria-pressed", "false"); });
                btn.setAttribute("aria-pressed", "true");
            });
        });
    },

    _getToggleValue: function(groupId) {
        var group = document.getElementById(groupId);
        if (!group) return null;
        var active = group.querySelector('[aria-pressed="true"]');
        return active ? active.getAttribute("data-value") : null;
    },

    // ================================================================
    // MULTI-SELECT: toggle, track, floating bar
    // ================================================================

    /**
     * Check if a selection already exists.
     * @returns {number} index in _selections, or -1
     */
    _findSelection: function(topic, subtopic, pool) {
        for (var i = 0; i < ConceptsUI._selections.length; i++) {
            var s = ConceptsUI._selections[i];
            if (s.topic === topic && s.subtopic === subtopic && s.pool === pool) return i;
        }
        return -1;
    },

    /**
     * Return " cs-selected" if this item is in the selection list, else "".
     * Used during buildTree to preserve highlights across rebuilds.
     */
    _selClass: function(topic, subtopic, pool) {
        return ConceptsUI._findSelection(topic, subtopic || "", pool) >= 0
            ? " cs-selected" : "";
    },

    /**
     * Toggle a Concepts/Skills/Exam Qs button on or off.
     */
    toggleSelection: function(topic, subtopic, pool, btnEl) {
        var idx = ConceptsUI._findSelection(topic, subtopic, pool);
        if (idx >= 0) {
            // Deselect
            ConceptsUI._selections.splice(idx, 1);
            if (btnEl) btnEl.classList.remove("cs-selected");
        } else {
            // Select -- but check for topic/subtopic overlap:
            // If selecting a topic-level button, remove any subtopic-level
            // selections under the same topic+pool (and vice-versa)
            if (!subtopic) {
                // Selecting whole topic: remove subtopic selections for same pool
                ConceptsUI._selections = ConceptsUI._selections.filter(function(s) {
                    return !(s.topic === topic && s.subtopic && s.pool === pool);
                });
            } else {
                // Selecting subtopic: remove whole-topic selection for same pool
                ConceptsUI._selections = ConceptsUI._selections.filter(function(s) {
                    return !(s.topic === topic && !s.subtopic && s.pool === pool);
                });
            }
            ConceptsUI._selections.push({ topic: topic, subtopic: subtopic || "", pool: pool });
            if (btnEl) btnEl.classList.add("cs-selected");
        }
        // Re-sync all button highlights (handles overlap removal)
        ConceptsUI._syncButtonHighlights();
        ConceptsUI._updateSelectionBar();
    },

    /**
     * Sync cs-selected class on all buttons to match _selections state.
     */
    _syncButtonHighlights: function() {
        var container = document.getElementById("targeted-topic-tree");
        if (!container) return;
        var allBtns = container.querySelectorAll(".cs-btn");
        allBtns.forEach(function(btn) {
            // Determine which selection this button represents by its parent context
            var row = btn.closest(".cs-subtopic-row");
            var block = btn.closest(".cs-topic-block");
            if (!block) return;
            var topic = block.getAttribute("data-topic") || "";
            var subtopic = "";
            if (row) {
                // It's a subtopic button -- extract subtopic name from the row text
                var nameEl = row.querySelector(".cs-subtopic-name");
                if (nameEl) {
                    // Get text content minus any badge text
                    subtopic = nameEl.childNodes[0].textContent.trim();
                }
            }
            var pool = "";
            if (btn.classList.contains("cs-btn-concepts")) pool = "concepts";
            else if (btn.classList.contains("cs-btn-skills")) pool = "practice";
            else if (btn.classList.contains("cs-btn-exam")) pool = "original";
            if (!pool) return;

            var isSelected = ConceptsUI._findSelection(topic, subtopic, pool) >= 0;
            btn.classList.toggle("cs-selected", isSelected);
        });
    },

    /**
     * Update the floating selection bar visibility and count.
     */
    _updateSelectionBar: function() {
        var bar = document.getElementById("selection-bar");
        var countEl = document.getElementById("selection-bar-count");
        var tree = document.getElementById("targeted-topic-tree");
        var n = ConceptsUI._selections.length;

        if (n > 0) {
            if (bar) bar.style.display = "block";
            if (countEl) {
                // Build a summary like "2 topics \u00b7 Skills, Exam Qs"
                var poolLabels = { concepts: "Concepts", practice: "Skills", original: "Exam Qs" };
                var pools = {};
                ConceptsUI._selections.forEach(function(s) { pools[s.pool] = true; });
                var poolList = Object.keys(pools).map(function(k) { return poolLabels[k]; }).join(", ");
                countEl.textContent = n + " selected \u00b7 " + poolList;
            }
            if (tree) tree.classList.add("has-selection-bar");
        } else {
            if (bar) bar.style.display = "none";
            if (tree) tree.classList.remove("has-selection-bar");
        }
    },

    /**
     * Clear all selections.
     */
    clearSelections: function() {
        ConceptsUI._selections = [];
        ConceptsUI._syncButtonHighlights();
        ConceptsUI._updateSelectionBar();
    },

    /**
     * Launch a session from all current selections.
     * Groups by pool type:
     *  - concepts only  -> combined flashcard review
     *  - skills only    -> combined skills practice
     *  - exam qs only   -> combined exam session via SessionEngine
     *  - mixed          -> sequential: concepts first, then skills/exam blended
     */
    launchSelected: function() {
        if (ConceptsUI._selections.length === 0) return;

        // Hide the floating bar during sessions
        var bar = document.getElementById("selection-bar");
        if (bar) bar.style.display = "none";

        var conceptSels = [];
        var skillSels = [];
        var examSels = [];

        ConceptsUI._selections.forEach(function(s) {
            if (s.pool === "concepts") conceptSels.push(s);
            else if (s.pool === "practice") skillSels.push(s);
            else if (s.pool === "original") examSels.push(s);
        });

        // Store what comes after concepts (for sequential flow)
        ConceptsUI._pendingAfterConcepts = {
            skills: skillSels,
            exam: examSels
        };

        // Pure concepts
        if (conceptSels.length > 0 && skillSels.length === 0 && examSels.length === 0) {
            ConceptsUI._launchCombinedConcepts(conceptSels);
            return;
        }
        // Pure skills
        if (skillSels.length > 0 && conceptSels.length === 0 && examSels.length === 0) {
            ConceptsUI._launchCombinedSkills(skillSels);
            return;
        }
        // Pure exam
        if (examSels.length > 0 && conceptSels.length === 0 && skillSels.length === 0) {
            ConceptsUI._launchCombinedExam(examSels);
            return;
        }
        // Mixed: interleave concepts + skills in flashcard UI
        // If exam selections are also present, they run after via _pendingAfterConcepts
        ConceptsUI._pendingAfterConcepts = {
            skills: [],  // skills are now mixed in, not pending
            exam: examSels
        };
        ConceptsUI._launchMixedSession(conceptSels, skillSels);
    },

    /**
     * Launch a mixed session interleaving concepts and skills as flashcards.
     * Exam selections (if any) are stored in _pendingAfterConcepts.exam
     * and run after the mixed session completes.
     */
    _launchMixedSession: function(conceptSels, skillSels) {
        var queue = [];

        // Gather concept cards
        (conceptSels || []).forEach(function(s) {
            var concepts = s.subtopic ?
                ConceptsUI._getConceptsForSubtopic(s.topic, s.subtopic) :
                ConceptsUI._getConceptsForTopic(s.topic);
            concepts.forEach(function(c) {
                c._itemType = "concept";
                c._sourceTopic = s.subtopic || s.topic;
                queue.push(c);
            });
        });

        // Gather skill questions from ATOMISED_DATA
        if ((skillSels || []).length > 0 &&
            typeof ATOMISED_DATA !== "undefined" && ATOMISED_DATA.questions) {
            var seen = {};
            var skillPTs = [];
            skillSels.forEach(function(s) {
                var resolvedTopic = (typeof SkillsPractice !== "undefined" &&
                    SkillsPractice._topicAliases) ?
                    (SkillsPractice._topicAliases[s.topic] || s.topic) : s.topic;
                ATOMISED_DATA.questions.forEach(function(pt) {
                    var match = s.subtopic ?
                        (pt.subtopic === s.subtopic) :
                        (pt.topic === resolvedTopic);
                    if (match && !seen[pt.pt_id]) {
                        seen[pt.pt_id] = true;
                        skillPTs.push(pt);
                    }
                });
            });

            // Pick one question per PT and add as flashcard item
            skillPTs.forEach(function(pt) {
                var pool = (pt.medium && pt.medium.length) ? pt.medium :
                           (pt.easy && pt.easy.length) ? pt.easy :
                           (pt.hard && pt.hard.length) ? pt.hard : null;
                if (!pool) return;
                var q = pool[Math.floor(Math.random() * pool.length)];
                queue.push({
                    _itemType: "skill",
                    qid: q.qid,
                    q: q.q,
                    answer: q.a,
                    section: pt.concept || pt.subtopic || "",
                    subtopic: pt.subtopic || "",
                    diagram: null,
                    _pt_id: pt.pt_id,
                    _skill_name: pt.pt || ""
                });
            });
        }

        if (queue.length === 0) {
            alert("No questions available for the selected topics.");
            return;
        }

        // Shuffle everything together
        ConceptsUI._shuffle(queue);

        // Set up review state
        ConceptsUI._currentTopicKey = "__mixed__";
        ConceptsUI._currentSubtopicFilter = "";
        ConceptsUI._reviewQueue = queue;
        ConceptsUI._reviewIndex = 0;
        ConceptsUI._reviewToRevisit = [];
        ConceptsUI._insertCounter = 0;
        ConceptsUI._sessionNailed = 0;
        ConceptsUI._sessionRevise = 0;

        // Show review screen
        document.getElementById("targeted-home").style.display = "none";
        document.getElementById("concepts-review-view").style.display = "block";
        ConceptsUI._showCurrentCard();
    },

    /**
     * Launch combined concept flashcard review across multiple selections.
     */
    _launchCombinedConcepts: function(sels) {
        var allConcepts = [];
        sels.forEach(function(s) {
            var concepts;
            if (s.subtopic) {
                concepts = ConceptsUI._getConceptsForSubtopic(s.topic, s.subtopic);
            } else {
                concepts = ConceptsUI._getConceptsForTopic(s.topic);
            }
            concepts.forEach(function(c) {
                // Tag with source topic for display
                c._sourceTopic = s.subtopic || s.topic;
                allConcepts.push(c);
            });
        });

        if (allConcepts.length === 0) {
            alert("No concepts available for the selected topics.");
            return;
        }

        // Use the existing review engine with the combined pool
        ConceptsUI._currentTopicKey = sels.length === 1 ? sels[0].topic : "__combined__";
        ConceptsUI._currentSubtopicFilter = sels.length === 1 ? sels[0].subtopic : "";

        // Categorise by progress (same as startConceptReview)
        var needsReview = [], nailed = [], fresh = [];
        allConcepts.forEach(function(c) {
            var p = ConceptsUI._progressData[c.qid];
            if (!p) fresh.push(c);
            else if (!p.nailed) needsReview.push(c);
            else nailed.push(c);
        });

        ConceptsUI._shuffle(needsReview);
        ConceptsUI._shuffle(fresh);
        ConceptsUI._shuffle(nailed);

        ConceptsUI._reviewQueue = [].concat(needsReview, fresh, nailed);
        ConceptsUI._reviewIndex = 0;
        ConceptsUI._reviewToRevisit = [];
        ConceptsUI._insertCounter = 0;
        ConceptsUI._sessionNailed = 0;
        ConceptsUI._sessionRevise = 0;

        // Switch UI
        document.getElementById("targeted-home").style.display = "none";
        document.getElementById("concepts-review-view").style.display = "block";
        ConceptsUI._showCurrentCard();
    },

    /**
     * Launch combined skills practice across multiple selections.
     */
    _launchCombinedSkills: function(sels) {
        if (typeof SkillsPractice === "undefined") {
            alert("Skills practice module not loaded.");
            return;
        }

        // Switch UI
        var home = document.getElementById("targeted-home");
        var qArea = document.getElementById("targeted-question-area");
        if (home) home.style.display = "none";
        if (qArea) qArea.style.display = "block";

        // For single selection, use existing path
        if (sels.length === 1) {
            SkillsPractice.start(sels[0].topic, sels[0].subtopic || undefined);
            return;
        }

        // Multiple selections: collect all PTs from each selection
        if (typeof ATOMISED_DATA === "undefined" || !ATOMISED_DATA.questions) {
            qArea.innerHTML = '<div class="session-empty"><p>Skills data not loaded.</p>' +
                '<button class="btn btn-primary" onclick="ConceptsUI.backToTopicsFromSession()">Back</button></div>';
            return;
        }

        var allPTs = [];
        var seen = {};
        sels.forEach(function(s) {
            var resolvedTopic = SkillsPractice._topicAliases ?
                (SkillsPractice._topicAliases[s.topic] || s.topic) : s.topic;
            var pts = [];
            if (s.subtopic) {
                pts = (ATOMISED_DATA.getForSubtopic ? ATOMISED_DATA.getForSubtopic(s.subtopic) : null) ||
                      (ATOMISED_DATA.bySubtopic ? ATOMISED_DATA.bySubtopic[s.subtopic] : null) || [];
                if (pts.length === 0) {
                    ATOMISED_DATA.questions.forEach(function(pt) {
                        if (pt.subtopic === s.subtopic) pts.push(pt);
                    });
                }
            } else {
                pts = (ATOMISED_DATA.getForTopic ? ATOMISED_DATA.getForTopic(resolvedTopic) : null) ||
                      (ATOMISED_DATA.byTopic ? ATOMISED_DATA.byTopic[resolvedTopic] : null) || [];
                if (pts.length === 0) {
                    ATOMISED_DATA.questions.forEach(function(pt) {
                        if (pt.topic === resolvedTopic) pts.push(pt);
                    });
                }
            }
            pts.forEach(function(pt) {
                if (!seen[pt.pt_id]) {
                    seen[pt.pt_id] = true;
                    allPTs.push(pt);
                }
            });
        });

        if (allPTs.length === 0) {
            qArea.innerHTML = '<div class="session-empty"><p>No skills questions found.</p>' +
                '<button class="btn btn-primary" onclick="ConceptsUI.backToTopicsFromSession()">Back</button></div>';
            return;
        }

        // Use SkillsPractice with the combined PT list
        SkillsPractice._topicLabel = sels.length + " topics (combined)";
        SkillsPractice._pts = allPTs;
        SkillsPractice.active = true;
        SkillsPractice._questionsServed = 0;
        SkillsPractice._questionsCorrect = 0;
        SkillsPractice._questionsIncorrect = 0;
        SkillsPractice._sessionGoal = 10;
        SkillsPractice._startTime = new Date();
        SkillsPractice._answerRevealed = false;
        SkillsPractice._currentItem = null;

        SkillsPractice._loadMasteryForPTs(allPTs).then(function() {
            SkillsPractice._buildQueue();
            if (SkillsPractice._queue.length === 0) {
                qArea.innerHTML = '<div class="session-empty"><p>All skills mastered!</p>' +
                    '<button class="btn btn-primary" onclick="ConceptsUI.backToTopicsFromSession()">Back</button></div>';
                return;
            }
            SkillsPractice._serveNext();
        });
    },

    /**
     * Launch combined exam question session across multiple selections.
     */
    _launchCombinedExam: function(sels) {
        var home = document.getElementById("targeted-home");
        var qArea = document.getElementById("targeted-question-area");
        if (home) home.style.display = "none";
        if (qArea) qArea.style.display = "block";
        StudyUI._activeAreaId = "targeted-question-area";

        // Read from targeted home toggles
        var answerMethod = ConceptsUI._getToggleValue("targeted-answer-group") || "paper";
        var markingMode = ConceptsUI._getToggleValue("targeted-marking-group") || "instant";

        if (answerMethod === "stylus" && typeof WrittenMode !== "undefined" &&
            !WrittenMode.hasMarkingAPI()) {
            alert("Written Mode is not enabled for this class.");
            if (home) home.style.display = "block";
            if (qArea) qArea.style.display = "none";
            return;
        }

        // Build list of topic/subtopic filters
        var filters = sels.map(function(s) { return s.subtopic || s.topic; });

        SessionEngine.start("revision", null, {
            goal: markingMode === "exam" ? 50 : 10,
            sectionFilter: "mix",
            wrongListOnly: false,
            answerMethod: answerMethod,
            markingMode: markingMode,
            poolFilter: "original"
        }).then(function() {
            // Apply multi-topic filter
            SessionEngine._applyMultiTopicFilter(filters);

            var totalAvailable = SessionEngine.wrongList.length +
                SessionEngine.freshList.length +
                SessionEngine.improvingList.length +
                SessionEngine.reviewList.length;

            if (totalAvailable === 0) {
                qArea.innerHTML = '<div class="session-empty">' +
                    '<p>No Exam Questions available for the selected topics.</p>' +
                    '<button class="btn btn-primary" onclick="ConceptsUI.backToTopicsFromSession()">Back</button></div>';
                return;
            }
            StudyUI._nextReminderMinutes = 30;
            StudyUI.loadNextQuestion();
        });
    },

    /**
     * Launch blended skills + exam session (when no concepts selected).
     */
    _launchBlendedSkillsExam: function(skillSels, examSels) {
        // For now, serve exam questions first (they use the session engine);
        // if only skills, use skills engine.
        if (examSels.length > 0) {
            // Combine all sels for exam engine, skills will be noted
            ConceptsUI._launchCombinedExam(examSels);
            // TODO: interleave skills in future iteration
        } else {
            ConceptsUI._launchCombinedSkills(skillSels);
        }
    },

    // ================================================================
    // SKILLS / EXAM Qs SESSION LAUNCH
    // ================================================================
    /**
     * Launch a targeted revision session for Skills (atomised practice)
     * or Exam Questions (original exam pool).
     *
     * @param {string} topic    - topic name from TAXONOMY
     * @param {string} subtopic - subtopic name, or "" for whole topic
     * @param {string} pool     - "practice" for Skills, "original" for Exam Qs
     */
    startTargetedSession: function(topic, subtopic, pool) {
        // Determine filter string and level for SessionEngine
        var filter = subtopic || topic;
        var level = subtopic ? "subtopic" : "topic";

        // Read from targeted home toggles
        var answerMethod = ConceptsUI._getToggleValue("targeted-answer-group") || "paper";
        var markingMode = ConceptsUI._getToggleValue("targeted-marking-group") || "instant";

        // Check marking API if stylus mode
        if (answerMethod === "stylus" && typeof WrittenMode !== "undefined" &&
            !WrittenMode.hasMarkingAPI()) {
            alert("Written Mode is not enabled for this class. Your teacher needs to add an API key to the schedule configuration.");
            return;
        }

        // Switch UI: hide the topic tree, show the question area
        var home = document.getElementById("targeted-home");
        var qArea = document.getElementById("targeted-question-area");
        if (home) home.style.display = "none";
        if (qArea) qArea.style.display = "block";

        // Point StudyUI at the targeted question area
        StudyUI._activeAreaId = "targeted-question-area";

        var goal = markingMode === "exam" ? 50 : 10;

        SessionEngine.start("revision", filter, {
            goal: goal,
            sectionFilter: "mix",
            wrongListOnly: false,
            answerMethod: answerMethod,
            markingMode: markingMode,
            poolFilter: pool
        }).then(function() {
            var totalAvailable = SessionEngine.wrongList.length +
                SessionEngine.freshList.length +
                SessionEngine.improvingList.length +
                SessionEngine.reviewList.length;

            if (totalAvailable === 0) {
                var poolLabel = pool === "practice" ? "Skills" : "Exam Questions";
                qArea.innerHTML =
                    '<div class="session-empty">' +
                    '<p>No ' + poolLabel + ' available for <strong>' +
                    ConceptsUI._escHTML(filter) + '</strong>.</p>' +
                    '<button class="btn btn-primary" onclick="ConceptsUI.backToTopicsFromSession()">Back to Topics</button>' +
                    '</div>';
                return;
            }
            StudyUI._nextReminderMinutes = 30;
            StudyUI.loadNextQuestion();
        });
    },

    /**
     * Return to topic tree from a targeted session.
     */
    backToTopicsFromSession: function() {
        var home = document.getElementById("targeted-home");
        var qArea = document.getElementById("targeted-question-area");
        if (home) home.style.display = "block";
        if (qArea) { qArea.style.display = "none"; qArea.innerHTML = ""; }
        StudyUI._activeAreaId = "question-area";
        // Clear selections
        ConceptsUI._selections = [];
        ConceptsUI._pendingAfterConcepts = { skills: [], exam: [] };
        ConceptsUI.buildTree();
    }
};
