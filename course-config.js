// ============================================================================
// COURSE CONFIGURATION
// ============================================================================
// Defines available courses and their file manifests.
// Each course maps to a folder containing its data bundle, atomised practice
// files, concepts files, and diagram assets.
//
// ENCODING: This file MUST be pure ASCII. All non-ASCII chars are \uXXXX escaped.
// ============================================================================
"use strict";

var COURSE_REGISTRY = {

    // ------------------------------------------------------------------
    // 12 Methods
    // ------------------------------------------------------------------
    "12Methods": {
        displayName: "12 Methods",
        courseFolder: "12Methods",

        // Data bundle (exam questions + taxonomy)
        dataBundle: "12Methods/12Methods_data_bundle.js",

        // Diagram paths (relative to index.html)
        diagramPath: "12Methods/diagrams/",
        conceptsDiagramPath: "12Methods/concepts_diagrams/",
        practiceDiagramPath: "12Methods/practice_diagrams/",

        // Atomised skills files (loaded in order, loader last)
        atomisedFiles: [
            "12Methods/atomised_further_differentiation.js",
            "12Methods/atomised_logarithms.js",
            "12Methods/atomised_e_growth_and_decay.js",
            "12Methods/atomised_integrals.js",
            "12Methods/atomised_rectilinear_motion.js",
            "12Methods/atomised_continuous_random_variables.js",
            "12Methods/atomised_discrete_random_variables.js",
            "12Methods/atomised_confidence_intervals.js",
            "12Methods/atomised_sampling.js",
            "12Methods/atomised_loader.js"
        ],

        // Concepts files (global var name + topic label for ConceptsUI registration)
        conceptsFiles: [
            { src: "12Methods/concepts_further_differentiation.js",       globalVar: "CONCEPTS_FURTHER_DIFFERENTIATION",       topic: "Further Differentiation and Applications" },
            { src: "12Methods/concepts_integrals.js",                     globalVar: "CONCEPTS_INTEGRALS",                     topic: "Integrals" },
            { src: "12Methods/concepts_e_growth_and_decay.js",            globalVar: "CONCEPTS_E_GROWTH_AND_DECAY",            topic: "Exponential Growth and Decay" },
            { src: "12Methods/concepts_logarithms.js",                    globalVar: "CONCEPTS_LOGARITHMS",                    topic: "The Logarithmic Function" },
            { src: "12Methods/concepts_discrete_random_variables.js",     globalVar: "CONCEPTS_DISCRETE_RANDOM_VARIABLES",     topic: "Discrete Random Variables" },
            { src: "12Methods/concepts_continuous_random_variables.js",    globalVar: "CONCEPTS_CONTINUOUS_RANDOM_VARIABLES",   topic: "Continuous Random Variables and the Normal Distribution" },
            { src: "12Methods/concepts_confidence_intervals.js",          globalVar: "CONCEPTS_CONFIDENCE_INTERVALS",          topic: "Confidence Intervals for Proportions" },
            { src: "12Methods/concepts_sampling.js",                      globalVar: "CONCEPTS_SAMPLING",                      topic: "Sampling" },
            { src: "12Methods/concepts_rectilinear_motion.js",            globalVar: "CONCEPTS_RECTILINEAR_MOTION",            topic: "Rectilinear Motion" }
        ],

        // Taxonomy for Targeted Revision topic tree (topics -> subtopics)
        taxonomy: {
            "Further Differentiation and Applications": [
                "Basic Differentiation Skills",
                "Exponential Growth and Decay",
                "Second Derivatives",
                "Small Increments",
                "Applications of Differentiation",
                "Optimisation Problems"
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
            "Confidence Intervals for Proportions": [
                "Random Sampling",
                "Sample Proportions",
                "Confidence Intervals"
            ],
            "Rectilinear Motion": [
                "Kinematics: Differentiation",
                "Kinematics: Integration"
            ]
        }
    },

    // ------------------------------------------------------------------
    // 11 Methods (placeholder -- populate when content is ready)
    // ------------------------------------------------------------------
    "11Methods": {
        displayName: "11 Methods",
        courseFolder: "11Methods",

        dataBundle: "11Methods/11Methods_data_bundle.js",

        diagramPath: "11Methods/diagrams/",
        conceptsDiagramPath: "11Methods/concepts_diagrams/",
        practiceDiagramPath: "11Methods/practice_diagrams/",

        atomisedFiles: [
            // Add 11Methods atomised files here as they are created
            // "11Methods/atomised_loader.js"
        ],

        conceptsFiles: [
            // Add 11Methods concepts files here as they are created
        ],

        taxonomy: {
            // Add 11Methods taxonomy here
            // "Functions": ["Linear Functions", "Quadratic Functions", ...],
        }
    }
};

// Default course if none detected (fallback)
var DEFAULT_COURSE_ID = "12Methods";
