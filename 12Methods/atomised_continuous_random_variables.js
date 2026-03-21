// ======================================================================
// ATOMISED PRACTICE — ATOMISED_CONTINUOUS_RANDOM_VARIABLES
// Topic: Continuous Random Variables and the Normal Distribution
// 21 PTs, 24 questions (E:0 M:24 H:0)
// Reorganised from source files — richest version kept for each PT
// Unquoted keys for WSH compatibility
// ======================================================================

var ATOMISED_CONTINUOUS_RANDOM_VARIABLES = {
  questions: [
    {
          pt_id: "CN_001",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Area Calculations",
          pt: "Determining parameter of PDF using area condition",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_001_m01",
              q: "$f(x) = cx$ for $0 \\leq x \\leq 4$. Find $c$.",
              a: "$\\int_0^4 cx dx = c \\cdot 8 = 1 \\Rightarrow c = \\frac{1}{8}$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
            },
            constraints: ["v1 != 4"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)"},
              a: {"4": "str(v1)"},
            },
            sourceValues: {"v1": 4},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Expected Value > Calculating $E(aX + b)$ using linearity of expectation

    {
          pt_id: "CN_002",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Expected Value",
          pt: "Calculating $E(aX + b)$ using linearity of expectation",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_002_m01",
              q: "Given $E(X) = 4$, find $E(3X - 7)$.",
              a: "$E(3X - 7) = 3(4) - 7 = 5$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 3 (source: 7)"},
            },
            constraints: ["v1 != 4 or v2 != 3 or v3 != 7"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "3": "str(v2)", "7": "str(v3)"},
              a: {"4": "str(v1)", "3": "str(v2)", "7": "str(v3)"},
            },
            sourceValues: {"v1": 4, "v2": 3, "v3": 7},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Expected Value > Calculating expected value of continuous random variabl

    {
          pt_id: "CN_003",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Expected Value",
          pt: "Calculating expected value of continuous random variable by integration",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_003_m01",
              q: "$f(x) = 2x$ for $0 \\leq x \\leq 1$. Find $E(X)$.",
              a: "$E(X) = \\int_0^1 x \\cdot 2x dx = \\int_0^1 2x^2 dx = \\frac{2}{3}$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
            },
            constraints: ["v1 != 2"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)"},
              a: {"2": "str(v1)"},
            },
            sourceValues: {"v1": 2},
          }
        },
            {
              qid: "CN_003_m02",
              q: "$f(x) = \\frac{3}{8}x^2$ for $0 \\leq x \\leq 2$. Find $E(X)$.",
              a: "$E(X) = \\int_0^2 x \\cdot \\frac{3}{8}x^2 dx = \\frac{3}{8} \\cdot \\frac{x^4}{4}\\Big|_0^2 = \\frac{3}{8} \\cdot 4 = \\frac{3}{2}$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 2 (source: 8)"},
              v3: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 3 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 8 or v3 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "8": "str(v2)", "2": "str(v3)"},
              a: {"3": "str(v1)", "8": "str(v2)", "2": "str(v3)"},
            },
            sourceValues: {"v1": 3, "v2": 8, "v3": 2},
          }
        },
          ],
          hard: [
          ],
        },
    
        // General/Other > Calculating conditional probability for continuous rand

    {
          pt_id: "CN_004",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "General/Other",
          pt: "Calculating conditional probability for continuous random variable",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_004_m01",
              q: "Given $f(x) = 2x$ for $0 \\leq x \\leq 1$, find $P(X > 0.5 | X > 0.3)$.",
              a: "$P(X > 0.5 | X > 0.3) = \\frac{P(X > 0.5)}{P(X > 0.3)} = \\frac{1 - 0.25}{1 - 0.09} = \\frac{0.75}{0.91} \\approx 0.824$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
            },
            constraints: ["v1 != 2"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)"},
              a: {"2": "str(v1)"},
            },
            sourceValues: {"v1": 2},
          }
        },
          ],
          hard: [
          ],
        },
    
        // General/Other > Finding median by solving integral equation for continu

    {
          pt_id: "CN_005",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "General/Other",
          pt: "Finding median by solving integral equation for continuous RV",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_005_m01",
              q: "$f(x) = 2(1-x)$ for $0 \\leq x \\leq 1$. Find the median $m$.",
              a: "$\\int_0^m 2(1-x) dx = 0.5 \\Rightarrow [2x - x^2]_0^m = 0.5 \\Rightarrow 2m - m^2 = 0.5 \\Rightarrow m^2 - 2m + 0.5 = 0 \\Rightarrow m = 1 - \\frac{\\sqrt{2}}{2} \\approx 0.293$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
            },
            constraints: ["v1 != 2"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)"},
              a: {"2": "str(v1)"},
            },
            sourceValues: {"v1": 2},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Integration Techniques > Calculating probability for continuous random variable

    {
          pt_id: "CN_006",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Integration Techniques",
          pt: "Calculating probability for continuous random variable by integration",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_006_m01",
              q: "$f(x) = \\frac{3}{8}x^2$ for $0 \\leq x \\leq 2$. Find $P(X \\leq 1)$.",
              a: "$P(X \\leq 1) = \\int_0^1 \\frac{3}{8}x^2 dx = \\frac{3}{8} \\cdot \\frac{1}{3} = \\frac{1}{8} = 0.125$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 2 (source: 8)"},
              v3: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 3 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 8 or v3 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "8": "str(v2)", "2": "str(v3)"},
              a: {"3": "str(v1)", "8": "str(v2)", "2": "str(v3)"},
            },
            sourceValues: {"v1": 3, "v2": 8, "v3": 2},
          }
        },
            {
              qid: "CN_006_m02",
              q: "$f(x) = \\frac{1}{2}e^{-x/2}$ for $x \\geq 0$. Find $P(1 \\leq X \\leq 3)$.",
              a: "$P = \\int_1^3 \\frac{1}{2}e^{-x/2} dx = [-e^{-x/2}]_1^3 = -e^{-3/2} + e^{-1/2} = e^{-0.5} - e^{-1.5} \\approx 0.383$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 2 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "3": "str(v2)"},
              a: {"2": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 3},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Integration Techniques > Determining equation of pdf from graph and integrating

    {
          pt_id: "CN_007",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Integration Techniques",
          pt: "Determining equation of pdf from graph and integrating to find probability",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_007_m01",
              q: "A pdf forms a triangle with vertices at $(0, 0)$, $(4, 0)$, and $(2, 0.5)$. Find $P(X \\leq 2)$.",
              a: "For $0 \\leq x \\leq 2$: $f(x) = \\frac{x}{4}$ (line from origin to peak). $P(X \\leq 2) = \\int_0^2 \\frac{x}{4} dx = \\frac{1}{4} \\cdot \\frac{x^2}{2}\\Big|_0^2 = \\frac{1}{4} \\cdot 2 = 0.5$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 4 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "2": "str(v2)"},
              a: {"4": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 4, "v2": 2},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Uniform Distribution > Calculating mean and variance of continuous uniform dis

    {
          pt_id: "CN_008",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Uniform Distribution",
          pt: "Calculating mean and variance of continuous uniform distribution",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "algebra_slip", "interpretation_mixup", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_008_m01",
              q: "$X \\sim U(0, 12)$. Find $E(X)$ and $\\text{Var}(X)$.",
              a: "$E(X) = \\frac{0+12}{2} = 6$. $\\text{Var}(X) = \\frac{(12-0)^2}{12} = 12$."
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 6, "max": 18, "step": 1, "description": "Value 1 (source: 12)"},
            },
            constraints: ["v1 != 12"],
            derived: {
            },
            substitutions: {
              q: {"12": "str(v1)"},
              a: {"12": "str(v1)"},
            },
            sourceValues: {"v1": 12},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Uniform Distribution > Calculating probability for uniform distribution

    {
          pt_id: "CN_009",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Uniform Distribution",
          pt: "Calculating probability for uniform distribution",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_009_m01",
              q: "$X \\sim U(2, 8)$. Find $P(3 \\leq X \\leq 5)$.",
              a: "$P = \\frac{5-3}{8-2} = \\frac{2}{6} = \\frac{1}{3}$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 2 (source: 8)"},
              v3: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 3 (source: 3)"},
              v4: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 4 (source: 5)"},
            },
            constraints: ["v1 != 2 or v2 != 8 or v3 != 3"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "8": "str(v2)", "3": "str(v3)", "5": "str(v4)"},
              a: {"2": "str(v1)", "8": "str(v2)", "3": "str(v3)", "5": "str(v4)"},
            },
            sourceValues: {"v1": 2, "v2": 8, "v3": 3, "v4": 5},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Uniform Distribution > Sketching probability density function of uniform distr

    {
          pt_id: "CN_010",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Uniform Distribution",
          pt: "Sketching probability density function of uniform distribution",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_010_m01",
              q: "Sketch the pdf of $X \\sim U(1, 5)$ and state the height of the pdf.",
              a: "Horizontal line from $x = 1$ to $x = 5$ at height $\\frac{1}{5-1} = \\frac{1}{4} = 0.25$. Zero elsewhere."
            ,
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
          ],
          hard: [
          ],
        },
    
        // Variance Calculations > Calculating $\text{Var}(aX + b)$ using variance propert

    {
          pt_id: "CN_011",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Variance Calculations",
          pt: "Calculating $\\text{Var}(aX + b)$ using variance properties",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_011_m01",
              q: "Given $\\text{Var}(X) = 9$, find $\\text{Var}(2X + 5)$ and $\\text{SD}(2X + 5)$.",
              a: "$\\text{Var}(2X + 5) = 4(9) = 36$. $\\text{SD}(2X + 5) = 6$."
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 1 (source: 9)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 3 (source: 5)"},
            },
            constraints: ["v1 != 9 or v2 != 2 or v3 != 5"],
            derived: {
            },
            substitutions: {
              q: {"9": "str(v1)", "2": "str(v2)", "5": "str(v3)"},
              a: {"9": "str(v1)", "2": "str(v2)", "5": "str(v3)"},
            },
            sourceValues: {"v1": 9, "v2": 2, "v3": 5},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Variance Calculations > Calculating standard deviation of continuous random var

    {
          pt_id: "CN_012",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "General Continuous Random Variables",
          concept: "Variance Calculations",
          pt: "Calculating standard deviation of continuous random variable using variance formula",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_012_m01",
              q: "$f(x) = 2x$ for $0 \\leq x \\leq 1$. Given $E(X) = \\frac{2}{3}$, find $\\text{SD}(X)$.",
              a: "$E(X^2) = \\int_0^1 x^2 \\cdot 2x dx = \\frac{1}{2}$. $\\text{Var}(X) = \\frac{1}{2} - \\left(\\frac{2}{3}\\right)^2 = \\frac{1}{2} - \\frac{4}{9} = \\frac{1}{18}$. $\\text{SD}(X) = \\frac{1}{3\\sqrt{2}} \\approx 0.236$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 2 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "3": "str(v2)"},
              a: {"2": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 3},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Expected Value (Normal) > Finding expected value and variance under linear transf

    {
          pt_id: "CN_013",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "Normal Distributions",
          concept: "Expected Value (Normal)",
          pt: "Finding expected value and variance under linear transformation $Y = aX + b$",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_013_m01",
              q: "$X \\sim N(100, 16)$. $Y = 2X - 30$. Find the distribution of $Y$.",
              a: "$E(Y) = 2(100) - 30 = 170$. $\\text{Var}(Y) = 4(16) = 64$. So $Y \\sim N(170, 64)$."
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 50, "max": 150, "step": 5, "description": "Value 1 (source: 100)"},
              v2: {"type": "int", "min": 8, "max": 24, "step": 1, "description": "Value 2 (source: 16)"},
              v3: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 3 (source: 2)"},
              v4: {"type": "int", "min": 15, "max": 45, "step": 5, "description": "Value 4 (source: 30)"},
            },
            constraints: ["v1 != 100 or v2 != 16 or v3 != 2"],
            derived: {
            },
            substitutions: {
              q: {"100": "str(v1)", "16": "str(v2)", "2": "str(v3)", "30": "str(v4)"},
              a: {"100": "str(v1)", "16": "str(v2)", "2": "str(v3)", "30": "str(v4)"},
            },
            sourceValues: {"v1": 100, "v2": 16, "v3": 2, "v4": 30},
          }
        },
          ],
          hard: [
          ],
        },
    
        // General/Other (Normal) > Comparing probabilities from two different distribution

    {
          pt_id: "CN_014",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "Normal Distributions",
          concept: "General/Other (Normal)",
          pt: "Comparing probabilities from two different distributions to answer contextual question",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_014_m01",
              q: "Machine A: $X \\sim N(500, 10^2)$ g. Machine B: $Y \\sim N(498, 8^2)$ g. Which machine is more likely to produce an item under 480 g?",
              a: "$P(X < 480) = P(Z < -2) = 0.0228$. $P(Y < 480) = P(Z < -2.25) = 0.0122$. Machine A is more likely."
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 250, "max": 750, "step": 5, "description": "Value 1 (source: 500)"},
              v2: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 2 (source: 10)"},
              v3: {"type": "int", "min": 249, "max": 747, "step": 5, "description": "Value 3 (source: 498)"},
              v4: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 4 (source: 8)"},
              v5: {"type": "int", "min": 240, "max": 720, "step": 5, "description": "Value 5 (source: 480)"},
            },
            constraints: ["v1 != 500 or v2 != 10 or v3 != 498"],
            derived: {
            },
            substitutions: {
              q: {"500": "str(v1)", "10": "str(v2)", "498": "str(v3)", "8": "str(v4)", "480": "str(v5)"},
              a: {"500": "str(v1)", "10": "str(v2)", "498": "str(v3)", "8": "str(v4)", "480": "str(v5)"},
            },
            sourceValues: {"v1": 500, "v2": 10, "v3": 498, "v4": 8, "v5": 480},
          }
        },
          ],
          hard: [
          ],
        },
    
        // General/Other (Normal) > Determining $\mu$ and $\sigma$ from two given probabili

    {
          pt_id: "CN_015",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "Normal Distributions",
          concept: "General/Other (Normal)",
          pt: "Determining $\\mu$ and $\\sigma$ from two given probabilities using simultaneous equations",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_015_m01",
              q: "$X \\sim N(\\mu, \\sigma^2)$. Given $P(X < 70) = 0.3$ and $P(X < 90) = 0.8$. Find $\\mu$ and $\\sigma$.",
              a: "$\\frac{70-\\mu}{\\sigma} = -0.524$ and $\\frac{90-\\mu}{\\sigma} = 0.842$. From these: $90 - \\mu = 0.842\\sigma$ and $70 - \\mu = -0.524\\sigma$. Subtracting: $20 = 1.366\\sigma \\Rightarrow \\sigma \\approx 14.64$. $\\mu = 90 - 0.842(14.64) \\approx 77.7$."
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 35, "max": 105, "step": 5, "description": "Value 1 (source: 70)"},
              v2: {"type": "int", "min": 45, "max": 135, "step": 5, "description": "Value 2 (source: 90)"},
            },
            constraints: ["v1 != 70 or v2 != 90"],
            derived: {
            },
            substitutions: {
              q: {"70": "str(v1)", "90": "str(v2)"},
              a: {"70": "str(v1)", "90": "str(v2)"},
            },
            sourceValues: {"v1": 70, "v2": 90},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Inverse Normal > Finding standard deviation given target probability and

    {
          pt_id: "CN_016",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "Normal Distributions",
          concept: "Inverse Normal",
          pt: "Finding standard deviation given target probability and mean using inverse normal",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_016_m01",
              q: "$X \\sim N(60, \\sigma^2)$ and $P(X > 72) = 0.1$. Find $\\sigma$.",
              a: "$\\frac{72-60}{\\sigma} = 1.282 \\Rightarrow \\sigma = \\frac{12}{1.282} \\approx 9.36$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 30, "max": 90, "step": 5, "description": "Value 1 (source: 60)"},
              v2: {"type": "int", "min": 36, "max": 108, "step": 5, "description": "Value 2 (source: 72)"},
            },
            constraints: ["v1 != 60 or v2 != 72"],
            derived: {
            },
            substitutions: {
              q: {"60": "str(v1)", "72": "str(v2)"},
              a: {"60": "str(v1)", "72": "str(v2)"},
            },
            sourceValues: {"v1": 60, "v2": 72},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Inverse Normal > Finding value for specified probability using inverse n

    {
          pt_id: "CN_017",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "Normal Distributions",
          concept: "Inverse Normal",
          pt: "Finding value for specified probability using inverse normal",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_017_m01",
              q: "$X \\sim N(200, 25^2)$. Find $k$ such that $P(X < k) = 0.9$.",
              a: "$z = 1.282$ (from tables). $k = 200 + 1.282(25) = 232.05$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 100, "max": 300, "step": 5, "description": "Value 1 (source: 200)"},
              v2: {"type": "int", "min": 13, "max": 37, "step": 5, "description": "Value 2 (source: 25)"},
            },
            constraints: ["v1 != 200 or v2 != 25"],
            derived: {
            },
            substitutions: {
              q: {"200": "str(v1)", "25": "str(v2)"},
              a: {"200": "str(v1)", "25": "str(v2)"},
            },
            sourceValues: {"v1": 200, "v2": 25},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Normal Probability > Calculating conditional probability for normal distribu

    {
          pt_id: "CN_018",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "Normal Distributions",
          concept: "Normal Probability",
          pt: "Calculating conditional probability for normal distribution using restricted domain",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_018_m01",
              q: "$X \\sim N(50, 10^2)$. Find $P(X > 60 | X > 45)$.",
              a: "$P(X>60|X>45) = \\frac{P(X>60)}{P(X>45)} = \\frac{P(Z>1)}{P(Z>-0.5)} = \\frac{0.1587}{0.6915} \\approx 0.2295$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 25, "max": 75, "step": 5, "description": "Value 1 (source: 50)"},
              v2: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 2 (source: 10)"},
              v3: {"type": "int", "min": 30, "max": 90, "step": 5, "description": "Value 3 (source: 60)"},
              v4: {"type": "int", "min": 23, "max": 67, "step": 5, "description": "Value 4 (source: 45)"},
            },
            constraints: ["v1 != 50 or v2 != 10 or v3 != 60"],
            derived: {
            },
            substitutions: {
              q: {"50": "str(v1)", "10": "str(v2)", "60": "str(v3)", "45": "str(v4)"},
              a: {"50": "str(v1)", "10": "str(v2)", "60": "str(v3)", "45": "str(v4)"},
            },
            sourceValues: {"v1": 50, "v2": 10, "v3": 60, "v4": 45},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Normal Probability > Calculating normal probability $P(X > k)$ or $P(X < k)$

    {
          pt_id: "CN_019",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "Normal Distributions",
          concept: "Normal Probability",
          pt: "Calculating normal probability $P(X > k)$ or $P(X < k)$",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_019_m01",
              q: "$X \\sim N(50, 8^2)$. Find $P(X > 60)$.",
              a: "$Z = \\frac{60-50}{8} = 1.25$. $P(X > 60) = P(Z > 1.25) = 1 - 0.8944 = 0.1056$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 25, "max": 75, "step": 5, "description": "Value 1 (source: 50)"},
              v2: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 2 (source: 8)"},
              v3: {"type": "int", "min": 30, "max": 90, "step": 5, "description": "Value 3 (source: 60)"},
            },
            constraints: ["v1 != 50 or v2 != 8 or v3 != 60"],
            derived: {
            },
            substitutions: {
              q: {"50": "str(v1)", "8": "str(v2)", "60": "str(v3)"},
              a: {"50": "str(v1)", "8": "str(v2)", "60": "str(v3)"},
            },
            sourceValues: {"v1": 50, "v2": 8, "v3": 60},
          }
        },
            {
              qid: "CN_019_m02",
              q: "$X \\sim N(100, 15^2)$. Find $P(X < 80)$.",
              a: "$Z = \\frac{80-100}{15} = -1.33$. $P(X < 80) = P(Z < -1.33) = 0.0918$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 50, "max": 150, "step": 5, "description": "Value 1 (source: 100)"},
              v2: {"type": "int", "min": 8, "max": 22, "step": 1, "description": "Value 2 (source: 15)"},
              v3: {"type": "int", "min": 40, "max": 120, "step": 5, "description": "Value 3 (source: 80)"},
            },
            constraints: ["v1 != 100 or v2 != 15 or v3 != 80"],
            derived: {
            },
            substitutions: {
              q: {"100": "str(v1)", "15": "str(v2)", "80": "str(v3)"},
              a: {"100": "str(v1)", "15": "str(v2)", "80": "str(v3)"},
            },
            sourceValues: {"v1": 100, "v2": 15, "v3": 80},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Normal Probability > Calculating normal probability $P(a < X < b)$

    {
          pt_id: "CN_020",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "Normal Distributions",
          concept: "Normal Probability",
          pt: "Calculating normal probability $P(a < X < b)$",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_020_m01",
              q: "$X \\sim N(70, 5^2)$. Find $P(65 < X < 80)$.",
              a: "$P\\left(\\frac{65-70}{5} < Z < \\frac{80-70}{5}\\right) = P(-1 < Z < 2) = 0.9772 - 0.1587 = 0.8186$"
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 35, "max": 105, "step": 5, "description": "Value 1 (source: 70)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": 33, "max": 97, "step": 5, "description": "Value 3 (source: 65)"},
              v4: {"type": "int", "min": 40, "max": 120, "step": 5, "description": "Value 4 (source: 80)"},
            },
            constraints: ["v1 != 70 or v2 != 5 or v3 != 65"],
            derived: {
            },
            substitutions: {
              q: {"70": "str(v1)", "5": "str(v2)", "65": "str(v3)", "80": "str(v4)"},
              a: {"70": "str(v1)", "5": "str(v2)", "65": "str(v3)", "80": "str(v4)"},
            },
            sourceValues: {"v1": 70, "v2": 5, "v3": 65, "v4": 80},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Normal Probability > Calculating percentage using empirical rule (68-95-99.7

    {
          pt_id: "CN_021",
          topic: "Continuous Random Variables and the Normal Distribution",
          subtopic: "Normal Distributions",
          concept: "Normal Probability",
          pt: "Calculating percentage using empirical rule (68-95-99.7) for normal distribution",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "CN_021_m01",
              q: "Heights are normally distributed with mean 170 cm and SD 6 cm. What percentage of people are between 158 cm and 182 cm?",
              a: "$158 = 170 - 2(6)$ and $182 = 170 + 2(6)$, i.e. within 2 standard deviations. By the empirical rule, approximately $95\\%$."
            ,
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "CRV calculation. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 85, "max": 255, "step": 5, "description": "Value 1 (source: 170)"},
              v2: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 2 (source: 6)"},
              v3: {"type": "int", "min": 79, "max": 237, "step": 5, "description": "Value 3 (source: 158)"},
              v4: {"type": "int", "min": 91, "max": 273, "step": 5, "description": "Value 4 (source: 182)"},
            },
            constraints: ["v1 != 170 or v2 != 6 or v3 != 158"],
            derived: {
            },
            substitutions: {
              q: {"170": "str(v1)", "6": "str(v2)", "158": "str(v3)", "182": "str(v4)"},
              a: {"170": "str(v1)", "6": "str(v2)", "158": "str(v3)", "182": "str(v4)"},
            },
            sourceValues: {"v1": 170, "v2": 6, "v3": 158, "v4": 182},
          }
        },
          ],
          hard: [
          ],
        },
    
        // Bernoulli Distribution > Calculating mean and standard deviation of Bernoulli di

    {
      pt_id: "KN_015",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Kinematics Integration",
      pt: "Assessing appropriateness of normal model from histogram shape",
      testing: "",
      reason_bank: [
            "wrong_rule",
            "missing_chain_factor",
            "substitution_error",
            "sign_error",
            "algebra_slip",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_015_m01",
                  q: "A histogram of test scores shows a strong right skew. Is a normal distribution appropriate? Explain.",
                  a: "No. The normal distribution is symmetric and bell-shaped. A right-skewed distribution has a longer tail to the right, so the normal model would be a poor fit. It would underestimate probabilities in the right tail and overestimate near the mode.",
                  seedSpec: {
                        version: 2,
                        seedable: false,
                        reason: "Conceptual/explanatory question — no numeric parameterisation."
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_017",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Kinematics Integration",
      pt: "Calculating P(a ≤ X ≤ b) from CDF",
      testing: "",
      reason_bank: [
            "setup_error",
            "wrong_rule",
            "interpretation_mixup",
            "sign_error",
            "substitution_error",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_017_m01",
                  q: "Using the CDF above, find $P(2 \\leq X \\leq 3)$.",
                  a: "$P(2 \\leq X \\leq 3) = F(3) - F(1) = 0.85 - 0.20 = 0.65$",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: -3,
                                    max: 7,
                                    step: 1,
                                    description: "Value 1 (source: 2)"
                              },
                              v2: {
                                    type: "int",
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 2 (source: 3)"
                              }
                        },
                        constraints: [
                              "v1 != 2 or v2 != 3"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v1)",
                                    3: "str(v2)"
                              },
                              a: {
                                    2: "str(v1)",
                                    3: "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 2,
                              v2: 3
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_026",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Kinematics Integration",
      pt: "Calculating probability involving transformation of uniform random variable",
      testing: "",
      reason_bank: [
            "setup_error",
            "wrong_rule",
            "interpretation_mixup",
            "sign_error",
            "substitution_error",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_026_m01",
                  q: "$X \\sim U(0, 4)$. Find $P(X^2 > 9)$.",
                  a: "$X^2 > 9 \\Rightarrow X > 3$ (since $X \\geq 0$). $P(X > 3) = \\frac{4-3}{4-0} = \\frac{1}{4}$",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: -1,
                                    max: 9,
                                    step: 1,
                                    description: "Value 1 (source: 4)"
                              },
                              v2: {
                                    type: "int",
                                    min: 4,
                                    max: 14,
                                    step: 1,
                                    description: "Value 2 (source: 9)"
                              }
                        },
                        constraints: [
                              "v1 != 4 or v2 != 9"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    4: "str(v1)",
                                    9: "str(v2)"
                              },
                              a: {
                                    4: "str(v1)",
                                    9: "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 4,
                              v2: 9
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_029",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Kinematics Integration",
      pt: "Calculating probability using geometric area from continuous distribution",
      testing: "",
      reason_bank: [
            "wrong_rule",
            "missing_chain_factor",
            "substitution_error",
            "sign_error",
            "algebra_slip",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_029_m01",
                  q: "A pdf is triangular with $f(x) = x$ for $0 \\leq x \\leq 1$ and $f(x) = 2 - x$ for $1 < x \\leq 2$. Find $P(X > 1.5)$ using geometry.",
                  a: "For $1.5 \\leq x \\leq 2$: this is a triangle with base $0.5$ and height $f(1.5) = 0.5$. Area $= \\frac{1}{2}(0.5)(0.5) = 0.125$.",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: -3,
                                    max: 7,
                                    step: 1,
                                    description: "Value 1 (source: 2)"
                              },
                              v2: {
                                    type: "float",
                                    min: 1,
                                    max: 2,
                                    step: 0.05,
                                    description: "Value 2 (source: 1.5)"
                              }
                        },
                        constraints: [
                              "v1 != 2 or v2 != 1.5"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v1)",
                                    "1.5": "str(v2)"
                              },
                              a: {
                                    2: "str(v1)",
                                    "1.5": "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 2,
                              v2: 1.5
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_033",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Kinematics Integration",
      pt: "Calculating variance of uniform distribution by integration",
      testing: "",
      reason_bank: [
            "setup_error",
            "wrong_rule",
            "interpretation_mixup",
            "sign_error",
            "substitution_error",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_033_m01",
                  q: "Verify that $\\text{Var}(X) = \\frac{(b-a)^2}{12}$ for $X \\sim U(0, 6)$ using integration.",
                  a: "$E(X) = \\int_0^6 \\frac{x}{6} dx = 3$. $E(X^2) = \\int_0^6 \\frac{x^2}{6} dx = 12$. $\\text{Var}(X) = 12 - 9 = 3$. Formula: $\\frac{(6-0)^2}{12} = 3$",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 6,
                                    max: 18,
                                    step: 1,
                                    description: "Value 1 (source: 12)"
                              },
                              v2: {
                                    type: "int",
                                    min: 1,
                                    max: 11,
                                    step: 1,
                                    description: "Value 2 (source: 6)"
                              }
                        },
                        constraints: [
                              "v1 != 12 or v2 != 6"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    6: "str(v2)",
                                    12: "str(v1)"
                              },
                              a: {
                                    6: "str(v2)",
                                    12: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 12,
                              v2: 6
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_054",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Kinematics Integration",
      pt: "Explaining inappropriateness of normal model in context",
      testing: "",
      reason_bank: [
            "setup_error",
            "wrong_rule",
            "interpretation_mixup",
            "sign_error",
            "substitution_error",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_054_m01",
                  q: "Reaction times are always positive but a normal model with $\\mu = 0.3$ s and $\\sigma = 0.15$ s is proposed. Explain why this may be inappropriate.",
                  a: "The normal distribution extends to $-\\infty$, so it assigns positive probability to negative reaction times, which are impossible. With $\\mu = 0.3$ and $\\sigma = 0.15$, $P(X < 0) = P(Z < -2) \\approx 2.3\\%$, a non-trivial probability for an impossible event.",
                  seedSpec: {
                        version: 2,
                        seedable: false,
                        reason: "Conceptual/explanatory question — no numeric parameterisation."
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_062",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Kinematics Integration",
      pt: "Finding parameter value to achieve target tail probability",
      testing: "",
      reason_bank: [
            "setup_error",
            "wrong_rule",
            "interpretation_mixup",
            "sign_error",
            "substitution_error",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_062_m01",
                  q: "$X \\sim N(\\mu, 4^2)$. Find $\\mu$ such that $P(X > 30) = 0.1$.",
                  a: "$P(X > 30) = 0.1 \\Rightarrow \\frac{30-\\mu}{4} = 1.282 \\Rightarrow \\mu = 30 - 5.128 = 24.87$",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: -1,
                                    max: 9,
                                    step: 1,
                                    description: "Value 1 (source: 4)"
                              },
                              v2: {
                                    type: "int",
                                    min: 15,
                                    max: 45,
                                    step: 5,
                                    description: "Value 2 (source: 30)"
                              }
                        },
                        constraints: [
                              "v1 != 4 or v2 != 30"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    4: "str(v1)",
                                    30: "str(v2)"
                              },
                              a: {
                                    4: "str(v1)",
                                    30: "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 4,
                              v2: 30
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_063",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Kinematics Integration",
      pt: "Finding value for specified percentage using empirical rule",
      testing: "",
      reason_bank: [
            "wrong_rule",
            "missing_chain_factor",
            "substitution_error",
            "sign_error",
            "algebra_slip",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_063_m01",
                  q: "Weights are $N(75, 5^2)$ kg. Below what weight do approximately 84% of people fall?",
                  a: "84% corresponds to 1 standard deviation above the mean (50% + 34%). So weight $= 75 + 5 = 80$ kg.",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 38,
                                    max: 112,
                                    step: 5,
                                    description: "Value 1 (source: 75)"
                              },
                              v2: {
                                    type: "int",
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                    description: "Value 2 (source: 5)"
                              },
                              v3: {
                                    type: "int",
                                    min: 42,
                                    max: 126,
                                    step: 5,
                                    description: "Value 3 (source: 84)"
                              }
                        },
                        constraints: [
                              "v1 != 75 or v2 != 5 or v3 != 84"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    5: "str(v2)",
                                    75: "str(v1)",
                                    84: "str(v3)"
                              },
                              a: {
                                    5: "str(v2)",
                                    75: "str(v1)",
                                    84: "str(v3)"
                              }
                        },
                        sourceValues: {
                              v1: 75,
                              v2: 5,
                              v3: 84
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_067",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "Normal Distributions",
      concept: "Kinematics Integration",
      pt: "Interpreting range in terms of standard deviations",
      testing: "",
      reason_bank: [
            "setup_error",
            "wrong_rule",
            "interpretation_mixup",
            "sign_error",
            "substitution_error",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_067_m01",
                  q: "Heights are $N(170, 6^2)$ cm. A person is 158 cm. How many standard deviations below the mean is this?",
                  a: "$z = \\frac{158 - 170}{6} = -2$. The person is 2 standard deviations below the mean.",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 85,
                                    max: 255,
                                    step: 5,
                                    description: "Value 1 (source: 170)"
                              },
                              v2: {
                                    type: "int",
                                    min: 1,
                                    max: 11,
                                    step: 1,
                                    description: "Value 2 (source: 6)"
                              },
                              v3: {
                                    type: "int",
                                    min: 79,
                                    max: 237,
                                    step: 5,
                                    description: "Value 3 (source: 158)"
                              }
                        },
                        constraints: [
                              "v1 != 170 or v2 != 6 or v3 != 158"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    6: "str(v2)",
                                    158: "str(v3)",
                                    170: "str(v1)"
                              },
                              a: {
                                    6: "str(v2)",
                                    158: "str(v3)",
                                    170: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 170,
                              v2: 6,
                              v3: 158
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_073",
      topic: "Continuous Random Variables and the Normal Distribution",
      subtopic: "General Continuous Random Variables",
      concept: "Kinematics Integration",
      pt: "Solving inverse probability problem for uniform distribution in context",
      testing: "",
      reason_bank: [
            "setup_error",
            "wrong_rule",
            "interpretation_mixup",
            "sign_error",
            "substitution_error",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_073_m01",
                  q: "A bus arrives at a stop uniformly between 8:00 and 8:20. If you arrive at 8:12, what is the probability the bus has already left?",
                  a: "$X \\sim U(0, 20)$. $P(X < 12) = \\frac{12}{20} = 0.6$",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 3,
                                    max: 13,
                                    step: 1,
                                    description: "Value 1 (source: 8)"
                              },
                              v2: {
                                    type: "int",
                                    min: 10,
                                    max: 30,
                                    step: 5,
                                    description: "Value 2 (source: 20)"
                              },
                              v3: {
                                    type: "int",
                                    min: 6,
                                    max: 18,
                                    step: 1,
                                    description: "Value 3 (source: 12)"
                              }
                        },
                        constraints: [
                              "v1 != 8 or v2 != 20 or v3 != 12"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    8: "str(v1)",
                                    12: "str(v3)",
                                    20: "str(v2)"
                              },
                              a: {
                                    8: "str(v1)",
                                    12: "str(v3)",
                                    20: "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 8,
                              v2: 20,
                              v3: 12
                        }
                  }
            }
      ],
      hard: []
}
  ]
};