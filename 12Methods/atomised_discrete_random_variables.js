// ======================================================================
// ATOMISED PRACTICE — ATOMISED_DISCRETE_RANDOM_VARIABLES
// Topic: Discrete Random Variables
// 23 PTs, 299 questions (E:69 M:115 H:115)
// Reorganised from source files — richest version kept for each PT
// Unquoted keys for WSH compatibility
// ======================================================================

var ATOMISED_DISCRETE_RANDOM_VARIABLES = {
  questions: [
    {
          pt_id: "DR_001",
          topic: "Discrete Random Variables",
          subtopic: "Bernoulli Distributions",
          concept: "Bernoulli Distribution",
          pt: "Calculating mean and standard deviation of Bernoulli distribution",
          testing: "Use E(X)=p, Var(X)=p(1−p), SD(X)=√(p(1−p))",
          reason_bank: [
              "wrong_rule",
              "wrong_parameters",
              "substitution_error",
              "interpretation_mixup",
              "algebra_slip",
              "not_sure"
            ],
          easy: [
            {
              qid: "DR_001_e01",
              q: "$X \\sim \\text{Bernoulli}(0.7)$. Find $E(X)$, $\\text{Var}(X)$, and $\\text{SD}(X)$.",
              a: "$E(X) = p = 0.7$. $\\text{Var}(X) = p(1-p) = 0.7 \\times 0.3 = 0.21$. $\\text{SD}(X) = \\sqrt{0.21} \\approx 0.458$."
            },
            {
              qid: "DR_001_e02",
              q: "$X \\sim \\text{Bernoulli}(0.5)$. Find $E(X)$ and $\\text{SD}(X)$.",
              a: "$E(X) = 0.5$. $\\text{Var}(X) = 0.5 \\times 0.5 = 0.25$. $\\text{SD}(X) = \\sqrt{0.25} = 0.5$."
            },
            {
              qid: "DR_001_e03",
              q: "$X \\sim \\text{Bernoulli}(0.1)$. Find $E(X)$ and $\\text{SD}(X)$.",
              a: "$E(X) = 0.1$. $\\text{Var}(X) = 0.1 \\times 0.9 = 0.09$. $\\text{SD}(X) = \\sqrt{0.09} = 0.3$."
            }
          ],
          medium: [
            {
              qid: "DR_001_m01",
              q: "$X \\sim \\text{Bernoulli}(0.3)$. Find $E(X)$ and $\\text{SD}(X)$.",
              a: "$E(X) = p = 0.3$. $\\text{Var}(X) = p(1-p) = 0.21$. $\\text{SD}(X) = \\sqrt{0.21} \\approx 0.458$"
            },
            {
              qid: "DR_001_m02",
              q: "A machine produces items with a 15% defect rate. Let $X = 1$ if an item is defective, $X = 0$ otherwise. Find $E(X)$, $\\text{Var}(X)$, and $\\text{SD}(X)$.",
              a: "$X \\sim \\text{Bernoulli}(0.15)$. $E(X) = 0.15$. $\\text{Var}(X) = 0.15 \\times 0.85 = 0.1275$. $\\text{SD}(X) = \\sqrt{0.1275} \\approx 0.357$."
            },
            {
              qid: "DR_001_m03",
              q: "A fair six-sided die is rolled. Let $X = 1$ if the result is a six, and $X = 0$ otherwise. Find $E(X)$ and $\\text{SD}(X)$.",
              a: "$X \\sim \\text{Bernoulli}\\left(\\frac{1}{6}\\right)$. $E(X) = \\frac{1}{6}$. $\\text{Var}(X) = \\frac{1}{6} \\cdot \\frac{5}{6} = \\frac{5}{36}$. $\\text{SD}(X) = \\sqrt{\\frac{5}{36}} \\approx 0.373$."
            },
            {
              qid: "DR_001_m04",
              q: "$X \\sim \\text{Bernoulli}\\left(\\frac{2}{3}\\right)$. Find $E(X)$ and $\\text{Var}(X)$.",
              a: "$E(X) = \\frac{2}{3} \\approx 0.667$. $\\text{Var}(X) = \\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9} \\approx 0.222$."
            },
            {
              qid: "DR_001_m05",
              q: "$X \\sim \\text{Bernoulli}(0.45)$. Find $\\text{Var}(X)$ and $\\text{SD}(X)$.",
              a: "$\\text{Var}(X) = 0.45 \\times 0.55 = 0.2475$. $\\text{SD}(X) = \\sqrt{0.2475} \\approx 0.497$."
            }
          ],
          hard: [
            {
              qid: "DR_001_h01",
              q: "A Bernoulli random variable $X$ has $\\text{Var}(X) = 0.24$. Find the two possible values of $p$.",
              a: "$p(1-p) = 0.24 \\Rightarrow p^2 - p + 0.24 = 0$. Using the quadratic formula: $p = \\frac{1 \\pm \\sqrt{1 - 0.96}}{2} = \\frac{1 \\pm 0.2}{2}$. So $p = 0.6$ or $p = 0.4$."
            },
            {
              qid: "DR_001_h02",
              q: "A Bernoulli random variable $X$ has $\\text{SD}(X) = 0.4$. Find the two possible values of $p$.",
              a: "$\\text{Var}(X) = 0.16$, so $p(1-p) = 0.16 \\Rightarrow p^2 - p + 0.16 = 0$. $p = \\frac{1 \\pm \\sqrt{1 - 0.64}}{2} = \\frac{1 \\pm 0.6}{2}$. So $p = 0.8$ or $p = 0.2$."
            },
            {
              qid: "DR_001_h03",
              q: "Show that the variance of a Bernoulli distribution is maximised when $p = 0.5$ and state the maximum variance.",
              a: "$\\text{Var}(X) = p - p^2$. To maximise: $\\frac{d}{dp}(p - p^2) = 1 - 2p = 0 \\Rightarrow p = 0.5$.\n$\\frac{d^2}{dp^2} = -2 < 0$ (maximum). Maximum variance $= 0.5 \\times 0.5 = 0.25$."
            },
            {
              qid: "DR_001_h04",
              q: "For $X \\sim \\text{Bernoulli}(0.3)$, show that $E(X^2) = E(X)$ and hence verify the variance formula.",
              a: "Since $X \\in \\{0, 1\\}$, $X^2 = X$, so $E(X^2) = E(X) = 0.3$.\n$\\text{Var}(X) = E(X^2) - [E(X)]^2 = 0.3 - 0.09 = 0.21 = p(1-p)$. ✓"
            },
            {
              qid: "DR_001_h05",
              q: "Let $X_1, X_2, \\ldots, X_5$ be independent $\\text{Bernoulli}(0.4)$ random variables, and let $S = X_1 + X_2 + \\cdots + X_5$. Find $E(S)$ and $\\text{Var}(S)$, and state the distribution of $S$.",
              a: "$S \\sim \\text{Bin}(5, 0.4)$.\n$E(S) = 5 \\times 0.4 = 2$.\n$\\text{Var}(S) = 5 \\times 0.4 \\times 0.6 = 1.2$."
            }
          ]
        }
,

    {
          pt_id: "DR_002",
          topic: "Discrete Random Variables",
          subtopic: "Bernoulli Distributions",
          concept: "Bernoulli Distribution",
          pt: "Stating Bernoulli distribution from context",
          testing: "Identify binary outcome and probability of success p",
          reason_bank: [
              "wrong_model",
              "wrong_parameters",
              "setup_error",
              "interpretation_mixup",
              "algebra_slip",
              "not_sure"
            ],
          easy: [
            {
              qid: "DR_002_e01",
              q: "A fair coin is flipped. Let $X = 1$ if Heads and $X = 0$ if Tails. State the distribution of $X$.",
              a: "$X \\sim \\text{Bernoulli}(0.5)$."
            },
            {
              qid: "DR_002_e02",
              q: "A light bulb works with probability 0.95 and is defective with probability 0.05. Let $X = 1$ if it works. State the distribution of $X$.",
              a: "$X \\sim \\text{Bernoulli}(0.95)$."
            },
            {
              qid: "DR_002_e03",
              q: "A fair die is rolled. Let $X = 1$ if the result is even and $X = 0$ if odd. State the distribution of $X$.",
              a: "$P(\\text{even}) = \\frac{3}{6} = 0.5$. $X \\sim \\text{Bernoulli}(0.5)$."
            }
          ],
          medium: [
            {
              qid: "DR_002_m01",
              q: "A coin is biased so that $P(\\text{Head}) = 0.6$. Let $X = 1$ if Head, $X = 0$ if Tail. State the distribution of $X$.",
              a: "$X \\sim \\text{Bernoulli}(0.6)$ (or equivalently $X \\sim \\text{Bin}(1, 0.6)$)"
            },
            {
              qid: "DR_002_m02",
              q: "A factory has a 3% defect rate. Let $X = 1$ if a randomly selected item is defective, $X = 0$ otherwise. State the distribution of $X$.",
              a: "$X \\sim \\text{Bernoulli}(0.03)$."
            },
            {
              qid: "DR_002_m03",
              q: "A basketball player has a free throw success rate of 80%. Let $X = 1$ if a free throw is successful. State the distribution of $X$.",
              a: "$X \\sim \\text{Bernoulli}(0.8)$."
            },
            {
              qid: "DR_002_m04",
              q: "In a population, 12% of people are left-handed. A person is chosen at random. Let $X = 1$ if left-handed. State the distribution of $X$.",
              a: "$X \\sim \\text{Bernoulli}(0.12)$."
            },
            {
              qid: "DR_002_m05",
              q: "A blood bank records that 40% of donors have type O+ blood. Let $X = 1$ if a random donor has type O+ blood. State the distribution of $X$.",
              a: "$X \\sim \\text{Bernoulli}(0.4)$."
            }
          ],
          hard: [
            {
              qid: "DR_002_h01",
              q: "A student answers a multiple-choice question with 5 options by guessing. Let $X = 1$ if the student gets the answer correct. State the distribution of $X$ and justify why it is Bernoulli.",
              a: "$X \\sim \\text{Bernoulli}(0.2)$. It is Bernoulli because there are exactly two outcomes (correct or incorrect) with a fixed probability $p = \\frac{1}{5} = 0.2$ of success."
            },
            {
              qid: "DR_002_h02",
              q: "Two dice are rolled. Let $X = 1$ if the sum is 7 and $X = 0$ otherwise. State the distribution of $X$.",
              a: "There are 6 ways to get a sum of 7 out of 36 equally likely outcomes, so $p = \\frac{6}{36} = \\frac{1}{6}$. $X \\sim \\text{Bernoulli}\\left(\\frac{1}{6}\\right)$."
            },
            {
              qid: "DR_002_h03",
              q: "A student has a 60% chance of passing each test. Explain why the indicator variable $X = 1$ if the student passes the first test is Bernoulli, but the total number of tests passed out of 5 is NOT Bernoulli.",
              a: "A single test result has two outcomes (pass/fail) with fixed $p = 0.6$, so $X \\sim \\text{Bernoulli}(0.6)$. The total number passed out of 5 takes values $\\{0, 1, 2, 3, 4, 5\\}$ — more than two outcomes — so it is not Bernoulli. It follows a $\\text{Bin}(5, 0.6)$ distribution."
            },
            {
              qid: "DR_002_h04",
              q: "A quality inspector tests items from a batch of 20, of which 4 are defective. She tests one item. Let $X = 1$ if defective. Is $X$ Bernoulli? Now she tests two items without replacement. Let $Y$ = number defective. Is $Y$ Bernoulli? Explain.",
              a: "Single item: $X \\sim \\text{Bernoulli}\\left(\\frac{4}{20}\\right) = \\text{Bernoulli}(0.2)$. Yes, it is Bernoulli.\nTwo items without replacement: $Y$ can take values $\\{0, 1, 2\\}$, so $Y$ is NOT Bernoulli (more than two outcomes). Also, the trials are not independent (sampling without replacement)."
            },
            {
              qid: "DR_002_h05",
              q: "A spinner has sections labelled Red (40%), Blue (35%), and Green (25%). Define a Bernoulli random variable $X$ for whether the spinner lands on Red. State its distribution, and explain why a Bernoulli variable cannot represent all three outcomes.",
              a: "$X = 1$ if Red, $X = 0$ if not Red. $X \\sim \\text{Bernoulli}(0.4)$.\nA Bernoulli variable has exactly two outcomes ($0$ and $1$). The spinner has three outcomes, so a single Bernoulli variable cannot distinguish between Blue and Green — it can only indicate Red vs not-Red."
            }
          ]
        }
,

    {
          pt_id: "DR_003",
          topic: "Discrete Random Variables",
          subtopic: "Binomial Distributions",
          concept: "Binomial Probability",
          pt: "Calculating binomial probability $P(X = k)$",
          testing: "Apply $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$",
          reason_bank: [
              "wrong_parameters",
              "wrong_event",
              "wrong_rule",
              "substitution_error",
              "algebra_slip",
              "not_sure"
            ],
          easy: [
            {
              qid: "DR_003_e01",
              q: "$X \\sim \\text{Bin}(5, 0.5)$. Find $P(X = 3)$.",
              a: "$P(X=3) = \\binom{5}{3}(0.5)^3(0.5)^2 = 10 \\times 0.03125 = 0.3125$."
            },
            {
              qid: "DR_003_e02",
              q: "$X \\sim \\text{Bin}(4, 0.5)$. Find $P(X = 2)$.",
              a: "$P(X=2) = \\binom{4}{2}(0.5)^2(0.5)^2 = 6 \\times 0.0625 = 0.375$."
            },
            {
              qid: "DR_003_e03",
              q: "$X \\sim \\text{Bin}(3, 0.5)$. Find $P(X = 0)$.",
              a: "$P(X=0) = \\binom{3}{0}(0.5)^0(0.5)^3 = 1 \\times 0.125 = 0.125$."
            }
          ],
          medium: [
            {
              qid: "DR_003_m01",
              q: "$X \\sim \\text{Bin}(8, 0.3)$. Find $P(X = 2)$.",
              a: "$P(X=2) = \\binom{8}{2}(0.3)^2(0.7)^6 = 28 \\times 0.09 \\times 0.117649 = 0.2965$"
            },
            {
              qid: "DR_003_m02",
              q: "$X \\sim \\text{Bin}(10, 0.25)$. Find $P(X = 3)$.",
              a: "$P(X=3) = \\binom{10}{3}(0.25)^3(0.75)^7 = 120 \\times 0.015625 \\times 0.133484 = 0.2503$."
            },
            {
              qid: "DR_003_m03",
              q: "$X \\sim \\text{Bin}(6, 0.4)$. Find $P(X = 4)$.",
              a: "$P(X=4) = \\binom{6}{4}(0.4)^4(0.6)^2 = 15 \\times 0.0256 \\times 0.36 = 0.1382$."
            },
            {
              qid: "DR_003_m04",
              q: "A fair die is rolled 12 times. Find the probability of getting exactly 2 sixes.",
              a: "$X \\sim \\text{Bin}\\left(12, \\frac{1}{6}\\right)$. $P(X=2) = \\binom{12}{2}\\left(\\frac{1}{6}\\right)^2\\left(\\frac{5}{6}\\right)^{10} = 66 \\times \\frac{1}{36} \\times 0.16151 = 0.2961$."
            },
            {
              qid: "DR_003_m05",
              q: "$X \\sim \\text{Bin}(7, 0.6)$. Find $P(X = 5)$.",
              a: "$P(X=5) = \\binom{7}{5}(0.6)^5(0.4)^2 = 21 \\times 0.07776 \\times 0.16 = 0.2613$."
            }
          ],
          hard: [
            {
              qid: "DR_003_h01",
              q: "$X \\sim \\text{Bin}(20, 0.15)$. Find $P(X = 4)$.",
              a: "$P(X=4) = \\binom{20}{4}(0.15)^4(0.85)^{16} = 4845 \\times 5.0625 \\times 10^{-4} \\times 0.07427 = 0.1821$."
            },
            {
              qid: "DR_003_h02",
              q: "$X \\sim \\text{Bin}(15, 0.35)$. Find $P(X = 6)$.",
              a: "$P(X=6) = \\binom{15}{6}(0.35)^6(0.65)^9 = 5005 \\times 1.8385 \\times 10^{-3} \\times 0.02072 = 0.1906$."
            },
            {
              qid: "DR_003_h03",
              q: "For $X \\sim \\text{Bin}(10, 0.3)$, find the most likely value of $X$ (the mode).",
              a: "The mode of $\\text{Bin}(n, p)$ is $\\lfloor (n+1)p \\rfloor = \\lfloor 3.3 \\rfloor = 3$.\nVerify: $P(X=3) = \\binom{10}{3}(0.3)^3(0.7)^7 = 0.2668$, which is the largest probability."
            },
            {
              qid: "DR_003_h04",
              q: "For $X \\sim \\text{Bin}(8, 0.4)$, find the ratio $\\frac{P(X=k+1)}{P(X=k)}$ and determine for which values of $k$ the probabilities are increasing.",
              a: "$\\frac{P(X=k+1)}{P(X=k)} = \\frac{(n-k)p}{(k+1)(1-p)} = \\frac{(8-k)(0.4)}{(k+1)(0.6)} = \\frac{2(8-k)}{3(k+1)}$.\nProbabilities increase when this ratio $> 1$: $2(8-k) > 3(k+1) \\Rightarrow 16 - 2k > 3k + 3 \\Rightarrow k < 2.6$.\nSo $P(X=k)$ increases for $k = 0, 1, 2$ and decreases for $k \\geq 3$. Mode is $k = 3$."
            },
            {
              qid: "DR_003_h05",
              q: "Two students independently sit multiple-choice tests. Student A answers 5 questions, each with probability 0.3 of getting correct. Student B answers 3 questions, each with probability 0.5. Find the probability that exactly one of the students gets at least one question correct.",
              a: "Let $X_A \\sim \\text{Bin}(5, 0.3)$ and $X_B \\sim \\text{Bin}(3, 0.5)$.\n$P(X_A = 0) = 0.7^5 = 0.16807$. $P(X_B = 0) = 0.5^3 = 0.125$.\n$P(\\text{exactly one scores} \\geq 1) = P(X_A \\geq 1) \\cdot P(X_B = 0) + P(X_A = 0) \\cdot P(X_B \\geq 1)$\n$= 0.83193 \\times 0.125 + 0.16807 \\times 0.875 = 0.10399 + 0.14706 = 0.2511$."
            }
          ]
        }
,

    {
          pt_id: "DR_004",
          topic: "Discrete Random Variables",
          subtopic: "Binomial Distributions",
          concept: "Binomial Probability",
          pt: "Calculating binomial tail probability",
          testing: "Sum individual P(X=k) or use complement P(X≥k) = 1−P(X≤k−1)",
          reason_bank: [
              "wrong_event",
              "wrong_parameters",
              "wrong_rule",
              "substitution_error",
              "algebra_slip",
              "not_sure"
            ],
          easy: [
            {
              qid: "DR_004_e01",
              q: "$X \\sim \\text{Bin}(4, 0.5)$. Find $P(X \\geq 3)$.",
              a: "$P(X \\geq 3) = P(X=3) + P(X=4) = \\binom{4}{3}(0.5)^4 + (0.5)^4 = 4(0.0625) + 0.0625 = 0.3125$."
            },
            {
              qid: "DR_004_e02",
              q: "$X \\sim \\text{Bin}(3, 0.5)$. Find $P(X \\leq 1)$.",
              a: "$P(X \\leq 1) = P(X=0) + P(X=1) = (0.5)^3 + 3(0.5)^3 = 0.125 + 0.375 = 0.5$."
            },
            {
              qid: "DR_004_e03",
              q: "$X \\sim \\text{Bin}(5, 0.5)$. Find $P(X \\geq 4)$.",
              a: "$P(X \\geq 4) = P(X=4) + P(X=5) = \\binom{5}{4}(0.5)^5 + (0.5)^5 = 5(0.03125) + 0.03125 = 0.1875$."
            }
          ],
          medium: [
            {
              qid: "DR_004_m01",
              q: "$X \\sim \\text{Bin}(5, 0.4)$. Find $P(X \\geq 3)$.",
              a: "$P(X \\geq 3) = P(3) + P(4) + P(5) = \\binom{5}{3}(0.4)^3(0.6)^2 + \\binom{5}{4}(0.4)^4(0.6) + (0.4)^5 = 0.2304 + 0.0768 + 0.01024 = 0.3174$"
            },
            {
              qid: "DR_004_m02",
              q: "$X \\sim \\text{Bin}(8, 0.3)$. Find $P(X \\leq 2)$.",
              a: "$P(X \\leq 2) = P(0) + P(1) + P(2)$\n$= 0.7^8 + \\binom{8}{1}(0.3)(0.7)^7 + \\binom{8}{2}(0.3)^2(0.7)^6$\n$= 0.05765 + 0.19765 + 0.29648 = 0.5518$."
            },
            {
              qid: "DR_004_m03",
              q: "$X \\sim \\text{Bin}(10, 0.2)$. Find $P(X \\geq 3)$ using the complement method.",
              a: "$P(X \\geq 3) = 1 - P(X \\leq 2) = 1 - [P(0) + P(1) + P(2)]$\n$= 1 - [0.8^{10} + \\binom{10}{1}(0.2)(0.8)^9 + \\binom{10}{2}(0.04)(0.8)^8]$\n$= 1 - [0.10737 + 0.26844 + 0.30199] = 1 - 0.6778 = 0.3222$."
            },
            {
              qid: "DR_004_m04",
              q: "$X \\sim \\text{Bin}(6, 0.35)$. Find $P(1 \\leq X \\leq 3)$.",
              a: "$P(1 \\leq X \\leq 3) = P(1) + P(2) + P(3)$\n$= \\binom{6}{1}(0.35)(0.65)^5 + \\binom{6}{2}(0.35)^2(0.65)^4 + \\binom{6}{3}(0.35)^3(0.65)^3$\n$= 0.2437 + 0.3280 + 0.2355 = 0.8072$."
            },
            {
              qid: "DR_004_m05",
              q: "A fair die is rolled 12 times. Find $P(X \\geq 3)$ where $X$ is the number of sixes. Use the complement method.",
              a: "$X \\sim \\text{Bin}\\left(12, \\frac{1}{6}\\right)$.\n$P(X \\geq 3) = 1 - P(X \\leq 2) = 1 - [P(0) + P(1) + P(2)]$\n$= 1 - \\left[\\left(\\frac{5}{6}\\right)^{12} + 12 \\cdot \\frac{1}{6} \\cdot \\left(\\frac{5}{6}\\right)^{11} + 66 \\cdot \\frac{1}{36} \\cdot \\left(\\frac{5}{6}\\right)^{10}\\right]$\n$= 1 - [0.1122 + 0.2692 + 0.2961] = 1 - 0.6774 = 0.3226$."
            }
          ],
          hard: [
            {
              qid: "DR_004_h01",
              q: "$X \\sim \\text{Bin}(15, 0.3)$. Find $P(3 \\leq X \\leq 7)$.",
              a: "$P(3 \\leq X \\leq 7) = \\sum_{k=3}^{7} \\binom{15}{k}(0.3)^k(0.7)^{15-k}$\nUsing CAS: $= 0.1700 + 0.2186 + 0.2061 + 0.1472 + 0.0811 = 0.8232$."
            },
            {
              qid: "DR_004_h02",
              q: "$X \\sim \\text{Bin}(10, 0.4)$. Find $P(X > E(X))$.",
              a: "$E(X) = np = 4$. $P(X > 4) = P(X \\geq 5) = \\sum_{k=5}^{10} \\binom{10}{k}(0.4)^k(0.6)^{10-k}$\nUsing CAS: $= 0.2007 + 0.1115 + 0.0425 + 0.0106 + 0.0016 + 0.0001 = 0.3669$."
            },
            {
              qid: "DR_004_h03",
              q: "$X \\sim \\text{Bin}(20, 0.1)$. Find $P(X \\geq 4)$ using the complement method.",
              a: "$P(X \\geq 4) = 1 - P(X \\leq 3) = 1 - [P(0) + P(1) + P(2) + P(3)]$\n$P(0) = 0.9^{20} = 0.1216$, $P(1) = 20(0.1)(0.9)^{19} = 0.2702$\n$P(2) = 190(0.01)(0.9)^{18} = 0.2852$, $P(3) = 1140(0.001)(0.9)^{17} = 0.1901$\n$P(X \\geq 4) = 1 - 0.8670 = 0.1330$."
            },
            {
              qid: "DR_004_h04",
              q: "A manufacturer needs $P(\\text{at least one defective in a batch of 8})> 0.9$. Each item is independently defective with probability $p$. Find the minimum $p$ (to 2 d.p.).",
              a: "$P(X \\geq 1) = 1 - (1-p)^8 > 0.9 \\Rightarrow (1-p)^8 < 0.1$.\n$1 - p < 0.1^{1/8} = 0.7499 \\Rightarrow p > 0.2501$.\nMinimum $p \\approx 0.25$ (to 2 d.p.)."
            },
            {
              qid: "DR_004_h05",
              q: "A fair die is rolled 10 times. Find the probability of getting at least 2 sixes.",
              a: "$X \\sim \\text{Bin}\\left(10, \\frac{1}{6}\\right)$.\n$P(X \\geq 2) = 1 - P(0) - P(1) = 1 - \\left(\\frac{5}{6}\\right)^{10} - 10 \\cdot \\frac{1}{6} \\cdot \\left(\\frac{5}{6}\\right)^9$\n$= 1 - 0.16151 - 0.32301 = 0.5155$."
            }
          ]
        }
,

    {
          pt_id: "DR_005",
          topic: "Discrete Random Variables",
          subtopic: "Binomial Distributions",
          concept: "Binomial Probability",
          pt: "Calculating expected value and variance of binomial distribution",
          testing: "Use E(X)=np, Var(X)=np(1−p), SD(X)=√(np(1−p))",
          reason_bank: [
              "wrong_rule",
              "wrong_parameters",
              "substitution_error",
              "algebra_slip",
              "interpretation_mixup",
              "not_sure"
            ],
          easy: [
            {
              qid: "DR_005_e01",
              q: "$X \\sim \\text{Bin}(10, 0.5)$. Find $E(X)$ and $\\text{Var}(X)$.",
              a: "$E(X) = np = 10 \\times 0.5 = 5$. $\\text{Var}(X) = np(1-p) = 10 \\times 0.25 = 2.5$."
            },
            {
              qid: "DR_005_e02",
              q: "$X \\sim \\text{Bin}(20, 0.5)$. Find $E(X)$ and $\\text{SD}(X)$.",
              a: "$E(X) = 20 \\times 0.5 = 10$. $\\text{Var}(X) = 20 \\times 0.25 = 5$. $\\text{SD}(X) = \\sqrt{5} \\approx 2.236$."
            },
            {
              qid: "DR_005_e03",
              q: "$X \\sim \\text{Bin}\\left(6, \\frac{1}{3}\\right)$. Find $E(X)$ and $\\text{Var}(X)$.",
              a: "$E(X) = 6 \\times \\frac{1}{3} = 2$. $\\text{Var}(X) = 6 \\times \\frac{1}{3} \\times \\frac{2}{3} = \\frac{4}{3} \\approx 1.333$."
            }
          ],
          medium: [
            {
              qid: "DR_005_m01",
              q: "$X \\sim \\text{Bin}(50, 0.2)$. Find $E(X)$ and $\\text{SD}(X)$.",
              a: "$E(X) = np = 10$. $\\text{Var}(X) = np(1-p) = 8$. $\\text{SD}(X) = 2\\sqrt{2} \\approx 2.83$"
            },
            {
              qid: "DR_005_m02",
              q: "$X \\sim \\text{Bin}(30, 0.4)$. Find $E(X)$ and $\\text{Var}(X)$.",
              a: "$E(X) = 30 \\times 0.4 = 12$. $\\text{Var}(X) = 30 \\times 0.4 \\times 0.6 = 7.2$."
            },
            {
              qid: "DR_005_m03",
              q: "$X \\sim \\text{Bin}(100, 0.15)$. Find $E(X)$, $\\text{Var}(X)$, and $\\text{SD}(X)$.",
              a: "$E(X) = 100 \\times 0.15 = 15$. $\\text{Var}(X) = 100 \\times 0.15 \\times 0.85 = 12.75$. $\\text{SD}(X) = \\sqrt{12.75} \\approx 3.571$."
            },
            {
              qid: "DR_005_m04",
              q: "$X \\sim \\text{Bin}(25, 0.6)$. Find $E(X)$, $\\text{Var}(X)$, and $\\text{SD}(X)$.",
              a: "$E(X) = 25 \\times 0.6 = 15$. $\\text{Var}(X) = 25 \\times 0.6 \\times 0.4 = 6$. $\\text{SD}(X) = \\sqrt{6} \\approx 2.449$."
            },
            {
              qid: "DR_005_m05",
              q: "$X \\sim \\text{Bin}(80, 0.35)$. Find $E(X)$ and $\\text{Var}(X)$.",
              a: "$E(X) = 80 \\times 0.35 = 28$. $\\text{Var}(X) = 80 \\times 0.35 \\times 0.65 = 18.2$."
            }
          ],
          hard: [
            {
              qid: "DR_005_h01",
              q: "$X \\sim \\text{Bin}(200, 0.05)$. Find $E(X)$ and $\\text{SD}(X)$, then find $P(E(X) - \\text{SD}(X) \\leq X \\leq E(X) + \\text{SD}(X))$ using CAS.",
              a: "$E(X) = 10$, $\\text{SD}(X) = \\sqrt{9.5} \\approx 3.082$.\nRange: $6.918 \\leq X \\leq 13.082$, i.e. $7 \\leq X \\leq 13$.\nUsing CAS: $P(7 \\leq X \\leq 13) \\approx 0.746$."
            },
            {
              qid: "DR_005_h02",
              q: "Compare $\\text{SD}(X)$ for $X_1 \\sim \\text{Bin}(100, 0.1)$ and $X_2 \\sim \\text{Bin}(100, 0.5)$. Which distribution has more spread?",
              a: "$\\text{SD}(X_1) = \\sqrt{100 \\times 0.1 \\times 0.9} = \\sqrt{9} = 3$.\n$\\text{SD}(X_2) = \\sqrt{100 \\times 0.5 \\times 0.5} = \\sqrt{25} = 5$.\n$X_2$ has more spread. The variance $np(1-p)$ is maximised when $p = 0.5$."
            },
            {
              qid: "DR_005_h03",
              q: "$X \\sim \\text{Bin}(n, 0.3)$ and $\\text{Var}(X) = 6.3$. Find $n$.",
              a: "$\\text{Var}(X) = n \\times 0.3 \\times 0.7 = 0.21n = 6.3 \\Rightarrow n = 30$."
            },
            {
              qid: "DR_005_h04",
              q: "$X \\sim \\text{Bin}(20, 0.4)$. Let $Y = 2X + 3$. Find $E(Y)$ and $\\text{Var}(Y)$.",
              a: "$E(X) = 8$, $\\text{Var}(X) = 20 \\times 0.4 \\times 0.6 = 4.8$.\n$E(Y) = 2(8) + 3 = 19$.\n$\\text{Var}(Y) = 4 \\times 4.8 = 19.2$."
            },
            {
              qid: "DR_005_h05",
              q: "The coefficient of variation (CV) is $\\frac{\\text{SD}}{E(X)}$. Compare the CV of $X_1 \\sim \\text{Bin}(50, 0.1)$ and $X_2 \\sim \\text{Bin}(50, 0.9)$. Which has relatively more variability?",
              a: "$X_1$: $E = 5$, $\\text{SD} = \\sqrt{4.5} \\approx 2.121$. $\\text{CV}_1 = \\frac{2.121}{5} \\approx 0.424$.\n$X_2$: $E = 45$, $\\text{SD} = \\sqrt{4.5} \\approx 2.121$. $\\text{CV}_2 = \\frac{2.121}{45} \\approx 0.047$.\nBoth have the same SD, but $X_1$ has much higher relative variability ($\\text{CV}_1 \\gg \\text{CV}_2$)."
            }
          ]
        }
,

    {
          pt_id: "DR_006",
          topic: "Discrete Random Variables",
          subtopic: "Binomial Distributions",
          concept: "Binomial Probability",
          pt: "Calculating negative binomial probability (trials until rth success)",
          testing: "P(rth success on trial t) = C(t−1, r−1) p^r (1−p)^{t−r}",
          reason_bank: [
              "wrong_model",
              "wrong_parameters",
              "wrong_rule",
              "substitution_error",
              "algebra_slip",
              "not_sure"
            ],
          easy: [
            {
              qid: "DR_006_e01",
              q: "A fair coin is flipped repeatedly. Find the probability that the 2nd Head occurs on the 4th flip.",
              a: "Need 1 Head in first 3 flips, then Head on 4th.\n$P = \\binom{3}{1}(0.5)^1(0.5)^2 \\times 0.5 = 3 \\times 0.0625 = 0.1875$."
            },
            {
              qid: "DR_006_e02",
              q: "A fair coin is flipped repeatedly. Find the probability that the 1st Head occurs on the 3rd flip.",
              a: "$P = (0.5)^2 \\times 0.5 = 0.125$."
            },
            {
              qid: "DR_006_e03",
              q: "A fair coin is flipped repeatedly. Find the probability that the 2nd Head occurs on the 2nd flip.",
              a: "$P = (0.5)^2 = 0.25$. (Both flips must be Heads.)"
            }
          ],
          medium: [
            {
              qid: "DR_006_m01",
              q: "The probability of scoring a goal in any shot is 0.2. Find the probability that the 3rd goal is scored on the 8th shot.",
              a: "Need 2 goals in first 7 shots, then goal on 8th. $P = \\binom{7}{2}(0.2)^2(0.8)^5 \\times 0.2 = 21 \\times 0.04 \\times 0.32768 \\times 0.2 = 0.05505$"
            },
            {
              qid: "DR_006_m02",
              q: "A salesman has probability 0.3 of making a sale on each call. Find the probability that his 2nd sale is on the 5th call.",
              a: "Need 1 sale in first 4 calls, then sale on 5th.\n$P = \\binom{4}{1}(0.3)(0.7)^3 \\times 0.3 = 4 \\times 0.3 \\times 0.343 \\times 0.3 = 0.1235$."
            },
            {
              qid: "DR_006_m03",
              q: "A machine produces items with $P(\\text{defective}) = 0.25$. Find the probability that the first defective item is the 4th one produced.",
              a: "Geometric case (1st success on trial 4): $P = (0.75)^3 \\times 0.25 = 0.4219 \\times 0.25 = 0.1055$."
            },
            {
              qid: "DR_006_m04",
              q: "The probability of passing a driving test is 0.4. Find the probability that a student passes for the 3rd time on their 7th attempt.",
              a: "Need 2 passes in first 6 attempts, then pass on 7th.\n$P = \\binom{6}{2}(0.4)^2(0.6)^4 \\times 0.4 = 15 \\times 0.16 \\times 0.1296 \\times 0.4 = 0.1244$."
            },
            {
              qid: "DR_006_m05",
              q: "An inspector finds defective items with probability 0.15. Find the probability that the first defective is the 6th item inspected.",
              a: "$P = (0.85)^5 \\times 0.15 = 0.4437 \\times 0.15 = 0.06656$."
            }
          ],
          hard: [
            {
              qid: "DR_006_h01",
              q: "The probability of winning any particular game is 0.3. Find the probability that the 4th win comes on the 10th game.",
              a: "Need 3 wins in first 9 games, then win on 10th.\n$P = \\binom{9}{3}(0.3)^3(0.7)^6 \\times 0.3 = 84 \\times 0.027 \\times 0.11765 \\times 0.3 = 0.0800$."
            },
            {
              qid: "DR_006_h02",
              q: "The expected number of trials to achieve the $r$th success is $E(T) = \\frac{r}{p}$. Find $E(T)$ when $r = 3$ and $p = 0.4$.",
              a: "$E(T) = \\frac{3}{0.4} = 7.5$ trials."
            },
            {
              qid: "DR_006_h03",
              q: "A basketball player has free throw probability $\\frac{1}{3}$. Find the probability that at least 5 shots are needed to make 2 free throws.",
              a: "$P(T \\geq 5) = 1 - P(T = 2) - P(T = 3) - P(T = 4)$.\n$P(T=2) = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$.\n$P(T=3) = \\binom{2}{1} \\cdot \\frac{1}{3} \\cdot \\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{4}{27}$.\n$P(T=4) = \\binom{3}{1} \\cdot \\frac{1}{3} \\cdot \\left(\\frac{2}{3}\\right)^2 \\cdot \\frac{1}{3} = \\frac{12}{81} = \\frac{4}{27}$.\n$P(T \\geq 5) = 1 - \\frac{1}{9} - \\frac{4}{27} - \\frac{4}{27} = 1 - \\frac{3 + 4 + 4}{27} = \\frac{16}{27} \\approx 0.593$."
            },
            {
              qid: "DR_006_h04",
              q: "A biased coin has $P(\\text{Head}) = 0.7$. Find the probability that exactly 3 flips are needed to get 2 Heads.",
              a: "Need exactly 1 Head in first 2 flips, then Head on 3rd.\n$P = \\binom{2}{1}(0.7)(0.3) \\times 0.7 = 2 \\times 0.21 \\times 0.7 = 0.294$."
            },
            {
              qid: "DR_006_h05",
              q: "Compare the probability that the 3rd success occurs on the 8th trial for $p = 0.2$ versus $p = 0.3$.",
              a: "$p = 0.2$: $P = \\binom{7}{2}(0.2)^2(0.8)^5 \\times 0.2 = 21 \\times 0.04 \\times 0.32768 \\times 0.2 = 0.05505$.\n$p = 0.3$: $P = \\binom{7}{2}(0.3)^2(0.7)^5 \\times 0.3 = 21 \\times 0.09 \\times 0.16807 \\times 0.3 = 0.09530$.\nThe probability is higher for $p = 0.3$ since success is more likely on each trial."
            }
          ]
        }
,

    {
          pt_id: "DR_007",
          topic: "Discrete Random Variables",
          subtopic: "Binomial Distributions",
          concept: "Binomial Probability",
          pt: "Finding n and p from mean and variance of binomial, then evaluating a probability",
          testing: "Use np=E(X) and np(1−p)=Var(X) to solve simultaneous equations",
          reason_bank: [
              "wrong_rule",
              "algebra_slip",
              "wrong_parameters",
              "substitution_error",
              "interpretation_mixup",
              "not_sure"
            ],
          easy: [
            {
              qid: "DR_007_e01",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 4$ and $\\text{Var}(X) = 2$. Find $n$ and $p$.",
              a: "$np = 4$ and $np(1-p) = 2$. Dividing: $1-p = \\frac{2}{4} = 0.5$, so $p = 0.5$. Then $n = \\frac{4}{0.5} = 8$."
            },
            {
              qid: "DR_007_e02",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 6$ and $\\text{Var}(X) = 3$. Find $n$ and $p$.",
              a: "$1-p = \\frac{3}{6} = 0.5$, so $p = 0.5$, $n = 12$."
            },
            {
              qid: "DR_007_e03",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 10$ and $\\text{Var}(X) = 5$. Find $n$ and $p$.",
              a: "$1-p = \\frac{5}{10} = 0.5$, so $p = 0.5$, $n = 20$."
            }
          ],
          medium: [
            {
              qid: "DR_007_m01",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 6$ and $\\text{Var}(X) = 4.2$. Find $n$ and $p$.",
              a: "$np = 6$ and $np(1-p) = 4.2$, so $1-p = 0.7 \\Rightarrow p = 0.3$. Then $n = 20$."
            },
            {
              qid: "DR_007_m02",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 9$ and $\\text{Var}(X) = 6.3$. Find $n$ and $p$.",
              a: "$1-p = \\frac{6.3}{9} = 0.7$, so $p = 0.3$, $n = \\frac{9}{0.3} = 30$."
            },
            {
              qid: "DR_007_m03",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 12$ and $\\text{Var}(X) = 4.8$. Find $n$ and $p$.",
              a: "$1-p = \\frac{4.8}{12} = 0.4$, so $p = 0.6$, $n = \\frac{12}{0.6} = 20$."
            },
            {
              qid: "DR_007_m04",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 8$ and $\\text{Var}(X) = 6.4$. Find $n$ and $p$.",
              a: "$1-p = \\frac{6.4}{8} = 0.8$, so $p = 0.2$, $n = \\frac{8}{0.2} = 40$."
            },
            {
              qid: "DR_007_m05",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 15$ and $\\text{Var}(X) = 3.75$. Find $n$ and $p$.",
              a: "$1-p = \\frac{3.75}{15} = 0.25$, so $p = 0.75$, $n = \\frac{15}{0.75} = 20$."
            }
          ],
          hard: [
            {
              qid: "DR_007_h01",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 7$ and $\\text{Var}(X) = 2.1$. Find $n$ and $p$, then calculate $P(X = 7)$.",
              a: "$1-p = \\frac{2.1}{7} = 0.3$, so $p = 0.7$, $n = 10$.\n$P(X=7) = \\binom{10}{7}(0.7)^7(0.3)^3 = 120 \\times 0.08235 \\times 0.027 = 0.2668$."
            },
            {
              qid: "DR_007_h02",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 5$ and $\\text{Var}(X) = 4$. Find $n$ and $p$, then calculate $P(X \\leq 1)$.",
              a: "$1-p = \\frac{4}{5} = 0.8$, so $p = 0.2$, $n = 25$.\n$P(X \\leq 1) = (0.8)^{25} + 25(0.2)(0.8)^{24} = 0.00378 + 0.02362 = 0.0274$."
            },
            {
              qid: "DR_007_h03",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 6$ and $\\text{Var}(X) = 2.4$. Find $n$, $p$, $P(X \\geq 5)$, and $E(2X - 1)$.",
              a: "$1-p = 0.4$, $p = 0.6$, $n = 10$.\n$P(X \\geq 5) = \\sum_{k=5}^{10} \\binom{10}{k}(0.6)^k(0.4)^{10-k}$. Using CAS: $\\approx 0.8338$.\n$E(2X-1) = 2(6) - 1 = 11$."
            },
            {
              qid: "DR_007_h04",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 8$ and $\\text{SD}(X) = 2$. Find $n$ and $p$.",
              a: "$\\text{Var}(X) = 4$. $1-p = \\frac{4}{8} = 0.5$, so $p = 0.5$, $n = 16$."
            },
            {
              qid: "DR_007_h05",
              q: "$X \\sim \\text{Bin}(n, p)$ with $E(X) = 10$ and $\\text{Var}(X) = 9$. Find $n$, $p$, and $P(X = 0)$.",
              a: "$1-p = \\frac{9}{10} = 0.9$, so $p = 0.1$, $n = 100$.\n$P(X = 0) = (0.9)^{100} \\approx 2.656 \\times 10^{-5}$ (essentially zero)."
            }
          ]
        }
,

    {
          pt_id: "DR_008",
          topic: "Discrete Random Variables",
          subtopic: "Binomial Distributions",
          concept: "Binomial Setup",
          pt: "Evaluating validity of binomial distribution assumptions in context",
          testing: "Check: fixed n, two outcomes, constant p, independence",
          reason_bank: ["wrong_model","interpretation_mixup","setup_error","wrong_parameters","algebra_slip","not_sure"],
          easy: [
            {qid:"DR_008_e01",q:"A fair coin is flipped 10 times. Is it valid to model the number of Heads as binomial? Explain.",a:"Yes. Fixed $n = 10$, two outcomes (H/T), constant $p = 0.5$, and flips are independent. $X \\sim \\text{Bin}(10, 0.5)$."},
            {qid:"DR_008_e02",q:"A fair die is rolled 8 times. Is the number of sixes binomial? Explain.",a:"Yes. Fixed $n = 8$, two outcomes (six or not six), constant $p = \\frac{1}{6}$, and rolls are independent."},
            {qid:"DR_008_e03",q:"A spinner with Red (40%) and Blue (60%) is spun 5 times. Is the number of Reds binomial?",a:"Yes. Fixed $n = 5$, two outcomes (Red/Blue), constant $p = 0.4$, independent spins."}
          ],
          medium: [
            {qid:"DR_008_m01",q:"A survey asks 50 people from the same workplace if they support a policy. Can $X$ (number who support) be modelled by a binomial distribution? Explain.",a:"Potentially not valid because responses from colleagues in the same workplace may not be independent — social influence could affect answers. Also, the probability of support may not be constant across individuals."},
            {qid:"DR_008_m02",q:"A box contains 100 batteries, 10 of which are defective. A sample of 5 is drawn without replacement. Is the number of defective batteries binomial?",a:"Strictly not binomial because drawing without replacement means trials are not independent and $p$ changes. However, since the sample (5) is small relative to the population (100), a binomial model with $p = 0.1$ gives a reasonable approximation."},
            {qid:"DR_008_m03",q:"20 randomly selected students are asked their favourite colour from a list of 6 options. Is the number who choose blue binomial? Explain.",a:"Yes. Fixed $n = 20$, two outcomes (blue vs not blue), if students respond independently then $p$ is constant for each trial, and trials are independent. $X \\sim \\text{Bin}(20, p)$ where $p$ is the proportion who favour blue."},
            {qid:"DR_008_m04",q:"A teacher gives 15 students the same exam. Is the number who pass binomial? State assumptions needed.",a:"It could be modelled as binomial if: (1) each student's result is independent of others, and (2) each student has the same probability of passing. This may not hold — students have varying abilities, making $p$ non-constant."},
            {qid:"DR_008_m05",q:"Patients arrive at a hospital. We record whether each patient has a particular condition (2% prevalence). Is the number with the condition in a sample of 50 binomial?",a:"Yes, provided patients are independently selected and each has the same probability $p = 0.02$ of having the condition. $X \\sim \\text{Bin}(50, 0.02)$."}
          ],
          hard: [
            {qid:"DR_008_h01",q:"A bag contains 5 red and 15 blue balls. Balls are drawn one at a time with replacement. Is the number of red balls in 10 draws binomial? What if drawing is without replacement?",a:"**With replacement**: Yes — $n = 10$, $p = \\frac{5}{20} = 0.25$ constant, independent trials.\n**Without replacement**: Not binomial — $p$ changes after each draw (e.g. if first draw is red, $p = \\frac{4}{19}$ for second draw). Trials are not independent. The hypergeometric distribution applies."},
            {qid:"DR_008_h02",q:"An internet service provider says 5% of connections fail. A researcher tests 200 connections sequentially. Explain why a binomial model might not be appropriate.",a:"The binomial requires independence and constant $p$. Sequential connections may not be independent — if the server is under load, failure probability may increase (correlation). Also, $p$ could change during the testing period due to network congestion, making $p$ non-constant."},
            {qid:"DR_008_h03",q:"Cards are dealt from a well-shuffled deck. Let $X$ = number of hearts in a hand of 5 cards. Explain why this is not strictly binomial, and state when the binomial approximation is reasonable.",a:"Not strictly binomial because dealing without replacement means $p$ changes (e.g. $P(\\text{1st heart}) = \\frac{13}{52}$ but $P(\\text{2nd heart} \\mid \\text{1st heart}) = \\frac{12}{51}$). The binomial approximation is reasonable when the sample is small relative to the population — here $\\frac{5}{52} < 10\\%$, so it gives a reasonable approximation."},
            {qid:"DR_008_h04",q:"A disease test has 95% sensitivity. 30 infected people are tested. Is the number of positive results binomial? What real-world factor could invalidate this model?",a:"Potentially binomial if tests are independent with constant $p = 0.95$. However, if tests are conducted in the same lab using the same batch of reagents, a batch defect could affect all tests simultaneously, violating independence. Also, disease severity varies, potentially affecting sensitivity."},
            {qid:"DR_008_h05",q:"A student guesses on a test with 10 questions: 5 true/false ($P = 0.5$) and 5 multiple-choice with 4 options ($P = 0.25$). Explain why the total number correct is NOT binomial.",a:"The probability of success is not constant across all trials: $p = 0.5$ for true/false questions and $p = 0.25$ for multiple-choice. Since $p$ is not the same for every trial, the total correct cannot follow a single binomial distribution. Each group separately could be modelled as binomial."}
          ]
        }
,

    {
          pt_id: "DR_009",
          topic: "Discrete Random Variables",
          subtopic: "Binomial Distributions",
          concept: "Binomial Setup",
          pt: "Stating assumptions required for binomial distribution validity",
          testing: "State: fixed n, two outcomes, constant p, independent trials",
          reason_bank: ["wrong_model","interpretation_mixup","setup_error","wrong_parameters","algebra_slip","not_sure"],
          easy: [
            {qid:"DR_009_e01",q:"State the four conditions required for a binomial distribution.",a:"(1) Fixed number of trials $n$. (2) Each trial has exactly two outcomes (success/failure). (3) Probability of success $p$ is constant for each trial. (4) Trials are independent."},
            {qid:"DR_009_e02",q:"Which condition of a binomial model requires that one trial does not affect another?",a:"Independence — the outcome of any trial must not affect the outcome of any other trial."},
            {qid:"DR_009_e03",q:"Which condition of a binomial model requires that the chance of success does not change?",a:"Constant probability — $p$ must remain the same for every trial."}
          ],
          medium: [
            {qid:"DR_009_m01",q:"State the conditions required for a binomial distribution to be an appropriate model.",a:"(1) Fixed number of trials $n$. (2) Each trial has exactly two outcomes (success/failure). (3) Probability of success $p$ is constant for each trial. (4) Trials are independent."},
            {qid:"DR_009_m02",q:"A coin is flipped until 3 Heads appear. Identify which binomial condition is violated.",a:"The number of trials is not fixed — flipping continues until 3 Heads appear. This violates the 'fixed $n$' condition."},
            {qid:"DR_009_m03",q:"Cards are drawn without replacement from a deck. Identify which binomial condition is violated.",a:"Without replacement, $p$ changes after each draw and trials are not independent. Both 'constant $p$' and 'independence' are violated."},
            {qid:"DR_009_m04",q:"A die is rolled 10 times. The outcome is recorded as 1, 2, 3, 4, 5, or 6. Is this binomial? Explain.",a:"Not binomial as stated — there are 6 outcomes, not 2. However, if we redefine success (e.g. 'rolling a 6') vs failure ('not 6'), then it becomes binomial."},
            {qid:"DR_009_m05",q:"A basketball player takes 20 free throws. After each miss, her confidence drops and her success rate decreases. Identify the violated condition.",a:"The probability of success $p$ is not constant — it decreases after each miss. This violates the 'constant $p$' condition. Also, trials are not independent since the result of one trial affects the next."}
          ],
          hard: [
            {qid:"DR_009_h01",q:"A factory tests items from a batch of 1000, of which 50 are defective. A sample of 10 is drawn without replacement. Explain why binomial is not technically valid but may be approximately valid.",a:"Without replacement, trials are dependent and $p$ changes (e.g. $p_1 = \\frac{50}{1000}$, $p_2 = \\frac{49}{999}$ if first was defective). However, since $\\frac{n}{N} = \\frac{10}{1000} = 1\\% \\ll 10\\%$, the change in $p$ is negligible, so $\\text{Bin}(10, 0.05)$ is a good approximation."},
            {qid:"DR_009_h02",q:"A multiple-choice test has 20 questions, each with 4 options. A student knows the answer to 8 questions and guesses the rest. Explain why the total number correct is not binomial.",a:"$p$ is not constant: for the 8 known questions, $p = 1$; for the 12 guessed, $p = 0.25$. Since success probability differs between questions, a single binomial model does not apply. The total correct is $8 + Y$ where $Y \\sim \\text{Bin}(12, 0.25)$."},
            {qid:"DR_009_h03",q:"In a tennis match, the probability that player A wins any point changes depending on who is serving. Explain why the number of points won by A in a set is not binomial.",a:"The probability $p$ changes between serves (higher when serving). Since $p$ is not constant across all points, and the serving rotation creates dependence on previous outcomes, the binomial model is not appropriate."},
            {qid:"DR_009_h04",q:"A survey selects 100 people from a town of 500. Explain which condition is violated and suggest an appropriate distribution.",a:"Sampling without replacement from a finite population violates independence and constant $p$ (because $\\frac{100}{500} = 20\\% > 10\\%$). The hypergeometric distribution is more appropriate. A binomial approximation would not be reliable here."},
            {qid:"DR_009_h05",q:"An investor makes 12 trades. Each trade has a 55% success rate, but after 3 consecutive losses the investor changes strategy (increasing $p$ to 70%). Identify all violated conditions.",a:"(1) Constant $p$ — violated because $p$ changes from 0.55 to 0.70 after 3 consecutive losses.\n(2) Independence — violated because the strategy change depends on the outcomes of previous trades.\nConditions met: fixed $n = 12$ and two outcomes (profit/loss) are satisfied."}
          ]
        }
,

    {
          pt_id: "DR_010",
          topic: "Discrete Random Variables",
          subtopic: "Binomial Distributions",
          concept: "Binomial Setup",
          pt: "Stating binomial distribution $X \\sim \\text{Bin}(n,p)$ from context",
          testing: "Identify n (number of trials) and p (probability of success) from context",
          reason_bank: ["wrong_model","wrong_parameters","interpretation_mixup","setup_error","algebra_slip","not_sure"],
          easy: [
            {qid:"DR_010_e01",q:"A fair coin is flipped 10 times. Let $X$ be the number of Heads. State the distribution of $X$.",a:"$X \\sim \\text{Bin}(10, 0.5)$."},
            {qid:"DR_010_e02",q:"A basketball player with a 70% free throw rate attempts 8 free throws. Let $X$ be the number of successful shots. State the distribution of $X$.",a:"$X \\sim \\text{Bin}(8, 0.7)$."},
            {qid:"DR_010_e03",q:"A test has 15 true/false questions. A student guesses every answer. Let $X$ be the number correct. State the distribution of $X$.",a:"$X \\sim \\text{Bin}(15, 0.5)$."}
          ],
          medium: [
            {qid:"DR_010_m01",q:"A fair six-sided die is rolled 12 times. Let $X$ be the number of sixes rolled. State the distribution of $X$.",a:"$X \\sim \\text{Bin}\\left(12, \\frac{1}{6}\\right)$"},
            {qid:"DR_010_m02",q:"In a class, 70% of students pass. A random sample of 20 students is selected. Let $X$ be the number who pass. State the distribution of $X$.",a:"$X \\sim \\text{Bin}(20, 0.7)$"},
            {qid:"DR_010_m03",q:"A factory produces phones with a 3% defect rate. A batch of 50 phones is tested. Let $X$ be the number of defective phones. State the distribution of $X$.",a:"$X \\sim \\text{Bin}(50, 0.03)$."},
            {qid:"DR_010_m04",q:"An email filter correctly classifies 60% of spam emails. In a batch of 30 spam emails, let $X$ be the number correctly identified. State the distribution of $X$.",a:"$X \\sim \\text{Bin}(30, 0.6)$."},
            {qid:"DR_010_m05",q:"Seeds are planted with an 85% germination rate. If 25 seeds are planted, let $X$ be the number that germinate. State the distribution of $X$.",a:"$X \\sim \\text{Bin}(25, 0.85)$."}
          ],
          hard: [
            {qid:"DR_010_h01",q:"A multiple-choice test has 20 questions, each with 5 options. A student guesses all answers. Define a suitable random variable and state its distribution. Also state the probability of getting more than half correct.",a:"Let $X$ = number of correct answers. $X \\sim \\text{Bin}(20, 0.2)$.\n$P(X > 10) = P(X \\geq 11)$. Using CAS: $\\approx 0.00003$ (extremely unlikely)."},
            {qid:"DR_010_h02",q:"In a quality control process, each item has a 4% chance of being defective. Items are tested until 3 defectives are found. Explain why the number of defectives in the first 100 items is binomial, but the total number of items tested is not.",a:"In the first 100 items: fixed $n = 100$, constant $p = 0.04$, independent trials → $X \\sim \\text{Bin}(100, 0.04)$.\nThe total items tested until 3 defectives: $n$ is not fixed (it depends on outcomes), so this is not binomial — it follows a negative binomial distribution."},
            {qid:"DR_010_h03",q:"A traffic study records whether each of 40 cars at an intersection turns left ($P = 0.15$). State the distribution and calculate the expected number and standard deviation of left-turning cars.",a:"$X \\sim \\text{Bin}(40, 0.15)$. $E(X) = 6$. $\\text{Var}(X) = 40 \\times 0.15 \\times 0.85 = 5.1$. $\\text{SD}(X) = \\sqrt{5.1} \\approx 2.26$."},
            {qid:"DR_010_h04",q:"Two independent processes produce widgets. Process A: 30 widgets with 10% defect rate. Process B: 20 widgets with 5% defect rate. State the distribution of defectives from each, and of the total number of defectives.",a:"$X_A \\sim \\text{Bin}(30, 0.1)$, $X_B \\sim \\text{Bin}(20, 0.05)$.\nSince $p$ differs between processes, $X_A + X_B$ is NOT a single binomial. It is the sum of two independent binomials with different parameters."},
            {qid:"DR_010_h05",q:"A survey of 200 people asks if they support a policy. 60% support it. A random sample of 15 is taken. State the distribution of $X$ (number supporting) and justify why the binomial model is appropriate despite sampling from a finite population.",a:"$X \\sim \\text{Bin}(15, 0.6)$. The binomial approximation is appropriate because $\\frac{n}{N} = \\frac{15}{200} = 7.5\\% < 10\\%$, so the change in probability due to sampling without replacement is negligible."}
          ]
        }
,

    {
          pt_id: "DR_011",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Distribution Tables",
          pt: "Constructing probability distribution from frequency data",
          testing: "Divide each frequency by total to obtain probabilities; verify ΣP = 1",
          reason_bank: ["probability_sum_error","setup_error","substitution_error","interpretation_mixup","algebra_slip","not_sure"],
          easy: [
            {qid:"DR_011_e01",q:"A class of 20 students sat a quiz. Their scores are recorded below.\n| Score | 1 | 2 | 3 | 4 |\n|-------|---|---|---|---|\n| Frequency | 4 | 6 | 6 | 4 |\nConstruct the probability distribution for $X$, the score.",a:"Divide each frequency by $20$: $P(X=1) = 0.2$, $P(X=2) = 0.3$, $P(X=3) = 0.3$, $P(X=4) = 0.2$."},
            {qid:"DR_011_e02",q:"A shop records the number of items bought by 40 customers.\n| Items | 0 | 1 | 2 | 3 |\n|-------|---|---|---|---|\n| Frequency | 8 | 16 | 12 | 4 |\nConstruct the probability distribution for $X$.",a:"Divide each by $40$: $P(X=0) = 0.2$, $P(X=1) = 0.4$, $P(X=2) = 0.3$, $P(X=3) = 0.1$."},
            {qid:"DR_011_e03",q:"A die is rolled 100 times with results:\n| Outcome | 1 | 2 | 3 | 4 | 5 | 6 |\n|---------|---|---|---|---|---|---|\n| Frequency | 18 | 15 | 17 | 16 | 14 | 20 |\nConstruct the probability distribution for the outcome $X$.",a:"Divide each by $100$: $P(X=1) = 0.18$, $P(X=2) = 0.15$, $P(X=3) = 0.17$, $P(X=4) = 0.16$, $P(X=5) = 0.14$, $P(X=6) = 0.20$."}
          ],
          medium: [
            {qid:"DR_011_m01",q:"A survey of 50 households recorded the number of pets:\n| Pets | 0 | 1 | 2 | 3 |\n|------|---|---|---|---|\n| Freq | 15| 20| 10| 5 |\nConstruct the probability distribution for $X$, the number of pets.",a:"$P(X=0) = 0.3$, $P(X=1) = 0.4$, $P(X=2) = 0.2$, $P(X=3) = 0.1$"},
            {qid:"DR_011_m02",q:"A call centre logs 200 calls by wait time category.\n| Wait (min) | 0–1 | 1–2 | 2–3 | 3–4 | 4–5 |\n|------------|-----|-----|-----|-----|-----|\n| Frequency | 30 | 50 | 60 | 40 | 20 |\nLet $X$ be the wait category (1 to 5). Construct the probability distribution.",a:"$P(X=1) = 0.15$, $P(X=2) = 0.25$, $P(X=3) = 0.30$, $P(X=4) = 0.20$, $P(X=5) = 0.10$."},
            {qid:"DR_011_m03",q:"In 80 football matches, the number of goals scored by a team was recorded.\n| Goals | 0 | 1 | 2 | 3 | 4 |\n|-------|---|---|---|---|---|\n| Freq | 24 | 28 | 16 | 8 | 4 |\nConstruct the probability distribution for $X$ and find $E(X)$.",a:"$P(X=0) = 0.3$, $P(X=1) = 0.35$, $P(X=2) = 0.2$, $P(X=3) = 0.1$, $P(X=4) = 0.05$.\n$E(X) = 0(0.3) + 1(0.35) + 2(0.2) + 3(0.1) + 4(0.05) = 1.25$."},
            {qid:"DR_011_m04",q:"An online store records the number of items per order for 60 orders.\n| Items | 1 | 2 | 3 | 4 | 5 |\n|-------|---|---|---|---|---|\n| Freq | 6 | 18 | 21 | 12 | 3 |\nConstruct the probability distribution for $X$ and find $P(X \\geq 3)$.",a:"$P(X=1) = 0.1$, $P(X=2) = 0.3$, $P(X=3) = 0.35$, $P(X=4) = 0.2$, $P(X=5) = 0.05$.\n$P(X \\geq 3) = 0.35 + 0.2 + 0.05 = 0.6$."},
            {qid:"DR_011_m05",q:"A quality inspector checks 150 batches and records the number of defective items per batch.\n| Defectives | 0 | 1 | 2 | 3 |\n|------------|---|---|---|---|\n| Freq | 90 | 36 | 18 | 6 |\nConstruct the probability distribution for $X$ and find $P(X \\leq 1)$.",a:"$P(X=0) = 0.6$, $P(X=1) = 0.24$, $P(X=2) = 0.12$, $P(X=3) = 0.04$.\n$P(X \\leq 1) = 0.6 + 0.24 = 0.84$."}
          ],
          hard: [
            {qid:"DR_011_h01",q:"A council surveys 250 households on the number of children.\n| Children | 0 | 1 | 2 | 3 | 4 | 5 |\n|----------|---|---|---|---|---|---|\n| Freq | 50 | 75 | 60 | 40 | 15 | 10 |\nConstruct the probability distribution for $X$ and find $E(X)$ and $\\text{Var}(X)$.",a:"$P(X=0) = 0.2$, $P(X=1) = 0.3$, $P(X=2) = 0.24$, $P(X=3) = 0.16$, $P(X=4) = 0.06$, $P(X=5) = 0.04$.\n$E(X) = 0 + 0.3 + 0.48 + 0.48 + 0.24 + 0.2 = 1.7$.\n$E(X^2) = 0 + 0.3 + 0.96 + 1.44 + 0.96 + 1.0 = 4.66$.\n$\\text{Var}(X) = 4.66 - 1.7^2 = 1.77$."},
            {qid:"DR_011_h02",q:"Two classes recorded the number of absences per student:\n\nClass A (30 students):\n| Absences | 0 | 1 | 2 | 3 |\n|----------|---|---|---|---|\n| Freq | 6 | 12 | 9 | 3 |\n\nClass B (20 students):\n| Absences | 0 | 1 | 2 | 3 |\n|----------|---|---|---|---|\n| Freq | 4 | 6 | 6 | 4 |\n\nCombine the data and construct the probability distribution for $X$ (absences) across all 50 students.",a:"Combined frequencies: $10, 18, 15, 7$. Total $= 50$.\n$P(X=0) = 0.2$, $P(X=1) = 0.36$, $P(X=2) = 0.3$, $P(X=3) = 0.14$."},
            {qid:"DR_011_h03",q:"A hospital records 100 emergency presentations per day for the number of patients requiring surgery.\n| Patients | 0 | 1 | 2 | 3 | 4 |\n|----------|---|---|---|---|---|\n| Freq | 12 | 33 | 30 | 18 | 7 |\nConstruct the probability distribution for $X$ and find $E(X)$ and $\\text{SD}(X)$.",a:"$P(X=0) = 0.12$, $P(X=1) = 0.33$, $P(X=2) = 0.30$, $P(X=3) = 0.18$, $P(X=4) = 0.07$.\n$E(X) = 0 + 0.33 + 0.60 + 0.54 + 0.28 = 1.75$.\n$E(X^2) = 0 + 0.33 + 1.20 + 1.62 + 1.12 = 4.27$.\n$\\text{Var}(X) = 4.27 - 1.75^2 = 1.2075$.\n$\\text{SD}(X) = \\sqrt{1.2075} \\approx 1.099$."},
            {qid:"DR_011_h04",q:"A doctor records the number of daily patient referrals over 100 days.\n| Referrals | 0 | 1 | 2 | 3 | 4 |\n|-----------|---|---|---|---|---|\n| Freq | 20 | 35 | 25 | 15 | 5 |\nConstruct the probability distribution for $X$ and find $P(1 \\leq X \\leq 3 \\mid X \\geq 1)$.",a:"$P(X=0) = 0.2$, $P(X=1) = 0.35$, $P(X=2) = 0.25$, $P(X=3) = 0.15$, $P(X=4) = 0.05$.\n$P(1 \\leq X \\leq 3) = 0.35 + 0.25 + 0.15 = 0.75$.\n$P(X \\geq 1) = 1 - 0.2 = 0.8$.\n$P(1 \\leq X \\leq 3 \\mid X \\geq 1) = \\frac{0.75}{0.8} = 0.9375$."},
            {qid:"DR_011_h05",q:"A bakery records the number of loaves returned by 100 customers.\n| Loaves returned | 1 | 2 | 3 | 4 | 5 |\n|-----------------|---|---|---|---|---|\n| Freq | 10 | 20 | 35 | 25 | 10 |\nConstruct the probability distribution and find the median of $X$.",a:"$P(X=1) = 0.1$, $P(X=2) = 0.2$, $P(X=3) = 0.35$, $P(X=4) = 0.25$, $P(X=5) = 0.1$.\nCumulative: $P(X \\leq 1) = 0.1$, $P(X \\leq 2) = 0.3$, $P(X \\leq 3) = 0.65$.\nSince $P(X \\leq 2) = 0.3 < 0.5$ and $P(X \\leq 3) = 0.65 \\geq 0.5$, the median is $3$."}
          ]
        }
,

    {
          pt_id: "DR_012",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Distribution Tables",
          pt: "Constructing probability distribution table for profit/loss random variable",
          testing: "Identify all outcomes, compute profit = winnings − cost, assign probabilities",
          reason_bank: ["probability_sum_error","setup_error","sign_error","interpretation_mixup","algebra_slip","not_sure"],
          easy: [
            {qid:"DR_012_e01",q:"A game costs $\\$1$ to play. You flip a fair coin: if Heads, you win $\\$3$; if Tails, you win nothing. Construct the probability distribution for the profit $P$.",a:"$P = 3 - 1 = 2$ with probability $\\frac{1}{2}$; $P = 0 - 1 = -1$ with probability $\\frac{1}{2}$.\n| $p$ | $-1$ | $2$ |\n|-----|------|-----|\n| $P(P=p)$ | $0.5$ | $0.5$ |"},
            {qid:"DR_012_e02",q:"A game costs $\\$2$ to play. You roll a fair die: if you roll a 6, you win $\\$6$; otherwise you win nothing. Construct the probability distribution for the profit.",a:"Profit $= 6 - 2 = 4$ with $P = \\frac{1}{6}$; Profit $= 0 - 2 = -2$ with $P = \\frac{5}{6}$.\n| $p$ | $-2$ | $4$ |\n|-----|------|-----|\n| $P$ | $\\frac{5}{6}$ | $\\frac{1}{6}$ |"},
            {qid:"DR_012_e03",q:"A raffle has 50 tickets costing $\\$2$ each. One ticket wins a prize of $\\$40$. Construct the probability distribution for the profit of buying one ticket.",a:"Win: Profit $= 40 - 2 = 38$ with $P = \\frac{1}{50}$. Lose: Profit $= 0 - 2 = -2$ with $P = \\frac{49}{50}$.\n| $p$ | $-2$ | $38$ |\n|-----|------|------|\n| $P$ | $0.98$ | $0.02$ |"}
          ],
          medium: [
            {qid:"DR_012_m01",q:"A game costs $\\$5$ to play. You roll a die: if you get 6, you win $\\$20$; otherwise you win nothing. Construct the probability distribution for the profit $P$.",a:"$P = -5$ (lose) with probability $\\frac{5}{6}$; $P = 15$ (win $20 - 5$) with probability $\\frac{1}{6}$."},
            {qid:"DR_012_m02",q:"A game costs $\\$4$ to play. You spin a spinner with three sectors: win $\\$12$ with $P = \\frac{1}{8}$, win $\\$6$ with $P = \\frac{3}{8}$, win $\\$0$ with $P = \\frac{1}{2}$. Construct the probability distribution for the profit and find $E(\\text{Profit})$.",a:"Profits: $12 - 4 = 8$, $6 - 4 = 2$, $0 - 4 = -4$.\n| $p$ | $-4$ | $2$ | $8$ |\n|-----|------|-----|-----|\n| $P$ | $\\frac{1}{2}$ | $\\frac{3}{8}$ | $\\frac{1}{8}$ |\n$E(\\text{Profit}) = 8 \\times \\frac{1}{8} + 2 \\times \\frac{3}{8} + (-4) \\times \\frac{1}{2} = 1 + 0.75 - 2 = -\\$0.25$."},
            {qid:"DR_012_m03",q:"An insurance company charges a premium of $\\$200$. It pays out $\\$5000$ for a major claim (probability $0.02$) or $\\$1000$ for a minor claim (probability $0.05$). The remaining policyholders make no claim. Construct the distribution of the company's profit per policy and find $E(\\text{Profit})$.",a:"Profit: no claim $= 200$ ($P = 0.93$), minor $= 200 - 1000 = -800$ ($P = 0.05$), major $= 200 - 5000 = -4800$ ($P = 0.02$).\n$E = 200(0.93) + (-800)(0.05) + (-4800)(0.02) = 186 - 40 - 96 = \\$50$."},
            {qid:"DR_012_m04",q:"A game costs $\\$3$ to play. You flip two fair coins and win $\\$4$ for each Head. Construct the probability distribution for the profit.",a:"Number of Heads: $0, 1, 2$ with $P = \\frac{1}{4}, \\frac{1}{2}, \\frac{1}{4}$.\nProfits: $0 - 3 = -3$, $4 - 3 = 1$, $8 - 3 = 5$.\n| $p$ | $-3$ | $1$ | $5$ |\n|-----|------|-----|-----|\n| $P$ | $\\frac{1}{4}$ | $\\frac{1}{2}$ | $\\frac{1}{4}$ |"},
            {qid:"DR_012_m05",q:"A card is drawn from a standard 52-card deck. The game costs $\\$5$ to play. You win $\\$20$ for an Ace and $\\$10$ for a face card (J, Q, K). Otherwise you win nothing. Construct the profit distribution and find $E(\\text{Profit})$.",a:"Profits: Ace $= 15$ ($P = \\frac{4}{52}$), Face $= 5$ ($P = \\frac{12}{52}$), Other $= -5$ ($P = \\frac{36}{52}$).\n$E = 15 \\times \\frac{4}{52} + 5 \\times \\frac{12}{52} + (-5) \\times \\frac{36}{52} = \\frac{60 + 60 - 180}{52} = \\frac{-60}{52} \\approx -\\$1.15$."}
          ],
          hard: [
            {qid:"DR_012_h01",q:"A game costs $\\$4$ to play. You roll a fair die twice and win $\\$2$ for each six rolled. Construct the probability distribution for the profit and find $E(\\text{Profit})$.",a:"Let $X$ = number of sixes $\\sim \\text{Bin}(2, \\frac{1}{6})$.\n$P(X=0) = \\frac{25}{36}$, $P(X=1) = \\frac{10}{36}$, $P(X=2) = \\frac{1}{36}$.\nProfits: $-4, -2, 0$.\n$E = (-4)\\frac{25}{36} + (-2)\\frac{10}{36} + 0 \\cdot \\frac{1}{36} = \\frac{-100 - 20}{36} = -\\frac{120}{36} \\approx -\\$3.33$."},
            {qid:"DR_012_h02",q:"A bag contains 3 red and 2 blue balls. Two balls are drawn without replacement. A game costs $\\$2$ to play: you win $\\$10$ if both balls are red; otherwise you pay a $\\$5$ penalty (on top of the entry cost). Find the profit distribution and $E(\\text{Profit})$.",a:"$P(\\text{RR}) = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = 0.3$.\nWin: Profit $= 10 - 2 = 8$ ($P = 0.3$). Lose: Profit $= -2 - 5 = -7$ ($P = 0.7$).\n$E = 8(0.3) + (-7)(0.7) = 2.4 - 4.9 = -\\$2.50$."},
            {qid:"DR_012_h03",q:"A die is rolled once. You win $\\$12$ for a 6, win $\\$3$ for an even number (2 or 4), and win nothing otherwise. Find the entry cost $c$ that makes this a fair game.",a:"$E(\\text{winnings}) = 12 \\times \\frac{1}{6} + 3 \\times \\frac{2}{6} + 0 \\times \\frac{3}{6} = 2 + 1 + 0 = \\$3$.\nFor a fair game, $E(\\text{Profit}) = 0$, so $c = E(\\text{winnings}) = \\$3$."},
            {qid:"DR_012_h04",q:"Consider two games.\n**Game A**: Costs $\\$3$. Win $\\$10$ with $P = 0.25$, win $\\$5$ with $P = 0.35$, win $\\$0$ with $P = 0.40$.\n**Game B**: Costs $\\$2$. Win $\\$8$ with $P = 0.30$, win $\\$0$ with $P = 0.70$.\nConstruct the profit distribution for each game and determine which has the higher expected profit.",a:"**Game A**: Profits $7, 2, -3$ with $P = 0.25, 0.35, 0.40$.\n$E_A = 7(0.25) + 2(0.35) + (-3)(0.40) = 1.75 + 0.70 - 1.20 = \\$1.25$.\n**Game B**: Profits $6, -2$ with $P = 0.30, 0.70$.\n$E_B = 6(0.30) + (-2)(0.70) = 1.80 - 1.40 = \\$0.40$.\nGame A has the higher expected profit ($\\$1.25 > \\$0.40$)."},
            {qid:"DR_012_h05",q:"A bag contains 4 red and 6 blue balls. Three balls are drawn with replacement. Each red ball wins $\\$3$. The game costs $\\$5$ to play. Construct the probability distribution for the profit and find $P(\\text{Profit} > 0)$.",a:"Let $X$ = number of red balls $\\sim \\text{Bin}\\left(3, \\frac{2}{5}\\right)$. Profit $= 3X - 5$.\n$P(X=0) = \\frac{27}{125}$, $P(X=1) = \\frac{54}{125}$, $P(X=2) = \\frac{36}{125}$, $P(X=3) = \\frac{8}{125}$.\nProfits: $-5, -2, 1, 4$.\n$P(\\text{Profit} > 0) = P(X \\geq 2) = \\frac{36 + 8}{125} = \\frac{44}{125} = 0.352$."}
          ]
        }
,

    {
          pt_id: "DR_013",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Distribution Tables",
          pt: "Constructing probability distribution table for related random variable",
          testing: "Apply transformation to each value of X; probabilities transfer directly for 1-to-1 maps; combine for many-to-one maps",
          reason_bank: ["probability_sum_error","setup_error","wrong_event","substitution_error","algebra_slip","not_sure"],
          easy: [
            {qid:"DR_013_e01",q:"$X$ has the distribution:\n| $x$ | 1 | 2 | 3 |\n|-----|---|---|---|\n| $P$ | $\\frac{1}{4}$ | $\\frac{1}{2}$ | $\\frac{1}{4}$ |\nFind the probability distribution of $Y = X + 2$.",a:"$Y = 3$ with $P = \\frac{1}{4}$, $Y = 4$ with $P = \\frac{1}{2}$, $Y = 5$ with $P = \\frac{1}{4}$."},
            {qid:"DR_013_e02",q:"$X$ has the distribution:\n| $x$ | 0 | 1 | 2 |\n|-----|---|---|---|\n| $P$ | $\\frac{1}{5}$ | $\\frac{3}{5}$ | $\\frac{1}{5}$ |\nFind the probability distribution of $Y = 3X$.",a:"$Y = 0$ with $P = \\frac{1}{5}$, $Y = 3$ with $P = \\frac{3}{5}$, $Y = 6$ with $P = \\frac{1}{5}$."},
            {qid:"DR_013_e03",q:"$X$ has the distribution:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.3 | 0.4 | 0.2 |\nFind the probability distribution of $Y = X^2$.",a:"$Y = 0$ with $P = 0.1$, $Y = 1$ with $P = 0.3$, $Y = 4$ with $P = 0.4$, $Y = 9$ with $P = 0.2$."}
          ],
          medium: [
            {qid:"DR_013_m01",q:"$X$ has the distribution:\n| $x$ | 1 | 2 | 3 |\n|-----|---|---|---|\n| $P$ | 0.2 | 0.5 | 0.3 |\nFind the probability distribution of $Y = 2X + 1$.",a:"$Y = 3$ with $P = 0.2$, $Y = 5$ with $P = 0.5$, $Y = 7$ with $P = 0.3$."},
            {qid:"DR_013_m02",q:"$X$ has the distribution:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.3 | 0.4 | 0.2 |\nFind the probability distribution of $Y = 5 - X$.",a:"$Y = 4$ with $P = 0.1$, $Y = 3$ with $P = 0.3$, $Y = 2$ with $P = 0.4$, $Y = 1$ with $P = 0.2$.\n(Re-ordered: $P(Y=1)=0.2$, $P(Y=2)=0.4$, $P(Y=3)=0.3$, $P(Y=4)=0.1$.)"},
            {qid:"DR_013_m03",q:"A market stall sells $X$ items per hour with distribution:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | $\\frac{1}{8}$ | $\\frac{3}{8}$ | $\\frac{3}{8}$ | $\\frac{1}{8}$ |\nEach item sells for $\\$10$ and the hourly cost is $\\$15$. Let $Y = 10X - 15$ be the profit. Find the distribution of $Y$ and $E(Y)$.",a:"$Y = -15, -5, 5, 15$ with $P = \\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$.\n$E(Y) = -15 \\cdot \\frac{1}{8} + (-5) \\cdot \\frac{3}{8} + 5 \\cdot \\frac{3}{8} + 15 \\cdot \\frac{1}{8} = \\frac{-15 - 15 + 15 + 15}{8} = \\$0$."},
            {qid:"DR_013_m04",q:"A technician makes $X$ service calls per day with distribution:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | 0.2 | 0.3 | 0.3 | 0.2 |\nThe daily cost is $C = 20 + 5X$ dollars. Find the distribution of $C$ and $E(C)$.",a:"$C = 20, 25, 30, 35$ with $P = 0.2, 0.3, 0.3, 0.2$.\n$E(C) = 20(0.2) + 25(0.3) + 30(0.3) + 35(0.2) = 4 + 7.5 + 9 + 7 = \\$27.50$."},
            {qid:"DR_013_m05",q:"$X$ has the distribution:\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|---|\n| $P$ | 0.1 | 0.2 | 0.4 | 0.2 | 0.1 |\nLet $Y = |X - 2|$. Find the probability distribution of $Y$.",a:"$Y$ values: when $X=0$, $Y=2$; $X=1$, $Y=1$; $X=2$, $Y=0$; $X=3$, $Y=1$; $X=4$, $Y=2$.\nCombine: $P(Y=0) = 0.4$, $P(Y=1) = 0.2 + 0.2 = 0.4$, $P(Y=2) = 0.1 + 0.1 = 0.2$."}
          ],
          hard: [
            {qid:"DR_013_h01",q:"Two independent random variables $X_1$ and $X_2$ each take the value $0$ with $P = \\frac{1}{2}$ and $1$ with $P = \\frac{1}{2}$. Find the probability distribution of $Y = X_1 + X_2$.",a:"$P(Y=0) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.\n$P(Y=1) = P(X_1=0, X_2=1) + P(X_1=1, X_2=0) = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$.\n$P(Y=2) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$."},
            {qid:"DR_013_h02",q:"$X$ has the distribution:\n| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |\n|-----|------|------|-----|-----|-----|\n| $P$ | $0.1$ | $0.2$ | $0.4$ | $0.2$ | $0.1$ |\nLet $Y = X^2$. Find the probability distribution of $Y$. Why does $Y$ have fewer values than $X$?",a:"$Y$ values: $X = \\pm 2 \\Rightarrow Y = 4$; $X = \\pm 1 \\Rightarrow Y = 1$; $X = 0 \\Rightarrow Y = 0$.\n$P(Y=0) = 0.4$, $P(Y=1) = 0.2 + 0.2 = 0.4$, $P(Y=4) = 0.1 + 0.1 = 0.2$.\n$Y$ has fewer values because squaring is not one-to-one: $X$ and $-X$ map to the same $Y$ value."},
            {qid:"DR_013_h03",q:"$X$ has the distribution:\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|---|\n| $P$ | 0.1 | 0.2 | 0.3 | 0.3 | 0.1 |\nDefine $Y$ by: $Y = 0$ if $X < 2$, and $Y = X$ if $X \\geq 2$. Find the probability distribution of $Y$.",a:"$X = 0, 1$ both give $Y = 0$, so $P(Y=0) = 0.1 + 0.2 = 0.3$.\n$X = 2 \\Rightarrow Y = 2$ ($P = 0.3$), $X = 3 \\Rightarrow Y = 3$ ($P = 0.3$), $X = 4 \\Rightarrow Y = 4$ ($P = 0.1$).\n| $y$ | 0 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P$ | 0.3 | 0.3 | 0.3 | 0.1 |"},
            {qid:"DR_013_h04",q:"$X$ has the distribution:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | $\\frac{1}{6}$ | $\\frac{1}{3}$ | $\\frac{1}{3}$ | $\\frac{1}{6}$ |\nLet $Y = 2X - 1$. Find the probability distribution of $Y$, $E(Y)$, and $\\text{Var}(Y)$.",a:"$Y = -1, 1, 3, 5$ with $P = \\frac{1}{6}, \\frac{1}{3}, \\frac{1}{3}, \\frac{1}{6}$.\n$E(Y) = (-1)\\frac{1}{6} + 1 \\cdot \\frac{1}{3} + 3 \\cdot \\frac{1}{3} + 5 \\cdot \\frac{1}{6} = \\frac{-1 + 2 + 6 + 5}{6} = 2$.\n$E(Y^2) = 1 \\cdot \\frac{1}{6} + 1 \\cdot \\frac{1}{3} + 9 \\cdot \\frac{1}{3} + 25 \\cdot \\frac{1}{6} = \\frac{1 + 2 + 18 + 25}{6} = \\frac{46}{6}$.\n$\\text{Var}(Y) = \\frac{46}{6} - 4 = \\frac{22}{6} = \\frac{11}{3} \\approx 3.67$."},
            {qid:"DR_013_h05",q:"Two independent random variables $X_1$ and $X_2$ are each uniformly distributed on $\\{1, 2, 3\\}$ (each value with $P = \\frac{1}{3}$). Let $Z = \\max(X_1, X_2)$. Find the probability distribution of $Z$ and $E(Z)$.",a:"$P(Z = 1) = P(X_1 \\leq 1)P(X_2 \\leq 1) = \\frac{1}{9}$.\n$P(Z \\leq 2) = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$, so $P(Z = 2) = \\frac{4}{9} - \\frac{1}{9} = \\frac{3}{9} = \\frac{1}{3}$.\n$P(Z = 3) = 1 - \\frac{4}{9} = \\frac{5}{9}$.\n$E(Z) = 1 \\cdot \\frac{1}{9} + 2 \\cdot \\frac{1}{3} + 3 \\cdot \\frac{5}{9} = \\frac{1 + 6 + 15}{9} = \\frac{22}{9} \\approx 2.44$."}
          ]
        }
,

    {
          pt_id: "DR_014",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Distribution Tables",
          pt: "Probability distribution table problem",
          testing: "Use ΣP = 1 to find unknown; may combine with E(X) or Var(X) constraints",
          reason_bank: ["probability_sum_error","setup_error","substitution_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"DR_014_e01",q:"Complete the probability distribution table:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | $0.2$ | $0.3$ | $k$ | $0.1$ |",a:"$0.2 + 0.3 + k + 0.1 = 1 \\Rightarrow k = 0.4$."},
            {qid:"DR_014_e02",q:"Complete the probability distribution table:\n| $x$ | 1 | 2 | 3 |\n|-----|---|---|---|\n| $P(X=x)$ | $\\frac{1}{5}$ | $\\frac{2}{5}$ | $k$ |",a:"$\\frac{1}{5} + \\frac{2}{5} + k = 1 \\Rightarrow k = \\frac{2}{5}$."},
            {qid:"DR_014_e03",q:"Complete the probability distribution table:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P(X=x)$ | $0.15$ | $0.25$ | $0.35$ | $k$ |",a:"$0.15 + 0.25 + 0.35 + k = 1 \\Rightarrow k = 0.25$."}
          ],
          medium: [
            {qid:"DR_014_m01",q:"Complete the probability distribution table:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | 0.1 | 0.3 | $k$ | 0.2 |",a:"$0.1 + 0.3 + k + 0.2 = 1 \\Rightarrow k = 0.4$"},
            {qid:"DR_014_m02",q:"The probability distribution of $X$ is:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | $k$ | $2k$ | $0.3$ | $0.2$ |\nFind $k$.",a:"$k + 2k + 0.3 + 0.2 = 1 \\Rightarrow 3k = 0.5 \\Rightarrow k = \\frac{1}{6} \\approx 0.167$."},
            {qid:"DR_014_m03",q:"The probability distribution of $X$ is:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | $k^2$ | $k$ | $0.4$ | $0.1$ |\nGiven $k > 0$, find $k$.",a:"$k^2 + k + 0.4 + 0.1 = 1 \\Rightarrow k^2 + k - 0.5 = 0$.\nUsing the quadratic formula: $k = \\frac{-1 + \\sqrt{1 + 2}}{2} = \\frac{-1 + \\sqrt{3}}{2} \\approx 0.366$."},
            {qid:"DR_014_m04",q:"The probability distribution of $X$ is:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | $c$ | $2c$ | $3c$ | $4c$ |\nFind $c$.",a:"$c + 2c + 3c + 4c = 10c = 1 \\Rightarrow c = 0.1$."},
            {qid:"DR_014_m05",q:"The probability distribution of $X$ is:\n| $x$ | 1 | 2 | 3 | 4 | 5 |\n|-----|---|---|---|---|---|\n| $P(X=x)$ | $k$ | $2k$ | $3k$ | $2k$ | $k$ |\nFind $k$ and $E(X)$.",a:"$k + 2k + 3k + 2k + k = 9k = 1 \\Rightarrow k = \\frac{1}{9}$.\n$E(X) = 1 \\cdot \\frac{1}{9} + 2 \\cdot \\frac{2}{9} + 3 \\cdot \\frac{3}{9} + 4 \\cdot \\frac{2}{9} + 5 \\cdot \\frac{1}{9} = \\frac{1+4+9+8+5}{9} = 3$."}
          ],
          hard: [
            {qid:"DR_014_h01",q:"The probability distribution of $X$ is:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | $a$ | $0.3$ | $b$ | $0.1$ |\nGiven that $E(X) = 2.5$, find $a$ and $b$.",a:"$a + 0.3 + b + 0.1 = 1 \\Rightarrow a + b = 0.6$ ... (1)\n$E(X) = a + 0.6 + 3b + 0.4 = 2.5 \\Rightarrow a + 3b = 1.5$ ... (2)\n(2) $-$ (1): $2b = 0.9 \\Rightarrow b = 0.45$, $a = 0.15$."},
            {qid:"DR_014_h02",q:"The probability distribution of $X$ is:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P(X=x)$ | $0.1$ | $k$ | $k^2$ | $0.3$ |\nGiven $k > 0$, find $k$.",a:"$0.1 + k + k^2 + 0.3 = 1 \\Rightarrow k^2 + k - 0.6 = 0$.\n$k = \\frac{-1 + \\sqrt{1 + 2.4}}{2} = \\frac{-1 + \\sqrt{3.4}}{2} \\approx 0.422$."},
            {qid:"DR_014_h03",q:"The probability distribution of $X$ is:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P(X=x)$ | $2k$ | $3k$ | $3k$ | $2k$ |\nFind $k$, $E(X)$, $\\text{Var}(X)$, and $P(X > E(X))$.",a:"$10k = 1 \\Rightarrow k = 0.1$.\n$E(X) = 0(0.2) + 1(0.3) + 2(0.3) + 3(0.2) = 1.5$.\n$E(X^2) = 0 + 0.3 + 1.2 + 1.8 = 3.3$.\n$\\text{Var}(X) = 3.3 - 2.25 = 1.05$.\n$P(X > 1.5) = P(X = 2) + P(X = 3) = 0.3 + 0.2 = 0.5$."},
            {qid:"DR_014_h04",q:"The probability distribution of $X$ is:\n| $x$ | 1 | 2 | 3 |\n|-----|---|---|---|\n| $P(X=x)$ | $a$ | $b$ | $c$ |\nGiven that $E(X) = 2$ and $\\text{Var}(X) = 0.5$, find $a$, $b$, and $c$.",a:"$a + b + c = 1$ ... (1)\n$a + 2b + 3c = 2$ ... (2) [from $E(X) = 2$]\n$E(X^2) = a + 4b + 9c$ and $\\text{Var}(X) = E(X^2) - 4 = 0.5$, so $a + 4b + 9c = 4.5$ ... (3)\n(2) $-$ (1): $b + 2c = 1$. (3) $-$ (2): $2b + 6c = 2.5 \\Rightarrow b + 3c = 1.25$.\nSubtracting: $c = 0.25$, $b = 0.5$, $a = 0.25$."},
            {qid:"DR_014_h05",q:"The probability distribution of $X$ is:\n| $x$ | 1 | 2 | 3 | 4 | 5 |\n|-----|---|---|---|---|---|\n| $P(X=x)$ | $0.1$ | $a$ | $0.3$ | $b$ | $0.1$ |\nGiven that $E(X) = 3.2$, find $a$ and $b$, then calculate $\\text{SD}(X)$.",a:"$0.1 + a + 0.3 + b + 0.1 = 1 \\Rightarrow a + b = 0.5$ ... (1)\n$E(X) = 0.1 + 2a + 0.9 + 4b + 0.5 = 3.2 \\Rightarrow 2a + 4b = 1.7$ ... (2)\n(2) $-$ 2(1): $2b = 0.7 \\Rightarrow b = 0.35$, $a = 0.15$.\n$E(X^2) = 0.1 + 4(0.15) + 9(0.3) + 16(0.35) + 25(0.1) = 0.1 + 0.6 + 2.7 + 5.6 + 2.5 = 11.5$.\n$\\text{Var}(X) = 11.5 - 3.2^2 = 1.26$.\n$\\text{SD}(X) = \\sqrt{1.26} \\approx 1.12$."}
          ]
        }
,

    {
          pt_id: "DR_015",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Expected Value",
          pt: "Calculating $E(X)$ for discrete random variable",
          testing: "Apply E(X) = Σ x·P(X=x), possibly after finding probabilities from a formula",
          reason_bank: ["wrong_rule","substitution_error","probability_sum_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"DR_015_e01",q:"$X$ takes values $1, 2, 3, 4$ each with probability $\\frac{1}{4}$. Find $E(X)$.",a:"$E(X) = 1 \\cdot \\frac{1}{4} + 2 \\cdot \\frac{1}{4} + 3 \\cdot \\frac{1}{4} + 4 \\cdot \\frac{1}{4} = \\frac{10}{4} = 2.5$."},
            {qid:"DR_015_e02",q:"$X$ takes values $2, 4, 6$ each with probability $\\frac{1}{3}$. Find $E(X)$.",a:"$E(X) = 2 \\cdot \\frac{1}{3} + 4 \\cdot \\frac{1}{3} + 6 \\cdot \\frac{1}{3} = \\frac{12}{3} = 4$."},
            {qid:"DR_015_e03",q:"$P(X=1) = 0.5$, $P(X=2) = 0.3$, $P(X=3) = 0.2$. Find $E(X)$.",a:"$E(X) = 1(0.5) + 2(0.3) + 3(0.2) = 0.5 + 0.6 + 0.6 = 1.7$."}
          ],
          medium: [
            {qid:"DR_015_m01",q:"A random variable $X$ has $P(X = k) = \\frac{k}{10}$ for $k = 1, 2, 3, 4$. Find $E(X)$.",a:"$E(X) = 1 \\cdot \\frac{1}{10} + 2 \\cdot \\frac{2}{10} + 3 \\cdot \\frac{3}{10} + 4 \\cdot \\frac{4}{10} = \\frac{1+4+9+16}{10} = 3$"},
            {qid:"DR_015_m02",q:"A random variable $X$ has $P(X = k) = \\frac{5-k}{10}$ for $k = 1, 2, 3, 4$. Verify $\\sum P = 1$ and find $E(X)$.",a:"$P(1) = \\frac{4}{10}$, $P(2) = \\frac{3}{10}$, $P(3) = \\frac{2}{10}$, $P(4) = \\frac{1}{10}$. Sum $= 1$ ✓.\n$E(X) = 1 \\cdot 0.4 + 2 \\cdot 0.3 + 3 \\cdot 0.2 + 4 \\cdot 0.1 = 0.4 + 0.6 + 0.6 + 0.4 = 2$."},
            {qid:"DR_015_m03",q:"A random variable $X$ has $P(X = k) = \\frac{k^2}{30}$ for $k = 1, 2, 3, 4$. Find $E(X)$.",a:"$P(1) = \\frac{1}{30}$, $P(2) = \\frac{4}{30}$, $P(3) = \\frac{9}{30}$, $P(4) = \\frac{16}{30}$. Sum $= 1$ ✓.\n$E(X) = \\frac{1 + 8 + 27 + 64}{30} = \\frac{100}{30} = \\frac{10}{3} \\approx 3.33$."},
            {qid:"DR_015_m04",q:"$P(X = k) = ck$ for $k = 1, 2, 3, 4, 5$. Find $c$ and then $E(X)$.",a:"$c(1+2+3+4+5) = 15c = 1 \\Rightarrow c = \\frac{1}{15}$.\n$E(X) = \\frac{1 \\cdot 1 + 2 \\cdot 2 + 3 \\cdot 3 + 4 \\cdot 4 + 5 \\cdot 5}{15} = \\frac{1+4+9+16+25}{15} = \\frac{55}{15} = \\frac{11}{3} \\approx 3.67$."},
            {qid:"DR_015_m05",q:"$P(X=0)=0.2$, $P(X=1)=0.3$, $P(X=2)=0.3$, $P(X=4)=0.2$. Note: $X = 3$ is not possible. Find $E(X)$.",a:"$E(X) = 0(0.2) + 1(0.3) + 2(0.3) + 4(0.2) = 0 + 0.3 + 0.6 + 0.8 = 1.7$."}
          ],
          hard: [
            {qid:"DR_015_h01",q:"$P(X = k) = \\frac{c}{k}$ for $k = 1, 2, 3, 4, 5, 6$. Find $c$ and $E(X)$.",a:"$c\\left(1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{5} + \\frac{1}{6}\\right) = c \\cdot \\frac{49}{20} = 1 \\Rightarrow c = \\frac{20}{49}$.\n$E(X) = \\sum_{k=1}^{6} k \\cdot \\frac{c}{k} = 6c = \\frac{120}{49} \\approx 2.449$."},
            {qid:"DR_015_h02",q:"Given the distribution:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.2 | 0.3 | 0.4 |\nFind $E(X)$ and $E\\left(\\frac{1}{X}\\right)$. Is $E\\left(\\frac{1}{X}\\right) = \\frac{1}{E(X)}$?",a:"$E(X) = 1(0.1) + 2(0.2) + 3(0.3) + 4(0.4) = 0.1 + 0.4 + 0.9 + 1.6 = 3$.\n$E\\left(\\frac{1}{X}\\right) = \\frac{0.1}{1} + \\frac{0.2}{2} + \\frac{0.3}{3} + \\frac{0.4}{4} = 0.1 + 0.1 + 0.1 + 0.1 = 0.4$.\n$\\frac{1}{E(X)} = \\frac{1}{3} \\approx 0.333$. So $E\\left(\\frac{1}{X}\\right) \\neq \\frac{1}{E(X)}$."},
            {qid:"DR_015_h03",q:"$P(X=1) = k$, $P(X=2) = 2k$, $P(X=3) = 2k$, $P(X=4) = k$, $P(X=5) = 0.4$. Find $k$ and $E(X)$.",a:"$k + 2k + 2k + k + 0.4 = 1 \\Rightarrow 6k = 0.6 \\Rightarrow k = 0.1$.\n$E(X) = 1(0.1) + 2(0.2) + 3(0.2) + 4(0.1) + 5(0.4) = 0.1 + 0.4 + 0.6 + 0.4 + 2.0 = 3.5$."},
            {qid:"DR_015_h04",q:"$X$ takes values $0, 1, 4, 9$ with probabilities $\\frac{1}{6}, \\frac{1}{3}, \\frac{1}{3}, \\frac{1}{6}$. Find $E(X)$. (Note: $X$ has non-consecutive values.)",a:"$E(X) = 0 \\cdot \\frac{1}{6} + 1 \\cdot \\frac{1}{3} + 4 \\cdot \\frac{1}{3} + 9 \\cdot \\frac{1}{6} = 0 + \\frac{1}{3} + \\frac{4}{3} + \\frac{3}{2} = \\frac{2 + 8 + 9}{6} = \\frac{19}{6} \\approx 3.17$."},
            {qid:"DR_015_h05",q:"Given the distribution:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.3 | 0.4 | 0.2 |\nFind $E(X^2 + 2X)$. Verify that $E(X^2 + 2X) = E(X^2) + 2E(X)$.",a:"$E(X) = 0 + 0.3 + 0.8 + 0.6 = 1.7$.\n$E(X^2) = 0 + 0.3 + 1.6 + 1.8 = 3.7$.\n$E(X^2 + 2X) = \\sum (x^2 + 2x)P(x) = 0 + 3(0.3) + 8(0.4) + 15(0.2) = 0 + 0.9 + 3.2 + 3.0 = 7.1$.\n$E(X^2) + 2E(X) = 3.7 + 3.4 = 7.1$ ✓."}
          ]
        }
,

    {
          pt_id: "DR_016",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Expected Value",
          pt: "Calculating expected value of discrete random variable",
          testing: "Apply E(X) = Σ x·P(X=x) from a given table",
          reason_bank: ["wrong_rule","substitution_error","probability_sum_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"DR_016_e01",q:"Find $E(X)$ from the distribution:\n| $x$ | 1 | 2 | 3 |\n|-----|---|---|---|\n| $P$ | $\\frac{1}{4}$ | $\\frac{1}{2}$ | $\\frac{1}{4}$ |",a:"$E(X) = 1 \\cdot \\frac{1}{4} + 2 \\cdot \\frac{1}{2} + 3 \\cdot \\frac{1}{4} = 0.25 + 1 + 0.75 = 2$."},
            {qid:"DR_016_e02",q:"Find $E(X)$ from the distribution:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | $\\frac{1}{4}$ | $\\frac{1}{4}$ | $\\frac{1}{4}$ | $\\frac{1}{4}$ |",a:"$E(X) = 0 + \\frac{1}{4} + \\frac{2}{4} + \\frac{3}{4} = \\frac{6}{4} = 1.5$."},
            {qid:"DR_016_e03",q:"Find $E(X)$ from the distribution:\n| $x$ | 10 | 20 | 30 |\n|-----|----|----|----|\n| $P$ | 0.5 | 0.3 | 0.2 |",a:"$E(X) = 10(0.5) + 20(0.3) + 30(0.2) = 5 + 6 + 6 = 17$."}
          ],
          medium: [
            {qid:"DR_016_m01",q:"Find $E(X)$ from the distribution:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.4 | 0.3 | 0.2 |",a:"$E(X) = 0(0.1) + 1(0.4) + 2(0.3) + 3(0.2) = 0 + 0.4 + 0.6 + 0.6 = 1.6$"},
            {qid:"DR_016_m02",q:"Find $E(X)$ from the distribution:\n| $x$ | 1 | 2 | 3 | 4 | 5 |\n|-----|---|---|---|---|---|\n| $P$ | 0.1 | 0.2 | 0.4 | 0.2 | 0.1 |",a:"$E(X) = 1(0.1) + 2(0.2) + 3(0.4) + 4(0.2) + 5(0.1) = 0.1 + 0.4 + 1.2 + 0.8 + 0.5 = 3.0$."},
            {qid:"DR_016_m03",q:"Find $E(X)$ from the distribution:\n| $x$ | 2 | 5 | 8 | 11 |\n|-----|---|---|---|----|\n| $P$ | 0.15 | 0.35 | 0.30 | 0.20 |",a:"$E(X) = 2(0.15) + 5(0.35) + 8(0.30) + 11(0.20) = 0.30 + 1.75 + 2.40 + 2.20 = 6.65$."},
            {qid:"DR_016_m04",q:"Find $E(X)$ from the distribution:\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|---|\n| $P$ | $\\frac{1}{6}$ | $\\frac{1}{6}$ | $\\frac{1}{3}$ | $\\frac{1}{6}$ | $\\frac{1}{6}$ |",a:"$E(X) = 0 + \\frac{1}{6} + \\frac{2}{3} + \\frac{3}{6} + \\frac{4}{6} = \\frac{0 + 1 + 4 + 3 + 4}{6} = \\frac{12}{6} = 2$."},
            {qid:"DR_016_m05",q:"Find $E(X)$ from the distribution:\n| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |\n|-----|------|------|-----|-----|-----|\n| $P$ | 0.1 | 0.2 | 0.4 | 0.2 | 0.1 |",a:"$E(X) = (-2)(0.1) + (-1)(0.2) + 0(0.4) + 1(0.2) + 2(0.1) = -0.2 - 0.2 + 0 + 0.2 + 0.2 = 0$."}
          ],
          hard: [
            {qid:"DR_016_h01",q:"Find $E(X)$ from the distribution:\n| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |\n|-----|---|---|---|---|---|---|\n| $P$ | 0.05 | 0.15 | 0.30 | 0.25 | 0.15 | 0.10 |\nInterpret the result if $X$ represents the number of service calls per day.",a:"$E(X) = 0(0.05) + 1(0.15) + 2(0.30) + 3(0.25) + 4(0.15) + 5(0.10) = 0 + 0.15 + 0.60 + 0.75 + 0.60 + 0.50 = 2.6$.\nOn average, there are 2.6 service calls per day in the long run."},
            {qid:"DR_016_h02",q:"Given:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.3 | 0.4 | 0.2 |\nFind $E(X)$ and $E(3X - 2)$.",a:"$E(X) = 1(0.1) + 2(0.3) + 3(0.4) + 4(0.2) = 0.1 + 0.6 + 1.2 + 0.8 = 2.7$.\n$E(3X - 2) = 3E(X) - 2 = 3(2.7) - 2 = 6.1$."},
            {qid:"DR_016_h03",q:"Distribution A:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.2 | 0.4 | 0.3 |\n\nDistribution B:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | 0.3 | 0.4 | 0.2 | 0.1 |\n\nFind $E(A)$ and $E(B)$. Which distribution has the higher expected value?",a:"$E(A) = 0 + 0.2 + 0.8 + 0.9 = 1.9$.\n$E(B) = 0 + 0.4 + 0.4 + 0.3 = 1.1$.\nDistribution A has the higher expected value."},
            {qid:"DR_016_h04",q:"Given the distribution:\n| $x$ | 1 | 2 | 3 | 4 | 5 |\n|-----|---|---|---|---|---|\n| $P$ | 0.05 | 0.20 | 0.40 | 0.25 | 0.10 |\nFind $E(X)$ and $E(X^2)$.",a:"$E(X) = 1(0.05) + 2(0.20) + 3(0.40) + 4(0.25) + 5(0.10) = 0.05 + 0.40 + 1.20 + 1.00 + 0.50 = 3.15$.\n$E(X^2) = 1(0.05) + 4(0.20) + 9(0.40) + 16(0.25) + 25(0.10) = 0.05 + 0.80 + 3.60 + 4.00 + 2.50 = 10.95$."},
            {qid:"DR_016_h05",q:"Given the distribution:\n| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |\n|-----|---|---|---|---|---|---|\n| $P$ | $\\frac{1}{20}$ | $\\frac{3}{20}$ | $\\frac{5}{20}$ | $\\frac{5}{20}$ | $\\frac{4}{20}$ | $\\frac{2}{20}$ |\nFind $E(X)$ and verify that $\\sum P = 1$.",a:"$\\sum P = \\frac{1+3+5+5+4+2}{20} = \\frac{20}{20} = 1$ ✓.\n$E(X) = \\frac{0 + 3 + 10 + 15 + 16 + 10}{20} = \\frac{54}{20} = 2.7$."}
          ]
        }
,

    {
          pt_id: "DR_017",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Probability",
          pt: "Calculating conditional probability P(X=a | X≤b) for discrete RV",
          testing: "Apply P(A|B) = P(A∩B)/P(B) with discrete distribution",
          reason_bank: ["conditional_setup_error","wrong_event","substitution_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"DR_017_e01",q:"Given $P(X=1)=0.3$, $P(X=2)=0.4$, $P(X=3)=0.3$. Find $P(X=1 \\mid X \\leq 2)$.",a:"$P(X=1 \\mid X \\leq 2) = \\frac{P(X=1)}{P(X \\leq 2)} = \\frac{0.3}{0.3 + 0.4} = \\frac{0.3}{0.7} = \\frac{3}{7} \\approx 0.429$."},
            {qid:"DR_017_e02",q:"$X$ is uniform on $\\{1, 2, 3, 4\\}$. Find $P(X = 2 \\mid X \\leq 3)$.",a:"$P(X=2 \\mid X \\leq 3) = \\frac{P(X=2)}{P(X \\leq 3)} = \\frac{1/4}{3/4} = \\frac{1}{3}$."},
            {qid:"DR_017_e03",q:"Given $P(X=0)=0.5$, $P(X=1)=0.3$, $P(X=2)=0.2$. Find $P(X=0 \\mid X \\leq 1)$.",a:"$P(X=0 \\mid X \\leq 1) = \\frac{0.5}{0.5 + 0.3} = \\frac{0.5}{0.8} = \\frac{5}{8} = 0.625$."}
          ],
          medium: [
            {qid:"DR_017_m01",q:"Given $P(X=1)=0.2$, $P(X=2)=0.3$, $P(X=3)=0.5$. Find $P(X=2 | X \\leq 2)$.",a:"$P(X=2|X\\leq 2) = \\frac{P(X=2)}{P(X\\leq 2)} = \\frac{0.3}{0.2+0.3} = \\frac{0.3}{0.5} = 0.6$"},
            {qid:"DR_017_m02",q:"Given $P(X=0)=0.1$, $P(X=1)=0.3$, $P(X=2)=0.4$, $P(X=3)=0.2$. Find $P(X \\geq 2 \\mid X \\geq 1)$.",a:"$P(X \\geq 2 \\mid X \\geq 1) = \\frac{P(X \\geq 2)}{P(X \\geq 1)} = \\frac{0.4 + 0.2}{0.3 + 0.4 + 0.2} = \\frac{0.6}{0.9} = \\frac{2}{3}$."},
            {qid:"DR_017_m03",q:"Given $P(X=0)=0.15$, $P(X=1)=0.25$, $P(X=2)=0.35$, $P(X=3)=0.15$, $P(X=4)=0.10$. Find $P(X=3 \\mid X > 1)$.",a:"$P(X > 1) = 0.35 + 0.15 + 0.10 = 0.60$.\n$P(X=3 \\mid X > 1) = \\frac{0.15}{0.60} = 0.25$."},
            {qid:"DR_017_m04",q:"Given $P(X=0)=0.1$, $P(X=1)=0.2$, $P(X=2)=0.3$, $P(X=3)=0.25$, $P(X=4)=0.15$. Find $P(X \\leq 1 \\mid X \\leq 3)$.",a:"$P(X \\leq 1) = 0.1 + 0.2 = 0.3$. $P(X \\leq 3) = 0.1 + 0.2 + 0.3 + 0.25 = 0.85$.\n$P(X \\leq 1 \\mid X \\leq 3) = \\frac{0.3}{0.85} = \\frac{6}{17} \\approx 0.353$."},
            {qid:"DR_017_m05",q:"Given $P(X=1)=0.2$, $P(X=2)=0.5$, $P(X=3)=0.3$. Find $P(X=2 \\mid 1 \\leq X \\leq 3)$.",a:"$P(1 \\leq X \\leq 3) = 1$. So $P(X=2 \\mid 1 \\leq X \\leq 3) = \\frac{0.5}{1} = 0.5$."}
          ],
          hard: [
            {qid:"DR_017_h01",q:"Given $P(X=0)=0.05$, $P(X=1)=0.15$, $P(X=2)=0.30$, $P(X=3)=0.30$, $P(X=4)=0.15$, $P(X=5)=0.05$. Find $P(X > 2 \\mid X \\geq 1)$.",a:"$P(X > 2) = 0.30 + 0.15 + 0.05 = 0.50$. $P(X \\geq 1) = 1 - 0.05 = 0.95$.\n$P(X > 2 \\mid X \\geq 1) = \\frac{0.50}{0.95} = \\frac{10}{19} \\approx 0.526$."},
            {qid:"DR_017_h02",q:"Given $P(X=0)=0.1$, $P(X=1)=0.2$, $P(X=2)=0.3$, $P(X=3)=0.25$, $P(X=4)=0.15$. Find $P(X=2 \\mid X \\geq 2)$.",a:"$P(X \\geq 2) = 0.3 + 0.25 + 0.15 = 0.70$.\n$P(X=2 \\mid X \\geq 2) = \\frac{0.3}{0.7} = \\frac{3}{7} \\approx 0.429$."},
            {qid:"DR_017_h03",q:"$X$ has distribution $P(X=0)=0.1$, $P(X=1)=0.2$, $P(X=2)=0.4$, $P(X=3)=0.2$, $P(X=4)=0.1$. Find $P(X \\geq 3 \\mid X > E(X))$.",a:"$E(X) = 0 + 0.2 + 0.8 + 0.6 + 0.4 = 2.0$.\n$P(X > 2) = P(X=3) + P(X=4) = 0.3$.\n$P(X \\geq 3) = 0.3$.\n$P(X \\geq 3 \\mid X > 2) = \\frac{0.3}{0.3} = 1$."},
            {qid:"DR_017_h04",q:"$X$ has distribution $P(X=1)=0.15$, $P(X=2)=0.25$, $P(X=3)=0.35$, $P(X=4)=0.25$. Find $P(X=1 \\mid X \\text{ is odd})$.",a:"$P(X \\text{ is odd}) = P(X=1) + P(X=3) = 0.15 + 0.35 = 0.50$.\n$P(X=1 \\mid X \\text{ is odd}) = \\frac{0.15}{0.50} = 0.3$."},
            {qid:"DR_017_h05",q:"$X$ has distribution $P(X=0)=0.2$, $P(X=1)=0.3$, $P(X=2)=0.3$, $P(X=3)=0.15$, $P(X=4)=0.05$. Find $E(X \\mid X \\leq 2)$.",a:"$P(X \\leq 2) = 0.2 + 0.3 + 0.3 = 0.8$.\nConditional probabilities: $P(X=0 \\mid X \\leq 2) = \\frac{0.2}{0.8} = 0.25$, $P(X=1 \\mid X \\leq 2) = \\frac{0.3}{0.8} = 0.375$, $P(X=2 \\mid X \\leq 2) = \\frac{0.3}{0.8} = 0.375$.\n$E(X \\mid X \\leq 2) = 0(0.25) + 1(0.375) + 2(0.375) = 1.125$."}
          ]
        }
,

    {
          pt_id: "DR_018",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Probability",
          pt: "Calculating expected profit/loss from discrete random variable with cost structure",
          testing: "Compute E(profit) = Σ(profit × probability) where profit = winnings − cost",
          reason_bank: ["setup_error","wrong_rule","sign_error","substitution_error","interpretation_mixup","not_sure"],
          easy: [
            {qid:"DR_018_e01",q:"A raffle has 20 tickets at $\\$1$ each. One ticket wins $\\$10$. Find the expected profit for buying one ticket.",a:"$E(\\text{profit}) = \\frac{1}{20}(10 - 1) + \\frac{19}{20}(-1) = \\frac{9 - 19}{20} = -\\$0.50$."},
            {qid:"DR_018_e02",q:"A coin flip game costs $\\$1$ to play. You win $\\$2$ if Heads. Find $E(\\text{profit})$.",a:"$E = \\frac{1}{2}(2 - 1) + \\frac{1}{2}(-1) = 0.5 - 0.5 = \\$0$. The game is fair."},
            {qid:"DR_018_e03",q:"A die game costs $\\$1$ to play. You win $\\$3$ if you roll a 5 or 6. Find $E(\\text{profit})$.",a:"$P(\\text{win}) = \\frac{2}{6} = \\frac{1}{3}$.\n$E = \\frac{1}{3}(3-1) + \\frac{2}{3}(-1) = \\frac{2}{3} - \\frac{2}{3} = \\$0$."}
          ],
          medium: [
            {qid:"DR_018_m01",q:"A raffle has 100 tickets at $\\$2$ each. One prize of $\\$50$ is awarded. Find the expected profit for a person buying one ticket.",a:"$E(\\text{profit}) = \\frac{1}{100}(50-2) + \\frac{99}{100}(-2) = 0.48 - 1.98 = -\\$1.50$"},
            {qid:"DR_018_m02",q:"A raffle has 200 tickets at $\\$3$ each. Prizes: 1 winner gets $\\$100$, 5 winners get $\\$20$. Find $E(\\text{profit})$ per ticket.",a:"$E = \\frac{1}{200}(100-3) + \\frac{5}{200}(20-3) + \\frac{194}{200}(-3) = \\frac{97 + 85 - 582}{200} = \\frac{-400}{200} = -\\$2.00$."},
            {qid:"DR_018_m03",q:"An insurance company charges $\\$300$ premium. It pays $\\$10{,}000$ for a major claim ($P = 0.01$) and $\\$2{,}000$ for a minor claim ($P = 0.05$). Find the company's expected profit per policy.",a:"$E = 300 - 0.01(10{,}000) - 0.05(2{,}000) = 300 - 100 - 100 = \\$100$."},
            {qid:"DR_018_m04",q:"A card game costs $\\$5$ to play. Win $\\$15$ for an Ace, $\\$5$ for a face card (J, Q, K), $\\$0$ otherwise. Find $E(\\text{profit})$.",a:"$E = \\frac{4}{52}(15-5) + \\frac{12}{52}(5-5) + \\frac{36}{52}(0-5) = \\frac{40 + 0 - 180}{52} = \\frac{-140}{52} \\approx -\\$2.69$."},
            {qid:"DR_018_m05",q:"In roulette, a $\\$10$ bet on Red wins $\\$10$ net with probability $\\frac{18}{38}$ and loses $\\$10$ with probability $\\frac{20}{38}$. Find $E(\\text{profit})$.",a:"$E = \\frac{18}{38}(10) + \\frac{20}{38}(-10) = \\frac{180 - 200}{38} = \\frac{-20}{38} \\approx -\\$0.53$."}
          ],
          hard: [
            {qid:"DR_018_h01",q:"A die game costs $\\$4$ to play. You win an amount equal to the face shown (i.e. win $\\$1$ to $\\$6$). Find $E(\\text{profit})$.",a:"$E(\\text{winnings}) = \\frac{1}{6}(1+2+3+4+5+6) = \\frac{21}{6} = 3.5$.\n$E(\\text{profit}) = 3.5 - 4 = -\\$0.50$."},
            {qid:"DR_018_h02",q:"An investment gains $\\$500$ with probability 0.6 and loses $\\$300$ with probability 0.4. Find $E(\\text{profit})$ per investment, and how many investments are needed to expect a cumulative profit of $\\$1{,}000$.",a:"$E = 0.6(500) + 0.4(-300) = 300 - 120 = \\$180$.\nFor cumulative $\\$1{,}000$: $n = \\frac{1000}{180} \\approx 5.56$, so at least 6 investments."},
            {qid:"DR_018_h03",q:"A two-stage game costs $\\$3$. First flip a coin: Heads → roll a die and win the face value; Tails → win nothing. Find $E(\\text{profit})$.",a:"$E(\\text{die face}) = 3.5$. $E(\\text{winnings}) = \\frac{1}{2}(3.5) + \\frac{1}{2}(0) = 1.75$.\n$E(\\text{profit}) = 1.75 - 3 = -\\$1.25$."},
            {qid:"DR_018_h04",q:"A lottery ticket costs $\\$2$. Prizes: $\\$1{,}000$ with $P = \\frac{1}{5000}$, $\\$50$ with $P = \\frac{1}{200}$, $\\$5$ with $P = \\frac{1}{20}$. Find $E(\\text{profit})$.",a:"$E = \\frac{1}{5000}(998) + \\frac{1}{200}(48) + \\frac{1}{20}(3) + P(\\text{lose})(-2)$.\n$P(\\text{lose}) = 1 - \\frac{1}{5000} - \\frac{1}{200} - \\frac{1}{20} = 0.9448$.\n$E = 0.1996 + 0.24 + 0.15 - 1.8896 \\approx -\\$1.30$."},
            {qid:"DR_018_h05",q:"A game costs $\\$1$. You win $\\$P$ if you roll double sixes (two dice). Find $P$ for a fair game.",a:"$P(\\text{double sixes}) = \\frac{1}{36}$.\n$E = \\frac{1}{36}(P - 1) + \\frac{35}{36}(-1) = 0$.\n$P - 1 = 35 \\Rightarrow P = \\$36$."}
          ]
        }
,

    {
          pt_id: "DR_019",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Probability",
          pt: "Calculating probability using probability distribution",
          testing: "Sum probabilities for relevant values of X to find P(event)",
          reason_bank: ["wrong_event","probability_sum_error","substitution_error","interpretation_mixup","algebra_slip","not_sure"],
          easy: [
            {qid:"DR_019_e01",q:"Given $P(X=0)=0.3$, $P(X=1)=0.4$, $P(X=2)=0.2$, $P(X=3)=0.1$. Find $P(X \\geq 2)$.",a:"$P(X \\geq 2) = P(X=2) + P(X=3) = 0.2 + 0.1 = 0.3$."},
            {qid:"DR_019_e02",q:"Given $P(X=0)=0.25$, $P(X=1)=0.35$, $P(X=2)=0.25$, $P(X=3)=0.15$. Find $P(X < 2)$.",a:"$P(X < 2) = P(X=0) + P(X=1) = 0.25 + 0.35 = 0.6$."},
            {qid:"DR_019_e03",q:"Given $P(X=1)=0.2$, $P(X=2)=0.5$, $P(X=3)=0.3$. Find $P(X=1 \\text{ or } X=3)$.",a:"$P(X=1 \\text{ or } X=3) = 0.2 + 0.3 = 0.5$."}
          ],
          medium: [
            {qid:"DR_019_m01",q:"Given $P(X=0)=0.1$, $P(X=1)=0.4$, $P(X=2)=0.3$, $P(X=3)=0.2$. Find $P(X \\geq 2)$.",a:"$P(X \\geq 2) = 0.3 + 0.2 = 0.5$"},
            {qid:"DR_019_m02",q:"Using the same distribution, find $P(1 \\leq X < 3)$.",a:"$P(1 \\leq X < 3) = P(X=1) + P(X=2) = 0.4 + 0.3 = 0.7$"},
            {qid:"DR_019_m03",q:"Given $P(X=0)=0.1$, $P(X=1)=0.3$, $P(X=2)=0.4$, $P(X=3)=0.2$. Find $P(X > E(X))$ given $E(X) = 1.7$.",a:"$X > 1.7$ means $X \\geq 2$.\n$P(X > E(X)) = P(X=2) + P(X=3) = 0.4 + 0.2 = 0.6$."},
            {qid:"DR_019_m04",q:"Given $P(X=0)=0.1$, $P(X=1)=0.2$, $P(X=2)=0.3$, $P(X=3)=0.25$, $P(X=4)=0.15$. Find $P(|X-2| \\leq 1)$.",a:"$|X-2| \\leq 1$ means $1 \\leq X \\leq 3$.\n$P = 0.2 + 0.3 + 0.25 = 0.75$."},
            {qid:"DR_019_m05",q:"Given $P(X=1)=0.15$, $P(X=2)=0.25$, $P(X=3)=0.30$, $P(X=4)=0.20$, $P(X=5)=0.10$. Find $P(X \\text{ is even})$.",a:"$P(X \\text{ is even}) = P(X=2) + P(X=4) = 0.25 + 0.20 = 0.45$."}
          ],
          hard: [
            {qid:"DR_019_h01",q:"Given $P(X=0)=0.05$, $P(X=1)=0.10$, $P(X=2)=0.25$, $P(X=3)=0.30$, $P(X=4)=0.20$, $P(X=5)=0.10$. Find $P(1 < X \\leq 4)$.",a:"$P(1 < X \\leq 4) = P(X=2) + P(X=3) + P(X=4) = 0.25 + 0.30 + 0.20 = 0.75$."},
            {qid:"DR_019_h02",q:"Given $P(X=0)=0.05$, $P(X=1)=0.20$, $P(X=2)=0.40$, $P(X=3)=0.25$, $P(X=4)=0.10$. $E(X) = 2.15$ and $\\text{SD}(X) \\approx 1.014$. Find $P(X \\geq E(X) + \\text{SD}(X))$.",a:"$E(X) + \\text{SD}(X) \\approx 2.15 + 1.014 = 3.164$.\n$P(X \\geq 3.164) = P(X = 4) = 0.10$."},
            {qid:"DR_019_h03",q:"$X$ and $Y$ are independent. $X$: $P(1)=0.5$, $P(2)=0.3$, $P(3)=0.2$. $Y$: $P(1)=0.4$, $P(2)=0.6$. Find $P(X + Y \\geq 4)$.",a:"$X+Y \\geq 4$: $(2,2)$, $(3,1)$, $(3,2)$.\n$P = 0.3 \\times 0.6 + 0.2 \\times 0.4 + 0.2 \\times 0.6 = 0.18 + 0.08 + 0.12 = 0.38$."},
            {qid:"DR_019_h04",q:"$X$ and $Y$ are independent, each uniform on $\\{1, 2\\}$. Find $P(\\max(X, Y) = 2)$.",a:"$P(\\max = 2) = 1 - P(\\max \\leq 1) = 1 - P(X \\leq 1)P(Y \\leq 1) = 1 - \\frac{1}{2} \\times \\frac{1}{2} = \\frac{3}{4}$."},
            {qid:"DR_019_h05",q:"Given $P(X=-2)=0.1$, $P(X=-1)=0.2$, $P(X=0)=0.4$, $P(X=1)=0.2$, $P(X=2)=0.1$. Find $P(X^2 \\leq 1)$.",a:"$X^2 \\leq 1$ means $-1 \\leq X \\leq 1$.\n$P = P(X=-1) + P(X=0) + P(X=1) = 0.2 + 0.4 + 0.2 = 0.8$."}
          ]
        }
,

    {
          pt_id: "DR_020",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "DRV Variance/SD",
          pt: "Calculating Var(X) and SD(X) for discrete random variable",
          testing: "Use Var(X) = E(X²) − [E(X)]², SD(X) = √Var(X)",
          reason_bank: ["wrong_rule","substitution_error","algebra_slip","setup_error","interpretation_mixup","not_sure"],
          easy: [
            {qid:"DR_020_e01",q:"$X$ is uniform on $\\{1, 2, 3\\}$ (each with $P = \\frac{1}{3}$). Find $\\text{Var}(X)$.",a:"$E(X) = \\frac{1+2+3}{3} = 2$. $E(X^2) = \\frac{1+4+9}{3} = \\frac{14}{3}$.\n$\\text{Var}(X) = \\frac{14}{3} - 4 = \\frac{2}{3} \\approx 0.667$."},
            {qid:"DR_020_e02",q:"$P(X=0) = 0.5$, $P(X=1) = 0.5$. Find $\\text{Var}(X)$.",a:"$E(X) = 0.5$. $E(X^2) = 0 + 0.5 = 0.5$.\n$\\text{Var}(X) = 0.5 - 0.25 = 0.25$."},
            {qid:"DR_020_e03",q:"$P(X=1) = 0.25$, $P(X=2) = 0.50$, $P(X=3) = 0.25$. Find $E(X)$, $\\text{Var}(X)$, and $\\text{SD}(X)$.",a:"$E(X) = 0.25 + 1 + 0.75 = 2$. $E(X^2) = 0.25 + 2 + 2.25 = 4.5$.\n$\\text{Var}(X) = 4.5 - 4 = 0.5$. $\\text{SD}(X) = \\sqrt{0.5} \\approx 0.707$."}
          ],
          medium: [
            {qid:"DR_020_m01",q:"Given:\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|---|\n| $P$ | 0.1 | 0.2 | 0.3 | 0.3 | 0.1 |\nFind $E(X)$ and $\\text{Var}(X)$.",a:"$E(X) = 0 + 0.2 + 0.6 + 0.9 + 0.4 = 2.1$.\n$E(X^2) = 0 + 0.2 + 1.2 + 2.7 + 1.6 = 5.7$.\n$\\text{Var}(X) = 5.7 - 2.1^2 = 5.7 - 4.41 = 1.29$."},
            {qid:"DR_020_m02",q:"Given:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.3 | 0.4 | 0.2 |\nFind $\\text{Var}(X)$.",a:"$E(X) = 0.1 + 0.6 + 1.2 + 0.8 = 2.7$.\n$E(X^2) = 0.1 + 1.2 + 3.6 + 3.2 = 8.1$.\n$\\text{Var}(X) = 8.1 - 7.29 = 0.81$."},
            {qid:"DR_020_m03",q:"Given:\n| $x$ | 0 | 1 | 2 | 3 |\n|-----|---|---|---|---|\n| $P$ | 0.2 | 0.3 | 0.3 | 0.2 |\nFind $E(X)$, $\\text{Var}(X)$, and $\\text{SD}(X)$.",a:"$E(X) = 0 + 0.3 + 0.6 + 0.6 = 1.5$.\n$E(X^2) = 0 + 0.3 + 1.2 + 1.8 = 3.3$.\n$\\text{Var}(X) = 3.3 - 2.25 = 1.05$. $\\text{SD}(X) = \\sqrt{1.05} \\approx 1.025$."},
            {qid:"DR_020_m04",q:"$P(X=-1) = 0.25$, $P(X=0) = 0.50$, $P(X=1) = 0.25$. Find $E(X)$ and $\\text{Var}(X)$.",a:"$E(X) = -0.25 + 0 + 0.25 = 0$.\n$E(X^2) = 0.25 + 0 + 0.25 = 0.5$.\n$\\text{Var}(X) = 0.5 - 0 = 0.5$."},
            {qid:"DR_020_m05",q:"Given:\n| $x$ | 2 | 5 | 8 | 11 |\n|-----|---|---|---|----|\n| $P$ | 0.15 | 0.35 | 0.30 | 0.20 |\nFind $E(X)$, $\\text{Var}(X)$, and $\\text{SD}(X)$.",a:"$E(X) = 0.30 + 1.75 + 2.40 + 2.20 = 6.65$.\n$E(X^2) = 0.60 + 8.75 + 19.20 + 24.20 = 52.75$.\n$\\text{Var}(X) = 52.75 - 44.2225 = 8.5275$. $\\text{SD}(X) = \\sqrt{8.5275} \\approx 2.920$."}
          ],
          hard: [
            {qid:"DR_020_h01",q:"Given:\n| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |\n|-----|---|---|---|---|---|---|\n| $P$ | 0.05 | 0.15 | 0.30 | 0.25 | 0.15 | 0.10 |\nFind $E(X)$, $\\text{Var}(X)$, and $\\text{SD}(X)$.",a:"$E(X) = 0 + 0.15 + 0.60 + 0.75 + 0.60 + 0.50 = 2.6$.\n$E(X^2) = 0 + 0.15 + 1.20 + 2.25 + 2.40 + 2.50 = 8.5$.\n$\\text{Var}(X) = 8.5 - 6.76 = 1.74$. $\\text{SD}(X) = \\sqrt{1.74} \\approx 1.319$."},
            {qid:"DR_020_h02",q:"Given:\n| $x$ | 1 | 2 | 3 | 4 |\n|-----|---|---|---|---|\n| $P$ | 0.1 | 0.3 | 0.4 | 0.2 |\nFind $\\text{Var}(X)$. Then let $Y = 2X + 3$ and find $\\text{Var}(Y)$.",a:"$\\text{Var}(X) = 0.81$ (from $E(X)=2.7$, $E(X^2)=8.1$).\n$\\text{Var}(Y) = \\text{Var}(2X+3) = 4 \\times \\text{Var}(X) = 4 \\times 0.81 = 3.24$."},
            {qid:"DR_020_h03",q:"$X$ has distribution $P(X=0) = \\frac{1}{8}$, $P(X=1) = \\frac{3}{8}$, $P(X=2) = \\frac{3}{8}$, $P(X=3) = \\frac{1}{8}$.\nVerify $\\text{Var}(X) = E(X^2) - [E(X)]^2$ step by step.",a:"$E(X) = 0 + \\frac{3}{8} + \\frac{6}{8} + \\frac{3}{8} = \\frac{12}{8} = 1.5$.\n$E(X^2) = 0 + \\frac{3}{8} + \\frac{12}{8} + \\frac{9}{8} = \\frac{24}{8} = 3$.\n$\\text{Var}(X) = 3 - 1.5^2 = 3 - 2.25 = 0.75$. ✓"},
            {qid:"DR_020_h04",q:"Distribution A: $P(X=1) = 0.25$, $P(X=2) = 0.50$, $P(X=3) = 0.25$.\nDistribution B: $P(X=0) = 0.25$, $P(X=2) = 0.50$, $P(X=4) = 0.25$.\nBoth have $E(X) = 2$. Find $\\text{Var}(A)$ and $\\text{Var}(B)$. Which is more spread out?",a:"$\\text{Var}(A) = (0.25 + 2 + 2.25) - 4 = 4.5 - 4 = 0.5$.\n$\\text{Var}(B) = (0 + 2 + 4) - 4 = 6 - 4 = 2$.\n$\\text{Var}(B) > \\text{Var}(A)$, so B is more spread out despite the same mean."},
            {qid:"DR_020_h05",q:"$P(X=1) = k$, $P(X=2) = 0.5$, $P(X=3) = k$, where $\\sum P = 1$. Find $k$, then $\\text{Var}(X)$.",a:"$2k + 0.5 = 1 \\Rightarrow k = 0.25$.\n$E(X) = 0.25 + 1 + 0.75 = 2$.\n$E(X^2) = 0.25 + 2 + 2.25 = 4.5$.\n$\\text{Var}(X) = 4.5 - 4 = 0.5$."}
          ]
        }
,

    {
          pt_id: "DR_021",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "Expected Value (Interpretation)",
          pt: "Determining parameter value to achieve specified expected value",
          testing: "Set up E(profit) equation and solve for unknown parameter",
          reason_bank: ["setup_error","wrong_rule","algebra_slip","substitution_error","wrong_parameters","not_sure"],
          easy: [
            {qid:"DR_021_e01",q:"A game costs $\\$2$ to play. You win $\\$k$ if you roll a 6 on a fair die. Find $k$ so the game is fair.",a:"$E(\\text{profit}) = \\frac{1}{6}(k-2) + \\frac{5}{6}(-2) = 0$.\n$\\frac{k-2}{6} = \\frac{10}{6} \\Rightarrow k - 2 = 10 \\Rightarrow k = 12$."},
            {qid:"DR_021_e02",q:"A coin flip game: win $\\$4$ for Heads. Find the entry cost $c$ for a fair game.",a:"$E = \\frac{1}{2}(4-c) + \\frac{1}{2}(-c) = 2 - c = 0 \\Rightarrow c = \\$2$."},
            {qid:"DR_021_e03",q:"A spinner has $P(\\text{win}) = \\frac{1}{3}$. You win $\\$6$. Find the entry cost for a fair game.",a:"$E(\\text{winnings}) = \\frac{1}{3}(6) = 2$. For a fair game, $c = \\$2$."}
          ],
          medium: [
            {qid:"DR_021_m01",q:"A game pays $\\$k$ for a six on a die and costs $\\$3$ to play. Find $k$ so the game is fair.",a:"$E(\\text{profit}) = \\frac{1}{6}(k-3) + \\frac{5}{6}(-3) = 0 \\Rightarrow \\frac{k-3}{6} = \\frac{15}{6} \\Rightarrow k = 18$"},
            {qid:"DR_021_m02",q:"A game has three outcomes: win $\\$10$ ($P = 0.2$), win $\\$5$ ($P = 0.3$), win $\\$0$ ($P = 0.5$). Find the entry cost $c$ for a fair game.",a:"$E(\\text{winnings}) = 10(0.2) + 5(0.3) + 0 = 2 + 1.5 = 3.5$. Fair game: $c = \\$3.50$."},
            {qid:"DR_021_m03",q:"A raffle has 100 tickets at $\\$5$ each. There is one prize of $\\$P$. Find $P$ so the organiser's expected profit per ticket is $\\$1$.",a:"Organiser receives $\\$5$ per ticket, pays out $\\frac{P}{100}$ per ticket on average.\n$5 - \\frac{P}{100} = 1 \\Rightarrow P = 400$."},
            {qid:"DR_021_m04",q:"A die game: you win $\\$2 \\times$(face value). Find the entry cost for a fair game.",a:"$E(\\text{winnings}) = 2 \\times \\frac{1+2+3+4+5+6}{6} = 2 \\times 3.5 = 7$. Entry cost $= \\$7$."},
            {qid:"DR_021_m05",q:"Win $\\$20$ ($P = 0.1$), win $\\$5$ ($P = 0.3$), win $\\$0$ ($P = 0.6$). Entry cost $c$. Find $c$ such that $E(\\text{profit}) = -\\$0.50$.",a:"$E(\\text{winnings}) = 20(0.1) + 5(0.3) = 2 + 1.5 = 3.5$.\n$E(\\text{profit}) = 3.5 - c = -0.5 \\Rightarrow c = \\$4$."}
          ],
          hard: [
            {qid:"DR_021_h01",q:"Two dice are rolled. You win $\\$k$ if the sum is 7 and pay $\\$2$ to play. Find $k$ for a fair game.",a:"$P(\\text{sum}=7) = \\frac{6}{36} = \\frac{1}{6}$.\n$\\frac{1}{6}(k-2) + \\frac{5}{6}(-2) = 0 \\Rightarrow k-2 = 10 \\Rightarrow k = \\$12$."},
            {qid:"DR_021_h02",q:"A game costs $\\$5$. Win $\\$W$ ($P = 0.25$), or lose an additional $\\$2$ penalty ($P = 0.75$). Find $W$ so the player breaks even after many games.",a:"$E = 0.25(W-5) + 0.75(-5-2) = 0$.\n$0.25W - 1.25 - 5.25 = 0 \\Rightarrow 0.25W = 6.5 \\Rightarrow W = \\$26$."},
            {qid:"DR_021_h03",q:"An insurance company wants $E(\\text{profit}) = \\$50$ per policy. It pays $\\$5{,}000$ for major claims ($P = 0.03$) and $\\$1{,}000$ for minor claims ($P = 0.07$). Find the premium $P$.",a:"$E(\\text{profit}) = P - 0.03(5000) - 0.07(1000) = P - 150 - 70 = P - 220 = 50$.\n$P = \\$270$."},
            {qid:"DR_021_h04",q:"A card game costs $\\$3$. Win $\\$k$ for an Ace ($P = \\frac{4}{52}$), win $\\$5$ for a face card ($P = \\frac{12}{52}$), win $\\$0$ otherwise. Find $k$ for a fair game.",a:"$\\frac{4}{52}(k-3) + \\frac{12}{52}(5-3) + \\frac{36}{52}(0-3) = 0$.\n$\\frac{4(k-3) + 24 - 108}{52} = 0 \\Rightarrow 4(k-3) = 84 \\Rightarrow k-3 = 21 \\Rightarrow k = \\$24$."},
            {qid:"DR_021_h05",q:"A penalty kick scores with $P = 0.8$. A player wins $\\$W$ for a goal and loses $\\$10$ for a miss. Find $W$ so $E(\\text{profit}) = \\$2$.",a:"$0.8W + 0.2(-10) = 2$.\n$0.8W - 2 = 2 \\Rightarrow 0.8W = 4 \\Rightarrow W = \\$5$."}
          ]
        }
,

    {
          pt_id: "DR_022",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "Expected Value (Interpretation)",
          pt: "Interpreting expected value to determine long-run profitability",
          testing: "Explain what E(X) means in context: long-run average, fairness, decision-making",
          reason_bank: ["setup_error","interpretation_mixup","sign_error","wrong_rule","substitution_error","not_sure"],
          easy: [
            {qid:"DR_022_e01",q:"A game has $E(\\text{profit}) = \\$2$. Interpret this result.",a:"On average, a player gains $\\$2$ per game in the long run. The game favours the player."},
            {qid:"DR_022_e02",q:"A game has $E(\\text{profit}) = \\$0$. What does this tell us?",a:"On average, neither the player nor the operator gains or loses in the long run. The game is fair."},
            {qid:"DR_022_e03",q:"A game has $E(\\text{profit}) = -\\$1$. What does this tell the player?",a:"On average, the player loses $\\$1$ per game in the long run. The game is not fair and favours the operator."}
          ],
          medium: [
            {qid:"DR_022_m01",q:"A game has $E(\\text{profit}) = -\\$0.50$. Interpret this result.",a:"On average, a player will lose $\\$0.50$ per game in the long run. The game is not fair — it favours the operator."},
            {qid:"DR_022_m02",q:"In a survey, $X$ = number of children per household has $E(X) = 2.15$. Interpret this value.",a:"On average, there are 2.15 children per household in the long run. No individual household has exactly 2.15 children — the expected value is a theoretical long-run average."},
            {qid:"DR_022_m03",q:"A game has $E(\\text{profit}) = \\$0$. Does this mean every player breaks even?",a:"No. $E(\\text{profit}) = 0$ means the average profit over many games is zero. Individual players will win or lose on any given game. In the long run, a player's cumulative profit approaches $\\$0$."},
            {qid:"DR_022_m04",q:"Game A: $E(\\text{profit}) = \\$1.50$, $\\text{SD} = \\$10$. Game B: $E(\\text{profit}) = \\$2.00$, $\\text{SD} = \\$50$. Which game would you recommend and why?",a:"Game B has a higher expected profit ($\\$2.00 > \\$1.50$), but much higher variability ($\\text{SD} = \\$50$). A risk-averse player might prefer Game A for more consistent returns, while a risk-seeking player might prefer Game B. Expected value alone does not capture risk."},
            {qid:"DR_022_m05",q:"A shop expects daily demand of $E(X) = 3.5$ units. The shop stocks 3 units per day. Comment on this strategy.",a:"Since $E(X) = 3.5 > 3$, the shop is understocking on average. It will frequently run out of stock. To meet average demand, at least 4 units should be stocked (rounding up since fractional units cannot be stocked)."}
          ],
          hard: [
            {qid:"DR_022_h01",q:"An insurance company's expected profit per policy is $\\$50$. They sell 10,000 policies. Estimate the company's total expected profit and explain why the law of large numbers is relevant.",a:"Total expected profit $= 10{,}000 \\times 50 = \\$500{,}000$.\nBy the law of large numbers, with many policies the actual average profit per policy will be close to $\\$50$. Individual claims are unpredictable, but the aggregate result is highly predictable."},
            {qid:"DR_022_h02",q:"A gambler plays a game 1000 times with $E(\\text{profit}) = -\\$0.10$ per game. What is the expected total outcome? Could the gambler still profit?",a:"Expected total $= 1000 \\times (-0.10) = -\\$100$.\nYes, the gambler could still profit due to variability, but it becomes increasingly unlikely as the number of games grows. The law of large numbers suggests the average loss per game will converge to $\\$0.10$."},
            {qid:"DR_022_h03",q:"Two investments: A has $E(\\text{return}) = 8\\%$ and $\\text{SD} = 5\\%$; B has $E(\\text{return}) = 12\\%$ and $\\text{SD} = 20\\%$. Compare using both expected value and risk.",a:"Investment B has higher expected return but much higher risk (SD is 4× larger). The coefficient of variation: $\\text{CV}_A = 5/8 = 0.625$, $\\text{CV}_B = 20/12 \\approx 1.67$. B has much greater relative variability. Choice depends on the investor's risk tolerance."},
            {qid:"DR_022_h04",q:"A quality control test costs $\\$5$ per item. Defective items that pass cost $\\$200$ in warranty claims. The defect rate is 2%. Should the company test every item?",a:"$E(\\text{cost without testing}) = 0.02 \\times 200 = \\$4$ per item.\n$E(\\text{cost with testing}) = \\$5$ per item (plus catching defects).\nSince $\\$4 < \\$5$, on expected value alone, not testing is cheaper. However, other factors (reputation, safety) may justify the $\\$1$ extra cost per item."},
            {qid:"DR_022_h05",q:"$X$ is the number of ambulances needed daily, with $E(X) = 3.2$. The hospital has 3 ambulances. $P(X > 3) = 0.35$. Discuss whether 3 ambulances is sufficient.",a:"$E(X) = 3.2$ exceeds the capacity of 3, and $P(X > 3) = 0.35$ means demand exceeds supply 35% of the time. This is a significant shortfall. The hospital should consider acquiring a 4th ambulance, as $P(X > 4)$ would likely be much smaller."}
          ]
        }
,

    {
          pt_id: "DR_023",
          topic: "Discrete Random Variables",
          subtopic: "General Discrete Random Variables",
          concept: "Variance Calculations",
          pt: "Finding mean and variance under linear transformation $Y = aX + b$",
          testing: "Use E(aX+b) = aE(X)+b, Var(aX+b) = a²Var(X), SD(aX+b) = |a|SD(X)",
          reason_bank: ["wrong_rule","sign_error","substitution_error","algebra_slip","interpretation_mixup","not_sure"],
          easy: [
            {qid:"DR_023_e01",q:"Given $E(X) = 3$ and $\\text{Var}(X) = 2$. Find $E(2X + 1)$ and $\\text{Var}(2X + 1)$.",a:"$E(2X+1) = 2(3) + 1 = 7$. $\\text{Var}(2X+1) = 4(2) = 8$."},
            {qid:"DR_023_e02",q:"Given $E(X) = 10$ and $\\text{SD}(X) = 4$. Find $E(X - 5)$ and $\\text{SD}(X - 5)$.",a:"$E(X-5) = 10 - 5 = 5$. $\\text{SD}(X-5) = \\text{SD}(X) = 4$ (shifting does not change spread)."},
            {qid:"DR_023_e03",q:"Given $E(X) = 5$ and $\\text{Var}(X) = 9$. Find $E(3X)$ and $\\text{Var}(3X)$.",a:"$E(3X) = 3(5) = 15$. $\\text{Var}(3X) = 9(9) = 81$."}
          ],
          medium: [
            {qid:"DR_023_m01",q:"Given $E(X) = 5$ and $\\text{Var}(X) = 4$, find $E(3X - 2)$ and $\\text{Var}(3X - 2)$.",a:"$E(3X-2) = 3(5) - 2 = 13$. $\\text{Var}(3X-2) = 9(4) = 36$."},
            {qid:"DR_023_m02",q:"Temperatures in °C have mean 20 and SD 3. Convert to °F using $F = 1.8C + 32$. Find the mean and SD in °F.",a:"$E(F) = 1.8(20) + 32 = 68$°F. $\\text{SD}(F) = 1.8(3) = 5.4$°F."},
            {qid:"DR_023_m03",q:"$E(X) = 50$ and $\\text{SD}(X) = 8$. Let $Y = \\frac{X - 50}{8}$ (standardisation). Find $E(Y)$ and $\\text{SD}(Y)$.",a:"$E(Y) = \\frac{E(X) - 50}{8} = \\frac{0}{8} = 0$. $\\text{SD}(Y) = \\frac{1}{8} \\times 8 = 1$."},
            {qid:"DR_023_m04",q:"$E(X) = 200$, $\\text{Var}(X) = 400$. Production cost is $C = 5X + 100$. Find $E(C)$ and $\\text{SD}(C)$.",a:"$E(C) = 5(200) + 100 = 1100$.\n$\\text{Var}(C) = 25(400) = 10{,}000$. $\\text{SD}(C) = \\sqrt{10{,}000} = 100$."},
            {qid:"DR_023_m05",q:"Show that $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$ using the definition $\\text{Var}(Y) = E(Y^2) - [E(Y)]^2$.",a:"Let $Y = aX + b$.\n$E(Y) = aE(X) + b$. $E(Y^2) = E(a^2X^2 + 2abX + b^2) = a^2E(X^2) + 2abE(X) + b^2$.\n$\\text{Var}(Y) = a^2E(X^2) + 2abE(X) + b^2 - [aE(X) + b]^2$\n$= a^2E(X^2) + 2abE(X) + b^2 - a^2[E(X)]^2 - 2abE(X) - b^2 = a^2[E(X^2) - [E(X)]^2] = a^2\\text{Var}(X)$."}
          ],
          hard: [
            {qid:"DR_023_h01",q:"$E(X) = 4$, $\\text{Var}(X) = 3$. Let $Y = -2X + 10$. Find $E(Y)$, $\\text{Var}(Y)$, and $\\text{SD}(Y)$.",a:"$E(Y) = -2(4) + 10 = 2$.\n$\\text{Var}(Y) = (-2)^2 \\times 3 = 12$.\n$\\text{SD}(Y) = \\sqrt{12} = 2\\sqrt{3} \\approx 3.46$."},
            {qid:"DR_023_h02",q:"Given $E(2X - 3) = 7$ and $\\text{Var}(2X - 3) = 20$. Find $E(X)$ and $\\text{Var}(X)$.",a:"$2E(X) - 3 = 7 \\Rightarrow E(X) = 5$.\n$4\\text{Var}(X) = 20 \\Rightarrow \\text{Var}(X) = 5$."},
            {qid:"DR_023_h03",q:"Exam marks $X$ out of 100 have $E(X) = 65$ and $\\text{SD}(X) = 12$. Marks are converted to a GPA scale: $Y = 0.1X$. Find $E(Y)$ and $\\text{SD}(Y)$.",a:"$E(Y) = 0.1(65) = 6.5$. $\\text{SD}(Y) = 0.1(12) = 1.2$."},
            {qid:"DR_023_h04",q:"$E(X) = 50$, $\\text{Var}(X) = 100$ (so $\\text{SD}(X) = 10$). Find constants $a > 0$ and $b$ such that $Y = aX + b$ has $E(Y) = 0$ and $\\text{Var}(Y) = 1$.",a:"$\\text{Var}(Y) = a^2 \\times 100 = 1 \\Rightarrow a^2 = 0.01 \\Rightarrow a = 0.1$.\n$E(Y) = 0.1(50) + b = 5 + b = 0 \\Rightarrow b = -5$.\nSo $Y = 0.1X - 5 = \\frac{X - 50}{10}$ (the standardisation formula)."},
            {qid:"DR_023_h05",q:"$X$ and $Y$ are independent with $E(X) = 3$, $\\text{Var}(X) = 2$, $E(Y) = 5$, $\\text{Var}(Y) = 3$. Let $S = X + Y$ and $T = 2X - Y + 1$. Find $E(S)$, $\\text{Var}(S)$, $E(T)$, and $\\text{Var}(T)$.",a:"$E(S) = 3 + 5 = 8$. $\\text{Var}(S) = 2 + 3 = 5$ (independent).\n$E(T) = 2(3) - 5 + 1 = 2$.\n$\\text{Var}(T) = 4(2) + 1(3) = 11$ (using $\\text{Var}(aX - bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y)$ for independent RVs)."}
          ]
        }

  ]
};