// ============================================================================
// TEACHER TOOLBAR (injected when teacher logs in via ?teacher URL)
// ============================================================================
function _injectTeacherToolbar() {
    var topBarRight = document.querySelector(".top-bar-right");
    if (!topBarRight) return;

    // Build course switcher options (teacher gets all courses)
    var courseSwitcherHTML = "";
    if (typeof COURSE_REGISTRY !== "undefined") {
        var courseKeys = Object.keys(COURSE_REGISTRY);
        if (courseKeys.length > 1) {
            var currentId = (typeof CourseLoader !== "undefined")
                ? CourseLoader.getCourseId() : DEFAULT_COURSE_ID;
            courseSwitcherHTML =
                '<div class="teacher-dropdown-divider"></div>' +
                '<div class="teacher-dropdown-label">Switch course</div>';
            courseKeys.forEach(function(key) {
                var cfg = COURSE_REGISTRY[key];
                var active = (key === currentId) ? " teacher-course-active" : "";
                courseSwitcherHTML +=
                    '<button class="teacher-dropdown-item teacher-course-item' + active +
                    '" data-course="' + key + '">' +
                    '<span class="teacher-dropdown-icon">\uD83D\uDCDA</span> ' +
                    cfg.displayName +
                    (key === currentId ? ' \u2713' : '') +
                    '</button>';
            });
        }
    }

    // Create the teacher menu container
    var teacherMenu = document.createElement("div");
    teacherMenu.id = "teacher-toolbar";
    teacherMenu.className = "teacher-toolbar";
    teacherMenu.innerHTML =
        '<button class="teacher-toolbar-btn" id="teacher-toolbar-toggle">' +
            '<span class="teacher-badge-icon">\uD83C\uDF93</span> Teacher' +
        '</button>' +
        '<div class="teacher-toolbar-dropdown" id="teacher-toolbar-dropdown">' +
            '<button class="teacher-dropdown-item" id="teacher-menu-costs">' +
                '<span class="teacher-dropdown-icon">\uD83D\uDCB0</span> Costs Dashboard' +
            '</button>' +
            courseSwitcherHTML +
            '<div class="teacher-dropdown-divider"></div>' +
            '<button class="teacher-dropdown-item teacher-dropdown-exit" id="teacher-menu-exit">' +
                '<span class="teacher-dropdown-icon">\u2190</span> Exit Teacher Mode' +
            '</button>' +
        '</div>';

    // Insert before the student name
    topBarRight.insertBefore(teacherMenu, topBarRight.firstChild);

    // Toggle dropdown
    var toggleBtn = document.getElementById("teacher-toolbar-toggle");
    var dropdown  = document.getElementById("teacher-toolbar-dropdown");

    toggleBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        dropdown.classList.toggle("open");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function() {
        dropdown.classList.remove("open");
    });

    // Costs dashboard
    document.getElementById("teacher-menu-costs").addEventListener("click", function() {
        dropdown.classList.remove("open");
        // Hide the main app, show the teacher dashboard overlay
        document.getElementById("app-container").style.display = "none";
        TeacherDashboard.open();
    });

    // Exit teacher mode
    document.getElementById("teacher-menu-exit").addEventListener("click", function() {
        dropdown.classList.remove("open");
        sessionStorage.removeItem("wace_teacher_mode");
        // Go back to the code screen (remove ?teacher param)
        var url = window.location.pathname;
        window.location.href = url;
    });

    // Course switcher items (teacher only)
    var courseItems = document.querySelectorAll(".teacher-course-item");
    courseItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var newCourse = item.getAttribute("data-course");
            if (!newCourse) return;
            dropdown.classList.remove("open");
            // Store the new course and reload so all scripts reload cleanly
            if (typeof CourseLoader !== "undefined") {
                localStorage.setItem(CourseLoader.COURSE_KEY, newCourse);
            } else {
                localStorage.setItem("wace_course_id", newCourse);
            }
            // Preserve teacher mode across reload (sessionStorage persists in same tab)
            // Don't include ?teacher to avoid re-showing code screen
            var url = window.location.pathname + "?course=" + newCourse;
            window.location.href = url;
        });
    });

    console.log("Teacher toolbar injected");
}

// ============================================================================
// APP INITIALISATION
// ============================================================================
function initApp() {
    console.log("=== Morris Maths v" + APP_VERSION + " ===");
    console.log("Initialising...");

    // Step 0: Load course-specific scripts (data bundle, atomised, concepts)
    var courseLoadPromise;
    if (typeof CourseLoader !== "undefined") {
        courseLoadPromise = CourseLoader.loadCourseScripts();
    } else {
        courseLoadPromise = Promise.resolve();
    }

    courseLoadPromise.then(function() {
        // Step 1: Initialise question engine (loads data from script-tag globals)
        QuestionEngine.init();

        // Step 2: Initialise IndexedDB
        return DB.init();
    }).then(function() {
        // Step 3: Merge any imported questions
        return DB.getAll(STORE_IMPORTED);
    }).then(function(imported) {
        QuestionEngine.mergeImportedQuestions(imported);

        // Step 4: Get schedule updates from IndexedDB
        return DB.getAll(STORE_SCHEDULE_UPDATES);
    }).then(function(scheduleUpdates) {
        // Step 5: Check config for ahead-of-schedule setting
        return DB.get(STORE_CONFIG, "main").then(function(config) {
            // Unlock ALL problem types (no schedule gating in Morris Maths)
            QuestionEngine.computeUnlocked(scheduleUpdates, true);
            // Safety net: if schedule is empty/missing, unlock everything
            if (QuestionEngine.unlockedProblemTypes.length === 0) {
                QuestionEngine.unlockedProblemTypes = QuestionEngine.allProblemTypes.slice();
                console.log("Morris Maths: unlocked all " +
                    QuestionEngine.unlockedProblemTypes.length + " problem types (no schedule)");
            }

            return config;
        });
    }).then(function(config) {
        // Step 7: Initialise UI event listeners
        UI.init();
        StudyUI.init();
        WrittenMode.init();
        PrintUI.init();
        KeyboardShortcuts.init();

        // Step 7b: Initialise Concepts UI (Targeted Revision)
        if (typeof ConceptsUI !== "undefined") {
            ConceptsUI.init();
        }

        // Step 8: Show welcome screen or main app
        if (!config) {
            console.log("First run detected - showing welcome screen");
            UI.showWelcomeScreen();
        } else {
            console.log("Returning user: " + config.studentName);
            UI.showMainApp(config);
        }

        // Step 9: Inject teacher toolbar if in teacher mode
        if (sessionStorage.getItem("wace_teacher_mode") === "true") {
            _injectTeacherToolbar();
        }

        console.log("Initialisation complete.");

        // Check MathJax loaded after a delay -- warn user if not
        setTimeout(function() {
            if (typeof MathJax === "undefined" || !MathJax.typesetPromise) {
                console.warn("MathJax not available -- equations will show as raw LaTeX");
                var banner = document.createElement("div");
                banner.className = "mathjax-warning";
                banner.innerHTML = SYMBOLS.CROSS +
                    " <strong>Math rendering not available.</strong> " +
                    "Equations will show as text. " +
                    "To fix: place the MathJax offline bundle in " +
                    "mathjax/ or connect to the internet." +
                    '<button onclick="this.parentNode.remove()" ' +
                    'style="margin-left:12px;cursor:pointer;border:none;' +
                    'background:none;font-size:1.1em;">&times;</button>';
                var topBar = document.getElementById("top-bar");
                if (topBar && topBar.parentNode) {
                    topBar.parentNode.insertBefore(banner, topBar.nextSibling);
                }
            }
        }, 12000);
    }).catch(function(err) {
        console.error("Initialisation failed:", err);
        // Show error with recovery option
        document.body.innerHTML =
            "<div style=\"padding:2em;font-family:sans-serif;max-width:600px;margin:0 auto;\">" +
            "<h1>Error Starting Study Trainer</h1>" +
            "<p>There was a problem initialising the application:</p>" +
            "<pre style=\"background:#f5f5f5;padding:12px;border-radius:6px;overflow-x:auto;\">" +
            (err.message || err) + "</pre>" +
            "<p>Try refreshing the page. If the problem persists, " +
            "try opening in a different browser (Edge or Chrome recommended).</p>" +
            "<p>If refreshing doesn't help, you can reset the app data:</p>" +
            "<button onclick=\"if(confirm('This will erase all your progress. Continue?')){" +
            "var r=indexedDB.deleteDatabase('" + DB_NAME + "');" +
            "r.onsuccess=function(){window.location.reload();};" +
            "r.onerror=function(){alert('Reset failed. Try clearing browser data.');};" +
            "}\" style=\"padding:10px 20px;background:#dc2626;color:white;border:none;" +
            "border-radius:6px;cursor:pointer;font-size:0.95rem;\">Reset App Data</button>" +
            "<p style=\"color:#888;font-size:0.85rem;margin-top:12px;\">" +
            "Warning: resetting will erase all progress, mastery records, and settings.</p>" +
            "</div>";
    });
}

// Start when DOM is ready
window.addEventListener("DOMContentLoaded", function() {
    // Step 0: Detect which course to load (sets paths, stores course ID)
    if (typeof CourseLoader !== "undefined") {
        CourseLoader.detectCourse();
    }

    // Check access control first (shows code screen if needed)
    if (typeof AccessControl !== "undefined") {
        AccessControl.init().then(function(result) {
            if (result.granted) {
                initApp();
            }
        });
    } else {
        // AccessControl not loaded (scripts missing), proceed directly
        initApp();
    }
});
