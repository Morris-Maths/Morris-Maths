// ======================================================================
// CONCEPTS — CONCEPTS_DISCRETE_RANDOM_VARIABLES
// Topic: Discrete Random Variables
// 23 concepts mapped to atomised problem types
// For use in concept-practice program
// ======================================================================

var CONCEPTS_DISCRETE_RANDOM_VARIABLES = {
  topic: "Discrete Random Variables",
  description: "Bernoulli and Binomial distributions, general DRVs: probability tables, expected value, variance, standard deviation, conditional probability, mode, cumulative distributions.",
  sections: [
    {
      section: "Bernoulli Distributions",
      concepts: [
        {
          pt_id: "DR_001",
          concept: "Bernoulli Distribution",
          skill: "Calculating mean and standard deviation of Bernoulli distribution",
          key_idea: "Use E(X)=p, Var(X)=p(1−p), SD(X)=√(p(1−p))"
        },
        {
          pt_id: "DR_002",
          concept: "Bernoulli Distribution",
          skill: "Stating Bernoulli distribution from context",
          key_idea: "Identify binary outcome and probability of success p"
        }
      ]
    },
    {
      section: "Binomial Distributions",
      concepts: [
        {
          pt_id: "DR_003",
          concept: "Binomial Probability",
          skill: "Calculating binomial probability $P(X = k)$",
          key_idea: "Apply $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$"
        },
        {
          pt_id: "DR_004",
          concept: "Binomial Probability",
          skill: "Calculating binomial tail probability",
          key_idea: "Sum individual P(X=k) or use complement P(X≥k) = 1−P(X≤k−1)"
        },
        {
          pt_id: "DR_005",
          concept: "Binomial Probability",
          skill: "Calculating expected value and variance of binomial distribution",
          key_idea: "Use E(X)=np, Var(X)=np(1−p), SD(X)=√(np(1−p))"
        },
        {
          pt_id: "DR_006",
          concept: "Binomial Probability",
          skill: "Calculating negative binomial probability (trials until rth success)",
          key_idea: "P(rth success on trial t) = C(t−1, r−1) p^r (1−p)^{t−r}"
        },
        {
          pt_id: "DR_007",
          concept: "Binomial Probability",
          skill: "Finding n and p from mean and variance of binomial, then evaluating a probability",
          key_idea: "Use np=E(X) and np(1−p)=Var(X) to solve simultaneous equations"
        },
        {
          pt_id: "DR_008",
          concept: "Binomial Setup",
          skill: "Evaluating validity of binomial distribution assumptions in context",
          key_idea: "Check: fixed n, two outcomes, constant p, independence"
        },
        {
          pt_id: "DR_009",
          concept: "Binomial Setup",
          skill: "Stating assumptions required for binomial distribution validity",
          key_idea: "State: fixed n, two outcomes, constant p, independent trials"
        },
        {
          pt_id: "DR_010",
          concept: "Binomial Setup",
          skill: "Stating binomial distribution $X \\sim \\text{Bin}(n,p)$ from context",
          key_idea: "Identify n (number of trials) and p (probability of success) from context"
        }
      ]
    },
    {
      section: "General Discrete Random Variables",
      concepts: [
        {
          pt_id: "DR_011",
          concept: "DRV Distribution Tables",
          skill: "Constructing probability distribution from frequency data",
          key_idea: "Divide each frequency by total to obtain probabilities; verify ΣP = 1"
        },
        {
          pt_id: "DR_012",
          concept: "DRV Distribution Tables",
          skill: "Constructing probability distribution table for profit/loss random variable",
          key_idea: "Identify all outcomes, compute profit = winnings − cost, assign probabilities"
        },
        {
          pt_id: "DR_013",
          concept: "DRV Distribution Tables",
          skill: "Constructing probability distribution table for related random variable",
          key_idea: "Apply transformation to each value of X; probabilities transfer directly for 1-to-1 maps; combine for many-to-one maps"
        },
        {
          pt_id: "DR_014",
          concept: "DRV Distribution Tables",
          skill: "Probability distribution table problem",
          key_idea: "Use ΣP = 1 to find unknown; may combine with E(X) or Var(X) constraints"
        },
        {
          pt_id: "DR_015",
          concept: "DRV Expected Value",
          skill: "Calculating $E(X)$ for discrete random variable",
          key_idea: "Apply E(X) = Σ x·P(X=x), possibly after finding probabilities from a formula"
        },
        {
          pt_id: "DR_016",
          concept: "DRV Expected Value",
          skill: "Calculating expected value of discrete random variable",
          key_idea: "Apply E(X) = Σ x·P(X=x) from a given table"
        },
        {
          pt_id: "DR_017",
          concept: "DRV Probability",
          skill: "Calculating conditional probability P(X=a | X≤b) for discrete RV",
          key_idea: "Apply P(A|B) = P(A∩B)/P(B) with discrete distribution"
        },
        {
          pt_id: "DR_018",
          concept: "DRV Probability",
          skill: "Calculating expected profit/loss from discrete random variable with cost structure",
          key_idea: "Compute E(profit) = Σ(profit × probability) where profit = winnings − cost"
        },
        {
          pt_id: "DR_019",
          concept: "DRV Probability",
          skill: "Calculating probability using probability distribution",
          key_idea: "Sum probabilities for relevant values of X to find P(event)"
        },
        {
          pt_id: "DR_020",
          concept: "DRV Variance/SD",
          skill: "Calculating Var(X) and SD(X) for discrete random variable",
          key_idea: "Use Var(X) = E(X²) − [E(X)]², SD(X) = √Var(X)"
        },
        {
          pt_id: "DR_021",
          concept: "Expected Value (Interpretation)",
          skill: "Determining parameter value to achieve specified expected value",
          key_idea: "Set up E(profit) equation and solve for unknown parameter"
        },
        {
          pt_id: "DR_022",
          concept: "Expected Value (Interpretation)",
          skill: "Interpreting expected value to determine long-run profitability",
          key_idea: "Explain what E(X) means in context: long-run average, fairness, decision-making"
        },
        {
          pt_id: "DR_023",
          concept: "Variance Calculations",
          skill: "Finding mean and variance under linear transformation $Y = aX + b$",
          key_idea: "Use E(aX+b) = aE(X)+b, Var(aX+b) = a²Var(X), SD(aX+b) = |a|SD(X)"
        }
      ]
    }
  ]
};