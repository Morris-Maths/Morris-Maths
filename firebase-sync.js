// firebase-sync.js -- Firebase Firestore sync layer
// ENCODING: This file MUST be pure ASCII.
//
// Architecture:
//   - All reads come from local IndexedDB (fast)
//   - All writes go to BOTH IndexedDB AND Firestore
//   - On app load, Firestore data is pulled and merged into IndexedDB
//   - If Firestore is unavailable, the app works fine from IndexedDB alone
//
// This means the app works offline and syncs when connectivity is available.

"use strict";

var FirebaseSync = {
    db: null,           // Firestore database reference
    auth: null,         // Firebase auth reference
    studentId: null,    // Unique student identifier (code-based)
    enabled: false,     // Whether Firebase is configured and working

    /**
     * Initialise Firebase connection.
     * Called during app startup (non-blocking -- app works without it).
     */
    init: function(config) {
        if (!FIREBASE_ENABLED || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) {
            console.log("FirebaseSync: Not configured, running in local-only mode");
            return Promise.resolve();
        }

        // Initialise Firebase if not already done
        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
        }

        FirebaseSync.db = firebase.firestore();
        FirebaseSync.auth = firebase.auth();

        // Build student ID from access code
        var code = localStorage.getItem("wace_access_code");
        if (!code) {
            console.log("FirebaseSync: No access code, sync disabled");
            return Promise.resolve();
        }

        FirebaseSync.studentId = code.toUpperCase();
        FirebaseSync.enabled = true;

        // Sign in anonymously for Firestore access
        return FirebaseSync.auth.signInAnonymously().then(function() {
            console.log("FirebaseSync: Authenticated, student ID: " + FirebaseSync.studentId);

            // Retry any pending access code claims
            if (typeof AccessControl !== "undefined" && AccessControl.retryPendingClaim) {
                AccessControl.retryPendingClaim();
            }

            // Pull latest data from Firestore and merge into IndexedDB
            return FirebaseSync._pullFromCloud();
        }).catch(function(err) {
            console.warn("FirebaseSync: Auth failed, running local-only:", err.message);
            FirebaseSync.enabled = false;
        });
    },

    /**
     * Save a mastery record to both IndexedDB and Firestore.
     * Called by MasteryEngine after status transitions.
     */
    saveMastery: function(problemType, record) {
        if (!FirebaseSync.enabled || !FirebaseSync.studentId) return;

        var docRef = FirebaseSync.db
            .collection("students")
            .doc(FirebaseSync.studentId)
            .collection("mastery")
            .doc(problemType);

        docRef.set(record, { merge: true }).catch(function(err) {
            console.warn("FirebaseSync: Failed to sync mastery for " +
                problemType + ":", err.message);
        });
    },

    /**
     * Save a question history record to Firestore.
     */
    saveQuestionHistory: function(filename, record) {
        if (!FirebaseSync.enabled || !FirebaseSync.studentId) return;

        var docRef = FirebaseSync.db
            .collection("students")
            .doc(FirebaseSync.studentId)
            .collection("questionHistory")
            .doc(filename.replace(/\./g, "_")); // Firestore doesn't allow dots in doc IDs

        docRef.set(record, { merge: true }).catch(function(err) {
            console.warn("FirebaseSync: Failed to sync history for " +
                filename + ":", err.message);
        });
    },

    /**
     * Save a session summary to Firestore.
     */
    saveSession: function(sessionData) {
        if (!FirebaseSync.enabled || !FirebaseSync.studentId) return;

        var sessionsRef = FirebaseSync.db
            .collection("students")
            .doc(FirebaseSync.studentId)
            .collection("sessions");

        sessionsRef.add(Object.assign({}, sessionData, {
            syncedAt: firebase.firestore.FieldValue.serverTimestamp()
        })).catch(function(err) {
            console.warn("FirebaseSync: Failed to sync session:", err.message);
        });
    },

    /**
     * Save student profile/config to Firestore.
     */
    saveProfile: function(config) {
        if (!FirebaseSync.enabled || !FirebaseSync.studentId) return;

        var docRef = FirebaseSync.db
            .collection("students")
            .doc(FirebaseSync.studentId);

        var currentUser = FirebaseSync.auth.currentUser;

        docRef.set({
            profile: {
                name: config.studentName || "Unknown",
                classCode: CLASS_CODE || "",
                lastActive: firebase.firestore.FieldValue.serverTimestamp(),
                appVersion: APP_VERSION,
                authUid: currentUser ? currentUser.uid : null
            }
        }, { merge: true }).catch(function(err) {
            console.warn("FirebaseSync: Failed to sync profile:", err.message);
        });
    },

    /**
     * Save confidence watch data to Firestore.
     */
    saveConfidence: function(problemType, record) {
        if (!FirebaseSync.enabled || !FirebaseSync.studentId) return;

        var docRef = FirebaseSync.db
            .collection("students")
            .doc(FirebaseSync.studentId)
            .collection("confidence")
            .doc(problemType);

        docRef.set(record, { merge: true }).catch(function(err) {
            console.warn("FirebaseSync: Failed to sync confidence for " +
                problemType + ":", err.message);
        });
    },

    /**
     * Save an API cost record to Firestore.
     * Called by CostTracker after each Claude API call.
     */
    saveApiCost: function(entry) {
        if (!FirebaseSync.enabled || !FirebaseSync.studentId) return;

        var costsRef = FirebaseSync.db
            .collection("students")
            .doc(FirebaseSync.studentId)
            .collection("apiCosts");

        costsRef.add(Object.assign({}, entry, {
            syncedAt: firebase.firestore.FieldValue.serverTimestamp()
        })).catch(function(err) {
            console.warn("FirebaseSync: Failed to sync API cost:", err.message);
        });
    },

    /**
     * Pull all student data from Firestore and merge into IndexedDB.
     * Cloud data wins on conflicts (newer timestamp).
     * @private
     */
    _pullFromCloud: function() {
        if (!FirebaseSync.enabled || !FirebaseSync.studentId) {
            return Promise.resolve();
        }

        var studentRef = FirebaseSync.db
            .collection("students")
            .doc(FirebaseSync.studentId);

        // Pull mastery data
        return studentRef.collection("mastery").get().then(function(snapshot) {
            var promises = [];
            snapshot.forEach(function(doc) {
                var cloudRecord = doc.data();
                cloudRecord.problemType = doc.id;

                // Merge: cloud wins if it has a more recent lastAttempt
                promises.push(
                    DB.get(STORE_MASTERY, doc.id).then(function(localRecord) {
                        if (!localRecord) {
                            return DB.put(STORE_MASTERY, cloudRecord);
                        }
                        // Compare timestamps -- cloud wins if newer
                        var cloudTime = cloudRecord.lastAttempt ?
                            new Date(cloudRecord.lastAttempt).getTime() : 0;
                        var localTime = localRecord.lastAttempt ?
                            new Date(localRecord.lastAttempt).getTime() : 0;
                        if (cloudTime > localTime) {
                            return DB.put(STORE_MASTERY, cloudRecord);
                        }
                        return Promise.resolve();
                    })
                );
            });

            if (promises.length > 0) {
                console.log("FirebaseSync: Merged " + promises.length +
                    " mastery records from cloud");
            }
            return Promise.all(promises);
        }).catch(function(err) {
            console.warn("FirebaseSync: Pull failed:", err.message);
        });
    }
};
