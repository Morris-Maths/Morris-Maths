// ======================================================================
// CONCEPTS — Integration and the Fundamental Theorem of Calculus
// Full conceptual revision content (Pairs Activity format)
// 43 questions across 12 sections, with diagram placeholders
// Source: Integration_Kinematics_Pair_Revision.pdf (pages 1-13, 21-25)
// ======================================================================

var CONCEPTS_INTEGRALS = {
  topic: "Integration and the Fundamental Theorem of Calculus",
  subtitle: "Conceptual Revision — Pair Activity",
  instructions: "Work in pairs. One student is the Reader and the other is the Responder. The Reader reads each prompt aloud. The Responder must explain their answer in words — not just write equations. The goal is to articulate your understanding, not perform calculations. Swap roles after each section. If used individually: Cover the answer, attempt a verbal explanation, then check.",

  sections: [

    // ════════════════════════════════════════════════════════════
    // SECTION 1: Anti-derivatives — Finding the +C
    // ════════════════════════════════════════════════════════════
    {
      section: "Anti-derivatives — Finding the +C",
      subtopic: "Anti-differentiation",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_01",
          q: "What is an anti-derivative? How is it related to differentiation?",
          answer: "An anti-derivative of $f(x)$ is a function $F(x)$ whose derivative equals $f(x)$, i.e. $F'(x) = f(x)$. It is the reverse process of differentiation — instead of finding the rate of change, you are finding the original function that would produce the given rate of change.",
          diagram: null
        },
        {
          qid: "C_IN_02",
          q: "Why do we add a '$+C$' when we anti-differentiate? What does $C$ represent?",
          answer: "When we differentiate, any constant term disappears (its derivative is zero). So, when we reverse the process, we do not know what that constant was. The $+C$ represents all possible vertical translations of the anti-derivative. Geometrically, it represents a family of curves that are all vertical shifts of each other — they all have the same gradient at any given $x$-value.",
          diagram: null
        },
        {
          qid: "C_IN_03",
          q: "You are told that a curve passes through the point $(2, 7)$ and that $f'(x) = 3x^2 - 4x$, explain the process you would use to find $f(x)$.",
          answer: "Step 1: Anti-differentiate $f'(x)$ to get $f(x) = x^3 - 2x^2 + C$.\nStep 2: Substitute the known point $(2,7)$ into $f(x)$: $7 = (2)^3 - 2(2)^2 + C$, giving $7 = 8 - 8 + C$, so $C = 7$.\nStep 3: Write the specific function: $f(x) = x^3 - 2x^2 + 7$.\nThe known point lets us determine the exact member of the family of curves.",
          diagram: null
        },
        {
          qid: "C_IN_04",
          q: "Create your own example of a question where finding the $+C$ is essential. State why $C$ matters in your example.",
          answer: "Open-ended — You should construct a scenario where a derivative is given plus an initial/boundary condition and explain that without the condition you would have infinitely many possible answers. For example: 'A ball is thrown so that its velocity is $v(t) = 10 - 9.8t$. At $t = 0$ the ball is 1.5 m above the ground. Find the height function.' Here $C = 1.5$ represents the initial height.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 2: Anti-chain Rule (Reverse Chain Rule)
    // ════════════════════════════════════════════════════════════
    {
      section: "Anti-chain Rule (Reverse Chain Rule)",
      subtopic: "Anti-differentiation",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_05",
          q: "In your own words, what is the anti-chain rule and when can it be used?",
          answer: "The anti-chain rule (reverse chain rule) is used when integrating a composite function where a scalar multiple of the derivative of the inner function $g'(x)$ is present.\nIt can be used in expressions that look something like $\\int a \\times g'(x) \\times (g(x))^n \\, dx$. It can only be used when the inner function has scalar multiple ($a$) of the derivative of the expression inside the brackets (or a constant multiple of it is present).",
          diagram: null
        },
        {
          qid: "C_IN_06",
          q: "Explain the steps you follow when performing a reverse chain rule integration.",
          answer: "Step 1: Identify the 'inner function' $g(x)$ — this is usually the expression inside brackets that are raised to a power.\nStep 2: Check that the derivative of the inner function $g'(x)$ appears as a factor in the integrand (possibly with a constant multiple).\nStep 3: Re-write the expression so it is in the form $a \\int g'(x)(g(x))^n \\, dx$.\nStep 4: Delete the $g'(x)$, raise the power ($n$) of $(g(x))^n$ by 1 and divide by this new power. Multiply by $a$.\nStep 5: Add $+C$.",
          diagram: null
        },
        {
          qid: "C_IN_07",
          q: "Create your own example of a reverse chain rule integration and talk through each step.",
          answer: "A good example: $\\int (5x + 3)^3 \\, dx$.\nInner function is $(5x + 3)$, its derivative is 5 (a constant — so anti-chain rule works).\nRewrite the expression $\\frac{1}{5} \\int 5 \\times (5x + 3)^3 \\, dx$.\nDelete the derivative of the bracket and increase power by 1 and divide by the new power:\n$\\frac{1}{5} \\times \\frac{(5x+3)^4}{4} + C = \\frac{(5x+3)^4}{20} + C$.",
          diagram: null
        },
        {
          qid: "C_IN_08",
          q: "Why can't you use the anti-chain rule to integrate $x^2(x^2 + 1)^3$? But CAN you use it for $x(x^2 + 1)^3$? Explain.",
          answer: "For $x(x^2 + 1)^3$: YES.\nThe inner function is $x^2 + 1$, whose derivative is $2x$. The factor $x$ is a constant multiple of $2x$ (it is $\\frac{1}{2} \\times 2x$).\nSo $\\int x(x^2+1)^3 \\, dx = \\frac{1}{2} \\int 2x(x^2+1)^3 \\, dx = \\frac{1}{2} \\times \\frac{(x^2+1)^4}{4} + C = \\frac{(x^2+1)^4}{8} + C$.\n\nFor $x^2(x^2 + 1)^3$: NO.\nThe factor $x^2$ is NOT a constant multiple of the derivative $2x$ — it is a variable multiple.\nThe anti-chain rule only works when the 'adjustment factor' is a constant.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 3: Estimating Area Under Curves Using Rectangular Strips
    // ════════════════════════════════════════════════════════════
    {
      section: "Estimating Area Under Curves Using Rectangular Strips",
      subtopic: "Definite Integrals",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_09",
          q: "Describe the basic process for estimating the area under a curve using rectangular strips for these two types of graphs:",
          answer: "If using upper and lower rectangles:\nStep 1: Divide the interval $[a, b]$ into $n$ equal subintervals, each of width $\\Delta x = \\frac{b-a}{n}$.\nStep 2: For each subinterval, calculate the areas of the 'underestimate' rectangles. Each rectangle's height is determined by the function's value ($y$ value) at a chosen point.\nStep 3: Add up all of the underestimate rectangle's areas. This is your 'underestimate of the area.'\nStep 4: For each subinterval, calculate the areas of the 'overestimate' rectangles.\nStep 5: Add up all of the overestimate rectangle's areas. This is your 'overestimate of the area.'\nStep 6: Average your under and overestimate areas to get your estimated area under the curve.\n\nIf using midpoints of rectangles:\nStep 1: Divide the interval $[a, b]$ into $n$ equal subintervals, each of width $\\Delta x = \\frac{b-a}{n}$.\nStep 2: For each subinterval, construct a rectangle whose width is $\\Delta x$ and whose height is determined by the function value ($y$ value) at the midpoint.\nStep 3: Calculate the area of each rectangle (width times height).\nStep 4: Sum all the rectangle areas to get the total estimated area.",
          diagram: "[IMAGE: C_IN_09_rectangle_types.png]"
        },
        {
          qid: "C_IN_10",
          q: "How could your estimates of areas be improved? Explain why this works.",
          answer: "Increase the number of rectangles (make $n$ larger).\nThis makes each rectangle narrower, so the gap between the top of the rectangle and the actual curve becomes smaller.\nUse calculus, as this makes the widths of the rectangles infinitesimally small.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 4: Definite Integrals
    // ════════════════════════════════════════════════════════════
    {
      section: "Definite Integrals",
      subtopic: "Definite Integrals",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_11",
          q: "What does a definite integral represent on a graph?",
          answer: "A definite integral $\\int_a^b f(x) \\, dx$ represents the signed area between the curve $y = f(x)$ and the $x$-axis, from $x = a$ to $x = b$.\n'Signed' means areas above the $x$-axis are positive and areas below the $x$-axis are negative.\nIt is the net accumulated area.",
          diagram: null
        },
        {
          qid: "C_IN_12",
          q: "In words, explain how you evaluate a definite integral. What is the relationship between the definite integral and the anti-derivative?",
          answer: "Find the anti-derivative $F(x)$ of $f(x)$.\nThen evaluate: $F(b) - F(a)$ (anti-derivative at the upper bound minus anti-derivative at the lower bound).\nThis is the Fundamental Theorem of Calculus Part 1: it connects the process of anti-differentiation with the geometric concept of signed area.",
          diagram: null
        },
        {
          qid: "C_IN_13",
          q: "Explain the full process for calculating the total area between a curve and the $x$-axis between bounds $a$ and $b$.",
          answer: "Step 1: Find any $x$-intercepts of $f(x)$ between $a$ and $b$ — these are where the curve crosses the axis.\nStep 2: Determine where the curve is above or below the $x$-axis between those intercepts.\nStep 3: Calculate the definite integral for each sub-interval separately.\nStep 4: For any sub-interval where the curve is below the $x$-axis, the integral will be negative — add the absolute value of that integral or alternatively subtract the integral as this will make the negative value positive.\nStep 5: Add all the positive areas together.",
          diagram: null
        },
        {
          qid: "C_IN_14",
          q: "How is finding the definite integral different from finding the total area between a curve and the $x$-axis? Why are they different?",
          answer: "The definite integral gives the SIGNED (net) area — regions below the $x$-axis contribute negative values, which cancel out positive areas above.\nThe total area treats ALL regions as positive — it measures the actual geometric area enclosed.\nThey differ because the definite integral is an algebraic quantity (positive and negative parts cancel), while total area is a geometric quantity (always positive).\nFor total area, you must split at $x$-intercepts and take absolute values or subtract negative definite integrals to make the value positive.",
          diagram: null
        },
        {
          qid: "C_IN_15",
          q: "Explain the linearity property of integrals. Give an example where it is useful.",
          answer: "The linearity property says: $\\int af(x) + bg(x) \\, dx = a \\int f(x) \\, dx + b \\int g(x) \\, dx$.\nYou can split integrals across addition/subtraction and pull constants out the front.\nThis is useful when you know $\\int_0^2 f(x) \\, dx = 5$ and $\\int_0^2 g(x) \\, dx = 3$, and need to find $\\int_0^2 2f(x) - 3g(x) \\, dx = 2(5) - 3(3) = 1$.",
          diagram: null
        },
        {
          qid: "C_IN_16",
          q: "If you know that $\\int_{-2}^{5} f(x) \\, dx = 8$ and $\\int_{-2}^{1} f(x) \\, dx = 3$, how would you find $\\int_{1}^{5} f(x) \\, dx$? What property are you using?",
          answer: "Using the interval addition property: $\\int_a^c f(x) \\, dx = \\int_a^b f(x) \\, dx + \\int_b^c f(x) \\, dx$.\nSo $\\int_{-2}^{5} f(x) \\, dx = \\int_{-2}^{1} f(x) \\, dx + \\int_{1}^{5} f(x) \\, dx$.\nTherefore $8 = 3 + \\int_{1}^{5} f(x) \\, dx$, giving $\\int_{1}^{5} f(x) \\, dx = 5$.\nThe property states that consecutive integrals add up to the integral over the combined interval.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 5: Area Between Curve and x-axis — Accumulation Function
    // ════════════════════════════════════════════════════════════
    {
      section: "Area Between Curve and x-axis — Accumulation Function",
      subtopic: "Fundamental Theorem",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_17",
          q: "What does $\\int_a^x f(t) \\, dt$ represent on a graph of $f$?",
          answer: "It represents the signed area accumulated under the curve $y = f(t)$ from the fixed starting point $t = a$ up to the variable endpoint $t = x$.\nAs $x$ moves to the right, this value tracks the running total of signed area.\nIt is an accumulation function — its value changes as $x$ changes.",
          diagram: null
        },
        {
          qid: "C_IN_18",
          q: "What would $\\int_a^x f(t) \\, dt$ equal when $x = a$? Why?",
          answer: "It equals zero. When $x = a$, you are integrating from $a$ to $a$ — the interval has zero width, so no area is accumulated.\nGeometrically, you have not moved from the starting point yet.",
          diagram: null
        },
        {
          qid: "C_IN_19",
          q: "If $\\int_a^x f(t) \\, dt = 0$ for some $x \\neq a$, what does this mean geometrically?",
          answer: "The positive area above the $x$-axis and the negative area below the $x$-axis between $a$ and $x$ have exactly cancelled out.\nThe net signed area is zero, but there may still be significant areas on both sides.\nIt does NOT mean $f(t) = 0$ everywhere — it means the positives and negatives balance.",
          diagram: null
        },
        {
          qid: "C_IN_20",
          q: "If $\\int_a^x f(t) \\, dt < 0$, what does this tell you?",
          answer: "Between $a$ and $x$, the curve spends more area below the $x$-axis than above it.\nThe accumulated negative area exceeds the accumulated positive area, resulting in a net negative signed area.",
          diagram: null
        },
        {
          qid: "C_IN_21",
          q: "If $\\int_a^x f(t) \\, dt = 8$, what does $\\int_x^a f(t) \\, dt$ equal? Explain why.",
          answer: "It equals $-8$. Reversing the bounds of integration negates the result:\n$\\int_x^a f(t) \\, dt = -\\int_a^x f(t) \\, dt$.\nIntuitively, if accumulating from left to right gives $+8$, then 'un-accumulating' from right to left gives $-8$.",
          diagram: null
        },
        {
          qid: "C_IN_22",
          q: "If you know that $\\int_a^x f(t) \\, dt$ has a maximum value at $x = c$, what must be true about $f(c)$? Why?",
          answer: "We need $f(c) = 0$ and $f$ must change from positive to negative at $c$.\nBy FTC Part 2, the derivative of the accumulation function is $f(x)$.\nFor a maximum, the derivative must equal zero and change from positive to negative.\nA positive $f$ means the accumulation is increasing; a negative $f$ means it is decreasing.\nSo, the maximum occurs where $f$ crosses zero going from positive to negative.",
          diagram: null
        },
        {
          qid: "C_IN_23",
          q: "Given a graph of $f(t)$, how would you sketch $A(x) = \\int_a^x f(t) \\, dt$?",
          answer: "$A(x)$ represents the signed area between the curve $f(t)$ and the $t$ axis as the upper bound of $x$ changes.\n\nRoots of $A(x)$ occur where: $A(a) = 0$ always (starting point) and anywhere the signed area from $a$ equals zero (area above and below cancel).\n\nWhere $f(t) > 0$, $A$ is increasing (positive area being added).\nWhere $f(t) < 0$, $A$ is decreasing (negative area being added).\nWhere $f(t) = 0$, $A$ has a stationary point.\nWhere $f$ changes from positive to negative, $A$ has a local maximum.\nWhere $f$ changes from negative to positive, $A$ has a local minimum.\nInflection points of $A$ occur where $f$ has turning points (since $A'' = f'$).",
          diagram: "[IMAGE: C_IN_23_accumulation_paired_graphs.png]"
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 6: Solving for Bounds Using Integral Properties
    // ════════════════════════════════════════════════════════════
    {
      section: "Solving for Bounds Using Integral Properties",
      subtopic: "Fundamental Theorem",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_24",
          q: "Explain the logic: If $\\int_a^{-2} f(x) \\, dx + \\int_{-2}^{5} f(x) \\, dx = \\int_{-7}^{5} f(x) \\, dx$. Find $a$.",
          answer: "In words our question is saying: 'The signed area between $a$ and $-2$ added to the signed area between $-2$ and $5$ = the signed area between $-7$ and $5$.'\n\nThe interval addition property says consecutive integrals combine: $\\int_a^{-2} + \\int_{-2}^{5} = \\int_a^{5}$.\n\nFor this to equal $\\int_{-7}^{5} f(x) \\, dx$, we need $a = -7$.\n\nThe key insight is that the intermediate bound ($-2$) is shared, so the two integrals join to form one integral from $a$ to 5 — which must equal the integral from $-7$ to 5.",
          diagram: "[IMAGE: C_IN_24_interval_splitting.png]"
        },
        {
          qid: "C_IN_25",
          q: "Explain: If $\\int_{-4}^{-1} f(x) \\, dx + \\int_{-1}^{3} f(x) \\, dx - \\int_{-4}^{-3} f(x) \\, dx = \\int_a^b f(x) \\, dx$. Find $a$ and $b$.",
          answer: "In words: 'The signed area between $-4$ and $-1$ added to the signed area between $-1$ and $3$ minus the signed area between $-4$ and $-3$ = the signed area between $a$ and $b$.'\n\nFirst combine the two additions: $\\int_{-4}^{-1} + \\int_{-1}^{3} = \\int_{-4}^{3}$ (joining at $-1$).\n\nOur problem now says: $\\int_{-4}^{3} - \\int_{-4}^{-3} f(x) \\, dx = \\int_a^b f(x) \\, dx$.\n\nIn other words 'If we subtract the signed area that lies between $-4$ and $-3$ from the whole signed area that lies between $-4$ and $3$, we are left with the signed area between $-3$ and $3$.'\n\nThe answer must be from $-3$ to $3$. So $a = -3$, $b = 3$.",
          diagram: "[IMAGE: C_IN_25_interval_trimming.png]"
        },
        {
          qid: "C_IN_26",
          q: "If $\\int_2^k f(x) \\, dx = 0$, does this mean $f(x) = 0$ between 2 and $k$?",
          answer: "No! It means the signed areas cancel.\n\nCounter-example: $f(x) = x - 3$.\nThen $\\int_2^4 (x-3) \\, dx = [\\frac{x^2}{2} - 3x]_2^4 = (8 - 12) - (2 - 6) = -4 + 4 = 0$.\n\nThe function is negative on $(2,3)$ and positive on $(3,4)$, and the areas cancel perfectly.\nSo $k = 4$ works even though $f(x) \\neq 0$.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 7: Areas Between Curves
    // ════════════════════════════════════════════════════════════
    {
      section: "Areas Between Curves",
      subtopic: "Applications of Integration",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_27",
          q: "Describe the basic steps for calculating the area between two curves.",
          answer: "Step 1: Find the points of intersection by setting the two functions equal and solving. These become your bounds.\nStep 2: Determine which curve is on top (higher $y$-value) in each sub-interval — test a point between consecutive intersections.\nStep 3: Set up the integral: $\\int (\\text{upper function} - \\text{lower function}) \\, dx$ for each sub-interval.\nStep 4: Evaluate each integral and add them together. The subtraction (upper minus lower) always gives a positive result.",
          diagram: null
        },
        {
          qid: "C_IN_28",
          q: "If one or both curves go below the $x$-axis, how does the calculation change?",
          answer: "It does not change at all!\nWhen finding the area between two curves, you only care about which curve is higher relative to the other — not whether either is above or below the $x$-axis.\nThe formula (upper function $-$ lower function) $dx$ works regardless.\nThe $x$-axis is irrelevant for area between curves because the vertical distance is the same regardless of vertical position.",
          diagram: null
        },
        {
          qid: "C_IN_29",
          q: "If two curves intersect at $x = a$, $x = b$, and $x = c$ (where $a < b < c$), and $f(x)$ is above $g(x)$ on $[a, b]$ but below on $[b, c]$, write the total area expression.",
          answer: "Total area $= \\int_a^b [f(x) - g(x)] \\, dx + \\int_b^c [g(x) - f(x)] \\, dx$.\nYou must split at $b$ because the relative position switches.\nIn the first interval $f$ is on top; in the second $g$ is on top.\nEach integral is positive because you always subtract the lower from the upper.",
          diagram: "[IMAGE: C_IN_29_area_between_curves_split.png]"
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 8: Total Change Formula
    // ════════════════════════════════════════════════════════════
    {
      section: "Total Change Formula",
      subtopic: "Applications of Integration",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_30",
          q: "Describe the total change formula, its form, and when it is used.",
          answer: "The total change formula states: $f(b) - f(a) = \\int_a^b f'(x) \\, dx$.\nIn words: the total change in a quantity equals the integral of its rate of change.\nIt is used when you are given a rate of change function and need the total change, OR when you know a starting value and rate: $f(b) = f(a) + \\int_a^b f'(x) \\, dx$.",
          diagram: null
        },
        {
          qid: "C_IN_31",
          q: "Why is the total change formula useful instead of simply anti-differentiating the rate function?",
          answer: "Often the rate function is too complex to anti-differentiate algebraically, or you are given the rate as a graph or table rather than a formula.\nThe total change formula lets you work directly with the definite integral (evaluated numerically, read from a graph, or computed with technology) without needing the explicit anti-derivative.",
          diagram: null
        },
        {
          qid: "C_IN_32",
          q: "Write a non-motion example where the total change formula is useful. What signals do it use?",
          answer: "Example: 'Water flows into a tank at a rate of $R(t) = 50 - 2t$ litres/minute. How much water has flowed into the tank after 10 minutes?'\n\nSignal characteristics: you are given a RATE (litres per minute, dollars per year, etc.) and asked for the change in value at a later time.\n\nThe formula gives: $\\int_0^{10} R(t) \\, dt = \\int_0^{10} (50 - 2t) \\, dt = 400$ litres.",
          diagram: null
        },
        {
          qid: "C_IN_33",
          q: "Therefore, what part of the graph of a derivative is equivalent to the change in the original function's values between $x = a$ and $x = b$?",
          answer: "The signed area between the curve $y = f'(x)$ and the $x$-axis, between $x = a$ and $x = b$, equals $f(b) - f(a)$. Therefore it tells us the amount the $y$-values of the original function change between $a$ and $b$.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 9: Fundamental Theorem of Calculus — Part 2
    // ════════════════════════════════════════════════════════════
    {
      section: "Fundamental Theorem of Calculus — Part 2",
      subtopic: "Fundamental Theorem",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_56",
          q: "What does $\\frac{d}{dx} \\int_a^x f(t) \\, dt$ represent?",
          answer: "It represents the instantaneous rate at which the accumulated area is changing at position $x$.\nSince the accumulation function $A(x) = \\int_a^x f(t) \\, dt$ measures the total signed area so far, its derivative tells you how fast that signed area is growing or shrinking at the point $x$.",
          diagram: null
        },
        {
          qid: "C_IN_57",
          q: "Explain FTC Part 2 in words.",
          answer: "If you accumulate the area under a function $f$ from a fixed starting point $a$ up to a variable point $x$, and then differentiate that accumulated area with respect to $x$, you get back the original function $f$ evaluated at $x$.\nIn symbols: $\\frac{d}{dx} \\int_a^x f(t) \\, dt = f(x)$. The derivative 'undoes' the integration.",
          diagram: null
        },
        {
          qid: "C_IN_58",
          q: "Write an example of an FTC Part 2 calculation.",
          answer: "If $F(x) = \\int_1^x (3t^2 - 2t + 5) \\, dt$, find $F'(x)$.\nBy FTC Part 2: $F'(x) = 3x^2 - 2x + 5$.\nYou simply replace $t$ with $x$ in the integrand. No anti-differentiation is needed.",
          diagram: null
        },
        {
          qid: "C_IN_59",
          q: "Write a worded problem that uses FTC Part 2. What characteristics signal its use?",
          answer: "Example: 'The total rainfall (mm) from midnight is $R(x) = \\int_0^x (0.5t - 0.02t^2) \\, dt$. Find the rate of rainfall at $t = 8$ hours.'\nBy FTC Part 2: $R'(x) = 0.5x - 0.02x^2$, so $R'(8) = 4 - 1.28 = 2.72$ mm/hr.\nSignal: a quantity defined as an integral with a variable upper bound, and you are asked to find the rate of change.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 10: Anti-differentiating Exponential Functions
    // ════════════════════════════════════════════════════════════
    {
      section: "Anti-differentiating Exponential Functions",
      subtopic: "Anti-differentiation",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_60",
          q: "What are the steps for anti-differentiating an equation in the form $a \\times g'(x) \\times e^{g(x)}$?\nExample: Anti-differentiate $8e^{2x+1}$.",
          answer: "Step 1: Identify the derivative of the exponent.\n$g'(x) = 2$.\nStep 2: Re-write integral to form $a \\times \\int g'(x) \\times e^{g(x)} \\, dx$:\n$4 \\int 2 \\times e^{2x+1} \\, dx$.\nStep 3: Anti-differentiate by deleting $g'(x)$ and multiplying by $a$. Add your $+C$:\n$4e^{2x+1} + C$.\nThis is the reverse chain rule where the inner function is $g(x)$.",
          diagram: null
        },
        {
          qid: "C_IN_61",
          q: "Write an example where anti-differentiation of an $e$ function is needed to find an area.",
          answer: "Find the area between $y = 3e^{5x}$, the $x$-axis, $x = 0$ and $x = 1$.\nArea $= \\frac{3}{5} \\int_0^1 5 \\times e^{5x} \\, dx = \\frac{3}{5}[e^{5x}]_0^1 = \\frac{3}{5}(e^5 - e^0) \\approx 88.45$ square units.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 11: Anti-differentiating Trigonometric Functions
    // ════════════════════════════════════════════════════════════
    {
      section: "Anti-differentiating Trigonometric Functions",
      subtopic: "Anti-differentiation",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_62",
          q: "What are the key anti-derivatives for trigonometric functions? Explain the pattern.",
          answer: "$\\int a \\times g'(x) \\times \\cos(g(x)) \\, dx = a \\times \\sin(g(x)) + C$\n$\\int a \\times g'(x) \\times \\sin(g(x)) \\, dx = a \\times (-\\cos(g(x))) + C$.\nAnti-differentiating cos gives sine (positive), anti-differentiating sine gives negative cos.\nMemory aid: sine and cosine ladder.",
          diagram: null
        },
        {
          qid: "C_IN_63",
          q: "Write an example where anti-differentiation of a trig function is needed to find an area.",
          answer: "Find the area between $y = \\sin(2x)$ and the $x$-axis from $x = 0$ to $x = \\pi$.\nStep 1: Find $x$-intercepts between the bounds. Solve $0 = \\sin(2x)$: the curve crosses zero at $x = 0, \\frac{\\pi}{2}, \\pi$.\nStep 2: Rewrite integral into required form: $\\frac{1}{2} \\int 2\\sin(2x) \\, dx$.\nStep 3: Calculate area = area of sections above curve + |areas below curve|:\nArea $= \\frac{1}{2} \\int_0^{\\pi/2} 2\\sin(2x) \\, dx + \\frac{1}{2} \\left| \\int_{\\pi/2}^{\\pi} 2\\sin(2x) \\, dx \\right|$\n$= \\left[\\frac{-\\cos(2x)}{2}\\right]_0^{\\pi/2} + \\left| \\left[\\frac{-\\cos(2x)}{2}\\right]_{\\pi/2}^{\\pi} \\right|$\n$= \\left(\\frac{1}{2} - \\left(-\\frac{1}{2}\\right)\\right) + \\left| \\left(-\\frac{1}{2} - \\frac{1}{2}\\right) \\right| = 1 + |-1| = 2$ units$^2$.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 12: 'Hence' Integration — Differentiate Then Integrate
    // ════════════════════════════════════════════════════════════
    {
      section: "'Hence' Integration — Differentiate Then Integrate",
      subtopic: "Anti-differentiation",
      swap_after: true,
      questions: [
        {
          qid: "C_IN_64",
          q: "Questions sometimes say:\n(a) Differentiate $2x\\sqrt{x + 4}$, then\n(b) Hence find $\\int \\frac{x}{\\sqrt{x+4}} \\, dx$.\nExplain the logic and solve.",
          answer: "The strategy uses the fact that integration reverses differentiation.\nIn part (a) you differentiate the given expression.\nIn part (b) you recognise that the integral you need is related to that derivative result.\nBy rearranging the derivative equation and integrating both sides, you can isolate the required integral.\nThe word 'hence' means 'use your answer from part (a)'.\n\nIn part (a), differentiate the given expression carefully:\n$\\frac{d}{dx}(2x\\sqrt{x+4}) = 2\\sqrt{x+4} + \\frac{x}{\\sqrt{x+4}}$.\n\nIn part (b), write the result as: $\\frac{d}{dx}[\\text{given expression}] = [\\text{your derivative}]$.\nIntegrate both sides with respect to $x$. The left side becomes just the original expression due to FTC:\n$2x\\sqrt{x+4} + C = \\int 2\\sqrt{x+4} \\, dx + \\int \\frac{x}{\\sqrt{x+4}} \\, dx$.\n\nRearrange to isolate the specific integral asked for in part (b):\n$\\int \\frac{x}{\\sqrt{x+4}} \\, dx = 2x\\sqrt{x+4} + C - \\int 2\\sqrt{x+4} \\, dx$.\n\nFind remaining integral and combine like terms:\n$\\int \\frac{x}{\\sqrt{x+4}} \\, dx = 2x\\sqrt{x+4} - \\frac{4}{3}(x+4)^{3/2} + C$.",
          diagram: null
        },
        {
          qid: "C_IN_66",
          q: "Walk through the general process for solving this type of 'hence integrate' questions.",
          answer: "Step 1: In part (a), differentiate the given expression carefully.\nStep 2: Write the result as: $\\frac{d}{dx}[\\text{given expression}] = [\\text{your derivative}]$.\nStep 3: Integrate both sides from Step 2 with respect to $x$. The left side becomes just the original expression due to FTC. The right side is the integral of your derivative written as $\\int [\\text{your derivative}] \\, dx$.\nStep 4: Use FTC on left side of equation that contains the integral of a derivative.\nStep 5: Rearrange to isolate the specific integral asked for in part (b).\nStep 6: Do not forget $+C$ at any stage you find an integral.",
          diagram: null
        }
      ]
    }
  ],

  // ════════════════════════════════════════════════════════════
  // DIAGRAM REGISTRY — all diagrams needed for this concepts file
  // ════════════════════════════════════════════════════════════
  diagrams: [
    {
      filename: "C_IN_09_rectangle_types.png",
      description: "Three side-by-side graphs showing: (1) generic increasing curve with rectangular strips underneath, (2) midpoint estimate rectangles, (3) lower estimate (under) and upper estimate (over) rectangles. Curve is a gentle increasing function on [a,b]. Strips show gap between rectangle top and curve. Labels: Delta x, a, b, f(x), 'Lower estimate (under)', 'Upper estimate (over)', 'Midpoint estimate'.",
      type: "function_graph",
      forQuestion: "C_IN_09"
    },
    {
      filename: "C_IN_23_accumulation_paired_graphs.png",
      description: "Two vertically stacked graphs. Top: A(x) accumulation function showing local max at x=p, local min at x=q, inflection points at x=c and x=d, root at x=a. Bottom: f(t) graph showing corresponding features — positive region (hatched, labeled 'f > 0') where A increases, negative region (crosshatched, labeled 'f < 0') where A decreases, zeros at x=p and x=q, local max of f at x=c. Key points labeled: a, c, p, d, q on both graphs with dashed vertical connectors.",
      type: "multi_panel",
      forQuestion: "C_IN_23"
    },
    {
      filename: "C_IN_24_interval_splitting.png",
      description: "Graph of a generic smooth positive curve f(x) with shaded region from -7 to 5. The region from -7 to -2 has one hatching pattern, and -2 to 5 has another, showing how the two integrals join at x = -2. Labels: 'integral from a to -2', 'integral from -2 to 5', 'combined = integral from -7 to 5', 'therefore a = -7'. Points -7, -2, 5 marked on x-axis.",
      type: "function_graph",
      forQuestion: "C_IN_24"
    },
    {
      filename: "C_IN_25_interval_trimming.png",
      description: "Graph of a generic smooth curve f(x) with region from -4 to 3 shaded. A small strip from -4 to -3 is crosshatched (labeled 'trimmed/subtracted (crosshatch)'). The remaining region from -3 to 3 has dot pattern (labeled 'remaining area (dots)'). Annotations show: 'Combined: integral from -4 to -1 + integral from -1 to 3 = integral from -4 to 3', 'subtract integral from -4 to -3', 'result: integral from -3 to 3 = integral from a to b, so a = -3, b = 3'. Points -4, -3, -1, 3 marked on x-axis with a 'join' label at -1.",
      type: "function_graph",
      forQuestion: "C_IN_25"
    },
    {
      filename: "C_IN_29_area_between_curves_split.png",
      description: "Two curves f(x) (dashed, blue) and g(x) (solid) intersecting at three points x=a, x=b, x=c. Between a and b: f(x) is above g(x), region shaded with diagonal lines, labeled 'integral [f(x) - g(x)] dx, a to b'. Between b and c: g(x) is above f(x), region shaded with crosshatch, labeled 'integral [g(x) - f(x)] dx, b to c'. Legend showing the two shading patterns.",
      type: "function_graph",
      forQuestion: "C_IN_29"
    }
  ]
};
