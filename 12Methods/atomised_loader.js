// ======================================================================
// ATOMISED DATA LOADER v2.0
// Merges all 9 topic files into a single ATOMISED_DATA object.
// Include AFTER the topic-specific JS files in your HTML.
// ======================================================================

// Global reason library for the misconception picker
var ATOMISED_REASONS = [
  // General
  { id: "wrong_rule", label: "I used the wrong method/rule" },
  { id: "setup_error", label: "I set it up incorrectly" },
  { id: "substitution_error", label: "Method OK but substituted/evaluated wrong" },
  { id: "sign_error", label: "I made a sign error (+/−)" },
  { id: "interpretation_mixup", label: "I misread what was being asked" },
  { id: "algebra_slip", label: "Algebraic simplification error" },
  // Calculus-specific
  { id: "missing_chain_factor", label: "I forgot a chain rule factor" },
  // Probability-specific
  { id: "wrong_model", label: "I used the wrong distribution (e.g. Binomial vs Geometric)" },
  { id: "wrong_event", label: "Wrong event (≥ vs >, complement error)" },
  { id: "wrong_parameters", label: "I used the wrong parameters (n/p/k/μ/σ)" },
  { id: "probability_sum_error", label: "Forgot probabilities must sum to 1" },
  { id: "conditional_setup_error", label: "Set up conditional probability incorrectly" },
  // Catch-all
  { id: "not_sure", label: "Not sure / other" },
];


var ATOMISED_DATA = (function() {
  // Each topic file exposes a global with a .questions array.
  // To add a new topic: create the file, add its global name here.
  var _sources = [
    typeof ATOMISED_FURTHER_DIFFERENTIATION    !== 'undefined' ? ATOMISED_FURTHER_DIFFERENTIATION    : null,
    typeof ATOMISED_E_GROWTH_AND_DECAY         !== 'undefined' ? ATOMISED_E_GROWTH_AND_DECAY         : null,
    typeof ATOMISED_INTEGRALS                  !== 'undefined' ? ATOMISED_INTEGRALS                  : null,
    typeof ATOMISED_RECTILINEAR_MOTION         !== 'undefined' ? ATOMISED_RECTILINEAR_MOTION         : null,
    typeof ATOMISED_DISCRETE_RANDOM_VARIABLES  !== 'undefined' ? ATOMISED_DISCRETE_RANDOM_VARIABLES  : null,
    typeof ATOMISED_LOGARITHMS                 !== 'undefined' ? ATOMISED_LOGARITHMS                 : null,
    typeof ATOMISED_CONTINUOUS_RANDOM_VARIABLES !== 'undefined' ? ATOMISED_CONTINUOUS_RANDOM_VARIABLES : null,
    typeof ATOMISED_SAMPLING                   !== 'undefined' ? ATOMISED_SAMPLING                   : null,
    typeof ATOMISED_CONFIDENCE_INTERVALS       !== 'undefined' ? ATOMISED_CONFIDENCE_INTERVALS       : null,
  ];

  var all = [];
  _sources.forEach(function(src) { if (src) all = all.concat(src.questions); });

  // Build lookup indexes
  var byPtId = {};
  var byConcept = {};
  var byTopic = {};
  all.forEach(function(pt) {
    byPtId[pt.pt_id] = pt;
    var c = pt.concept || 'General';
    if (!byConcept[c]) byConcept[c] = [];
    byConcept[c].push(pt);
    var t = pt.topic || 'Uncategorised';
    if (!byTopic[t]) byTopic[t] = [];
    byTopic[t].push(pt);
  });

  return {
    questions: all,
    byPtId: byPtId,
    byConcept: byConcept,
    byTopic: byTopic,
    count: all.length,
    topics: Object.keys(byTopic),
  };
})();
