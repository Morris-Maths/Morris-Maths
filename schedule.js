// schedule.js -- API endpoints and teacher configuration
// ENCODING: This file MUST be pure ASCII. All non-ASCII chars are \uXXXX escaped.
//
// NOTE: Course-specific data (class name, topics, etc.) is now in course-config.js.
// This file is retained for API endpoint configuration and teacher password only.
// The enabledProblemTypes list is kept for backward compatibility but is overridden
// at startup -- all problem types are unlocked regardless.

// Teacher-only password. Entered on the access code screen to open the cost dashboard.
// Keep this private -- do not share with students.
var TEACHER_DASHBOARD_PASSWORD = "MrMorris2026";

const TAUGHT_SCHEDULE = {
  "className": "Morris Maths",
  "teacherName": "Mr Morris",
  "markEndpoint": "https://australia-southeast1-wace-trainer.cloudfunctions.net/mark",
  "sympyEndpoint": "https://australia-southeast1-wace-trainer.cloudfunctions.net/verify",
  "enabledProblemTypes": []
};
