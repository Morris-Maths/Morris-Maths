#!/usr/bin/env python3
"""
MASTER_TAXONOMY.py — Single combined taxonomy for all 7 topics.
═══════════════════════════════════════════════════════════════
270 PTs across 7 topics. This is the crash-proof reference file.
Save FIRST before building any documents.

Restructured to match platform topic/subtopic headings:
  - e_growth_and_decay merged INTO further_differentiation
  - sampling + confidence_intervals merged INTO interval_estimates
  - XX_ PTs folded into Basic Differentiation Skills
  - Rectilinear Motion sections use colons (Kinematics: X), not em dashes
  - Kinematics: General added as first section (sort-first placeholder)

Usage:
    from MASTER_TAXONOMY import TOPICS, lookup_pt, find_topic_for_pt

    info = lookup_pt("FD_001")
    topic_key = find_topic_for_pt("KN_042")
"""

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# TOPIC DEFINITIONS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TOPICS = {

    # ═══════════════════════════════════════════════════════════════
    # 1. FURTHER DIFFERENTIATION AND APPLICATIONS
    #    (includes Exponential Growth and Decay as a subtopic)
    # ═══════════════════════════════════════════════════════════════
    "further_differentiation": {
        "title": "Further Differentiation and Applications",
        "js_file": "atomised_further_differentiation.js",
        "var_name": "ATOMISED_FURTHER_DIFFERENTIATION",
        "concepts_file": "concepts_further_differentiation.js",
        "scope": (
            "Product, quotient, chain rules. Exponential/trig differentiation. "
            "Tangent lines, gradients. Second derivatives, concavity, inflection. "
            "Curve sketching, small increments, optimisation. "
            "Exponential growth/decay models A=A₀e^{kt}, finding k, half-life, "
            "rate of change dA/dt = kA, shifted-time formula, limiting behaviour."
        ),
        "excludes": [
            "Logarithmic functions, log laws, d/dx(ln x) (→ logarithms)",
            "Integration (→ integrals)",
            "Kinematics (→ rectilinear_motion)",
        ],
        "stats": {"pts": 62, "questions": 753, "seedable": 637, "conceptual": 116},
        "needs_expansion": False,
        "sections": {
            "Basic Differentiation Skills": [
                "FD_001", "FD_NEW_01", "FD_002", "FD_NEW_02", "FD_003", "FD_NEW_03",
                "FD_004", "FD_005", "FD_006", "FD_007", "FD_008", "FD_009",
                "FD_010", "FD_011", "FD_012", "FD_013", "FD_014", "FD_015", "FD_016",
                "XX_001", "XX_002", "XX_003", "XX_004",
                "XX_005", "XX_006", "XX_007", "XX_008",
            ],
            "Exponential Growth and Decay": [
                "FD_NEW_04", "FD_017", "FD_018", "FD_019", "FD_020", "FD_021",
                "FD_022", "FD_023", "FD_024", "FD_025", "FD_026", "FD_027",
            ],
            "Second Derivatives": [
                "FD_NEW_05", "FD_NEW_06", "FD_NEW_08",
                "FD_030", "FD_031", "FD_032", "FD_033", "FD_034", "FD_035",
                "FD_036", "FD_037", "FD_038", "FD_039", "FD_040",
                "FD_045", "FD_046",
            ],
            "Small Increments": ["FD_NEW_07", "FD_041", "FD_042", "FD_043"],
            "Applications of Differentiation": ["FD_044"],
            "Optimisation Problems": ["FD_028", "FD_029"],
        },
    },

    # ═══════════════════════════════════════════════════════════════
    # 2. RECTILINEAR MOTION
    # ═══════════════════════════════════════════════════════════════
    "rectilinear_motion": {
        "title": "Rectilinear Motion",
        "js_file": "atomised_rectilinear_motion.js",
        "var_name": "ATOMISED_RECTILINEAR_MOTION",
        "concepts_file": "concepts_rectilinear_motion.js",
        "scope": (
            "Displacement, velocity, acceleration via differentiation/integration. "
            "Evaluating x(t), v(t), a(t). Stationary/rest times, direction changes, "
            "speeding up/slowing down, displacement vs distance, average velocity/speed."
        ),
        "stats": {"pts": 76, "questions": 80, "seedable": 72, "conceptual": 8},
        "needs_expansion": True,
        "expansion_note": "Most PTs have only 1 question. Need 3E/5M/5H per PT = ~990 questions.",
        "sections": {
            # Kinematics: General listed FIRST (sort-first per platform)
            "Kinematics: General": [],
            "Kinematics: Differentiation": [
                "KN_001", "KN_002", "KN_003", "KN_004", "KN_005",
                "KN_006", "KN_007", "KN_008", "KN_009", "KN_010", "KN_011",
            ],
            "Kinematics: Integration": [
                "KN_012", "KN_013", "KN_014", "KN_015", "KN_016", "KN_017", "KN_018",
                "KN_019", "KN_020", "KN_021", "KN_022", "KN_023", "KN_024", "KN_025",
                "KN_026", "KN_027", "KN_028", "KN_029", "KN_030", "KN_031", "KN_032",
                "KN_033", "KN_034", "KN_035", "KN_036", "KN_037", "KN_038", "KN_039",
                "KN_040", "KN_041", "KN_042", "KN_043", "KN_044", "KN_045", "KN_046",
                "KN_047", "KN_048", "KN_049", "KN_050", "KN_051", "KN_052", "KN_053",
                "KN_054", "KN_055", "KN_056", "KN_057", "KN_058", "KN_059", "KN_060",
                "KN_061", "KN_062", "KN_063", "KN_064", "KN_065", "KN_066", "KN_067",
                "KN_068", "KN_069", "KN_070", "KN_071", "KN_072", "KN_073", "KN_074",
                "KN_075", "KN_076",
            ],
        },
    },

    # ═══════════════════════════════════════════════════════════════
    # 3. INTEGRALS
    # ═══════════════════════════════════════════════════════════════
    "integrals": {
        "title": "Integrals",
        "js_file": "atomised_integrals.js",
        "var_name": "ATOMISED_INTEGRALS",
        "concepts_file": "concepts_integrals.js",
        "scope": (
            "Anti-derivatives, reverse chain rule, definite integrals, "
            "area under/between curves, accumulation functions, "
            "interval splitting, total change formula, FTC Parts 1 & 2, hence-integrate."
        ),
        "excludes": [
            "Kinematics (→ rectilinear_motion)",
            "∫1/x dx and ∫f'/f dx (→ logarithms)",
        ],
        "stats": {"pts": 43, "questions": 162, "seedable": 121, "conceptual": 41},
        "needs_expansion": True,
        "expansion_note": "Many PTs still have few questions. Target 3E/5M/5H per PT.",
        "sections": {
            "Anti-differentiation": [
                "IN_001", "IN_002", "IN_003", "IN_004", "IN_005", "IN_006",
                "IN_028", "IN_029", "IN_030", "IN_031", "IN_032", "IN_033", "IN_035",
            ],
            "Definite Integrals": [
                "IN_014", "IN_015", "IN_016", "IN_017", "IN_018", "IN_019",
                "IN_020", "IN_021", "IN_038", "IN_039", "IN_037",
            ],
            "Fundamental Theorem": [
                "IN_022", "IN_023", "IN_024", "IN_025", "IN_026", "IN_027",
                "IN_040", "IN_041",
            ],
            "Applications of Integration": [
                "IN_007", "IN_008", "IN_009", "IN_010", "IN_011", "IN_012", "IN_013",
                "IN_042", "IN_044", "IN_043", "IN_045",
            ],
        },
    },

    # ═══════════════════════════════════════════════════════════════
    # 4. DISCRETE RANDOM VARIABLES
    # ═══════════════════════════════════════════════════════════════
    "discrete_random_variables": {
        "title": "Discrete Random Variables",
        "js_file": "atomised_discrete_random_variables.js",
        "var_name": "ATOMISED_DISCRETE_RANDOM_VARIABLES",
        "concepts_file": "concepts_discrete_random_variables.js",
        "scope": (
            "Bernoulli and Binomial distributions. General DRVs: probability tables, "
            "E(X), Var(X), SD(X), E(aX+b), Var(aX+b), conditional probability, "
            "mode, CDF."
        ),
        "stats": {"pts": 23, "questions": 299, "seedable": 258, "conceptual": 41},
        "needs_expansion": False,
        "sections": {
            "General Discrete Random Variables": [
                "DR_011", "DR_012", "DR_013", "DR_014", "DR_015", "DR_016",
                "DR_017", "DR_018", "DR_019", "DR_020", "DR_021", "DR_022", "DR_023",
            ],
            "Bernoulli Distributions": ["DR_001", "DR_002"],
            "Binomial Distributions": [
                "DR_003", "DR_004", "DR_005", "DR_006",
                "DR_007", "DR_008", "DR_009", "DR_010",
            ],
        },
    },

    # ═══════════════════════════════════════════════════════════════
    # 5. THE LOGARITHMIC FUNCTION
    # ═══════════════════════════════════════════════════════════════
    "logarithms": {
        "title": "The Logarithmic Function",
        "js_file": "atomised_logarithms.js",
        "var_name": "ATOMISED_LOGARITHMS",
        "concepts_file": "concepts_logarithms.js",
        "scope": (
            "Log functions, log laws, log equations, graphs of ln(x), "
            "d/dx(ln(x)), d/dx(ln(g(x))), ∫1/x dx, ∫f'(x)/f(x) dx, "
            "integration by parts with ln, log-based problem solving."
        ),
        "stats": {"pts": 28, "questions": 364, "seedable": 312, "conceptual": 52},
        "needs_expansion": False,
        "sections": {
            "Logarithmic Functions": [
                "LN_006", "LN_007", "LN_008", "LN_009", "LN_010", "LN_011",
                "LN_012", "LN_013", "LN_014", "LN_015", "LN_016", "LN_017",
                "LN_018", "LN_019", "LN_020", "LN_021", "LN_022", "LN_023",
                "LN_024", "LN_027", "LN_028",
            ],
            "Calculus of the Natural Logarithmic Function": [
                "LN_001", "LN_002", "LN_003", "LN_004", "LN_005", "LN_025", "LN_026",
            ],
        },
    },

    # ═══════════════════════════════════════════════════════════════
    # 6. CONTINUOUS RANDOM VARIABLES AND THE NORMAL DISTRIBUTION
    # ═══════════════════════════════════════════════════════════════
    "continuous_random_variables": {
        "title": "Continuous Random Variables and the Normal Distribution",
        "js_file": "atomised_continuous_random_variables.js",
        "var_name": "ATOMISED_CONTINUOUS_RANDOM_VARIABLES",
        "concepts_file": "concepts_continuous_random_variables.js",
        "scope": (
            "PDFs, CDFs, E(X) by integration, Var(X), median/quartiles, mode, "
            "conditional probability for CRVs. Normal distribution N(μ,σ²), "
            "standardisation, z-scores, inverse normal, empirical rule, "
            "finding μ and σ from tail probabilities."
        ),
        "stats": {"pts": 21, "questions": 24, "seedable": 23, "conceptual": 1},
        "needs_expansion": True,
        "expansion_note": "Most PTs have only 1 question. Need 3E/5M/5H per PT = ~275 questions.",
        "sections": {
            "General Continuous Random Variables": [
                "CN_001", "CN_002", "CN_003", "CN_004", "CN_005", "CN_006",
                "CN_007", "CN_008", "CN_009", "CN_010", "CN_011", "CN_012",
            ],
            "Normal Distributions": [
                "CN_013", "CN_014", "CN_015", "CN_016", "CN_017",
                "CN_018", "CN_019", "CN_020", "CN_021",
            ],
        },
    },

    # ═══════════════════════════════════════════════════════════════
    # 7. INTERVAL ESTIMATES FOR PROPORTIONS
    #    (merged from sampling + confidence_intervals)
    # ═══════════════════════════════════════════════════════════════
    "interval_estimates": {
        "title": "Interval Estimates for Proportions",
        "js_file": "atomised_interval_estimates.js",
        "var_name": "ATOMISED_INTERVAL_ESTIMATES",
        "concepts_file": "concepts_interval_estimates.js",
        "scope": (
            "Sampling methods, bias identification, sample proportion p̂, "
            "distribution of p̂, mean/SD of sampling distribution, CLT for proportions. "
            "CI calculation: p̂ ± z*√(p̂(1-p̂)/n), margin of error, "
            "interpreting CIs, effect of sample size/confidence level on width, "
            "required sample size determination."
        ),
        "stats": {"pts": 17, "questions": 19, "seedable": 13, "conceptual": 6},
        "needs_expansion": True,
        "expansion_note": "Most PTs have only 1 question. Need 3E/5M/5H per PT = ~220 questions.",
        "sections": {
            "Random Sampling": ["IE_011"],
            "Sample Proportions": [
                "IE_012", "IE_013", "IE_014", "IE_015", "IE_016", "IE_017",
            ],
            "Confidence Intervals for Proportions": [
                "IE_001", "IE_002", "IE_003", "IE_004", "IE_005",
                "IE_006", "IE_007", "IE_008", "IE_009", "IE_010",
            ],
        },
    },
}


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# DEPRECATED TOPIC KEYS — for backward compatibility
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# These topics were merged in the restructure. Old code referencing
# them should be updated to use the new keys.

DEPRECATED_KEYS = {
    "e_growth_and_decay": "further_differentiation",
    "sampling": "interval_estimates",
    "confidence_intervals": "interval_estimates",
}


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PT DETAIL REGISTRY
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Loaded from taxonomy_raw.json at runtime, or can be queried
# from the JS files directly. This section provides the lookup API.

import json as _json
from pathlib import Path as _Path

_TAXONOMY_JSON = _Path(__file__).parent / "taxonomy_raw.json"
_PT_REGISTRY = {}

def _load_registry():
    global _PT_REGISTRY
    if _PT_REGISTRY:
        return
    if _TAXONOMY_JSON.exists():
        with open(_TAXONOMY_JSON) as f:
            _PT_REGISTRY = _json.load(f)
    else:
        # Build from TOPICS sections
        for topic_key, topic in TOPICS.items():
            for section, pt_ids in topic.get("sections", {}).items():
                for pt_id in pt_ids:
                    _PT_REGISTRY[pt_id] = {
                        "file": topic_key,
                        "topic": topic["title"],
                        "subtopic": section,
                    }


def lookup_pt(pt_id):
    """Look up full metadata for a PT ID. Returns dict or None."""
    _load_registry()
    return _PT_REGISTRY.get(pt_id)


def find_topic_for_pt(pt_id):
    """Return the topic_key for a PT ID, or None."""
    _load_registry()
    info = _PT_REGISTRY.get(pt_id)
    if info:
        return info["file"]
    return None


def all_pt_ids():
    """Return sorted list of all PT IDs."""
    _load_registry()
    return sorted(_PT_REGISTRY.keys())


def pts_in_topic(topic_key):
    """Return list of PT IDs belonging to a topic.
    Accepts deprecated keys (e.g. 'sampling' -> 'interval_estimates')."""
    resolved = DEPRECATED_KEYS.get(topic_key, topic_key)
    topic = TOPICS.get(resolved, {})
    pts = []
    for section_pts in topic.get("sections", {}).values():
        pts.extend(section_pts)
    return sorted(pts)


def topics_needing_expansion():
    """Return list of topic_keys that need more questions."""
    return [k for k, v in TOPICS.items() if v.get("needs_expansion")]


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# SUMMARY STATS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TOTAL_PTS = sum(t["stats"]["pts"] for t in TOPICS.values())
TOTAL_QUESTIONS = sum(t["stats"]["questions"] for t in TOPICS.values())
TOTAL_SEEDABLE = sum(t["stats"]["seedable"] for t in TOPICS.values())
TOTAL_CONCEPTUAL = sum(t["stats"]["conceptual"] for t in TOPICS.values())


if __name__ == "__main__":
    print("MASTER TAXONOMY — 7 Topics")
    print("=" * 60)
    print(f"{'Topic':<48} {'PTs':>4} {'Qs':>5} {'Seed':>5} {'Exp?':>5}")
    print("-" * 60)
    for k, v in TOPICS.items():
        s = v["stats"]
        exp = "⚠" if v.get("needs_expansion") else "✓"
        print(f"  {v['title'][:46]:<46} {s['pts']:>4} {s['questions']:>5} {s['seedable']:>5} {exp:>5}")
    print("-" * 60)
    print(f"  {'TOTAL':<46} {TOTAL_PTS:>4} {TOTAL_QUESTIONS:>5} {TOTAL_SEEDABLE:>5}")
    print(f"\n  Topics needing expansion: {', '.join(topics_needing_expansion())}")
