// ============================================================================
// COURSE LOADER
// ============================================================================
// Detects the active course and dynamically loads its data bundle, atomised
// practice files, and concepts files before the app initialises.
//
// Detection priority:
//   1. URL parameter: ?course=12Methods
//   2. localStorage: wace_course_id (set after first access code verification)
//   3. Firestore access code document (course field)
//   4. DEFAULT_COURSE_ID from course-config.js
//
// ENCODING: This file MUST be pure ASCII.
// ============================================================================
"use strict";

var CourseLoader = {

    COURSE_KEY: "wace_course_id",
    _courseId: null,
    _courseConfig: null,
    _loaded: false,

    // ================================================================
    // COURSE DETECTION
    // ================================================================

    /**
     * Determine which course to load.
     * Called before initApp(). Sets CURRENT_COURSE, DIAGRAM_PATH, etc.
     * Returns the course ID string.
     */
    detectCourse: function() {
        // 1. URL parameter override (useful for testing / direct links)
        var urlParams = new URLSearchParams(window.location.search);
        var urlCourse = urlParams.get("course");
        if (urlCourse && COURSE_REGISTRY[urlCourse]) {
            CourseLoader._setCourse(urlCourse);
            return urlCourse;
        }

        // 2. Previously stored course (from prior session)
        var stored = localStorage.getItem(CourseLoader.COURSE_KEY);
        if (stored && COURSE_REGISTRY[stored]) {
            CourseLoader._setCourse(stored);
            return stored;
        }

        // 3. Fall back to default
        CourseLoader._setCourse(DEFAULT_COURSE_ID);
        return DEFAULT_COURSE_ID;
    },

    /**
     * Set the course from a Firestore access code document.
     * Called by AccessControl after verifying a code that has a 'course' field.
     * If the course changes, stores it and returns true (caller should reload).
     */
    setCourseFromCode: function(courseId) {
        if (!courseId || !COURSE_REGISTRY[courseId]) {
            console.warn("CourseLoader: Unknown course '" + courseId + "', ignoring");
            return false;
        }
        var previous = localStorage.getItem(CourseLoader.COURSE_KEY);
        localStorage.setItem(CourseLoader.COURSE_KEY, courseId);
        if (previous && previous !== courseId) {
            console.log("CourseLoader: Course changed from " + previous + " to " + courseId);
            return true; // Caller should reload
        }
        CourseLoader._setCourse(courseId);
        return false;
    },

    /**
     * Apply course config to global path variables.
     * @private
     */
    _setCourse: function(courseId) {
        CourseLoader._courseId = courseId;
        CourseLoader._courseConfig = COURSE_REGISTRY[courseId];

        // Set global path variables (used by study-ui, concepts-ui, etc.)
        CURRENT_COURSE = courseId;
        CURRENT_COURSE_CONFIG = CourseLoader._courseConfig;
        DIAGRAM_PATH = CourseLoader._courseConfig.diagramPath;
        CONCEPTS_DIAGRAM_PATH = CourseLoader._courseConfig.conceptsDiagramPath;
        PRACTICE_DIAGRAM_PATH = CourseLoader._courseConfig.practiceDiagramPath;

        localStorage.setItem(CourseLoader.COURSE_KEY, courseId);
        console.log("CourseLoader: Active course = " + courseId +
            " (" + CourseLoader._courseConfig.displayName + ")");
    },

    // ================================================================
    // DYNAMIC SCRIPT LOADING
    // ================================================================

    /**
     * Load a single script tag and return a Promise that resolves when loaded.
     * @private
     */
    _loadScript: function(src) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement("script");
            script.src = src;
            script.onload = function() {
                resolve(src);
            };
            script.onerror = function() {
                console.warn("CourseLoader: Failed to load " + src + " (skipping)");
                resolve(src); // Resolve anyway -- missing optional files should not block
            };
            document.head.appendChild(script);
        });
    },

    /**
     * Load multiple scripts sequentially (order matters for dependencies).
     * @private
     */
    _loadScriptsSequential: function(srcList) {
        var chain = Promise.resolve();
        srcList.forEach(function(src) {
            chain = chain.then(function() {
                return CourseLoader._loadScript(src);
            });
        });
        return chain;
    },

    /**
     * Load all course-specific scripts (data bundle, atomised, concepts).
     * Must be called AFTER detectCourse() and BEFORE initApp().
     * Returns a Promise that resolves when all scripts are loaded.
     */
    loadCourseScripts: function() {
        if (CourseLoader._loaded) {
            return Promise.resolve();
        }

        var config = CourseLoader._courseConfig;
        if (!config) {
            console.warn("CourseLoader: No course config set, skipping script load");
            return Promise.resolve();
        }

        console.log("CourseLoader: Loading scripts for " + config.displayName + "...");

        var allScripts = [];

        // 1. Data bundle (exam questions) -- must load first
        if (config.dataBundle) {
            allScripts.push(config.dataBundle);
        }

        // 2. Atomised skills files (topic files then loader)
        if (config.atomisedFiles && config.atomisedFiles.length > 0) {
            allScripts = allScripts.concat(config.atomisedFiles);
        }

        // 3. Concepts files
        if (config.conceptsFiles && config.conceptsFiles.length > 0) {
            config.conceptsFiles.forEach(function(cf) {
                allScripts.push(cf.src);
            });
        }

        if (allScripts.length === 0) {
            console.log("CourseLoader: No course scripts to load");
            CourseLoader._loaded = true;
            return Promise.resolve();
        }

        return CourseLoader._loadScriptsSequential(allScripts).then(function() {
            CourseLoader._loaded = true;
            console.log("CourseLoader: All " + allScripts.length + " scripts loaded");
        });
    },

    // ================================================================
    // HELPERS
    // ================================================================

    /**
     * Get the current course ID.
     */
    getCourseId: function() {
        return CourseLoader._courseId || DEFAULT_COURSE_ID;
    },

    /**
     * Get the current course config object.
     */
    getConfig: function() {
        return CourseLoader._courseConfig || COURSE_REGISTRY[DEFAULT_COURSE_ID];
    },

    /**
     * Get concepts file registration list for ConceptsUI.
     * Returns array of { globalVar, topic } for loaded concepts globals.
     */
    getConceptsRegistration: function() {
        var config = CourseLoader.getConfig();
        if (!config || !config.conceptsFiles) return [];
        return config.conceptsFiles.map(function(cf) {
            return { varName: cf.globalVar, topic: cf.topic };
        });
    },

    /**
     * Get the taxonomy object for the current course.
     * Returns { topicName: [subtopic1, subtopic2, ...], ... }
     */
    getTaxonomy: function() {
        var config = CourseLoader.getConfig();
        return (config && config.taxonomy) ? config.taxonomy : {};
    }
};
