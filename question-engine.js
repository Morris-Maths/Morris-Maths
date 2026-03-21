// ============================================================================
// QUESTION ENGINE
// Merges data sources, computes unlocked problem types, provides lookups.
// ============================================================================
var QuestionEngine = {
    allQuestions: {},
    taxonomyData: {},
    questionIndex: {},
    unlockedProblemTypes: [],
    allProblemTypes: [],

    /**
     * Initialise the engine by merging data bundle + imported questions,
     * and computing the set of unlocked problem types from the schedule.
     */
    init: function() {
        // Load base data from script-tag globals
        if (typeof QUESTIONS_DATA !== "undefined") {
            QuestionEngine.allQuestions = Object.assign({}, QUESTIONS_DATA);
            console.log("QuestionEngine: Loaded " +
                Object.keys(QUESTIONS_DATA).length + " questions from data bundle");
        } else {
            console.warn("QuestionEngine: QUESTIONS_DATA not found (data_bundle.js missing?)");
            QuestionEngine.allQuestions = {};
        }

        if (typeof TAXONOMY_DATA !== "undefined") {
            QuestionEngine.taxonomyData = TAXONOMY_DATA;
        }
        if (typeof QUESTION_INDEX !== "undefined") {
            QuestionEngine.questionIndex = QUESTION_INDEX;
        }

        // Flatten subparts into parts so the pipeline handles (a)(i), (a)(ii) etc.
        QuestionEngine._flattenAllSubparts();

        // Extract all known problem types from questions
        QuestionEngine.allProblemTypes = QuestionEngine._extractAllProblemTypes();
        console.log("QuestionEngine: Found " +
            QuestionEngine.allProblemTypes.length + " unique problem types");
    },

    /**
     * Merge imported questions (from IndexedDB) into the allQuestions map.
     * Called after DB is initialised.
     */
    mergeImportedQuestions: function(importedList) {
        var count = 0;
        importedList.forEach(function(item) {
            if (item.filename && item.questionData) {
                QuestionEngine.allQuestions[item.filename] = item.questionData;
                count++;
            }
        });
        if (count > 0) {
            console.log("QuestionEngine: Merged " + count + " imported questions");
            // Flatten subparts and recompute problem types after merge
            QuestionEngine._flattenAllSubparts();
            QuestionEngine.allProblemTypes = QuestionEngine._extractAllProblemTypes();
        }
    },

    /**
     * Compute unlocked problem types based on schedule + schedule updates.
     */
    computeUnlocked: function(scheduleUpdates, aheadOfSchedule) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var unlocked = {};

        // Base schedule from schedule.js
        if (typeof TAUGHT_SCHEDULE !== "undefined") {
            // New format: flat enabledProblemTypes array (teacher ticks what they've taught)
            if (TAUGHT_SCHEDULE.enabledProblemTypes) {
                TAUGHT_SCHEDULE.enabledProblemTypes.forEach(function(pt) {
                    unlocked[pt] = true;
                });
            }
            // Legacy format: dated weeks (kept for backward compatibility)
            if (TAUGHT_SCHEDULE.schedule) {
                TAUGHT_SCHEDULE.schedule.forEach(function(entry) {
                    var entryDate = new Date(entry.date + "T00:00:00");
                    if (aheadOfSchedule || entryDate <= today) {
                        (entry.problemTypes || []).forEach(function(pt) {
                            unlocked[pt] = true;
                        });
                    }
                });
            }
        }

        // Imported schedule updates from IndexedDB
        if (scheduleUpdates && scheduleUpdates.length > 0) {
            scheduleUpdates.forEach(function(entry) {
                if (entry.enabledProblemTypes) {
                    // New format update
                    entry.enabledProblemTypes.forEach(function(pt) {
                        unlocked[pt] = true;
                    });
                } else {
                    // Legacy format update
                    var entryDate = new Date(entry.date + "T00:00:00");
                    if (aheadOfSchedule || entryDate <= today) {
                        (entry.problemTypes || []).forEach(function(pt) {
                            unlocked[pt] = true;
                        });
                    }
                }
            });
        }

        QuestionEngine.unlockedProblemTypes = Object.keys(unlocked);
        console.log("QuestionEngine: " +
            QuestionEngine.unlockedProblemTypes.length + " problem types unlocked" +
            (aheadOfSchedule ? " (ahead-of-schedule mode)" : ""));
        return QuestionEngine.unlockedProblemTypes;
    },

    /**
     * Check if a question is available (all its parts' problem types are unlocked).
     * Multi-classification: ALL classifications on every part must be taught.
     */
    isQuestionAvailable: function(questionData) {
        if (!questionData || !questionData.parts) return false;
        // Filter out questions with empty parts array (e.g. WACE_2017_CF_Q04)
        if (questionData.parts.length === 0) return false;
        var unlockedSet = {};
        QuestionEngine.unlockedProblemTypes.forEach(function(pt) {
            unlockedSet[pt] = true;
        });
        for (var i = 0; i < questionData.parts.length; i++) {
            if (!QuestionEngine.isPartUnlocked(questionData.parts[i], unlockedSet)) {
                return false;
            }
        }
        return true;
    },

    /**
     * Check if a single part is unlocked.
     * Multi-classification: ALL classifications must be taught.
     * @param {Object} part
     * @param {Object} unlockedSet - map of problemType -> true
     * @returns {boolean}
     */
    isPartUnlocked: function(part, unlockedSet) {
        if (part.classifications && part.classifications.length > 0) {
            return part.classifications.every(function(cls) {
                return !cls.problemType || unlockedSet[cls.problemType];
            });
        }
        // Legacy fallback: single problemType field
        return !part.problemType || !!unlockedSet[part.problemType];
    },

    /**
     * Get all problem types for a part (including from classifications array).
     * Returns a deduplicated array.
     * @param {Object} part
     * @returns {string[]}
     */
    getPartProblemTypes: function(part) {
        var pts = [];
        if (part.classifications && part.classifications.length > 0) {
            part.classifications.forEach(function(cls) {
                if (cls.problemType && pts.indexOf(cls.problemType) === -1) {
                    pts.push(cls.problemType);
                }
            });
        }
        // Always include the legacy field if present and not already listed
        if (part.problemType && pts.indexOf(part.problemType) === -1) {
            pts.push(part.problemType);
        }
        return pts;
    },

    /**
     * Get all taxonomy info for a part (topic/subtopic/concept/problemType tuples).
     * Returns classifications[] if present, otherwise a single-entry array from legacy fields.
     * @param {Object} part
     * @returns {Array<{topic, subtopic, conceptCategory, problemType}>}
     */
    getPartClassifications: function(part) {
        if (part.classifications && part.classifications.length > 0) {
            return part.classifications;
        }
        // Legacy fallback
        if (part.problemType) {
            return [{
                topic: part.topic || "",
                subtopic: part.subtopic || "",
                conceptCategory: part.conceptCategory || "",
                problemType: part.problemType
            }];
        }
        return [];
    },

    /**
     * Get all available questions (all parts unlocked).
     */
    getAvailableQuestions: function() {
        var available = {};
        var keys = Object.keys(QuestionEngine.allQuestions);
        for (var i = 0; i < keys.length; i++) {
            var q = QuestionEngine.allQuestions[keys[i]];
            if (QuestionEngine.isQuestionAvailable(q)) {
                available[keys[i]] = q;
            }
        }
        return available;
    },

    /**
     * Get questions for a specific problem type.
     * Checks both classifications[] and legacy problemType field.
     */
    getQuestionsForProblemType: function(problemType) {
        var matching = {};
        var keys = Object.keys(QuestionEngine.allQuestions);
        for (var i = 0; i < keys.length; i++) {
            var q = QuestionEngine.allQuestions[keys[i]];
            if (!q.parts) continue;
            for (var p = 0; p < q.parts.length; p++) {
                var partPTs = QuestionEngine.getPartProblemTypes(q.parts[p]);
                if (partPTs.indexOf(problemType) !== -1) {
                    matching[keys[i]] = q;
                    break;
                }
            }
        }
        return matching;
    },

    /**
     * Count questions per pool type.
     */
    getPoolCounts: function() {
        var original = 0;
        var practice = 0;
        var keys = Object.keys(QuestionEngine.allQuestions);
        keys.forEach(function(k) {
            var pool = QuestionEngine.allQuestions[k]._pool;
            if (pool === "original") original++;
            else if (pool === "practice") practice++;
        });
        return { original: original, practice: practice, total: keys.length };
    },

    /**
     * Flatten subparts across all loaded questions.
     * Turns nested subparts (a)(i),(a)(ii) into flat parts for the pipeline.
     * @private
     */
    _flattenAllSubparts: function() {
        var keys = Object.keys(QuestionEngine.allQuestions);
        var count = 0;
        keys.forEach(function(k) {
            if (QuestionEngine._flattenQuestionSubparts(QuestionEngine.allQuestions[k])) {
                count++;
            }
        });
        if (count > 0) {
            console.log("QuestionEngine: Flattened subparts in " + count + " questions");
        }
    },

    /**
     * Flatten subparts for a single question.
     * Parts like (a) with subparts (i),(ii) become separate entries
     * with compound labels like "a-i", "a-ii".
     * @private
     * @returns {boolean} true if flattening occurred
     */
    _flattenQuestionSubparts: function(q) {
        if (!q || !q.parts) return false;
        var needsFlatten = q.parts.some(function(p) {
            return p.subparts && p.subparts.length > 0;
        });
        if (!needsFlatten) return false;

        // Question-level topic fallbacks from topicsAggregate
        var agg = q.topicsAggregate || {};
        var qTopic = (agg.topics && agg.topics[0]) || "";
        var qSubtopic = (agg.subtopics && agg.subtopics[0]) || "";
        var qConcept = (agg.conceptCategories && agg.conceptCategories[0]) || "";
        var qProblemType = (agg.problemTypes && agg.problemTypes[0]) || "";

        var flat = [];
        q.parts.forEach(function(part) {
            if (part.subparts && part.subparts.length > 0) {
                part.subparts.forEach(function(sp, spIdx) {
                    flat.push({
                        partLabel: part.partLabel + "-" + sp.subpartLabel,
                        _displayLabel: "(" + part.partLabel + ")(" + sp.subpartLabel + ")",
                        partMarks: sp.subpartMarks || 0,
                        questionText: sp.questionText || "",
                        stimulus: sp.stimulus || "",
                        originalSolution: sp.originalSolution || [],
                        marking: sp.marking || [],
                        guidedSolution: sp.guidedSolution || "",
                        diagramsNeeded: sp.diagramsNeeded || {},
                        formOfQuestion: sp.formOfQuestion || "",
                        _isSubpart: true,
                        _isFirstSubpart: spIdx === 0,
                        _parentLabel: part.partLabel,
                        _parentStimulus: part.stimulus || "",
                        _parentMarks: part.partMarks,
                        // Multi-classification support
                        classifications: sp.classifications || part.classifications || null,
                        topic: sp.topic || part.topic || qTopic,
                        subtopic: sp.subtopic || part.subtopic || qSubtopic,
                        conceptCategory: sp.conceptCategory || part.conceptCategory || qConcept,
                        problemType: sp.problemType || part.problemType || qProblemType
                    });
                });
            } else {
                flat.push(part);
            }
        });
        q.parts = flat;
        return true;
    },

    /**
     * Extract all unique problem types from all loaded questions.
     * Includes problem types from classifications[] arrays.
     * @private
     */
    _extractAllProblemTypes: function() {
        var ptSet = {};
        var keys = Object.keys(QuestionEngine.allQuestions);
        keys.forEach(function(k) {
            var q = QuestionEngine.allQuestions[k];
            if (q.parts) {
                q.parts.forEach(function(part) {
                    var partPTs = QuestionEngine.getPartProblemTypes(part);
                    partPTs.forEach(function(pt) {
                        ptSet[pt] = true;
                    });
                });
            }
        });
        return Object.keys(ptSet).sort();
    },

    /**
     * Get the schedule info for display purposes.
     */
    getScheduleInfo: function() {
        if (typeof TAUGHT_SCHEDULE === "undefined") {
            return {
                className: "Unknown Class",
                teacherName: "Unknown",
                totalEntries: 0,
                nextUnlock: null
            };
        }
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var nextUnlock = null;

        // Legacy dated-weeks format
        if (TAUGHT_SCHEDULE.schedule) {
            for (var i = 0; i < TAUGHT_SCHEDULE.schedule.length; i++) {
                var d = new Date(TAUGHT_SCHEDULE.schedule[i].date + "T00:00:00");
                if (d > today) {
                    nextUnlock = TAUGHT_SCHEDULE.schedule[i];
                    break;
                }
            }
        }

        // Count total enabled types (new format) or schedule entries (legacy)
        var totalEntries = TAUGHT_SCHEDULE.enabledProblemTypes
            ? TAUGHT_SCHEDULE.enabledProblemTypes.length
            : (TAUGHT_SCHEDULE.schedule || []).length;

        // Use course display name if available, then fall back to schedule className
        var displayName = "Unknown Class";
        if (typeof CURRENT_COURSE_CONFIG !== "undefined" && CURRENT_COURSE_CONFIG &&
            CURRENT_COURSE_CONFIG.displayName) {
            displayName = CURRENT_COURSE_CONFIG.displayName;
        } else if (TAUGHT_SCHEDULE.className) {
            displayName = TAUGHT_SCHEDULE.className;
        }

        return {
            className: displayName,
            teacherName: TAUGHT_SCHEDULE.teacherName || "Unknown",
            totalEntries: totalEntries,
            allowAheadOfSchedule: !!TAUGHT_SCHEDULE.allowAheadOfSchedule,
            nextUnlock: nextUnlock
        };
    }
};


