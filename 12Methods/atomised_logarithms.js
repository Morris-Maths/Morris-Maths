// ======================================================================
// ATOMISED PRACTICE — ATOMISED_LOGARITHMS
// Topic: The Logarithmic Function
// 28 PTs, 364 questions (E:84 M:140 H:140)
// Reorganised from source files — richest version kept for each PT
// Unquoted keys for WSH compatibility
// ======================================================================

var ATOMISED_LOGARITHMS = {
  questions: [
    {
          pt_id: "LN_001",
          topic: "The Logarithmic Function",
          subtopic: "Calculus of the Natural Logarithmic Function",
          concept: "Integration Techniques",
          pt: "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$",
          testing: "Recognise the pattern where the numerator is the derivative of the denominator, and apply $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$",
          reason_bank: ["wrong_rule","missing_chain_factor","substitution_error","sign_error","algebra_slip","not_sure"],
          easy: [
            {qid:"LN_001_e01",q:"Find $\\int \\frac{1}{x}\\, dx$.",a:"$= \\ln|x| + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_001_e02",q:"Find $\\int \\frac{3}{3x+2}\\, dx$.",a:"$= \\ln|3x+2| + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        },
            {qid:"LN_001_e03",q:"Find $\\int \\frac{2x}{x^2+1}\\, dx$.",a:"$= \\ln(x^2+1) + C$ (since $x^2+1 > 0$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ],
          medium: [
            {qid:"LN_001_m01",q:"Find $\\int \\frac{2x}{x^2 + 5}\\, dx$.",a:"$= \\ln|x^2 + 5| + C = \\ln(x^2 + 5) + C$ (since $x^2 + 5 > 0$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
            },
            constraints: ["v1 != 2 or v2 != 5"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "5": "str(v2)"},
              a: {"2": "str(v1)", "5": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 5},
          }
        },
            {qid:"LN_001_m02",q:"Find $\\int \\frac{3x^2}{x^3 - 1}\\, dx$.",a:"$= \\ln|x^3 - 1| + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_001_m03",q:"Find $\\int \\frac{4x^3}{x^4+3}\\, dx$.",a:"$= \\ln(x^4+3) + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 4 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "3": "str(v2)"},
              a: {"4": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 4, "v2": 3},
          }
        },
            {qid:"LN_001_m04",q:"Find $\\int \\frac{\\cos(x)}{\\sin(x)}\\, dx$.",a:"Since $\\frac{d}{dx}[\\sin(x)] = \\cos(x)$: $= \\ln|\\sin(x)| + C$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_001_m05",q:"Find $\\int \\frac{6x}{3x^2-4}\\, dx$.",a:"$= \\ln|3x^2-4| + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 1 (source: 6)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": -9, "max": 1, "step": 1, "description": "Value 3 (source: -4)"},
            },
            constraints: ["v1 != 6 or v2 != 3 or v3 != -4"],
            derived: {
            },
            substitutions: {
              q: {"6": "str(v1)", "3": "str(v2)", "-4": "str(v3)"},
              a: {"6": "str(v1)", "3": "str(v2)", "-4": "str(v3)"},
            },
            sourceValues: {"v1": 6, "v2": 3, "v3": -4},
          }
        }
          ],
          hard: [
            {qid:"LN_001_h01",q:"Find $\\int \\frac{x}{x^2+1}\\, dx$.",a:"Adjust: $\\frac{x}{x^2+1} = \\frac{1}{2} \\cdot \\frac{2x}{x^2+1}$. So $= \\frac{1}{2}\\ln(x^2+1) + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_001_h02",q:"Find $\\int \\frac{e^x}{e^x+3}\\, dx$.",a:"Numerator $= \\frac{d}{dx}[e^x+3]$. So $= \\ln(e^x+3) + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_001_h03",q:"Find $\\int \\frac{1}{x\\ln(x)}\\, dx$.",a:"Write as $\\frac{1/x}{\\ln(x)}$. Since $\\frac{d}{dx}[\\ln(x)] = \\frac{1}{x}$: $= \\ln|\\ln(x)| + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_001_h04",q:"Find $\\int \\frac{2x+3}{x^2+3x+1}\\, dx$.",a:"Numerator $= \\frac{d}{dx}[x^2+3x+1]$. So $= \\ln|x^2+3x+1| + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_001_h05",q:"Find $\\int \\tan(x)\\, dx$.",a:"$\\int \\frac{\\sin(x)}{\\cos(x)}\\, dx = -\\int \\frac{-\\sin(x)}{\\cos(x)}\\, dx = -\\ln|\\cos(x)| + C = \\ln|\\sec(x)| + C$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        }
          ]
        }
,

    {
          pt_id: "LN_002",
          topic: "The Logarithmic Function",
          subtopic: "Calculus of the Natural Logarithmic Function",
          concept: "Integration Techniques",
          pt: "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$ with initial condition and log law simplification",
          testing: "Integrate to get $\\ln$ expression, apply initial condition to find $C$, then use log laws to simplify the final expression",
          reason_bank: ["wrong_rule","missing_chain_factor","substitution_error","sign_error","algebra_slip","not_sure"],
          easy: [
            {qid:"LN_002_e01",q:"Given $\\frac{dy}{dx} = \\frac{1}{x}$ and $y(1) = 0$, find $y(x)$ for $x > 0$.",a:"$y = \\ln(x) + C$. $y(1) = 0 + C = 0 \\Rightarrow C = 0$. So $y = \\ln(x)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_002_e02",q:"Given $\\frac{dy}{dx} = \\frac{2}{x}$ and $y(1) = 5$, find $y(x)$ for $x > 0$.",a:"$y = 2\\ln(x) + C$. $y(1) = 0 + C = 5 \\Rightarrow C = 5$. So $y = 2\\ln(x) + 5$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
            },
            constraints: ["v1 != 2 or v2 != 5"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "5": "str(v2)"},
              a: {"2": "str(v1)", "5": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 5},
          }
        },
            {qid:"LN_002_e03",q:"Given $\\frac{dy}{dx} = \\frac{3}{3x+1}$ and $y(0) = 0$, find $y(x)$.",a:"$y = \\ln(3x+1) + C$. $y(0) = \\ln(1) + C = 0 \\Rightarrow C = 0$. So $y = \\ln(3x+1)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        }
          ],
          medium: [
            {qid:"LN_002_m01",q:"Given $\\frac{dy}{dx} = \\frac{4}{2x+1}$ and $y(0) = \\ln 3$, find $y(x)$.",a:"$y = 2\\ln|2x+1| + C$. $y(0) = 2\\ln(1) + C = \\ln 3 \\Rightarrow C = \\ln 3$. $y = 2\\ln(2x+1) + \\ln 3 = \\ln[3(2x+1)^2]$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 3 (source: 3)"},
            },
            constraints: ["v1 != 4 or v2 != 2 or v3 != 3"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
              a: {"4": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
            },
            sourceValues: {"v1": 4, "v2": 2, "v3": 3},
          }
        },
            {qid:"LN_002_m02",q:"Given $\\frac{dy}{dx} = \\frac{6}{3x-1}$ and $y(1) = \\ln 4$, find $y(x)$ for $x > \\frac{1}{3}$.",a:"$y = 2\\ln(3x-1) + C$. $y(1) = 2\\ln(2) + C = \\ln 4$. Since $2\\ln 2 = \\ln 4$: $C = 0$. So $y = 2\\ln(3x-1) = \\ln(3x-1)^2$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 1 (source: 6)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 3 (source: 4)"},
            },
            constraints: ["v1 != 6 or v2 != 3 or v3 != 4"],
            derived: {
            },
            substitutions: {
              q: {"6": "str(v1)", "3": "str(v2)", "4": "str(v3)"},
              a: {"6": "str(v1)", "3": "str(v2)", "4": "str(v3)"},
            },
            sourceValues: {"v1": 6, "v2": 3, "v3": 4},
          }
        },
            {qid:"LN_002_m03",q:"Given $\\frac{dy}{dx} = \\frac{2x}{x^2+1}$ and $y(0) = 3$, find $y(x)$.",a:"$y = \\ln(x^2+1) + C$. $y(0) = \\ln(1) + C = 3 \\Rightarrow C = 3$. So $y = \\ln(x^2+1) + 3$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_002_m04",q:"Given $\\frac{dy}{dx} = \\frac{1}{x+1}$ and $y(0) = \\ln 5$, find $y(x)$ for $x > -1$.",a:"$y = \\ln(x+1) + C$. $y(0) = 0 + C = \\ln 5 \\Rightarrow C = \\ln 5$. $y = \\ln(x+1) + \\ln 5 = \\ln[5(x+1)]$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        },
            {qid:"LN_002_m05",q:"Given $\\frac{dy}{dx} = \\frac{3x^2}{x^3+4}$ and $y(0) = \\ln 2$, find $y(x)$.",a:"$y = \\ln(x^3+4) + C$. $y(0) = \\ln 4 + C = \\ln 2 \\Rightarrow C = \\ln 2 - \\ln 4 = -\\ln 2$. $y = \\ln(x^3+4) - \\ln 2 = \\ln\\!\\left(\\frac{x^3+4}{2}\\right)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
              v3: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 3 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 4 or v3 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "4": "str(v2)", "2": "str(v3)"},
              a: {"3": "str(v1)", "4": "str(v2)", "2": "str(v3)"},
            },
            sourceValues: {"v1": 3, "v2": 4, "v3": 2},
          }
        }
          ],
          hard: [
            {qid:"LN_002_h01",q:"Given $\\frac{dy}{dx} = \\frac{6x}{x^2-4}$ for $x > 2$ and $y(3) = \\ln 10$, find $y(x)$.",a:"$y = 3\\ln(x^2-4) + C$. $y(3) = 3\\ln(5) + C = \\ln 10$. $C = \\ln 10 - \\ln 125 = \\ln\\!\\left(\\frac{2}{25}\\right)$. $y = \\ln\\!\\left[\\frac{2(x^2-4)^3}{25}\\right]$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 1 (source: 6)"},
              v2: {"type": "int", "min": -9, "max": 1, "step": 1, "description": "Value 2 (source: -4)"},
              v3: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 3 (source: 2)"},
              v4: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 4 (source: 3)"},
              v5: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 5 (source: 10)"},
            },
            constraints: ["v1 != 6 or v2 != -4 or v3 != 2"],
            derived: {
            },
            substitutions: {
              q: {"6": "str(v1)", "-4": "str(v2)", "2": "str(v3)", "3": "str(v4)", "10": "str(v5)"},
              a: {"6": "str(v1)", "-4": "str(v2)", "2": "str(v3)", "3": "str(v4)", "10": "str(v5)"},
            },
            sourceValues: {"v1": 6, "v2": -4, "v3": 2, "v4": 3, "v5": 10},
          }
        },
            {qid:"LN_002_h02",q:"Given $\\frac{dy}{dx} = \\frac{2x+1}{x^2+x}$ and $y(1) = \\ln 6$, find $y(x)$ for $x > 0$.",a:"$y = \\ln(x^2+x) + C$. $y(1) = \\ln(2) + C = \\ln 6 \\Rightarrow C = \\ln 3$. $y = \\ln(x^2+x) + \\ln 3 = \\ln[3x(x+1)]$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 2 (source: 6)"},
            },
            constraints: ["v1 != 2 or v2 != 6"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "6": "str(v2)"},
              a: {"2": "str(v1)", "6": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 6},
          }
        },
            {qid:"LN_002_h03",q:"Given $\\frac{dy}{dx} = \\frac{-2}{1-2x}$ and $y(0) = \\ln 4$, find $y(x)$ for $x < \\frac{1}{2}$.",a:"$y = \\ln|1-2x| + C$. $y(0) = \\ln(1) + C = \\ln 4 \\Rightarrow C = \\ln 4$. $y = \\ln(1-2x) + \\ln 4 = \\ln[4(1-2x)]$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -7, "max": 3, "step": 1, "description": "Value 1 (source: -2)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
              v3: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 3 (source: 2)"},
            },
            constraints: ["v1 != -2 or v2 != 4 or v3 != 2"],
            derived: {
            },
            substitutions: {
              q: {"-2": "str(v1)", "4": "str(v2)", "2": "str(v3)"},
              a: {"-2": "str(v1)", "4": "str(v2)", "2": "str(v3)"},
            },
            sourceValues: {"v1": -2, "v2": 4, "v3": 2},
          }
        },
            {qid:"LN_002_h04",q:"Given $\\frac{dy}{dx} = \\frac{4}{2x+1} + \\frac{2}{x+3}$ and $y(0) = 0$, find $y(x)$.",a:"$y = 2\\ln|2x+1| + 2\\ln|x+3| + C$. $y(0) = 2\\ln(1) + 2\\ln(3) + C = 0 \\Rightarrow C = -2\\ln 3$. $y = 2\\ln\\!\\left[\\frac{(2x+1)(x+3)}{3}\\right]$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 3 (source: 3)"},
            },
            constraints: ["v1 != 4 or v2 != 2 or v3 != 3"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
              a: {"4": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
            },
            sourceValues: {"v1": 4, "v2": 2, "v3": 3},
          }
        },
            {qid:"LN_002_h05",q:"Given $\\frac{dy}{dx} = \\frac{6x^2+2}{2x^3+2x}$ and $y(1) = 0$, find $y(x)$ for $x > 0$.",a:"$y = \\ln(2x^3+2x) + C$. $y(1) = \\ln(4) + C = 0 \\Rightarrow C = -\\ln 4$. $y = \\ln\\!\\left(\\frac{2x^3+2x}{4}\\right) = \\ln\\!\\left(\\frac{x(x^2+1)}{2}\\right)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 1 (source: 6)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 6 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"6": "str(v1)", "2": "str(v2)"},
              a: {"6": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 6, "v2": 2},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_003",
          topic: "The Logarithmic Function",
          subtopic: "Calculus of the Natural Logarithmic Function",
          concept: "Logarithmic Evaluation (Calculus)",
          pt: "Finding when derivative equals zero by differentiating function with logarithm",
          testing: "Differentiate a function involving $\\ln(x)$, set the derivative equal to zero, and solve for $x$ to find stationary points",
          reason_bank: ["wrong_rule","missing_chain_factor","substitution_error","sign_error","algebra_slip","not_sure"],
          easy: [
            {qid:"LN_003_e01",q:"Find the stationary point of $f(x) = 3x - 3\\ln(x)$ for $x > 0$.",a:"$f'(x) = 3 - \\frac{3}{x} = 0 \\Rightarrow x = 1$. $f(1) = 3$. Point: $(1, 3)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_003_e02",q:"Find the stationary point of $f(x) = x^2 - 4\\ln(x)$ for $x > 0$.",a:"$f'(x) = 2x - \\frac{4}{x} = 0 \\Rightarrow 2x^2 = 4 \\Rightarrow x = \\sqrt{2}$. $f(\\sqrt{2}) = 2 - 2\\ln 2$. Point: $(\\sqrt{2},\\, 2 - 2\\ln 2)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_003_e03",q:"Find the stationary point of $f(x) = 2\\ln(x) - x$ for $x > 0$.",a:"$f'(x) = \\frac{2}{x} - 1 = 0 \\Rightarrow x = 2$. $f(2) = 2\\ln 2 - 2$. Point: $(2,\\, 2\\ln 2 - 2)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ],
          medium: [
            {qid:"LN_003_m01",q:"Find the stationary point of $f(x) = x - 2\\ln(x)$ for $x > 0$.",a:"$f'(x) = 1 - \\frac{2}{x} = 0 \\Rightarrow x = 2$. $f(2) = 2 - 2\\ln 2$. Point: $(2, 2 - 2\\ln 2)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_003_m02",q:"Find the stationary point of $f(x) = x^2 - 8\\ln(x)$ for $x > 0$.",a:"$f'(x) = 2x - \\frac{8}{x} = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$. $f(2) = 4 - 8\\ln 2$. Point: $(2,\\, 4 - 8\\ln 2)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 1 (source: 8)"},
            },
            constraints: ["v1 != 8"],
            derived: {
            },
            substitutions: {
              q: {"8": "str(v1)"},
              a: {"8": "str(v1)"},
            },
            sourceValues: {"v1": 8},
          }
        },
            {qid:"LN_003_m03",q:"Find the stationary point of $f(x) = 3x - \\ln(x^2)$ for $x > 0$.",a:"$f(x) = 3x - 2\\ln(x)$. $f'(x) = 3 - \\frac{2}{x} = 0 \\Rightarrow x = \\frac{2}{3}$. $f\\!\\left(\\frac{2}{3}\\right) = 2 - 2\\ln\\!\\left(\\frac{2}{3}\\right)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_003_m04",q:"Find the stationary point of $f(x) = x^3 - 3\\ln(x)$ for $x > 0$.",a:"$f'(x) = 3x^2 - \\frac{3}{x} = 0 \\Rightarrow 3x^3 = 3 \\Rightarrow x = 1$. $f(1) = 1$. Point: $(1, 1)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_003_m05",q:"Find the stationary point of $f(x) = 4\\ln(x) - x^2$ for $x > 0$.",a:"$f'(x) = \\frac{4}{x} - 2x = 0 \\Rightarrow 2x^2 = 4 \\Rightarrow x = \\sqrt{2}$. $f(\\sqrt{2}) = 4\\ln(\\sqrt{2}) - 2 = 2\\ln 2 - 2$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ],
          hard: [
            {qid:"LN_003_h01",q:"Find the stationary point of $f(x) = x - \\ln(x^2+1)$.",a:"$f'(x) = 1 - \\frac{2x}{x^2+1} = 0 \\Rightarrow x^2+1 = 2x \\Rightarrow (x-1)^2 = 0 \\Rightarrow x = 1$. $f(1) = 1 - \\ln 2$. Point: $(1,\\, 1 - \\ln 2)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_003_h02",q:"Find the stationary point of $f(x) = x^2 + 1 - 6\\ln(x)$ for $x > 0$.",a:"$f'(x) = 2x - \\frac{6}{x} = 0 \\Rightarrow x^2 = 3 \\Rightarrow x = \\sqrt{3}$. $f(\\sqrt{3}) = 4 - 3\\ln 3$. Point: $(\\sqrt{3},\\, 4 - 3\\ln 3)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 1 (source: 6)"},
            },
            constraints: ["v1 != 6"],
            derived: {
            },
            substitutions: {
              q: {"6": "str(v1)"},
              a: {"6": "str(v1)"},
            },
            sourceValues: {"v1": 6},
          }
        },
            {qid:"LN_003_h03",q:"Find the stationary point of $g(x) = x\\ln(x)$ for $x > 0$.",a:"$g'(x) = \\ln(x) + 1 = 0 \\Rightarrow \\ln(x) = -1 \\Rightarrow x = \\frac{1}{e}$. $g\\!\\left(\\frac{1}{e}\\right) = -\\frac{1}{e}$. Point: $\\left(\\frac{1}{e},\\, -\\frac{1}{e}\\right)$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_003_h04",q:"Find the stationary point of $f(x) = \\frac{\\ln(x)}{x}$ for $x > 0$.",a:"$f'(x) = \\frac{1 - \\ln(x)}{x^2} = 0 \\Rightarrow \\ln(x) = 1 \\Rightarrow x = e$. $f(e) = \\frac{1}{e}$. Point: $\\left(e,\\, \\frac{1}{e}\\right)$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_003_h05",q:"Find the stationary point of $f(x) = 2\\ln(x) - x + \\frac{1}{x}$ for $x > 0$.",a:"$f'(x) = \\frac{2}{x} - 1 - \\frac{1}{x^2} = 0 \\Rightarrow 2x - x^2 - 1 = 0 \\Rightarrow (x-1)^2 = 0 \\Rightarrow x = 1$. $f(1) = 0$. Point: $(1, 0)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ]
        }
,

    {
          pt_id: "LN_004",
          topic: "The Logarithmic Function",
          subtopic: "Calculus of the Natural Logarithmic Function",
          concept: "Product Rule",
          pt: "Anti-differentiating $\\ln(x)$ using integration by parts (reverse product rule)",
          testing: "Use a given product rule result to deduce the anti-derivative of $\\ln(x)$ or related functions",
          reason_bank: ["wrong_rule","setup_error","sign_error","algebra_slip","missing_chain_factor","not_sure"],
          easy: [
            {qid:"LN_004_e01",q:"Given that $\\frac{d}{dx}[x\\ln(x)] = \\ln(x) + 1$, write down $\\int [\\ln(x) + 1]\\, dx$.",a:"$\\int [\\ln(x) + 1]\\, dx = x\\ln(x) + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_004_e02",q:"Using $\\int \\ln(x)\\, dx = x\\ln(x) - x + C$, evaluate $\\int_1^e \\ln(x)\\, dx$.",a:"$= [x\\ln(x) - x]_1^e = (e - e) - (0 - 1) = 1$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_004_e03",q:"Using $\\int \\ln(x)\\, dx = x\\ln(x) - x + C$, evaluate $\\int_1^{e^2} \\ln(x)\\, dx$.",a:"$= [x\\ln(x) - x]_1^{e^2} = (2e^2 - e^2) - (0 - 1) = e^2 + 1$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        }
          ],
          medium: [
            {qid:"LN_004_m01",q:"Given that $\\frac{d}{dx}[x\\ln(x)] = \\ln(x) + 1$, find $\\int \\ln(x)\\, dx$.",a:"$\\int [\\ln(x) + 1]\\, dx = x\\ln(x) + C$, so $\\int \\ln(x)\\, dx = x\\ln(x) - x + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_004_m02",q:"Show that $\\frac{d}{dx}\\!\\left[\\frac{x^2}{2}\\ln(x) - \\frac{x^2}{4}\\right] = x\\ln(x)$, and hence find $\\int x\\ln(x)\\, dx$.",a:"$\\frac{d}{dx} = x\\ln(x) + \\frac{x}{2} - \\frac{x}{2} = x\\ln(x)$ ✓. So $\\int x\\ln(x)\\, dx = \\frac{x^2}{2}\\ln(x) - \\frac{x^2}{4} + C$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
            },
            constraints: ["v1 != 2 or v2 != 4"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "4": "str(v2)"},
              a: {"2": "str(v1)", "4": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 4},
          }
        },
            {qid:"LN_004_m03",q:"Evaluate $\\int_1^e 2\\ln(x)\\, dx$.",a:"$= 2[x\\ln(x) - x]_1^e = 2[(e - e) - (0 - 1)] = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_004_m04",q:"Show that $\\frac{d}{dx}[(x+1)\\ln(x+1) - (x+1)] = \\ln(x+1)$, and hence find $\\int \\ln(x+1)\\, dx$.",a:"$\\frac{d}{dx} = \\ln(x+1) + 1 - 1 = \\ln(x+1)$ ✓. So $\\int \\ln(x+1)\\, dx = (x+1)\\ln(x+1) - (x+1) + C$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_004_m05",q:"Evaluate $\\int_1^e [\\ln(x) + 2]\\, dx$.",a:"$= [x\\ln(x) - x + 2x]_1^e = [x\\ln(x) + x]_1^e = (e + e) - (0 + 1) = 2e - 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ],
          hard: [
            {qid:"LN_004_h01",q:"Given that $\\frac{d}{dx}\\!\\left[\\frac{x^3}{3}\\ln(x) - \\frac{x^3}{9}\\right] = x^2\\ln(x)$, find $\\int x^2\\ln(x)\\, dx$.",a:"$\\int x^2\\ln(x)\\, dx = \\frac{x^3}{3}\\ln(x) - \\frac{x^3}{9} + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 2 (source: 9)"},
            },
            constraints: ["v1 != 3 or v2 != 9"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "9": "str(v2)"},
              a: {"3": "str(v1)", "9": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 9},
          }
        },
            {qid:"LN_004_h02",q:"Given $\\frac{d}{dx}[x(\\ln x)^2 - 2x\\ln x + 2x] = (\\ln x)^2$, find $\\int (\\ln x)^2\\, dx$.",a:"$\\int (\\ln x)^2\\, dx = x(\\ln x)^2 - 2x\\ln x + 2x + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_004_h03",q:"Evaluate $\\int_1^e x\\ln(x)\\, dx$.",a:"$= \\left[\\frac{x^2}{2}\\ln(x) - \\frac{x^2}{4}\\right]_1^e = \\left(\\frac{e^2}{2} - \\frac{e^2}{4}\\right) - \\left(0 - \\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_004_h04",q:"Given $\\frac{d}{dx}\\!\\left[-\\frac{\\ln(x)}{x} - \\frac{1}{x}\\right] = \\frac{\\ln(x)}{x^2}$, find $\\int \\frac{\\ln(x)}{x^2}\\, dx$.",a:"$\\int \\frac{\\ln(x)}{x^2}\\, dx = -\\frac{\\ln(x)}{x} - \\frac{1}{x} + C$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_004_h05",q:"Evaluate $\\int_1^{e^3} \\frac{\\ln(x)}{3}\\, dx$.",a:"$= \\frac{1}{3}[x\\ln(x) - x]_1^{e^3} = \\frac{1}{3}[(3e^3 - e^3) - (0 - 1)] = \\frac{2e^3 + 1}{3}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_005",
          topic: "The Logarithmic Function",
          subtopic: "Calculus of the Natural Logarithmic Function",
          concept: "Product Rule",
          pt: "Differentiating $x \\cdot \\ln(x)$ using product rule",
          testing: "Apply the product rule $\\frac{d}{dx}[uv] = u'v + uv'$ where one factor is a power of $x$ and the other involves $\\ln(x)$",
          reason_bank: ["wrong_rule","setup_error","sign_error","algebra_slip","missing_chain_factor","not_sure"],
          easy: [
            {qid:"LN_005_e01",q:"Differentiate $y = x\\ln(x)$.",a:"$y' = \\ln(x) + x \\cdot \\frac{1}{x} = \\ln(x) + 1$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_005_e02",q:"Differentiate $y = 3x\\ln(x)$.",a:"$y' = 3\\ln(x) + 3x \\cdot \\frac{1}{x} = 3\\ln(x) + 3 = 3(\\ln(x) + 1)$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_005_e03",q:"Differentiate $y = x^2 \\ln(x)$.",a:"$y' = 2x\\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        }
          ],
          medium: [
            {qid:"LN_005_m01",q:"Differentiate $y = x^2 \\ln(x)$ and factorise.",a:"$y' = 2x\\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x = x(2\\ln(x) + 1)$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_005_m02",q:"Differentiate $y = x^3 \\ln(x)$.",a:"$y' = 3x^2\\ln(x) + x^3 \\cdot \\frac{1}{x} = 3x^2\\ln(x) + x^2 = x^2(3\\ln(x) + 1)$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_005_m03",q:"Differentiate $y = (2x+1)\\ln(x)$.",a:"$y' = 2\\ln(x) + \\frac{2x+1}{x}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_005_m04",q:"Differentiate $y = x\\ln(2x)$.",a:"$y' = \\ln(2x) + x \\cdot \\frac{2}{2x} = \\ln(2x) + 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_005_m05",q:"Differentiate $y = (x-1)\\ln(x)$.",a:"$y' = \\ln(x) + \\frac{x-1}{x} = \\ln(x) + 1 - \\frac{1}{x}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        }
          ],
          hard: [
            {qid:"LN_005_h01",q:"Differentiate $y = x^2 \\ln(x^3)$.",a:"Since $\\ln(x^3) = 3\\ln(x)$: $y = 3x^2\\ln(x)$. $y' = 6x\\ln(x) + 3x = 3x(2\\ln(x) + 1)$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_005_h02",q:"Differentiate $y = \\sqrt{x}\\,\\ln(x)$.",a:"$y' = \\frac{\\ln(x)}{2\\sqrt{x}} + \\frac{\\sqrt{x}}{x} = \\frac{\\ln(x)}{2\\sqrt{x}} + \\frac{1}{\\sqrt{x}} = \\frac{\\ln(x) + 2}{2\\sqrt{x}}$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_005_h03",q:"If $f(x) = x^2\\ln(x)$, find $f'(e)$.",a:"$f'(x) = x(2\\ln(x) + 1)$. $f'(e) = e(2(1) + 1) = 3e$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_005_h04",q:"Differentiate $y = x\\ln(x^2+1)$.",a:"$y' = \\ln(x^2+1) + x \\cdot \\frac{2x}{x^2+1} = \\ln(x^2+1) + \\frac{2x^2}{x^2+1}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_005_h05",q:"Find the $x$-value where $y = x^2\\ln(x)$ has a stationary point ($x > 0$).",a:"$y' = x(2\\ln(x) + 1) = 0$. Since $x > 0$: $2\\ln(x) + 1 = 0 \\Rightarrow \\ln(x) = -\\frac{1}{2} \\Rightarrow x = e^{-1/2} = \\frac{1}{\\sqrt{e}}$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        }
          ]
        }
,

    {
          pt_id: "LN_006",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Equations",
          pt: "Solving equation involving logarithm to find specific value",
          testing: "Convert $\\log_a(x) = b$ to exponential form $x = a^b$ to solve for the unknown",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_006_e01",q:"If $\\log_{10}(x) = 1$, find $x$.",a:"$x = 10^1 = 10$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
            },
            constraints: ["v1 != 10"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)"},
              a: {"10": "str(v1)"},
            },
            sourceValues: {"v1": 10},
          }
        },
            {qid:"LN_006_e02",q:"If $\\log_{10}(x) = 3$, find $x$.",a:"$x = 10^3 = 1000$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 10 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "3": "str(v2)"},
              a: {"10": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 3},
          }
        },
            {qid:"LN_006_e03",q:"If $\\log_{10}(x) = -1$, find $x$.",a:"$x = 10^{-1} = 0.1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
            },
            constraints: ["v1 != 10"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)"},
              a: {"10": "str(v1)"},
            },
            sourceValues: {"v1": 10},
          }
        }
          ],
          medium: [
            {qid:"LN_006_m01",q:"If $\\log_{10}(x) = 2.5$, find $x$.",a:"$x = 10^{2.5} = 100\\sqrt{10} \\approx 316.2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "float", "min": 2.0, "max": 3.0, "step": 0.05, "description": "Value 2 (source: 2.5)"},
            },
            constraints: ["v1 != 10 or v2 != 2.5"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "2.5": "str(v2)"},
              a: {"10": "str(v1)", "2.5": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 2.5},
          }
        },
            {qid:"LN_006_m02",q:"If $\\ln(x) = 3$, find $x$.",a:"$x = e^3 \\approx 20.09$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_006_m03",q:"If $\\log_2(x) = -3$, find $x$.",a:"$x = 2^{-3} = \\frac{1}{8}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -8, "max": 2, "step": 1, "description": "Value 1 (source: -3)"},
            },
            constraints: ["v1 != -3"],
            derived: {
            },
            substitutions: {
              q: {"-3": "str(v1)"},
              a: {"-3": "str(v1)"},
            },
            sourceValues: {"v1": -3},
          }
        },
            {qid:"LN_006_m04",q:"If $2\\log_{10}(x) = 6$, find $x$.",a:"$\\log_{10}(x) = 3 \\Rightarrow x = 10^3 = 1000$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 2 (source: 10)"},
              v3: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 3 (source: 6)"},
            },
            constraints: ["v1 != 2 or v2 != 10 or v3 != 6"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "10": "str(v2)", "6": "str(v3)"},
              a: {"2": "str(v1)", "10": "str(v2)", "6": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 10, "v3": 6},
          }
        },
            {qid:"LN_006_m05",q:"If $\\log_5(x) = 3$, find $x$.",a:"$x = 5^3 = 125$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        }
          ],
          hard: [
            {qid:"LN_006_h01",q:"If $\\log_{10}(x^2) = 4$ and $x > 0$, find $x$.",a:"$2\\log_{10}(x) = 4 \\Rightarrow \\log_{10}(x) = 2 \\Rightarrow x = 100$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
            },
            constraints: ["v1 != 10 or v2 != 4"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "4": "str(v2)"},
              a: {"10": "str(v1)", "4": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 4},
          }
        },
            {qid:"LN_006_h02",q:"Solve $\\ln(x) + \\ln(3) = \\ln(15)$.",a:"$\\ln(3x) = \\ln(15) \\Rightarrow 3x = 15 \\Rightarrow x = 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 8, "max": 22, "step": 1, "description": "Value 2 (source: 15)"},
            },
            constraints: ["v1 != 3 or v2 != 15"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "15": "str(v2)"},
              a: {"3": "str(v1)", "15": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 15},
          }
        },
            {qid:"LN_006_h03",q:"Solve $\\log_{10}(x+1) = 2$.",a:"$x + 1 = 10^2 = 100 \\Rightarrow x = 99$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 10 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "2": "str(v2)"},
              a: {"10": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 2},
          }
        },
            {qid:"LN_006_h04",q:"Solve $3\\ln(x) = \\ln(27)$.",a:"$\\ln(x^3) = \\ln(27) \\Rightarrow x^3 = 27 \\Rightarrow x = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 14, "max": 40, "step": 5, "description": "Value 2 (source: 27)"},
            },
            constraints: ["v1 != 3 or v2 != 27"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "27": "str(v2)"},
              a: {"3": "str(v1)", "27": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 27},
          }
        },
            {qid:"LN_006_h05",q:"Solve $\\log_{10}(2x) + \\log_{10}(5) = 2$.",a:"$\\log_{10}(10x) = 2 \\Rightarrow 10x = 100 \\Rightarrow x = 10$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 3 (source: 5)"},
            },
            constraints: ["v1 != 10 or v2 != 2 or v3 != 5"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "2": "str(v2)", "5": "str(v3)"},
              a: {"10": "str(v1)", "2": "str(v2)", "5": "str(v3)"},
            },
            sourceValues: {"v1": 10, "v2": 2, "v3": 5},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_007",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Equations",
          pt: "Solving exponential equation by isolating $e^{kx}$ and taking logarithms",
          testing: "Isolate the exponential term, then apply $\\ln$ to both sides and solve the resulting linear equation",
          reason_bank: ["wrong_rule","missing_chain_factor","substitution_error","sign_error","algebra_slip","not_sure"],
          easy: [
            {qid:"LN_007_e01",q:"Solve $e^x = 5$.",a:"$x = \\ln 5 \\approx 1.609$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        },
            {qid:"LN_007_e02",q:"Solve $e^{2x} = 1$.",a:"$2x = \\ln 1 = 0 \\Rightarrow x = 0$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_007_e03",q:"Solve $3e^x = 12$.",a:"$e^x = 4 \\Rightarrow x = \\ln 4 = 2\\ln 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 6, "max": 18, "step": 1, "description": "Value 2 (source: 12)"},
            },
            constraints: ["v1 != 3 or v2 != 12"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "12": "str(v2)"},
              a: {"3": "str(v1)", "12": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 12},
          }
        }
          ],
          medium: [
            {qid:"LN_007_m01",q:"Solve $5e^{2x} = 40$.",a:"$e^{2x} = 8 \\Rightarrow 2x = \\ln 8 \\Rightarrow x = \\frac{3\\ln 2}{2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": 20, "max": 60, "step": 5, "description": "Value 3 (source: 40)"},
            },
            constraints: ["v1 != 5 or v2 != 2 or v3 != 40"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "2": "str(v2)", "40": "str(v3)"},
              a: {"5": "str(v1)", "2": "str(v2)", "40": "str(v3)"},
            },
            sourceValues: {"v1": 5, "v2": 2, "v3": 40},
          }
        },
            {qid:"LN_007_m02",q:"Solve $200e^{-0.1t} = 50$.",a:"$e^{-0.1t} = 0.25 \\Rightarrow -0.1t = \\ln(0.25) \\Rightarrow t = 10\\ln 4 \\approx 13.86$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 100, "max": 300, "step": 5, "description": "Value 1 (source: 200)"},
              v2: {"type": "int", "min": 25, "max": 75, "step": 5, "description": "Value 2 (source: 50)"},
            },
            constraints: ["v1 != 200 or v2 != 50"],
            derived: {
            },
            substitutions: {
              q: {"200": "str(v1)", "50": "str(v2)"},
              a: {"200": "str(v1)", "50": "str(v2)"},
            },
            sourceValues: {"v1": 200, "v2": 50},
          }
        },
            {qid:"LN_007_m03",q:"Solve $4e^{3x} = 100$.",a:"$e^{3x} = 25 \\Rightarrow 3x = \\ln 25 \\Rightarrow x = \\frac{2\\ln 5}{3}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": 50, "max": 150, "step": 5, "description": "Value 3 (source: 100)"},
            },
            constraints: ["v1 != 4 or v2 != 3 or v3 != 100"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "3": "str(v2)", "100": "str(v3)"},
              a: {"4": "str(v1)", "3": "str(v2)", "100": "str(v3)"},
            },
            sourceValues: {"v1": 4, "v2": 3, "v3": 100},
          }
        },
            {qid:"LN_007_m04",q:"Solve $e^{x+1} = 10$.",a:"$x + 1 = \\ln 10 \\Rightarrow x = \\ln 10 - 1 \\approx 1.303$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
            },
            constraints: ["v1 != 10"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)"},
              a: {"10": "str(v1)"},
            },
            sourceValues: {"v1": 10},
          }
        },
            {qid:"LN_007_m05",q:"Solve $2e^{-x} = 6$.",a:"$e^{-x} = 3 \\Rightarrow -x = \\ln 3 \\Rightarrow x = -\\ln 3 \\approx -1.099$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 2 (source: 6)"},
            },
            constraints: ["v1 != 2 or v2 != 6"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "6": "str(v2)"},
              a: {"2": "str(v1)", "6": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 6},
          }
        }
          ],
          hard: [
            {qid:"LN_007_h01",q:"Solve $e^{2x} - 5e^x + 6 = 0$.",a:"Let $u = e^x$: $u^2 - 5u + 6 = 0 \\Rightarrow (u-2)(u-3) = 0 \\Rightarrow u = 2, 3$. So $x = \\ln 2$ or $x = \\ln 3$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 3 (source: 6)"},
            },
            constraints: ["v1 != 2 or v2 != 5 or v3 != 6"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "5": "str(v2)", "6": "str(v3)"},
              a: {"2": "str(v1)", "5": "str(v2)", "6": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 5, "v3": 6},
          }
        },
            {qid:"LN_007_h02",q:"Solve $3e^{2x} + e^x - 2 = 0$.",a:"Let $u = e^x$: $3u^2 + u - 2 = 0 \\Rightarrow (3u - 2)(u + 1) = 0$. Since $u > 0$: $u = \\frac{2}{3}$. So $x = \\ln\\!\\left(\\frac{2}{3}\\right)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        },
            {qid:"LN_007_h03",q:"Solve $2^x = 7$.",a:"$x = \\frac{\\ln 7}{\\ln 2} = \\log_2 7 \\approx 2.807$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 2 (source: 7)"},
            },
            constraints: ["v1 != 2 or v2 != 7"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "7": "str(v2)"},
              a: {"2": "str(v1)", "7": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 7},
          }
        },
            {qid:"LN_007_h04",q:"Solve $e^x + e^{-x} = 3$.",a:"Let $u = e^x$: $u + \\frac{1}{u} = 3 \\Rightarrow u^2 - 3u + 1 = 0 \\Rightarrow u = \\frac{3 \\pm \\sqrt{5}}{2}$. Both positive, so $x = \\ln\\!\\left(\\frac{3+\\sqrt{5}}{2}\\right)$ or $x = \\ln\\!\\left(\\frac{3-\\sqrt{5}}{2}\\right)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_007_h05",q:"Solve $5 \\cdot 2^{x+1} - 3 \\cdot 4^x = 7$.",a:"$10 \\cdot 2^x - 3 \\cdot 2^{2x} = 7$. Let $u = 2^x$: $3u^2 - 10u + 7 = 0 \\Rightarrow (3u-7)(u-1) = 0$. So $u = 1$ or $u = \\frac{7}{3}$, giving $x = 0$ or $x = \\log_2\\!\\left(\\frac{7}{3}\\right)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 3 (source: 3)"},
              v4: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 4 (source: 4)"},
              v5: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 5 (source: 7)"},
            },
            constraints: ["v1 != 5 or v2 != 2 or v3 != 3"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "2": "str(v2)", "3": "str(v3)", "4": "str(v4)", "7": "str(v5)"},
              a: {"5": "str(v1)", "2": "str(v2)", "3": "str(v3)", "4": "str(v4)", "7": "str(v5)"},
            },
            sourceValues: {"v1": 5, "v2": 2, "v3": 3, "v4": 4, "v5": 7},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_008",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Equations",
          pt: "Solving logarithmic equation for variable using log laws",
          testing: "Combine logarithmic terms using product/quotient rules, convert to exponential form, and solve the resulting algebraic equation",
          reason_bank: ["wrong_rule","missing_chain_factor","substitution_error","sign_error","algebra_slip","not_sure"],
          easy: [
            {qid:"LN_008_e01",q:"Solve $\\log_2(x) = 5$.",a:"$x = 2^5 = 32$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        },
            {qid:"LN_008_e02",q:"Solve $\\ln(2x) = \\ln(10)$.",a:"$2x = 10 \\Rightarrow x = 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 2 (source: 10)"},
            },
            constraints: ["v1 != 2 or v2 != 10"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "10": "str(v2)"},
              a: {"2": "str(v1)", "10": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 10},
          }
        },
            {qid:"LN_008_e03",q:"Solve $\\log_3(x) + \\log_3(3) = 2$.",a:"$\\log_3(3x) = 2 \\Rightarrow 3x = 9 \\Rightarrow x = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        }
          ],
          medium: [
            {qid:"LN_008_m01",q:"Solve $\\log_2(x+3) + \\log_2(x-1) = 3$.",a:"$\\log_2[(x+3)(x-1)] = 3 \\Rightarrow (x+3)(x-1) = 8 \\Rightarrow x^2 + 2x - 11 = 0 \\Rightarrow x = -1 + 2\\sqrt{3}$ (reject negative solution since we need $x > 1$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_008_m02",q:"Solve $\\ln(x) - \\ln(x-2) = 1$.",a:"$\\ln\\!\\left(\\frac{x}{x-2}\\right) = 1 \\Rightarrow \\frac{x}{x-2} = e \\Rightarrow x = ex - 2e \\Rightarrow x(e-1) = 2e \\Rightarrow x = \\frac{2e}{e-1}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_008_m03",q:"Solve $\\log_3(x+6) - \\log_3(x) = 2$.",a:"$\\log_3\\!\\left(\\frac{x+6}{x}\\right) = 2 \\Rightarrow \\frac{x+6}{x} = 9 \\Rightarrow x + 6 = 9x \\Rightarrow x = \\frac{3}{4}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 1 (source: 6)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 6 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"6": "str(v1)", "2": "str(v2)"},
              a: {"6": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 6, "v2": 2},
          }
        },
            {qid:"LN_008_m04",q:"Solve $2\\log_5(x) = \\log_5(9)$.",a:"$\\log_5(x^2) = \\log_5(9) \\Rightarrow x^2 = 9 \\Rightarrow x = 3$ (since $x > 0$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 2 (source: 9)"},
            },
            constraints: ["v1 != 2 or v2 != 9"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "9": "str(v2)"},
              a: {"2": "str(v1)", "9": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 9},
          }
        },
            {qid:"LN_008_m05",q:"Solve $\\log_2(x^2 - 4) = 3$.",a:"$x^2 - 4 = 8 \\Rightarrow x^2 = 12 \\Rightarrow x = 2\\sqrt{3}$ (taking $x > 2$ for domain)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 4 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "3": "str(v2)"},
              a: {"4": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 4, "v2": 3},
          }
        }
          ],
          hard: [
            {qid:"LN_008_h01",q:"Solve $\\log_3(2x+1) + \\log_3(x-1) = 1$.",a:"$(2x+1)(x-1) = 3 \\Rightarrow 2x^2 - x - 4 = 0 \\Rightarrow x = \\frac{1 + \\sqrt{33}}{4}$ (reject negative root; need $x > 1$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_008_h02",q:"Solve $\\ln(x^2) - \\ln(x+2) = \\ln(3)$.",a:"$\\ln\\!\\left(\\frac{x^2}{x+2}\\right) = \\ln 3 \\Rightarrow x^2 = 3(x+2) \\Rightarrow x^2 - 3x - 6 = 0 \\Rightarrow x = \\frac{3+\\sqrt{33}}{2}$ (reject negative root)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_008_h03",q:"Solve $\\log_2(x) + \\log_4(x) = 6$.",a:"$\\log_4(x) = \\frac{\\log_2(x)}{2}$, so $\\frac{3}{2}\\log_2(x) = 6 \\Rightarrow \\log_2(x) = 4 \\Rightarrow x = 16$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 1 (source: 6)"},
            },
            constraints: ["v1 != 6"],
            derived: {
            },
            substitutions: {
              q: {"6": "str(v1)"},
              a: {"6": "str(v1)"},
            },
            sourceValues: {"v1": 6},
          }
        },
            {qid:"LN_008_h04",q:"Solve $\\log_{10}(x) + \\log_{10}(x+3) = 1$.",a:"$\\log_{10}[x(x+3)] = 1 \\Rightarrow x^2 + 3x = 10 \\Rightarrow (x+5)(x-2) = 0 \\Rightarrow x = 2$ (reject $x = -5$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 10 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "3": "str(v2)"},
              a: {"10": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 3},
          }
        },
            {qid:"LN_008_h05",q:"Solve $2\\ln(x) = \\ln(x+4)$.",a:"$\\ln(x^2) = \\ln(x+4) \\Rightarrow x^2 = x + 4 \\Rightarrow x^2 - x - 4 = 0 \\Rightarrow x = \\frac{1+\\sqrt{17}}{2}$ (reject negative root)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
            },
            constraints: ["v1 != 2 or v2 != 4"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "4": "str(v2)"},
              a: {"2": "str(v1)", "4": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 4},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_009",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Evaluation",
          pt: "Determining parameters of logarithmic function from two points using simultaneous equations",
          testing: "Substitute the given points into $f(x) = a\\ln(x) + b$ (or variant), solve the system of equations for $a$ and $b$",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_009_e01",q:"$f(x) = a\\ln(x)$ passes through $(e, 5)$. Find $a$.",a:"$f(e) = a(1) = 5 \\Rightarrow a = 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        },
            {qid:"LN_009_e02",q:"$f(x) = \\ln(x) + b$ passes through $(1, 4)$. Find $b$.",a:"$f(1) = 0 + b = 4 \\Rightarrow b = 4$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_009_e03",q:"$f(x) = a\\ln(x) + 1$ passes through $(e^2, 7)$. Find $a$.",a:"$f(e^2) = 2a + 1 = 7 \\Rightarrow a = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 1 (source: 7)"},
            },
            constraints: ["v1 != 7"],
            derived: {
            },
            substitutions: {
              q: {"7": "str(v1)"},
              a: {"7": "str(v1)"},
            },
            sourceValues: {"v1": 7},
          }
        }
          ],
          medium: [
            {qid:"LN_009_m01",q:"$f(x) = a\\ln(x) + b$ passes through $(1, 3)$ and $(e, 7)$. Find $a$ and $b$.",a:"$f(1) = a(0) + b = 3 \\Rightarrow b = 3$. $f(e) = a(1) + 3 = 7 \\Rightarrow a = 4$. So $f(x) = 4\\ln(x) + 3$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 2 (source: 7)"},
            },
            constraints: ["v1 != 3 or v2 != 7"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "7": "str(v2)"},
              a: {"3": "str(v1)", "7": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 7},
          }
        },
            {qid:"LN_009_m02",q:"$f(x) = a\\ln(x) + b$ passes through $(1, 1)$ and $(e^2, 9)$. Find $a$ and $b$.",a:"$f(1) = b = 1$. $f(e^2) = 2a + 1 = 9 \\Rightarrow a = 4$. So $f(x) = 4\\ln(x) + 1$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 1 (source: 9)"},
            },
            constraints: ["v1 != 9"],
            derived: {
            },
            substitutions: {
              q: {"9": "str(v1)"},
              a: {"9": "str(v1)"},
            },
            sourceValues: {"v1": 9},
          }
        },
            {qid:"LN_009_m03",q:"$f(x) = a\\ln(x) + b$ passes through $(e, -1)$ and $(e^3, 5)$. Find $a$ and $b$.",a:"$a + b = -1$ and $3a + b = 5$. Subtracting: $2a = 6 \\Rightarrow a = 3$, $b = -4$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        },
            {qid:"LN_009_m04",q:"$f(x) = a\\log_2(x) + b$ passes through $(4, 7)$ and $(8, 10)$. Find $a$ and $b$.",a:"$2a + b = 7$ and $3a + b = 10$. Subtracting: $a = 3$, $b = 1$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 2 (source: 7)"},
              v3: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 3 (source: 8)"},
              v4: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 4 (source: 10)"},
            },
            constraints: ["v1 != 4 or v2 != 7 or v3 != 8"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "7": "str(v2)", "8": "str(v3)", "10": "str(v4)"},
              a: {"4": "str(v1)", "7": "str(v2)", "8": "str(v3)", "10": "str(v4)"},
            },
            sourceValues: {"v1": 4, "v2": 7, "v3": 8, "v4": 10},
          }
        },
            {qid:"LN_009_m05",q:"$f(x) = a\\ln(x-1) + b$ passes through $(2, 3)$ and $(e+1, 5)$. Find $a$ and $b$.",a:"$f(2) = a\\ln(1) + b = b = 3$. $f(e+1) = a\\ln(e) + 3 = a + 3 = 5 \\Rightarrow a = 2$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 3 (source: 5)"},
            },
            constraints: ["v1 != 2 or v2 != 3 or v3 != 5"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "3": "str(v2)", "5": "str(v3)"},
              a: {"2": "str(v1)", "3": "str(v2)", "5": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 3, "v3": 5},
          }
        }
          ],
          hard: [
            {qid:"LN_009_h01",q:"$f(x) = a\\ln(bx)$ passes through $(1, \\ln 3)$ and $(e, \\ln 3 + 2)$. Find $a$ and $b$.",a:"$f(1) = a\\ln(b) = \\ln 3$. $f(e) = a(\\ln b + 1) = \\ln 3 + 2$. Subtracting: $a = 2$. Then $2\\ln b = \\ln 3 \\Rightarrow b = \\sqrt{3}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        },
            {qid:"LN_009_h02",q:"$y = a\\ln(x) + bx$ passes through $(1, 2)$ and $(e, e+1)$. Find $a$ and $b$.",a:"$y(1) = 0 + b = 2 \\Rightarrow b = 2$. $y(e) = a + 2e = e + 1 \\Rightarrow a = 1 - e$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_009_h03",q:"$f(x) = a\\ln(x) + \\frac{b}{x}$ passes through $(1, 3)$ and $\\left(e, \\frac{2}{e}\\right)$. Find $a$ and $b$.",a:"$f(1) = 0 + b = 3 \\Rightarrow b = 3$. $f(e) = a + \\frac{3}{e} = \\frac{2}{e} \\Rightarrow a = -\\frac{1}{e}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        },
            {qid:"LN_009_h04",q:"$f(x) = a\\ln(x^2) + b$ passes through $(e, 5)$ and $(1/e, -1)$. Find $a$ and $b$.",a:"$f(x) = 2a\\ln(x) + b$. $f(e) = 2a + b = 5$. $f(1/e) = -2a + b = -1$. Adding: $2b = 4 \\Rightarrow b = 2$, $a = \\frac{3}{2}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        },
            {qid:"LN_009_h05",q:"$f(x) = \\ln(ax+b)$ passes through $(0, \\ln 3)$ and $(1, \\ln 5)$. Find $a$ and $b$.",a:"$f(0) = \\ln(b) = \\ln 3 \\Rightarrow b = 3$. $f(1) = \\ln(a+3) = \\ln 5 \\Rightarrow a = 2$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
            },
            constraints: ["v1 != 3 or v2 != 5"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "5": "str(v2)"},
              a: {"3": "str(v1)", "5": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 5},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_010",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Evaluation",
          pt: "Evaluating $\\log_a(x) = b$ by converting to exponential form",
          testing: "Use $\\log_a(x) = b \\Leftrightarrow a^b = x$ to find the unknown quantity (which may be the argument, base, or result)",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_010_e01",q:"Evaluate $\\log_2(8)$.",a:"$2^x = 8 = 2^3 \\Rightarrow x = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 1 (source: 8)"},
            },
            constraints: ["v1 != 8"],
            derived: {
            },
            substitutions: {
              q: {"8": "str(v1)"},
              a: {"8": "str(v1)"},
            },
            sourceValues: {"v1": 8},
          }
        },
            {qid:"LN_010_e02",q:"Evaluate $\\log_5(25)$.",a:"$5^x = 25 = 5^2 \\Rightarrow x = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 13, "max": 37, "step": 5, "description": "Value 1 (source: 25)"},
            },
            constraints: ["v1 != 25"],
            derived: {
            },
            substitutions: {
              q: {"25": "str(v1)"},
              a: {"25": "str(v1)"},
            },
            sourceValues: {"v1": 25},
          }
        },
            {qid:"LN_010_e03",q:"Evaluate $\\log_{10}(100)$.",a:"$10^x = 100 = 10^2 \\Rightarrow x = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": 50, "max": 150, "step": 5, "description": "Value 2 (source: 100)"},
            },
            constraints: ["v1 != 10 or v2 != 100"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "100": "str(v2)"},
              a: {"10": "str(v1)", "100": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 100},
          }
        }
          ],
          medium: [
            {qid:"LN_010_m01",q:"Find $x$ if $\\log_3(x) = 4$.",a:"$x = 3^4 = 81$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_010_m02",q:"Find $x$ if $\\log_x(32) = 5$.",a:"$x^5 = 32 \\Rightarrow x = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 16, "max": 48, "step": 5, "description": "Value 1 (source: 32)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
            },
            constraints: ["v1 != 32 or v2 != 5"],
            derived: {
            },
            substitutions: {
              q: {"32": "str(v1)", "5": "str(v2)"},
              a: {"32": "str(v1)", "5": "str(v2)"},
            },
            sourceValues: {"v1": 32, "v2": 5},
          }
        },
            {qid:"LN_010_m03",q:"Find $x$ if $\\log_4(x) = 3$.",a:"$x = 4^3 = 64$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_010_m04",q:"Find $x$ if $\\log_3(x) = -2$.",a:"$x = 3^{-2} = \\frac{1}{9}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -7, "max": 3, "step": 1, "description": "Value 1 (source: -2)"},
            },
            constraints: ["v1 != -2"],
            derived: {
            },
            substitutions: {
              q: {"-2": "str(v1)"},
              a: {"-2": "str(v1)"},
            },
            sourceValues: {"v1": -2},
          }
        },
            {qid:"LN_010_m05",q:"Find $x$ if $\\log_x(64) = 3$.",a:"$x^3 = 64 \\Rightarrow x = 4$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 32, "max": 96, "step": 5, "description": "Value 1 (source: 64)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 64 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"64": "str(v1)", "3": "str(v2)"},
              a: {"64": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 64, "v2": 3},
          }
        }
          ],
          hard: [
            {qid:"LN_010_h01",q:"Find $x$ if $\\log_2(x) = \\frac{5}{2}$.",a:"$x = 2^{5/2} = 4\\sqrt{2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 5 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "2": "str(v2)"},
              a: {"5": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 5, "v2": 2},
          }
        },
            {qid:"LN_010_h02",q:"Find $x$ if $\\log_x\\!\\left(\\frac{1}{27}\\right) = -3$.",a:"$x^{-3} = \\frac{1}{27} \\Rightarrow x^3 = 27 \\Rightarrow x = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 14, "max": 40, "step": 5, "description": "Value 1 (source: 27)"},
              v2: {"type": "int", "min": -8, "max": 2, "step": 1, "description": "Value 2 (source: -3)"},
            },
            constraints: ["v1 != 27 or v2 != -3"],
            derived: {
            },
            substitutions: {
              q: {"27": "str(v1)", "-3": "str(v2)"},
              a: {"27": "str(v1)", "-3": "str(v2)"},
            },
            sourceValues: {"v1": 27, "v2": -3},
          }
        },
            {qid:"LN_010_h03",q:"Find $x$ if $\\log_{x+1}(8) = 3$.",a:"$(x+1)^3 = 8 \\Rightarrow x + 1 = 2 \\Rightarrow x = 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 1 (source: 8)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 8 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"8": "str(v1)", "3": "str(v2)"},
              a: {"8": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 8, "v2": 3},
          }
        },
            {qid:"LN_010_h04",q:"Find $x$ if $\\log_3(2x-1) = 2$.",a:"$2x - 1 = 3^2 = 9 \\Rightarrow x = 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_010_h05",q:"Find $x$ if $\\log_2(\\log_3(x)) = 1$.",a:"$\\log_3(x) = 2^1 = 2 \\Rightarrow x = 3^2 = 9$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_011",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Evaluation",
          pt: "Evaluating $a^{kp}$ by using log-exponential inverse relationship",
          testing: "Use $a^{\\log_a(x)} = x$ and index laws to evaluate expressions like $a^{kp}$ where $p = \\log_a(n)$",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_011_e01",q:"Given $\\log_3(4) = p$, evaluate $3^p$.",a:"$3^p = 3^{\\log_3(4)} = 4$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 4 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "3": "str(v2)"},
              a: {"4": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 4, "v2": 3},
          }
        },
            {qid:"LN_011_e02",q:"Given $\\log_2(7) = p$, evaluate $2^{2p}$.",a:"$2^{2p} = (2^p)^2 = 7^2 = 49$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 1 (source: 7)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 7 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"7": "str(v1)", "2": "str(v2)"},
              a: {"7": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 7, "v2": 2},
          }
        },
            {qid:"LN_011_e03",q:"Given $\\ln(3) = k$, evaluate $e^k$.",a:"$e^k = e^{\\ln 3} = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        }
          ],
          medium: [
            {qid:"LN_011_m01",q:"Given $\\log_2(5) = p$, evaluate $2^{3p}$.",a:"$2^{3p} = (2^p)^3 = 5^3 = 125$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 3 (source: 3)"},
            },
            constraints: ["v1 != 5 or v2 != 2 or v3 != 3"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
              a: {"5": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
            },
            sourceValues: {"v1": 5, "v2": 2, "v3": 3},
          }
        },
            {qid:"LN_011_m02",q:"Given $\\log_3(2) = p$, evaluate $3^{4p}$.",a:"$3^{4p} = (3^p)^4 = 2^4 = 16$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 3 (source: 4)"},
            },
            constraints: ["v1 != 2 or v2 != 3 or v3 != 4"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "3": "str(v2)", "4": "str(v3)"},
              a: {"2": "str(v1)", "3": "str(v2)", "4": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 3, "v3": 4},
          }
        },
            {qid:"LN_011_m03",q:"Given $\\log_5(3) = p$, evaluate $5^{-p}$.",a:"$5^{-p} = (5^p)^{-1} = 3^{-1} = \\frac{1}{3}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
            },
            constraints: ["v1 != 3 or v2 != 5"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "5": "str(v2)"},
              a: {"3": "str(v1)", "5": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 5},
          }
        },
            {qid:"LN_011_m04",q:"Given $\\log_2(3) = a$, evaluate $4^a$.",a:"$4^a = (2^2)^a = 2^{2a} = (2^a)^2 = 3^2 = 9$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
            },
            constraints: ["v1 != 3 or v2 != 4"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "4": "str(v2)"},
              a: {"3": "str(v1)", "4": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 4},
          }
        },
            {qid:"LN_011_m05",q:"Given $\\log_{10}(2) = a$, evaluate $10^{3a}$.",a:"$10^{3a} = (10^a)^3 = 2^3 = 8$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 3 (source: 3)"},
            },
            constraints: ["v1 != 10 or v2 != 2 or v3 != 3"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
              a: {"10": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
            },
            sourceValues: {"v1": 10, "v2": 2, "v3": 3},
          }
        }
          ],
          hard: [
            {qid:"LN_011_h01",q:"Given $\\log_2(3) = p$ and $\\log_2(5) = q$, evaluate $2^{2p+q}$.",a:"$2^{2p+q} = 2^{2p} \\cdot 2^q = (2^p)^2 \\cdot 2^q = 9 \\times 5 = 45$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 3 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 5 or v3 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "5": "str(v2)", "2": "str(v3)"},
              a: {"3": "str(v1)", "5": "str(v2)", "2": "str(v3)"},
            },
            sourceValues: {"v1": 3, "v2": 5, "v3": 2},
          }
        },
            {qid:"LN_011_h02",q:"Given $\\log_3(2) = a$, evaluate $9^a$.",a:"$9^a = (3^2)^a = 3^{2a} = (3^a)^2 = 2^2 = 4$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 2 (source: 9)"},
            },
            constraints: ["v1 != 2 or v2 != 9"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "9": "str(v2)"},
              a: {"2": "str(v1)", "9": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 9},
          }
        },
            {qid:"LN_011_h03",q:"Given $\\log_2(5) = p$, evaluate $8^p$.",a:"$8^p = (2^3)^p = 2^{3p} = (2^p)^3 = 5^3 = 125$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 2 (source: 8)"},
            },
            constraints: ["v1 != 5 or v2 != 8"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "8": "str(v2)"},
              a: {"5": "str(v1)", "8": "str(v2)"},
            },
            sourceValues: {"v1": 5, "v2": 8},
          }
        },
            {qid:"LN_011_h04",q:"Given $\\ln(2) = k$, evaluate $e^{k+2}$.",a:"$e^{k+2} = e^k \\cdot e^2 = 2e^2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_011_h05",q:"Given $\\log_3(5) = p$, evaluate $\\left(\\frac{1}{3}\\right)^p$.",a:"$\\left(\\frac{1}{3}\\right)^p = 3^{-p} = (3^p)^{-1} = 5^{-1} = \\frac{1}{5}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 5 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "3": "str(v2)"},
              a: {"5": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 5, "v2": 3},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_012",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Evaluation",
          pt: "Evaluating logarithmic function at a given input",
          testing: "Substitute the given $x$-value into a logarithmic function and simplify using log properties and exact values",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_012_e01",q:"If $f(x) = \\log_2(x)$, find $f(8)$.",a:"$f(8) = \\log_2(8) = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 1 (source: 8)"},
            },
            constraints: ["v1 != 8"],
            derived: {
            },
            substitutions: {
              q: {"8": "str(v1)"},
              a: {"8": "str(v1)"},
            },
            sourceValues: {"v1": 8},
          }
        },
            {qid:"LN_012_e02",q:"If $f(x) = 2\\ln(x)$, find $f(e^2)$.",a:"$f(e^2) = 2\\ln(e^2) = 2(2) = 4$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_012_e03",q:"If $f(x) = \\log_{10}(x) + 1$, find $f(100)$.",a:"$f(100) = \\log_{10}(100) + 1 = 2 + 1 = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": 50, "max": 150, "step": 5, "description": "Value 2 (source: 100)"},
            },
            constraints: ["v1 != 10 or v2 != 100"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "100": "str(v2)"},
              a: {"10": "str(v1)", "100": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 100},
          }
        }
          ],
          medium: [
            {qid:"LN_012_m01",q:"If $f(x) = 3\\log_2(x - 1) + 4$, find $f(5)$.",a:"$f(5) = 3\\log_2(4) + 4 = 3(2) + 4 = 10$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
              v3: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 3 (source: 5)"},
            },
            constraints: ["v1 != 3 or v2 != 4 or v3 != 5"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "4": "str(v2)", "5": "str(v3)"},
              a: {"3": "str(v1)", "4": "str(v2)", "5": "str(v3)"},
            },
            sourceValues: {"v1": 3, "v2": 4, "v3": 5},
          }
        },
            {qid:"LN_012_m02",q:"If $f(x) = 2\\log_3(x+2) - 1$, find $f(7)$.",a:"$f(7) = 2\\log_3(9) - 1 = 2(2) - 1 = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 2 (source: 7)"},
            },
            constraints: ["v1 != 2 or v2 != 7"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "7": "str(v2)"},
              a: {"2": "str(v1)", "7": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 7},
          }
        },
            {qid:"LN_012_m03",q:"If $f(x) = \\ln(x^2+1)$, find $f(0)$.",a:"$f(0) = \\ln(0+1) = \\ln(1) = 0$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_012_m04",q:"If $g(x) = 5 - 2\\log_2(x)$, find $g(4)$.",a:"$g(4) = 5 - 2\\log_2(4) = 5 - 2(2) = 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 3 (source: 4)"},
            },
            constraints: ["v1 != 5 or v2 != 2 or v3 != 4"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "2": "str(v2)", "4": "str(v3)"},
              a: {"5": "str(v1)", "2": "str(v2)", "4": "str(v3)"},
            },
            sourceValues: {"v1": 5, "v2": 2, "v3": 4},
          }
        },
            {qid:"LN_012_m05",q:"If $f(x) = \\log_5(2x+1)$, find $f(12)$.",a:"$f(12) = \\log_5(25) = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 6, "max": 18, "step": 1, "description": "Value 2 (source: 12)"},
            },
            constraints: ["v1 != 2 or v2 != 12"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "12": "str(v2)"},
              a: {"2": "str(v1)", "12": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 12},
          }
        }
          ],
          hard: [
            {qid:"LN_012_h01",q:"If $f(x) = \\ln(x) + \\ln(x+2)$, find $f(e-1)$ in simplified form.",a:"$f(e-1) = \\ln(e-1) + \\ln(e+1) = \\ln[(e-1)(e+1)] = \\ln(e^2 - 1)$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_012_h02",q:"If $f(x) = \\log_2(x^2) - \\log_2(x+2)$, find $f(4)$.",a:"$f(4) = \\log_2(16) - \\log_2(6) = \\log_2\\!\\left(\\frac{16}{6}\\right) = \\log_2\\!\\left(\\frac{8}{3}\\right)$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
            },
            constraints: ["v1 != 2 or v2 != 4"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "4": "str(v2)"},
              a: {"2": "str(v1)", "4": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 4},
          }
        },
            {qid:"LN_012_h03",q:"If $f(x) = 3\\log_2(x)$, find the value of $x$ such that $f(x) = 12$.",a:"$3\\log_2(x) = 12 \\Rightarrow \\log_2(x) = 4 \\Rightarrow x = 16$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 6, "max": 18, "step": 1, "description": "Value 2 (source: 12)"},
            },
            constraints: ["v1 != 3 or v2 != 12"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "12": "str(v2)"},
              a: {"3": "str(v1)", "12": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 12},
          }
        },
            {qid:"LN_012_h04",q:"If $f(x) = \\log_3(x^2 + 2x)$, find $f(1)$.",a:"$f(1) = \\log_3(1 + 2) = \\log_3(3) = 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_012_h05",q:"If $h(x) = 2\\ln(3x-2) + 1$, find $h(1)$.",a:"$h(1) = 2\\ln(1) + 1 = 0 + 1 = 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ]
        }
,

    {
          pt_id: "LN_013",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Graphs",
          pt: "Comparing quantities using logarithmic scale by taking ratio of exponential forms",
          testing: "Use the relationship between log-scale values and actual values to find ratios (e.g. Richter, decibels, pH)",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_013_e01",q:"Object A has $\\log_{10}(I_A) = 3$ and object B has $\\log_{10}(I_B) = 1$. Find $I_A / I_B$.",a:"$I_A = 10^3$, $I_B = 10^1$. $I_A/I_B = 10^{3-1} = 100$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 10 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "3": "str(v2)"},
              a: {"10": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 3},
          }
        },
            {qid:"LN_013_e02",q:"A solution with pH 3 is compared to one with pH 5, where pH $= -\\log_{10}[\\text{H}^+]$. How many times more concentrated in $\\text{H}^+$ is the first?",a:"$[\\text{H}^+]_1 = 10^{-3}$, $[\\text{H}^+]_2 = 10^{-5}$. Ratio $= 10^{-3}/10^{-5} = 10^2 = 100$ times.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 3 (source: 10)"},
            },
            constraints: ["v1 != 3 or v2 != 5 or v3 != 10"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "5": "str(v2)", "10": "str(v3)"},
              a: {"3": "str(v1)", "5": "str(v2)", "10": "str(v3)"},
            },
            sourceValues: {"v1": 3, "v2": 5, "v3": 10},
          }
        },
            {qid:"LN_013_e03",q:"Two earthquakes have Richter magnitudes $M_1 = 4$ and $M_2 = 6$. How many times more intense is the second?",a:"$I_2/I_1 = 10^{6-4} = 10^2 = 100$ times.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 2 (source: 6)"},
            },
            constraints: ["v1 != 4 or v2 != 6"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "6": "str(v2)"},
              a: {"4": "str(v1)", "6": "str(v2)"},
            },
            sourceValues: {"v1": 4, "v2": 6},
          }
        }
          ],
          medium: [
            {qid:"LN_013_m01",q:"Sound A has intensity level $L_A = 80$ dB and Sound B has $L_B = 60$ dB, where $L = 10\\log_{10}(I/I_0)$. Find $I_A/I_B$.",a:"$L_A - L_B = 10\\log_{10}(I_A/I_B) = 20 \\Rightarrow \\log_{10}(I_A/I_B) = 2 \\Rightarrow I_A/I_B = 100$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 40, "max": 120, "step": 5, "description": "Value 1 (source: 80)"},
              v2: {"type": "int", "min": 30, "max": 90, "step": 5, "description": "Value 2 (source: 60)"},
              v3: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 3 (source: 10)"},
            },
            constraints: ["v1 != 80 or v2 != 60 or v3 != 10"],
            derived: {
            },
            substitutions: {
              q: {"80": "str(v1)", "60": "str(v2)", "10": "str(v3)"},
              a: {"80": "str(v1)", "60": "str(v2)", "10": "str(v3)"},
            },
            sourceValues: {"v1": 80, "v2": 60, "v3": 10},
          }
        },
            {qid:"LN_013_m02",q:"Earthquake A has Richter magnitude 3.5 and earthquake B has magnitude 5.5. How many times more intense is B?",a:"$I_B/I_A = 10^{5.5-3.5} = 10^2 = 100$ times.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "float", "min": 3.0, "max": 4.0, "step": 0.05, "description": "Value 1 (source: 3.5)"},
              v2: {"type": "float", "min": 5.0, "max": 6.0, "step": 0.05, "description": "Value 2 (source: 5.5)"},
            },
            constraints: ["v1 != 3.5 or v2 != 5.5"],
            derived: {
            },
            substitutions: {
              q: {"3.5": "str(v1)", "5.5": "str(v2)"},
              a: {"3.5": "str(v1)", "5.5": "str(v2)"},
            },
            sourceValues: {"v1": 3.5, "v2": 5.5},
          }
        },
            {qid:"LN_013_m03",q:"A solution with pH 2 is compared to one with pH 5. How many times more concentrated in $\\text{H}^+$ is the first?",a:"Ratio $= 10^{5-2} = 10^3 = 1000$ times.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
            },
            constraints: ["v1 != 2 or v2 != 5"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "5": "str(v2)"},
              a: {"2": "str(v1)", "5": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 5},
          }
        },
            {qid:"LN_013_m04",q:"Sound levels are 70 dB and 40 dB. Find the ratio of their intensities.",a:"Difference $= 30$ dB $= 10\\log_{10}(I_1/I_2)$. $\\log_{10}(I_1/I_2) = 3 \\Rightarrow I_1/I_2 = 1000$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 35, "max": 105, "step": 5, "description": "Value 1 (source: 70)"},
              v2: {"type": "int", "min": 20, "max": 60, "step": 5, "description": "Value 2 (source: 40)"},
            },
            constraints: ["v1 != 70 or v2 != 40"],
            derived: {
            },
            substitutions: {
              q: {"70": "str(v1)", "40": "str(v2)"},
              a: {"70": "str(v1)", "40": "str(v2)"},
            },
            sourceValues: {"v1": 70, "v2": 40},
          }
        },
            {qid:"LN_013_m05",q:"Two stars differ by 5 magnitudes on the apparent magnitude scale. Using the Pogson relation (5 magnitudes $= 100\\times$ brightness), find the brightness ratio.",a:"$100^{5/5} = 100$. The brighter star is $100$ times as bright.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": 50, "max": 150, "step": 5, "description": "Value 2 (source: 100)"},
            },
            constraints: ["v1 != 5 or v2 != 100"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "100": "str(v2)"},
              a: {"5": "str(v1)", "100": "str(v2)"},
            },
            sourceValues: {"v1": 5, "v2": 100},
          }
        }
          ],
          hard: [
            {qid:"LN_013_h01",q:"A sound has intensity level 90 dB. A second sound is twice as intense. Find its level in dB.",a:"$L_2 = L_1 + 10\\log_{10}(2) = 90 + 10(0.301) \\approx 93.0$ dB.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 45, "max": 135, "step": 5, "description": "Value 1 (source: 90)"},
            },
            constraints: ["v1 != 90"],
            derived: {
            },
            substitutions: {
              q: {"90": "str(v1)"},
              a: {"90": "str(v1)"},
            },
            sourceValues: {"v1": 90},
          }
        },
            {qid:"LN_013_h02",q:"A solution has pH 4.3. Another has 100 times the $\\text{H}^+$ concentration. Find its pH.",a:"$\\text{pH}_2 = \\text{pH}_1 - \\log_{10}(100) = 4.3 - 2 = 2.3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "float", "min": 3.8, "max": 4.8, "step": 0.05, "description": "Value 1 (source: 4.3)"},
              v2: {"type": "int", "min": 50, "max": 150, "step": 5, "description": "Value 2 (source: 100)"},
            },
            constraints: ["v1 != 4.3 or v2 != 100"],
            derived: {
            },
            substitutions: {
              q: {"4.3": "str(v1)", "100": "str(v2)"},
              a: {"4.3": "str(v1)", "100": "str(v2)"},
            },
            sourceValues: {"v1": 4.3, "v2": 100},
          }
        },
            {qid:"LN_013_h03",q:"One earthquake is 500 times more intense than another. Find the difference in Richter magnitudes.",a:"$\\Delta M = \\log_{10}(500) \\approx 2.70$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 250, "max": 750, "step": 5, "description": "Value 1 (source: 500)"},
            },
            constraints: ["v1 != 500"],
            derived: {
            },
            substitutions: {
              q: {"500": "str(v1)"},
              a: {"500": "str(v1)"},
            },
            sourceValues: {"v1": 500},
          }
        },
            {qid:"LN_013_h04",q:"If the intensity of a sound is doubled, by how many decibels does the level increase?",a:"$\\Delta L = 10\\log_{10}(2) \\approx 3.01$ dB.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_013_h05",q:"Two earthquakes differ by 1.5 on the Richter scale. Find the intensity ratio.",a:"$I_2/I_1 = 10^{1.5} = 10\\sqrt{10} \\approx 31.6$ times.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "float", "min": 1.0, "max": 2.0, "step": 0.05, "description": "Value 1 (source: 1.5)"},
            },
            constraints: ["v1 != 1.5"],
            derived: {
            },
            substitutions: {
              q: {"1.5": "str(v1)"},
              a: {"1.5": "str(v1)"},
            },
            sourceValues: {"v1": 1.5},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_014",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Graphs",
          pt: "Determining gradient and intercept of linear log-scale relationship",
          testing: "Identify the gradient $m$ and intercept $c$ from $\\log(y) = mx + c$, and convert to the original exponential form $y = A \\cdot B^x$",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_014_e01",q:"$\\log_{10}(y) = 3x + 1$. State the gradient and the value of $y$ when $x = 0$.",a:"Gradient $= 3$. When $x = 0$: $\\log_{10}(y) = 1 \\Rightarrow y = 10$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 10 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "3": "str(v2)"},
              a: {"10": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 3},
          }
        },
            {qid:"LN_014_e02",q:"$\\ln(y) = 2x$. State the gradient and express $y$ in terms of $x$.",a:"Gradient $= 2$. $y = e^{2x}$. When $x = 0$: $y = 1$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_014_e03",q:"$\\log_{10}(y) = x + 2$. Find $y$ when $x = 0$.",a:"$\\log_{10}(y) = 2 \\Rightarrow y = 100$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 10 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "2": "str(v2)"},
              a: {"10": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 2},
          }
        }
          ],
          medium: [
            {qid:"LN_014_m01",q:"$\\log_{10}(y) = 2x + 3$. Find the gradient and vertical intercept of this linear relationship.",a:"Gradient $= 2$, vertical intercept $= 3$ (on the $\\log_{10}(y)$ vs $x$ graph). In original form: $y = 10^{2x+3} = 1000 \\times 100^x$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 3 (source: 3)"},
            },
            constraints: ["v1 != 10 or v2 != 2 or v3 != 3"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
              a: {"10": "str(v1)", "2": "str(v2)", "3": "str(v3)"},
            },
            sourceValues: {"v1": 10, "v2": 2, "v3": 3},
          }
        },
            {qid:"LN_014_m02",q:"$\\ln(y) = -0.5x + \\ln(4)$. Express $y$ in terms of $x$ and find $y(0)$.",a:"$y = e^{-0.5x + \\ln 4} = 4e^{-0.5x}$. $y(0) = 4$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_014_m03",q:"$\\log_{10}(y) = 0.5x - 1$. Find $y$ when $x = 2$.",a:"$\\log_{10}(y) = 0.5(2) - 1 = 0 \\Rightarrow y = 10^0 = 1$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 10 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "2": "str(v2)"},
              a: {"10": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 2},
          }
        },
            {qid:"LN_014_m04",q:"$\\log_2(y) = 3x + 2$. Express $y$ in terms of $x$ and find $y(0)$.",a:"$y = 2^{3x+2} = 4 \\cdot 8^x$. $y(0) = 4$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        },
            {qid:"LN_014_m05",q:"$\\ln(y) = 3x - \\ln(2)$. Express $y$ in terms of $x$.",a:"$y = e^{3x - \\ln 2} = \\frac{e^{3x}}{2}$. $y(0) = \\frac{1}{2}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        }
          ],
          hard: [
            {qid:"LN_014_h01",q:"Points $(1, 3)$ and $(5, 11)$ lie on a graph of $\\log_{10}(y)$ against $x$. Find the equation of the line.",a:"Gradient $= \\frac{11-3}{5-1} = 2$. $\\log_{10}(y) = 2x + c$. At $(1,3)$: $3 = 2 + c \\Rightarrow c = 1$. So $\\log_{10}(y) = 2x + 1$, i.e. $y = 10^{2x+1}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": 6, "max": 16, "step": 1, "description": "Value 3 (source: 11)"},
              v4: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 4 (source: 10)"},
            },
            constraints: ["v1 != 3 or v2 != 5 or v3 != 11"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "5": "str(v2)", "11": "str(v3)", "10": "str(v4)"},
              a: {"3": "str(v1)", "5": "str(v2)", "11": "str(v3)", "10": "str(v4)"},
            },
            sourceValues: {"v1": 3, "v2": 5, "v3": 11, "v4": 10},
          }
        },
            {qid:"LN_014_h02",q:"Points $(0, 2)$ and $(3, 8)$ lie on a graph of $\\ln(y)$ against $x$. Find $y$ in terms of $x$.",a:"Gradient $= \\frac{8-2}{3} = 2$, intercept $= 2$. $\\ln(y) = 2x + 2$. $y = e^{2x+2} = e^2 \\cdot e^{2x}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 3 (source: 8)"},
            },
            constraints: ["v1 != 2 or v2 != 3 or v3 != 8"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "3": "str(v2)", "8": "str(v3)"},
              a: {"2": "str(v1)", "3": "str(v2)", "8": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 3, "v3": 8},
          }
        },
            {qid:"LN_014_h03",q:"$\\log_{10}(y) = -x + 4$. At what value of $x$ does $y = 1$?",a:"$y = 1 \\Rightarrow \\log_{10}(1) = 0 = -x + 4 \\Rightarrow x = 4$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
            },
            constraints: ["v1 != 10 or v2 != 4"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "4": "str(v2)"},
              a: {"10": "str(v1)", "4": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 4},
          }
        },
            {qid:"LN_014_h04",q:"Data fits the model $y = Ab^x$. The points $(0, 5)$ and $(2, 45)$ are given. Find $A$ and $b$.",a:"$A = 5$. $45 = 5b^2 \\Rightarrow b^2 = 9 \\Rightarrow b = 3$. So $y = 5 \\cdot 3^x$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": 23, "max": 67, "step": 5, "description": "Value 3 (source: 45)"},
            },
            constraints: ["v1 != 5 or v2 != 2 or v3 != 45"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "2": "str(v2)", "45": "str(v3)"},
              a: {"5": "str(v1)", "2": "str(v2)", "45": "str(v3)"},
            },
            sourceValues: {"v1": 5, "v2": 2, "v3": 45},
          }
        },
            {qid:"LN_014_h05",q:"$\\ln(y) = 2x + 1$. Find $x$ when $y = e^3$.",a:"$\\ln(e^3) = 3 = 2x + 1 \\Rightarrow x = 1$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ]
        }
,

    {
          pt_id: "LN_015",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Graphs",
          pt: "Identifying equations of translated/reflected logarithmic graphs from diagram",
          testing: "Match given graph features (asymptote, intercepts, direction) to the correct equation among options involving shifts and reflections of $y = \\ln(x)$",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_015_e01",q:"A graph has vertical asymptote at $x = 0$ and passes through $(1, 0)$ and $(e, 1)$. What is its equation?",a:"$y = \\ln(x)$. Check: $\\ln(1) = 0$ ✓, $\\ln(e) = 1$ ✓.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_015_e02",q:"A graph has vertical asymptote at $x = 0$ and passes through $(1, -2)$. Is the equation $y = \\ln(x) - 2$ or $y = \\ln(x-2)$?",a:"$y = \\ln(x) - 2$: asymptote $x = 0$ ✓, at $x = 1$: $y = 0 - 2 = -2$ ✓. ($y = \\ln(x-2)$ has asymptote at $x = 2$ ✗)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -7, "max": 3, "step": 1, "description": "Value 1 (source: -2)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != -2 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"-2": "str(v1)", "2": "str(v2)"},
              a: {"-2": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": -2, "v2": 2},
          }
        },
            {qid:"LN_015_e03",q:"A logarithmic graph passes through $(1, 0)$ and $(e, -1)$, and is decreasing. What is its equation?",a:"$y = -\\ln(x)$. Check: $-\\ln(1) = 0$ ✓, $-\\ln(e) = -1$ ✓.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        }
          ],
          medium: [
            {qid:"LN_015_m01",q:"A logarithmic graph has a vertical asymptote at $x = 2$ and passes through $(3, 0)$. Which of $y = \\ln(x-2)$, $y = \\ln(x+2)$, $y = -\\ln(x-2)$ is its equation?",a:"$y = \\ln(x-2)$: asymptote at $x = 2$ ✓, at $x = 3$: $y = \\ln(1) = 0$ ✓. Answer: $y = \\ln(x-2)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_015_m02",q:"A logarithmic graph has vertical asymptote at $x = -3$ and passes through $(-2, 0)$. Find the equation.",a:"$y = \\ln(x+3)$. Asymptote: $x + 3 = 0 \\Rightarrow x = -3$ ✓. At $x = -2$: $\\ln(1) = 0$ ✓.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -8, "max": 2, "step": 1, "description": "Value 1 (source: -3)"},
              v2: {"type": "int", "min": -7, "max": 3, "step": 1, "description": "Value 2 (source: -2)"},
            },
            constraints: ["v1 != -3 or v2 != -2"],
            derived: {
            },
            substitutions: {
              q: {"-3": "str(v1)", "-2": "str(v2)"},
              a: {"-3": "str(v1)", "-2": "str(v2)"},
            },
            sourceValues: {"v1": -3, "v2": -2},
          }
        },
            {qid:"LN_015_m03",q:"A logarithmic graph has asymptote $x = 1$, passes through $(2, 0)$, and is decreasing. Find the equation.",a:"$y = -\\ln(x-1)$. Asymptote $x = 1$ ✓. At $x = 2$: $-\\ln(1) = 0$ ✓. Decreasing ✓.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_015_m04",q:"A logarithmic graph has asymptote $x = 0$ and passes through $(e^2, 3)$. Find $a$ if $y = a\\ln(x)$.",a:"$a\\ln(e^2) = 2a = 3 \\Rightarrow a = \\frac{3}{2}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_015_m05",q:"A graph has asymptote $x = 4$ and passes through $(5, \\ln 3)$. Which of $y = \\ln(x-4)$, $y = \\ln[3(x-4)]$, $y = \\ln\\!\\left(\\frac{x-4}{3}\\right)$ is the equation?",a:"$y = \\ln[3(x-4)]$: at $x = 5$: $\\ln(3) = \\ln 3$ ✓. (Others give $0$ or $\\ln(1/3)$ at $x = 5$.)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 3 (source: 3)"},
            },
            constraints: ["v1 != 4 or v2 != 5 or v3 != 3"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "5": "str(v2)", "3": "str(v3)"},
              a: {"4": "str(v1)", "5": "str(v2)", "3": "str(v3)"},
            },
            sourceValues: {"v1": 4, "v2": 5, "v3": 3},
          }
        }
          ],
          hard: [
            {qid:"LN_015_h01",q:"A logarithmic graph has asymptote $x = -1$, passes through $(0, 0)$ and $(e-1, 1)$. Find the equation.",a:"$y = \\ln(x+1)$. At $x = 0$: $\\ln(1) = 0$ ✓. At $x = e-1$: $\\ln(e) = 1$ ✓. Asymptote $x = -1$ ✓.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -6, "max": 4, "step": 1, "description": "Value 1 (source: -1)"},
              v2: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 2 (source: 1)"},
            },
            constraints: ["v1 != -1 or v2 != 1"],
            derived: {
            },
            substitutions: {
              q: {"-1": "str(v1)", "1": "str(v2)"},
              a: {"-1": "str(v1)", "1": "str(v2)"},
            },
            sourceValues: {"v1": -1, "v2": 1},
          }
        },
            {qid:"LN_015_h02",q:"A graph passes through $(1, 2)$ and $(e, 3)$, with asymptote $x = 0$. Find $a$ and $b$ if $y = a\\ln(x) + b$.",a:"$a\\ln(1) + b = b = 2$. $a\\ln(e) + 2 = a + 2 = 3 \\Rightarrow a = 1$. So $y = \\ln(x) + 2$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_015_h03",q:"A graph has asymptote at $x = 3$, passes through $(0, \\ln 3)$, and is a decreasing function of the form $y = \\ln(a-x)$. Find $a$.",a:"Asymptote: $a - x = 0 \\Rightarrow x = a = 3$. Check: $y(0) = \\ln(3)$ ✓. So $y = \\ln(3-x)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_015_h04",q:"Find the $x$-intercept of $y = 2\\ln(x-1) + 3$.",a:"$2\\ln(x-1) + 3 = 0 \\Rightarrow \\ln(x-1) = -\\frac{3}{2} \\Rightarrow x = 1 + e^{-3/2}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_015_h05",q:"The graph of $y = \\ln(x)$ is reflected in the $y$-axis and then shifted right by 4. Write the equation and state the asymptote.",a:"Reflect: $y = \\ln(-x)$. Shift right 4: $y = \\ln(-(x-4)) = \\ln(4-x)$. Asymptote: $x = 4$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        }
          ]
        }
,

    {
          pt_id: "LN_016",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Graphs",
          pt: "Identifying parameter from vertical asymptote of logarithmic graph",
          testing: "Set the argument of the logarithm equal to zero to find the vertical asymptote, then use the given asymptote value to determine the unknown parameter",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_016_e01",q:"State the vertical asymptote of $y = \\ln(x-3)$.",a:"$x - 3 = 0 \\Rightarrow x = 3$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_016_e02",q:"State the vertical asymptote of $y = \\ln(x+2)$.",a:"$x + 2 = 0 \\Rightarrow x = -2$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_016_e03",q:"State the vertical asymptote of $y = \\log_2(x-1)$.",a:"$x - 1 = 0 \\Rightarrow x = 1$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        }
          ],
          medium: [
            {qid:"LN_016_m01",q:"The graph of $y = \\ln(x - k)$ has a vertical asymptote at $x = 5$. Find $k$.",a:"$k = 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        },
            {qid:"LN_016_m02",q:"Find the vertical asymptote of $y = \\ln(2x-6)$.",a:"$2x - 6 = 0 \\Rightarrow x = 3$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 2 (source: 6)"},
            },
            constraints: ["v1 != 2 or v2 != 6"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "6": "str(v2)"},
              a: {"2": "str(v1)", "6": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 6},
          }
        },
            {qid:"LN_016_m03",q:"The graph of $y = \\ln(k-x)$ has asymptote at $x = 4$. Find $k$.",a:"$k - x = 0$ at $x = 4 \\Rightarrow k = 4$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_016_m04",q:"The graph of $y = 3\\ln(x-a) + 2$ has asymptote at $x = -1$. Find $a$.",a:"$x - a = 0$ at $x = -1 \\Rightarrow a = -1$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        },
            {qid:"LN_016_m05",q:"The graph of $y = \\ln(3x + b)$ has asymptote at $x = -2$. Find $b$.",a:"$3(-2) + b = 0 \\Rightarrow b = 6$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -7, "max": 3, "step": 1, "description": "Value 2 (source: -2)"},
            },
            constraints: ["v1 != 3 or v2 != -2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "-2": "str(v2)"},
              a: {"3": "str(v1)", "-2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": -2},
          }
        }
          ],
          hard: [
            {qid:"LN_016_h01",q:"Find the vertical asymptote of $y = \\ln(x^2-4)$ for $x > 2$.",a:"$x^2 - 4 = 0 \\Rightarrow x = \\pm 2$. For $x > 2$: asymptote at $x = 2$ (approached from the right).",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -9, "max": 1, "step": 1, "description": "Value 1 (source: -4)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != -4 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"-4": "str(v1)", "2": "str(v2)"},
              a: {"-4": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": -4, "v2": 2},
          }
        },
            {qid:"LN_016_h02",q:"Find the vertical asymptote(s) of $y = \\ln[(x-1)(x-3)]$ for $x > 3$.",a:"$(x-1)(x-3) = 0$ at $x = 1, 3$. For $x > 3$: asymptote at $x = 3$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_016_h03",q:"Find the vertical asymptote of $y = \\ln|2x+1|$.",a:"$2x + 1 = 0 \\Rightarrow x = -\\frac{1}{2}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_016_h04",q:"The graph of $y = \\ln(a - 2x)$ has asymptote at $x = 3$. Find $a$.",a:"$a - 2(3) = 0 \\Rightarrow a = 6$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_016_h05",q:"Find the vertical asymptote of $y = \\ln(x+1) + \\ln(x-1)$ and state the domain.",a:"$y = \\ln[(x+1)(x-1)] = \\ln(x^2-1)$. Need $x^2-1 > 0$, so $x > 1$ or $x < -1$. For $x > 1$: asymptote at $x = 1$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        }
          ]
        }
,

    {
          pt_id: "LN_017",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Graphs",
          pt: "Reading value from logarithmic scale/graph",
          testing: "Convert between logarithmic scale readings and actual values using the definition of the scale (Richter, dB, pH, etc.)",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_017_e01",q:"On the Richter scale, $M = \\log_{10}(I)$. If $M = 3$, find $I$.",a:"$I = 10^3 = 1000$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 10 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "3": "str(v2)"},
              a: {"10": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 3},
          }
        },
            {qid:"LN_017_e02",q:"If pH $= -\\log_{10}[\\text{H}^+]$ and pH $= 7$, find $[\\text{H}^+]$.",a:"$[\\text{H}^+] = 10^{-7}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 2 (source: 7)"},
            },
            constraints: ["v1 != 10 or v2 != 7"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "7": "str(v2)"},
              a: {"10": "str(v1)", "7": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 7},
          }
        },
            {qid:"LN_017_e03",q:"If $L = 10\\log_{10}(I/I_0)$ and $L = 50$ dB, find $I/I_0$.",a:"$\\log_{10}(I/I_0) = 5 \\Rightarrow I/I_0 = 10^5 = 100\\,000$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": 25, "max": 75, "step": 5, "description": "Value 2 (source: 50)"},
            },
            constraints: ["v1 != 10 or v2 != 50"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "50": "str(v2)"},
              a: {"10": "str(v1)", "50": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 50},
          }
        }
          ],
          medium: [
            {qid:"LN_017_m01",q:"On a Richter scale, magnitude $M = \\log_{10}(I)$ where $I$ is the intensity. If one earthquake has $M = 5$ and another has $M = 7$, how many times more intense is the second?",a:"$I_2/I_1 = 10^7/10^5 = 10^2 = 100$ times more intense.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 3 (source: 7)"},
            },
            constraints: ["v1 != 10 or v2 != 5 or v3 != 7"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "5": "str(v2)", "7": "str(v3)"},
              a: {"10": "str(v1)", "5": "str(v2)", "7": "str(v3)"},
            },
            sourceValues: {"v1": 10, "v2": 5, "v3": 7},
          }
        },
            {qid:"LN_017_m02",q:"A solution has pH $= 3.5$. Find $[\\text{H}^+]$.",a:"$[\\text{H}^+] = 10^{-3.5} = \\frac{10^{-3}}{\\sqrt{10}} \\approx 3.162 \\times 10^{-4}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "float", "min": 3.0, "max": 4.0, "step": 0.05, "description": "Value 1 (source: 3.5)"},
            },
            constraints: ["v1 != 3.5"],
            derived: {
            },
            substitutions: {
              q: {"3.5": "str(v1)"},
              a: {"3.5": "str(v1)"},
            },
            sourceValues: {"v1": 3.5},
          }
        },
            {qid:"LN_017_m03",q:"An earthquake has intensity $10\\,000$ times a reference level. Find its Richter magnitude.",a:"$M = \\log_{10}(10^4) = 4$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
            },
            constraints: ["v1 != 10"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)"},
              a: {"10": "str(v1)"},
            },
            sourceValues: {"v1": 10},
          }
        },
            {qid:"LN_017_m04",q:"A sound has intensity $10^6 \\cdot I_0$. Find its level in dB.",a:"$L = 10\\log_{10}(10^6) = 10 \\times 6 = 60$ dB.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
            },
            constraints: ["v1 != 10"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)"},
              a: {"10": "str(v1)"},
            },
            sourceValues: {"v1": 10},
          }
        },
            {qid:"LN_017_m05",q:"A solution has $[\\text{H}^+] = 0.001$. Find its pH.",a:"pH $= -\\log_{10}(10^{-3}) = 3$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "float", "min": -0.5, "max": 0.5, "step": 0.05, "description": "Value 1 (source: 0.001)"},
            },
            constraints: ["v1 != 0.001"],
            derived: {
            },
            substitutions: {
              q: {"0.001": "str(v1)"},
              a: {"0.001": "str(v1)"},
            },
            sourceValues: {"v1": 0.001},
          }
        }
          ],
          hard: [
            {qid:"LN_017_h01",q:"Earthquake A has Richter magnitude 4.2. Earthquake B is 50 times more intense. Find B's magnitude.",a:"$M_B = 4.2 + \\log_{10}(50) \\approx 4.2 + 1.699 = 5.9$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "float", "min": 3.7, "max": 4.7, "step": 0.05, "description": "Value 1 (source: 4.2)"},
              v2: {"type": "int", "min": 25, "max": 75, "step": 5, "description": "Value 2 (source: 50)"},
            },
            constraints: ["v1 != 4.2 or v2 != 50"],
            derived: {
            },
            substitutions: {
              q: {"4.2": "str(v1)", "50": "str(v2)"},
              a: {"4.2": "str(v1)", "50": "str(v2)"},
            },
            sourceValues: {"v1": 4.2, "v2": 50},
          }
        },
            {qid:"LN_017_h02",q:"One machine produces 85 dB. What is the combined level of 3 identical machines?",a:"$L = 85 + 10\\log_{10}(3) \\approx 85 + 4.77 = 89.8$ dB.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_017_h03",q:"Two solutions have pH 6.2 and pH 3.2. Find the ratio of their $[\\text{H}^+]$ concentrations.",a:"Ratio $= 10^{6.2-3.2} = 10^3 = 1000$. The pH 3.2 solution is 1000 times more concentrated.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "float", "min": 5.7, "max": 6.7, "step": 0.05, "description": "Value 1 (source: 6.2)"},
              v2: {"type": "float", "min": 2.7, "max": 3.7, "step": 0.05, "description": "Value 2 (source: 3.2)"},
            },
            constraints: ["v1 != 6.2 or v2 != 3.2"],
            derived: {
            },
            substitutions: {
              q: {"6.2": "str(v1)", "3.2": "str(v2)"},
              a: {"6.2": "str(v1)", "3.2": "str(v2)"},
            },
            sourceValues: {"v1": 6.2, "v2": 3.2},
          }
        },
            {qid:"LN_017_h04",q:"If the intensity of a sound is tripled, by how many decibels does the level increase?",a:"$\\Delta L = 10\\log_{10}(3) \\approx 4.77$ dB.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_017_h05",q:"Two 70 dB sounds are combined. Find the resulting level.",a:"Total intensity $= 2I$. $L = 70 + 10\\log_{10}(2) \\approx 70 + 3.01 = 73.0$ dB.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 35, "max": 105, "step": 5, "description": "Value 1 (source: 70)"},
            },
            constraints: ["v1 != 70"],
            derived: {
            },
            substitutions: {
              q: {"70": "str(v1)"},
              a: {"70": "str(v1)"},
            },
            sourceValues: {"v1": 70},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_018",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Graphs",
          pt: "Sketching translated and shifted logarithmic graph with key points and asymptote",
          testing: "Identify the asymptote, intercepts, and key points of a transformed $\\ln$ graph, and describe the transformations applied",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_018_e01",q:"Sketch $y = \\ln(x) - 1$. State the asymptote and find the $x$-intercept.",a:"Asymptote: $x = 0$. $x$-int: $\\ln(x) = 1 \\Rightarrow x = e$. At $x = 1$: $y = -1$. Graph is $\\ln(x)$ shifted down 1.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_018_e02",q:"Sketch $y = \\ln(x) + 3$. State the asymptote and find the $x$-intercept.",a:"Asymptote: $x = 0$. $x$-int: $\\ln(x) = -3 \\Rightarrow x = e^{-3}$. At $x = 1$: $y = 3$. Graph is $\\ln(x)$ shifted up 3.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_018_e03",q:"Sketch $y = -\\ln(x)$. State two key points.",a:"Asymptote: $x = 0$. At $x = 1$: $y = 0$. At $x = e$: $y = -1$. At $x = 1/e$: $y = 1$. Graph is $\\ln(x)$ reflected in $x$-axis.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        }
          ],
          medium: [
            {qid:"LN_018_m01",q:"Sketch $y = \\ln(x + 1) - 2$, showing the asymptote, $x$-intercept and $y$-intercept.",a:"Asymptote: $x = -1$. $y$-int: $\\ln(1) - 2 = -2$, so $(0, -2)$. $x$-int: $\\ln(x+1) = 2 \\Rightarrow x = e^2 - 1 \\approx 6.39$. Graph is $\\ln(x)$ shifted left 1 and down 2.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_018_m02",q:"Sketch $y = 2\\ln(x-1)$. State the asymptote, an $x$-intercept, and one other key point.",a:"Asymptote: $x = 1$. At $x = 2$: $y = 2\\ln(1) = 0$. At $x = 1+e$: $y = 2$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_018_m03",q:"Sketch $y = \\ln(2x)$. State the asymptote and find the $x$-intercept.",a:"Asymptote: $x = 0$. $x$-int: $\\ln(2x) = 0 \\Rightarrow 2x = 1 \\Rightarrow x = \\frac{1}{2}$. At $x = 1$: $y = \\ln 2$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_018_m04",q:"Sketch $y = 3 - \\ln(x)$ for $x > 0$. State the $x$-intercept.",a:"Asymptote: $x = 0$. At $x = 1$: $y = 3$. $x$-int: $\\ln(x) = 3 \\Rightarrow x = e^3 \\approx 20.09$. Graph is $-\\ln(x)$ shifted up 3.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_018_m05",q:"Sketch $y = \\ln(x-2) + 1$. State the asymptote, a key point, and the $x$-intercept.",a:"Asymptote: $x = 2$. At $x = 3$: $y = \\ln(1) + 1 = 1$. $x$-int: $\\ln(x-2) = -1 \\Rightarrow x = 2 + e^{-1} \\approx 2.37$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        }
          ],
          hard: [
            {qid:"LN_018_h01",q:"Sketch $y = \\ln(3-x)$. State the domain, asymptote, and both intercepts.",a:"Domain: $x < 3$. Asymptote: $x = 3$. $x$-int: $3 - x = 1 \\Rightarrow x = 2$. $y$-int: $\\ln(3)$. The graph is reflected and shifted.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_018_h02",q:"Sketch $y = |\\ln(x)|$. Describe its shape and state key points.",a:"At $x = 1$: $y = 0$. At $x = e$: $y = 1$. At $x = 1/e$: $y = 1$. The graph is V-shaped at $(1, 0)$, with $y \\geq 0$ everywhere.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_018_h03",q:"Sketch $y = \\ln(x^2)$ for $x > 0$ and state how it relates to $y = \\ln(x)$.",a:"$y = 2\\ln(x)$. Same shape as $\\ln(x)$ but vertically stretched by factor 2. At $x = 1$: $y = 0$. At $x = e$: $y = 2$. Asymptote: $x = 0$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_018_h04",q:"Sketch $y = -\\ln(x-1) + 2$. State the asymptote and both intercepts.",a:"Asymptote: $x = 1$. At $x = 2$: $y = 0 + 2 = 2$. $x$-int: $-\\ln(x-1) + 2 = 0 \\Rightarrow x = 1 + e^2 \\approx 8.39$. No $y$-int ($x = 0$ not in domain).",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "Conceptual/explanatory question \u2014 no numeric parameterisation.",
          }
        },
            {qid:"LN_018_h05",q:"Sketch $y = \\ln(x)$ and $y = \\ln(1/x)$ on the same axes. How are they related?",a:"$\\ln(1/x) = -\\ln(x)$. They are reflections of each other in the $x$-axis. They intersect at $(1, 0)$. At $x = e$: values are $1$ and $-1$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_019",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Laws",
          pt: "Applying logarithmic laws to simplify or combine expressions",
          testing: "Apply product, quotient, and power rules for logarithms to simplify expressions to a single value or simplest form",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_019_e01",q:"Simplify $\\log_2(4) + \\log_2(8)$.",a:"$= \\log_2(4 \\times 8) = \\log_2(32) = 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 2 (source: 8)"},
            },
            constraints: ["v1 != 4 or v2 != 8"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "8": "str(v2)"},
              a: {"4": "str(v1)", "8": "str(v2)"},
            },
            sourceValues: {"v1": 4, "v2": 8},
          }
        },
            {qid:"LN_019_e02",q:"Simplify $\\log_3(27) - \\log_3(3)$.",a:"$= \\log_3\\!\\left(\\frac{27}{3}\\right) = \\log_3(9) = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 14, "max": 40, "step": 5, "description": "Value 1 (source: 27)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 27 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"27": "str(v1)", "3": "str(v2)"},
              a: {"27": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 27, "v2": 3},
          }
        },
            {qid:"LN_019_e03",q:"Simplify $2\\log_5(25)$.",a:"$= \\log_5(25^2) = \\log_5(625) = 4$. Alternatively: $2 \\times 2 = 4$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 13, "max": 37, "step": 5, "description": "Value 2 (source: 25)"},
            },
            constraints: ["v1 != 2 or v2 != 25"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "25": "str(v2)"},
              a: {"2": "str(v1)", "25": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 25},
          }
        }
          ],
          medium: [
            {qid:"LN_019_m01",q:"Simplify $\\log_2(8) + \\log_2(4)$.",a:"$= \\log_2(32) = 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 1 (source: 8)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
            },
            constraints: ["v1 != 8 or v2 != 4"],
            derived: {
            },
            substitutions: {
              q: {"8": "str(v1)", "4": "str(v2)"},
              a: {"8": "str(v1)", "4": "str(v2)"},
            },
            sourceValues: {"v1": 8, "v2": 4},
          }
        },
            {qid:"LN_019_m02",q:"Express $2\\ln(3) - \\ln(9) + \\ln(e^2)$ in simplest form.",a:"$= \\ln(9) - \\ln(9) + 2 = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 3 (source: 9)"},
            },
            constraints: ["v1 != 2 or v2 != 3 or v3 != 9"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "3": "str(v2)", "9": "str(v3)"},
              a: {"2": "str(v1)", "3": "str(v2)", "9": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 3, "v3": 9},
          }
        },
            {qid:"LN_019_m03",q:"Express $\\log_3(x^2) - \\log_3(\\sqrt{x})$ as a single logarithm.",a:"$= \\log_3\\!\\left(\\frac{x^2}{x^{1/2}}\\right) = \\log_3(x^{3/2}) = \\frac{3}{2}\\log_3(x)$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_019_m04",q:"Simplify $\\log_{10}(2) + \\log_{10}(50)$.",a:"$= \\log_{10}(2 \\times 50) = \\log_{10}(100) = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": 25, "max": 75, "step": 5, "description": "Value 3 (source: 50)"},
            },
            constraints: ["v1 != 10 or v2 != 2 or v3 != 50"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "2": "str(v2)", "50": "str(v3)"},
              a: {"10": "str(v1)", "2": "str(v2)", "50": "str(v3)"},
            },
            sourceValues: {"v1": 10, "v2": 2, "v3": 50},
          }
        },
            {qid:"LN_019_m05",q:"Simplify $3\\log_2(4) - \\log_2(16) + \\log_2\\!\\left(\\frac{1}{2}\\right)$.",a:"$= 3(2) - 4 + (-1) = 6 - 4 - 1 = 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
              v3: {"type": "int", "min": 8, "max": 24, "step": 1, "description": "Value 3 (source: 16)"},
              v4: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 4 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 4 or v3 != 16"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "4": "str(v2)", "16": "str(v3)", "2": "str(v4)"},
              a: {"3": "str(v1)", "4": "str(v2)", "16": "str(v3)", "2": "str(v4)"},
            },
            sourceValues: {"v1": 3, "v2": 4, "v3": 16, "v4": 2},
          }
        }
          ],
          hard: [
            {qid:"LN_019_h01",q:"Simplify $\\log_6(4) + \\log_6(9)$.",a:"$= \\log_6(4 \\times 9) = \\log_6(36) = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 2 (source: 9)"},
            },
            constraints: ["v1 != 4 or v2 != 9"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "9": "str(v2)"},
              a: {"4": "str(v1)", "9": "str(v2)"},
            },
            sourceValues: {"v1": 4, "v2": 9},
          }
        },
            {qid:"LN_019_h02",q:"Simplify $\\ln(e^3) + 2\\ln(e) - \\ln(e^4)$.",a:"$= 3 + 2 - 4 = 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_019_h03",q:"Simplify $\\log_2(48) - \\log_2(3) - \\log_2(2)$.",a:"$= \\log_2\\!\\left(\\frac{48}{3 \\times 2}\\right) = \\log_2(8) = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 24, "max": 72, "step": 5, "description": "Value 1 (source: 48)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 3 (source: 2)"},
            },
            constraints: ["v1 != 48 or v2 != 3 or v3 != 2"],
            derived: {
            },
            substitutions: {
              q: {"48": "str(v1)", "3": "str(v2)", "2": "str(v3)"},
              a: {"48": "str(v1)", "3": "str(v2)", "2": "str(v3)"},
            },
            sourceValues: {"v1": 48, "v2": 3, "v3": 2},
          }
        },
            {qid:"LN_019_h04",q:"Simplify $\\frac{1}{2}\\log_3(81) + \\log_3\\!\\left(\\frac{1}{9}\\right)$.",a:"$= \\frac{1}{2}(4) + (-2) = 2 - 2 = 0$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 41, "max": 121, "step": 5, "description": "Value 2 (source: 81)"},
              v3: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 3 (source: 9)"},
            },
            constraints: ["v1 != 2 or v2 != 81 or v3 != 9"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "81": "str(v2)", "9": "str(v3)"},
              a: {"2": "str(v1)", "81": "str(v2)", "9": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 81, "v3": 9},
          }
        },
            {qid:"LN_019_h05",q:"Simplify $\\log_a(a^3 b^2) - 2\\log_a(b)$ for $a, b > 0$, $a \\neq 1$.",a:"$= \\log_a(a^3) + \\log_a(b^2) - 2\\log_a(b) = 3 + 2\\log_a(b) - 2\\log_a(b) = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ]
        }
,

    {
          pt_id: "LN_020",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Laws",
          pt: "Evaluating expression using inverse relationship between log and exponential",
          testing: "Apply $a^{\\log_a(x)} = x$ and $\\log_a(a^x) = x$ to evaluate expressions, including combinations with log laws",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_020_e01",q:"Evaluate $\\log_3(3^5)$.",a:"$= 5$ (by the inverse property $\\log_a(a^x) = x$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_020_e02",q:"Evaluate $e^{\\ln(7)}$.",a:"$= 7$ (by the inverse property $e^{\\ln x} = x$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 1 (source: 7)"},
            },
            constraints: ["v1 != 7"],
            derived: {
            },
            substitutions: {
              q: {"7": "str(v1)"},
              a: {"7": "str(v1)"},
            },
            sourceValues: {"v1": 7},
          }
        },
            {qid:"LN_020_e03",q:"Evaluate $10^{\\log_{10}(4)}$.",a:"$= 4$ (by the inverse property $a^{\\log_a x} = x$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
            },
            constraints: ["v1 != 10 or v2 != 4"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "4": "str(v2)"},
              a: {"10": "str(v1)", "4": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 4},
          }
        }
          ],
          medium: [
            {qid:"LN_020_m01",q:"Evaluate $5^{\\log_5(7)}$.",a:"$= 7$ (by the inverse property $a^{\\log_a(x)} = x$)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 2 (source: 7)"},
            },
            constraints: ["v1 != 5 or v2 != 7"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "7": "str(v2)"},
              a: {"5": "str(v1)", "7": "str(v2)"},
            },
            sourceValues: {"v1": 5, "v2": 7},
          }
        },
            {qid:"LN_020_m02",q:"Evaluate $\\log_3(3^{2x+1})$.",a:"$= 2x + 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        },
            {qid:"LN_020_m03",q:"Evaluate $\\log_2(2^5 \\cdot 2^3)$.",a:"$= \\log_2(2^8) = 8$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_020_m04",q:"Evaluate $e^{2\\ln(3)}$.",a:"$= e^{\\ln(3^2)} = e^{\\ln 9} = 9$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_020_m05",q:"Evaluate $10^{\\log_{10}(5) + \\log_{10}(4)}$.",a:"$= 10^{\\log_{10}(20)} = 20$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 3 (source: 4)"},
            },
            constraints: ["v1 != 10 or v2 != 5 or v3 != 4"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "5": "str(v2)", "4": "str(v3)"},
              a: {"10": "str(v1)", "5": "str(v2)", "4": "str(v3)"},
            },
            sourceValues: {"v1": 10, "v2": 5, "v3": 4},
          }
        }
          ],
          hard: [
            {qid:"LN_020_h01",q:"Evaluate $e^{3\\ln(2) - \\ln(4)}$.",a:"$= e^{\\ln(8) - \\ln(4)} = e^{\\ln(8/4)} = e^{\\ln 2} = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
              v3: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 3 (source: 4)"},
            },
            constraints: ["v1 != 3 or v2 != 2 or v3 != 4"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)", "4": "str(v3)"},
              a: {"3": "str(v1)", "2": "str(v2)", "4": "str(v3)"},
            },
            sourceValues: {"v1": 3, "v2": 2, "v3": 4},
          }
        },
            {qid:"LN_020_h02",q:"Evaluate $2^{\\log_2(3) + 2\\log_2(5)}$.",a:"$= 2^{\\log_2(3 \\times 25)} = 2^{\\log_2(75)} = 75$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 3 (source: 5)"},
            },
            constraints: ["v1 != 2 or v2 != 3 or v3 != 5"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "3": "str(v2)", "5": "str(v3)"},
              a: {"2": "str(v1)", "3": "str(v2)", "5": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 3, "v3": 5},
          }
        },
            {qid:"LN_020_h03",q:"Evaluate $\\log_5\\!\\left(5^{\\log_5(25)}\\right)$.",a:"$\\log_5(25) = 2$, so $= \\log_5(5^2) = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": 13, "max": 37, "step": 5, "description": "Value 2 (source: 25)"},
            },
            constraints: ["v1 != 5 or v2 != 25"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "25": "str(v2)"},
              a: {"5": "str(v1)", "25": "str(v2)"},
            },
            sourceValues: {"v1": 5, "v2": 25},
          }
        },
            {qid:"LN_020_h04",q:"Show that $e^{\\ln(x) + \\ln(y)} = xy$ for $x, y > 0$.",a:"$e^{\\ln(x) + \\ln(y)} = e^{\\ln(xy)} = xy$ (using log product law then inverse property)",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_020_h05",q:"Evaluate $4^{\\log_2(3)}$.",a:"$4^{\\log_2(3)} = (2^2)^{\\log_2(3)} = 2^{2\\log_2(3)} = 2^{\\log_2(9)} = 9$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 4 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "3": "str(v2)"},
              a: {"4": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 4, "v2": 3},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_021",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Laws",
          pt: "Expressing $\\log_a(k)$ in terms of a defined variable using log laws",
          testing: "Decompose the argument into prime factors, then substitute given variable definitions to express the result in terms of the variables",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_021_e01",q:"If $\\log_2(3) = p$, express $\\log_2(9)$ in terms of $p$.",a:"$\\log_2(9) = \\log_2(3^2) = 2p$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 2 (source: 9)"},
            },
            constraints: ["v1 != 3 or v2 != 9"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "9": "str(v2)"},
              a: {"3": "str(v1)", "9": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 9},
          }
        },
            {qid:"LN_021_e02",q:"If $\\log_5(2) = a$, express $\\log_5(4)$ in terms of $a$.",a:"$\\log_5(4) = \\log_5(2^2) = 2a$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
            },
            constraints: ["v1 != 2 or v2 != 4"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "4": "str(v2)"},
              a: {"2": "str(v1)", "4": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 4},
          }
        },
            {qid:"LN_021_e03",q:"If $\\ln(2) = k$, express $\\ln(8)$ in terms of $k$.",a:"$\\ln(8) = \\ln(2^3) = 3k$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 2 (source: 8)"},
            },
            constraints: ["v1 != 2 or v2 != 8"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "8": "str(v2)"},
              a: {"2": "str(v1)", "8": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 8},
          }
        }
          ],
          medium: [
            {qid:"LN_021_m01",q:"If $\\log_2(3) = p$, express $\\log_2(12)$ in terms of $p$.",a:"$\\log_2(12) = \\log_2(4 \\times 3) = \\log_2(4) + \\log_2(3) = 2 + p$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 6, "max": 18, "step": 1, "description": "Value 2 (source: 12)"},
            },
            constraints: ["v1 != 3 or v2 != 12"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "12": "str(v2)"},
              a: {"3": "str(v1)", "12": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 12},
          }
        },
            {qid:"LN_021_m02",q:"If $\\log_5(2) = a$ and $\\log_5(3) = b$, express $\\log_5(72)$ in terms of $a$ and $b$.",a:"$72 = 8 \\times 9 = 2^3 \\times 3^2$, so $\\log_5(72) = 3a + 2b$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": 36, "max": 108, "step": 5, "description": "Value 3 (source: 72)"},
            },
            constraints: ["v1 != 2 or v2 != 3 or v3 != 72"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "3": "str(v2)", "72": "str(v3)"},
              a: {"2": "str(v1)", "3": "str(v2)", "72": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 3, "v3": 72},
          }
        },
            {qid:"LN_021_m03",q:"If $\\log_3(2) = p$, express $\\log_3(18)$ in terms of $p$.",a:"$\\log_3(18) = \\log_3(2 \\times 9) = \\log_3(2) + \\log_3(9) = p + 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 9, "max": 27, "step": 1, "description": "Value 2 (source: 18)"},
            },
            constraints: ["v1 != 2 or v2 != 18"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "18": "str(v2)"},
              a: {"2": "str(v1)", "18": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 18},
          }
        },
            {qid:"LN_021_m04",q:"If $\\log_2(3) = p$ and $\\log_2(5) = q$, express $\\log_2(45)$ in terms of $p$ and $q$.",a:"$45 = 9 \\times 5 = 3^2 \\times 5$, so $\\log_2(45) = 2p + q$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": 23, "max": 67, "step": 5, "description": "Value 3 (source: 45)"},
            },
            constraints: ["v1 != 3 or v2 != 5 or v3 != 45"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "5": "str(v2)", "45": "str(v3)"},
              a: {"3": "str(v1)", "5": "str(v2)", "45": "str(v3)"},
            },
            sourceValues: {"v1": 3, "v2": 5, "v3": 45},
          }
        },
            {qid:"LN_021_m05",q:"If $\\log_{10}(2) = a$, express $\\log_{10}(0.05)$ in terms of $a$.",a:"$\\log_{10}(0.05) = \\log_{10}\\!\\left(\\frac{1}{20}\\right) = -\\log_{10}(20) = -(\\log_{10}(4) + \\log_{10}(5))$. Since $\\log_{10}(5) = 1 - a$ and $\\log_{10}(4) = 2a$: $= -(2a + 1 - a) = -(a + 1)$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 10 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)", "2": "str(v2)"},
              a: {"10": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 10, "v2": 2},
          }
        }
          ],
          hard: [
            {qid:"LN_021_h01",q:"If $\\log_2(3) = p$, express $\\log_2(\\sqrt{6})$ in terms of $p$.",a:"$\\log_2(\\sqrt{6}) = \\frac{1}{2}\\log_2(6) = \\frac{1}{2}[\\log_2(2) + \\log_2(3)] = \\frac{1}{2}(1 + p) = \\frac{1 + p}{2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 2 (source: 6)"},
            },
            constraints: ["v1 != 3 or v2 != 6"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "6": "str(v2)"},
              a: {"3": "str(v1)", "6": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 6},
          }
        },
            {qid:"LN_021_h02",q:"If $\\log_a(b) = p$, express $\\log_a(a^2 b^3)$ in terms of $p$.",a:"$= \\log_a(a^2) + \\log_a(b^3) = 2 + 3p$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_021_h03",q:"If $\\log_2(3) = p$, express $\\log_2\\!\\left(\\frac{1}{24}\\right)$ in terms of $p$.",a:"$\\log_2\\!\\left(\\frac{1}{24}\\right) = -\\log_2(24) = -\\log_2(8 \\times 3) = -(3 + p)$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 12, "max": 36, "step": 5, "description": "Value 2 (source: 24)"},
            },
            constraints: ["v1 != 3 or v2 != 24"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "24": "str(v2)"},
              a: {"3": "str(v1)", "24": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 24},
          }
        },
            {qid:"LN_021_h04",q:"If $\\log_3(2) = a$ and $\\log_3(5) = b$, express $\\log_3\\!\\left(\\sqrt{\\frac{50}{9}}\\right)$ in terms of $a$ and $b$.",a:"$= \\frac{1}{2}\\log_3\\!\\left(\\frac{50}{9}\\right) = \\frac{1}{2}[\\log_3(50) - 2] = \\frac{1}{2}[\\log_3(2 \\times 5^2) - 2] = \\frac{a + 2b - 2}{2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
              v3: {"type": "int", "min": 25, "max": 75, "step": 5, "description": "Value 3 (source: 50)"},
              v4: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 4 (source: 9)"},
            },
            constraints: ["v1 != 2 or v2 != 5 or v3 != 50"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "5": "str(v2)", "50": "str(v3)", "9": "str(v4)"},
              a: {"2": "str(v1)", "5": "str(v2)", "50": "str(v3)", "9": "str(v4)"},
            },
            sourceValues: {"v1": 2, "v2": 5, "v3": 50, "v4": 9},
          }
        },
            {qid:"LN_021_h05",q:"If $\\log_2(3) = p$, express $\\log_4(3)$ in terms of $p$.",a:"By change of base: $\\log_4(3) = \\frac{\\log_2(3)}{\\log_2(4)} = \\frac{p}{2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_022",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Laws",
          pt: "Proving logarithmic identity using log laws (show that)",
          testing: "Use the definition $\\log_a(b) = x \\Leftrightarrow a^x = b$ and log laws to establish identities algebraically",
          reason_bank: ["wrong_rule","setup_error","substitution_error","sign_error","algebra_slip","not_sure"],
          easy: [
            {qid:"LN_022_e01",q:"Show that $\\log_a(a) = 1$ for any valid base $a$.",a:"Let $\\log_a(a) = x$. Then $a^x = a = a^1$, so $x = 1$. Therefore $\\log_a(a) = 1$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_022_e02",q:"Show that $\\log_a(1) = 0$ for any valid base $a$.",a:"Let $\\log_a(1) = x$. Then $a^x = 1 = a^0$, so $x = 0$. Therefore $\\log_a(1) = 0$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_022_e03",q:"Show that $\\log_a(a^n) = n$.",a:"Let $\\log_a(a^n) = x$. Then $a^x = a^n$, so $x = n$. Therefore $\\log_a(a^n) = n$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        }
          ],
          medium: [
            {qid:"LN_022_m01",q:"Show that $\\log_a(b) = \\frac{1}{\\log_b(a)}$.",a:"Let $\\log_a(b) = x$, so $a^x = b$. Taking $\\log_b$: $x\\log_b(a) = 1$, so $x = \\frac{1}{\\log_b(a)}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_022_m02",q:"Show that $\\log_a(b) \\cdot \\log_b(c) = \\log_a(c)$.",a:"Using change of base: $\\log_a(b) \\cdot \\log_b(c) = \\frac{\\ln b}{\\ln a} \\cdot \\frac{\\ln c}{\\ln b} = \\frac{\\ln c}{\\ln a} = \\log_a(c)$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_022_m03",q:"Show that $\\log_a\\!\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$ starting from the product rule.",a:"Let $\\frac{x}{y} = x \\cdot y^{-1}$. Then $\\log_a(x \\cdot y^{-1}) = \\log_a(x) + \\log_a(y^{-1}) = \\log_a(x) + (-1)\\log_a(y) = \\log_a(x) - \\log_a(y)$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_022_m04",q:"Show that $\\log_{a^2}(x) = \\frac{1}{2}\\log_a(x)$.",a:"By change of base: $\\log_{a^2}(x) = \\frac{\\ln x}{\\ln(a^2)} = \\frac{\\ln x}{2\\ln a} = \\frac{1}{2} \\cdot \\frac{\\ln x}{\\ln a} = \\frac{1}{2}\\log_a(x)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_022_m05",q:"Show that $a^{\\log_a(x) + \\log_a(y)} = xy$.",a:"$a^{\\log_a(x) + \\log_a(y)} = a^{\\log_a(xy)} = xy$ (using the product law, then the inverse property).",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        }
          ],
          hard: [
            {qid:"LN_022_h01",q:"Prove the change of base formula: $\\log_a(b) = \\frac{\\log_c(b)}{\\log_c(a)}$.",a:"Let $\\log_a(b) = x$, so $a^x = b$. Taking $\\log_c$ of both sides: $x \\cdot \\log_c(a) = \\log_c(b)$. Therefore $x = \\frac{\\log_c(b)}{\\log_c(a)}$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_022_h02",q:"Show that $\\log_{1/a}(x) = -\\log_a(x)$.",a:"By change of base: $\\log_{1/a}(x) = \\frac{\\ln x}{\\ln(1/a)} = \\frac{\\ln x}{-\\ln a} = -\\frac{\\ln x}{\\ln a} = -\\log_a(x)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_022_h03",q:"Show that $\\log_a(x^n) \\cdot \\log_{x^n}(a^m) = m$.",a:"$\\log_a(x^n) \\cdot \\log_{x^n}(a^m) = n\\log_a(x) \\cdot \\frac{m\\ln a}{n\\ln x} = n\\log_a(x) \\cdot \\frac{m}{n\\log_a(x)} = m$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_022_h04",q:"Show that $\\log_a(b) \\cdot \\log_b(c) \\cdot \\log_c(a) = 1$.",a:"$= \\frac{\\ln b}{\\ln a} \\cdot \\frac{\\ln c}{\\ln b} \\cdot \\frac{\\ln a}{\\ln c} = 1$ (all terms cancel).",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_022_h05",q:"Show that $2^{\\log_4(x)} = \\sqrt{x}$ for $x > 0$.",a:"$\\log_4(x) = \\frac{\\ln x}{\\ln 4} = \\frac{\\ln x}{2\\ln 2}$. So $2^{\\log_4(x)} = 2^{\\ln x / (2\\ln 2)} = e^{\\frac{\\ln x}{2}} = x^{1/2} = \\sqrt{x}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ]
        }
,

    {
          pt_id: "LN_023",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Laws",
          pt: "Using change of base formula to evaluate or simplify logarithms",
          testing: "Apply $\\log_a(b) = \\frac{\\ln b}{\\ln a} = \\frac{\\log_c b}{\\log_c a}$ to convert between bases, evaluate with calculator, or simplify exact expressions",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_023_e01",q:"Express $\\log_4(7)$ in terms of natural logarithms.",a:"$\\log_4(7) = \\frac{\\ln 7}{\\ln 4}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 1 (source: 7)"},
            },
            constraints: ["v1 != 7"],
            derived: {
            },
            substitutions: {
              q: {"7": "str(v1)"},
              a: {"7": "str(v1)"},
            },
            sourceValues: {"v1": 7},
          }
        },
            {qid:"LN_023_e02",q:"Express $\\log_3(10)$ in terms of $\\log_{10}$.",a:"$\\log_3(10) = \\frac{\\log_{10}(10)}{\\log_{10}(3)} = \\frac{1}{\\log_{10}(3)}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 1 (source: 10)"},
            },
            constraints: ["v1 != 10"],
            derived: {
            },
            substitutions: {
              q: {"10": "str(v1)"},
              a: {"10": "str(v1)"},
            },
            sourceValues: {"v1": 10},
          }
        },
            {qid:"LN_023_e03",q:"Express $\\log_2(5)$ in terms of natural logarithms.",a:"$\\log_2(5) = \\frac{\\ln 5}{\\ln 2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        }
          ],
          medium: [
            {qid:"LN_023_m01",q:"Evaluate $\\log_4(7)$ correct to three decimal places.",a:"$\\log_4(7) = \\frac{\\ln 7}{\\ln 4} \\approx 1.404$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 2, "max": 12, "step": 1, "description": "Value 1 (source: 7)"},
            },
            constraints: ["v1 != 7"],
            derived: {
            },
            substitutions: {
              q: {"7": "str(v1)"},
              a: {"7": "str(v1)"},
            },
            sourceValues: {"v1": 7},
          }
        },
            {qid:"LN_023_m02",q:"Evaluate $\\log_3(20)$ correct to three decimal places.",a:"$\\log_3(20) = \\frac{\\ln 20}{\\ln 3} \\approx 2.727$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 10, "max": 30, "step": 5, "description": "Value 1 (source: 20)"},
            },
            constraints: ["v1 != 20"],
            derived: {
            },
            substitutions: {
              q: {"20": "str(v1)"},
              a: {"20": "str(v1)"},
            },
            sourceValues: {"v1": 20},
          }
        },
            {qid:"LN_023_m03",q:"Evaluate $\\log_4(8)$ as an exact fraction.",a:"$\\log_4(8) = \\frac{\\log_2(8)}{\\log_2(4)} = \\frac{3}{2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 1 (source: 8)"},
            },
            constraints: ["v1 != 8"],
            derived: {
            },
            substitutions: {
              q: {"8": "str(v1)"},
              a: {"8": "str(v1)"},
            },
            sourceValues: {"v1": 8},
          }
        },
            {qid:"LN_023_m04",q:"Evaluate $\\log_9(27)$ as an exact fraction.",a:"$\\log_9(27) = \\frac{\\log_3(27)}{\\log_3(9)} = \\frac{3}{2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 14, "max": 40, "step": 5, "description": "Value 1 (source: 27)"},
            },
            constraints: ["v1 != 27"],
            derived: {
            },
            substitutions: {
              q: {"27": "str(v1)"},
              a: {"27": "str(v1)"},
            },
            sourceValues: {"v1": 27},
          }
        },
            {qid:"LN_023_m05",q:"Evaluate $\\log_8(4)$ as an exact fraction.",a:"$\\log_8(4) = \\frac{\\log_2(4)}{\\log_2(8)} = \\frac{2}{3}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ],
          hard: [
            {qid:"LN_023_h01",q:"Simplify $\\log_2(3) \\cdot \\log_3(4) \\cdot \\log_4(8)$.",a:"$= \\frac{\\ln 3}{\\ln 2} \\cdot \\frac{\\ln 4}{\\ln 3} \\cdot \\frac{\\ln 8}{\\ln 4} = \\frac{\\ln 8}{\\ln 2} = \\log_2(8) = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
              v3: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 3 (source: 8)"},
            },
            constraints: ["v1 != 3 or v2 != 4 or v3 != 8"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "4": "str(v2)", "8": "str(v3)"},
              a: {"3": "str(v1)", "4": "str(v2)", "8": "str(v3)"},
            },
            sourceValues: {"v1": 3, "v2": 4, "v3": 8},
          }
        },
            {qid:"LN_023_h02",q:"Simplify $\\log_4(9) \\cdot \\log_{27}(16)$.",a:"$= \\frac{\\ln 9}{\\ln 4} \\cdot \\frac{\\ln 16}{\\ln 27} = \\frac{2\\ln 3}{2\\ln 2} \\cdot \\frac{4\\ln 2}{3\\ln 3} = \\frac{4}{3}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 1 (source: 9)"},
              v2: {"type": "int", "min": 14, "max": 40, "step": 5, "description": "Value 2 (source: 27)"},
              v3: {"type": "int", "min": 8, "max": 24, "step": 1, "description": "Value 3 (source: 16)"},
            },
            constraints: ["v1 != 9 or v2 != 27 or v3 != 16"],
            derived: {
            },
            substitutions: {
              q: {"9": "str(v1)", "27": "str(v2)", "16": "str(v3)"},
              a: {"9": "str(v1)", "27": "str(v2)", "16": "str(v3)"},
            },
            sourceValues: {"v1": 9, "v2": 27, "v3": 16},
          }
        },
            {qid:"LN_023_h03",q:"If $\\log_2(3) = a$, express $\\log_8(9)$ in terms of $a$.",a:"$\\log_8(9) = \\frac{\\log_2(9)}{\\log_2(8)} = \\frac{2\\log_2(3)}{3} = \\frac{2a}{3}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 2 (source: 9)"},
            },
            constraints: ["v1 != 3 or v2 != 9"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "9": "str(v2)"},
              a: {"3": "str(v1)", "9": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 9},
          }
        },
            {qid:"LN_023_h04",q:"Solve $\\log_2(x) = \\log_4(x) + 1$.",a:"Since $\\log_4(x) = \\frac{\\log_2(x)}{2}$: $\\log_2(x) = \\frac{\\log_2(x)}{2} + 1 \\Rightarrow \\frac{\\log_2(x)}{2} = 1 \\Rightarrow \\log_2(x) = 2 \\Rightarrow x = 4$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_023_h05",q:"Simplify $\\log_3(5) \\cdot \\log_{25}(9)$.",a:"$\\log_{25}(9) = \\frac{\\ln 9}{\\ln 25} = \\frac{2\\ln 3}{2\\ln 5} = \\frac{\\ln 3}{\\ln 5} = \\log_5(3)$. So $\\log_3(5) \\cdot \\log_5(3) = 1$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
              v2: {"type": "int", "min": 13, "max": 37, "step": 5, "description": "Value 2 (source: 25)"},
              v3: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 3 (source: 9)"},
            },
            constraints: ["v1 != 5 or v2 != 25 or v3 != 9"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)", "25": "str(v2)", "9": "str(v3)"},
              a: {"5": "str(v1)", "25": "str(v2)", "9": "str(v3)"},
            },
            sourceValues: {"v1": 5, "v2": 25, "v3": 9},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_024",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Laws",
          pt: "Evaluating logarithms to exact values (including fractions) without a calculator",
          testing: "Express both the base and argument as powers of a common base, then use the definition or change of base to find the exact value",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_024_e01",q:"Evaluate $\\log_4(16)$.",a:"$4^x = 16 = 4^2$, so $\\log_4(16) = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 8, "max": 24, "step": 1, "description": "Value 1 (source: 16)"},
            },
            constraints: ["v1 != 16"],
            derived: {
            },
            substitutions: {
              q: {"16": "str(v1)"},
              a: {"16": "str(v1)"},
            },
            sourceValues: {"v1": 16},
          }
        },
            {qid:"LN_024_e02",q:"Evaluate $\\log_9(3)$.",a:"$9^x = 3$. Since $9 = 3^2$: $(3^2)^x = 3^1 \\Rightarrow 2x = 1 \\Rightarrow x = \\frac{1}{2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_024_e03",q:"Evaluate $\\log_8(64)$.",a:"$8^x = 64 = 8^2$, so $\\log_8(64) = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 32, "max": 96, "step": 5, "description": "Value 1 (source: 64)"},
            },
            constraints: ["v1 != 64"],
            derived: {
            },
            substitutions: {
              q: {"64": "str(v1)"},
              a: {"64": "str(v1)"},
            },
            sourceValues: {"v1": 64},
          }
        }
          ],
          medium: [
            {qid:"LN_024_m01",q:"Evaluate $\\log_8(4)$.",a:"$8^x = 4$. Write as $2^{3x} = 2^2 \\Rightarrow 3x = 2 \\Rightarrow x = \\frac{2}{3}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_024_m02",q:"Evaluate $\\log_{27}(9)$.",a:"$27^x = 9$. Write as $3^{3x} = 3^2 \\Rightarrow 3x = 2 \\Rightarrow x = \\frac{2}{3}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 14, "max": 40, "step": 5, "description": "Value 1 (source: 27)"},
              v2: {"type": "int", "min": 4, "max": 14, "step": 1, "description": "Value 2 (source: 9)"},
            },
            constraints: ["v1 != 27 or v2 != 9"],
            derived: {
            },
            substitutions: {
              q: {"27": "str(v1)", "9": "str(v2)"},
              a: {"27": "str(v1)", "9": "str(v2)"},
            },
            sourceValues: {"v1": 27, "v2": 9},
          }
        },
            {qid:"LN_024_m03",q:"Evaluate $\\log_{16}(8)$.",a:"$16^x = 8$. Write as $2^{4x} = 2^3 \\Rightarrow 4x = 3 \\Rightarrow x = \\frac{3}{4}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 8, "max": 24, "step": 1, "description": "Value 1 (source: 16)"},
              v2: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 2 (source: 8)"},
            },
            constraints: ["v1 != 16 or v2 != 8"],
            derived: {
            },
            substitutions: {
              q: {"16": "str(v1)", "8": "str(v2)"},
              a: {"16": "str(v1)", "8": "str(v2)"},
            },
            sourceValues: {"v1": 16, "v2": 8},
          }
        },
            {qid:"LN_024_m04",q:"Evaluate $\\log_4\\!\\left(\\frac{1}{8}\\right)$.",a:"$4^x = \\frac{1}{8} = 2^{-3}$. Write as $2^{2x} = 2^{-3} \\Rightarrow 2x = -3 \\Rightarrow x = -\\frac{3}{2}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 1 (source: 8)"},
            },
            constraints: ["v1 != 8"],
            derived: {
            },
            substitutions: {
              q: {"8": "str(v1)"},
              a: {"8": "str(v1)"},
            },
            sourceValues: {"v1": 8},
          }
        },
            {qid:"LN_024_m05",q:"Evaluate $\\log_{1/2}(8)$.",a:"$\\left(\\frac{1}{2}\\right)^x = 8$. Write as $2^{-x} = 2^3 \\Rightarrow -x = 3 \\Rightarrow x = -3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 2 (source: 8)"},
            },
            constraints: ["v1 != 2 or v2 != 8"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "8": "str(v2)"},
              a: {"2": "str(v1)", "8": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 8},
          }
        }
          ],
          hard: [
            {qid:"LN_024_h01",q:"Evaluate $\\log_4(8\\sqrt{2})$.",a:"$8\\sqrt{2} = 2^3 \\cdot 2^{1/2} = 2^{7/2}$. So $\\log_4(2^{7/2}) = \\frac{7/2}{2} = \\frac{7}{4}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 3, "max": 13, "step": 1, "description": "Value 1 (source: 8)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 8 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"8": "str(v1)", "2": "str(v2)"},
              a: {"8": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 8, "v2": 2},
          }
        },
            {qid:"LN_024_h02",q:"Evaluate $\\log_8(4\\sqrt{2})$.",a:"$4\\sqrt{2} = 2^2 \\cdot 2^{1/2} = 2^{5/2}$. So $\\log_8(2^{5/2}) = \\frac{5/2}{3} = \\frac{5}{6}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_024_h03",q:"Evaluate $\\log_{27}\\!\\left(\\frac{1}{\\sqrt{3}}\\right)$.",a:"$\\frac{1}{\\sqrt{3}} = 3^{-1/2}$. So $\\log_{27}(3^{-1/2}) = \\frac{-1/2}{3} = -\\frac{1}{6}$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 14, "max": 40, "step": 5, "description": "Value 1 (source: 27)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 27 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"27": "str(v1)", "3": "str(v2)"},
              a: {"27": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 27, "v2": 3},
          }
        },
            {qid:"LN_024_h04",q:"If $\\log_4(x) = -\\frac{3}{2}$, find $x$.",a:"$x = 4^{-3/2} = (2^2)^{-3/2} = 2^{-3} = \\frac{1}{8}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        },
            {qid:"LN_024_h05",q:"Given $\\log_8(x) = \\frac{2}{3}$, find $\\log_2(x)$.",a:"$x = 8^{2/3} = (2^3)^{2/3} = 2^2 = 4$. Therefore $\\log_2(x) = \\log_2(4) = 2$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ]
        }
,

    {
          pt_id: "LN_025",
          topic: "The Logarithmic Function",
          subtopic: "Calculus of the Natural Logarithmic Function",
          concept: "Integration Techniques",
          pt: "Evaluating definite integrals that yield logarithmic expressions",
          testing: "Apply $\\int \\frac{f'(x)}{f(x)}\\,dx = \\ln|f(x)|$ with definite limits and simplify the result using log laws",
          reason_bank: ["wrong_rule","missing_chain_factor","substitution_error","sign_error","algebra_slip","not_sure"],
          easy: [
            {qid:"LN_025_e01",q:"Evaluate $\\int_1^e \\frac{1}{x}\\, dx$.",a:"$= [\\ln|x|]_1^e = \\ln(e) - \\ln(1) = 1 - 0 = 1$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_025_e02",q:"Evaluate $\\int_1^2 \\frac{1}{x}\\, dx$.",a:"$= [\\ln|x|]_1^2 = \\ln 2 - 0 = \\ln 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_025_e03",q:"Evaluate $\\int_1^3 \\frac{1}{x}\\, dx$.",a:"$= [\\ln|x|]_1^3 = \\ln 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        }
          ],
          medium: [
            {qid:"LN_025_m01",q:"Evaluate $\\int_1^4 \\frac{2}{x}\\, dx$.",a:"$= 2[\\ln|x|]_1^4 = 2\\ln 4 = 4\\ln 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_025_m02",q:"Evaluate $\\int_0^1 \\frac{2x}{x^2+1}\\, dx$.",a:"$= [\\ln(x^2+1)]_0^1 = \\ln 2 - \\ln 1 = \\ln 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_025_m03",q:"Evaluate $\\int_0^2 \\frac{3x^2}{x^3+1}\\, dx$.",a:"$= [\\ln(x^3+1)]_0^2 = \\ln 9 - \\ln 1 = 2\\ln 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_025_m04",q:"Evaluate $\\int_1^3 \\frac{1}{2x-1}\\, dx$.",a:"$= \\left[\\frac{1}{2}\\ln|2x-1|\\right]_1^3 = \\frac{1}{2}(\\ln 5 - \\ln 1) = \\frac{1}{2}\\ln 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_025_m05",q:"Evaluate $\\int_1^{e^2} \\frac{1}{x}\\, dx$.",a:"$= \\ln(e^2) - \\ln(1) = 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        }
          ],
          hard: [
            {qid:"LN_025_h01",q:"Evaluate $\\int_1^e \\left(\\frac{1}{x} + 1\\right) dx$.",a:"$= [\\ln(x) + x]_1^e = (1 + e) - (0 + 1) = e$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_025_h02",q:"Evaluate $\\int_1^4 \\frac{x+1}{x}\\, dx$.",a:"$= \\int_1^4 \\left(1 + \\frac{1}{x}\\right) dx = [x + \\ln|x|]_1^4 = (4 + \\ln 4) - (1 + 0) = 3 + 2\\ln 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_025_h03",q:"Evaluate $\\int_0^1 \\frac{x}{x^2+4}\\, dx$.",a:"$= \\left[\\frac{1}{2}\\ln(x^2+4)\\right]_0^1 = \\frac{1}{2}(\\ln 5 - \\ln 4) = \\frac{1}{2}\\ln\\!\\left(\\frac{5}{4}\\right)$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_025_h04",q:"Evaluate $\\int_2^5 \\frac{1}{x-1}\\, dx$.",a:"$= [\\ln|x-1|]_2^5 = \\ln 4 - \\ln 1 = 2\\ln 2$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_025_h05",q:"Evaluate $\\int_1^e \\left(\\frac{3}{x} - 2\\right) dx$.",a:"$= [3\\ln(x) - 2x]_1^e = (3 - 2e) - (0 - 2) = 5 - 2e$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 2 (source: 2)"},
            },
            constraints: ["v1 != 3 or v2 != 2"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "2": "str(v2)"},
              a: {"3": "str(v1)", "2": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 2},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_026",
          topic: "The Logarithmic Function",
          subtopic: "Calculus of the Natural Logarithmic Function",
          concept: "Logarithmic Evaluation (Calculus)",
          pt: "Differentiating $\\ln(f(x))$ using the chain rule",
          testing: "Apply $\\frac{d}{dx}[\\ln(f(x))] = \\frac{f'(x)}{f(x)}$ to differentiate composite logarithmic functions",
          reason_bank: ["wrong_rule","missing_chain_factor","substitution_error","sign_error","algebra_slip","not_sure"],
          easy: [
            {qid:"LN_026_e01",q:"Differentiate $y = \\ln(2x)$.",a:"$y' = \\frac{2}{2x} = \\frac{1}{x}$. (Or note $\\ln(2x) = \\ln 2 + \\ln x$, so $y' = \\frac{1}{x}$.)",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_026_e02",q:"Differentiate $y = \\ln(x+1)$.",a:"$y' = \\frac{1}{x+1}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_026_e03",q:"Differentiate $y = \\ln(5x)$.",a:"$y' = \\frac{5}{5x} = \\frac{1}{x}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        }
          ],
          medium: [
            {qid:"LN_026_m01",q:"Differentiate $y = \\ln(3x+1)$.",a:"$y' = \\frac{3}{3x+1}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_026_m02",q:"Differentiate $y = \\ln(x^2+1)$.",a:"$y' = \\frac{2x}{x^2+1}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_026_m03",q:"Differentiate $y = \\ln(x^2)$ for $x > 0$.",a:"$y' = \\frac{2x}{x^2} = \\frac{2}{x}$. (Or: $\\ln(x^2) = 2\\ln(x)$, so $y' = \\frac{2}{x}$.)",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_026_m04",q:"Differentiate $y = 2\\ln(4x-3)$.",a:"$y' = 2 \\cdot \\frac{4}{4x-3} = \\frac{8}{4x-3}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 2 (source: 4)"},
              v3: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 3 (source: 3)"},
            },
            constraints: ["v1 != 2 or v2 != 4 or v3 != 3"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "4": "str(v2)", "3": "str(v3)"},
              a: {"2": "str(v1)", "4": "str(v2)", "3": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 4, "v3": 3},
          }
        },
            {qid:"LN_026_m05",q:"Differentiate $y = \\ln(\\sqrt{x})$.",a:"$y = \\frac{1}{2}\\ln(x)$. $y' = \\frac{1}{2x}$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        }
          ],
          hard: [
            {qid:"LN_026_h01",q:"Differentiate $y = \\ln(x^3+2x)$.",a:"$y' = \\frac{3x^2+2}{x^3+2x}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_026_h02",q:"Differentiate $y = \\ln(\\sin(x))$.",a:"$y' = \\frac{\\cos(x)}{\\sin(x)} = \\cot(x)$",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_026_h03",q:"Differentiate $y = \\ln[(2x+1)^3]$.",a:"$y = 3\\ln(2x+1)$. $y' = 3 \\cdot \\frac{2}{2x+1} = \\frac{6}{2x+1}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_026_h04",q:"Differentiate $y = \\ln\\!\\left(\\frac{x}{x+1}\\right)$.",a:"$y = \\ln(x) - \\ln(x+1)$. $y' = \\frac{1}{x} - \\frac{1}{x+1} = \\frac{1}{x(x+1)}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        },
            {qid:"LN_026_h05",q:"Differentiate $y = \\ln(e^x+1)$.",a:"$y' = \\frac{e^x}{e^x+1}$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_027",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Equations",
          pt: "Solving equations with logarithm on both sides using the one-to-one property",
          testing: "Use the property $\\log_a(X) = \\log_a(Y) \\Rightarrow X = Y$ to reduce to an algebraic equation, checking domain restrictions",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_027_e01",q:"Solve $\\log_2(x) = \\log_2(5)$.",a:"$x = 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        },
            {qid:"LN_027_e02",q:"Solve $\\ln(x) = \\ln(3)$.",a:"$x = 3$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_027_e03",q:"Solve $\\log_3(2x) = \\log_3(10)$.",a:"$2x = 10 \\Rightarrow x = 5$",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 2 (source: 10)"},
            },
            constraints: ["v1 != 2 or v2 != 10"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "10": "str(v2)"},
              a: {"2": "str(v1)", "10": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 10},
          }
        }
          ],
          medium: [
            {qid:"LN_027_m01",q:"Solve $\\log_2(3x-1) = \\log_2(x+5)$.",a:"$3x - 1 = x + 5 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Check: $\\log_2(8) = \\log_2(8)$ ✓.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
            },
            constraints: ["v1 != 3 or v2 != 5"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "5": "str(v2)"},
              a: {"3": "str(v1)", "5": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 5},
          }
        },
            {qid:"LN_027_m02",q:"Solve $\\ln(x^2) = \\ln(4x)$.",a:"$x^2 = 4x \\Rightarrow x(x-4) = 0 \\Rightarrow x = 4$ (reject $x = 0$ since $\\ln(0)$ undefined).",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_027_m03",q:"Solve $\\log_5(x+2) = \\log_5(3-2x)$.",a:"$x + 2 = 3 - 2x \\Rightarrow 3x = 1 \\Rightarrow x = \\frac{1}{3}$. Check: $\\frac{7}{3} > 0$ ✓.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
              v3: {"type": "int", "min": -7, "max": 3, "step": 1, "description": "Value 3 (source: -2)"},
            },
            constraints: ["v1 != 2 or v2 != 3 or v3 != -2"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "3": "str(v2)", "-2": "str(v3)"},
              a: {"2": "str(v1)", "3": "str(v2)", "-2": "str(v3)"},
            },
            sourceValues: {"v1": 2, "v2": 3, "v3": -2},
          }
        },
            {qid:"LN_027_m04",q:"Solve $2\\ln(x) = \\ln(x+6)$.",a:"$\\ln(x^2) = \\ln(x+6) \\Rightarrow x^2 = x + 6 \\Rightarrow (x-3)(x+2) = 0 \\Rightarrow x = 3$ (reject $x = -2$).",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 2 (source: 6)"},
            },
            constraints: ["v1 != 2 or v2 != 6"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "6": "str(v2)"},
              a: {"2": "str(v1)", "6": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 6},
          }
        },
            {qid:"LN_027_m05",q:"Solve $\\log_3(x-1) = \\log_3(4) + \\log_3(2)$.",a:"$\\log_3(x-1) = \\log_3(8) \\Rightarrow x - 1 = 8 \\Rightarrow x = 9$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ],
          hard: [
            {qid:"LN_027_h01",q:"Solve $\\ln(x+1) + \\ln(x-1) = \\ln(3)$.",a:"$\\ln[(x+1)(x-1)] = \\ln 3 \\Rightarrow x^2 - 1 = 3 \\Rightarrow x = 2$ (reject $x = -2$ since $x > 1$).",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_027_h02",q:"Solve $\\log_2(x+3) - \\log_2(x-1) = \\log_2(5)$.",a:"$\\log_2\\!\\left(\\frac{x+3}{x-1}\\right) = \\log_2(5) \\Rightarrow \\frac{x+3}{x-1} = 5 \\Rightarrow x + 3 = 5x - 5 \\Rightarrow x = 2$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
            },
            constraints: ["v1 != 3 or v2 != 5"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "5": "str(v2)"},
              a: {"3": "str(v1)", "5": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 5},
          }
        },
            {qid:"LN_027_h03",q:"Solve $2\\log_3(x) - \\log_3(x-2) = \\log_3(x+6)$.",a:"$\\log_3\\!\\left(\\frac{x^2}{x-2}\\right) = \\log_3(x+6) \\Rightarrow x^2 = (x-2)(x+6) = x^2 + 4x - 12 \\Rightarrow 4x = 12 \\Rightarrow x = 3$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 2 (source: 6)"},
            },
            constraints: ["v1 != 2 or v2 != 6"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "6": "str(v2)"},
              a: {"2": "str(v1)", "6": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 6},
          }
        },
            {qid:"LN_027_h04",q:"Solve $\\ln(x) + \\ln(2x+1) = \\ln(10) + \\ln(x-1)$.",a:"$\\ln[x(2x+1)] = \\ln[10(x-1)] \\Rightarrow 2x^2 + x = 10x - 10 \\Rightarrow 2x^2 - 9x + 10 = 0 \\Rightarrow (2x-5)(x-2) = 0$. Both $x = \\frac{5}{2}$ and $x = 2$ satisfy domain requirements.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 5, "max": 15, "step": 1, "description": "Value 2 (source: 10)"},
            },
            constraints: ["v1 != 2 or v2 != 10"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "10": "str(v2)"},
              a: {"2": "str(v1)", "10": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 10},
          }
        },
            {qid:"LN_027_h05",q:"Solve $\\log_2(x^2 + 3x) = \\log_2(x) + \\log_2(5)$.",a:"$\\log_2(x^2+3x) = \\log_2(5x) \\Rightarrow x^2 + 3x = 5x \\Rightarrow x^2 - 2x = 0 \\Rightarrow x = 2$ (reject $x = 0$).",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
              v2: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 2 (source: 5)"},
            },
            constraints: ["v1 != 3 or v2 != 5"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)", "5": "str(v2)"},
              a: {"3": "str(v1)", "5": "str(v2)"},
            },
            sourceValues: {"v1": 3, "v2": 5},
          }
        }
          ]
        }
,

    {
          pt_id: "LN_028",
          topic: "The Logarithmic Function",
          subtopic: "Logarithmic Functions",
          concept: "Logarithmic Evaluation",
          pt: "Finding the domain of logarithmic functions",
          testing: "Set the argument of the logarithm greater than zero and solve the resulting inequality to determine the domain",
          reason_bank: ["wrong_rule","substitution_error","sign_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"LN_028_e01",q:"Find the domain of $f(x) = \\ln(x)$.",a:"Need $x > 0$. Domain: $(0, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_028_e02",q:"Find the domain of $f(x) = \\ln(x-3)$.",a:"Need $x - 3 > 0 \\Rightarrow x > 3$. Domain: $(3, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 1 (source: 3)"},
            },
            constraints: ["v1 != 3"],
            derived: {
            },
            substitutions: {
              q: {"3": "str(v1)"},
              a: {"3": "str(v1)"},
            },
            sourceValues: {"v1": 3},
          }
        },
            {qid:"LN_028_e03",q:"Find the domain of $f(x) = \\log_2(x+4)$.",a:"Need $x + 4 > 0 \\Rightarrow x > -4$. Domain: $(-4, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ],
          medium: [
            {qid:"LN_028_m01",q:"Find the domain of $f(x) = \\ln(2x-6)$.",a:"Need $2x - 6 > 0 \\Rightarrow x > 3$. Domain: $(3, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -3, "max": 7, "step": 1, "description": "Value 1 (source: 2)"},
              v2: {"type": "int", "min": 1, "max": 11, "step": 1, "description": "Value 2 (source: 6)"},
            },
            constraints: ["v1 != 2 or v2 != 6"],
            derived: {
            },
            substitutions: {
              q: {"2": "str(v1)", "6": "str(v2)"},
              a: {"2": "str(v1)", "6": "str(v2)"},
            },
            sourceValues: {"v1": 2, "v2": 6},
          }
        },
            {qid:"LN_028_m02",q:"Find the domain of $f(x) = \\ln(5-x)$.",a:"Need $5 - x > 0 \\Rightarrow x < 5$. Domain: $(-\\infty, 5)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": 0, "max": 10, "step": 1, "description": "Value 1 (source: 5)"},
            },
            constraints: ["v1 != 5"],
            derived: {
            },
            substitutions: {
              q: {"5": "str(v1)"},
              a: {"5": "str(v1)"},
            },
            sourceValues: {"v1": 5},
          }
        },
            {qid:"LN_028_m03",q:"Find the domain of $f(x) = \\log_3(x^2-1)$.",a:"Need $x^2 - 1 > 0 \\Rightarrow |x| > 1$. Domain: $(-\\infty, -1) \\cup (1, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -6, "max": 4, "step": 1, "description": "Value 1 (source: -1)"},
            },
            constraints: ["v1 != -1"],
            derived: {
            },
            substitutions: {
              q: {"-1": "str(v1)"},
              a: {"-1": "str(v1)"},
            },
            sourceValues: {"v1": -1},
          }
        },
            {qid:"LN_028_m04",q:"Find the domain of $f(x) = \\ln(x) + \\ln(x-2)$.",a:"Need $x > 0$ and $x - 2 > 0$, so $x > 2$. Domain: $(2, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_028_m05",q:"Find the domain of $f(x) = \\ln\\!\\left(\\frac{x+1}{x-1}\\right)$.",a:"Need $\\frac{x+1}{x-1} > 0$. Sign analysis: positive when $x < -1$ or $x > 1$. Domain: $(-\\infty, -1) \\cup (1, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -4, "max": 6, "step": 1, "description": "Value 1 (source: 1)"},
            },
            constraints: ["v1 != 1"],
            derived: {
            },
            substitutions: {
              q: {"1": "str(v1)"},
              a: {"1": "str(v1)"},
            },
            sourceValues: {"v1": 1},
          }
        }
          ],
          hard: [
            {qid:"LN_028_h01",q:"Find the domain of $f(x) = \\ln(x^2 - 4x + 3)$.",a:"Need $(x-1)(x-3) > 0$. Sign analysis: positive when $x < 1$ or $x > 3$. Domain: $(-\\infty, 1) \\cup (3, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            parameters: {
              v1: {"type": "int", "min": -1, "max": 9, "step": 1, "description": "Value 1 (source: 4)"},
              v2: {"type": "int", "min": -2, "max": 8, "step": 1, "description": "Value 2 (source: 3)"},
            },
            constraints: ["v1 != 4 or v2 != 3"],
            derived: {
            },
            substitutions: {
              q: {"4": "str(v1)", "3": "str(v2)"},
              a: {"4": "str(v1)", "3": "str(v2)"},
            },
            sourceValues: {"v1": 4, "v2": 3},
          }
        },
            {qid:"LN_028_h02",q:"Find the domain of $f(x) = \\ln(\\ln(x))$.",a:"Need $\\ln(x) > 0 \\Rightarrow x > 1$, and also $x > 0$. So $x > 1$. Domain: $(1, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_028_h03",q:"Find the domain of $f(x) = \\sqrt{\\ln(x)}$.",a:"Need $\\ln(x) \\geq 0 \\Rightarrow x \\geq 1$, and $x > 0$. Domain: $[1, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: false,
            reason: "No numeric values to parameterise.",
          }
        },
            {qid:"LN_028_h04",q:"Find the domain of $f(x) = \\ln|x-2|$.",a:"Need $|x-2| > 0 \\Rightarrow x \\neq 2$. Domain: $(-\\infty, 2) \\cup (2, \\infty)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
            {qid:"LN_028_h05",q:"Find the domain of $f(x) = \\ln(x) + \\ln(4-x^2)$.",a:"Need $x > 0$ and $4 - x^2 > 0 \\Rightarrow -2 < x < 2$. Combining: $0 < x < 2$. Domain: $(0, 2)$.",
          seedSpec: {
            version: 2,
            seedable: true,
            reason: "Logarithmic function. Verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
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
        }
          ]
        }
,

    {
      pt_id: "KN_019",
      topic: "The Logarithmic Function",
      subtopic: "Calculus of the Natural Logarithmic Function",
      concept: "Kinematics Integration",
      pt: "Calculating area under curve using definite integral with ln function",
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
                  qid: "KN_019_m01",
                  q: "Find the area under $y = \\frac1x$ from $x = 1$ to $x = e^2$.",
                  a: "$\\int_1^{e^2} \\frac{1}{x} dx = [\\ln(x)]_1^{e^2} = 2 - 0 = 2$",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: -4,
                                    max: 6,
                                    step: 1,
                                    description: "Value 1 (source: 1)"
                              }
                        },
                        constraints: [
                              "v1 != 1"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    1: "str(v1)"
                              },
                              a: {
                                    1: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 1
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_045",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Kinematics Integration",
      pt: "Determining parameters of logarithmic model from initial conditions",
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
                  qid: "KN_045_m01",
                  q: "At $t = 0$, $N = 100$ and $\\frac{dN}{dt} = 5$ for the model $N(t) = a\\ln(t+1) + b$. Find $a$ and $b$.",
                  a: "$N(0) = a\\ln(1) + b = b = 100$. $N'(t) = \\frac{a}{t+1}$, $N'(0) = a = 5$. So $a = 5$, $b = 100$.",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 50,
                                    max: 150,
                                    step: 5,
                                    description: "Value 1 (source: 100)"
                              },
                              v2: {
                                    type: "int",
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                    description: "Value 2 (source: 5)"
                              }
                        },
                        constraints: [
                              "v1 != 100 or v2 != 5"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    5: "str(v2)",
                                    100: "str(v1)"
                              },
                              a: {
                                    5: "str(v2)",
                                    100: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 100,
                              v2: 5
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_053",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Kinematics Integration",
      pt: "Evaluating logarithmic model at a given input",
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
                  qid: "KN_053_m01",
                  q: "The loudness in decibels is $L = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)$ where $I_0 = 10^{-12}$. Find $L$ when $I = 10^{-5}$.",
                  a: "$L = 10\\log_{10}\\left(\\frac{10^{-5}}{10^{-12}}\\right) = 10\\log_{10}(10^7) = 10 \\times 7 = 70$ dB.",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 5,
                                    max: 15,
                                    step: 1,
                                    description: "Value 1 (source: 10)"
                              },
                              v2: {
                                    type: "int",
                                    min: -18,
                                    max: -6,
                                    step: 1,
                                    description: "Value 2 (source: -12)"
                              },
                              v3: {
                                    type: "int",
                                    min: -10,
                                    max: 0,
                                    step: 1,
                                    description: "Value 3 (source: -5)"
                              }
                        },
                        constraints: [
                              "v1 != 10 or v2 != -12 or v3 != -5"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    10: "str(v1)",
                                    "-12": "str(v2)",
                                    "-5": "str(v3)"
                              },
                              a: {
                                    10: "str(v1)",
                                    "-12": "str(v2)",
                                    "-5": "str(v3)"
                              }
                        },
                        sourceValues: {
                              v1: 10,
                              v2: -12,
                              v3: -5
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_056",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Kinematics Integration",
      pt: "Expressing logarithmic transformation as horizontal dilation using log laws",
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
                  qid: "KN_056_m01",
                  q: "Show that $y = \\log_{10}(x^3)$ can be written as a vertical dilation of $y = \\log_{10}(x)$.",
                  a: "$\\log_{10}(x^3) = 3\\log_{10}(x)$. This is $y = \\log_{10}(x)$ dilated vertically by factor 3.",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 5,
                                    max: 15,
                                    step: 1,
                                    description: "Value 1 (source: 10)"
                              }
                        },
                        constraints: [
                              "v1 != 10"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    10: "str(v1)"
                              },
                              a: {
                                    10: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 10
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_057",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Kinematics Integration",
      pt: "Expressing logarithmic transformation as vertical translation using log laws",
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
                  qid: "KN_057_m01",
                  q: "Show that $y = \\log_{10}(100x)$ can be written as a vertical translation of $y = \\log_{10}(x)$.",
                  a: "$\\log_{10}(100x) = \\log_{10}(100) + \\log_{10}(x) = 2 + \\log_{10}(x)$. This is $y = \\log_{10}(x)$ translated up by 2 units.",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 5,
                                    max: 15,
                                    step: 1,
                                    description: "Value 1 (source: 10)"
                              },
                              v2: {
                                    type: "int",
                                    min: 50,
                                    max: 150,
                                    step: 5,
                                    description: "Value 2 (source: 100)"
                              }
                        },
                        constraints: [
                              "v1 != 10 or v2 != 100"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    10: "str(v1)",
                                    100: "str(v2)"
                              },
                              a: {
                                    10: "str(v1)",
                                    100: "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 10,
                              v2: 100
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_059",
      topic: "The Logarithmic Function",
      subtopic: "Calculus of the Natural Logarithmic Function",
      concept: "Kinematics Integration",
      pt: "Finding maximum of logarithmic function using calculus",
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
                  qid: "KN_059_m01",
                  q: "Find the maximum value of $f(x) = 6\\ln(x) - x^2$ for $x > 0$.",
                  a: "$f'(x) = \\frac{6}{x} - 2x = 0 \\Rightarrow 6 = 2x^2 \\Rightarrow x = \\sqrt{3}$. $f''(x) = -\\frac{6}{x^2} - 2 < 0$ (max). $f(\\sqrt{3}) = 6\\ln(\\sqrt{3}) - 3 = 3\\ln(3) - 3 \\approx 0.296$",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 1,
                                    max: 11,
                                    step: 1,
                                    description: "Value 1 (source: 6)"
                              }
                        },
                        constraints: [
                              "v1 != 6"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    6: "str(v1)"
                              },
                              a: {
                                    6: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 6
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_072",
      topic: "The Logarithmic Function",
      subtopic: "Logarithmic Functions",
      concept: "Kinematics Integration",
      pt: "Sketching piecewise function involving constant and logarithmic components",
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
                  qid: "KN_072_m01",
                  q: "Sketch $f(x) = \\begin{cases} 2 & x \\leq 1 \\\\ \\ln(x) + 2 & x > 1 \\end{cases}$. State the domain and range.",
                  a: "For $x \\leq 1$: horizontal line at $y = 2$. For $x > 1$: logarithmic curve starting at $(1, 2)$ and increasing. The function is continuous at $x = 1$ since $\\ln(1) + 2 = 2$. Domain: all real $x$. Range: $(-\\infty, 2] \\cup (2, \\infty) = \\mathbb{R}$... actually: for $x \\leq 1$, $y = 2$; for $x > 1$, $y > 2$ and increasing. So range is $\\{2\\} \\cup (2, \\infty) = [2, \\infty)$.",
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
                              }
                        },
                        constraints: [
                              "v1 != 2"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v1)"
                              },
                              a: {
                                    2: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 2
                        }
                  }
            }
      ],
      hard: []
}
  ]
};