var ATOMISED_KINEMATICS = {
  "topic": "Rectilinear Motion",
  "questions": [
    {
      "pt_id": "KN_001",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Calculations",
      "pt": "Evaluating acceleration at given value for t",
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
          "qid": "KN_001_m01",
          "q": "Given $v(t) = 6t^2 - 4t + 1$, find the acceleration at $t = 2$.",
          "a": "$a(t) = v'(t) = 12t - 4$. $a(2) = 20$ m/s²"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_002",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Calculations",
      "pt": "Evaluating displacement at given value for t",
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
          "qid": "KN_002_m01",
          "q": "Given $x(t) = t^3 - 6t^2 + 9t + 2$, find the displacement at $t = 3$.",
          "a": "$x(3) = 27 - 54 + 27 + 2 = 2$ units"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_003",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Calculations",
      "pt": "Evaluating speed at given value for t",
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
          "qid": "KN_003_m01",
          "q": "Given $v(t) = t^2 - 5t + 4$, find the speed at $t = 3$.",
          "a": "$v(3) = 9 - 15 + 4 = -2$ m/s. Speed $= |v(3)| = 2$ m/s."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_004",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Calculations",
      "pt": "Evaluating velocity at given value for t",
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
          "qid": "KN_004_m01",
          "q": "Given $x(t) = 4t - t^2$, find the velocity at $t = 1$.",
          "a": "$v(t) = x'(t) = 4 - 2t$. $v(1) = 2$ m/s"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_005",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Differentiation",
      "pt": "Determining speeding up or slowing down from signs of velocity and acceleration",
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
          "qid": "KN_005_m01",
          "q": "At time $t = 2$, $v(2) = -3$ m/s and $a(2) = -5$ m/s². Is the particle speeding up or slowing down?",
          "a": "Since $v$ and $a$ have the same sign (both negative), the particle is **speeding up** (speed is increasing)."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_006",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Differentiation",
      "pt": "Finding acceleration function by differentiating velocity function",
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
          "qid": "KN_006_m01",
          "q": "Given $v(t) = 5\\sin(2t)$, find the acceleration function.",
          "a": "$a(t) = v'(t) = 10\\cos(2t)$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_007",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Differentiation",
      "pt": "Finding maximum/minimum displacement or velocity using calculus",
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
          "qid": "KN_007_m01",
          "q": "A particle has velocity $v(t) = 6t - t^2$ for $t \\geq 0$. Find the maximum velocity.",
          "a": "$a(t) = 6 - 2t = 0 \\Rightarrow t = 3$. $a'(t) = -2 < 0$ (max). $v_{max} = v(3) = 18 - 9 = 9$ m/s."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_008",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Differentiation",
      "pt": "Finding velocity function by differentiating displacement function",
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
          "qid": "KN_008_m01",
          "q": "A particle's displacement is $x(t) = 3t^2 - 2t + 5$. Find the velocity function.",
          "a": "$v(t) = x'(t) = 6t - 2$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_009",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Differentiation",
      "pt": "Finding when displacement function has stationary point (velocity = 0)",
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
          "qid": "KN_009_m01",
          "q": "Given $x(t) = t^3 - 12t + 5$, find when the particle is momentarily at rest.",
          "a": "$v(t) = 3t^2 - 12 = 0 \\Rightarrow t^2 = 4 \\Rightarrow t = 2$ (taking $t > 0$)"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_010",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Differentiation",
      "pt": "Finding when velocity function has stationary point (acceleration = 0)",
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
          "qid": "KN_010_m01",
          "q": "Given $v(t) = t^3 - 6t^2 + 9t$, find when acceleration is zero.",
          "a": "$a(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$. So $t = 1$ and $t = 3$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_011",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Differentiation",
      "concept": "Kinematics Differentiation",
      "pt": "Interpreting acceleration graph to describe velocity behaviour",
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
          "qid": "KN_011_m01",
          "q": "An acceleration-time graph shows $a(t) > 0$ for $0 < t < 3$ and $a(t) < 0$ for $t > 3$. If $v(0) = 0$, describe the velocity behaviour.",
          "a": "Velocity increases from 0 for $0 < t < 3$ (since $a > 0$), reaches its maximum at $t = 3$, then decreases for $t > 3$ (since $a < 0$)."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_012",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Anti-differentiating $e^{ax}$ with initial condition to find function value",
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
          "qid": "KN_012_m01",
          "q": "Given $f'(x) = 4e^{-2x}$ and $f(0) = 1$, find $f(1)$.",
          "a": "$f(x) = -2e^{-2x} + C$. $f(0) = -2 + C = 1 \\Rightarrow C = 3$. $f(1) = -2e^{-2} + 3 \\approx 2.729$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_013",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Anti-differentiating polynomial",
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
          "qid": "KN_013_m01",
          "q": "Find $\\int (6x^2 - 4x + 3) dx$.",
          "a": "$2x^3 - 2x^2 + 3x + C$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_014",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Anti-differentiating trigonometric function with linear argument and initial condition",
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
          "qid": "KN_014_m01",
          "q": "Given $f'(x) = 3\\cos(2x)$ and $f(0) = 5$, find $f(x)$.",
          "a": "$f(x) = \\frac{3}{2}\\sin(2x) + C$. $f(0) = 0 + C = 5$, so $C = 5$. $f(x) = \\frac{3}{2}\\sin(2x) + 5$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_015",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Assessing appropriateness of normal model from histogram shape",
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
          "qid": "KN_015_m01",
          "q": "A histogram of test scores shows a strong right skew. Is a normal distribution appropriate? Explain.",
          "a": "No. The normal distribution is symmetric and bell-shaped. A right-skewed distribution has a longer tail to the right, so the normal model would be a poor fit. It would underestimate probabilities in the right tail and overestimate near the mode."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_016",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Assessing normality of sampling distribution",
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
          "qid": "KN_016_m01",
          "q": "$n = 15$ and $\\hat{p} = 0.1$. Can we use the normal approximation for $\\hat{P}$? Explain.",
          "a": "$n\\hat{p} = 15 \\times 0.1 = 1.5 < 10$. The condition $n\\hat{p} \\geq 10$ is not met, so the normal approximation is **not** appropriate. The sample size is too small relative to how rare the event is."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_017",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating P(a ≤ X ≤ b) from CDF",
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
          "qid": "KN_017_m01",
          "q": "Using the CDF above, find $P(2 \\leq X \\leq 3)$.",
          "a": "$P(2 \\leq X \\leq 3) = F(3) - F(1) = 0.85 - 0.20 = 0.65$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_018",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
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
          "a": "$f'(x) = 0$ at $x = 1$. Area $= \\left|\\int_0^1 (x^2-1) dx\\right| + \\int_1^2 (x^2-1) dx = \\frac{2}{3} + \\frac{4}{3} = 2$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_019",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating area under curve using definite integral with ln function",
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
          "qid": "KN_019_m01",
          "q": "Find the area under $y = \\frac1x$ from $x = 1$ to $x = e^2$.",
          "a": "$\\int_1^{e^2} \\frac{1}{x} dx = [\\ln(x)]_1^{e^2} = 2 - 0 = 2$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_020",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating average speed over a time interval",
      "testing": "Average speed = total distance travelled / time",
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
          "qid": "KN_020_m01",
          "q": "A particle has velocity $v(t) = 2t - 4$ m/s. Find the average speed over $0 \\leq t \\leq 6$.",
          "a": "$v = 0$ when $t = 2$. Distance $= \\left|\\int_0^2 (2t-4)dt\\right| + \\int_2^6 (2t-4)dt = |-4| + 16 = 20$ m. Average speed $= \\frac{20}{6} = \\frac{10}{3} \\approx 3.33$ m/s."
        },
        {
          "qid": "KN_020_m02",
          "q": "A particle has velocity $v(t) = t^2 - 4t + 3$ m/s. Find the average speed over $0 \\leq t \\leq 4$.",
          "a": "$v = 0$ at $t = 1, 3$. Distance $= \\left|\\int_0^1 v\\,dt\\right| + \\left|\\int_1^3 v\\,dt\\right| + \\int_3^4 v\\,dt = \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$ m. Average speed $= \\frac{4}{4} = 1$ m/s."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_021",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating average velocity over a time interval",
      "testing": "Average velocity = change in displacement / change in time",
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
          "qid": "KN_021_m01",
          "q": "A particle has displacement $x(t) = t^3 - 6t$ metres. Find the average velocity over the interval $1 \\leq t \\leq 3$.",
          "a": "$x(3) = 27-18 = 9$, $x(1) = 1-6 = -5$. Average velocity $= \\frac{x(3)-x(1)}{3-1} = \\frac{9-(-5)}{2} = 7$ m/s"
        },
        {
          "qid": "KN_021_m02",
          "q": "A particle has displacement $x(t) = 4\\sin(t)$ metres. Find the average velocity over $0 \\leq t \\leq \\pi$.",
          "a": "$x(\\pi) = 0$, $x(0) = 0$. Average velocity $= \\frac{0-0}{\\pi} = 0$ m/s. (The particle returns to its starting position.)"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_022",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating change in displacement between two specific times using displacement function",
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
          "qid": "KN_022_m01",
          "q": "A particle has displacement $x(t) = 2t^2 - 5t + 1$ metres. Find the displacement during the 3rd second (i.e. from $t = 2$ to $t = 3$).",
          "a": "$x(3) = 18 - 15 + 1 = 4$, $x(2) = 8 - 10 + 1 = -1$. Displacement $= 4 - (-1) = 5$ m."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_023",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating complementary binomial probability",
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
          "qid": "KN_023_m01",
          "q": "$X \\sim \\text{Bin}(10, 0.3)$. Find $P(X \\geq 1)$.",
          "a": "$P(X \\geq 1) = 1 - P(X = 0) = 1 - 0.7^{10} = 1 - 0.0282 \\approx 0.9718$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_024",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating maximum margin of error for given sample size and confidence level",
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
          "qid": "KN_024_m01",
          "q": "For $n = 400$ and 95% confidence, find the maximum possible margin of error.",
          "a": "Maximum ME occurs at $\\hat{p} = 0.5$: $ME = 1.96\\sqrt{\\frac{0.25}{400}} = 1.96 \\times 0.025 = 0.049$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_025",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating probability from histogram by summing relative frequencies",
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
          "qid": "KN_025_m01",
          "q": "From the histogram above, find $P(X \\geq 2)$.",
          "a": "$P(X \\geq 2) = 0.5 + 0.2 = 0.7$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_026",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating probability involving transformation of uniform random variable",
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
          "qid": "KN_026_m01",
          "q": "$X \\sim U(0, 4)$. Find $P(X^2 > 9)$.",
          "a": "$X^2 > 9 \\Rightarrow X > 3$ (since $X \\geq 0$). $P(X > 3) = \\frac{4-3}{4-0} = \\frac{1}{4}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_027",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating probability of confidence interval coverage using binomial distribution",
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
          "qid": "KN_027_m01",
          "q": "20 independent 90% confidence intervals are constructed. Find the probability that all 20 contain the true proportion.",
          "a": "Each CI has 0.9 probability of covering. $P(\\text{all 20}) = 0.9^{20} \\approx 0.1216$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_028",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating probability of independent events using multiplication rule (complement)",
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
          "qid": "KN_028_m01",
          "q": "Two machines operate independently. Machine A fails with probability 0.05, Machine B with probability 0.08. Find the probability that at least one fails.",
          "a": "$P(\\text{at least one}) = 1 - P(\\text{neither}) = 1 - (0.95)(0.92) = 1 - 0.874 = 0.126$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_029",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating probability using geometric area from continuous distribution",
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
          "qid": "KN_029_m01",
          "q": "A pdf is triangular with $f(x) = x$ for $0 \\leq x \\leq 1$ and $f(x) = 2 - x$ for $1 < x \\leq 2$. Find $P(X > 1.5)$ using geometry.",
          "a": "For $1.5 \\leq x \\leq 2$: this is a triangle with base $0.5$ and height $f(1.5) = 0.5$. Area $= \\frac{1}{2}(0.5)(0.5) = 0.125$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_030",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating total change in displacement between two values for t using integration of velocity",
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
          "qid": "KN_030_m01",
          "q": "Given $v(t) = 3t^2 - 6t$, find the change in displacement from $t = 0$ to $t = 4$.",
          "a": "$\\int_0^4 (3t^2 - 6t) dt = [t^3 - 3t^2]_0^4 = 64 - 48 = 16$ units"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_031",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating total change in velocity using integration of acceleration",
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
          "qid": "KN_031_m01",
          "q": "Given $a(t) = 2\\cos(t)$, find the change in velocity from $t = 0$ to $t = \\frac{\\pi}{2}$.",
          "a": "$\\Delta v = \\int_0^{\\pi/2} 2\\cos(t) dt = [2\\sin(t)]_0^{\\pi/2} = 2$ m/s"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_032",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating total distance travelled using integration of velocity",
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
          "qid": "KN_032_m01",
          "q": "Given $v(t) = t^2 - 4$ for $0 \\leq t \\leq 3$. Find the total distance travelled.",
          "a": "$v = 0$ at $t = 2$. Distance $= \\left|\\int_0^2 (t^2-4) dt\\right| + \\int_2^3 (t^2-4) dt = \\left|\\frac{8}{3} - 8\\right| + \\left(9 - 12 - \\frac{8}{3} + 8\\right) = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_033",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Calculating variance of uniform distribution by integration",
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
          "qid": "KN_033_m01",
          "q": "Verify that $\\text{Var}(X) = \\frac{(b-a)^2}{12}$ for $X \\sim U(0, 6)$ using integration.",
          "a": "$E(X) = \\int_0^6 \\frac{x}{6} dx = 3$. $E(X^2) = \\int_0^6 \\frac{x^2}{6} dx = 12$. $\\text{Var}(X) = 12 - 9 = 3$. Formula: $\\frac{(6-0)^2}{12} = 3$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_034",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
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
          "a": "$y = 0$ when $x = \\pm 2$. $V = \\pi\\int_{-2}^{2} (4-x^2)^2 dx = \\pi\\int_{-2}^{2} (16 - 8x^2 + x^4) dx = \\pi[16x - \\frac{8x^3}{3} + \\frac{x^5}{5}]_{-2}^{2} = \\frac{512\\pi}{15}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_035",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Completing cumulative distribution table",
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
          "qid": "KN_035_m01",
          "q": "Given:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | 0.2 | 0.3 | 0.35 | 0.15 |\nComplete the CDF table.",
          "a": ""
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_036",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Completing probability distribution table for sum of two dice",
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
          "qid": "KN_036_m01",
          "q": "Two fair dice are rolled. Let $X$ be the sum. Find $P(X = 7)$ and $P(X = 11)$.",
          "a": "$P(X=7) = \\frac{6}{36} = \\frac{1}{6}$ (ways: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1). $P(X=11) = \\frac{2}{36} = \\frac{1}{18}$ (ways: 5+6, 6+5)."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_037",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
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
          "a": "$f(0) = 1$, $f(1) = \\frac{1}{2}$, $f(2) = \\frac{1}{3}$, $f(3) = \\frac{1}{4}$, $f(4) = \\frac{1}{5}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_038",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Constructing sample space table for sum of discrete random variables",
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
          "qid": "KN_038_m01",
          "q": "$X$ takes values 1, 2 and $Y$ takes values 1, 2, 3. Both are uniform. Construct the sample space table for $S = X + Y$.",
          "a": ""
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_039",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Converting confidence interval for proportion to range for expected count",
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
          "qid": "KN_039_m01",
          "q": "A 95% CI for the proportion of defective items is $(0.03, 0.07)$. In a batch of 500, how many defective items would you expect?",
          "a": "Expected count range: $500 \\times 0.03 = 15$ to $500 \\times 0.07 = 35$ defective items."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_040",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Describing systematic sampling method and suggesting random alternative",
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
          "qid": "KN_040_m01",
          "q": "A factory produces 5000 items per day. Describe how to select a systematic sample of 100 items. What is one advantage over simple random sampling?",
          "a": "Calculate interval: $k = 5000/100 = 50$. Randomly select a starting item between 1 and 50, then select every 50th item. Advantage: it spreads the sample evenly across the production run, capturing any time-dependent variation (e.g. machine warm-up effects) that simple random sampling might miss."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_041",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Determining confidence level from given confidence interval",
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
          "qid": "KN_041_m01",
          "q": "A sample gives $\\hatp = 0.4$, $n = 100$. The CI is $(0.3265, 0.4735)$. What confidence level was used?",
          "a": "$ME = 0.4735 - 0.4 = 0.0735$. $SE = \\sqrt{\\frac{0.4 \\times 0.6}{100}} = 0.04899$. $z = \\frac{0.0735}{0.04899} \\approx 1.50$. From $z$-tables, $P(-1.5 < Z < 1.5) \\approx 0.8664$. The confidence level is approximately $86.6\\%$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_042",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Determining count from sample proportion given standard deviations from mean",
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
          "qid": "KN_042_m01",
          "q": "$\\hat{P} \\sim N(0.6, \\sigma^2)$ where $\\sigma = 0.03$. In a sample of $n = 200$, how many successes correspond to $\\hat{p}$ being 2 SDs above the mean?",
          "a": "$\\hat{p} = 0.6 + 2(0.03) = 0.66$. Count $= 200 \\times 0.66 = 132$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_043",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
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
          "a": "$F(2) = [t^3 - 2t]_0^2 + 5 = (8-4) + 5 = 9$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_044",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Determining parameters of linear transformation from given distribution properties",
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
          "qid": "KN_044_m01",
          "q": "$X$ has mean 10 and SD 3. Find $a$ and $b$ so that $Y = aX + b$ has mean 0 and SD 1.",
          "a": "$E(Y) = aE(X) + b = 10a + b = 0$ and $\\text{SD}(Y) = |a| \\cdot \\text{SD}(X) = 3a = 1$ (taking $a > 0$). So $a = \\frac{1}{3}$ and $b = -\\frac{10}{3}$. ($Y = \\frac{X - 10}{3}$, the standardisation formula.)"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_045",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Determining parameters of logarithmic model from initial conditions",
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
          "qid": "KN_045_m01",
          "q": "At $t = 0$, $N = 100$ and $\\frac{dN}{dt} = 5$ for the model $N(t) = a\\ln(t+1) + b$. Find $a$ and $b$.",
          "a": "$N(0) = a\\ln(1) + b = b = 100$. $N'(t) = \\frac{a}{t+1}$, $N'(0) = a = 5$. So $a = 5$, $b = 100$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_046",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
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
          "a": "$f'(x) = 2ax + b = 0$ at $x=2$: $4a + b = 0$ ①. $\\int_0^4 (ax^2 + bx) dx = \\frac{64a}{3} + 8b = 16$ ②. From ①: $b = -4a$. Sub into ②: $\\frac{64a}{3} - 32a = 16 \\Rightarrow -\\frac{32a}{3} = 16 \\Rightarrow a = -\\frac{3}{2}$, $b = 6$. Check: $\\int_0^4 (-\\frac{3}{2}x^2 + 6x)dx = [-\\frac{x^3}{2} + 3x^2]_0^4 = -32 + 48 = 16$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_047",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Differentiation of a quotient of functions requiring nested rules",
      "testing": "",
      "reason_bank": [
        "wrong_rule",
        "setup_error",
        "sign_error",
        "algebra_slip",
        "missing_chain_factor",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_047_m01",
          "q": "Differentiate $y = \\frac{\\sin(x)}{(x+1)^2}$.",
          "a": "$y' = \\frac{\\cos(x)(x+1)^2 - \\sin(x) \\cdot 2(x+1)}{(x+1)^4} = \\frac{\\cos(x)(x+1) - 2\\sin(x)}{(x+1)^3}$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_048",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Estimating expected value from histogram using interval midpoints",
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
          "qid": "KN_048_m01",
          "q": "A histogram shows:\n| Interval | [0,2) | [2,4) | [4,6) |\n|---|---|---|---|\n| Relative freq | 0.3 | 0.5 | 0.2 |\nEstimate $E(X)$.",
          "a": "Using midpoints: $E(X) \\approx 1(0.3) + 3(0.5) + 5(0.2) = 0.3 + 1.5 + 1.0 = 2.8$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_049",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Evaluating assumptions of binomial model in context",
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
          "qid": "KN_049_m01",
          "q": "200 people are surveyed from a city of 5000. Is a binomial model reasonable for the number who support a policy? Discuss.",
          "a": "The sampling fraction is $200/5000 = 4\\%$, which is less than 10%, so independence is approximately satisfied despite sampling without replacement. If $p$ is constant (same probability for each person), then $X \\sim \\text{Bin}(200, p)$ is a reasonable approximation."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_050",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
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
          "a": "$3\\int_0^{\\pi} \\sin(x) dx + \\int_0^{\\pi} 1 \\, dx = 3(2) + \\pi = 6 + \\pi \\approx 9.142$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_051",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Evaluating distance from origin at given value for $t$",
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
          "qid": "KN_051_m01",
          "q": "A particle's displacement from the origin is $x(t) = t^2 - 6t + 5$ metres. Find its distance from the origin at $t = 4$.",
          "a": "$x(4) = 16 - 24 + 5 = -3$. Distance from origin $= |{-3}| = 3$ m."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_052",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Evaluating exponential model $Ae^{kt}$ at specific time",
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
          "qid": "KN_052_m01",
          "q": "A bacteria population is modelled by $N(t) = 300e^{0.15t}$. Find $N(4)$.",
          "a": "$N(4) = 300e^{0.6} \\approx 300 \\times 1.822 = 546.6 \\approx 547$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_053",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Evaluating logarithmic model at a given input",
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
          "qid": "KN_053_m01",
          "q": "The loudness in decibels is $L = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)$ where $I_0 = 10^{-12}$. Find $L$ when $I = 10^{-5}$.",
          "a": "$L = 10\\log_{10}\\left(\\frac{10^{-5}}{10^{-12}}\\right) = 10\\log_{10}(10^7) = 10 \\times 7 = 70$ dB."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_054",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Explaining inappropriateness of normal model in context",
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
          "qid": "KN_054_m01",
          "q": "Reaction times are always positive but a normal model with $\\mu = 0.3$ s and $\\sigma = 0.15$ s is proposed. Explain why this may be inappropriate.",
          "a": "The normal distribution extends to $-\\infty$, so it assigns positive probability to negative reaction times, which are impossible. With $\\mu = 0.3$ and $\\sigma = 0.15$, $P(X < 0) = P(Z < -2) \\approx 2.3\\%$, a non-trivial probability for an impossible event."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_055",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Explaining why a situation cannot be modelled by binomial distribution",
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
          "qid": "KN_055_m01",
          "q": "Cards are drawn one at a time without replacement from a deck. Let $X$ be the number of hearts in 5 draws. Explain why $X$ is not binomial.",
          "a": "The trials are not independent — the probability of drawing a heart changes after each draw because cards are not replaced. Also, $p$ is not constant. (E.g. $P(\\text{heart on 1st}) = \\frac{13}{52}$, but $P(\\text{heart on 2nd | heart on 1st}) = \\frac{12}{51}$.)"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_056",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Expressing logarithmic transformation as horizontal dilation using log laws",
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
          "qid": "KN_056_m01",
          "q": "Show that $y = \\log_{10}(x^3)$ can be written as a vertical dilation of $y = \\log_{10}(x)$.",
          "a": "$\\log_{10}(x^3) = 3\\log_{10}(x)$. This is $y = \\log_{10}(x)$ dilated vertically by factor 3."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_057",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Expressing logarithmic transformation as vertical translation using log laws",
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
          "qid": "KN_057_m01",
          "q": "Show that $y = \\log_{10}(100x)$ can be written as a vertical translation of $y = \\log_{10}(x)$.",
          "a": "$\\log_{10}(100x) = \\log_{10}(100) + \\log_{10}(x) = 2 + \\log_{10}(x)$. This is $y = \\log_{10}(x)$ translated up by 2 units."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_058",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Finding break-even price from expected value equation",
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
          "qid": "KN_058_m01",
          "q": "A game costs $\\$c$ to play. You draw a card: face card wins $\\$10$, ace wins $\\$25$, otherwise nothing. Find $c$ for a fair game.",
          "a": "$E(\\text{winnings}) = \\frac{12}{52}(10) + \\frac{4}{52}(25) = \\frac{120+100}{52} = \\frac{220}{52} \\approx \\$4.23$. For fair game: $c = \\$4.23$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_059",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Finding maximum of logarithmic function using calculus",
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
          "qid": "KN_059_m01",
          "q": "Find the maximum value of $f(x) = 6\\ln(x) - x^2$ for $x > 0$.",
          "a": "$f'(x) = \\frac{6}{x} - 2x = 0 \\Rightarrow 6 = 2x^2 \\Rightarrow x = \\sqrt{3}$. $f''(x) = -\\frac{6}{x^2} - 2 < 0$ (max). $f(\\sqrt{3}) = 6\\ln(\\sqrt{3}) - 3 = 3\\ln(3) - 3 \\approx 0.296$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_060",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Finding maximum speed by comparing absolute velocities at critical points",
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
          "qid": "KN_060_m01",
          "q": "A particle has velocity $v(t) = t^2 - 6t + 5$ for $0 \\leq t \\leq 5$. Find the maximum speed.",
          "a": "$a(t) = 2t - 6 = 0 \\Rightarrow t = 3$. Check speeds: $|v(0)| = 5$, $|v(3)| = 4$, $|v(5)| = 0$. Maximum speed is $5$ m/s at $t = 0$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_061",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Finding parameter from initial condition by integrating",
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
          "qid": "KN_061_m01",
          "q": "$v(t) = 4t - 3$. Given $x(0) = 2$, find $x(t)$.",
          "a": "$x(t) = 2t^2 - 3t + C$. $x(0) = C = 2$. So $x(t) = 2t^2 - 3t + 2$."
        },
        {
          "qid": "KN_061_m02",
          "q": "$a(t) = 6t$. Given $v(0) = -4$ and $x(0) = 1$, find $x(t)$.",
          "a": "$v(t) = 3t^2 - 4$. $x(t) = t^3 - 4t + 1$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_062",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Finding parameter value to achieve target tail probability",
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
          "qid": "KN_062_m01",
          "q": "$X \\sim N(\\mu, 4^2)$. Find $\\mu$ such that $P(X > 30) = 0.1$.",
          "a": "$P(X > 30) = 0.1 \\Rightarrow \\frac{30-\\mu}{4} = 1.282 \\Rightarrow \\mu = 30 - 5.128 = 24.87$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_063",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Finding value for specified percentage using empirical rule",
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
          "qid": "KN_063_m01",
          "q": "Weights are $N(75, 5^2)$ kg. Below what weight do approximately 84% of people fall?",
          "a": "84% corresponds to 1 standard deviation above the mean (50% + 34%). So weight $= 75 + 5 = 80$ kg."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_064",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
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
          "a": "$[-3e^{-x}]_0^2 = -3e^{-2} + 3 = 3(1 - e^{-2}) \\approx 2.594$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_065",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Interpreting confidence interval coverage and sampling variability",
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
          "qid": "KN_065_m01",
          "q": "If we construct 95% confidence intervals from 200 independent samples, approximately how many would we expect to contain the true proportion?",
          "a": "Approximately $200 \\times 0.95 = 190$ of the intervals would contain the true proportion."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_066",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Interpreting optimization result in physical context with packing constraints",
      "testing": "",
      "reason_bank": [
        "setup_error",
        "wrong_rule",
        "interpretation_mixup",
        "sign_error",
        "algebra_slip",
        "not_sure"
      ],
      "easy": [],
      "medium": [
        {
          "qid": "KN_066_m01",
          "q": "A box made from a 20 cm × 30 cm sheet by cutting squares of side $x$ from each corner has volume $V(x) = x(20-2x)(30-2x)$. Find the maximum volume and state any constraints on $x$.",
          "a": "$V'(x) = 12x^2 - 200x + 600 = 0$. By quadratic formula: $x = \\frac{200 \\pm \\sqrt{40000-28800}}{24} = \\frac{200 \\pm \\sqrt{11200}}{24}$. Valid solution (where $0 < x < 10$): $x \\approx 3.92$ cm. $V_{max} \\approx 1056$ cm³. Constraint: $0 < x < 10$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_067",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Interpreting range in terms of standard deviations",
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
          "qid": "KN_067_m01",
          "q": "Heights are $N(170, 6^2)$ cm. A person is 158 cm. How many standard deviations below the mean is this?",
          "a": "$z = \\frac{158 - 170}{6} = -2$. The person is 2 standard deviations below the mean."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_068",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
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
          "a": "$V = \\pi\\left[\\frac{h^2}{2}\\right]_0^H = \\frac{\\pi H^2}{2} = 8\\pi \\Rightarrow H^2 = 16 \\Rightarrow H = 4$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_069",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Models where $\\frac{dA}{dx} = kA$ are given",
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
          "qid": "KN_069_m01",
          "q": "A quantity $Q$ satisfies $\\frac{dQ}{dt} = -0.05Q$. Given $Q(0) = 200$, find $Q(t)$ and evaluate $Q(10)$.",
          "a": "$Q(t) = 200e^{-0.05t}$. $Q(10) = 200e^{-0.5} \\approx 121.3$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_070",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
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
          "a": "$T = \\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + f(x_4)] = \\frac{0.5}{2}[1 + 2(1.284) + 2(2.718) + 2(9.488) + 54.598] = 0.25 \\times 82.578 \\approx 20.64$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_071",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Other trigonometric calculations",
      "testing": "Testing: Using trig identities within differentiation contexts",
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
          "qid": "KN_071_m01",
          "q": "If $y = \\sin^2(x) + \\cos^2(x)$, find $\\frac{dy}{dx}$.",
          "a": "$y = 1$ (Pythagorean identity), so $\\frac{dy}{dx} = 0$."
        },
        {
          "qid": "KN_071_m02",
          "q": "Simplify $\\frac{d}{dx}[\\sin(2x)]$ using the double angle formula.",
          "a": "$\\frac{d}{dx}[\\sin(2x)] = 2\\cos(2x)$. Or: $\\sin(2x) = 2\\sin(x)\\cos(x)$, differentiating by product rule gives $2(\\cos^2(x) - \\sin^2(x)) = 2\\cos(2x)$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_072",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Sketching piecewise function involving constant and logarithmic components",
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
          "qid": "KN_072_m01",
          "q": "Sketch $f(x) = \\begin{cases} 2 & x \\leq 1 \\\\ \\ln(x) + 2 & x > 1 \\end{cases}$. State the domain and range.",
          "a": "For $x \\leq 1$: horizontal line at $y = 2$. For $x > 1$: logarithmic curve starting at $(1, 2)$ and increasing. The function is continuous at $x = 1$ since $\\ln(1) + 2 = 2$. Domain: all real $x$. Range: $(-\\infty, 2] \\cup (2, \\infty) = \\mathbb{R}$... actually: for $x \\leq 1$, $y = 2$; for $x > 1$, $y > 2$ and increasing. So range is $\\{2\\} \\cup (2, \\infty) = [2, \\infty)$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_073",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Solving inverse probability problem for uniform distribution in context",
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
          "qid": "KN_073_m01",
          "q": "A bus arrives at a stop uniformly between 8:00 and 8:20. If you arrive at 8:12, what is the probability the bus has already left?",
          "a": "$X \\sim U(0, 20)$. $P(X < 12) = \\frac{12}{20} = 0.6$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_074",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Suggesting ways to decrease margin of error",
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
          "qid": "KN_074_m01",
          "q": "A researcher obtains a 95% CI of $(0.35, 0.65)$. Suggest two ways to reduce the margin of error.",
          "a": "(1) Increase the sample size $n$ — this decreases $\\sqrt{\\hat{p}(1-\\hat{p})/n}$. (2) Decrease the confidence level (e.g. from 95% to 90%) — this decreases the $z$-value. Both reduce the margin of error $ME = z\\sqrt{\\hat{p}(1-\\hat{p})/n}$."
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_075",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Using $\\lim_{h \\to 0} \\frac{a^h - 1}{h}$ for $a = e$ in problem solving",
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
          "qid": "KN_075_m01",
          "q": "Evaluate $\\lim_{h \\to 0} \\frac{e^{3h} - 1}{h}$.",
          "a": "$\\lim_{h \\to 0} \\frac{e^{3h} - 1}{h} = 3 \\cdot \\lim_{h \\to 0} \\frac{e^{3h} - 1}{3h} = 3 \\cdot 1 = 3$"
        }
      ],
      "hard": []
    },
    {
      "pt_id": "KN_076",
      "topic": "Rectilinear Motion",
      "subtopic": "Kinematics: Integration",
      "concept": "Kinematics Integration",
      "pt": "Using expected value to evaluate fairness of game",
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
          "qid": "KN_076_m01",
          "q": "A game costs $\\$3$. You flip two coins: 2 heads wins $\\$8$, 1 head wins $\\$2$, 0 heads wins nothing. Is the game fair?",
          "a": "$E(\\text{winnings}) = \\frac{1}{4}(8) + \\frac{1}{2}(2) + \\frac{1}{4}(0) = 2 + 1 = 3$. $E(\\text{profit}) = 3 - 3 = 0$. The game is fair."
        }
      ],
      "hard": []
    }
  ]
};
