// ======================================================================
// CONCEPTS — CONCEPTS_LOGARITHMS
// Topic: The Logarithmic Function
// 28 concepts mapped to atomised problem types
// For use in concept-practice program
// ======================================================================

var CONCEPTS_LOGARITHMS = {
  topic: "The Logarithmic Function",
  description: "Logarithmic functions, log laws, log equations, graphs of ln(x), d/dx(ln(x)), ∫1/x dx, ∫f'(x)/f(x) dx, integration by parts with ln, log-based problem solving.",
  sections: [
    {
      section: "Calculus of the Natural Logarithmic Function",
      concepts: [
        {
          pt_id: "LN_001",
          concept: "Integration Techniques",
          skill: "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$",
          key_idea: "Recognise the pattern where the numerator is the derivative of the denominator, and apply $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$"
        },
        {
          pt_id: "LN_002",
          concept: "Integration Techniques",
          skill: "Integrating $f'(x)/f(x)$ to obtain $\\ln|f(x)|$ with initial condition and log law simplification",
          key_idea: "Integrate to get $\\ln$ expression, apply initial condition to find $C$, then use log laws to simplify the final expression"
        },
        {
          pt_id: "LN_003",
          concept: "Logarithmic Evaluation (Calculus)",
          skill: "Finding when derivative equals zero by differentiating function with logarithm",
          key_idea: "Differentiate a function involving $\\ln(x)$, set the derivative equal to zero, and solve for $x$ to find stationary points"
        },
        {
          pt_id: "LN_004",
          concept: "Product Rule",
          skill: "Anti-differentiating $\\ln(x)$ using integration by parts (reverse product rule)",
          key_idea: "Use a given product rule result to deduce the anti-derivative of $\\ln(x)$ or related functions"
        },
        {
          pt_id: "LN_005",
          concept: "Product Rule",
          skill: "Differentiating $x \\cdot \\ln(x)$ using product rule",
          key_idea: "Apply the product rule $\\frac{d}{dx}[uv] = u'v + uv'$ where one factor is a power of $x$ and the other involves $\\ln(x)$"
        },
        {
          pt_id: "LN_025",
          concept: "Integration Techniques",
          skill: "Evaluating definite integrals that yield logarithmic expressions",
          key_idea: "Apply $\\int \\frac{f'(x)}{f(x)}\\,dx = \\ln|f(x)|$ with definite limits and simplify the result using log laws"
        },
        {
          pt_id: "LN_026",
          concept: "Logarithmic Evaluation (Calculus)",
          skill: "Differentiating $\\ln(f(x))$ using the chain rule",
          key_idea: "Apply $\\frac{d}{dx}[\\ln(f(x))] = \\frac{f'(x)}{f(x)}$ to differentiate composite logarithmic functions"
        }
      ]
    },
    {
      section: "Logarithmic Functions",
      concepts: [
        {
          pt_id: "LN_006",
          concept: "Logarithmic Equations",
          skill: "Solving equation involving logarithm to find specific value",
          key_idea: "Convert $\\log_a(x) = b$ to exponential form $x = a^b$ to solve for the unknown"
        },
        {
          pt_id: "LN_007",
          concept: "Logarithmic Equations",
          skill: "Solving exponential equation by isolating $e^{kx}$ and taking logarithms",
          key_idea: "Isolate the exponential term, then apply $\\ln$ to both sides and solve the resulting linear equation"
        },
        {
          pt_id: "LN_008",
          concept: "Logarithmic Equations",
          skill: "Solving logarithmic equation for variable using log laws",
          key_idea: "Combine logarithmic terms using product/quotient rules, convert to exponential form, and solve the resulting algebraic equation"
        },
        {
          pt_id: "LN_009",
          concept: "Logarithmic Evaluation",
          skill: "Determining parameters of logarithmic function from two points using simultaneous equations",
          key_idea: "Substitute the given points into $f(x) = a\\ln(x) + b$ (or variant), solve the system of equations for $a$ and $b$"
        },
        {
          pt_id: "LN_010",
          concept: "Logarithmic Evaluation",
          skill: "Evaluating $\\log_a(x) = b$ by converting to exponential form",
          key_idea: "Use $\\log_a(x) = b \\Leftrightarrow a^b = x$ to find the unknown quantity (which may be the argument, base, or result)"
        },
        {
          pt_id: "LN_011",
          concept: "Logarithmic Evaluation",
          skill: "Evaluating $a^{kp}$ by using log-exponential inverse relationship",
          key_idea: "Use $a^{\\log_a(x)} = x$ and index laws to evaluate expressions like $a^{kp}$ where $p = \\log_a(n)$"
        },
        {
          pt_id: "LN_012",
          concept: "Logarithmic Evaluation",
          skill: "Evaluating logarithmic function at a given input",
          key_idea: "Substitute the given $x$-value into a logarithmic function and simplify using log properties and exact values"
        },
        {
          pt_id: "LN_013",
          concept: "Logarithmic Graphs",
          skill: "Comparing quantities using logarithmic scale by taking ratio of exponential forms",
          key_idea: "Use the relationship between log-scale values and actual values to find ratios (e.g. Richter, decibels, pH)"
        },
        {
          pt_id: "LN_014",
          concept: "Logarithmic Graphs",
          skill: "Determining gradient and intercept of linear log-scale relationship",
          key_idea: "Identify the gradient $m$ and intercept $c$ from $\\log(y) = mx + c$, and convert to the original exponential form $y = A \\cdot B^x$"
        },
        {
          pt_id: "LN_015",
          concept: "Logarithmic Graphs",
          skill: "Identifying equations of translated/reflected logarithmic graphs from diagram",
          key_idea: "Match given graph features (asymptote, intercepts, direction) to the correct equation among options involving shifts and reflections of $y = \\ln(x)$"
        },
        {
          pt_id: "LN_016",
          concept: "Logarithmic Graphs",
          skill: "Identifying parameter from vertical asymptote of logarithmic graph",
          key_idea: "Set the argument of the logarithm equal to zero to find the vertical asymptote, then use the given asymptote value to determine the unknown parameter"
        },
        {
          pt_id: "LN_017",
          concept: "Logarithmic Graphs",
          skill: "Reading value from logarithmic scale/graph",
          key_idea: "Convert between logarithmic scale readings and actual values using the definition of the scale (Richter, dB, pH, etc.)"
        },
        {
          pt_id: "LN_018",
          concept: "Logarithmic Graphs",
          skill: "Sketching translated and shifted logarithmic graph with key points and asymptote",
          key_idea: "Identify the asymptote, intercepts, and key points of a transformed $\\ln$ graph, and describe the transformations applied"
        },
        {
          pt_id: "LN_019",
          concept: "Logarithmic Laws",
          skill: "Applying logarithmic laws to simplify or combine expressions",
          key_idea: "Apply product, quotient, and power rules for logarithms to simplify expressions to a single value or simplest form"
        },
        {
          pt_id: "LN_020",
          concept: "Logarithmic Laws",
          skill: "Evaluating expression using inverse relationship between log and exponential",
          key_idea: "Apply $a^{\\log_a(x)} = x$ and $\\log_a(a^x) = x$ to evaluate expressions, including combinations with log laws"
        },
        {
          pt_id: "LN_021",
          concept: "Logarithmic Laws",
          skill: "Expressing $\\log_a(k)$ in terms of a defined variable using log laws",
          key_idea: "Decompose the argument into prime factors, then substitute given variable definitions to express the result in terms of the variables"
        },
        {
          pt_id: "LN_022",
          concept: "Logarithmic Laws",
          skill: "Proving logarithmic identity using log laws (show that)",
          key_idea: "Use the definition $\\log_a(b) = x \\Leftrightarrow a^x = b$ and log laws to establish identities algebraically"
        },
        {
          pt_id: "LN_023",
          concept: "Logarithmic Laws",
          skill: "Using change of base formula to evaluate or simplify logarithms",
          key_idea: "Apply $\\log_a(b) = \\frac{\\ln b}{\\ln a} = \\frac{\\log_c b}{\\log_c a}$ to convert between bases, evaluate with calculator, or simplify exact expressions"
        },
        {
          pt_id: "LN_024",
          concept: "Logarithmic Laws",
          skill: "Evaluating logarithms to exact values (including fractions) without a calculator",
          key_idea: "Express both the base and argument as powers of a common base, then use the definition or change of base to find the exact value"
        },
        {
          pt_id: "LN_027",
          concept: "Logarithmic Equations",
          skill: "Solving equations with logarithm on both sides using the one-to-one property",
          key_idea: "Use the property $\\log_a(X) = \\log_a(Y) \\Rightarrow X = Y$ to reduce to an algebraic equation, checking domain restrictions"
        },
        {
          pt_id: "LN_028",
          concept: "Logarithmic Evaluation",
          skill: "Finding the domain of logarithmic functions",
          key_idea: "Set the argument of the logarithm greater than zero and solve the resulting inequality to determine the domain"
        }
      ]
    }
  ]
};