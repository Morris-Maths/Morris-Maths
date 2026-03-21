// ======================================================================
// ATOMISED PRACTICE — ATOMISED_SAMPLING
// Topic: Random Sampling and Sample Proportions
// 7 PTs, 8 questions (E:0 M:8 H:0)
// Reorganised from source files — richest version kept for each PT
// Unquoted keys for WSH compatibility
// ======================================================================

var ATOMISED_SAMPLING = {
  questions: [
    {
          pt_id: "IE_011",
          topic: "Interval Estimates for Proportions",
          subtopic: "Random Sampling",
          concept: "Sampling Methods",
          pt: "Identifying sources of bias in sampling procedure with explanation",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "IE_011_m01",
              q: "A school surveys student satisfaction by asking students in the library at lunchtime. Identify a source of bias.",
              a: "Selection bias — students who use the library at lunchtime may not be representative of all students. Students who play sport, socialise elsewhere, or leave school may have different satisfaction levels."
            },
            {
              qid: "IE_011_m02",
              q: "An online retailer emails all customers asking for product reviews. Identify a source of bias.",
              a: "Non-response bias — customers with strong opinions (either very satisfied or very dissatisfied) are more likely to respond, while neutral customers may not bother."
            },
          ],
          hard: [
          ],
        },
    
        // Sample Proportions > Calculating mean and standard deviation of sample propo
,

    {
          pt_id: "IE_012",
          topic: "Interval Estimates for Proportions",
          subtopic: "Sample Proportions",
          concept: "Sample Proportions",
          pt: "Calculating mean and standard deviation of sample proportion distribution",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "IE_012_m01",
              q: "If $p = 0.6$ and $n = 200$, find the mean and standard deviation of $\\hat{P}$.",
              a: "$\\mu_{\\hat{P}} = 0.6$. $\\sigma_{\\hat{P}} = \\sqrt{\\frac{0.6 \\times 0.4}{200}} = \\sqrt{0.0012} \\approx 0.0346$"
            },
          ],
          hard: [
          ],
        },
    
        // Sample Proportions > Calculating point estimate for population proportion
,

    {
          pt_id: "IE_013",
          topic: "Interval Estimates for Proportions",
          subtopic: "Sample Proportions",
          concept: "Sample Proportions",
          pt: "Calculating point estimate for population proportion",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "IE_013_m01",
              q: "In a sample of 500 voters, 215 support a candidate. What is the point estimate for the population proportion?",
              a: "$\\hat{p} = \\frac{215}{500} = 0.43$"
            },
          ],
          hard: [
          ],
        },
    
        // Sample Proportions > Calculating sample proportion from frequency data
,

    {
          pt_id: "IE_014",
          topic: "Interval Estimates for Proportions",
          subtopic: "Sample Proportions",
          concept: "Sample Proportions",
          pt: "Calculating sample proportion from frequency data",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "IE_014_m01",
              q: "In a survey of 250 people, 80 said they prefer brand A. Calculate the sample proportion $\\hat{p}$.",
              a: "$\\hat{p} = \\frac{80}{250} = 0.32$"
            },
          ],
          hard: [
          ],
        },
    
        // Sample Proportions > Stating approximate distribution of sample proportion
,

    {
          pt_id: "IE_015",
          topic: "Interval Estimates for Proportions",
          subtopic: "Sample Proportions",
          concept: "Sample Proportions",
          pt: "Stating approximate distribution of sample proportion",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "IE_015_m01",
              q: "A population has $p = 0.4$ and a sample of $n = 100$ is taken. State the approximate distribution of $\\hat{P}$.",
              a: "$\\hat{P} \\sim N\\left(0.4, \\frac{0.4 \\times 0.6}{100}\\right)$ i.e. $\\hat{P} \\approx N(0.4, 0.0024)$"
            },
          ],
          hard: [
          ],
        },
    
        // Sample Proportions > Stating condition for normal approximation to sample pr
,

    {
          pt_id: "IE_016",
          topic: "Interval Estimates for Proportions",
          subtopic: "Sample Proportions",
          concept: "Sample Proportions",
          pt: "Stating condition for normal approximation to sample proportion",
          testing: "",
          reason_bank: ["setup_error", "wrong_rule", "substitution_error", "interpretation_mixup", "sign_error", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "IE_016_m01",
              q: "State the conditions for the normal approximation to the sampling distribution of $\\hat{P}$ to be valid.",
              a: "$np \\geq 10$ and $n(1-p) \\geq 10$ (or equivalently $n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$)."
            },
          ],
          hard: [
          ],
        },
    
        // Sample Proportions > Using approximate normality of sample proportion distri
,

    {
          pt_id: "IE_017",
          topic: "Interval Estimates for Proportions",
          subtopic: "Sample Proportions",
          concept: "Sample Proportions",
          pt: "Using approximate normality of sample proportion distribution to calculate probability",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
          ],
          medium: [
            {
              qid: "IE_017_m01",
              q: "A poll has $p = 0.55$ and $n = 400$. Find $P(\\hat{P} > 0.6)$.",
              a: "$\\sigma = \\sqrt{\\frac{0.55 \\times 0.45}{400}} = 0.02487$. $Z = \\frac{0.6-0.55}{0.02487} = 2.01$. $P(\\hat{P} > 0.6) = P(Z > 2.01) \\approx 0.0222$"
            },
          ],
          hard: [
          ],
        },
    
        // Kinematics Calculations > Evaluating acceleration at given value for t

  ]
};