// ============================================================================
// STUDY UI MODULE
// Handles the study session interface: question display, solution reveal,
// self-assessment, session summary.
// ============================================================================
var StudyUI = {
    currentFilename: null,
    currentQuestion: null,
    partResults: {},
    guidedAccessedThisQuestion: false,
    assessedParts: 0,
    totalParts: 0,
    _nextReminderMinutes: 30,   // first reminder at 30 min, then +20 each time
    _activeAreaId: "question-area",  // overridden to "revise-question-area" for revision mode

    /**
     * Initialise study UI event listeners.
     */
    init: function() {
        // Start session button
        var startBtn = document.getElementById("start-session-btn");
        if (startBtn) {
            startBtn.addEventListener("click", function() {
                StudyUI.startSession();
            });
        }

        // Initial question estimate
        setTimeout(function() {
            StudyUI.updateQuestionEstimate();
        }, 200);
    },

    /**
     * Start a study session using the session config panel values.
     */
    startSession: function() {
        // Ensure we're targeting the study tab's question area
        StudyUI._activeAreaId = "question-area";

        // Read section filter
        var sectionFilter = "mix";
        var secGroup = document.getElementById("section-filter-group");
        if (secGroup) {
            var activeBtn = secGroup.querySelector('[aria-pressed="true"]');
            if (activeBtn) sectionFilter = activeBtn.getAttribute("data-value");
        }

        // Read focus filter (wrong list only)
        var wrongListOnly = false;
        var focusGroup = document.getElementById("focus-filter-group");
        if (focusGroup) {
            var focusBtn = focusGroup.querySelector('[aria-pressed="true"]');
            if (focusBtn) wrongListOnly = focusBtn.getAttribute("data-value") === "wrongonly";
        }

        // Read answer method
        var answerMethod = "paper";
        var answerGroup = document.getElementById("study-answer-group");
        if (answerGroup) {
            var ansBtn = answerGroup.querySelector('[aria-pressed="true"]');
            if (ansBtn) answerMethod = ansBtn.getAttribute("data-value");
        }

        // Read marking mode
        var markingMode = "instant";
        var markingGroup = document.getElementById("study-marking-mode-group");
        if (markingGroup) {
            var markBtn = markingGroup.querySelector('[aria-pressed="true"]');
            if (markBtn) markingMode = markBtn.getAttribute("data-value");
        }

        // Check marking API if stylus mode
        if (answerMethod === "stylus" && !WrittenMode.hasMarkingAPI()) {
            alert("Written Mode is not enabled for this class. Your teacher needs to add an API key to the schedule configuration.");
            return;
        }

        // Calculate goal based on mode
        var goal;
        var examMarks = 0;
        if (markingMode === "exam") {
            var examSelect = document.getElementById("exam-marks-select");
            examMarks = examSelect ? parseInt(examSelect.value, 10) : 50;
            // Set a high goal so SessionEngine doesn't stop early
            // We manage question count via mark accumulation in ExamMode
            goal = 50;
        } else {
            var timeInput = document.getElementById("session-time-input");
            var minutes = timeInput ? parseInt(timeInput.value, 10) : 15;
            goal = StudyUI.estimateQuestions(minutes, sectionFilter);
        }

        // Edge case: check if any questions are available at all
        var availableKeys = Object.keys(QuestionEngine.getAvailableQuestions());
        if (availableKeys.length === 0) {
            var questionArea = document.getElementById(StudyUI._activeAreaId);
            if (questionArea) {
                questionArea.style.display = "block";
                questionArea.innerHTML =
                    '<div class="empty-session-msg">' +
                    '<div class="empty-session-icon">' + SYMBOLS.LOCK + '</div>' +
                    '<h3>No Questions Available Yet</h3>' +
                    '<p>No problem types have been unlocked by the schedule. ' +
                    'Check back later or ask your teacher for an update file.</p>' +
                    '<button class="btn btn-primary" ' +
                    'onclick="StudyUI.returnToHome()">Back</button></div>';
                var startScreen = document.querySelector(".study-start-screen");
                if (startScreen) startScreen.style.display = "none";
            }
            return;
        }

        // Hide start screen, show question area
        var startScreen = document.querySelector(".study-start-screen");
        var questionArea = document.getElementById(StudyUI._activeAreaId);
        if (startScreen) startScreen.style.display = "none";
        if (questionArea) questionArea.style.display = "block";

        SessionEngine.start("study", null, {
            goal: goal,
            sectionFilter: sectionFilter,
            wrongListOnly: wrongListOnly,
            answerMethod: answerMethod,
            markingMode: markingMode
        }).then(function() {
            StudyUI._nextReminderMinutes = 30; // reset duration reminder

            // If exam mode, start the exam timer
            if (markingMode === "exam") {
                ExamMode.start(examMarks);
            }

            StudyUI.loadNextQuestion();
        });
    },

    /**
     * Estimate how many questions fit in a given number of minutes.
     * Uses ~1 minute per mark. Considers section filter.
     */
    estimateQuestions: function(minutes, sectionFilter) {
        var available = QuestionEngine.getAvailableQuestions();
        var keys = Object.keys(available);

        // Filter by section if needed
        if (sectionFilter && sectionFilter !== "mix") {
            keys = keys.filter(function(k) {
                var q = available[k];
                return !q.sectionName || q.sectionName === sectionFilter;
            });
        }

        if (keys.length === 0) return Math.max(1, Math.round(minutes / 5));

        // Calculate average marks per question
        var totalMarks = 0;
        keys.forEach(function(k) {
            totalMarks += (available[k].totalMarks || 5);
        });
        var avgMarks = totalMarks / keys.length;

        // ~1 minute per mark
        var estimated = Math.round(minutes / avgMarks);
        // Clamp to at least 1 and at most available questions
        return Math.max(1, Math.min(estimated, keys.length));
    },

    /**
     * Update the question estimate display on the session config panel.
     */
    updateQuestionEstimate: function() {
        var timeInput = document.getElementById("session-time-input");
        var estimateEl = document.getElementById("session-question-estimate");
        if (!timeInput || !estimateEl) return;

        var minutes = parseInt(timeInput.value, 10);

        // Read section filter
        var sectionFilter = "mix";
        var secGroup = document.getElementById("section-filter-group");
        if (secGroup) {
            var activeBtn = secGroup.querySelector('[aria-pressed="true"]');
            if (activeBtn) sectionFilter = activeBtn.getAttribute("data-value");
        }

        var count = StudyUI.estimateQuestions(minutes, sectionFilter);
        estimateEl.textContent = "~" + count + " question" + (count !== 1 ? "s" : "");
    },

    /**
     * Update the exam time calculation display based on selected marks.
     */
    updateExamTimeCalc: function() {
        var select = document.getElementById("exam-marks-select");
        var calcEl = document.getElementById("exam-time-calc");
        if (!select || !calcEl) return;

        var marks = parseInt(select.value, 10);
        var secs = ExamMode.calcTime(marks);
        var mins = Math.round(secs / 60);
        calcEl.textContent = "Time allowed: ~" + mins + " min";
    },

    /**
     * Load and display the next question.
     */
    loadNextQuestion: function() {
        // In exam mode, skip result recording (ExamMode handles it)
        var recordPromise = ExamMode.active ?
            Promise.resolve() : StudyUI._recordResultsIfNeeded();

        recordPromise.then(function() {
            // Check if session goal reached (not applicable in exam mode)
            if (!ExamMode.active) {
                var plannedCount = SessionEngine.totalCount - SessionEngine.bonusCount;
                if (plannedCount >= SessionEngine.sessionGoal) {
                    StudyUI.showSessionSummary();
                    return;
                }
            }

            SessionEngine.getNext().then(function(result) {
                if (!result) {
                    if (ExamMode.active) {
                        ExamMode.endTest();
                    } else {
                        StudyUI.showSessionSummary();
                    }
                    return;
                }
                StudyUI.renderQuestion(result);
            });
        });
    },

    /**
     * Record results for the current question if not already recorded.
     * Called when moving to next question, another-like-this, or session end.
     * @private
     */
    _recordResultsIfNeeded: function() {
        if (StudyUI._resultsRecorded || !StudyUI.currentFilename) {
            return Promise.resolve();
        }
        var assessed = Object.keys(StudyUI.partResults).length;
        if (assessed < StudyUI.totalParts) {
            return Promise.resolve(); // not all parts assessed yet
        }
        StudyUI._resultsRecorded = true;
        return SessionEngine.recordResults(
            StudyUI.currentFilename, StudyUI.partResults
        );
    },

    /**
     * Render a question to the question area.
     */
    renderQuestion: function(questionInfo) {
        StudyUI.currentFilename = questionInfo.filename;
        StudyUI.currentQuestion = questionInfo.questionData;
        StudyUI.partResults = {};
        StudyUI.guidedAccessedThisQuestion = false;
        StudyUI.assessedParts = 0;
        StudyUI._resultsRecorded = false;
        StudyUI.totalParts = questionInfo.questionData.parts ?
            questionInfo.questionData.parts.length : 0;

        // Track this question in exam mode (for previous/next navigation)
        if (ExamMode.active && ExamMode.state === "running") {
            var idx = ExamMode.currentExamIndex;
            if (!ExamMode.examQuestions[idx]) {
                ExamMode.examQuestions[idx] = {
                    questionData: questionInfo.questionData,
                    filename: questionInfo.filename
                };
            }
        }

        var area = document.getElementById(StudyUI._activeAreaId);
        if (!area) return;

        var q = questionInfo.questionData;
        var html = "";

        // Question header (no separate progress bar — counter is inline in header)
        var isRemediation = questionInfo.sourceList === "wrong";
        html += '<div class="question-card' + (isRemediation ? ' question-card-remediation' : '') + '">';
        if (isRemediation) {
            html += '<div class="remediation-banner">' +
                '<span class="remediation-icon">' + SYMBOLS.RETRY + '</span>' +
                '<span class="remediation-text">Chosen based on questions you have struggled with before</span>' +
                '</div>';
        }
        html += '<div class="question-stem-sticky">';
        html += '<div class="question-header">';

        // LEFT side: question ref + badges all inline
        html += '<div class="question-header-left">';
        var refParts = [];
        if (q.sourceName) refParts.push(q.sourceName);
        if (q.year) refParts.push(q.year);
        if (q.sectionName) refParts.push(q.sectionName);
        var refPrefix = refParts.length > 0 ? refParts.join(' ') + ' \u2014 ' : '';
        var refText = refPrefix + (q.questionReference || questionInfo.filename || 'Question');
        html += '<h3 class="question-ref">' +
            StudyUI._escapeHtml(refText) + '</h3>';
        // Badges inline right after ref
        if (q.sectionName) {
            html += '<span class="badge badge-section">' +
                StudyUI._escapeHtml(q.sectionName) + '</span>';
        }
        html += '<span class="badge badge-marks">' + (q.totalMarks || 0) + ' marks</span>';
        if (q.difficultyRating) {
            var diffClass = "badge-diff-" + (q.difficultyRating || "average").toLowerCase()
                .replace(/ /g, "").replace("very", "v");
            html += '<span class="badge ' + diffClass + '">' +
                StudyUI._escapeHtml(q.difficultyRating) + '</span>';
        }
        html += '</div>'; // .question-header-left

        // RIGHT side: question counter + prev/next nav (always shown)
        html += '<div class="question-header-right">';
        if (ExamMode.active) {
            html += '<span class="q-counter-text" id="exam-q-counter">Q ' +
                (ExamMode.currentExamIndex + 1) + '</span>';
            html += '<button class="btn btn-icon q-nav-btn" id="exam-prev-btn" title="Previous question">' +
                '\u2039</button>';
            html += '<button class="btn btn-icon q-nav-btn" id="exam-next-btn" title="Next question">' +
                '\u203A</button>';
        } else {
            var plannedNum = questionInfo.questionNumber - (SessionEngine.bonusCount || 0);
            var counterLabel = questionInfo.isBonus ?
                (SYMBOLS.LIGHTNING + ' Bonus') :
                ('Q ' + plannedNum + '/' + questionInfo.sessionGoal);
            html += '<span class="q-counter-text">' + counterLabel + '</span>';
        }
        html += '</div>'; // .question-header-right

        html += '</div>'; // .question-header

        // Question stimulus
        // Track images rendered inline via [IMAGE:] to avoid duplicating with diagramPlaceholders
        var inlineRenderedImages = {};
        if (q.questionStimulus) {
            var stimImages = StudyUI._extractImageRefs(q.questionStimulus);
            stimImages.forEach(function(f) { inlineRenderedImages[f] = true; });
            html += '<div class="question-stimulus">' +
                StudyUI._renderSolutionText(q.questionStimulus, q._pool) + '</div>';
        }

        // Diagrams (question-level: stem diagrams only from diagramPlaceholders)
        var qDiagrams = (q.diagramPlaceholders && q.diagramPlaceholders.question) || [];
        var stemDiagrams = qDiagrams.filter(function(d) {
            // Skip images already rendered inline in stimulus
            if (inlineRenderedImages[d]) return false;
            // Stem diagrams contain "PartStem" or "_Stem", or have no "Part" reference at all
            return d.indexOf("PartStem") !== -1 || d.indexOf("_Stem") !== -1 ||
                   d.indexOf("Part") === -1;
        });
        if (stemDiagrams.length > 0) {
            html += '<div class="question-diagrams">';
            stemDiagrams.forEach(function(diagFile) {
                var imgPath = StudyUI._getDiagramPath(diagFile, q._pool);
                html += '<img src="' + StudyUI._escapeHtml(imgPath) +
                    '" class="question-diagram" alt="Diagram" ' +
                    'onerror="this.style.display=\'none\'">';
            });
            html += '</div>';
        }
        html += '</div>'; // close .question-stem-sticky

        // Parts
        if (q.parts) {
            q.parts.forEach(function(part, idx) {
                html += '<div class="question-part" data-part-index="' + idx + '">';
                html += '<div class="part-header">';
                html += '<span class="part-label">(' + StudyUI._escapeHtml(part.partLabel) +
                    ')</span>';
                html += '<span class="part-marks">[' + part.partMarks + ' mark' +
                    (part.partMarks !== 1 ? 's' : '') + ']</span>';
                html += '</div>';
                html += '<div class="part-text">' +
                    StudyUI._renderSolutionText(part.questionText, q._pool) + '</div>';

                // Track images rendered inline in this part's questionText
                var partInlineImages = StudyUI._extractImageRefs(part.questionText);

                // Part-level diagrams (from diagramPlaceholders + diagramsNeeded)
                var partLabel = part.partLabel;
                var partDiags = qDiagrams.filter(function(d) {
                    // Skip images already rendered inline in questionText
                    if (partInlineImages.indexOf(d) !== -1) return false;
                    // Match diagrams referencing this part, e.g. "Parta)_IMG" or "Parta)Stem"
                    // but exclude stem-only diagrams already shown above
                    if (d.indexOf("PartStem") !== -1) return false;
                    if (d.indexOf("_Stem") !== -1 && d.indexOf("Part" + partLabel) === -1) return false;
                    return d.indexOf("Part" + partLabel + ")") !== -1 ||
                           d.indexOf("Part" + partLabel + "_") !== -1;
                });
                // Also include part.diagramsNeeded.placeholders (rare but exists)
                var partPlaceholders = (part.diagramsNeeded && part.diagramsNeeded.placeholders) || [];
                partPlaceholders.forEach(function(p) {
                    if (partDiags.indexOf(p) === -1) partDiags.push(p);
                });

                // Detect draw-on parts (sketch/graph/table with image background)
                var isDrawOn = SessionEngine.answerMethod === "stylus" &&
                    StudyUI._isDrawOnPart(part, q);
                var drawOnImage = isDrawOn ? StudyUI._getDrawOnImage(part, q) : null;

                // For draw-on parts in stylus mode, suppress the diagram that goes
                // onto the canvas (it will be loaded as the canvas background instead)
                var diagramsToShow = partDiags;
                if (drawOnImage) {
                    diagramsToShow = partDiags.filter(function(d) {
                        return d !== drawOnImage;
                    });
                }

                if (diagramsToShow.length > 0) {
                    html += '<div class="part-diagrams">';
                    diagramsToShow.forEach(function(diagFile) {
                        var dPath = StudyUI._getDiagramPath(diagFile, q._pool);
                        html += '<img src="' + StudyUI._escapeHtml(dPath) +
                            '" class="question-diagram" alt="Diagram" ' +
                            'onerror="this.style.display=\'none\'">';
                    });
                    html += '</div>';
                }

                // STYLUS MODE: add canvas row inside each part (for both instant and exam)
                if (SessionEngine.answerMethod === "stylus") {
                    var bgUrl = drawOnImage
                        ? StudyUI._getDiagramPath(drawOnImage, q._pool)
                        : null;
                    html += WrittenMode.renderCanvasRow(part.partLabel, part.partMarks, bgUrl);
                }

                // Inline solution placeholder (filled by showSolution)
                html += '<div class="part-solution-inline" id="part-sol-' + idx +
                    '" style="display:none;"></div>';

                html += '</div>';
            });
        }

        if (ExamMode.active) {
            // EXAM MODE: show exam bottom bar (both stylus and paper)
            html += ExamMode.renderBottomBar();

        } else if (SessionEngine.answerMethod === "stylus") {
            // INSTANT STYLUS MODE: sticky mark bar
            html += '<div class="wm-mark-area" id="wm-mark-area">';
            html += '<div class="wm-mark-bar-inner">';
            html += '<div class="wm-timer wm-hidden" id="wm-timer">';
            html += '<span class="wm-timer-icon">\u23F0</span>';
            html += '<span class="wm-timer-display" id="wm-timer-display">0:00</span>';
            html += '</div>';
            html += '<button class="wm-btn-mark" id="wm-mark-btn" disabled>';
            html += '\u2713 Mark My Answer</button>';
            html += '<span class="wm-mark-hint" id="wm-mark-hint">';
            html += 'Write your answer above</span>';
            html += '</div></div>';

            // Results container (hidden until marking complete)
            html += '<div class="wm-results-container wm-hidden" id="wm-results-container"></div>';

            // Next actions (hidden until marking complete)
            html += '<div class="wm-next-actions wm-hidden" id="wm-next-actions">';
            html += '<button class="btn btn-primary btn-large" id="wm-next-question-btn">' +
                'Next Question ' + SYMBOLS.ARROW_RIGHT + '</button>';
            html += '<button class="btn btn-retry btn-large" id="wm-another-btn">' +
                SYMBOLS.LIGHTNING + ' Another like this</button>';
            html += '<button class="btn btn-secondary" id="wm-end-session-btn">' +
                'End Session</button>';
            html += '</div>';

        } else {
            // INSTANT PAPER MODE: original flow
            html += '<div class="show-solution-area">';
            html += '<p class="solution-prompt">Work through this question on paper, ' +
                'then check your answer.</p>';
            html += '<button class="btn btn-primary btn-large" id="show-solution-btn">' +
                'I\'ve finished ' + SYMBOLS.ARROW_RIGHT + ' Show Solution</button>';
            html += '</div>';
        }

        html += '</div>'; // .question-card

        // Solution area (hidden initially)
        html += '<div id="solution-area" style="display:none;"></div>';

        // Session control
        html += '<div class="session-controls" id="session-controls" style="display:none;">';
        html += '<button class="btn btn-secondary" id="end-session-btn">End Session</button>';
        html += '</div>';

        area.innerHTML = html;

        // EXAM MODE: bind exam buttons + init canvases if stylus
        if (ExamMode.active) {
            // Init canvases for stylus mode (no per-question timer in exam mode)
            if (SessionEngine.answerMethod === "stylus") {
                setTimeout(function() {
                    WrittenMode.initCanvasesForQuestion(q);
                }, 50);
            }

            // Bind exam Next Question button
            var examNextBtn = document.getElementById("exam-next-btn");
            if (examNextBtn) {
                examNextBtn.addEventListener("click", function() {
                    ExamMode.nextQuestion();
                });
            }

            // Bind exam Previous Question button
            var examPrevBtn = document.getElementById("exam-prev-btn");
            if (examPrevBtn) {
                examPrevBtn.addEventListener("click", function() {
                    ExamMode.previousQuestion();
                });
            }

            // Bind exam End Test button
            var examEndBtn = document.getElementById("exam-end-btn");
            if (examEndBtn) {
                examEndBtn.addEventListener("click", function() {
                    if (confirm("End the test now? Your answers will be marked.")) {
                        ExamMode.snapshotCurrentQuestion();
                        ExamMode.endTest();
                    }
                });
            }

            // Update the question counter display
            var counterEl = document.getElementById("exam-q-counter");
            if (counterEl) {
                var qNum = ExamMode.currentExamIndex + 1;
                var totalVisited = ExamMode.examQuestions.length || qNum;
                counterEl.textContent = "Q " + qNum + " of " + totalVisited;
            }

        } else if (SessionEngine.answerMethod === "stylus") {
            // INSTANT STYLUS MODE: init canvases and bind mark button
            setTimeout(function() {
                WrittenMode.initCanvasesForQuestion(q);
                WrittenMode.QuestionTimer.start(q);
            }, 50);

            var markBtn = document.getElementById("wm-mark-btn");
            if (markBtn) {
                markBtn.addEventListener("click", function() {
                    WrittenMode.markAnswer();
                });
            }

            var wmNextBtn = document.getElementById("wm-next-question-btn");
            if (wmNextBtn) {
                wmNextBtn.addEventListener("click", function() {
                    StudyUI.loadNextQuestion();
                    window.scrollTo(0, 0);
                });
            }

            var wmAnotherBtn = document.getElementById("wm-another-btn");
            if (wmAnotherBtn) {
                wmAnotherBtn.addEventListener("click", function() {
                    StudyUI.anotherLikeThis();
                });
            }

            var wmEndBtn = document.getElementById("wm-end-session-btn");
            if (wmEndBtn) {
                wmEndBtn.addEventListener("click", function() {
                    StudyUI.showSessionSummary();
                });
            }

        } else {
            // INSTANT PAPER MODE: bind show solution button
            var showBtn = document.getElementById("show-solution-btn");
            if (showBtn) {
                showBtn.addEventListener("click", function() {
                    StudyUI.showSolution();
                });
            }
        }

        // End session button (non-exam)
        var endBtn = document.getElementById("end-session-btn");
        if (endBtn) {
            endBtn.addEventListener("click", function() {
                StudyUI.showSessionSummary();
            });
        }

        // Render math
        UI.renderMath(area);

        // After MathJax renders, check if stem needs scroll indicator
        StudyUI._checkStemScrollable();

        // Check session duration for break reminder
        StudyUI._checkDurationReminder();
    },

    /**
     * Check if a session duration reminder is due and show it.
     * First reminder at 40 minutes, then every 20 minutes after.
     */
    _checkDurationReminder: function() {
        if (!SessionEngine.startTime) return;
        var elapsed = (new Date() - SessionEngine.startTime) / 60000; // minutes
        if (elapsed >= StudyUI._nextReminderMinutes) {
            StudyUI._nextReminderMinutes = elapsed + 20; // next reminder in 20 more min
            StudyUI._showDurationReminder(Math.round(elapsed));
        }
    },

    /**
     * Show a non-blocking duration reminder banner.
     */
    _showDurationReminder: function(minutes) {
        // Remove any existing reminder
        var existing = document.getElementById("duration-reminder");
        if (existing) existing.remove();

        var reminder = document.createElement("div");
        reminder.id = "duration-reminder";
        reminder.className = "duration-reminder";
        reminder.innerHTML =
            '<div class="reminder-content">' +
            '<div class="reminder-icon">' + SYMBOLS.CLOCK + '</div>' +
            '<div class="reminder-text">' +
            '<strong>You\'ve been studying for ' + minutes + ' minutes</strong>' +
            '<p>A major review of learning strategies published in ' +
            '<em>Psychological Science in the Public Interest</em> ' +
            '(Dunlosky et al., 2013) rated distributed practice ' + SYMBOLS.EM_DASH +
            ' spreading study across multiple shorter sessions ' + SYMBOLS.EM_DASH +
            ' as one of the two most effective learning techniques, with ' +
            'students retaining significantly more than those who study in ' +
            'longer blocks. For cognitively demanding tasks like maths problem-solving, ' +
            'research suggests 20' + SYMBOLS.EM_DASH + '30 minutes of focused practice ' +
            'per session is optimal (Cepeda et al., 2006).</p>' +
            '<p class="reminder-suggestion">' + SYMBOLS.ARROW_RIGHT +
            ' We suggest this is the last question you complete this session. ' +
            'Come back tomorrow ' + SYMBOLS.EM_DASH +
            ' your future self will thank you.</p>' +
            '</div>' +
            '<button class="btn btn-secondary reminder-dismiss" ' +
            'id="reminder-dismiss-btn">Got it</button>' +
            '</div>';

        // Insert at top of question area
        var area = document.getElementById(StudyUI._activeAreaId);
        if (area) {
            area.insertBefore(reminder, area.firstChild);
            var dismissBtn = document.getElementById("reminder-dismiss-btn");
            if (dismissBtn) {
                dismissBtn.addEventListener("click", function() {
                    reminder.style.opacity = "0";
                    setTimeout(function() { reminder.remove(); }, 300);
                });
            }
        }
    },

    /**
     * Show the solution (Layer 1 + Layer 2).
     */
    showSolution: function() {
        var q = StudyUI.currentQuestion;
        if (!q || !q.parts) return;

        // Hide the "show solution" button
        var showArea = document.querySelector(".show-solution-area");
        if (showArea) showArea.style.display = "none";

        // ---- Header area: quick-assess + examiner comment ----
        var solArea = document.getElementById("solution-area");
        if (solArea) {
            var headerHtml = '<div class="solution-container">';

            // Question-level quick assessment buttons
            if (q.parts && q.parts.length > 0) {
                var totalMarks = 0;
                q.parts.forEach(function(p) { totalMarks += (p.partMarks || 0); });
                headerHtml += '<div class="quick-assess" id="quick-assess">';
                headerHtml += '<span class="quick-assess-label">Quick mark:</span>';
                headerHtml += '<button class="btn btn-correct btn-quick" ' +
                    'onclick="StudyUI.assessAllParts(\'correct\')">' +
                    SYMBOLS.CHECK + ' All Correct (' + totalMarks + '/' +
                    totalMarks + ')</button>';
                headerHtml += '<button class="btn btn-error btn-quick" ' +
                    'onclick="StudyUI.assessAllParts(\'wrong\')">' +
                    SYMBOLS.CROSS + ' All Wrong (0/' + totalMarks + ')</button>';
                headerHtml += '</div>';
            }

            // Examiner comment and clarification
            if (q.examinerComment) {
                headerHtml += '<div class="examiner-comment">';
                headerHtml += '<div class="examiner-label">' + SYMBOLS.GRADUATION +
                    ' Examiner Comment</div>';
                headerHtml += '<p>' + StudyUI._escapeHtml(q.examinerComment) + '</p>';
                headerHtml += '</div>';

                var clarification = "";
                for (var ci = q.parts.length - 1; ci >= 0; ci--) {
                    if (q.parts[ci].guidedSolution) {
                        var extracted = StudyUI._extractExaminerContent(q.parts[ci].guidedSolution);
                        if (extracted.clarification) {
                            clarification = extracted.clarification;
                            break;
                        }
                    }
                }
                if (clarification) {
                    headerHtml += '<div class="examiner-clarification">';
                    headerHtml += '<div class="examiner-clarification-label">' +
                        SYMBOLS.BOOK + ' This comment clarified</div>';
                    headerHtml += '<p>' + StudyUI._escapeHtml(clarification) + '</p>';
                    headerHtml += '</div>';
                }
            }

            // Next question / end session (hidden until all parts assessed)
            headerHtml += '<div id="next-question-area" style="display:none;">';
            headerHtml += '<div id="question-feedback"></div>';
            headerHtml += '<div class="next-actions">';
            headerHtml += '<button class="btn btn-primary btn-large" id="next-question-btn">' +
                'Next Question ' + SYMBOLS.ARROW_RIGHT + '</button>';
            headerHtml += '<button class="btn btn-retry btn-large" id="another-like-this-btn">' +
                SYMBOLS.LIGHTNING + ' Another like this</button>';
            headerHtml += '</div>';
            headerHtml += '<button class="btn btn-secondary" id="end-session-btn-2">' +
                'End Session</button>';
            headerHtml += '</div>';

            headerHtml += '</div>'; // .solution-container
            solArea.innerHTML = headerHtml;
            solArea.style.display = "block";
        }

        // ---- Per-part inline solutions ----
        q.parts.forEach(function(part, partIdx) {
            var container = document.getElementById("part-sol-" + partIdx);
            if (!container) return;

            var html = '<div class="part-sol-layout">';

            // ---- LEFT: worked solution + marking + assessment ----
            html += '<div class="solution-part-main" id="sol-main-' + partIdx + '">';

            html += '<h4 class="solution-part-header">' +
                '<span class="part-sol-toggle-btn" onclick="StudyUI.togglePartSol(' +
                partIdx + ')">' + SYMBOLS.ARROW_RIGHT + '</span> ' +
                'Part (' + StudyUI._escapeHtml(part.partLabel) + ') ' +
                SYMBOLS.BULLET + ' ' + part.partMarks + ' mark' +
                (part.partMarks !== 1 ? 's' : '') + ' ' +
                SYMBOLS.EM_DASH + ' Worked Solution</h4>';

            html += '<div class="part-sol-collapsible" id="part-sol-body-' + partIdx + '">';

            // Numbered solution lines
            if (part.originalSolution && part.originalSolution.length > 0) {
                html += '<div class="solution-lines" id="sol-lines-' + partIdx + '">';
                part.originalSolution.forEach(function(line, lineIdx) {
                    if (line.shown === false) return;
                    html += '<div class="solution-line" data-line="' + (lineIdx + 1) + '">';
                    html += '<span class="line-number">' + (lineIdx + 1) + '</span>';
                    html += '<span class="line-text">' +
                        StudyUI._renderSolutionText(line.text, q._pool) + '</span>';
                    html += '</div>';
                });
                html += '</div>';
            }

            // Marking criteria — default all to "met" (correct), toggleable
            if (part.marking && part.marking.length > 0) {
                html += '<div class="marking-criteria marking-toggleable" id="marking-' + partIdx + '">';
                html += '<div class="marking-header">Marking Criteria ' +
                    '<span class="marking-hint">(tap to toggle)</span></div>';
                part.marking.forEach(function(m, mIdx) {
                    html += '<div class="marking-row mark-toggle mark-met" ' +
                        'data-mark-idx="' + mIdx + '" data-part-idx="' + partIdx + '">';
                    html += '<span class="mark-awarded">' + m.awarded + '</span>';
                    html += '<span class="mark-text">' +
                        StudyUI._escapeHtml(m.text) + '</span>';
                    html += '</div>';
                });
                html += '</div>';
                html += '<div class="criteria-confirm-area" id="criteria-confirm-' + partIdx + '">';
                html += '<button class="btn btn-primary" onclick="StudyUI.confirmCriteriaAssessment(' +
                    partIdx + ')">' + SYMBOLS.CHECK + ' Confirm</button>';
                html += '</div>';
            } else {
                // Fallback for parts with no marking criteria: simple correct/incorrect
                html += '<div class="self-assess-simple" id="assess-' + partIdx + '">';
                html += '<button class="btn btn-correct" ' +
                    'onclick="StudyUI.assessPartSimple(' + partIdx + ', true)">' +
                    SYMBOLS.CHECK + ' Correct</button>';
                html += '<button class="btn btn-error" ' +
                    'onclick="StudyUI.assessPartSimple(' + partIdx + ', false)">' +
                    SYMBOLS.CROSS + ' Incorrect</button>';
                html += '</div>';
            }

            // Part result display (hidden initially)
            html += '<div class="part-result" id="result-' + partIdx +
                '" style="display:none;"></div>';

            // Per-part guided toggle button
            if (part.guidedSolution) {
                html += '<div class="guided-part-trigger" id="guided-trigger-' + partIdx + '">';
                html += '<button class="btn btn-guided-part" ' +
                    'onclick="StudyUI.showPartGuided(' + partIdx + ')">' +
                    SYMBOLS.BOOK + ' Show walkthrough</button>';
                html += '</div>';
            }

            html += '</div>'; // .part-sol-collapsible
            html += '</div>'; // .solution-part-main

            // ---- RIGHT: guided walkthrough panel (hidden until toggled) ----
            if (part.guidedSolution) {
                html += '<div class="solution-part-guided" id="sol-guided-' + partIdx +
                    '" style="display:none;"></div>';
            }

            html += '</div>'; // .part-sol-layout

            container.innerHTML = html;
            container.style.display = "block";

            // Wire up marking criteria toggle handlers with cascade
            StudyUI._bindCriteriaToggles(partIdx);
        });

        // ---- Bind event listeners ----
        var nextBtn = document.getElementById("next-question-btn");
        if (nextBtn) {
            nextBtn.addEventListener("click", function() {
                StudyUI.loadNextQuestion();
                window.scrollTo(0, 0);
            });
        }

        var anotherBtn = document.getElementById("another-like-this-btn");
        if (anotherBtn) {
            anotherBtn.addEventListener("click", function() {
                StudyUI.anotherLikeThis();
            });
        }

        var endBtn2 = document.getElementById("end-session-btn-2");
        if (endBtn2) {
            endBtn2.addEventListener("click", function() {
                StudyUI.showSessionSummary();
            });
        }

        // Show session controls
        var controls = document.getElementById("session-controls");
        if (controls) controls.style.display = "flex";

        // Render math in all inline solutions
        q.parts.forEach(function(part, partIdx) {
            var container = document.getElementById("part-sol-" + partIdx);
            if (container) UI.renderMath(container);
        });
        if (solArea) UI.renderMath(solArea);

        // Auto-show guided walkthroughs for all parts that have them
        q.parts.forEach(function(part, partIdx) {
            if (part.guidedSolution) {
                StudyUI.showPartGuided(partIdx);
            }
        });

        // Scroll to the first part's solution
        var firstSol = document.getElementById("part-sol-0");
        if (firstSol) {
            firstSol.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    },

    /**
     * Quick-assess ALL parts at once (question-level shortcut).
     * @param {string} mode - "correct" (all parts full marks) or "wrong" (all parts 0)
     */
    assessAllParts: function(mode) {
        var q = StudyUI.currentQuestion;
        if (!q || !q.parts) return;

        var quickArea = document.getElementById("quick-assess");
        if (quickArea) quickArea.style.display = "none";

        q.parts.forEach(function(part, partIdx) {
            if (StudyUI.partResults[part.partLabel]) return;

            var mc = document.getElementById("marking-" + partIdx);
            if (mc) {
                var rows = mc.querySelectorAll(".marking-row");
                rows.forEach(function(el) {
                    el.classList.remove("mark-met", "mark-not-met");
                    el.classList.add(mode === "correct" ? "mark-met" : "mark-not-met");
                });
                StudyUI.confirmCriteriaAssessment(partIdx);
            } else {
                StudyUI.assessPartSimple(partIdx, mode === "correct");
            }
        });
    },

    /**
     * Simple correct/incorrect assessment for parts without marking criteria.
     */
    assessPartSimple: function(partIdx, correct) {
        var part = StudyUI.currentQuestion.parts[partIdx];
        if (!part) return;

        var quickArea = document.getElementById("quick-assess");
        if (quickArea) quickArea.style.display = "none";

        var assessArea = document.getElementById("assess-" + partIdx);
        var resultArea = document.getElementById("result-" + partIdx);
        var changeLink = ' <a href="#" class="change-assess-link" ' +
            'onclick="StudyUI.resetPartAssessment(' + partIdx +
            '); return false;">Change</a>';

        StudyUI.partResults[part.partLabel] = {
            correct: correct,
            correctButUnsure: false,
            errorAtLine: correct ? null : 1,
            markingCriteriaFailed: correct ? [] : [0]
        };

        if (assessArea) assessArea.style.display = "none";
        if (resultArea) {
            if (correct) {
                resultArea.innerHTML = '<div class="result-correct">' + SYMBOLS.CHECK +
                    ' Correct (' + part.partMarks + '/' +
                    part.partMarks + ')' + changeLink + '</div>';
            } else {
                resultArea.innerHTML = '<div class="result-error">' + SYMBOLS.CROSS +
                    ' Incorrect (0/' + part.partMarks + ')' + changeLink + '</div>';
            }
            resultArea.style.display = "block";
        }
        StudyUI._checkAllAssessed();
    },

    /**
     * Bind click handlers on marking criteria rows for toggle + cascade.
     * Clicking a row toggles it; toggling to not-met cascades to all subsequent rows.
     * @private
     */
    _bindCriteriaToggles: function(partIdx) {
        var markingContainer = document.getElementById("marking-" + partIdx);
        if (!markingContainer) return;

        var rows = markingContainer.querySelectorAll(".marking-row");
        rows.forEach(function(el, idx) {
            el.addEventListener("click", function() {
                if (!markingContainer.classList.contains("marking-toggleable")) return;

                if (el.classList.contains("mark-met")) {
                    // Toggle to not-met + cascade subsequent
                    el.classList.remove("mark-met");
                    el.classList.add("mark-not-met");
                    for (var j = idx + 1; j < rows.length; j++) {
                        rows[j].classList.remove("mark-met");
                        rows[j].classList.add("mark-not-met");
                    }
                } else {
                    // Toggle back to met (no cascade)
                    el.classList.remove("mark-not-met");
                    el.classList.add("mark-met");
                }
            });
        });
    },

    /**
     * Finalize criteria-based self-assessment.
     * Reads which criteria rows are met/not-met and records the result.
     */
    confirmCriteriaAssessment: function(partIdx) {
        var part = StudyUI.currentQuestion.parts[partIdx];
        if (!part) return;

        var markingContainer = document.getElementById("marking-" + partIdx);
        if (!markingContainer) return;

        var failedCriteria = [];
        var marksEarned = 0;
        var rows = markingContainer.querySelectorAll(".marking-row");
        rows.forEach(function(el) {
            var idx = parseInt(el.getAttribute("data-mark-idx"), 10);
            if (el.classList.contains("mark-not-met")) {
                failedCriteria.push(idx);
            } else if (part.marking && part.marking[idx]) {
                marksEarned += part.marking[idx].awarded;
            }
        });

        StudyUI.partResults[part.partLabel] = {
            correct: failedCriteria.length === 0,
            correctButUnsure: false,
            errorAtLine: failedCriteria.length === (part.marking ? part.marking.length : 0) ? 1 : null,
            markingCriteriaFailed: failedCriteria
        };

        // Lock: remove toggleable state
        markingContainer.classList.remove("marking-toggleable");
        rows.forEach(function(el) {
            var idx = parseInt(el.getAttribute("data-mark-idx"), 10);
            el.classList.remove("mark-toggle", "mark-met", "mark-not-met");
            if (failedCriteria.indexOf(idx) !== -1) {
                el.classList.add("mark-failed");
            } else {
                el.classList.add("mark-passed");
            }
        });

        // Hide confirm button, show result
        var confirmDiv = document.getElementById("criteria-confirm-" + partIdx);
        if (confirmDiv) confirmDiv.style.display = "none";

        var changeLink = ' <a href="#" class="change-assess-link" ' +
            'onclick="StudyUI.resetPartAssessment(' + partIdx +
            '); return false;">Change</a>';
        var resultArea = document.getElementById("result-" + partIdx);
        if (resultArea) {
            if (failedCriteria.length === 0) {
                resultArea.innerHTML = '<div class="result-correct">' + SYMBOLS.CHECK +
                    ' All criteria met (' + part.partMarks + '/' +
                    part.partMarks + ')' + changeLink + '</div>';
            } else {
                resultArea.innerHTML = '<div class="result-error">' + SYMBOLS.CROSS +
                    ' ' + marksEarned + '/' + part.partMarks + ' marks' +
                    changeLink + '</div>';
            }
            resultArea.style.display = "block";
        }

        var quickArea = document.getElementById("quick-assess");
        if (quickArea) quickArea.style.display = "none";

        StudyUI._checkAllAssessed();
    },

    /**
     * Reset a part's assessment so the student can re-assess.
     * Restores marking criteria to toggleable state, all met by default.
     */
    resetPartAssessment: function(partIdx) {
        var part = StudyUI.currentQuestion.parts[partIdx];
        if (!part) return;

        delete StudyUI.partResults[part.partLabel];
        StudyUI._resultsRecorded = false;

        // Hide result
        var resultArea = document.getElementById("result-" + partIdx);
        if (resultArea) { resultArea.innerHTML = ""; resultArea.style.display = "none"; }

        // Hide next-question area
        var nextArea = document.getElementById("next-question-area");
        if (nextArea) nextArea.style.display = "none";

        // Reset marking criteria to toggleable, all met
        var markingContainer = document.getElementById("marking-" + partIdx);
        if (markingContainer) {
            markingContainer.classList.add("marking-toggleable");
            markingContainer.querySelectorAll(".marking-row").forEach(function(el) {
                el.classList.remove("mark-passed", "mark-failed", "mark-not-met");
                el.classList.add("mark-toggle", "mark-met");
            });
        }

        // Show confirm button again
        var confirmDiv = document.getElementById("criteria-confirm-" + partIdx);
        if (confirmDiv) confirmDiv.style.display = "block";

        // Reset simple assess buttons if present
        var assessArea = document.getElementById("assess-" + partIdx);
        if (assessArea && assessArea.classList.contains("self-assess-simple")) {
            assessArea.style.display = "flex";
        }

        // Re-show quick-assess if no parts assessed
        if (Object.keys(StudyUI.partResults).length === 0) {
            var quickArea = document.getElementById("quick-assess");
            if (quickArea) quickArea.style.display = "flex";
        }
    },

    /**
     * Check if all parts have been assessed.
     * Does NOT record results yet -- that happens when user clicks Next.
     * @private
     */
    _checkAllAssessed: function() {
        var assessed = Object.keys(StudyUI.partResults).length;
        if (assessed < StudyUI.totalParts) return;

        // All parts assessed -- show the next area (results recorded on Next click)
        StudyUI._showNextArea();
    },

    /**
     * Show the next question area with feedback.
     * @private
     */
    _showNextArea: function() {
        var nextArea = document.getElementById("next-question-area");
        if (!nextArea) return;

        // Generate feedback
        var allCorrect = true;
        var wrongPTs = [];
        var allPTs = [];
        var q = StudyUI.currentQuestion;

        if (q.parts) {
            q.parts.forEach(function(p) {
                if (p.problemType && allPTs.indexOf(p.problemType) === -1) {
                    allPTs.push(p.problemType);
                }
            });
        }

        Object.keys(StudyUI.partResults).forEach(function(label) {
            if (!StudyUI.partResults[label].correct) {
                allCorrect = false;
                // Find the problem type for this part
                if (q.parts) {
                    q.parts.forEach(function(p) {
                        if (p.partLabel === label && p.problemType) {
                            if (wrongPTs.indexOf(p.problemType) === -1) {
                                wrongPTs.push(p.problemType);
                            }
                        }
                    });
                }
            }
        });

        // Store target PTs for "another like this"
        // Prefer wrong PTs; if all correct, use all PTs from the question
        StudyUI._anotherTargetPTs = wrongPTs.length > 0 ? wrongPTs : allPTs;

        var feedbackEl = document.getElementById("question-feedback");
        if (feedbackEl) {
            if (allCorrect) {
                feedbackEl.innerHTML = '<div class="feedback-correct">' +
                    SYMBOLS.CHECK + ' All correct! Great work!</div>';
            } else {
                var ptPills = wrongPTs.map(function(pt) {
                    return '<span class="feedback-review-pill">' +
                        StudyUI._escapeHtml(pt) + '</span>';
                }).join('');
                feedbackEl.innerHTML = '<div class="feedback-review">' +
                    '<div class="feedback-review-heading">' +
                    SYMBOLS.CROSS + ' Review needed</div>' +
                    '<div class="feedback-review-pills">' + ptPills + '</div>' +
                    '</div>';
            }
            UI.renderMath(feedbackEl);
        }

        // Check if this was the last question in the goal (bonuses don't count)
        var nextBtn = document.getElementById("next-question-btn");
        var plannedCount = SessionEngine.totalCount - SessionEngine.bonusCount;
        if (plannedCount >= SessionEngine.sessionGoal) {
            if (nextBtn) nextBtn.textContent = "View Session Summary " + SYMBOLS.ARROW_RIGHT;
            nextBtn.onclick = function() { StudyUI.showSessionSummary(); };
        }

        // Check if "another like this" is possible
        var anotherBtn = document.getElementById("another-like-this-btn");
        if (anotherBtn && StudyUI._anotherTargetPTs.length > 0) {
            // Quick check: is there at least one candidate question available?
            var targetPT = StudyUI._anotherTargetPTs[0];
            var candidates = QuestionSelector._findCandidates(targetPT);
            // Exclude current question
            candidates = candidates.filter(function(c) {
                return c.filename !== StudyUI.currentFilename;
            });
            if (candidates.length === 0) {
                anotherBtn.disabled = true;
                anotherBtn.title = "No other questions available for this problem type";
            }
        }

        nextArea.style.display = "block";
        nextArea.scrollIntoView({ behavior: "smooth" });
    },

    /**
     * Serve another question testing the same problem type(s).
     * This is a bonus question that doesn't count against the session goal.
     */
    anotherLikeThis: function() {
        var targetPTs = StudyUI._anotherTargetPTs || [];
        if (targetPTs.length === 0) return;

        // Record results for current question first
        StudyUI._recordResultsIfNeeded().then(function() {
            // Pick the first target problem type
            var targetPT = targetPTs[0];

            MasteryEngine.getRetryCount(targetPT).then(function(retryCount) {
                return QuestionSelector.selectForProblemType(targetPT, retryCount);
            }).then(function(selected) {
                if (!selected) {
                    // No question available
                    var anotherBtn = document.getElementById("another-like-this-btn");
                    if (anotherBtn) {
                        anotherBtn.disabled = true;
                        anotherBtn.textContent = "No more available";
                    }
                    return;
                }

                // Serve the bonus question -- increment totalCount for stats
                // but also bonusCount so it doesn't count against session goal
                SessionEngine.totalCount++;
                SessionEngine.bonusCount++;
                SessionEngine.currentQuestion = selected.questionData;
                SessionEngine.currentFilename = selected.filename;

                var questionInfo = {
                    filename: selected.filename,
                    questionData: selected.questionData,
                    targetProblemType: targetPT,
                    questionNumber: SessionEngine.totalCount,
                    sessionGoal: SessionEngine.sessionGoal,
                    isBonus: true
                };

                window.scrollTo(0, 0);
                StudyUI.renderQuestion(questionInfo);
            });
        });
    },

    /**
     * Toggle collapse/expand of a part's inline solution body.
     */
    togglePartSol: function(partIdx) {
        var body = document.getElementById("part-sol-body-" + partIdx);
        var toggle = document.querySelector('#part-sol-' + partIdx + ' .part-sol-toggle-btn');
        if (!body) return;
        if (body.style.display === "none") {
            body.style.display = "block";
            if (toggle) toggle.textContent = SYMBOLS.ARROW_RIGHT;
        } else {
            body.style.display = "none";
            if (toggle) toggle.textContent = SYMBOLS.ARROW_RIGHT;
        }
    },

    /**
     * Show the guided solution (Layer 3).
     */
    /**
     * Show guided walkthrough for a specific part, adjacent to its worked solution.
     */
    showPartGuided: function(partIdx) {
        var q = StudyUI.currentQuestion;
        if (!q || !q.parts || !q.parts[partIdx]) return;

        var part = q.parts[partIdx];
        var guidedPanel = document.getElementById("sol-guided-" + partIdx);
        var trigger = document.getElementById("guided-trigger-" + partIdx);
        var solLayout = guidedPanel ? guidedPanel.closest(".part-sol-layout") : null;

        if (!guidedPanel || !part.guidedSolution) return;

        // Toggle: if already showing, hide it
        if (guidedPanel.style.display !== "none") {
            guidedPanel.style.display = "none";
            if (solLayout) solLayout.classList.remove("part-sol-expanded");
            if (trigger) {
                trigger.querySelector("button").textContent =
                    SYMBOLS.BOOK + " Show walkthrough";
            }
            return;
        }

        // Record guided access (once per question)
        if (!StudyUI.guidedAccessedThisQuestion) {
            StudyUI.guidedAccessedThisQuestion = true;
            var pts = [];
            q.parts.forEach(function(p) {
                if (p.problemType && pts.indexOf(p.problemType) === -1) {
                    pts.push(p.problemType);
                }
            });
            SessionEngine.recordGuidedAccess(pts);
        }

        // Extract clean guided text (strip examiner note)
        var extracted = StudyUI._extractExaminerContent(part.guidedSolution);
        var cleanText = extracted.cleanGuided || part.guidedSolution;

        var html = '<div class="guided-panel-content">';
        html += '<h4 class="guided-panel-title">' + SYMBOLS.BOOK +
            ' Walkthrough \u2014 Part (' + StudyUI._escapeHtml(part.partLabel) + ')</h4>';

        // Split on \\n for line breaks
        var lines = cleanText.split("\\n");
        lines.forEach(function(line) {
            line = line.trim();
            if (line === "" || line === "---") {
                html += '<br>';
            } else {
                html += '<p class="guided-line">' +
                    StudyUI._formatGuidedLine(line) + '</p>';
            }
        });

        html += '</div>';
        guidedPanel.innerHTML = html;
        guidedPanel.style.display = "block";

        if (solLayout) solLayout.classList.add("part-sol-expanded");
        if (trigger) {
            trigger.querySelector("button").textContent =
                SYMBOLS.BOOK + " Hide walkthrough";
        }

        UI.renderMath(guidedPanel);
    },

    /**
     * Show guided walkthroughs for ALL parts (legacy, called from old button if present).
     */
    showGuided: function() {
        var q = StudyUI.currentQuestion;
        if (!q || !q.parts) return;

        q.parts.forEach(function(part, partIdx) {
            if (part.guidedSolution) {
                var panel = document.getElementById("sol-guided-" + partIdx);
                if (panel && panel.style.display === "none") {
                    StudyUI.showPartGuided(partIdx);
                }
            }
        });
    },

    /**
     * Show the session summary screen.
     */
    showSessionSummary: function() {
        // If exam mode is still running, route through exam end flow instead
        if (ExamMode.active && ExamMode.state === "running") {
            ExamMode.snapshotCurrentQuestion();
            ExamMode.endTest();
            return;
        }

        // Stop any running Written Mode timer
        WrittenMode.QuestionTimer.stop();

        // Record results for last question before ending session
        StudyUI._recordResultsIfNeeded().then(function() {
            return SessionEngine.end();
        }).then(function(sessionData) {
            var area = document.getElementById(StudyUI._activeAreaId);
            if (!area) return;

            var sd = sessionData || SessionEngine.sessionData;
            var html = '<div class="session-summary">';

            html += '<div class="summary-header">';
            if (sd.accuracyPercent >= 80) {
                html += '<div class="summary-icon">' + SYMBOLS.TROPHY + '</div>';
                html += '<h2>Excellent Session!</h2>';
            } else if (sd.accuracyPercent >= 60) {
                html += '<div class="summary-icon">' + SYMBOLS.STAR + '</div>';
                html += '<h2>Good Work!</h2>';
            } else {
                html += '<div class="summary-icon">' + SYMBOLS.GRAPH + '</div>';
                html += '<h2>Session Complete</h2>';
            }
            html += '</div>';

            // Stats grid
            html += '<div class="summary-stats">';
            html += StudyUI._summaryCard("Questions", sd.questionsAttempted);
            html += StudyUI._summaryCard("Parts Correct",
                sd.partsCorrect + " / " + sd.partsAttempted);
            html += StudyUI._summaryCard("Accuracy",
                sd.accuracyPercent + "%");
            html += StudyUI._summaryCard("Duration",
                sd.durationMinutes + " min");
            html += '</div>';

            // New masteries
            if (sd.newMasteries && sd.newMasteries.length > 0) {
                html += '<div class="summary-section summary-masteries">';
                html += '<h3>' + SYMBOLS.PARTY + ' New Masteries!</h3>';
                html += '<div class="mastery-list">';
                sd.newMasteries.forEach(function(pt) {
                    html += '<div class="mastery-badge">' + SYMBOLS.CHECK + ' ' +
                        StudyUI._escapeHtml(pt) + '</div>';
                });
                html += '</div></div>';
            }

            // Topic breakdown
            if (sd.topicBreakdown && Object.keys(sd.topicBreakdown).length > 0) {
                html += '<div class="summary-section">';
                html += '<h3>Topic Breakdown</h3>';
                Object.keys(sd.topicBreakdown).forEach(function(topic) {
                    var tb = sd.topicBreakdown[topic];
                    var topicPct = tb.attempted > 0 ?
                        Math.round((tb.correct / tb.attempted) * 100) : 0;
                    var barClass = topicPct >= 80 ? "bar-success" :
                        topicPct >= 50 ? "bar-warning" : "bar-danger";
                    html += '<div class="topic-row">';
                    html += '<span class="topic-name">' +
                        StudyUI._escapeHtml(topic) + '</span>';
                    html += '<span class="topic-score">' + tb.correct + '/' +
                        tb.attempted + '</span>';
                    html += '<div class="topic-bar"><div class="topic-bar-fill ' +
                        barClass + '" style="width:' + topicPct + '%"></div></div>';
                    html += '</div>';
                });
                html += '</div>';
            }

            // Actions
            html += '<div class="summary-actions">';
            html += '<button class="btn btn-primary btn-large" id="summary-new-session">' +
                'Start New Session</button>';
            html += '<button class="btn btn-secondary" id="summary-home">' +
                'Back to Home</button>';
            html += '</div>';

            html += '</div>';
            area.innerHTML = html;

            // Render LaTeX in problem type names / topics
            UI.renderMath(area);

            // Fire celebrations for milestones
            Celebrations.checkMilestones(sd);

            // Bind buttons
            var newSessionBtn = document.getElementById("summary-new-session");
            if (newSessionBtn) {
                newSessionBtn.addEventListener("click", function() {
                    StudyUI.returnToHome();
                });
            }
            var homeBtn = document.getElementById("summary-home");
            if (homeBtn) {
                homeBtn.addEventListener("click", function() {
                    StudyUI.returnToHome();
                });
            }
        });
    },

    /**
     * Return to the study tab home screen.
     */
    returnToHome: function() {
        // Clean up exam mode if active
        if (ExamMode.active) {
            ExamMode.active = false;
            ExamMode.state = "inactive";
            ExamMode.testAnswers = [];
            ExamMode.examQuestions = [];
            if (ExamMode.timerInterval) {
                clearInterval(ExamMode.timerInterval);
                ExamMode.timerInterval = null;
            }
            var markingScreen = document.getElementById("exam-marking-screen");
            if (markingScreen) markingScreen.style.display = "none";
            var resultsScreen = document.getElementById("exam-results-screen");
            if (resultsScreen) resultsScreen.style.display = "none";
        }

        if (StudyUI._activeAreaId === "revise-question-area") {
            // Returning from a revision session -- go back to topic tree
            var reviseHome = document.getElementById("revise-home");
            var reviseArea = document.getElementById("revise-question-area");
            if (reviseHome) reviseHome.style.display = "block";
            if (reviseArea) {
                reviseArea.style.display = "none";
                reviseArea.innerHTML = "";
            }
            StudyUI._activeAreaId = "question-area"; // reset
            ReviseUI.refresh();
        } else {
            // Normal study session -- go back to study start screen
            var startScreen = document.querySelector(".study-start-screen");
            var questionArea = document.getElementById(StudyUI._activeAreaId);
            if (startScreen) startScreen.style.display = "block";
            if (questionArea) {
                questionArea.style.display = "none";
                questionArea.innerHTML = "";
            }
        }
        UI.refreshStudyTab();
        window.scrollTo(0, 0);
    },

    // ---- UTILITY METHODS ----

    /**
     * Create a summary stat card HTML string.
     * @private
     */
    _summaryCard: function(label, value) {
        return '<div class="summary-card">' +
            '<div class="summary-value">' + value + '</div>' +
            '<div class="summary-label">' + label + '</div>' +
            '</div>';
    },

    /**
     * Get the diagram path for an image reference.
     * @private
     */
    _getDiagramPath: function(imgRef, pool) {
        var filename = "";
        if (typeof imgRef === "string") {
            filename = imgRef;
        } else if (imgRef && imgRef.filename) {
            filename = imgRef.filename;
        } else {
            return "";
        }
        if (pool === "practice") {
            return PRACTICE_DIAGRAM_PATH + filename;
        }
        return DIAGRAM_PATH + filename;
    },

    /**
     * Detect if a part requires drawing on an image (axes, table, graph).
     * Returns true when the question text mentions sketching/drawing/filling AND
     * contains an [IMAGE:] reference for the background (axes, table, etc.).
     * @private
     */
    _isDrawOnPart: function(part, q) {
        if (!part || !part.questionText) return false;
        var hasKeyword = /sketch|draw|on the axes|on the graph|shade|complete the table|fill in.*table|complete the following table/i
            .test(part.questionText);
        if (!hasKeyword) return false;
        // Check for [IMAGE:] embedded in questionText
        if (/\[IMAGE:\s*[^\]]+\]/.test(part.questionText)) return true;
        // Fallback: check diagramPlaceholders.question for images (e.g. table questions)
        if (q && q.diagramPlaceholders && q.diagramPlaceholders.question &&
            q.diagramPlaceholders.question.length > 0) return true;
        return false;
    },

    /**
     * Extract the first [IMAGE: filename] from questionText for use as canvas
     * background (e.g. blank axes or empty table).
     * @private
     */
    _getDrawOnImage: function(part, q) {
        if (!part || !part.questionText) return null;
        // First try: [IMAGE:] embedded in questionText
        var match = part.questionText.match(/\[IMAGE:\s*([^\]]+)\]/);
        if (match) return match[1].trim();
        // Fallback: find a matching image in diagramPlaceholders.question
        if (q && q.diagramPlaceholders && q.diagramPlaceholders.question) {
            var partLabel = part.partLabel || '';
            var imgs = q.diagramPlaceholders.question;
            // Try part-specific image first
            for (var i = 0; i < imgs.length; i++) {
                var fname = imgs[i].replace(/\[IMAGE:\s*|\]/g, '').trim();
                if (fname.indexOf("Part" + partLabel + ")") !== -1 ||
                    fname.indexOf("Part" + partLabel + "_") !== -1) {
                    return fname;
                }
            }
            // Fall back to PartStem image
            for (var j = 0; j < imgs.length; j++) {
                var fname2 = imgs[j].replace(/\[IMAGE:\s*|\]/g, '').trim();
                if (fname2.indexOf("PartStem") !== -1) return fname2;
            }
            // Last resort: first available question image
            if (imgs.length > 0) {
                return imgs[0].replace(/\[IMAGE:\s*|\]/g, '').trim();
            }
        }
        return null;
    },

    /**
     * Get answer diagram filenames for a specific part. These are the reference
     * solution images used when AI-marking sketch/graph/table answers.
     * @private
     */
    _getAnswerDiagrams: function(q, partLabel) {
        var dp = q.diagramPlaceholders || {};
        var answerImgs = dp.answer || [];
        var result = [];
        answerImgs.forEach(function(ref) {
            var m = ref.match(/\[IMAGE:\s*([^\]]+)\]/);
            var filename = m ? m[1].trim() : ref;
            // Match answer diagrams to this part label
            if (filename.indexOf("Part" + partLabel + ")") !== -1 ||
                filename.indexOf("Part" + partLabel + "_") !== -1) {
                result.push(filename);
            }
        });
        // Fallback: if no part-specific match, try PartStem answers
        if (result.length === 0) {
            answerImgs.forEach(function(ref) {
                var m = ref.match(/\[IMAGE:\s*([^\]]+)\]/);
                var filename = m ? m[1].trim() : ref;
                if (filename.indexOf("PartStem") !== -1) {
                    result.push(filename);
                }
            });
        }
        return result;
    },

    /**
     * Escape HTML special characters.
     * @private
     */
    _escapeHtml: function(text) {
        if (!text) return "";
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    },

    /**
     * Format a guided-solution line: escape HTML, then convert **bold** markers
     * to styled <strong> tags. Lines matching "**Step N: ...**" get a special
     * step-header class for visual emphasis.
     * @private
     */
    _formatGuidedLine: function(text) {
        if (!text) return "";
        var escaped = StudyUI._escapeHtml(text);
        // Convert **text** to <strong>text</strong>
        // Use a step-header class when the bold text starts with "Step"
        escaped = escaped.replace(/\*\*([^*]+)\*\*/g, function(match, inner) {
            if (/^Step\s+\d/.test(inner)) {
                return '<strong class="guided-step-header">' + inner + '</strong>';
            }
            return '<strong class="guided-bold">' + inner + '</strong>';
        });
        return escaped;
    },

    /**
     * Extract image filenames from [IMAGE: filename] markers in text.
     * Returns array of filenames (without the [IMAGE:] wrapper).
     * @private
     */
    _extractImageRefs: function(text) {
        if (!text) return [];
        var refs = [];
        var pattern = /\[IMAGE:\s*([^\]]+)\]/g;
        var match;
        while ((match = pattern.exec(text)) !== null) {
            refs.push(match[1].trim());
        }
        return refs;
    },

    /**
     * Check if the sticky stem is overflowing and add a scroll-hint class.
     * Called after renderMath with a delay so MathJax has time to layout.
     * @private
     */
    _checkStemScrollable: function() {
        // Use a short delay to let MathJax finish typesetting
        setTimeout(function() {
            var stem = document.querySelector('.question-stem-sticky');
            if (!stem) return;
            if (stem.scrollHeight > stem.clientHeight + 4) {
                stem.classList.add('stem-scrollable');
            } else {
                stem.classList.remove('stem-scrollable');
            }
        }, 400);
        // Re-check after MathJax may have reflowed (longer expressions)
        setTimeout(function() {
            var stem = document.querySelector('.question-stem-sticky');
            if (!stem) return;
            if (stem.scrollHeight > stem.clientHeight + 4) {
                stem.classList.add('stem-scrollable');
            } else {
                stem.classList.remove('stem-scrollable');
            }
        }, 1200);
    },

    /**
     * Render solution text, converting [IMAGE: filename.png] to actual img tags.
     * @private
     */
    _renderSolutionText: function(text, pool) {
        if (!text) return "";
        var imgPattern = /\[IMAGE:\s*([^\]]+)\]/g;
        if (!imgPattern.test(text)) {
            return StudyUI._escapeHtml(text);
        }
        // Reset regex after test
        imgPattern.lastIndex = 0;
        var result = "";
        var lastIndex = 0;
        var match;
        while ((match = imgPattern.exec(text)) !== null) {
            // Escape text before the match
            result += StudyUI._escapeHtml(text.substring(lastIndex, match.index));
            // Render the image
            var filename = match[1].trim();
            var imgPath = StudyUI._getDiagramPath(filename, pool);
            result += '<img src="' + StudyUI._escapeHtml(imgPath) +
                '" class="question-diagram solution-diagram" alt="Solution diagram">';
            lastIndex = match.index + match[0].length;
        }
        result += StudyUI._escapeHtml(text.substring(lastIndex));
        return result;
    },

    /**
     * Extract examiner note and clarification from the end of a guided solution.
     * Returns { cleanGuided, clarification }.
     * The examiner comment itself comes from q.examinerComment (not extracted here).
     */
    _extractExaminerContent: function(guidedText) {
        if (!guidedText) return { cleanGuided: "", clarification: "" };

        // Pattern: ---\n\n**Note from examiner:** "..."  \n\n**This comment clarified:** ...
        var dividerIdx = guidedText.lastIndexOf("---\\n\\n**Note from examiner");
        if (dividerIdx === -1) dividerIdx = guidedText.lastIndexOf("---\n\n**Note from examiner");
        if (dividerIdx === -1) {
            // Try without the --- divider
            dividerIdx = guidedText.lastIndexOf("**Note from examiner");
            if (dividerIdx > 0 && guidedText.charAt(dividerIdx - 1) !== "\n") {
                dividerIdx = -1; // Only match at start of line
            }
        }
        if (dividerIdx === -1) return { cleanGuided: guidedText, clarification: "" };

        var cleanGuided = guidedText.substring(0, dividerIdx).replace(/[\s\\n-]+$/, "");

        var remainder = guidedText.substring(dividerIdx);
        var clarification = "";
        var clarIdx = remainder.indexOf("**This comment clarified:**");
        if (clarIdx === -1) clarIdx = remainder.indexOf("**This comment clarified:");
        if (clarIdx !== -1) {
            clarification = remainder.substring(clarIdx);
            // Strip the **This comment clarified:** prefix
            clarification = clarification.replace(/^\*\*This comment clarified:\*\*\s*/, "");
            // Clean up escaped newlines for rendering
            clarification = clarification.replace(/\\n/g, "\n").trim();
        }

        return { cleanGuided: cleanGuided, clarification: clarification };
    }
};


