// ======================================================================
// CONCEPTS — CONCEPTS_FURTHER_DIFFERENTIATION
// Topic: Further Differentiation and Applications
// 50 concepts mapped to atomised problem types
// For use in concept-practice program
// ======================================================================

var CONCEPTS_FURTHER_DIFFERENTIATION = {
  topic: "Further Differentiation and Applications",
  description: "All differentiation rules (product, quotient, chain), exponential and trigonometric differentiation, tangent lines, gradients, second derivatives, concavity, inflection points, curve sketching, small increments, related rates, optimisation.",
  sections: [
    {
      section: "Basic Differentiation Skills",
      concepts: [
        {
          pt_id: "FD_001",
          concept: "Differentiating Basics",
          skill: "Finding the coordinates of a point on the curve where the gradient is a given value",
          key_idea: "Set derivative equal to value and solve"
        },
        {
          pt_id: "FD_NEW_01",
          concept: "Product Rule",
          skill: "Evaluating derivative of f(x)g(x) at a point using graphs of f and g",
          key_idea: "Reading function values and gradients from graphs, applying product rule"
        },
        {
          pt_id: "FD_002",
          concept: "Differentiating Basics",
          skill: "Finding the equation of a tangent at a given x or y value",
          key_idea: "Find gradient via derivative, use point-gradient form"
        },
        {
          pt_id: "FD_NEW_02",
          concept: "Product Rule",
          skill: "Finding equation of tangent to a product of functions at a given point",
          key_idea: "Product rule differentiation then tangent equation"
        },
        {
          pt_id: "FD_003",
          concept: "Differentiating Basics",
          skill: "Finding the value of a derivative at a given x or y value",
          key_idea: "Substitute into derivative after differentiating"
        },
        {
          pt_id: "FD_NEW_03",
          concept: "Chain Rule",
          skill: "Multi-link chain rule with three or more related variables (dy/da = dy/dr × dr/dm × dm/da)",
          key_idea: "Extending chain rule to multiple intermediate variables"
        },
        {
          pt_id: "FD_004",
          concept: "Product Rule",
          skill: "Using a table of values to calculate the derivative of the product of two functions at a given point",
          key_idea: "$(fg)'(a) = f'(a)g(a) + f(a)g'(a)$ from table"
        },
        {
          pt_id: "FD_005",
          concept: "Quotient Rule",
          skill: "Quotient rule differentiation of simple functions",
          key_idea: "(u/v)' = (u'v - uv') / v²"
        },
        {
          pt_id: "FD_006",
          concept: "Quotient Rule",
          skill: "Using a table of values to calculate the derivative of the quotient of two functions at a given point",
          key_idea: "$\\left(\\frac{f}{g}\\right)'(a) = \\frac{f'(a)g(a) - f(a)g'(a)}{[g(a)]^2}$"
        },
        {
          pt_id: "FD_007",
          concept: "Trigonometric Functions",
          skill: "Differentiation involving the product of functions with one including a trigonometric function",
          key_idea: "Product rule where one factor is a trigonometric function"
        },
        {
          pt_id: "FD_008",
          concept: "Trigonometric Functions",
          skill: "Differentiation involving the quotient of functions with one including a trigonometric function",
          key_idea: "Quotient rule where one factor is a trigonometric function"
        },
        {
          pt_id: "FD_009",
          concept: "Trigonometric Functions",
          skill: "Differentiation of composite functions — trigonometric function as inside function",
          key_idea: "Chain rule with trig on the inside, e.g. $f(\\sin(x))$"
        },
        {
          pt_id: "FD_010",
          concept: "Trigonometric Functions",
          skill: "Differentiation of composite functions — trigonometric function as outside function",
          key_idea: "Chain rule with trig on the outside, e.g. $\\sin(f(x))$"
        },
        {
          pt_id: "FD_011",
          concept: "Trigonometric Functions",
          skill: "Differentiation of simple trigonometric functions",
          key_idea: "Derivatives of $\\sin$, $\\cos$, $\\tan$ with chain rule"
        },
        {
          pt_id: "FD_012",
          concept: "Trigonometric Functions",
          skill: "Finding value of a trigonometric function at a given point",
          key_idea: "Evaluate trig derivative at specific $x$"
        },
        {
          pt_id: "FD_013",
          concept: "e Functions",
          skill: "Differentiation involving the product of functions with one including an e function",
          key_idea: "Product rule with exponential factor"
        },
        {
          pt_id: "FD_014",
          concept: "e Functions",
          skill: "Differentiation involving the quotient of functions with one including an e function",
          key_idea: "Quotient rule with exponential in numerator or denominator"
        },
        {
          pt_id: "FD_015",
          concept: "e Functions",
          skill: "Differentiation of $e^x$ or $e^{g(x)}$",
          key_idea: "Chain rule with exponential function"
        },
        {
          pt_id: "FD_016",
          concept: "e Functions",
          skill: "Differentiation of composite functions — e function as outside function",
          key_idea: "Chain rule with $e^{f(x)}$ where $f$ is non-linear"
        }
      ]
    },
    {
      section: "Second Derivatives",
      concepts: [
        {
          pt_id: "FD_NEW_05",
          concept: "Calculating Second Derivatives",
          skill: "Finding coordinates where the second derivative equals a given value",
          key_idea: "Differentiate twice, set f''(x) = value, solve, find y-coordinates"
        },
        {
          pt_id: "FD_NEW_06",
          concept: "Locating Critical Points",
          skill: "Finding global maximum and minimum on a closed interval by checking stationary points AND endpoints",
          key_idea: "Find all critical points, evaluate at endpoints, compare all values"
        },
        {
          pt_id: "FD_NEW_08",
          concept: "Calculating Second Derivatives",
          skill: "Finding f''(x) when f'(x) is a product of functions, then evaluating at exact trig values",
          key_idea: "Product rule applied to a derivative expression, exact value evaluation"
        },
        {
          pt_id: "FD_030",
          concept: "Calculating Second Derivatives",
          skill: "Calculation and interpretation of second derivative in real-world context",
          key_idea: "Calculation and interpretation of second derivative in real-world context"
        },
        {
          pt_id: "FD_031",
          concept: "Calculating Second Derivatives",
          skill: "Calculation of second derivative",
          key_idea: "Calculation of second derivative"
        },
        {
          pt_id: "FD_032",
          concept: "Locating Critical Points",
          skill: "Deriving simultaneous equations from turning point, inflection point, and function value conditions",
          key_idea: "Deriving simultaneous equations from turning point, inflection point, and function value conditions"
        },
        {
          pt_id: "FD_033",
          concept: "Locating Critical Points",
          skill: "Determine the values for which a curve has a given concavity",
          key_idea: "Determine the values for which a curve has a given concavity"
        },
        {
          pt_id: "FD_034",
          concept: "Locating Critical Points",
          skill: "Determining concavity of a curve at a given point",
          key_idea: "Determining concavity of a curve at a given point"
        },
        {
          pt_id: "FD_035",
          concept: "Locating Critical Points",
          skill: "Determining nature of stationary or inflection points using second derivative tests",
          key_idea: "Determining nature of stationary or inflection points using second derivative tests"
        },
        {
          pt_id: "FD_036",
          concept: "Locating Critical Points",
          skill: "Finding $x$ and/or $y$ intercepts",
          key_idea: "Finding $x$ and/or $y$ intercepts"
        },
        {
          pt_id: "FD_037",
          concept: "Locating Critical Points",
          skill: "Finding locations of stationary and/or inflection points",
          key_idea: "Finding locations of stationary and/or inflection points"
        },
        {
          pt_id: "FD_038",
          concept: "Locating Critical Points",
          skill: "Finding where maximal rate of change occurs by finding vertical inflection point",
          key_idea: "Finding where maximal rate of change occurs by finding vertical inflection point"
        },
        {
          pt_id: "FD_039",
          concept: "Sketching of Graphs",
          skill: "Sketching graphs of function based on values of function, derivatives, second derivatives from calculations",
          key_idea: "Sketching graphs of function based on values of function, derivatives, second derivatives from calculations"
        },
        {
          pt_id: "FD_040",
          concept: "Sketching of Graphs",
          skill: "Sketching graphs of function based on values of function, derivatives, second derivatives from given table",
          key_idea: "Sketching graphs of function based on values of function, derivatives, second derivatives from given table"
        },
        {
          pt_id: "FD_045",
          concept: "Locating Critical Points",
          skill: "Distinguishing between stationary points and turning points",
          key_idea: "Identify that all turning points are stationary, but not all stationary points are turning points (e.g. horizontal inflections)"
        },
        {
          pt_id: "FD_046",
          concept: "Locating Critical Points",
          skill: "Recognising that f''(a) = 0 is necessary but not sufficient for an inflection point",
          key_idea: "Check whether f'' actually changes sign at a point where f''(a) = 0"
        }
      ]
    },
    {
      section: "Small Increments",
      concepts: [
        {
          pt_id: "FD_NEW_07",
          concept: "Basic Use of Small Increments Formula",
          skill: "Using increments formula to approximate percentage change in one quantity given percentage change in another",
          key_idea: "δy/y ≈ (dy/dx × δx) / y with cancellation to get percentage"
        },
        {
          pt_id: "FD_041",
          concept: "Basic Use of Small Increments Formula",
          skill: "Comparing incremental estimate to true value and explaining limitation of linear approximation",
          key_idea: "Comparing incremental estimate to true value and explaining limitation of linear approximation"
        },
        {
          pt_id: "FD_042",
          concept: "Basic Use of Small Increments Formula",
          skill: "Using increments formula to approximate change",
          key_idea: "$\\delta y \\approx \\frac{dy}{dx} \\cdot \\delta x$"
        },
        {
          pt_id: "FD_043",
          concept: "Basic Use of Small Increments Formula",
          skill: "Using increments formula with a fixed or constrained quantity",
          key_idea: "Rearrange with fixed quantity as constant, differentiate, apply δy ≈ (dy/dx)·δx"
        }
      ]
    },
    {
      section: "Optimisation Problems",
      concepts: [
        {
          pt_id: "FD_028",
          concept: "Solving Optimisation Problems",
          skill: "Deriving objective function from constraint (show that)",
          key_idea: "Deriving objective function from constraint (show that)"
        },
        {
          pt_id: "FD_029",
          concept: "Solving Optimisation Problems",
          skill: "Determining optimised result using first and second derivative tests",
          key_idea: "Determining optimised result using first and second derivative tests"
        }
      ]
    },
    {
      section: "Applications of Differentiation",
      concepts: [
        {
          pt_id: "FD_044",
          concept: "Related Rates",
          skill: "Finding a rate of change using the chain rule with a geometric constraint",
          key_idea: "Set up geometric relationship, differentiate with respect to time using chain rule, substitute known values"
        }
      ]
    },
    {
      section: "General",
      concepts: [
        {
          pt_id: "XX_001",
          concept: "Chain Rule",
          skill: "Differentiation of composite functions when given separate equations for two related variables",
          key_idea: "Chain rule with related rates / parametric-style"
        },
        {
          pt_id: "XX_002",
          concept: "Chain Rule",
          skill: "Differentiation of reciprocal functions requiring chain rule",
          key_idea: "Chain rule on negative powers"
        },
        {
          pt_id: "XX_003",
          concept: "Chain Rule",
          skill: "Differentiation of simple composite functions",
          key_idea: "Apply chain rule $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$"
        },
        {
          pt_id: "XX_004",
          concept: "Chain Rule",
          skill: "Using a table of values or graphs of two functions and their derivatives to calculate the derivative of a composite function at a given point",
          key_idea: "$(f \\circ g)'(a) = f'(g(a)) \\cdot g'(a)$"
        },
        {
          pt_id: "XX_005",
          concept: "Product Rule",
          skill: "Differentiating $x^n \\cdot \\ln(f(x))$ using product rule",
          key_idea: "Product rule where one factor is a logarithmic function"
        },
        {
          pt_id: "XX_006",
          concept: "Product Rule",
          skill: "Differentiation of a product of functions that requires the use of quotient or chain rule as part of the product rule process",
          key_idea: "Nested rules — product rule with chain rule inside"
        },
        {
          pt_id: "XX_007",
          concept: "Product Rule",
          skill: "Product rule differentiation of simple functions",
          key_idea: "$(uv)' = u'v + uv'$ with polynomial/simple functions"
        },
        {
          pt_id: "XX_008",
          concept: "Product Rule",
          skill: "Using a table of values or graphs of two functions and their derivatives to calculate the derivative of the product of the two functions at a given point",
          key_idea: "$(fg)'(a) = f'(a)g(a) + f(a)g'(a)$ from table"
        }
      ]
    }
  ]
};