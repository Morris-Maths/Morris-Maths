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

    // ---- Canonical taxonomy (topics -> subtopics) ----
    // This is the display taxonomy for the Targeted Revision tree.
    // It maps topic names to arrays of subtopic names.
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

            html += '<div class="cs-topic-block" data-topic="' + ConceptsUI._escAttr(topic) + '">';

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
            html += '<button class="cs-btn cs-btn-concepts" ' +
                (hasConcepts ? 'onclick="event.stopPropagation(); ConceptsUI.startConceptReview(\'' +
                ConceptsUI._escAttr(topic) + '\', \'\')"' :
                'disabled title="Coming soon"') + '>Concepts</button>';
            html += '<button class="cs-btn cs-btn-skills" onclick="event.stopPropagation(); ConceptsUI.startTargetedSession(\'' +
                ConceptsUI._escAttr(topic) + '\', \'\', \'practice\')">Skills</button>';
            html += '<button class="cs-btn cs-btn-exam" onclick="event.stopPropagation(); ConceptsUI.startTargetedSession(\'' +
                ConceptsUI._escAttr(topic) + '\', \'\', \'original\')">Exam Qs</button>';
            html += '</div>';
            html += '</div>';

            // Subtopics (collapsed)
            html += '<div class="cs-subtopic-list">';
            taxonomy[topic].forEach(function(sub) {
                var subQids = ConceptsUI._getQidsForSubtopic(topic, sub);
                var subRate = ConceptsUI._calcSuccessRate(subQids);
                var hasSubConcepts = subQids.length > 0;
                var subReviewCount = ConceptsUI._countNeedReview(subQids);

                html += '<div class="cs-subtopic-row">';
                html += '<span class="cs-subtopic-name">' + ConceptsUI._escHTML(sub);
                if (subReviewCount > 0) {
                    html += '<span class="cs-review-badge">' + subReviewCount + '</span>';
                }
                html += '</span>';
                html += '<div class="cs-topic-actions">';
                html += ConceptsUI._pillHTML(subRate);
                html += '<button class="cs-btn cs-btn-concepts" ' +
                    (hasSubConcepts ? 'onclick="ConceptsUI.startConceptReview(\'' +
                    ConceptsUI._escAttr(topic) + '\', \'' +
                    ConceptsUI._escAttr(sub) + '\')"' :
                    'disabled title="No concepts yet"') + '>Concepts</button>';
                html += '<button class="cs-btn cs-btn-skills" onclick="ConceptsUI.startTargetedSession(\'' +
                    ConceptsUI._escAttr(topic) + '\', \'' +
                    ConceptsUI._escAttr(sub) + '\', \'practice\')">Skills</button>';
                html += '<button class="cs-btn cs-btn-exam" onclick="ConceptsUI.startTargetedSession(\'' +
                    ConceptsUI._escAttr(topic) + '\', \'' +
                    ConceptsUI._escAttr(sub) + '\', \'original\')">Exam Qs</button>';
                html += '</div>';
                html += '</div>';
            });
            html += '</div>';

            html += '</div>';
        });

        container.innerHTML = html;
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
        html += '<div class="cs-flashcard-section">' + ConceptsUI._escHTML(card.section) + '</div>';
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

        html += '<div class="cs-flashcard-answer" id="cs-card-answer">';
        html += '<div class="cs-flashcard-answer-content">' + card.answer + '</div>';
        html += '</div>';
        html += '</div>';

        html += '<button class="cs-reveal-btn" id="cs-reveal-btn" ' +
            'onclick="ConceptsUI.revealAnswer()">Reveal Answer</button>';

        html += '<div class="cs-rating-buttons" id="cs-rating-buttons">';
        html += '<button class="cs-rating-btn cs-btn-nailed" ' +
            'onclick="ConceptsUI.rateCard(true)">Nailed it!</button>';
        html += '<button class="cs-rating-btn cs-btn-revise-again" ' +
            'onclick="ConceptsUI.rateCard(false)">Need to revise again later</button>';
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

        // Update progress
        if (!ConceptsUI._progressData[card.qid]) {
            ConceptsUI._progressData[card.qid] = { nailed: false, attempts: 0 };
        }
        ConceptsUI._progressData[card.qid].attempts++;
        ConceptsUI._progressData[card.qid].nailed = nailed;
        ConceptsUI._progressData[card.qid].lastSeen = Date.now();

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
            var allConcepts = ConceptsUI._currentSubtopicFilter ?
                ConceptsUI._getConceptsForSubtopic(
                    ConceptsUI._currentTopicKey, ConceptsUI._currentSubtopicFilter) :
                ConceptsUI._getConceptsForTopic(ConceptsUI._currentTopicKey);
            var revisitCard = null;
            for (var i = 0; i < allConcepts.length; i++) {
                if (allConcepts[i].qid === revisitQid) { revisitCard = allConcepts[i]; break; }
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
        var label = ConceptsUI._currentSubtopicFilter || ConceptsUI._currentTopicKey;

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
        html += '<button class="btn btn-primary btn-large" ' +
            'onclick="ConceptsUI.backToTopics()">Back to Topics</button>';
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
        // Rebuild tree to update progress pills
        ConceptsUI.buildTree();
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

        // Read toggle settings
        var sectionFilter = ConceptsUI._getToggleValue("targeted-section-group") || "mix";
        var answerMethod = ConceptsUI._getToggleValue("targeted-answer-group") || "paper";

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

        var goal = 10;

        SessionEngine.start("revision", filter, {
            goal: goal,
            sectionFilter: sectionFilter,
            wrongListOnly: false,
            answerMethod: answerMethod,
            markingMode: "instant",
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
        ConceptsUI.buildTree();
    }
};
