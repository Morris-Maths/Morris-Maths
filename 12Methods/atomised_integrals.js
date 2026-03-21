// ======================================================================
// ATOMISED PRACTICE — ATOMISED_INTEGRALS
// Topic: Integration and the Fundamental Theorem of Calculus
// 43 PTs, 162 questions (E:46 M:75 H:41), all seedable
// Reorganised from source files — richest version kept for each PT
// Unquoted keys for WSH compatibility
// ======================================================================

var ATOMISED_INTEGRALS = {
  "questions": [
    {
      "pt_id": "IN_001",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Chain Rule (Reverse)",
      "pt": "Evaluating definite integral of composite polynomial function using reverse chain rule",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_001_m01",
          "q": "Evaluate $\\int_0^1 3x^2(x^3 + 1)^4 dx$.",
          "a": "Let $u = x^3 + 1$, $du = 3x^2 dx$. When $x=0$, $u=1$; $x=1$, $u=2$. $\\int_1^2 u^4 du = \\left[\\frac{u^5}{5}\\right]_1^2 = \\frac{32-1}{5} = \\frac{31}{5}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 1 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(v1)"
              },
              "a": {
                "3": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 3
            }
          },
          "slug": "in-001-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_002",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Chain Rule (Reverse)",
      "pt": "Reverse chain rule integration from prior derivative (hence integrate)",
      "testing": "Testing: Use a derivative result to \"hence\" find an integral",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_002_m01",
          "q": "Given that $\\frac{d}{dx}[x\\sin(x)] = \\sin(x) + x\\cos(x)$, hence find $\\int x\\cos(x) dx$.",
          "a": "$\\int [\\sin(x) + x\\cos(x)] dx = x\\sin(x) + C$. So $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x) + C$.\nAlternatively: rearranging the derivative identity directly: $\\int x\\cos(x) dx = x\\sin(x) - \\int \\sin(x) dx = x\\sin(x) + \\cos(x) + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "No numeric values to parameterise."
          },
          "slug": "in-002-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_003",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Differentiation (then Integrate)",
      "pt": "Differentiate a function; integrate the resulting identity to hence find the antiderivative",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "sign_error",
        "missing_chain_factor",
        "algebra_slip",
        "substitution_error",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_003_m01",
          "q": "(a) Differentiate $y = x^2 e^x$. (b) Hence find $\\int x^2 e^x dx$.",
          "a": "(a) $y' = 2xe^x + x^2e^x = e^x(x^2 + 2x)$. (b) $\\int e^x(x^2 + 2x) dx = x^2 e^x + C$, so $\\int x^2 e^x dx = x^2 e^x - \\int 2xe^x dx = x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "No numeric values to parameterise."
          },
          "slug": "in-003-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_004",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Integration Techniques",
      "pt": "Anti-differentiation with initial condition",
      "testing": "Testing: Integrate then use given point to find C",
      "reason_bank": [
        "wrong_rule",
        "sign_error",
        "missing_chain_factor",
        "algebra_slip",
        "substitution_error",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_004_m01",
          "q": "Given $f'(x) = 3x^2 - 4x + 1$ and $f(1) = 5$, find $f(x)$.",
          "a": "$f(x) = x^3 - 2x^2 + x + C$. $f(1) = 1 - 2 + 1 + C = 5 \\Rightarrow C = 5$. $f(x) = x^3 - 2x^2 + x + 5$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 1 (source: 3)"
              },
              "v2": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 2 (source: 4)"
              },
              "v3": {
                "type": "int",
                "min": 0,
                "max": 10,
                "step": 1,
                "description": "Value 3 (source: 5)"
              }
            },
            "constraints": [
              "v1 != 3 or v2 != 4 or v3 != 5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(v1)",
                "4": "str(v2)",
                "5": "str(v3)"
              },
              "a": {
                "3": "str(v1)",
                "4": "str(v2)",
                "5": "str(v3)"
              }
            },
            "sourceValues": {
              "v1": 3,
              "v2": 4,
              "v3": 5
            }
          },
          "slug": "in-004-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_004_m02",
          "q": "Given $\\frac{dy}{dx} = 4e^{2x}$ and $y = 3$ when $x = 0$, find $y$.",
          "a": "$y = 2e^{2x} + C$. $3 = 2e^0 + C \\Rightarrow C = 1$. $y = 2e^{2x} + 1$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 1 (source: 4)"
              },
              "v2": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 2 (source: 2)"
              },
              "v3": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 3 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 4 or v2 != 2 or v3 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(v1)",
                "2": "str(v2)",
                "3": "str(v3)"
              },
              "a": {
                "4": "str(v1)",
                "2": "str(v2)",
                "3": "str(v3)"
              }
            },
            "sourceValues": {
              "v1": 4,
              "v2": 2,
              "v3": 3
            }
          },
          "slug": "in-004-m02",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_005",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Integration Techniques",
      "pt": "Integrating $f'(x)/f(x)$ form with trigonometric functions",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_005_m01",
          "q": "Find $\\int \\frac{\\cos(x)}{\\sin(x)} dx$.",
          "a": "$\\ln|\\sin(x)| + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "No numeric values to parameterise."
          },
          "slug": "in-005-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_005_m02",
          "q": "Find $\\int \\frac{\\sin(x)}{1 + \\cos(x)} dx$.",
          "a": "$= -\\int \\frac{-\\sin(x)}{1+\\cos(x)} dx = -\\ln|1+\\cos(x)| + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -4,
                "max": 6,
                "step": 1,
                "description": "Value 1 (source: 1)"
              }
            },
            "constraints": [
              "v1 != 1"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "1": "str(v1)"
              },
              "a": {
                "1": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 1
            }
          },
          "slug": "in-005-m02",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_006",
      "topic": "Integrals",
      "subtopic": "Anti-differentiation",
      "concept": "Integration Techniques",
      "pt": "Solving for parameter using integration and percentage condition",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_006_m01",
          "q": "The probability density function $f(x) = kx^2$ for $0 \\leq x \\leq 3$. Find $k$.",
          "a": "$\\int_0^3 kx^2 dx = 1 \\Rightarrow k\\left[\\frac{x^3}{3}\\right]_0^3 = 1 \\Rightarrow 9k = 1 \\Rightarrow k = \\frac{1}{9}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 1 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(v1)"
              },
              "a": {
                "3": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 3
            }
          },
          "slug": "in-006-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_007",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Calculating area between curve and line using integration",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_007_m01",
          "q": "Find the area enclosed between $y = x^2$ and $y = 2x$.",
          "a": "Intersection: $x^2 = 2x \\Rightarrow x(x-2) = 0$, so $x = 0, 2$. Area $= \\int_0^2 (2x - x^2) dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 1 (source: 2)"
              }
            },
            "constraints": [
              "v1 != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v1)"
              },
              "a": {
                "2": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 2
            }
          },
          "slug": "in-007-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_008",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Calculating area between two curves by splitting at intersection point",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "sign_error",
        "wrong_rule",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_008_m01",
          "q": "Find the area between $y = x$ and $y = x^2 - 2$ for $-1 \\leq x \\leq 2$.",
          "a": "Intersection: $x = x^2 - 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$, so $x = -1, 2$. For $-1 < x < 2$: $x > x^2 - 2$. Area $= \\int_{-1}^{2} [x - (x^2 - 2)] dx = \\int_{-1}^{2} (-x^2 + x + 2) dx = [-\\frac{x^3}{3} + \\frac{x^2}{2} + 2x]_{-1}^{2} = \\frac{10}{3} + \\frac{7}{6} = \\frac{9}{2}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 1 (source: 2)"
              }
            },
            "constraints": [
              "v1 != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v1)"
              },
              "a": {
                "2": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 2
            }
          },
          "slug": "in-008-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_009",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Calculating area bounded by curve, x-axis, and vertical lines using definite integral",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_009_m01",
          "q": "Find the area bounded by $y = x^2 - 4$, the $x$-axis, $x = 0$ and $x = 3$.",
          "a": "$y = 0$ at $x = 2$. Area $= \\left|\\int_0^2 (x^2-4) dx\\right| + \\int_2^3 (x^2-4) dx = \\left|\\left[\\frac{x^3}{3}-4x\\right]_0^2\\right| + \\left[\\frac{x^3}{3}-4x\\right]_2^3 = \\left|-\\frac{16}{3}\\right| + \\frac{-3-(-\\frac{16}{3})}{1} = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 1 (source: 4)"
              },
              "v2": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 2 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 4 or v2 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(v1)",
                "3": "str(v2)"
              },
              "a": {
                "4": "str(v1)",
                "3": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 4,
              "v2": 3
            }
          },
          "slug": "in-009-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_010",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Solving for upper limit k when definite integral equals given value",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_010_m01",
          "q": "Find $k > 0$ such that $\\int_0^k 2x dx = 18$.",
          "a": "$[x^2]_0^k = k^2 = 18 \\Rightarrow k = 3\\sqrt{2}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 1 (source: 2)"
              },
              "v2": {
                "type": "int",
                "min": 9,
                "max": 27,
                "step": 1,
                "description": "Value 2 (source: 18)"
              }
            },
            "constraints": [
              "v1 != 2 or v2 != 18"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v1)",
                "18": "str(v2)"
              },
              "a": {
                "2": "str(v1)",
                "18": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 2,
              "v2": 18
            }
          },
          "slug": "in-010-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_011",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Calculates Total Change from Rate of Change",
      "pt": "Calculates total change from rate of change",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_011_m01",
          "q": "Water flows into a tank at a rate of $R(t) = 4t - t^2$ L/min for $0 \\leq t \\leq 4$. Find the total volume that enters the tank.",
          "a": "$V = \\int_0^4 (4t - t^2) dt = [2t^2 - \\frac{t^3}{3}]_0^4 = 32 - \\frac{64}{3} = \\frac{32}{3} \\approx 10.67$ L",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 1 (source: 4)"
              }
            },
            "constraints": [
              "v1 != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(v1)"
              },
              "a": {
                "4": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 4
            }
          },
          "slug": "in-011-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_012",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Calculates Total Change from Rate of Change",
      "pt": "Calculates total change from rate of change with initial condition",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_012_m01",
          "q": "A population changes at rate $\\frac{dP}{dt} = 100e^{0.02t}$. If $P(0) = 5000$, find $P(10)$.",
          "a": "$P(10) = 5000 + \\int_0^{10} 100e^{0.02t} dt = 5000 + [5000e^{0.02t}]_0^{10} = 5000 + 5000(e^{0.2} - 1) = 5000e^{0.2} \\approx 6107$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": 50,
                "max": 150,
                "step": 5,
                "description": "Value 1 (source: 100)"
              },
              "v2": {
                "type": "int",
                "min": 2500,
                "max": 7500,
                "step": 5,
                "description": "Value 2 (source: 5000)"
              },
              "v3": {
                "type": "int",
                "min": 5,
                "max": 15,
                "step": 1,
                "description": "Value 3 (source: 10)"
              }
            },
            "constraints": [
              "v1 != 100 or v2 != 5000 or v3 != 10"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "100": "str(v1)",
                "5000": "str(v2)",
                "10": "str(v3)"
              },
              "a": {
                "100": "str(v1)",
                "5000": "str(v2)",
                "10": "str(v3)"
              }
            },
            "sourceValues": {
              "v1": 100,
              "v2": 5000,
              "v3": 10
            }
          },
          "slug": "in-012-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_013",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Volume Calculations",
      "pt": "Calculating volume using integration",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_013_m01",
          "q": "Find the volume of the solid formed when $y = \\sqrt{x}$ for $0 \\leq x \\leq 4$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi [\\frac{x^2}{2}]_0^4 = 8\\pi$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 1 (source: 4)"
              }
            },
            "constraints": [
              "v1 != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(v1)"
              },
              "a": {
                "4": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 4
            }
          },
          "slug": "in-013-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_013_m02",
          "q": "Find the volume when $y = e^x$ for $0 \\leq x \\leq 1$ is rotated about the $x$-axis.",
          "a": "$V = \\pi \\int_0^1 e^{2x} dx = \\pi [\\frac{e^{2x}}{2}]_0^1 = \\frac{\\pi(e^2 - 1)}{2}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -4,
                "max": 6,
                "step": 1,
                "description": "Value 1 (source: 1)"
              }
            },
            "constraints": [
              "v1 != 1"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "1": "str(v1)"
              },
              "a": {
                "1": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 1
            }
          },
          "slug": "in-013-m02",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_014",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Area Calculations (from graphs)",
      "pt": "Evaluating definite integral using geometric area of circular segments",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_014_m01",
          "q": "The graph of $f(x) = \\sqrt{9 - x^2}$ is a semicircle of radius 3. Find $\\int_0^3 f(x) dx$.",
          "a": "This is a quarter circle of radius 3. Area $= \\frac{1}{4}\\pi(3)^2 = \\frac{9\\pi}{4}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": 4,
                "max": 14,
                "step": 1,
                "description": "Value 1 (source: 9)"
              },
              "v2": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 2 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 9 or v2 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "9": "str(v1)",
                "3": "str(v2)"
              },
              "a": {
                "9": "str(v1)",
                "3": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 9,
              "v2": 3
            }
          },
          "slug": "in-014-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_015",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Area Calculations (from graphs)",
      "pt": "Evaluating definite integral using signed areas from graph",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_015_m01",
          "q": "The graph of $f(x)$ encloses an area of 6 units² above the $x$-axis between $x = 0$ and $x = 3$, and an area of 2 units² below the $x$-axis between $x = 3$ and $x = 5$. Find $\\int_0^5 f(x) dx$.",
          "a": "$\\int_0^5 f(x) dx = 6 + (-2) = 4$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": 1,
                "max": 11,
                "step": 1,
                "description": "Value 1 (source: 6)"
              },
              "v2": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 2 (source: 3)"
              },
              "v3": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 3 (source: 2)"
              },
              "v4": {
                "type": "int",
                "min": 0,
                "max": 10,
                "step": 1,
                "description": "Value 4 (source: 5)"
              }
            },
            "constraints": [
              "v1 != 6 or v2 != 3 or v3 != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "6": "str(v1)",
                "3": "str(v2)",
                "2": "str(v3)",
                "5": "str(v4)"
              },
              "a": {
                "6": "str(v1)",
                "3": "str(v2)",
                "2": "str(v3)",
                "5": "str(v4)"
              }
            },
            "sourceValues": {
              "v1": 6,
              "v2": 3,
              "v3": 2,
              "v4": 5
            }
          },
          "slug": "in-015-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_015_m02",
          "q": "From a graph, $\\int_0^4 f(x) dx = 7$ and $\\int_0^2 f(x) dx = 3$. Find $\\int_2^4 f(x) dx$.",
          "a": "$\\int_2^4 f(x) dx = 7 - 3 = 4$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": 2,
                "max": 12,
                "step": 1,
                "description": "Value 1 (source: 7)"
              },
              "v2": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 2 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 7 or v2 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "7": "str(v1)",
                "3": "str(v2)"
              },
              "a": {
                "7": "str(v1)",
                "3": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 7,
              "v2": 3
            }
          },
          "slug": "in-015-m02",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_016",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Area Calculations (from graphs)",
      "pt": "Finding upper limit where definite integral equals zero using signed areas",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_016_m01",
          "q": "Given the graph of $f(x)$ where $\\int_0^3 f(x) dx = 5$ and $f(x) < 0$ for $x > 3$ with $f(x) = -(x - 3)$ for $x > 3$, find $k > 3$ such that $\\int_0^k f(x) dx = 0$.",
          "a": "$\\int_3^k -(x-3) dx = -\\frac{(k-3)^2}{2}$. Need $5 - \\frac{(k-3)^2}{2} = 0 \\Rightarrow (k-3)^2 = 10 \\Rightarrow k = 3 + \\sqrt{10}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": 0,
                "max": 10,
                "step": 1,
                "description": "Value 1 (source: 5)"
              },
              "v2": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 2 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 5 or v2 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "5": "str(v1)",
                "3": "str(v2)"
              },
              "a": {
                "5": "str(v1)",
                "3": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 5,
              "v2": 3
            }
          },
          "slug": "in-016-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_017",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "General/Other",
      "pt": "Evaluating definite integral of transformed function using linearity",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_017_m01",
          "q": "Given $\\int_0^3 f(x) dx = 8$, find $\\int_0^3 [2f(x) + 3] dx$.",
          "a": "$= 2\\int_0^3 f(x) dx + \\int_0^3 3 dx = 2(8) + 3(3) = 16 + 9 = 25$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": 3,
                "max": 13,
                "step": 1,
                "description": "Value 1 (source: 8)"
              },
              "v2": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 2 (source: 2)"
              },
              "v3": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 3 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 8 or v2 != 2 or v3 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "8": "str(v1)",
                "2": "str(v2)",
                "3": "str(v3)"
              },
              "a": {
                "8": "str(v1)",
                "2": "str(v2)",
                "3": "str(v3)"
              }
            },
            "sourceValues": {
              "v1": 8,
              "v2": 2,
              "v3": 3
            }
          },
          "slug": "in-017-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_017_m02",
          "q": "Given $\\int_1^5 f(x) dx = 10$ and $\\int_1^5 g(x) dx = 4$, find $\\int_1^5 [3f(x) - 2g(x)] dx$.",
          "a": "$= 3(10) - 2(4) = 30 - 8 = 22$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": 5,
                "max": 15,
                "step": 1,
                "description": "Value 1 (source: 10)"
              },
              "v2": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 2 (source: 4)"
              },
              "v3": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 3 (source: 3)"
              },
              "v4": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 4 (source: 2)"
              }
            },
            "constraints": [
              "v1 != 10 or v2 != 4 or v3 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "10": "str(v1)",
                "4": "str(v2)",
                "3": "str(v3)",
                "2": "str(v4)"
              },
              "a": {
                "10": "str(v1)",
                "4": "str(v2)",
                "3": "str(v3)",
                "2": "str(v4)"
              }
            },
            "sourceValues": {
              "v1": 10,
              "v2": 4,
              "v3": 3,
              "v4": 2
            }
          },
          "slug": "in-017-m02",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_018",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Graph Sketching",
      "pt": "Shading region on graph corresponding to a given definite integral",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_018_m01",
          "q": "On a sketch of $y = x^2$, shade the region that represents $\\int_1^3 x^2 dx$.",
          "a": "Shade the area between the curve $y = x^2$, the $x$-axis, and the vertical lines $x = 1$ and $x = 3$.",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "No numeric values to parameterise."
          },
          "slug": "in-018-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_019",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Numerical Integration",
      "pt": "Bounding a definite integral using upper and lower rectangle sums with explanation",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_019_m01",
          "q": "Using strips of width 1, find the upper and lower rectangle sums for $\\int_1^4 \\frac{1}{x} dx$.",
          "a": "For decreasing $f(x) = \\frac{1}{x}$: Lower sum (right endpoints) $= 1 \\times (\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}) = \\frac{13}{12}$. Upper sum (left endpoints) $= 1 \\times (1 + \\frac{1}{2} + \\frac{1}{3}) = \\frac{11}{6}$.",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -4,
                "max": 6,
                "step": 1,
                "description": "Value 1 (source: 1)"
              }
            },
            "constraints": [
              "v1 != 1"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "1": "str(v1)"
              },
              "a": {
                "1": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 1
            }
          },
          "slug": "in-019-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_020",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Numerical Integration",
      "pt": "Estimating integral using average of upper and lower rectangle sums",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_020_m01",
          "q": "Given upper sum = 2.8 and lower sum = 2.2 for $\\int_a^b f(x) dx$, estimate the integral.",
          "a": "Estimate $= \\frac{2.8 + 2.2}{2} = 2.5$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "float",
                "min": 2.3,
                "max": 3.3,
                "step": 0.05,
                "description": "Value 1 (source: 2.8)"
              },
              "v2": {
                "type": "float",
                "min": 1.7,
                "max": 2.7,
                "step": 0.05,
                "description": "Value 2 (source: 2.2)"
              }
            },
            "constraints": [
              "v1 != 2.8 or v2 != 2.2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2.8": "str(v1)",
                "2.2": "str(v2)"
              },
              "a": {
                "2.8": "str(v1)",
                "2.2": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 2.8,
              "v2": 2.2
            }
          },
          "slug": "in-020-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_021",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Numerical Integration",
      "pt": "Suggesting methods to improve rectangle approximation of area",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "sign_error",
        "wrong_rule",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_021_m01",
          "q": "A student used 4 rectangles to approximate $\\int_0^2 x^2 dx$. Suggest how they could improve their approximation.",
          "a": "Increase the number of rectangles (use narrower strips), or use the trapezoidal rule instead of rectangles for a better approximation.",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 1 (source: 4)"
              }
            },
            "constraints": [
              "v1 != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(v1)"
              },
              "a": {
                "4": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 4
            }
          },
          "slug": "in-021-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_022",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Differentiating Integrals",
      "pt": "Differentiating integral with variable bound using fundamental theorem",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_022_m01",
          "q": "Find $\\frac{d}{dx} \\int_0^x \\sin(t^2) dt$.",
          "a": "$\\sin(x^2)$ (by the fundamental theorem)",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "No numeric values to parameterise."
          },
          "slug": "in-022-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_022_m02",
          "q": "Find $\\frac{d}{dx} \\int_0^{x^2} e^t dt$.",
          "a": "$= e^{x^2} \\times 2x = 2xe^{x^2}$ (chain rule with FTC)",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "No numeric values to parameterise."
          },
          "slug": "in-022-m02",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_023",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Fundamental Theorem",
      "pt": "Applying fundamental theorem of calculus",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_023_m01",
          "q": "Evaluate $\\int_1^4 (2x - 3) dx$.",
          "a": "$= [x^2 - 3x]_1^4 = (16 - 12) - (1 - 3) = 4 + 2 = 6$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 1 (source: 2)"
              },
              "v2": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 2 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 2 or v2 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v1)",
                "3": "str(v2)"
              },
              "a": {
                "2": "str(v1)",
                "3": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 2,
              "v2": 3
            }
          },
          "slug": "in-023-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_023_m02",
          "q": "Evaluate $\\int_0^{\\pi/2} \\cos(x) dx$.",
          "a": "$= [\\sin(x)]_0^{\\pi/2} = 1 - 0 = 1$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 1 (source: 2)"
              }
            },
            "constraints": [
              "v1 != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v1)"
              },
              "a": {
                "2": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 2
            }
          },
          "slug": "in-023-m02",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_024",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Fundamental Theorem",
      "pt": "Applying fundamental theorem to evaluate integral of derivative",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "interpretation_mixup",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_024_m01",
          "q": "Given $f'(x) = 3x^2 - 1$ and $f(1) = 4$, find $f(3)$.",
          "a": "$f(3) = f(1) + \\int_1^3 f'(x) dx = 4 + [x^3 - x]_1^3 = 4 + (24 - 0) = 28$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 1 (source: 3)"
              },
              "v2": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 2 (source: 4)"
              }
            },
            "constraints": [
              "v1 != 3 or v2 != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(v1)",
                "4": "str(v2)"
              },
              "a": {
                "3": "str(v1)",
                "4": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 3,
              "v2": 4
            }
          },
          "slug": "in-024-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_025",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Fundamental Theorem",
      "pt": "Evaluating definite integral using linearity and interval properties",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_025_m01",
          "q": "Given $\\int_0^5 f(x) dx = 12$ and $\\int_0^2 f(x) dx = 5$, find $\\int_2^5 f(x) dx$.",
          "a": "$\\int_2^5 f(x) dx = \\int_0^5 f(x) dx - \\int_0^2 f(x) dx = 12 - 5 = 7$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": 6,
                "max": 18,
                "step": 1,
                "description": "Value 1 (source: 12)"
              },
              "v2": {
                "type": "int",
                "min": 0,
                "max": 10,
                "step": 1,
                "description": "Value 2 (source: 5)"
              }
            },
            "constraints": [
              "v1 != 12 or v2 != 5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "12": "str(v1)",
                "5": "str(v2)"
              },
              "a": {
                "12": "str(v1)",
                "5": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 12,
              "v2": 5
            }
          },
          "slug": "in-025-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_026",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Fundamental Theorem",
      "pt": "Finding maximum of accumulation function using $F'(x) = f(x)$",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_026_m01",
          "q": "Let $F(x) = \\int_0^x (4 - t^2) dt$. Find the value of $x$ where $F(x)$ is maximised.",
          "a": "$F'(x) = 4 - x^2 = 0 \\Rightarrow x = 2$ (taking positive value). $F''(x) = -2x$, so $F''(2) = -4 < 0$ (max). Maximum at $x = 2$.",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 1 (source: 4)"
              }
            },
            "constraints": [
              "v1 != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(v1)"
              },
              "a": {
                "4": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 4
            }
          },
          "slug": "in-026-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_027",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Graph Sketching",
      "pt": "Sketching accumulation function from graph of f",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "IN_027_m01",
          "q": "Given that $f(x) > 0$ for $0 < x < 3$, $f(x) < 0$ for $x > 3$, and $f(3) = 0$, describe the shape of $A(x) = \\int_0^x f(t) dt$.",
          "a": "$A(x)$ is increasing for $0 < x < 3$ (since $f > 0$), has a maximum at $x = 3$ (since $f(3) = 0$ and $f$ changes sign), and is decreasing for $x > 3$.",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Integration. Integral verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 1 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(v1)"
              },
              "a": {
                "3": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 3
            }
          },
          "slug": "in-027-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "IN_028",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Anti-differentiation",
      "concept": "Basic Anti-differentiation",
      "pt": "Anti-differentiating expressions involving power rule, exponential, and trigonometric terms",
      "testing": "Testing: Apply standard anti-differentiation rules to each term separately",
      "reason_bank": [
        "wrong_rule",
        "sign_error",
        "missing_chain_factor",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_028_e01",
          "q": "Anti-differentiate $x^3 + e^x - sin x$.",
          "a": "$\frac{x^4}{4} + e^x + cos x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Basic anti-diff: power + exp + trig. Verified by SymPy.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Power of x"
              }
            },
            "constraints": [
              "a != 3"
            ],
            "derived": {
              "result": {
                "expr": "x^(a+1)/(a+1) + e^x + cos(x) + C",
                "note": "Anti-derivative"
              }
            },
            "substitutions": {
              "q": {
                "3": "str(a)"
              },
              "a": {
                "4": "str(a+1)"
              }
            },
            "sourceValues": {
              "a": 3
            }
          },
          "slug": "in-028-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_028_e02",
          "q": "Anti-differentiate $5x^4 - 2sin x$.",
          "a": "$x^5 + 2cos x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Basic anti-diff. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 1,
                "description": "Coefficient of x^4"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coefficient of sin"
              }
            },
            "constraints": [
              "a != 5 or b != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "5": "str(a)",
                "2": "str(b)"
              },
              "a": {
                "5": "str(a)",
                "2": "str(b)"
              }
            },
            "sourceValues": {
              "a": 5,
              "b": 2
            }
          },
          "slug": "in-028-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_028_e03",
          "q": "Anti-differentiate $6x^2 + 3e^x$.",
          "a": "$2x^3 + 3e^x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Basic anti-diff. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 10,
                "step": 2,
                "description": "Coefficient of x^2"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coefficient of e^x"
              }
            },
            "constraints": [
              "a != 6 or b != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "6": "str(a)",
                "3": "str(b)"
              },
              "a": {
                "2": "str(a//3)",
                "6": "str(a)",
                "3": "str(b)"
              }
            },
            "sourceValues": {
              "a": 6,
              "b": 3
            }
          },
          "slug": "in-028-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_028_m01",
          "q": "Anti-differentiate $3x^2 + 4cos x - 3e^x$.",
          "a": "$x^3 + 4sin x - 3e^x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Mixed terms. Verified by SymPy.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of x^2"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Coeff of cos"
              },
              "c": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of e^x"
              }
            },
            "constraints": [
              "a != 3 or b != 4 or c != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "4": "str(b)"
              },
              "a": {
                "4": "str(b)",
                "3": "str(c)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": 4,
              "c": 3
            }
          },
          "slug": "in-028-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_028_m02",
          "q": "Anti-differentiate $\frac{1}{x^4} - 5sin x + 6sqrt{x}$.",
          "a": "$-\frac{1}{3x^3} + 5cos x + 4x^{3/2} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Fractional/negative powers with mixed terms — requires careful rewriting."
          },
          "slug": "in-028-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_028_m03",
          "q": "Anti-differentiate $4x^3 - \frac{2}{x^3} + 7cos x$.",
          "a": "$x^4 + \frac{1}{x^2} + 7sin x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Negative powers + trig. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 2,
                "description": "Coeff of x^3"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of 1/x^3"
              },
              "c": {
                "type": "int",
                "min": 2,
                "max": 10,
                "step": 1,
                "description": "Coeff of cos"
              }
            },
            "constraints": [
              "a != 4 or b != 2 or c != 7"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(a)",
                "2": "str(b)",
                "7": "str(c)"
              },
              "a": {
                "4": "str(a)",
                "7": "str(c)"
              }
            },
            "sourceValues": {
              "a": 4,
              "b": 2,
              "c": 7
            }
          },
          "slug": "in-028-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_028_h01",
          "q": "Anti-differentiate $\frac{3}{sqrt{x}} - 2e^x + \frac{5}{x^2}$.",
          "a": "$6sqrt{x} - 2e^x - \frac{5}{x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Fractional powers requiring rewrite. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Numerator coeff of 1/√x"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff of e^x"
              },
              "c": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 1,
                "description": "Numerator of 1/x^2"
              }
            },
            "constraints": [
              "a != 3 or b != 2 or c != 5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "2": "str(b)",
                "5": "str(c)"
              },
              "a": {
                "6": "str(2*a)",
                "2": "str(b)",
                "5": "str(c)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": 2,
              "c": 5
            }
          },
          "slug": "in-028-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_028_h02",
          "q": "Anti-differentiate $8x^3 - 3cos x + \frac{4}{x^5}$.",
          "a": "$2x^4 - 3sin x - \frac{1}{x^4} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Mixed with high negative power. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 4,
                "max": 12,
                "step": 2,
                "description": "Coeff of x^3"
              },
              "c": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of cos"
              }
            },
            "constraints": [
              "a != 8 or c != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "8": "str(a)",
                "3": "str(c)"
              },
              "a": {
                "2": "str(a//4)",
                "3": "str(c)"
              }
            },
            "sourceValues": {
              "a": 8,
              "c": 3
            }
          },
          "slug": "in-028-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_028_h03",
          "q": "Anti-differentiate $2x - \frac{3}{x^2} + 4e^x - 7sin x$.",
          "a": "$x^2 + \frac{3}{x} + 4e^x + 7cos x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Four mixed terms. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Num of 1/x^2"
              },
              "c": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Coeff e^x"
              },
              "e": {
                "type": "int",
                "min": 2,
                "max": 10,
                "step": 1,
                "description": "Coeff sin"
              }
            },
            "constraints": [
              "a != 2 or b != 3 or c != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)",
                "3": "str(b)",
                "4": "str(c)",
                "7": "str(e)"
              },
              "a": {
                "3": "str(b)",
                "4": "str(c)",
                "7": "str(e)"
              }
            },
            "sourceValues": {
              "a": 2,
              "b": 3,
              "c": 4,
              "e": 7
            }
          },
          "slug": "in-028-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_029",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Anti-differentiation",
      "concept": "Expand Before Integrating",
      "pt": "Expanding a squared or product expression before integrating (not reverse chain rule)",
      "testing": "Testing: Recognise expression is NOT reverse chain rule, expand first, then integrate term by term",
      "reason_bank": [
        "wrong_rule",
        "algebra_slip",
        "missing_chain_factor",
        "sign_error",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_029_e01",
          "q": "Find $int (x + 3)^2 , dx$.",
          "a": "Expand: $int (x^2 + 6x + 9) , dx = \frac{x^3}{3} + 3x^2 + 9x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Expand perfect square then integrate. Verified.",
            "parameters": {
              "b": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Constant in (x+b)^2"
              }
            },
            "constraints": [
              "b != 3"
            ],
            "derived": {
              "b2": {
                "expr": "b**2",
                "note": "Constant term after expansion"
              }
            },
            "substitutions": {
              "q": {
                "3": "str(b)"
              },
              "a": {
                "6": "str(2*b)",
                "9": "str(b2)",
                "3": "str(b)"
              }
            },
            "sourceValues": {
              "b": 3
            }
          },
          "slug": "in-029-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_029_e02",
          "q": "Find $int (2x - 1)^2 , dx$.",
          "a": "Expand: $int (4x^2 - 4x + 1) , dx = \frac{4x^3}{3} - 2x^2 + x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Expand (ax+b)^2. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": -4,
                "max": 4,
                "step": 1,
                "description": "Constant"
              }
            },
            "constraints": [
              "a != 2 or b != -1"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)",
                "1": "str(abs(b))"
              },
              "a": {
                "4": "str(a**2)"
              }
            },
            "sourceValues": {
              "a": 2,
              "b": -1
            }
          },
          "slug": "in-029-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_029_e03",
          "q": "Find $int x(x + 4) , dx$.",
          "a": "Expand: $int (x^2 + 4x) , dx = \frac{x^3}{3} + 2x^2 + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Expand product then integrate. Verified.",
            "parameters": {
              "b": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Constant in x(x+b)"
              }
            },
            "constraints": [
              "b != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(b)"
              },
              "a": {
                "4": "str(b)",
                "2": "str(b//2)"
              }
            },
            "sourceValues": {
              "b": 4
            }
          },
          "slug": "in-029-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_029_m01",
          "q": "Find $int (3x^2 - 2)^2 , dx$.",
          "a": "Expand: $int (9x^4 - 12x^2 + 4) , dx = \frac{9x^5}{5} - 4x^3 + 4x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Squared polynomial, NOT RCR. Verified by SymPy.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Coeff of x^2 in bracket"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Constant in bracket"
              }
            },
            "constraints": [
              "a != 3 or b != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "2": "str(b)"
              },
              "a": {
                "9": "str(a**2)",
                "12": "str(2*a*b)",
                "4": "str(b**2)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": 2
            }
          },
          "slug": "in-029-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_029_m02",
          "q": "Find $int x^2(3x - 5) , dx$.",
          "a": "Expand: $int (3x^3 - 5x^2) , dx = \frac{3x^4}{4} - \frac{5x^3}{3} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Product expansion. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of x in bracket"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Constant in bracket"
              }
            },
            "constraints": [
              "a != 3 or b != 5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "5": "str(b)"
              },
              "a": {
                "3": "str(a)",
                "5": "str(b)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": 5
            }
          },
          "slug": "in-029-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_029_m03",
          "q": "Find $int (x + 1)(x - 3) , dx$.",
          "a": "Expand: $int (x^2 - 2x - 3) , dx = \frac{x^3}{3} - x^2 - 3x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Factored quadratic. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": -3,
                "max": 3,
                "step": 1,
                "description": "First constant"
              },
              "b": {
                "type": "int",
                "min": -5,
                "max": 5,
                "step": 1,
                "description": "Second constant"
              }
            },
            "constraints": [
              "a != 1 or b != -3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "1": "str(a)",
                "3": "str(abs(b))"
              },
              "a": {}
            },
            "sourceValues": {
              "a": 1,
              "b": -3
            }
          },
          "slug": "in-029-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_029_h01",
          "q": "Find $int (2x + 1)^3 , dx$. (Expand, do not use reverse chain rule.)",
          "a": "Expand: $(2x+1)^3 = 8x^3 + 12x^2 + 6x + 1$.\n$int = 2x^4 + 4x^3 + 3x^2 + x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Cubic expansion — parameter space too complex for clean variants."
          },
          "slug": "in-029-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_029_h02",
          "q": "Find $int sqrt{x}(x - 4) , dx$.",
          "a": "$= int (x^{3/2} - 4x^{1/2}) , dx = \frac{2x^{5/2}}{5} - \frac{8x^{3/2}}{3} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Surd product. Verified.",
            "parameters": {
              "b": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Constant subtracted from x"
              }
            },
            "constraints": [
              "b != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(b)"
              },
              "a": {
                "4": "str(b)",
                "8": "str(2*b)"
              }
            },
            "sourceValues": {
              "b": 4
            }
          },
          "slug": "in-029-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_029_h03",
          "q": "Find $int \frac{(x+2)^2}{x^2} , dx$.",
          "a": "$= int (1 + \frac{4}{x} + \frac{4}{x^2}) , dx = x + 4ln|x| - \frac{4}{x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Expand fraction. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Constant in numerator (x+a)^2"
              }
            },
            "constraints": [
              "a != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)"
              },
              "a": {
                "4": "str(a**2)"
              }
            },
            "sourceValues": {
              "a": 2
            }
          },
          "slug": "in-029-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_030",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Anti-differentiation",
      "concept": "Linear Composite Anti-differentiation",
      "pt": "Anti-differentiating (ax+b)^n using the linear composite rule",
      "testing": "Testing: ∫k(ax+b)^n dx = k/(a(n+1)) · (ax+b)^(n+1) + C",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_030_e01",
          "q": "Find $int (2x+1)^3 , dx$.",
          "a": "$= \frac{(2x+1)^4}{8} + C$. (Divide by power+1 and by inner derivative 2.)",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Linear composite power. ∫(ax+b)^n. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": -3,
                "max": 5,
                "step": 1,
                "description": "Constant"
              },
              "n": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Power"
              }
            },
            "constraints": [
              "a != 2 or b != 1 or n != 3"
            ],
            "derived": {
              "denom": {
                "expr": "a*(n+1)",
                "note": "Denominator = a × (n+1)"
              }
            },
            "substitutions": {
              "q": {
                "2": "str(a)",
                "1": "str(b)",
                "3": "str(n)"
              },
              "a": {
                "8": "str(denom)",
                "4": "str(n+1)"
              }
            },
            "sourceValues": {
              "a": 2,
              "b": 1,
              "n": 3
            }
          },
          "slug": "in-030-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_030_e02",
          "q": "Find $int (3x-2)^4 , dx$.",
          "a": "$= \frac{(3x-2)^5}{15} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Linear composite. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": -5,
                "max": 5,
                "step": 1,
                "description": "Constant"
              },
              "n": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Power"
              }
            },
            "constraints": [
              "a != 3 or b != -2 or n != 4"
            ],
            "derived": {
              "denom": {
                "expr": "a*(n+1)",
                "note": "Denominator"
              }
            },
            "substitutions": {
              "q": {
                "3": "str(a)",
                "2": "str(abs(b))",
                "4": "str(n)"
              },
              "a": {
                "15": "str(denom)",
                "5": "str(n+1)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": -2,
              "n": 4
            }
          },
          "slug": "in-030-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_030_e03",
          "q": "Find $int 4(x+5)^3 , dx$.",
          "a": "$= (x+5)^4 + C$. (Factor 4 cancels with 1/(1×4).)",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Coefficient cancels neatly. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Outer coefficient"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Constant"
              },
              "n": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Power"
              }
            },
            "constraints": [
              "k != 4 or b != 5 or n != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(k)",
                "5": "str(b)",
                "3": "str(n)"
              },
              "a": {
                "5": "str(b)"
              }
            },
            "sourceValues": {
              "k": 4,
              "b": 5,
              "n": 3
            }
          },
          "slug": "in-030-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_030_m01",
          "q": "Find $int 3(3x-1)^4 , dx$.",
          "a": "$g(x) = 3x-1$, $g'(x) = 3$. Since $3$ is already present: $= \frac{(3x-1)^5}{5} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Coefficient matches inner derivative. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff of x (= outer coeff)"
              },
              "b": {
                "type": "int",
                "min": -5,
                "max": 5,
                "step": 1,
                "description": "Constant"
              },
              "n": {
                "type": "int",
                "min": 3,
                "max": 6,
                "step": 1,
                "description": "Power"
              }
            },
            "constraints": [
              "a != 3 or b != -1 or n != 4"
            ],
            "derived": {
              "result_denom": {
                "expr": "n+1",
                "note": "Just n+1 since outer coeff = inner derivative"
              }
            },
            "substitutions": {
              "q": {
                "3": "str(a)",
                "1": "str(abs(b))",
                "4": "str(n)"
              },
              "a": {
                "5": "str(result_denom)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": -1,
              "n": 4
            }
          },
          "slug": "in-030-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_030_m02",
          "q": "Find $int \frac{14}{(7x-3)^2} , dx$.",
          "a": "$= int 14(7x-3)^{-2} , dx = 14 cdot \frac{(7x-3)^{-1}}{7 cdot (-1)} = -\frac{2}{7x-3} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Negative power linear composite. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 6,
                "max": 20,
                "step": 2,
                "description": "Numerator"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": -6,
                "max": 6,
                "step": 1,
                "description": "Constant"
              }
            },
            "constraints": [
              "k != 14 or a != 7 or b != -3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "14": "str(k)",
                "7": "str(a)",
                "3": "str(abs(b))"
              },
              "a": {
                "2": "str(k//a)",
                "7": "str(a)",
                "3": "str(abs(b))"
              }
            },
            "sourceValues": {
              "k": 14,
              "a": 7,
              "b": -3
            }
          },
          "slug": "in-030-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_030_m03",
          "q": "Find $int 6(1-2x)^5 , dx$.",
          "a": "$g'(x) = -2$. $= \frac{6}{-2} cdot \frac{(1-2x)^6}{6} = -\frac{(1-2x)^6}{2} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Negative inner derivative. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 10,
                "step": 2,
                "description": "Outer coeff"
              },
              "a": {
                "type": "int",
                "min": -4,
                "max": -1,
                "step": 1,
                "description": "Coeff of x (negative)"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Constant"
              },
              "n": {
                "type": "int",
                "min": 3,
                "max": 7,
                "step": 1,
                "description": "Power"
              }
            },
            "constraints": [
              "k != 6 or a != -2 or n != 5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "6": "str(k)",
                "2": "str(abs(a))",
                "1": "str(b)",
                "5": "str(n)"
              },
              "a": {}
            },
            "sourceValues": {
              "k": 6,
              "a": -2,
              "b": 1,
              "n": 5
            }
          },
          "slug": "in-030-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_030_h01",
          "q": "Find $int \frac{5}{sqrt{3x+4}} , dx$.",
          "a": "$= int 5(3x+4)^{-1/2} , dx = \frac{5}{3} cdot 2(3x+4)^{1/2} + C = \frac{10sqrt{3x+4}}{3} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Fractional power linear composite. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 1,
                "description": "Numerator"
              },
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Constant"
              }
            },
            "constraints": [
              "k != 5 or a != 3 or b != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "5": "str(k)",
                "3": "str(a)",
                "4": "str(b)"
              },
              "a": {
                "10": "str(2*k)",
                "3": "str(a)"
              }
            },
            "sourceValues": {
              "k": 5,
              "a": 3,
              "b": 4
            }
          },
          "slug": "in-030-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_030_h02",
          "q": "Find $int \frac{3}{(2x+1)^4} , dx$.",
          "a": "$= 3 cdot \frac{(2x+1)^{-3}}{2 cdot (-3)} = -\frac{1}{2(2x+1)^3} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Negative power. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Numerator"
              },
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Coeff of x"
              },
              "n": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Denominator power"
              }
            },
            "constraints": [
              "k != 3 or a != 2 or n != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(k)",
                "2": "str(a)",
                "4": "str(n)"
              },
              "a": {}
            },
            "sourceValues": {
              "k": 3,
              "a": 2,
              "n": 4
            }
          },
          "slug": "in-030-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_030_h03",
          "q": "Find $int -8(5-4x)^3 , dx$.",
          "a": "$g'(x) = -4$. $= \frac{-8}{-4} cdot \frac{(5-4x)^4}{4} = \frac{(5-4x)^4}{2} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Negative coefficient inside. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": -12,
                "max": -2,
                "step": 2,
                "description": "Outer coeff (negative)"
              },
              "a": {
                "type": "int",
                "min": -6,
                "max": -1,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Constant"
              },
              "n": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Power"
              }
            },
            "constraints": [
              "k != -8 or a != -4 or n != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "8": "str(abs(k))",
                "4": "str(abs(a))",
                "5": "str(b)",
                "3": "str(n)"
              },
              "a": {}
            },
            "sourceValues": {
              "k": -8,
              "a": -4,
              "b": 5,
              "n": 3
            }
          },
          "slug": "in-030-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_031",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Anti-differentiation",
      "concept": "Exponential Anti-differentiation",
      "pt": "Anti-differentiating e^(ax+b) using ∫e^(ax+b) dx = (1/a)e^(ax+b) + C",
      "testing": "Testing: Divide by the derivative of the inner linear function",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_031_e01",
          "q": "Find $int e^{4x} , dx$.",
          "a": "$= \frac{1}{4}e^{4x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "∫e^(ax) = (1/a)e^(ax). Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 1,
                "description": "Coefficient of x in exponent"
              }
            },
            "constraints": [
              "a != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(a)"
              },
              "a": {
                "4": "str(a)"
              }
            },
            "sourceValues": {
              "a": 4
            }
          },
          "slug": "in-031-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_031_e02",
          "q": "Find $int 3e^{2x} , dx$.",
          "a": "$= \frac{3}{2}e^{2x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "k·e^(ax). Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Outer coefficient"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Coeff of x"
              }
            },
            "constraints": [
              "k != 3 or a != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(k)",
                "2": "str(a)"
              },
              "a": {
                "3": "str(k)",
                "2": "str(a)"
              }
            },
            "sourceValues": {
              "k": 3,
              "a": 2
            }
          },
          "slug": "in-031-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_031_e03",
          "q": "Find $int e^{-x} , dx$.",
          "a": "$= -e^{-x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Single specific case: a = -1. Minimal parameterisation value."
          },
          "slug": "in-031-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_031_m01",
          "q": "Find $int 6e^{-3x} , dx$.",
          "a": "$= \frac{6}{-3}e^{-3x} = -2e^{-3x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Negative exponent coefficient. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 10,
                "step": 2,
                "description": "Outer coeff"
              },
              "a": {
                "type": "int",
                "min": -6,
                "max": -1,
                "step": 1,
                "description": "Coeff of x (negative)"
              }
            },
            "constraints": [
              "k != 6 or a != -3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "6": "str(k)",
                "3": "str(abs(a))"
              },
              "a": {
                "2": "str(abs(k//a))",
                "3": "str(abs(a))"
              }
            },
            "sourceValues": {
              "k": 6,
              "a": -3
            }
          },
          "slug": "in-031-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_031_m02",
          "q": "Find $int 4e^{2x-5} , dx$.",
          "a": "$= \frac{4}{2}e^{2x-5} = 2e^{2x-5} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "e^(ax+b) form. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 2,
                "description": "Outer coeff"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": -8,
                "max": -1,
                "step": 1,
                "description": "Constant in exponent"
              }
            },
            "constraints": [
              "k != 4 or a != 2 or b != -5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(k)",
                "2": "str(a)",
                "5": "str(abs(b))"
              },
              "a": {
                "2": "str(k//a)"
              }
            },
            "sourceValues": {
              "k": 4,
              "a": 2,
              "b": -5
            }
          },
          "slug": "in-031-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_031_m03",
          "q": "Find $int -5e^{0.5x} , dx$.",
          "a": "$= \frac{-5}{0.5}e^{0.5x} = -10e^{0.5x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Decimal coefficient. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": -8,
                "max": -2,
                "step": 1,
                "description": "Outer coeff"
              },
              "a": {
                "type": "float",
                "min": 0.2,
                "max": 0.8,
                "step": 0.1,
                "description": "Coeff of x (decimal)"
              }
            },
            "constraints": [
              "k != -5 or a != 0.5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "5": "str(abs(k))",
                "0.5": "str(a)"
              },
              "a": {
                "10": "str(abs(round(k/a)))"
              }
            },
            "sourceValues": {
              "k": -5,
              "a": 0.5
            }
          },
          "slug": "in-031-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_031_h01",
          "q": "Find $int (3e^{2x} - 4e^{-x} + 5) , dx$.",
          "a": "$= \frac{3}{2}e^{2x} + 4e^{-x} + 5x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Mixed exponential terms. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of e^2x"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Coeff of e^-x"
              },
              "c": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Constant term"
              }
            },
            "constraints": [
              "a != 3 or b != 4 or c != 5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "4": "str(b)",
                "5": "str(c)"
              },
              "a": {
                "4": "str(b)",
                "5": "str(c)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": 4,
              "c": 5
            }
          },
          "slug": "in-031-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_031_h02",
          "q": "Find $int \frac{8}{e^{4x}} , dx$.",
          "a": "$= int 8e^{-4x} , dx = -2e^{-4x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Rewrite as negative exponent. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 12,
                "step": 2,
                "description": "Numerator"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Exponent coefficient"
              }
            },
            "constraints": [
              "k != 8 or a != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "8": "str(k)",
                "4": "str(a)"
              },
              "a": {
                "2": "str(k//a)",
                "4": "str(a)"
              }
            },
            "sourceValues": {
              "k": 8,
              "a": 4
            }
          },
          "slug": "in-031-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_031_h03",
          "q": "Find $int (2e^{3x+1} + \frac{6}{e^{2x}}) , dx$.",
          "a": "$= \frac{2}{3}e^{3x+1} - 3e^{-2x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Mixed with rewrite. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff of first exp"
              },
              "b": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "First inner coeff"
              },
              "c": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 2,
                "description": "Numerator of second"
              }
            },
            "constraints": [
              "a != 2 or b != 3 or c != 6"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)",
                "3": "str(b)",
                "6": "str(c)"
              },
              "a": {
                "2": "str(a)",
                "3": "str(b)"
              }
            },
            "sourceValues": {
              "a": 2,
              "b": 3,
              "c": 6
            }
          },
          "slug": "in-031-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_032",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Anti-differentiation",
      "concept": "Trigonometric Anti-differentiation",
      "pt": "Anti-differentiating sin(ax+b) and cos(ax+b) using linear composite rule",
      "testing": "Testing: ∫sin(ax+b) dx = -(1/a)cos(ax+b)+C, ∫cos(ax+b) dx = (1/a)sin(ax+b)+C",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_032_e01",
          "q": "Find $int sin 2x , dx$.",
          "a": "$= -\frac{1}{2}cos 2x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "∫sin(ax). Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Coefficient of x"
              }
            },
            "constraints": [
              "a != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)"
              },
              "a": {
                "2": "str(a)"
              }
            },
            "sourceValues": {
              "a": 2
            }
          },
          "slug": "in-032-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_032_e02",
          "q": "Find $int cos 3x , dx$.",
          "a": "$= \frac{1}{3}sin 3x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "∫cos(ax). Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Coefficient of x"
              }
            },
            "constraints": [
              "a != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)"
              },
              "a": {
                "3": "str(a)"
              }
            },
            "sourceValues": {
              "a": 3
            }
          },
          "slug": "in-032-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_032_e03",
          "q": "Find $int 4cos 2x , dx$.",
          "a": "$= 2sin 2x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "k·cos(ax). Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 1,
                "description": "Outer coefficient"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Coeff of x"
              }
            },
            "constraints": [
              "k != 4 or a != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(k)",
                "2": "str(a)"
              },
              "a": {
                "2": "str(k//a)"
              }
            },
            "sourceValues": {
              "k": 4,
              "a": 2
            }
          },
          "slug": "in-032-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_032_m01",
          "q": "Find $int -6sin 3x , dx$.",
          "a": "$= \frac{-6}{3}(-cos 3x) = 2cos 3x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Negative coeff with sin. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": -10,
                "max": -2,
                "step": 2,
                "description": "Outer coeff"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Inner coeff"
              }
            },
            "constraints": [
              "k != -6 or a != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "6": "str(abs(k))",
                "3": "str(a)"
              },
              "a": {
                "2": "str(abs(k)//a)",
                "3": "str(a)"
              }
            },
            "sourceValues": {
              "k": -6,
              "a": 3
            }
          },
          "slug": "in-032-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_032_m02",
          "q": "Find $int cos(4x - 3) , dx$.",
          "a": "$= \frac{1}{4}sin(4x - 3) + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "cos(ax+b) form. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": -6,
                "max": 6,
                "step": 1,
                "description": "Constant"
              }
            },
            "constraints": [
              "a != 4 or b != -3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(a)",
                "3": "str(abs(b))"
              },
              "a": {
                "4": "str(a)"
              }
            },
            "sourceValues": {
              "a": 4,
              "b": -3
            }
          },
          "slug": "in-032-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_032_m03",
          "q": "Find $int (3cos 2x - 5sin x) , dx$.",
          "a": "$= \frac{3}{2}sin 2x + 5cos x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Mixed trig. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of cos"
              },
              "b": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Inner coeff of cos"
              },
              "c": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Coeff of sin"
              }
            },
            "constraints": [
              "a != 3 or b != 2 or c != 5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "2": "str(b)",
                "5": "str(c)"
              },
              "a": {
                "5": "str(c)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": 2,
              "c": 5
            }
          },
          "slug": "in-032-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_032_h01",
          "q": "Find $int (2sin(3x+1) - 4cos(2x-5) + e^x) , dx$.",
          "a": "$= -\frac{2}{3}cos(3x+1) - 2sin(2x-5) + e^x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Mixed trig + exp. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff sin"
              },
              "b": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Inner sin"
              },
              "c": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff cos"
              },
              "e": {
                "type": "int",
                "min": 2,
                "max": 4,
                "step": 1,
                "description": "Inner cos"
              }
            },
            "constraints": [
              "a != 2 or b != 3 or c != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)",
                "3": "str(b)",
                "4": "str(c)"
              },
              "a": {}
            },
            "sourceValues": {
              "a": 2,
              "b": 3,
              "c": 4,
              "e": 2
            }
          },
          "slug": "in-032-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_032_h02",
          "q": "Find $int \frac{6sin 2x}{cos^2 2x} , dx$.",
          "a": "Not linear composite — this is $6sec 2x \tan 2x$, but rewrite as $-6 cdot (-sin 2x) cdot (cos 2x)^{-2}$. RCR with $g = cos 2x$: $= \frac{3}{cos 2x} + C = 3sec 2x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Trig quotient requiring rewrite as RCR — complex parameterisation."
          },
          "slug": "in-032-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_032_h03",
          "q": "Find $int (sin^2 x + cos^2 x + 3sin 4x) , dx$.",
          "a": "$sin^2 x + cos^2 x = 1$. So $= int (1 + 3sin 4x) , dx = x - \frac{3}{4}cos 4x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Identity simplification + linear composite. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of sin"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Inner coeff of sin"
              }
            },
            "constraints": [
              "k != 3 or a != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(k)",
                "4": "str(a)"
              },
              "a": {
                "3": "str(k)",
                "4": "str(a)"
              }
            },
            "sourceValues": {
              "k": 3,
              "a": 4
            }
          },
          "slug": "in-032-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_038",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Definite Integrals",
      "concept": "Definite Integral Evaluation",
      "pt": "Evaluating a definite integral of a polynomial or surd expression using FTC",
      "testing": "Testing: Anti-differentiate then substitute upper and lower bounds: F(b) - F(a)",
      "reason_bank": [
        "wrong_rule",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_038_e01",
          "q": "Evaluate $int_0^3 (2x + 1) , dx$.",
          "a": "$= [x^2 + x]_0^3 = (9 + 3) - 0 = 12$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Linear definite integral. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff of x"
              },
              "b": {
                "type": "int",
                "min": 0,
                "max": 4,
                "step": 1,
                "description": "Constant"
              },
              "lo": {
                "type": "int",
                "min": 0,
                "max": 2,
                "step": 1,
                "description": "Lower bound"
              },
              "hi": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Upper bound"
              }
            },
            "constraints": [
              "hi > lo",
              "a != 2 or b != 1 or hi != 3"
            ],
            "derived": {
              "result": {
                "expr": "a*hi**2/2 + b*hi - a*lo**2/2 - b*lo",
                "note": "F(hi) - F(lo)"
              }
            },
            "substitutions": {
              "q": {
                "2": "str(a)",
                "1": "str(b)",
                "0": "str(lo)",
                "3": "str(hi)"
              },
              "a": {
                "12": "str(result)"
              }
            },
            "sourceValues": {
              "a": 2,
              "b": 1,
              "lo": 0,
              "hi": 3
            }
          },
          "slug": "in-038-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_038_e02",
          "q": "Evaluate $int_1^2 3x^2 , dx$.",
          "a": "$= [x^3]_1^2 = 8 - 1 = 7$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Power rule definite. Verified: ∫₁² 3x² = 7.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coefficient"
              },
              "lo": {
                "type": "int",
                "min": 0,
                "max": 2,
                "step": 1,
                "description": "Lower"
              },
              "hi": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Upper"
              }
            },
            "constraints": [
              "hi > lo",
              "a != 3 or lo != 1 or hi != 2"
            ],
            "derived": {
              "result": {
                "expr": "a*(hi**3 - lo**3)/3",
                "note": "Definite integral"
              }
            },
            "substitutions": {
              "q": {
                "3": "str(a)",
                "1": "str(lo)",
                "2": "str(hi)"
              },
              "a": {
                "7": "str(result)"
              }
            },
            "sourceValues": {
              "a": 3,
              "lo": 1,
              "hi": 2
            }
          },
          "slug": "in-038-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_038_e03",
          "q": "Evaluate $int_0^4 (x^2 - 2x) , dx$.",
          "a": "$= [\frac{x^3}{3} - x^2]_0^4 = (\frac{64}{3} - 16) - 0 = \frac{16}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Quadratic definite. Verified.",
            "parameters": {
              "b": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff of x (negative)"
              },
              "hi": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Upper bound"
              }
            },
            "constraints": [
              "b != 2 or hi != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(b)",
                "4": "str(hi)"
              },
              "a": {
                "16": "str(hi**3//3)"
              }
            },
            "sourceValues": {
              "b": 2,
              "hi": 4
            }
          },
          "slug": "in-038-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_038_m01",
          "q": "[IMAGE: IN_038_m01_cubic_definite.png]\nEvaluate $int_{-1}^{2} (x^3 + 3x^2 - 1) , dx$.",
          "a": "$= [\frac{x^4}{4} + x^3 - x]_{-1}^{2} = (4 + 8 - 2) - (\frac{1}{4} - 1 + 1) = 10 - \frac{1}{4} = \frac{39}{4}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Cubic definite with negative lower. Verified: = 27/4.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Coeff of x^2"
              },
              "b": {
                "type": "int",
                "min": -3,
                "max": 3,
                "step": 1,
                "description": "Constant"
              },
              "lo": {
                "type": "int",
                "min": -3,
                "max": 0,
                "step": 1,
                "description": "Lower"
              },
              "hi": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Upper"
              }
            },
            "constraints": [
              "hi > lo",
              "a != 3 or b != -1 or lo != -1 or hi != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "1": "str(abs(b))"
              },
              "a": {}
            },
            "sourceValues": {
              "a": 3,
              "b": -1,
              "lo": -1,
              "hi": 2
            }
          },
          "slug": "in-038-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_038_m02",
          "q": "Evaluate $int_0^4 left(\frac{1}{2sqrt{x}} - 2x\right) , dx$.",
          "a": "$= [sqrt{x} - x^2]_0^4 = (2 - 16) - 0 = -14$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Surd term definite. Verified.",
            "parameters": {
              "hi": {
                "type": "int",
                "min": 1,
                "max": 9,
                "step": 1,
                "description": "Upper bound (perfect square)"
              }
            },
            "constraints": [
              "hi != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(hi)"
              },
              "a": {}
            },
            "sourceValues": {
              "hi": 4
            }
          },
          "slug": "in-038-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_038_m03",
          "q": "Evaluate $int_1^4 (3sqrt{x} - \frac{2}{x^2}) , dx$.",
          "a": "$= [2x^{3/2} + \frac{2}{x}]_1^4 = (16 + \frac{1}{2}) - (2 + 2) = \frac{25}{2}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Mixed powers. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of √x"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Numerator of 1/x^2"
              }
            },
            "constraints": [
              "a != 3 or b != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "2": "str(b)"
              },
              "a": {}
            },
            "sourceValues": {
              "a": 3,
              "b": 2
            }
          },
          "slug": "in-038-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_038_h01",
          "q": "Evaluate $int_{-2}^{1} (x^3 - 4x + 3) , dx$.",
          "a": "$= [\frac{x^4}{4} - 2x^2 + 3x]_{-2}^{1} = (\frac{1}{4} - 2 + 3) - (4 - 8 - 6) = \frac{5}{4} + 10 = \frac{45}{4}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Cubic with negative bounds. Verified.",
            "parameters": {
              "b": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Coeff of x (middle term)"
              },
              "c": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Constant"
              },
              "lo": {
                "type": "int",
                "min": -3,
                "max": -1,
                "step": 1,
                "description": "Lower"
              },
              "hi": {
                "type": "int",
                "min": 1,
                "max": 3,
                "step": 1,
                "description": "Upper"
              }
            },
            "constraints": [
              "hi > lo",
              "b != 4 or c != 3 or lo != -2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(b)",
                "3": "str(c)"
              },
              "a": {}
            },
            "sourceValues": {
              "b": 4,
              "c": 3,
              "lo": -2,
              "hi": 1
            }
          },
          "slug": "in-038-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_038_h02",
          "q": "Evaluate $int_1^9 \frac{x+1}{sqrt{x}} , dx$.",
          "a": "$= int_1^9 (x^{1/2} + x^{-1/2}) , dx = [\frac{2x^{3/2}}{3} + 2sqrt{x}]_1^9 = (18 + 6) - (\frac{2}{3} + 2) = \frac{64}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Rewrite fraction then integrate. Verified.",
            "parameters": {
              "hi": {
                "type": "int",
                "min": 4,
                "max": 16,
                "step": 1,
                "description": "Upper (perfect square)"
              }
            },
            "constraints": [
              "hi != 9"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "9": "str(hi)"
              },
              "a": {}
            },
            "sourceValues": {
              "hi": 9
            }
          },
          "slug": "in-038-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_038_h03",
          "q": "Evaluate $int_0^2 (e^x - x^2 + 3) , dx$.",
          "a": "$= [e^x - \frac{x^3}{3} + 3x]_0^2 = (e^2 - \frac{8}{3} + 6) - 1 = e^2 + \frac{7}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Mixed exp + polynomial definite. Verified.",
            "parameters": {
              "c": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Constant term"
              },
              "hi": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Upper bound"
              }
            },
            "constraints": [
              "c != 3 or hi != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(c)",
                "2": "str(hi)"
              },
              "a": {}
            },
            "sourceValues": {
              "c": 3,
              "hi": 2
            }
          },
          "slug": "in-038-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_039",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Definite Integrals",
      "concept": "Trigonometric Definite Integrals",
      "pt": "Evaluating definite integrals of trigonometric functions using exact values",
      "testing": "Testing: Anti-differentiate trig, substitute exact-value bounds (π/6, π/4, π/3, etc.)",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_039_e01",
          "q": "Evaluate $int_0^{pi} sin x , dx$.",
          "a": "$= [-cos x]_0^{pi} = (-cospi) - (-cos 0) = 1 + 1 = 2$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Standard reference integral — ∫₀^π sin x = 2."
          },
          "slug": "in-039-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_039_e02",
          "q": "Evaluate $int_0^{pi/2} cos x , dx$.",
          "a": "$= [sin x]_0^{pi/2} = 1 - 0 = 1$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Standard reference integral — ∫₀^(π/2) cos x = 1."
          },
          "slug": "in-039-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_039_e03",
          "q": "Evaluate $int_0^{pi/2} 3cos x , dx$.",
          "a": "$= [3sin x]_0^{pi/2} = 3(1) - 3(0) = 3$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Scaled trig definite. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 1,
                "max": 8,
                "step": 1,
                "description": "Coefficient"
              }
            },
            "constraints": [
              "k != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(k)"
              },
              "a": {
                "3": "str(k)"
              }
            },
            "sourceValues": {
              "k": 3
            }
          },
          "slug": "in-039-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_039_m01",
          "q": "Evaluate $int_{-pi}^{pi/2} cos 3x , dx$.",
          "a": "$= [\frac{1}{3}sin 3x]_{-pi}^{pi/2} = \frac{1}{3}(sin\frac{3pi}{2} - sin(-3pi)) = \frac{1}{3}(-1 - 0) = -\frac{1}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "cos(ax) with exact bounds. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Inner coefficient"
              }
            },
            "constraints": [
              "a != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)"
              },
              "a": {
                "3": "str(a)"
              }
            },
            "sourceValues": {
              "a": 3
            }
          },
          "slug": "in-039-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_039_m02",
          "q": "Evaluate $int_0^{pi/4} 2sin 2x , dx$.",
          "a": "$= [-cos 2x]_0^{pi/4} = -cos(pi/2) + cos 0 = 0 + 1 = 1$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "sin(2x) with π/4 bound. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Outer coefficient"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 4,
                "step": 1,
                "description": "Inner coefficient"
              }
            },
            "constraints": [
              "k != 2 or a != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(k)"
              },
              "a": {
                "2": "str(k)"
              }
            },
            "sourceValues": {
              "k": 2,
              "a": 2
            }
          },
          "slug": "in-039-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_039_m03",
          "q": "Evaluate $int_{pi/6}^{pi/2} 4cos x , dx$.",
          "a": "$= [4sin x]_{pi/6}^{pi/2} = 4(1) - 4(\frac{1}{2}) = 4 - 2 = 2$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "cos with π/6 lower bound. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 2,
                "description": "Coefficient"
              }
            },
            "constraints": [
              "k != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(k)"
              },
              "a": {
                "4": "str(k)",
                "2": "str(k//2)"
              }
            },
            "sourceValues": {
              "k": 4
            }
          },
          "slug": "in-039-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_039_h01",
          "q": "Evaluate $int_{pi/6}^{pi} sin x cos^2 x , dx$. (Use reverse chain rule.)",
          "a": "$g(x) = cos x$, $g'(x) = -sin x$. $= -\frac{1}{3}[cos^3 x]_{pi/6}^{pi} = -\frac{1}{3}((-1)^3 - (\frac{sqrt{3}}{2})^3) = -\frac{1}{3}(-1 - \frac{3sqrt{3}}{8}) = \frac{1}{3} + \frac{sqrt{3}}{8}$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Trig power composite definite with exact values — complex parameterisation."
          },
          "slug": "in-039-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_039_h02",
          "q": "Evaluate $int_0^{pi/3} (sin x + cos 2x) , dx$.",
          "a": "$= [-cos x + \frac{1}{2}sin 2x]_0^{pi/3} = (-\frac{1}{2} + \frac{sqrt{3}}{4}) - (-1 + 0) = \frac{1}{2} + \frac{sqrt{3}}{4}$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Mixed trig with exact values at π/3."
          },
          "slug": "in-039-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_039_h03",
          "q": "Evaluate $int_0^{pi} (2cos x - sin 2x) , dx$.",
          "a": "$= [2sin x + \frac{1}{2}cos 2x]_0^{pi} = (0 + \frac{1}{2}) - (0 + \frac{1}{2}) = 0$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Result is zero — good conceptual discussion point."
          },
          "slug": "in-039-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_033",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Anti-differentiation",
      "concept": "Reverse Chain Rule",
      "pt": "Reverse chain rule integration of exponential composite e^(g(x)) with g'(x) present",
      "testing": "Testing: Recognise g'(x)·e^(g(x)) pattern, integrate to e^(g(x))/a + C",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_033_e01",
          "q": "Find $int 2x , e^{x^2} , dx$.",
          "a": "$g(x) = x^2$, $g'(x) = 2x$ (present). $= e^{x^2} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Canonical example — g'(x) exactly matches."
          },
          "slug": "in-033-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_033_e02",
          "q": "Find $int 6x^2 , e^{2x^3} , dx$.",
          "a": "$g(x) = 2x^3$, $g'(x) = 6x^2$ (present). $= e^{2x^3} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "g'(x) present exactly. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Coefficient inside exponent"
              }
            },
            "constraints": [
              "a != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)",
                "6": "str(3*a)"
              },
              "a": {
                "2": "str(a)"
              }
            },
            "sourceValues": {
              "a": 2
            }
          },
          "slug": "in-033-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_033_e03",
          "q": "Find $int 4x , e^{2x^2+1} , dx$.",
          "a": "$g(x) = 2x^2+1$, $g'(x) = 4x$ (present). $= e^{2x^2+1} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "g'(x) matches outer factor. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Coeff of x^2"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Constant in exponent"
              }
            },
            "constraints": [
              "a != 2 or b != 1"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)",
                "1": "str(b)",
                "4": "str(2*a)"
              },
              "a": {
                "2": "str(a)",
                "1": "str(b)"
              }
            },
            "sourceValues": {
              "a": 2,
              "b": 1
            }
          },
          "slug": "in-033-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_033_m01",
          "q": "Find $int 6x^2 , e^{4x^3} , dx$.",
          "a": "$g(x) = 4x^3$, $g'(x) = 12x^2$. Adjust: $\frac{6}{12} = \frac{1}{2}$. $= \frac{1}{2}e^{4x^3} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Adjustment factor needed. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 10,
                "step": 2,
                "description": "Outer coeff"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Coeff of x^3 in exponent"
              }
            },
            "constraints": [
              "k != 6 or a != 4"
            ],
            "derived": {
              "adj": {
                "expr": "round(k/(3*a),4)",
                "note": "Adjustment factor k/(3a)"
              }
            },
            "substitutions": {
              "q": {
                "6": "str(k)",
                "4": "str(a)"
              },
              "a": {
                "4": "str(a)"
              }
            },
            "sourceValues": {
              "k": 6,
              "a": 4
            }
          },
          "slug": "in-033-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_033_m02",
          "q": "Find $int x , e^{-3x^2} , dx$.",
          "a": "$g(x) = -3x^2$, $g'(x) = -6x$. Adjust: $\frac{1}{-6}$. $= -\frac{1}{6}e^{-3x^2} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Negative inner with adjustment. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": -5,
                "max": -1,
                "step": 1,
                "description": "Coeff of x^2 (negative)"
              }
            },
            "constraints": [
              "a != -3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(abs(a))"
              },
              "a": {
                "6": "str(abs(2*a))",
                "3": "str(abs(a))"
              }
            },
            "sourceValues": {
              "a": -3
            }
          },
          "slug": "in-033-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_033_m03",
          "q": "Find $int cos x , e^{sin x} , dx$.",
          "a": "$g(x) = sin x$, $g'(x) = cos x$ (present). $= e^{sin x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Trig inner function — specific case, minimal parameterisation."
          },
          "slug": "in-033-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_033_h01",
          "q": "Find $int (4x+2) , e^{x^2+x} , dx$.",
          "a": "$g(x) = x^2+x$, $g'(x) = 2x+1$. Factor: $4x+2 = 2(2x+1)$. $= 2e^{x^2+x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Factor out before RCR. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Multiplier of g'(x)"
              }
            },
            "constraints": [
              "a != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(2*a)",
                "2": "str(a)"
              },
              "a": {
                "2": "str(a)"
              }
            },
            "sourceValues": {
              "a": 2
            }
          },
          "slug": "in-033-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_033_h02",
          "q": "Find $int \frac{e^{sqrt{x}}}{2sqrt{x}} , dx$.",
          "a": "$g(x) = sqrt{x}$, $g'(x) = \frac{1}{2sqrt{x}}$ (present). $= e^{sqrt{x}} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Surd exponent — specific structure, not easily parameterised."
          },
          "slug": "in-033-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_033_h03",
          "q": "Find $int 3x^2(x^3+1)^4 , e^{(x^3+1)^5} , dx$.",
          "a": "$g = (x^3+1)^5$, $g' = 5(x^3+1)^4 cdot 3x^2 = 15x^2(x^3+1)^4$. Adjust: $\frac{3}{15} = \frac{1}{5}$. $= \frac{1}{5}e^{(x^3+1)^5} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Deeply nested composite — complex for parameterisation."
          },
          "slug": "in-033-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_035",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Anti-differentiation",
      "concept": "Reverse Chain Rule",
      "pt": "Reverse chain rule with trig power: ∫cos(x)·sin^n(x) dx or ∫sin(x)·cos^n(x) dx",
      "testing": "Testing: Identify g(x)=sin(x) or cos(x), check g'(x) is the other trig function as factor",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_035_e01",
          "q": "Find $int cos x sin^3 x , dx$.",
          "a": "$g(x) = sin x$, $g'(x) = cos x$. $= \frac{sin^4 x}{4} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "sin^n · cos pattern. Verified.",
            "parameters": {
              "n": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Power of sin"
              }
            },
            "constraints": [
              "n != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(n)"
              },
              "a": {
                "4": "str(n+1)"
              }
            },
            "sourceValues": {
              "n": 3
            }
          },
          "slug": "in-035-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_035_e02",
          "q": "Find $int sin x cos^2 x , dx$.",
          "a": "$g(x) = cos x$, $g'(x) = -sin x$. $= -\frac{cos^3 x}{3} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "cos^n · sin pattern (note negative). Verified.",
            "parameters": {
              "n": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Power of cos"
              }
            },
            "constraints": [
              "n != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(n)"
              },
              "a": {
                "3": "str(n+1)"
              }
            },
            "sourceValues": {
              "n": 2
            }
          },
          "slug": "in-035-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_035_e03",
          "q": "Find $int 4cos x sin x , dx$.",
          "a": "$g(x) = sin x$, $g'(x) = cos x$. $= 4 cdot \frac{sin^2 x}{2} = 2sin^2 x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "k · cos · sin. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 2,
                "description": "Coefficient"
              }
            },
            "constraints": [
              "k != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(k)"
              },
              "a": {
                "2": "str(k//2)"
              }
            },
            "sourceValues": {
              "k": 4
            }
          },
          "slug": "in-035-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_035_m01",
          "q": "Find $int -cos x sin^4 x , dx$.",
          "a": "$= -\frac{sin^5 x}{5} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Negative coefficient. Verified.",
            "parameters": {
              "n": {
                "type": "int",
                "min": 3,
                "max": 7,
                "step": 1,
                "description": "Power"
              }
            },
            "constraints": [
              "n != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(n)"
              },
              "a": {
                "5": "str(n+1)"
              }
            },
            "sourceValues": {
              "n": 4
            }
          },
          "slug": "in-035-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_035_m02",
          "q": "Find $int sin 4x cos^3 4x , dx$.",
          "a": "$g(x) = cos 4x$, $g'(x) = -4sin 4x$. $= -\frac{cos^4 4x}{16} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Composite argument. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Argument coefficient"
              },
              "n": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Power of cos"
              }
            },
            "constraints": [
              "a != 4 or n != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(a)",
                "3": "str(n)"
              },
              "a": {
                "4": "str(a)",
                "16": "str(a*(n+1))"
              }
            },
            "sourceValues": {
              "a": 4,
              "n": 3
            }
          },
          "slug": "in-035-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_035_m03",
          "q": "Find $int 6cos 2x sin^2 2x , dx$.",
          "a": "$g(x) = sin 2x$, $g'(x) = 2cos 2x$. $= \frac{6}{2} cdot \frac{sin^3 2x}{3} = sin^3 2x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Adjustment factor with composite. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 2,
                "max": 10,
                "step": 2,
                "description": "Outer coefficient"
              },
              "a": {
                "type": "int",
                "min": 2,
                "max": 4,
                "step": 1,
                "description": "Inner coefficient"
              },
              "n": {
                "type": "int",
                "min": 2,
                "max": 4,
                "step": 1,
                "description": "Power"
              }
            },
            "constraints": [
              "k != 6 or a != 2 or n != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "6": "str(k)",
                "2": "str(a)"
              },
              "a": {}
            },
            "sourceValues": {
              "k": 6,
              "a": 2,
              "n": 2
            }
          },
          "slug": "in-035-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_035_h01",
          "q": "Find $int \frac{sin x}{cos^3 x} , dx$.",
          "a": "$= int sin x cdot (cos x)^{-3} , dx$. $g = cos x$, $g' = -sin x$. $= \frac{(cos x)^{-2}}{2} = \frac{1}{2cos^2 x} + C = \frac{1}{2}sec^2 x + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Trig quotient as negative power RCR. Verified.",
            "parameters": {
              "n": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Power of cos in denominator"
              }
            },
            "constraints": [
              "n != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(n)"
              },
              "a": {}
            },
            "sourceValues": {
              "n": 3
            }
          },
          "slug": "in-035-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_035_h02",
          "q": "Find $int cos^5 x sin x , dx$.",
          "a": "$g = cos x$, $g' = -sin x$. $= -\frac{cos^6 x}{6} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "High power. Verified.",
            "parameters": {
              "n": {
                "type": "int",
                "min": 3,
                "max": 8,
                "step": 1,
                "description": "Power of cos"
              }
            },
            "constraints": [
              "n != 5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "5": "str(n)"
              },
              "a": {
                "6": "str(n+1)"
              }
            },
            "sourceValues": {
              "n": 5
            }
          },
          "slug": "in-035-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_035_h03",
          "q": "Find $int \frac{3cos x}{sin^4 x} , dx$.",
          "a": "$g = sin x$, $g' = cos x$. $= 3 cdot \frac{(sin x)^{-3}}{-3} = -\frac{1}{sin^3 x} + C$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Quotient with RCR. Verified.",
            "parameters": {
              "k": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Numerator coefficient"
              },
              "n": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Power in denominator"
              }
            },
            "constraints": [
              "k != 3 or n != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(k)",
                "4": "str(n)"
              },
              "a": {}
            },
            "sourceValues": {
              "k": 3,
              "n": 4
            }
          },
          "slug": "in-035-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_040",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Fundamental Theorem",
      "concept": "FTC Part 1",
      "pt": "Recognising that d/dx of an integral with two constant limits equals zero",
      "testing": "Testing: If both limits are constants, the integral is a number, so its derivative is 0",
      "reason_bank": [
        "wrong_rule",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_040_e01",
          "q": "Find $\frac{d}{dx} int_1^2 (3t^2 - 4t + 2) , dt$.",
          "a": "$= 0$. Both limits are constants, so the integral evaluates to a fixed number. The derivative of a constant is zero.",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Conceptual — answer is always 0 regardless of integrand."
          },
          "slug": "in-040-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_040_e02",
          "q": "Find $\frac{d}{dx} int_0^5 e^t sin t , dt$.",
          "a": "$= 0$. The integral from 0 to 5 is a number (constant). $\frac{d}{dx}(\text{constant}) = 0$.",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Same concept — always 0."
          },
          "slug": "in-040-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_040_e03",
          "q": "Find $\frac{d}{dx} int_{-3}^{7} \frac{1}{t^2+1} , dt$.",
          "a": "$= 0$. Constant limits → constant value → derivative is zero.",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Same concept — always 0."
          },
          "slug": "in-040-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [],
      "hard": []
    },
    {
      "pt_id": "IN_041",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Fundamental Theorem",
      "concept": "FTC Part 1 with Chain Rule",
      "pt": "Differentiating ∫₀^{g(x)} f(t) dt using FTC1 with chain rule: f(g(x))·g'(x)",
      "testing": "Testing: d/dx ∫_a^{g(x)} f(t) dt = f(g(x)) · g'(x)",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_041_e01",
          "q": "Find $\frac{d}{dx} int_0^{x^2} (3t+1) , dt$.",
          "a": "By FTC1 with chain rule: $f(g(x)) cdot g'(x) = (3x^2+1) cdot 2x = 6x^3 + 2x$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "FTC1 chain rule with x^2 upper. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coeff of t in integrand"
              },
              "b": {
                "type": "int",
                "min": 0,
                "max": 4,
                "step": 1,
                "description": "Constant in integrand"
              }
            },
            "constraints": [
              "a != 3 or b != 1"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "1": "str(b)"
              },
              "a": {
                "3": "str(a)",
                "1": "str(b)",
                "6": "str(2*a)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": 1
            }
          },
          "slug": "in-041-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_041_e02",
          "q": "Find $\frac{d}{dx} int_1^{x^3} sqrt{t} , dt$.",
          "a": "By FTC1 + chain: $sqrt{x^3} cdot 3x^2 = x^{3/2} cdot 3x^2 = 3x^{7/2}$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Surd with x^3 upper — specific structure."
          },
          "slug": "in-041-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_041_e03",
          "q": "Find $\frac{dy}{dx}$ if $y = int_0^{2x} t^2 , dt$.",
          "a": "By FTC1 + chain: $(2x)^2 cdot 2 = 8x^2$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Linear upper limit. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Coefficient of x in upper limit"
              },
              "n": {
                "type": "int",
                "min": 2,
                "max": 4,
                "step": 1,
                "description": "Power in integrand"
              }
            },
            "constraints": [
              "a != 2 or n != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)"
              },
              "a": {
                "8": "str(a**(n+1))"
              }
            },
            "sourceValues": {
              "a": 2,
              "n": 2
            }
          },
          "slug": "in-041-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_041_m01",
          "q": "Find $\frac{dy}{dx}$ if $y = int_0^{x^2} \frac{1}{sqrt{t-2}} , dt$.",
          "a": "$= \frac{1}{sqrt{x^2-2}} cdot 2x = \frac{2x}{sqrt{x^2-2}}$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Surd integrand with x^2 upper — specific structure."
          },
          "slug": "in-041-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_041_m02",
          "q": "Find $\frac{dy}{dx}$ if $y = int_{-1}^{e^{3x}} \tan(4t) , dt$.",
          "a": "$= \tan(4e^{3x}) cdot 3e^{3x}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Exponential upper limit. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Coeff inside tan"
              },
              "b": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Coeff in exponent"
              }
            },
            "constraints": [
              "a != 4 or b != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(a)",
                "3": "str(b)"
              },
              "a": {
                "4": "str(a)",
                "3": "str(b)"
              }
            },
            "sourceValues": {
              "a": 4,
              "b": 3
            }
          },
          "slug": "in-041-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_041_m03",
          "q": "Find $\frac{dy}{dx}$ if $y = int_0^{sin x} e^{t^2} , dt$.",
          "a": "$= e^{sin^2 x} cdot cos x$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Trig upper limit — specific structure."
          },
          "slug": "in-041-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_041_h01",
          "q": "Find $\frac{d}{dx} int_{x}^{x^2} 3t , dt$.",
          "a": "Split: $int_0^{x^2} 3t , dt - int_0^x 3t , dt$. Differentiate each: $3x^2 cdot 2x - 3x cdot 1 = 6x^3 - 3x$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Both limits variable. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Coefficient of t"
              }
            },
            "constraints": [
              "a != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)"
              },
              "a": {
                "6": "str(2*a)",
                "3": "str(a)"
              }
            },
            "sourceValues": {
              "a": 3
            }
          },
          "slug": "in-041-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_041_h02",
          "q": "If $F(x) = int_0^{x^2+x} cos t , dt$, find $F'(x)$.",
          "a": "$= cos(x^2+x) cdot (2x+1)$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Quadratic upper limit — specific structure."
          },
          "slug": "in-041-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_041_h03",
          "q": "Find $\frac{d}{dx} int_{2x}^{5} e^{t^2} , dt$.",
          "a": "$= -\frac{d}{dx} int_5^{2x} e^{t^2} , dt = -e^{4x^2} cdot 2 = -2e^{4x^2}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Variable in LOWER limit. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Coefficient of x in lower limit"
              }
            },
            "constraints": [
              "a != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)"
              },
              "a": {
                "2": "str(a)",
                "4": "str(a**2)"
              }
            },
            "sourceValues": {
              "a": 2
            }
          },
          "slug": "in-041-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_042",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Finding area between curve and x-axis when curve crosses axis (requires splitting into positive and negative regions)",
      "testing": "Testing: Find x-intercepts, split integral at crossings, take absolute values of each piece",
      "reason_bank": [
        "wrong_rule",
        "sign_error",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_042_e01",
          "q": "[IMAGE: IN_042_e01_area_crossing.png]\nFind the area bounded by $y = x^2 - 4$, the $x$-axis, $x = 0$ and $x = 3$.",
          "a": "Crosses at $x = 2$. Area $= |int_0^2 (x^2-4),dx| + int_2^3 (x^2-4),dx = |{-\frac{16}{3}}| + \frac{2}{3} = \frac{16}{3} + \frac{2}{3} = 6$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Quadratic crossing axis. Verified: areas sum to 6.",
            "parameters": {
              "c": {
                "type": "int",
                "min": 1,
                "max": 9,
                "step": 1,
                "description": "Constant (so y=x^2-c, crosses at √c)"
              },
              "hi": {
                "type": "int",
                "min": 3,
                "max": 5,
                "step": 1,
                "description": "Upper bound"
              }
            },
            "constraints": [
              "c != 4 or hi != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(c)",
                "3": "str(hi)"
              },
              "a": {
                "4": "str(c)",
                "2": "str(int(c**0.5))",
                "3": "str(hi)"
              }
            },
            "sourceValues": {
              "c": 4,
              "hi": 3
            }
          },
          "slug": "in-042-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_042_e02",
          "q": "[IMAGE: IN_042_e02_area_x_times_x_minus_2.png]\nFind the area enclosed between $y = x(x-2)$ and the $x$-axis from $x = 0$ to $x = 3$.",
          "a": "Crosses at $x = 0, 2$. Area $= |int_0^2 (x^2-2x),dx| + int_2^3 (x^2-2x),dx = \frac{4}{3} + \frac{4}{3} = \frac{8}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Factored quadratic. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Root (y=x(x-a))"
              },
              "hi": {
                "type": "int",
                "min": 3,
                "max": 6,
                "step": 1,
                "description": "Upper bound"
              }
            },
            "constraints": [
              "a != 2 or hi != 3",
              "hi > a"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)",
                "3": "str(hi)"
              },
              "a": {
                "2": "str(a)",
                "3": "str(hi)"
              }
            },
            "sourceValues": {
              "a": 2,
              "hi": 3
            }
          },
          "slug": "in-042-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_042_e03",
          "q": "Find the area between $y = x^2 - 1$ and the $x$-axis from $x = -1$ to $x = 2$.",
          "a": "Crosses at $x = pm 1$. Area $= |int_{-1}^{1} (x^2-1),dx| + int_1^2 (x^2-1),dx = \frac{4}{3} + \frac{4}{3} = \frac{8}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Symmetric crossing — good conceptual example."
          },
          "slug": "in-042-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_042_m01",
          "q": "[IMAGE: IN_042_m01_cubic_total_area.png]\nFind the total area bounded by $y = x^3 - 4x$ and the $x$-axis.",
          "a": "Roots: $x = 0, pm 2$. By symmetry: Area $= 2|int_0^2 (x^3-4x),dx| = 2 \times 4 = 8$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Cubic with three roots. Verified.",
            "parameters": {
              "b": {
                "type": "int",
                "min": 1,
                "max": 9,
                "step": 1,
                "description": "Coefficient (y = x^3 - bx)"
              }
            },
            "constraints": [
              "b != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(b)"
              },
              "a": {
                "4": "str(b)",
                "2": "str(int(b**0.5))"
              }
            },
            "sourceValues": {
              "b": 4
            }
          },
          "slug": "in-042-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_042_m02",
          "q": "Find the area between $y = sin x$ and the $x$-axis from $x = 0$ to $x = 2pi$.",
          "a": "$sin x geq 0$ on $[0,pi]$, $leq 0$ on $[pi,2pi]$. Area $= int_0^{pi} sin x ,dx + |int_{pi}^{2pi} sin x ,dx| = 2 + 2 = 4$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Standard trig area — result always 4."
          },
          "slug": "in-042-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_042_m03",
          "q": "[IMAGE: IN_042_m03_quadratic_crossing.png]\nFind the area bounded by $y = 2x^2 - 6x$, the $x$-axis, $x = 0$ and $x = 4$.",
          "a": "Crosses at $x = 3$. Area $= |int_0^3 (2x^2-6x),dx| + int_3^4 (2x^2-6x),dx = 9 + \frac{10}{3} = \frac{37}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Quadratic with non-trivial crossing. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Coeff of x^2"
              },
              "b": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 2,
                "description": "Coeff of x"
              }
            },
            "constraints": [
              "a != 2 or b != 6"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)",
                "6": "str(b)"
              },
              "a": {
                "3": "str(b//(2*a))",
                "2": "str(a)",
                "6": "str(b)"
              }
            },
            "sourceValues": {
              "a": 2,
              "b": 6
            }
          },
          "slug": "in-042-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_042_h01",
          "q": "Find the total area enclosed between $y = x^3 - 3x^2 + 2x$ and the $x$-axis.",
          "a": "Roots: $x(x-1)(x-2) = 0$, so $x = 0, 1, 2$. Area $= int_0^1 (x^3-3x^2+2x),dx + |int_1^2 (x^3-3x^2+2x),dx| = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Three-root cubic — specific factorisation."
          },
          "slug": "in-042-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_042_h02",
          "q": "[IMAGE: IN_042_h02_exp_minus_3_crossing.png]\nFind the area bounded by $y = e^x - 3$, the $x$-axis, $x = 0$ and $x = 2$.",
          "a": "Crosses at $e^x = 3$, $x = ln 3$. Area $= |int_0^{ln 3} (e^x-3),dx| + int_{ln 3}^2 (e^x-3),dx$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Exponential crossing. Verified.",
            "parameters": {
              "c": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Constant (y = e^x - c)"
              }
            },
            "constraints": [
              "c != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(c)"
              },
              "a": {
                "3": "str(c)"
              }
            },
            "sourceValues": {
              "c": 3
            }
          },
          "slug": "in-042-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_042_h03",
          "q": "Find the area between $y = cos x$ and the $x$-axis from $x = 0$ to $x = \frac{3pi}{2}$.",
          "a": "$cos x geq 0$ on $[0,pi/2]$, $leq 0$ on $[pi/2, 3pi/2]$. Area $= 1 + 2 = 3$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Standard trig area with well-known values."
          },
          "slug": "in-042-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_044",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Applications of Integration",
      "concept": "Setting Up Integrals",
      "pt": "Writing the integral expression (without evaluating) for a shaded region shown on a graph",
      "testing": "Testing: Identify upper and lower curves, determine bounds, write ∫(upper - lower) dx",
      "reason_bank": [
        "setup_error",
        "interpretation_mixup",
        "sign_error",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_044_e01",
          "q": "[IMAGE: IN_044_e01_area_between_parabola_and_line.png]\nThe region between $y = x^2$ and $y = 4$ from $x = 0$ to $x = 2$ is shaded. Write the integral for this area (do not evaluate).",
          "a": "Area $= int_0^2 (4 - x^2) , dx$. (Upper curve $y=4$ minus lower curve $y=x^2$.)",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Simple upper-lower setup. Verified.",
            "parameters": {
              "c": {
                "type": "int",
                "min": 1,
                "max": 9,
                "step": 1,
                "description": "Constant (y = c)"
              },
              "hi": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Upper x-bound"
              }
            },
            "constraints": [
              "c != 4 or hi != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(c)",
                "2": "str(hi)"
              },
              "a": {
                "4": "str(c)",
                "2": "str(hi)"
              }
            },
            "sourceValues": {
              "c": 4,
              "hi": 2
            }
          },
          "slug": "in-044-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_044_e02",
          "q": "Write the integral for the area between $y = x$ and $y = x^2$ from $x = 0$ to $x = 1$.",
          "a": "For $0 leq x leq 1$: $x geq x^2$, so Area $= int_0^1 (x - x^2) , dx$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Specific pair of curves — standard example."
          },
          "slug": "in-044-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_044_e03",
          "q": "Write the integral for the area under $y = 3x + 2$ from $x = 1$ to $x = 4$.",
          "a": "Area $= int_1^4 (3x + 2) , dx$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Simple area under line. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "Slope"
              },
              "b": {
                "type": "int",
                "min": 0,
                "max": 5,
                "step": 1,
                "description": "y-intercept"
              },
              "lo": {
                "type": "int",
                "min": 0,
                "max": 3,
                "step": 1,
                "description": "Lower"
              },
              "hi": {
                "type": "int",
                "min": 3,
                "max": 6,
                "step": 1,
                "description": "Upper"
              }
            },
            "constraints": [
              "a != 3 or b != 2 or lo != 1 or hi != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(a)",
                "2": "str(b)",
                "1": "str(lo)",
                "4": "str(hi)"
              },
              "a": {
                "3": "str(a)",
                "2": "str(b)",
                "1": "str(lo)",
                "4": "str(hi)"
              }
            },
            "sourceValues": {
              "a": 3,
              "b": 2,
              "lo": 1,
              "hi": 4
            }
          },
          "slug": "in-044-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_044_m01",
          "q": "The region between $y = e^x$ and $y = 9 - x^2$ from $x = -1$ to $x = 1$ is shaded. Write the integral expression for the area.",
          "a": "$9 - x^2 > e^x$ on $[-1,1]$, so Area $= int_{-1}^{1} (9 - x^2 - e^x) , dx$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Specific curve pair — need to verify ordering."
          },
          "slug": "in-044-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_044_m02",
          "q": "Write the integral for the area between $y = sqrt{x}$ and $y = x/2$ from their intersection points.",
          "a": "Intersections: $sqrt{x} = x/2 Rightarrow x = 0, 4$. $sqrt{x} geq x/2$ on $[0,4]$. Area $= int_0^4 (sqrt{x} - \frac{x}{2}) , dx$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Requires finding intersections."
          },
          "slug": "in-044-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_044_m03",
          "q": "Write the integral expression for the total area between $y = x^2 - 4$ and the $x$-axis from $x = 0$ to $x = 3$.",
          "a": "Crosses at $x = 2$. Area $= left|int_0^2 (x^2 - 4),dx\right| + int_2^3 (x^2 - 4),dx$ (must split and take absolute value of negative part).",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Split at crossing. Verified.",
            "parameters": {
              "c": {
                "type": "int",
                "min": 1,
                "max": 9,
                "step": 1,
                "description": "Constant (y=x^2-c)"
              }
            },
            "constraints": [
              "c != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(c)"
              },
              "a": {
                "4": "str(c)",
                "2": "str(int(c**0.5))"
              }
            },
            "sourceValues": {
              "c": 4
            }
          },
          "slug": "in-044-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_044_h01",
          "q": "Three curves $y = x$, $y = 2-x$, and $y = 2x^2 - 4x$ bound a region between $x = 1$ and $x = 2.5$. The top boundary changes at $x = 1$. Write the integral(s) for the shaded area.",
          "a": "Need to identify which curve is on top in each sub-interval. Split at intersections and write separate integrals for each piece.",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Multi-curve region requiring sub-interval analysis."
          },
          "slug": "in-044-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_044_h02",
          "q": "Write an integral expression for the area between $y = ln x$ and $y = 2 - x$ from their point of intersection to $x = 2$.",
          "a": "Find intersection numerically or by inspection. Write $int_a^2 (\text{upper} - \text{lower}) , dx$ with appropriate curves.",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Transcendental intersection — not cleanly parameterisable."
          },
          "slug": "in-044-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_044_h03",
          "q": "The area between $y = f(x)$ and the $x$-axis from $x = 0$ to $x = 5$ consists of a semicircle of radius 2 above the axis and a triangle of base 3 and height 4 below it. Write and evaluate the total area.",
          "a": "Total area $= \frac{1}{2}pi(2)^2 + \frac{1}{2}(3)(4) = 2pi + 6$. (Signed integral would be $2pi - 6$.)",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Geometric area from description. Verified.",
            "parameters": {
              "r": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Semicircle radius"
              },
              "b": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Triangle base"
              },
              "h": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Triangle height"
              }
            },
            "constraints": [
              "r != 2 or b != 3 or h != 4"
            ],
            "derived": {
              "area": {
                "expr": "round(0.5*3.14159*r**2 + 0.5*b*h, 2)",
                "note": "Total area"
              }
            },
            "substitutions": {
              "q": {
                "2": "str(r)",
                "3": "str(b)",
                "4": "str(h)"
              },
              "a": {
                "2": "str(r)",
                "3": "str(b)",
                "4": "str(h)"
              }
            },
            "sourceValues": {
              "r": 2,
              "b": 3,
              "h": 4
            }
          },
          "slug": "in-044-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_043",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Applications of Integration",
      "concept": "Area Calculations",
      "pt": "Finding area between curve and y-axis (or complement area) using rectangle minus integral",
      "testing": "Testing: Area = rectangle area - ∫ f(x) dx (complement method)",
      "reason_bank": [
        "setup_error",
        "interpretation_mixup",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_043_e01",
          "q": "[IMAGE: IN_043_e01_rectangle_minus_parabola.png]\nFind the area between $y = x^2$, the $y$-axis, and $y = 4$ for $x geq 0$.",
          "a": "Rectangle: $2 \times 4 = 8$. Under curve: $int_0^2 x^2 , dx = \frac{8}{3}$. Area $= 8 - \frac{8}{3} = \frac{16}{3}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Rectangle minus integral. Verified.",
            "parameters": {
              "c": {
                "type": "int",
                "min": 1,
                "max": 9,
                "step": 1,
                "description": "y-value (y = c, x-bound = √c)"
              }
            },
            "constraints": [
              "c != 4"
            ],
            "derived": {
              "xb": {
                "expr": "round(c**0.5, 4)",
                "note": "x-bound = √c"
              }
            },
            "substitutions": {
              "q": {
                "4": "str(c)"
              },
              "a": {
                "4": "str(c)",
                "2": "str(int(c**0.5))"
              }
            },
            "sourceValues": {
              "c": 4
            }
          },
          "slug": "in-043-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_043_e02",
          "q": "[IMAGE: IN_043_e02_cubic_complement.png]\nThe curve $y = 4x^3$ passes through $(1, 4)$. Find the area between the curve, the $y$-axis, and $y = 4$.",
          "a": "Rectangle: $1 \times 4 = 4$. Under curve: $int_0^1 4x^3 , dx = 1$. Area $= 4 - 1 = 3$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Cubic complement. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 2,
                "max": 8,
                "step": 2,
                "description": "Coefficient of x^3"
              }
            },
            "constraints": [
              "a != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(a)"
              },
              "a": {
                "4": "str(a)"
              }
            },
            "sourceValues": {
              "a": 4
            }
          },
          "slug": "in-043-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_043_e03",
          "q": "Find the area between $y = sqrt{x}$, the $y$-axis, and $y = 3$ for $x geq 0$.",
          "a": "$y = 3$ when $x = 9$. Rectangle: $9 \times 3 = 27$. Under curve: $int_0^9 sqrt{x} , dx = 18$. Area $= 27 - 18 = 9$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Surd complement. Verified.",
            "parameters": {
              "c": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "y-value"
              }
            },
            "constraints": [
              "c != 3"
            ],
            "derived": {
              "xb": {
                "expr": "c**2",
                "note": "x-bound = c^2"
              }
            },
            "substitutions": {
              "q": {
                "3": "str(c)"
              },
              "a": {
                "9": "str(c**2)",
                "3": "str(c)"
              }
            },
            "sourceValues": {
              "c": 3
            }
          },
          "slug": "in-043-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_043_m01",
          "q": "Find the shaded area between $y = e^x$, the $y$-axis, $y = 1$, and $y = e^2$.",
          "a": "$y = e^x Rightarrow x = ln y$. Area $= int_1^{e^2} ln y , dy = [yln y - y]_1^{e^2} = (2e^2 - e^2) - (0 - 1) = e^2 + 1$.\nAlternatively: rectangle $2 \times e^2$ minus $int_0^2 e^x , dx = 2e^2 - (e^2-1) = e^2 + 1$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Exponential complement — specific values."
          },
          "slug": "in-043-m01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_043_m02",
          "q": "The area between $y = x^3$, the $y$-axis, and $y = 8$ is shaded. Find this area.",
          "a": "$y = 8$ at $x = 2$. Rectangle: $2 \times 8 = 16$. $int_0^2 x^3 , dx = 4$. Area $= 16 - 4 = 12$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Cubic complement. Verified.",
            "parameters": {
              "c": {
                "type": "int",
                "min": 1,
                "max": 27,
                "step": 1,
                "description": "y-value (must be perfect cube)"
              },
              "hi": {
                "type": "int",
                "min": 1,
                "max": 3,
                "step": 1,
                "description": "x-bound (cube root of c)"
              }
            },
            "constraints": [
              "c != 8 or hi != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "8": "str(c)",
                "2": "str(hi)"
              },
              "a": {
                "16": "str(c*hi)",
                "8": "str(c)",
                "2": "str(hi)"
              }
            },
            "sourceValues": {
              "c": 8,
              "hi": 2
            }
          },
          "slug": "in-043-m02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_043_m03",
          "q": "Find the area enclosed between $y = 2x$, $y = 0$, and $x + y = 6$.",
          "a": "Intersections: $(0,0)$, $(2,4)$, $(6,0)$. Area $= int_0^2 2x , dx + int_2^6 (6-x) , dx = 4 + 8 = 12$. Or: triangle area $= \frac{1}{2}(6)(4) = 12$.",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Multi-boundary region — specific geometry."
          },
          "slug": "in-043-m03",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_043_h01",
          "q": "The region bounded by $y = sin x$, $y = 1$, and the $y$-axis (for $0 leq x leq pi/2$) is shaded. Find the area.",
          "a": "Rectangle: $\frac{pi}{2} \times 1$. Under curve: $int_0^{pi/2} sin x , dx = 1$. Area $= \frac{pi}{2} - 1$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Trig complement with pi — specific values."
          },
          "slug": "in-043-h01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_043_h02",
          "q": "[IMAGE: IN_043_h02_x4_complement.png]\nFind the area between $y = x^4$, the $y$-axis, and $y = 16$.",
          "a": "$x = 2$ when $y = 16$. Rectangle: $2 \times 16 = 32$. $int_0^2 x^4 , dx = \frac{32}{5}$. Area $= 32 - \frac{32}{5} = \frac{128}{5}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Higher power complement. Verified.",
            "parameters": {
              "n": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Power"
              },
              "c": {
                "type": "int",
                "min": 8,
                "max": 32,
                "step": 8,
                "description": "y-value"
              }
            },
            "constraints": [
              "n != 4 or c != 16"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(n)",
                "16": "str(c)"
              },
              "a": {
                "16": "str(c)"
              }
            },
            "sourceValues": {
              "n": 4,
              "c": 16
            }
          },
          "slug": "in-043-h02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_043_h03",
          "q": "Find the area between $y = e^{2x}$, the $y$-axis, $y = 1$ and $y = e^4$.",
          "a": "Rectangle: $2 \times e^4$. $int_0^2 e^{2x} , dx = \frac{e^4 - 1}{2}$. Area $= 2e^4 - \frac{e^4-1}{2} = \frac{3e^4+1}{2}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Exponential complement. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 3,
                "step": 1,
                "description": "Coefficient in exponent"
              }
            },
            "constraints": [
              "a != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)"
              },
              "a": {
                "2": "str(a)",
                "4": "str(2*a)"
              }
            },
            "sourceValues": {
              "a": 2
            }
          },
          "slug": "in-043-h03",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_045",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Applications of Integration",
      "concept": "Finding Parameters",
      "pt": "Finding polynomial coefficients from turning point condition and definite integral condition",
      "testing": "Testing: Set f'(turning point) = 0 for one equation, evaluate ∫f(x)dx = value for second equation, solve simultaneously",
      "reason_bank": [
        "setup_error",
        "algebra_slip",
        "substitution_error",
        "sign_error",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_045_e01",
          "q": "$f(x) = ax^2 + bx$ has a turning point at $x = 2$ and $int_0^4 f(x) , dx = 16$. Find $a$ and $b$.",
          "a": "$f'(x) = 2ax + b$. $f'(2) = 4a + b = 0 Rightarrow b = -4a$.\n$int_0^4 (ax^2 + bx) , dx = [\frac{ax^3}{3} + \frac{bx^2}{2}]_0^4 = \frac{64a}{3} + 8b = 16$.\nSubstitute $b = -4a$: $\frac{64a}{3} - 32a = 16 Rightarrow -\frac{32a}{3} = 16 Rightarrow a = -\frac{3}{2}$, $b = 6$.",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Simultaneous from TP + integral. Verified.",
            "parameters": {
              "tp": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Turning point x-value"
              },
              "hi": {
                "type": "int",
                "min": 2,
                "max": 6,
                "step": 1,
                "description": "Upper integral bound"
              },
              "val": {
                "type": "int",
                "min": 8,
                "max": 24,
                "step": 4,
                "description": "Integral value"
              }
            },
            "constraints": [
              "tp != 2 or hi != 4 or val != 16"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(tp)",
                "4": "str(hi)",
                "16": "str(val)"
              },
              "a": {
                "2": "str(tp)",
                "4": "str(hi)",
                "16": "str(val)"
              }
            },
            "sourceValues": {
              "tp": 2,
              "hi": 4,
              "val": 16
            }
          },
          "slug": "in-045-e01",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_045_m01",
          "q": "$f(x) = ax^2 + bx + 1$ has a stationary point at $x = 3$ and $int_0^6 f(x) , dx = 24$. Find $a$ and $b$.",
          "a": "$f'(3) = 6a + b = 0$. $int_0^6 (ax^2+bx+1),dx = 72a + 18b + 6 = 24$. Solve: $a = \frac{1}{3}$, $b = -2$.",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "With constant term. Verified.",
            "parameters": {
              "tp": {
                "type": "int",
                "min": 1,
                "max": 5,
                "step": 1,
                "description": "Turning point"
              },
              "hi": {
                "type": "int",
                "min": 4,
                "max": 8,
                "step": 2,
                "description": "Upper bound"
              },
              "c": {
                "type": "int",
                "min": 0,
                "max": 3,
                "step": 1,
                "description": "Constant term"
              },
              "val": {
                "type": "int",
                "min": 12,
                "max": 36,
                "step": 6,
                "description": "Integral value"
              }
            },
            "constraints": [
              "tp != 3 or hi != 6 or val != 24"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(tp)",
                "6": "str(hi)",
                "1": "str(c)",
                "24": "str(val)"
              },
              "a": {
                "3": "str(tp)",
                "6": "str(hi)",
                "24": "str(val)"
              }
            },
            "sourceValues": {
              "tp": 3,
              "hi": 6,
              "c": 1,
              "val": 24
            }
          },
          "slug": "in-045-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_045_h01",
          "q": "$f(x) = ax^3 + bx^2$ has an inflection point at $x = 1$ and $int_0^3 f(x) , dx = 9$. Find $a$ and $b$.",
          "a": "$f''(x) = 6ax + 2b$. $f''(1) = 6a + 2b = 0 Rightarrow b = -3a$.\n$int_0^3 (ax^3+bx^2),dx = \frac{81a}{4} + 9b = \frac{81a}{4} - 27a = -\frac{27a}{4} = 9 Rightarrow a = -\frac{4}{3}$, $b = 4$.",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Cubic with inflection condition. Verified.",
            "parameters": {
              "ip": {
                "type": "int",
                "min": 1,
                "max": 3,
                "step": 1,
                "description": "Inflection point x"
              },
              "hi": {
                "type": "int",
                "min": 2,
                "max": 5,
                "step": 1,
                "description": "Upper bound"
              },
              "val": {
                "type": "int",
                "min": 6,
                "max": 18,
                "step": 3,
                "description": "Integral value"
              }
            },
            "constraints": [
              "ip != 1 or hi != 3 or val != 9"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "1": "str(ip)",
                "3": "str(hi)",
                "9": "str(val)"
              },
              "a": {}
            },
            "sourceValues": {
              "ip": 1,
              "hi": 3,
              "val": 9
            }
          },
          "slug": "in-045-h01",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "IN_037",
      "topic": "Integration and the Fundamental Theorem of Calculus",
      "subtopic": "Definite Integrals",
      "concept": "Numerical Integration",
      "pt": "Completing a table of function values to set up a rectangle approximation",
      "testing": "Testing: Evaluate f(x) at evenly spaced x-values, then use values for rectangle sum",
      "reason_bank": [
        "substitution_error",
        "setup_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [
        {
          "qid": "IN_037_e01",
          "q": "[IMAGE: IN_037_e01_left_rectangles.png]\nComplete the table for $f(x) = x^2 + 1$ at $x = 0, 1, 2, 3, 4$ to approximate $int_0^4 f(x),dx$ using 4 rectangles of width 1.",
          "a": "$f(0)=1, f(1)=2, f(2)=5, f(3)=10, f(4)=17$.\nLeft sum: $1+2+5+10 = 18$. Right sum: $2+5+10+17 = 34$.",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Table completion + rectangle sums. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 3,
                "step": 1,
                "description": "Coefficient of x^2"
              },
              "c": {
                "type": "int",
                "min": 0,
                "max": 4,
                "step": 1,
                "description": "Constant"
              }
            },
            "constraints": [
              "a != 1 or c != 1"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "1": "str(c)"
              },
              "a": {}
            },
            "sourceValues": {
              "a": 1,
              "c": 1
            }
          },
          "slug": "in-037-e01",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_037_e02",
          "q": "Complete the table for $f(x) = \frac{1}{x+1}$ at $x = 0, 1, 2, 3, 4$.",
          "a": "$f(0)=1, f(1)=0.5, f(2)=\frac{1}{3}, f(3)=0.25, f(4)=0.2$",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Specific function — 1/(x+1) values."
          },
          "slug": "in-037-e02",
          "angle_mode": "radians"
        },
        {
          "qid": "IN_037_e03",
          "q": "Complete the table for $f(x) = 2x + 3$ at $x = 0, 2, 4, 6$ to approximate $int_0^6 f(x),dx$ using 3 rectangles of width 2.",
          "a": "$f(0)=3, f(2)=7, f(4)=11, f(6)=15$.\nLeft sum: $2(3+7+11) = 42$. Right sum: $2(7+11+15) = 66$.",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Linear function table. Verified.",
            "parameters": {
              "a": {
                "type": "int",
                "min": 1,
                "max": 4,
                "step": 1,
                "description": "Slope"
              },
              "b": {
                "type": "int",
                "min": 1,
                "max": 6,
                "step": 1,
                "description": "y-intercept"
              }
            },
            "constraints": [
              "a != 2 or b != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(a)",
                "3": "str(b)"
              },
              "a": {
                "3": "str(b)"
              }
            },
            "sourceValues": {
              "a": 2,
              "b": 3
            }
          },
          "slug": "in-037-e03",
          "angle_mode": "radians"
        }
      ],
      "medium": [
        {
          "qid": "IN_037_m01",
          "q": "Complete the table for $f(x) = sqrt{x}$ at $x = 0, 1, 4, 9, 16$ and use left rectangles with the given (non-uniform) widths to approximate $int_0^{16} sqrt{x} , dx$.",
          "a": "$f(0)=0, f(1)=1, f(4)=2, f(9)=3, f(16)=4$.\nWidths: 1, 3, 5, 7. Left sum: $0(1) + 1(3) + 2(5) + 3(7) = 34$. (Exact: $\frac{128}{3} approx 42.67$.)",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Non-uniform widths — specific setup."
          },
          "slug": "in-037-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": [
        {
          "qid": "IN_037_h01",
          "q": "Create a table for $f(x) = e^{-x}$ at $x = 0, 0.5, 1.0, 1.5, 2.0$ and use it to find the average of left and right rectangle sums with width 0.5.",
          "a": "$f(0)=1, f(0.5)approx 0.607, f(1)approx 0.368, f(1.5)approx 0.223, f(2)approx 0.135$.\nLeft: $0.5(1+0.607+0.368+0.223) = 1.099$. Right: $0.5(0.607+0.368+0.223+0.135) = 0.667$. Average: $0.883$. (Exact: $1 - e^{-2} approx 0.865$.)",
          "seedSpec": {
            "version": 2,
            "seedable": false,
            "reason": "Exponential decay — specific decimal values."
          },
          "slug": "in-037-h01",
          "angle_mode": "radians"
        }
      ]
    },
    {
      "pt_id": "KN_018",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating area bounded by derivative curve and x-axis using absolute value",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_018_m01",
          "q": "The derivative of $f(x)$ is $f'(x) = x^2 - 1$ for $0 \\leq x \\leq 2$. Find the area between $y = f'(x)$ and the $x$-axis.",
          "a": "$f'(x) = 0$ at $x = 1$. Area $= \\left|\\int_0^1 (x^2-1) dx\\right| + \\int_1^2 (x^2-1) dx = \\frac{2}{3} + \\frac{4}{3} = 2$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 1 (source: 2)"
              }
            },
            "constraints": [
              "v1 != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v1)"
              },
              "a": {
                "2": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 2
            }
          },
          "slug": "kn-018-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_034",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating volume by integration (finding bounds from curve equation)",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "interpretation_mixup",
        "sign_error",
        "substitution_error",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_034_m01",
          "q": "Find the volume when $y = 4 - x^2$ (for $y \\geq 0$) is rotated about the $x$-axis.",
          "a": "$y = 0$ when $x = \\pm 2$. $V = \\pi\\int_{-2}^{2} (4-x^2)^2 dx = \\pi\\int_{-2}^{2} (16 - 8x^2 + x^4) dx = \\pi[16x - \\frac{8x^3}{3} + \\frac{x^5}{5}]_{-2}^{2} = \\frac{512\\pi}{15}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 1 (source: 4)"
              }
            },
            "constraints": [
              "v1 != 4"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "4": "str(v1)"
              },
              "a": {
                "4": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 4
            }
          },
          "slug": "kn-034-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_037",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Kinematics Integration",
      "pt": "Completing table of function values for rectangle approximation",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "interpretation_mixup",
        "sign_error",
        "substitution_error",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_037_m01",
          "q": "Complete the table for $f(x) = \\frac{1}{x+1}$ to approximate $\\int_0^4 f(x) dx$ using 4 rectangles of width 1:\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|---|\n| $f(x)$ | ? | ? | ? | ? | ? |",
          "a": "$f(0) = 1$, $f(1) = \\frac{1}{2}$, $f(2) = \\frac{1}{3}$, $f(3) = \\frac{1}{4}$, $f(4) = \\frac{1}{5}$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 1 (source: 4)"
              },
              "v2": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 2 (source: 2)"
              },
              "v3": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 3 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 4 or v2 != 2 or v3 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v2)",
                "3": "str(v3)",
                "4": "str(v1)"
              },
              "a": {
                "2": "str(v2)",
                "3": "str(v3)",
                "4": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 4,
              "v2": 2,
              "v3": 3
            }
          },
          "slug": "kn-037-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_043",
      "topic": "Integrals",
      "subtopic": "Fundamental Theorem",
      "concept": "Kinematics Integration",
      "pt": "Determining function from integral equation using fundamental theorem and solving ODE",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_043_m01",
          "q": "If $F(x) = \\int_0^x (3t^2 - 2) dt + 5$, find $F(2)$.",
          "a": "$F(2) = [t^3 - 2t]_0^2 + 5 = (8-4) + 5 = 9$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 1 (source: 3)"
              },
              "v2": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 2 (source: 2)"
              },
              "v3": {
                "type": "int",
                "min": 0,
                "max": 10,
                "step": 1,
                "description": "Value 3 (source: 5)"
              }
            },
            "constraints": [
              "v1 != 3 or v2 != 2 or v3 != 5"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v2)",
                "3": "str(v1)",
                "5": "str(v3)"
              },
              "a": {
                "2": "str(v2)",
                "3": "str(v1)",
                "5": "str(v3)"
              }
            },
            "sourceValues": {
              "v1": 3,
              "v2": 2,
              "v3": 5
            }
          },
          "slug": "kn-043-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_046",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Kinematics Integration",
      "pt": "Determining polynomial coefficients from turning point and area condition",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "sign_error",
        "wrong_rule",
        "interpretation_mixup",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_046_m01",
          "q": "$f(x) = ax^2 + bx$ has a turning point at $x = 2$ and $\\int_0^4 f(x) dx = 16$. Find $a$ and $b$.",
          "a": "$f'(x) = 2ax + b = 0$ at $x=2$: $4a + b = 0$ ①. $\\int_0^4 (ax^2 + bx) dx = \\frac{64a}{3} + 8b = 16$ ②. From ①: $b = -4a$. Sub into ②: $\\frac{64a}{3} - 32a = 16 \\Rightarrow -\\frac{32a}{3} = 16 \\Rightarrow a = -\\frac{3}{2}$, $b = 6$. Check: $\\int_0^4 (-\\frac{3}{2}x^2 + 6x)dx = [-\\frac{x^3}{2} + 3x^2]_0^4 = -32 + 48 = 16$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 1 (source: 2)"
              },
              "v2": {
                "type": "int",
                "min": 8,
                "max": 24,
                "step": 1,
                "description": "Value 2 (source: 16)"
              }
            },
            "constraints": [
              "v1 != 2 or v2 != 16"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v1)",
                "16": "str(v2)"
              },
              "a": {
                "2": "str(v1)",
                "16": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 2,
              "v2": 16
            }
          },
          "slug": "kn-046-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_050",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Kinematics Integration",
      "pt": "Evaluating definite integral of transformed trigonometric function",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_050_m01",
          "q": "Given $\\int_0^{\\pi} \\sin(x) dx = 2$, evaluate $\\int_0^{\\pi} [3\\sin(x) + 1] dx$.",
          "a": "$3\\int_0^{\\pi} \\sin(x) dx + \\int_0^{\\pi} 1 \\, dx = 3(2) + \\pi = 6 + \\pi \\approx 9.142$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 1 (source: 2)"
              },
              "v2": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 2 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 2 or v2 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v1)",
                "3": "str(v2)"
              },
              "a": {
                "2": "str(v1)",
                "3": "str(v2)"
              }
            },
            "sourceValues": {
              "v1": 2,
              "v2": 3
            }
          },
          "slug": "kn-050-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_064",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Kinematics Integration",
      "pt": "Integrating exponential function over specified bounds",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "missing_chain_factor",
        "substitution_error",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_064_m01",
          "q": "Evaluate $\\int_0^2 3e^{-x} dx$.",
          "a": "$[-3e^{-x}]_0^2 = -3e^{-2} + 3 = 3(1 - e^{-2}) \\approx 2.594$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -2,
                "max": 8,
                "step": 1,
                "description": "Value 1 (source: 3)"
              }
            },
            "constraints": [
              "v1 != 3"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "3": "str(v1)"
              },
              "a": {
                "3": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 3
            }
          },
          "slug": "kn-064-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_068",
      "topic": "Integrals",
      "subtopic": "Applications of Integration",
      "concept": "Kinematics Integration",
      "pt": "Inverse volume problem: finding height/level from given volume",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "interpretation_mixup",
        "sign_error",
        "substitution_error",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_068_m01",
          "q": "A container has cross-sectional area $A(h) = \\pi h$ at height $h$. The volume up to height $H$ is $V = \\int_0^H \\pi h \\, dh$. Find the height when $V = 8\\pi$.",
          "a": "$V = \\pi\\left[\\frac{h^2}{2}\\right]_0^H = \\frac{\\pi H^2}{2} = 8\\pi \\Rightarrow H^2 = 16 \\Rightarrow H = 4$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": 3,
                "max": 13,
                "step": 1,
                "description": "Value 1 (source: 8)"
              }
            },
            "constraints": [
              "v1 != 8"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "8": "str(v1)"
              },
              "a": {
                "8": "str(v1)"
              }
            },
            "sourceValues": {
              "v1": 8
            }
          },
          "slug": "kn-068-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_070",
      "topic": "Integrals",
      "subtopic": "Definite Integrals",
      "concept": "Kinematics Integration",
      "pt": "Numerical integration approximation (trapezoidal rule)",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "interpretation_mixup",
        "sign_error",
        "substitution_error",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_070_m01",
          "q": "Use the trapezoidal rule with 4 strips to approximate $\\int_0^2 e^{x^2} dx$ given:\n| $x$ | 0 | 0.5 | 1.0 | 1.5 | 2.0 |\n|-----|---|---|---|---|---|\n| $e^{x^2}$ | 1 | 1.284 | 2.718 | 9.488 | 54.598 |",
          "a": "$T = \\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + f(x_4)] = \\frac{0.5}{2}[1 + 2(1.284) + 2(2.718) + 2(9.488) + 54.598] = 0.25 \\times 82.578 \\approx 20.64$",
          "seedSpec": {
            "version": 2,
            "seedable": true,
            "reason": "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
            "parameters": {
              "v1": {
                "type": "int",
                "min": -1,
                "max": 9,
                "step": 1,
                "description": "Value 1 (source: 4)"
              },
              "v2": {
                "type": "float",
                "min": 1,
                "max": 2,
                "step": 0.05,
                "description": "Value 2 (source: 1.5)"
              },
              "v3": {
                "type": "int",
                "min": -3,
                "max": 7,
                "step": 1,
                "description": "Value 3 (source: 2)"
              },
              "v4": {
                "type": "float",
                "min": 0.78,
                "max": 1.78,
                "step": 0.05,
                "description": "Value 4 (source: 1.284)"
              },
              "v5": {
                "type": "float",
                "min": 2.22,
                "max": 3.22,
                "step": 0.05,
                "description": "Value 5 (source: 2.718)"
              },
              "v6": {
                "type": "float",
                "min": 8.99,
                "max": 9.99,
                "step": 0.05,
                "description": "Value 6 (source: 9.488)"
              }
            },
            "constraints": [
              "v1 != 4 or v2 != 1.5 or v3 != 2"
            ],
            "derived": {},
            "substitutions": {
              "q": {
                "2": "str(v3)",
                "4": "str(v1)",
                "1.5": "str(v2)",
                "1.284": "str(v4)",
                "2.718": "str(v5)",
                "9.488": "str(v6)"
              },
              "a": {
                "2": "str(v3)",
                "4": "str(v1)",
                "1.5": "str(v2)",
                "1.284": "str(v4)",
                "2.718": "str(v5)",
                "9.488": "str(v6)"
              }
            },
            "sourceValues": {
              "v1": 4,
              "v2": 1.5,
              "v3": 2,
              "v4": 1.284,
              "v5": 2.718,
              "v6": 9.488
            }
          },
          "slug": "kn-070-m01",
          "angle_mode": "radians"
        }
      ],
      "hard": []
    }
  ],
  "defaults": {
    "angle_mode": "radians"
  }
};
