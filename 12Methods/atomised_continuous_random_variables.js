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
            },
          ],
          hard: [
          ],
        },
    
        // Expected Value > Calculating $E(aX + b)$ using linearity of expectation
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Expected Value > Calculating expected value of continuous random variabl
,

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
            },
            {
              qid: "CN_003_m02",
              q: "$f(x) = \\frac{3}{8}x^2$ for $0 \\leq x \\leq 2$. Find $E(X)$.",
              a: "$E(X) = \\int_0^2 x \\cdot \\frac{3}{8}x^2 dx = \\frac{3}{8} \\cdot \\frac{x^4}{4}\\Big|_0^2 = \\frac{3}{8} \\cdot 4 = \\frac{3}{2}$"
            },
          ],
          hard: [
          ],
        },
    
        // General/Other > Calculating conditional probability for continuous rand
,

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
            },
          ],
          hard: [
          ],
        },
    
        // General/Other > Finding median by solving integral equation for continu
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Integration Techniques > Calculating probability for continuous random variable
,

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
            },
            {
              qid: "CN_006_m02",
              q: "$f(x) = \\frac{1}{2}e^{-x/2}$ for $x \\geq 0$. Find $P(1 \\leq X \\leq 3)$.",
              a: "$P = \\int_1^3 \\frac{1}{2}e^{-x/2} dx = [-e^{-x/2}]_1^3 = -e^{-3/2} + e^{-1/2} = e^{-0.5} - e^{-1.5} \\approx 0.383$"
            },
          ],
          hard: [
          ],
        },
    
        // Integration Techniques > Determining equation of pdf from graph and integrating
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Uniform Distribution > Calculating mean and variance of continuous uniform dis
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Uniform Distribution > Calculating probability for uniform distribution
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Uniform Distribution > Sketching probability density function of uniform distr
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Variance Calculations > Calculating $\text{Var}(aX + b)$ using variance propert
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Variance Calculations > Calculating standard deviation of continuous random var
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Expected Value (Normal) > Finding expected value and variance under linear transf
,

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
            },
          ],
          hard: [
          ],
        },
    
        // General/Other (Normal) > Comparing probabilities from two different distribution
,

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
            },
          ],
          hard: [
          ],
        },
    
        // General/Other (Normal) > Determining $\mu$ and $\sigma$ from two given probabili
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Inverse Normal > Finding standard deviation given target probability and
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Inverse Normal > Finding value for specified probability using inverse n
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Normal Probability > Calculating conditional probability for normal distribu
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Normal Probability > Calculating normal probability $P(X > k)$ or $P(X < k)$
,

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
            },
            {
              qid: "CN_019_m02",
              q: "$X \\sim N(100, 15^2)$. Find $P(X < 80)$.",
              a: "$Z = \\frac{80-100}{15} = -1.33$. $P(X < 80) = P(Z < -1.33) = 0.0918$"
            },
          ],
          hard: [
          ],
        },
    
        // Normal Probability > Calculating normal probability $P(a < X < b)$
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Normal Probability > Calculating percentage using empirical rule (68-95-99.7
,

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
            },
          ],
          hard: [
          ],
        },
    
        // Bernoulli Distribution > Calculating mean and standard deviation of Bernoulli di

  ]
};