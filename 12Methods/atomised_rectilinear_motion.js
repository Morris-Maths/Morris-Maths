// ======================================================================
// ATOMISED PRACTICE — ATOMISED_RECTILINEAR_MOTION
// Topic: Rectilinear Motion
// 23 PTs (misclassified PTs relocated to correct topic files)
// Subtopics: Kinematics: General, Kinematics: Differentiation, Kinematics: Integration
// Unquoted keys for WSH compatibility
// ======================================================================

var ATOMISED_RECTILINEAR_MOTION = {
  questions: [
    {
      pt_id: "KN_001",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Calculations",
      pt: "Evaluating acceleration at given value for t",
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
                  qid: "KN_001_m01",
                  q: "Given $v(t) = 6t^2 - 4t + 1$, find the acceleration at $t = 2$.",
                  a: "$a(t) = v'(t) = 12t - 4$. $a(2) = 20$ m/s²",
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
                              },
                              v2: {
                                    type: "int",
                                    min: -1,
                                    max: 9,
                                    step: 1,
                                    description: "Value 2 (source: 4)"
                              },
                              v3: {
                                    type: "int",
                                    min: -3,
                                    max: 7,
                                    step: 1,
                                    description: "Value 3 (source: 2)"
                              }
                        },
                        constraints: [
                              "v1 != 6 or v2 != 4 or v3 != 2"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v3)",
                                    4: "str(v2)",
                                    6: "str(v1)"
                              },
                              a: {
                                    2: "str(v3)",
                                    4: "str(v2)",
                                    6: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 6,
                              v2: 4,
                              v3: 2
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_002",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Calculations",
      pt: "Evaluating displacement at given value for t",
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
                  qid: "KN_002_m01",
                  q: "Given $x(t) = t^3 - 6t^2 + 9t + 2$, find the displacement at $t = 3$.",
                  a: "$x(3) = 27 - 54 + 27 + 2 = 2$ units",
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
                              },
                              v2: {
                                    type: "int",
                                    min: 4,
                                    max: 14,
                                    step: 1,
                                    description: "Value 2 (source: 9)"
                              },
                              v3: {
                                    type: "int",
                                    min: -3,
                                    max: 7,
                                    step: 1,
                                    description: "Value 3 (source: 2)"
                              },
                              v4: {
                                    type: "int",
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 4 (source: 3)"
                              }
                        },
                        constraints: [
                              "v1 != 6 or v2 != 9 or v3 != 2"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v3)",
                                    3: "str(v4)",
                                    6: "str(v1)",
                                    9: "str(v2)"
                              },
                              a: {
                                    2: "str(v3)",
                                    3: "str(v4)",
                                    6: "str(v1)",
                                    9: "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 6,
                              v2: 9,
                              v3: 2,
                              v4: 3
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_003",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Calculations",
      pt: "Evaluating speed at given value for t",
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
                  qid: "KN_003_m01",
                  q: "Given $v(t) = t^2 - 5t + 4$, find the speed at $t = 3$.",
                  a: "$v(3) = 9 - 15 + 4 = -2$ m/s. Speed $= |v(3)| = 2$ m/s.",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                    description: "Value 1 (source: 5)"
                              },
                              v2: {
                                    type: "int",
                                    min: -1,
                                    max: 9,
                                    step: 1,
                                    description: "Value 2 (source: 4)"
                              },
                              v3: {
                                    type: "int",
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 3 (source: 3)"
                              }
                        },
                        constraints: [
                              "v1 != 5 or v2 != 4 or v3 != 3"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    3: "str(v3)",
                                    4: "str(v2)",
                                    5: "str(v1)"
                              },
                              a: {
                                    3: "str(v3)",
                                    4: "str(v2)",
                                    5: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 5,
                              v2: 4,
                              v3: 3
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_004",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Calculations",
      pt: "Evaluating velocity at given value for t",
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
                  qid: "KN_004_m01",
                  q: "Given $x(t) = 4t - t^2$, find the velocity at $t = 1$.",
                  a: "$v(t) = x'(t) = 4 - 2t$. $v(1) = 2$ m/s",
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
                              }
                        },
                        constraints: [
                              "v1 != 4"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    4: "str(v1)"
                              },
                              a: {
                                    4: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 4
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_005",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Determining speeding up or slowing down from signs of velocity and acceleration",
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
                  qid: "KN_005_m01",
                  q: "At time $t = 2$, $v(2) = -3$ m/s and $a(2) = -5$ m/s². Is the particle speeding up or slowing down?",
                  a: "Since $v$ and $a$ have the same sign (both negative), the particle is **speeding up** (speed is increasing).",
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
                                    min: -8,
                                    max: 2,
                                    step: 1,
                                    description: "Value 2 (source: -3)"
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
                              "v1 != 2 or v2 != -3 or v3 != -5"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v1)",
                                    "-3": "str(v2)",
                                    "-5": "str(v3)"
                              },
                              a: {
                                    2: "str(v1)",
                                    "-3": "str(v2)",
                                    "-5": "str(v3)"
                              }
                        },
                        sourceValues: {
                              v1: 2,
                              v2: -3,
                              v3: -5
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_006",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding acceleration function by differentiating velocity function",
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
                  qid: "KN_006_m01",
                  q: "Given $v(t) = 5\\sin(2t)$, find the acceleration function.",
                  a: "$a(t) = v'(t) = 10\\cos(2t)$",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                    description: "Value 1 (source: 5)"
                              },
                              v2: {
                                    type: "int",
                                    min: -3,
                                    max: 7,
                                    step: 1,
                                    description: "Value 2 (source: 2)"
                              }
                        },
                        constraints: [
                              "v1 != 5 or v2 != 2"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v2)",
                                    5: "str(v1)"
                              },
                              a: {
                                    2: "str(v2)",
                                    5: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 5,
                              v2: 2
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_007",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding maximum/minimum displacement or velocity using calculus",
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
                  qid: "KN_007_m01",
                  q: "A particle has velocity $v(t) = 6t - t^2$ for $t \\geq 0$. Find the maximum velocity.",
                  a: "$a(t) = 6 - 2t = 0 \\Rightarrow t = 3$. $a'(t) = -2 < 0$ (max). $v_{max} = v(3) = 18 - 9 = 9$ m/s.",
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
      pt_id: "KN_008",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding velocity function by differentiating displacement function",
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
                  qid: "KN_008_m01",
                  q: "A particle's displacement is $x(t) = 3t^2 - 2t + 5$. Find the velocity function.",
                  a: "$v(t) = x'(t) = 6t - 2$",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 1 (source: 3)"
                              },
                              v2: {
                                    type: "int",
                                    min: -3,
                                    max: 7,
                                    step: 1,
                                    description: "Value 2 (source: 2)"
                              },
                              v3: {
                                    type: "int",
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                    description: "Value 3 (source: 5)"
                              }
                        },
                        constraints: [
                              "v1 != 3 or v2 != 2 or v3 != 5"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v2)",
                                    3: "str(v1)",
                                    5: "str(v3)"
                              },
                              a: {
                                    2: "str(v2)",
                                    3: "str(v1)",
                                    5: "str(v3)"
                              }
                        },
                        sourceValues: {
                              v1: 3,
                              v2: 2,
                              v3: 5
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_009",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding when displacement function has stationary point (velocity = 0)",
      testing: "",
      reason_bank: [
            "wrong_rule",
            "setup_error",
            "substitution_error",
            "sign_error",
            "interpretation_mixup",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_009_m01",
                  q: "Given $x(t) = t^3 - 12t + 5$, find when the particle is momentarily at rest.",
                  a: "$v(t) = 3t^2 - 12 = 0 \\Rightarrow t^2 = 4 \\Rightarrow t = 2$ (taking $t > 0$)",
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
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                    description: "Value 2 (source: 5)"
                              }
                        },
                        constraints: [
                              "v1 != 12 or v2 != 5"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    5: "str(v2)",
                                    12: "str(v1)"
                              },
                              a: {
                                    5: "str(v2)",
                                    12: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 12,
                              v2: 5
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_010",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Finding when velocity function has stationary point (acceleration = 0)",
      testing: "",
      reason_bank: [
            "wrong_rule",
            "setup_error",
            "substitution_error",
            "sign_error",
            "interpretation_mixup",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_010_m01",
                  q: "Given $v(t) = t^3 - 6t^2 + 9t$, find when acceleration is zero.",
                  a: "$a(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$. So $t = 1$ and $t = 3$.",
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
                              "v1 != 6 or v2 != 9"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    6: "str(v1)",
                                    9: "str(v2)"
                              },
                              a: {
                                    6: "str(v1)",
                                    9: "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 6,
                              v2: 9
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_011",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Differentiation",
      concept: "Kinematics Differentiation",
      pt: "Interpreting acceleration graph to describe velocity behaviour",
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
                  qid: "KN_011_m01",
                  q: "An acceleration-time graph shows $a(t) > 0$ for $0 < t < 3$ and $a(t) < 0$ for $t > 3$. If $v(0) = 0$, describe the velocity behaviour.",
                  a: "Velocity increases from 0 for $0 < t < 3$ (since $a > 0$), reaches its maximum at $t = 3$, then decreases for $t > 3$ (since $a < 0$).",
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
      pt_id: "KN_012",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Anti-differentiating $e^{ax}$ with initial condition to find function value",
      testing: "",
      reason_bank: [
            "wrong_rule",
            "sign_error",
            "missing_chain_factor",
            "algebra_slip",
            "substitution_error",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_012_m01",
                  q: "Given $f'(x) = 4e^{-2x}$ and $f(0) = 1$, find $f(1)$.",
                  a: "$f(x) = -2e^{-2x} + C$. $f(0) = -2 + C = 1 \\Rightarrow C = 3$. $f(1) = -2e^{-2} + 3 \\approx 2.729$",
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
                                    min: -7,
                                    max: 3,
                                    step: 1,
                                    description: "Value 2 (source: -2)"
                              }
                        },
                        constraints: [
                              "v1 != 4 or v2 != -2"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    4: "str(v1)",
                                    "-2": "str(v2)"
                              },
                              a: {
                                    4: "str(v1)",
                                    "-2": "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 4,
                              v2: -2
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_013",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Anti-differentiating polynomial",
      testing: "",
      reason_bank: [
            "wrong_rule",
            "sign_error",
            "missing_chain_factor",
            "algebra_slip",
            "substitution_error",
            "not_sure"
      ],
      easy: [],
      medium: [
            {
                  qid: "KN_013_m01",
                  q: "Find $\\int (6x^2 - 4x + 3) dx$.",
                  a: "$2x^3 - 2x^2 + 3x + C$",
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
                              },
                              v2: {
                                    type: "int",
                                    min: -1,
                                    max: 9,
                                    step: 1,
                                    description: "Value 2 (source: 4)"
                              },
                              v3: {
                                    type: "int",
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 3 (source: 3)"
                              }
                        },
                        constraints: [
                              "v1 != 6 or v2 != 4 or v3 != 3"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    3: "str(v3)",
                                    4: "str(v2)",
                                    6: "str(v1)"
                              },
                              a: {
                                    3: "str(v3)",
                                    4: "str(v2)",
                                    6: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 6,
                              v2: 4,
                              v3: 3
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_014",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Anti-differentiating trigonometric function with linear argument and initial condition",
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
                  qid: "KN_014_m01",
                  q: "Given $f'(x) = 3\\cos(2x)$ and $f(0) = 5$, find $f(x)$.",
                  a: "$f(x) = \\frac{3}{2}\\sin(2x) + C$. $f(0) = 0 + C = 5$, so $C = 5$. $f(x) = \\frac{3}{2}\\sin(2x) + 5$.",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 1 (source: 3)"
                              },
                              v2: {
                                    type: "int",
                                    min: -3,
                                    max: 7,
                                    step: 1,
                                    description: "Value 2 (source: 2)"
                              },
                              v3: {
                                    type: "int",
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                    description: "Value 3 (source: 5)"
                              }
                        },
                        constraints: [
                              "v1 != 3 or v2 != 2 or v3 != 5"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v2)",
                                    3: "str(v1)",
                                    5: "str(v3)"
                              },
                              a: {
                                    2: "str(v2)",
                                    3: "str(v1)",
                                    5: "str(v3)"
                              }
                        },
                        sourceValues: {
                              v1: 3,
                              v2: 2,
                              v3: 5
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_020",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Calculating average speed over a time interval",
      testing: "Average speed = total distance travelled / time",
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
                  qid: "KN_020_m01",
                  q: "A particle has velocity $v(t) = 2t - 4$ m/s. Find the average speed over $0 \\leq t \\leq 6$.",
                  a: "$v = 0$ when $t = 2$. Distance $= \\left|\\int_0^2 (2t-4)dt\\right| + \\int_2^6 (2t-4)dt = |-4| + 16 = 20$ m. Average speed $= \\frac{20}{6} = \\frac{10}{3} \\approx 3.33$ m/s.",
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
                                    min: -1,
                                    max: 9,
                                    step: 1,
                                    description: "Value 2 (source: 4)"
                              },
                              v3: {
                                    type: "int",
                                    min: 1,
                                    max: 11,
                                    step: 1,
                                    description: "Value 3 (source: 6)"
                              }
                        },
                        constraints: [
                              "v1 != 2 or v2 != 4 or v3 != 6"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v1)",
                                    4: "str(v2)",
                                    6: "str(v3)"
                              },
                              a: {
                                    2: "str(v1)",
                                    4: "str(v2)",
                                    6: "str(v3)"
                              }
                        },
                        sourceValues: {
                              v1: 2,
                              v2: 4,
                              v3: 6
                        }
                  }
            },
            {
                  qid: "KN_020_m02",
                  q: "A particle has velocity $v(t) = t^2 - 4t + 3$ m/s. Find the average speed over $0 \\leq t \\leq 4$.",
                  a: "$v = 0$ at $t = 1, 3$. Distance $= \\left|\\int_0^1 v\\,dt\\right| + \\left|\\int_1^3 v\\,dt\\right| + \\int_3^4 v\\,dt = \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$ m. Average speed $= \\frac{4}{4} = 1$ m/s.",
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
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 2 (source: 3)"
                              }
                        },
                        constraints: [
                              "v1 != 4 or v2 != 3"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    3: "str(v2)",
                                    4: "str(v1)"
                              },
                              a: {
                                    3: "str(v2)",
                                    4: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 4,
                              v2: 3
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_021",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Calculating average velocity over a time interval",
      testing: "Average velocity = change in displacement / change in time",
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
                  qid: "KN_021_m01",
                  q: "A particle has displacement $x(t) = t^3 - 6t$ metres. Find the average velocity over the interval $1 \\leq t \\leq 3$.",
                  a: "$x(3) = 27-18 = 9$, $x(1) = 1-6 = -5$. Average velocity $= \\frac{x(3)-x(1)}{3-1} = \\frac{9-(-5)}{2} = 7$ m/s",
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
                              "v1 != 6 or v2 != 3"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    3: "str(v2)",
                                    6: "str(v1)"
                              },
                              a: {
                                    3: "str(v2)",
                                    6: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 6,
                              v2: 3
                        }
                  }
            },
            {
                  qid: "KN_021_m02",
                  q: "A particle has displacement $x(t) = 4\\sin(t)$ metres. Find the average velocity over $0 \\leq t \\leq \\pi$.",
                  a: "$x(\\pi) = 0$, $x(0) = 0$. Average velocity $= \\frac{0-0}{\\pi} = 0$ m/s. (The particle returns to its starting position.)",
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
                              }
                        },
                        constraints: [
                              "v1 != 4"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    4: "str(v1)"
                              },
                              a: {
                                    4: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 4
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_022",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Calculating change in displacement between two specific times using displacement function",
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
                  qid: "KN_022_m01",
                  q: "A particle has displacement $x(t) = 2t^2 - 5t + 1$ metres. Find the displacement during the 3rd second (i.e. from $t = 2$ to $t = 3$).",
                  a: "$x(3) = 18 - 15 + 1 = 4$, $x(2) = 8 - 10 + 1 = -1$. Displacement $= 4 - (-1) = 5$ m.",
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
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                    description: "Value 2 (source: 5)"
                              },
                              v3: {
                                    type: "int",
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 3 (source: 3)"
                              }
                        },
                        constraints: [
                              "v1 != 2 or v2 != 5 or v3 != 3"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v1)",
                                    3: "str(v3)",
                                    5: "str(v2)"
                              },
                              a: {
                                    2: "str(v1)",
                                    3: "str(v3)",
                                    5: "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 2,
                              v2: 5,
                              v3: 3
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_030",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Calculating total change in displacement between two values for t using integration of velocity",
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
                  qid: "KN_030_m01",
                  q: "Given $v(t) = 3t^2 - 6t$, find the change in displacement from $t = 0$ to $t = 4$.",
                  a: "$\\int_0^4 (3t^2 - 6t) dt = [t^3 - 3t^2]_0^4 = 64 - 48 = 16$ units",
                  seedSpec: {
                        version: 2,
                        seedable: true,
                        reason: "Kinematics. Derivatives/integrals verified by SymPy. Numeric values parameterised. Answers must be recomputed for each variant.",
                        parameters: {
                              v1: {
                                    type: "int",
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 1 (source: 3)"
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
                                    min: -1,
                                    max: 9,
                                    step: 1,
                                    description: "Value 3 (source: 4)"
                              }
                        },
                        constraints: [
                              "v1 != 3 or v2 != 6 or v3 != 4"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    3: "str(v1)",
                                    4: "str(v3)",
                                    6: "str(v2)"
                              },
                              a: {
                                    3: "str(v1)",
                                    4: "str(v3)",
                                    6: "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 3,
                              v2: 6,
                              v3: 4
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_031",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Calculating total change in velocity using integration of acceleration",
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
                  qid: "KN_031_m01",
                  q: "Given $a(t) = 2\\cos(t)$, find the change in velocity from $t = 0$ to $t = \\frac{\\pi}{2}$.",
                  a: "$\\Delta v = \\int_0^{\\pi/2} 2\\cos(t) dt = [2\\sin(t)]_0^{\\pi/2} = 2$ m/s",
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
},

    {
      pt_id: "KN_032",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Calculating total distance travelled using integration of velocity",
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
                  qid: "KN_032_m01",
                  q: "Given $v(t) = t^2 - 4$ for $0 \\leq t \\leq 3$. Find the total distance travelled.",
                  a: "$v = 0$ at $t = 2$. Distance $= \\left|\\int_0^2 (t^2-4) dt\\right| + \\int_2^3 (t^2-4) dt = \\left|\\frac{8}{3} - 8\\right| + \\left(9 - 12 - \\frac{8}{3} + 8\\right) = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$",
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
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 2 (source: 3)"
                              }
                        },
                        constraints: [
                              "v1 != 4 or v2 != 3"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    3: "str(v2)",
                                    4: "str(v1)"
                              },
                              a: {
                                    3: "str(v2)",
                                    4: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 4,
                              v2: 3
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_051",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Evaluating distance from origin at given value for $t$",
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
                  qid: "KN_051_m01",
                  q: "A particle's displacement from the origin is $x(t) = t^2 - 6t + 5$ metres. Find its distance from the origin at $t = 4$.",
                  a: "$x(4) = 16 - 24 + 5 = -3$. Distance from origin $= |{-3}| = 3$ m.",
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
                                    min: -1,
                                    max: 9,
                                    step: 1,
                                    description: "Value 3 (source: 4)"
                              }
                        },
                        constraints: [
                              "v1 != 6 or v2 != 5 or v3 != 4"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    4: "str(v3)",
                                    5: "str(v2)",
                                    6: "str(v1)"
                              },
                              a: {
                                    4: "str(v3)",
                                    5: "str(v2)",
                                    6: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 6,
                              v2: 5,
                              v3: 4
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_060",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Finding maximum speed by comparing absolute velocities at critical points",
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
                  qid: "KN_060_m01",
                  q: "A particle has velocity $v(t) = t^2 - 6t + 5$ for $0 \\leq t \\leq 5$. Find the maximum speed.",
                  a: "$a(t) = 2t - 6 = 0 \\Rightarrow t = 3$. Check speeds: $|v(0)| = 5$, $|v(3)| = 4$, $|v(5)| = 0$. Maximum speed is $5$ m/s at $t = 0$.",
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
                              "v1 != 6 or v2 != 5"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    5: "str(v2)",
                                    6: "str(v1)"
                              },
                              a: {
                                    5: "str(v2)",
                                    6: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 6,
                              v2: 5
                        }
                  }
            }
      ],
      hard: []
},

    {
      pt_id: "KN_061",
      topic: "Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      concept: "Kinematics Integration",
      pt: "Finding parameter from initial condition by integrating",
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
                  qid: "KN_061_m01",
                  q: "$v(t) = 4t - 3$. Given $x(0) = 2$, find $x(t)$.",
                  a: "$x(t) = 2t^2 - 3t + C$. $x(0) = C = 2$. So $x(t) = 2t^2 - 3t + 2$.",
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
                                    min: -2,
                                    max: 8,
                                    step: 1,
                                    description: "Value 2 (source: 3)"
                              },
                              v3: {
                                    type: "int",
                                    min: -3,
                                    max: 7,
                                    step: 1,
                                    description: "Value 3 (source: 2)"
                              }
                        },
                        constraints: [
                              "v1 != 4 or v2 != 3 or v3 != 2"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    2: "str(v3)",
                                    3: "str(v2)",
                                    4: "str(v1)"
                              },
                              a: {
                                    2: "str(v3)",
                                    3: "str(v2)",
                                    4: "str(v1)"
                              }
                        },
                        sourceValues: {
                              v1: 4,
                              v2: 3,
                              v3: 2
                        }
                  }
            },
            {
                  qid: "KN_061_m02",
                  q: "$a(t) = 6t$. Given $v(0) = -4$ and $x(0) = 1$, find $x(t)$.",
                  a: "$v(t) = 3t^2 - 4$. $x(t) = t^3 - 4t + 1$.",
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
                              },
                              v2: {
                                    type: "int",
                                    min: -9,
                                    max: 1,
                                    step: 1,
                                    description: "Value 2 (source: -4)"
                              }
                        },
                        constraints: [
                              "v1 != 6 or v2 != -4"
                        ],
                        derived: {},
                        substitutions: {
                              q: {
                                    6: "str(v1)",
                                    "-4": "str(v2)"
                              },
                              a: {
                                    6: "str(v1)",
                                    "-4": "str(v2)"
                              }
                        },
                        sourceValues: {
                              v1: 6,
                              v2: -4
                        }
                  }
            }
      ],
      hard: []
}
  ]
};