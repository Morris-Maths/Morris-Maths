// ======================================================================
// CONCEPTS — CONCEPTS_CONTINUOUS_RANDOM_VARIABLES
// Topic: Continuous Random Variables and the Normal Distribution
// 21 concepts mapped to atomised problem types
// For use in concept-practice program
// ======================================================================

var CONCEPTS_CONTINUOUS_RANDOM_VARIABLES = {
  topic: "Continuous Random Variables and the Normal Distribution",
  description: "PDFs, CDFs, expected value by integration, median, conditional probability for CRVs, Normal distribution N(μ,σ²), standardisation, z-scores, inverse normal, combined probability.",
  sections: [
    {
      section: "General Continuous Random Variables",
      concepts: [
        {
          pt_id: "CN_001",
          concept: "Area Calculations",
          skill: "Determining parameter of PDF using area condition",
          key_idea: "Determining parameter of PDF using area condition"
        },
        {
          pt_id: "CN_002",
          concept: "Expected Value",
          skill: "Calculating $E(aX + b)$ using linearity of expectation",
          key_idea: "Calculating $E(aX + b)$ using linearity of expectation"
        },
        {
          pt_id: "CN_003",
          concept: "Expected Value",
          skill: "Calculating expected value of continuous random variable by integration",
          key_idea: "Calculating expected value of continuous random variable by integration"
        },
        {
          pt_id: "CN_004",
          concept: "General/Other",
          skill: "Calculating conditional probability for continuous random variable",
          key_idea: "Calculating conditional probability for continuous random variable"
        },
        {
          pt_id: "CN_005",
          concept: "General/Other",
          skill: "Finding median by solving integral equation for continuous RV",
          key_idea: "Finding median by solving integral equation for continuous RV"
        },
        {
          pt_id: "CN_006",
          concept: "Integration Techniques",
          skill: "Calculating probability for continuous random variable by integration",
          key_idea: "Calculating probability for continuous random variable by integration"
        },
        {
          pt_id: "CN_007",
          concept: "Integration Techniques",
          skill: "Determining equation of pdf from graph and integrating to find probability",
          key_idea: "Determining equation of pdf from graph and integrating to find probability"
        },
        {
          pt_id: "CN_008",
          concept: "Uniform Distribution",
          skill: "Calculating mean and variance of continuous uniform distribution",
          key_idea: "Calculating mean and variance of continuous uniform distribution"
        },
        {
          pt_id: "CN_009",
          concept: "Uniform Distribution",
          skill: "Calculating probability for uniform distribution",
          key_idea: "Calculating probability for uniform distribution"
        },
        {
          pt_id: "CN_010",
          concept: "Uniform Distribution",
          skill: "Sketching probability density function of uniform distribution",
          key_idea: "Sketching probability density function of uniform distribution"
        },
        {
          pt_id: "CN_011",
          concept: "Variance Calculations",
          skill: "Calculating $\\text{Var}(aX + b)$ using variance properties",
          key_idea: "Calculating $\\text{Var}(aX + b)$ using variance properties"
        },
        {
          pt_id: "CN_012",
          concept: "Variance Calculations",
          skill: "Calculating standard deviation of continuous random variable using variance formula",
          key_idea: "Calculating standard deviation of continuous random variable using variance formula"
        }
      ]
    },
    {
      section: "Normal Distributions",
      concepts: [
        {
          pt_id: "CN_013",
          concept: "Expected Value (Normal)",
          skill: "Finding expected value and variance under linear transformation $Y = aX + b$",
          key_idea: "Finding expected value and variance under linear transformation $Y = aX + b$"
        },
        {
          pt_id: "CN_014",
          concept: "General/Other (Normal)",
          skill: "Comparing probabilities from two different distributions to answer contextual question",
          key_idea: "Comparing probabilities from two different distributions to answer contextual question"
        },
        {
          pt_id: "CN_015",
          concept: "General/Other (Normal)",
          skill: "Determining $\\mu$ and $\\sigma$ from two given probabilities using simultaneous equations",
          key_idea: "Determining $\\mu$ and $\\sigma$ from two given probabilities using simultaneous equations"
        },
        {
          pt_id: "CN_016",
          concept: "Inverse Normal",
          skill: "Finding standard deviation given target probability and mean using inverse normal",
          key_idea: "Finding standard deviation given target probability and mean using inverse normal"
        },
        {
          pt_id: "CN_017",
          concept: "Inverse Normal",
          skill: "Finding value for specified probability using inverse normal",
          key_idea: "Finding value for specified probability using inverse normal"
        },
        {
          pt_id: "CN_018",
          concept: "Normal Probability",
          skill: "Calculating conditional probability for normal distribution using restricted domain",
          key_idea: "Calculating conditional probability for normal distribution using restricted domain"
        },
        {
          pt_id: "CN_019",
          concept: "Normal Probability",
          skill: "Calculating normal probability $P(X > k)$ or $P(X < k)$",
          key_idea: "Calculating normal probability $P(X > k)$ or $P(X < k)$"
        },
        {
          pt_id: "CN_020",
          concept: "Normal Probability",
          skill: "Calculating normal probability $P(a < X < b)$",
          key_idea: "Calculating normal probability $P(a < X < b)$"
        },
        {
          pt_id: "CN_021",
          concept: "Normal Probability",
          skill: "Calculating percentage using empirical rule (68-95-99.7) for normal distribution",
          key_idea: "Calculating percentage using empirical rule (68-95-99.7) for normal distribution"
        }
      ]
    }
  ]
};