// ============================================================================
// MODE TOGGLES + HEADER NAV WIRING
// ============================================================================
function _initModeToggles() {
    // --- Header nav buttons (Print, Dashboard) ---
    var hdrNavBtns = document.querySelectorAll(".hdr-nav-btn");
    hdrNavBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var tab = btn.getAttribute("data-tab");
            // Deactivate all header nav
            hdrNavBtns.forEach(function(b) { b.classList.remove("active"); });
            btn.classList.add("active");
            UI.showTab(tab);
        });
    });

    // --- Answer method toggles: removed from header, now in targeted-config ---
    // The targeted-answer-group and targeted-marking-group toggles are
    // wired by ConceptsUI._bindToggleGroup() in concepts-ui.js init().

    // Sync study tab config toggles bidirectionally
    var studyAnswerGrp = document.getElementById("study-answer-group");
    if (studyAnswerGrp) {
        studyAnswerGrp.addEventListener("click", function(e) {
            var t = e.target.closest(".config-toggle");
            if (!t) return;
            studyAnswerGrp.querySelectorAll(".config-toggle").forEach(function(b) {
                b.setAttribute("aria-pressed", "false");
                b.classList.remove("active");
            });
            t.setAttribute("aria-pressed", "true");
            t.classList.add("active");
        });
    }
    var studyMarkingGrp = document.getElementById("study-marking-mode-group");
    if (studyMarkingGrp) {
        studyMarkingGrp.addEventListener("click", function(e) {
            var t = e.target.closest(".config-toggle");
            if (!t) return;
            var value = t.getAttribute("data-value");
            studyMarkingGrp.querySelectorAll(".config-toggle").forEach(function(b) {
                b.setAttribute("aria-pressed", "false");
                b.classList.remove("active");
            });
            t.setAttribute("aria-pressed", "true");
            t.classList.add("active");
            // Show/hide exam config
            var examRow = document.getElementById("exam-config-row");
            var timeRow = document.getElementById("study-time-row");
            if (examRow) examRow.style.display = (value === "exam") ? "flex" : "none";
            if (timeRow) timeRow.style.display = (value === "exam") ? "none" : "flex";
        });
    }

    // --- Home button: return to topic tree ---
    var homeBtn = document.getElementById("hdr-home-btn");
    if (homeBtn) {
        homeBtn.addEventListener("click", function() {
            // If a session is running, end it and return
            if (typeof StudyUI !== "undefined" && StudyUI.currentQuestion) {
                StudyUI.returnToHome();
            }
            // Reset targeted revision to show topic tree
            var targetedHome = document.getElementById("targeted-home");
            var targetedQArea = document.getElementById("targeted-question-area");
            var conceptsView = document.getElementById("concepts-review-view");
            if (targetedHome) targetedHome.style.display = "block";
            if (targetedQArea) { targetedQArea.style.display = "none"; targetedQArea.innerHTML = ""; }
            if (conceptsView) conceptsView.style.display = "none";
            // Clear selections
            if (typeof ConceptsUI !== "undefined") {
                ConceptsUI._selections = [];
                ConceptsUI._pendingAfterConcepts = { skills: [], exam: [] };
                ConceptsUI.buildTree();
            }
            // Switch to targeted tab and reset nav
            hdrNavBtns.forEach(function(b) { b.classList.remove("active"); });
            UI.showTab("targeted");
            window.scrollTo(0, 0);
        });
    }

    console.log("Header toggles initialised");
}

// ============================================================================
// TEACHER TOOLBAR (injected when teacher logs in via ?teacher URL)
// ============================================================================
function _injectTeacherToolbar() {
    var topBarLeft = document.querySelector(".top-bar-left");
    var topBarRight = document.querySelector(".top-bar-right");
    if (!topBarRight) return;

    // ---- Course switcher <select> in the top-bar-left (always visible) ----
    if (topBarLeft && typeof COURSE_REGISTRY !== "undefined") {
        var courseKeys = Object.keys(COURSE_REGISTRY);
        if (courseKeys.length > 0) {
            var currentId = (typeof CourseLoader !== "undefined")
                ? CourseLoader.getCourseId() : DEFAULT_COURSE_ID;

            var selectEl = document.createElement("select");
            selectEl.id = "teacher-course-select";
            selectEl.className = "teacher-course-select";
            selectEl.title = "Switch course";

            courseKeys.forEach(function(key) {
                var opt = document.createElement("option");
                opt.value = key;
                opt.textContent = COURSE_REGISTRY[key].displayName;
                if (key === currentId) opt.selected = true;
                selectEl.appendChild(opt);
            });

            selectEl.addEventListener("change", function() {
                var newCourse = selectEl.value;
                if (!newCourse) return;
                if (typeof CourseLoader !== "undefined") {
                    localStorage.setItem(CourseLoader.COURSE_KEY, newCourse);
                } else {
                    localStorage.setItem("wace_course_id", newCourse);
                }
                // Reload with new course (sessionStorage preserves teacher mode within tab)
                var url = window.location.pathname + "?course=" + newCourse;
                window.location.href = url;
            });

            topBarLeft.appendChild(selectEl);
        }
    }

    // ---- Teacher menu button in top-bar-right ----
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
            '<div class="teacher-dropdown-divider"></div>' +
            '<button class="teacher-dropdown-item teacher-dropdown-exit" id="teacher-menu-exit">' +
                '<span class="teacher-dropdown-icon">\u2190</span> Exit Teacher Mode' +
            '</button>' +
        '</div>';

    topBarRight.insertBefore(teacherMenu, topBarRight.firstChild);

    // Toggle dropdown
    var toggleBtn = document.getElementById("teacher-toolbar-toggle");
    var dropdown  = document.getElementById("teacher-toolbar-dropdown");

    toggleBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        dropdown.classList.toggle("open");
    });

    document.addEventListener("click", function() {
        dropdown.classList.remove("open");
    });

    // Costs dashboard
    document.getElementById("teacher-menu-costs").addEventListener("click", function() {
        dropdown.classList.remove("open");
        document.getElementById("app-container").style.display = "none";
        TeacherDashboard.open();
    });

    // Exit teacher mode
    document.getElementById("teacher-menu-exit").addEventListener("click", function() {
        dropdown.classList.remove("open");
        sessionStorage.removeItem("wace_teacher_mode");
        var url = window.location.pathname;
        window.location.href = url;
    });

    console.log("Teacher toolbar injected (course select + menu)");
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

        // Step 7a: Wire up compact mode toggles bar and header nav
        _initModeToggles();

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

        // Step 10: Populate course switcher in settings modal (always available)
        _initSettingsCourseSelect();

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

// ============================================================================
// SETTINGS: COURSE SWITCHER (always available when multiple courses exist)
// ============================================================================
function _initSettingsCourseSelect() {
    if (typeof COURSE_REGISTRY === "undefined") return;
    var courseKeys = Object.keys(COURSE_REGISTRY);
    if (courseKeys.length < 2) return; // No point showing if only one course

    var group = document.getElementById("settings-course-group");
    var selectEl = document.getElementById("settings-course-select");
    if (!group || !selectEl) return;

    var currentId = (typeof CourseLoader !== "undefined")
        ? CourseLoader.getCourseId() : DEFAULT_COURSE_ID;

    courseKeys.forEach(function(key) {
        var opt = document.createElement("option");
        opt.value = key;
        opt.textContent = COURSE_REGISTRY[key].displayName;
        if (key === currentId) opt.selected = true;
        selectEl.appendChild(opt);
    });

    selectEl.addEventListener("change", function() {
        var newCourse = selectEl.value;
        if (!newCourse || newCourse === currentId) return;
        if (typeof CourseLoader !== "undefined") {
            localStorage.setItem(CourseLoader.COURSE_KEY, newCourse);
        } else {
            localStorage.setItem("wace_course_id", newCourse);
        }
        // Reload with new course (sessionStorage preserves teacher mode within tab)
        var url = window.location.pathname + "?course=" + newCourse;
        window.location.href = url;
    });

    group.style.display = "block";
    console.log("Settings: Course switcher populated (" + courseKeys.length + " courses)");
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
        // If ?teacher is in the URL without Firebase, activate teacher mode
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("teacher")) {
            sessionStorage.setItem("wace_teacher_mode", "true");
        }
        initApp();
    }
});
