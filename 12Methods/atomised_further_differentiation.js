// ======================================================================
// ATOMISED PRACTICE — ATOMISED_FURTHER_DIFFERENTIATION
// Topic: Further Differentiation and Applications
// 50 PTs, 602 questions (E:149 M:231 H:222)
// Reorganised from source files — richest version kept for each PT
// Unquoted keys for WSH compatibility
// ======================================================================

var ATOMISED_FURTHER_DIFFERENTIATION = {
  questions: [
    {
          pt_id: "FD_001",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Differentiating Basics",
          pt: "Finding the coordinates of a point on the curve where the gradient is a given value",
          testing: "Testing: Set derivative equal to value and solve",
          reason_bank: ["wrong_rule", "substitution_error", "sign_error", "algebra_slip", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_001_e01",
              q: "Find the point on $y = x^2 + 6x - 1$ where the gradient is $4$.",
              a: "$y' = 2 x + 6 = 4 \\Rightarrow x = -1$. $y = -6$. Point: $(-1, -6)$"
            },
            {
              qid: "FD_001_e02",
              q: "Find the point on $y = 3x^2 - 12x + 5$ where the gradient is $6$.",
              a: "$y' = 6 x - 12 = 6 \\Rightarrow x = 3$. $y = -4$. Point: $(3, -4)$"
            },
            {
              qid: "FD_001_e03",
              q: "Find the coordinates where the gradient of $y = -2x^2 + 8x + 1$ is zero.",
              a: "$y' = 8 - 4 x = 0 \\Rightarrow x = 2$. $y = 9$. Point: $(2, 9)$"
            }
          ],
          medium: [
            {
              qid: "FD_001_m01",
              q: "Find the point(s) on $y = x^3 - 3x^2 + 1$ where the gradient equals $9$.",
              a: "$y' = 3 x^{2} - 6 x = 9 \\Rightarrow 3(x^2 - 2x - 3) = 0 \\Rightarrow 3(x-3)(x+1) = 0$. Points: $(-1, -3)$, $(3, 1)$"
            },
            {
              qid: "FD_001_m02",
              q: "Find the point on $y = e^{2x} - 5x$ where the gradient equals $3$.",
              a: "$y' = 2 e^{2 x} - 5 = 3 \\Rightarrow e^{2x} = 4 \\Rightarrow x = \\log{\\left(2 \\right)}$. $y = 4 - \\log{\\left(32 \\right)}$. Point: $(\\log{\\left(2 \\right)}, 4 - \\log{\\left(32 \\right)})$"
            },
            {
              qid: "FD_001_m03",
              q: "Find the point on $y = -x^2 + 8x - 3$ where the gradient is $2$.",
              a: "$y' = 8 - 2 x = 2 \\Rightarrow x = 3$. $y = 12$. Point: $(3, 12)$"
            },
            {
              qid: "FD_001_m04",
              q: "Find the point(s) on $y = \\frac{x^3}{3} - 2x^2 + 3x + 1$ where the tangent is parallel to $y = -x$.",
              a: "Gradient $= -1$. $y' = x^{2} - 4 x + 3 = -1 \\Rightarrow (x-2)^2 = 0$. Point: $(2, \\frac{5}{3})$"
            },
            {
              qid: "FD_001_m05",
              q: "Find the point on $y = 4\\sqrt{x} + x$ (for $x > 0$) where the gradient is $3$.",
              a: "$y' = 1 + \\frac{2}{\\sqrt{x}} = 3 \\Rightarrow \\frac{2}{\\sqrt{x}} = 2 \\Rightarrow x = 1$. $y = 5$. Point: $(1, 5)$"
            }
          ],
          hard: [
            {
              qid: "FD_001_h01",
              q: "Find all points on $y = 2x^3 - 9x^2 + 12x - 4$ where the gradient is $12$.",
              a: "$y' = 6 x^{2} - 18 x + 12 = 12 \\Rightarrow 6x(x-3) = 0$. Points: $(0, -4)$, $(3, 5)$"
            },
            {
              qid: "FD_001_h02",
              q: "The gradient of $g(x) = x^3 - 2x$ at $x = 1$ is $m$. Find the point on $y = 2x^2 - 3x + 1$ where the gradient equals $m$.",
              a: "$g'(1) = 1$. $y' = 4 x - 3 = 1 \\Rightarrow x = 1$. Point: $(1, 0)$"
            },
            {
              qid: "FD_001_h03",
              q: "Find the coordinates on $y = x^3 + x^2 - 5x + 3$ where the tangent is parallel to $y = 3x + 1$.",
              a: "Gradient $= 3$. $y' = 3 x^{2} + 2 x - 5 = 3 \\Rightarrow 3x^2 + 2x - 8 = 0$. Points: $\\left(-2, 9\\right)$, $\\left(\\frac{4}{3}, \\frac{13}{27}\\right)$"
            },
            {
              qid: "FD_001_h04",
              q: "Find all points on $y = \\frac{x^4}{4} - 2x^2 + 4$ where the gradient is $-4$.",
              a: "$y' = x^{3} - 4 x = -4 \\Rightarrow x^3 - 4x + 4 = 0$. Points: $(- \\frac{\\sqrt[3]{6 \\sqrt{33} + 54}}{3} - \\frac{4}{\\sqrt[3]{6 \\sqrt{33} + 54}}, - \\frac{\\sqrt[3]{6} \\left(12 + 6^{\\frac{2}{3}} \\left(\\sqrt{33} + 9\\right)^{\\frac{2}{3}}\\right)^{2}}{27 \\left(\\sqrt{33} + 9\\right)^{\\frac{2}{3}}} + 4 + \\frac{\\left(12 + 6^{\\frac{2}{3}} \\left(\\sqrt{33} + 9\\right)^{\\frac{2}{3}}\\right)^{4} \\left(6 \\sqrt{33} + 54\\right)^{\\frac{2}{3}}}{11664 \\left(\\sqrt{33} + 9\\right)^{2}})$"
            },
            {
              qid: "FD_001_h05",
              q: "Find all points on $y = \\frac{2x^3}{3} - x^2 - 4x + 3$ where the gradient is $\\frac{8}{3}$.",
              a: "$y' = 2 x^{2} - 2 x - 4 = \\frac{8}{3}$. Points: $(\\frac{1}{2} - \\frac{\\sqrt{129}}{6}, \\frac{5}{6} + \\frac{19 \\sqrt{129}}{54})$, $(\\frac{1}{2} + \\frac{\\sqrt{129}}{6}, \\frac{5}{6} - \\frac{19 \\sqrt{129}}{54})$"
            }
          ]
        }
,

    {
          pt_id: "FD_NEW_01",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Product Rule",
          pt: "Evaluating derivative of f(x)g(x) at a point using graphs of f and g",
          testing: "Reading function values and gradients from graphs, applying product rule",
          reason_bank: ["wrong_rule", "gradient_read_error", "sign_error", "substitution_error", "not_sure"],
          easy: [
            {
              qid: "FD_NEW_01_e01",
              q: "The graphs of $y = f(x)$ (piecewise linear) and $y = g(x)$ are shown. At $x = 1$, $f(1) = 2$, $f'(1) = 1$, $g(1) = 3$, $g'(1) = -1$. Find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$.",
              a: "$(fg)'(1) = f'(1)g(1) + f(1)g'(1) = 1(3) + 2(-1) = 3 - 2 = 1$"
            },
            {
              qid: "FD_NEW_01_e02",
              q: "From the graph: $f(-1) = 4$, $f'(-1) = -2$, $g(-1) = 1$, $g'(-1) = 3$. Find $(fg)'(-1)$.",
              a: "$(fg)'(-1) = (-2)(1) + (4)(3) = -2 + 12 = 10$"
            },
            {
              qid: "FD_NEW_01_e03",
              q: "From the graph: $f(0) = 3$, $f'(0) = 0$, $g(0) = -2$, $g'(0) = 4$. Find $(fg)'(0)$.",
              a: "$(fg)'(0) = 0(-2) + 3(4) = 12$"
            }
          ],
          medium: [
            {
              qid: "FD_NEW_01_m01",
              q: "The graphs of continuous functions $y = f(x)$ and $y = g(x)$ are shown (piecewise linear). Read the values and gradients at $x = -2$ from the graph to evaluate $\\frac{d}{dx}[f(x)g(x)]$ at $x = -2$.\nGiven from graph: $f(-2) = 2$, gradient of $f$ at $x = -2$ is $1$, $g(-2) = -1$, gradient of $g$ at $x = -2$ is $-2$.",
              a: "$(fg)'(-2) = f'(-2)g(-2) + f(-2)g'(-2) = 1(-1) + 2(-2) = -1 - 4 = -5$"
            },
            {
              qid: "FD_NEW_01_m02",
              q: "From graphs: at $x = 3$, $f(3) = -1$, $f'(3) = 2$, $g(3) = 4$, $g'(3) = -1$. Also find the equation of the tangent to $y = f(x)g(x)$ at $x = 3$.",
              a: "$(fg)'(3) = 2(4) + (-1)(-1) = 8 + 1 = 9$. $y$-value: $f(3)g(3) = -4$.\nTangent: $y + 4 = 9(x - 3)$, i.e. $y = 9x - 31$"
            }
          ],
          hard: [
            {
              qid: "FD_NEW_01_h01",
              q: "From graphs of $f$ and $g$, at $x = 1$: $f(1) = -3$, $f'(1) = -1$, $g(1) = -9$, $g'(1) = -8$. Find $(fg)'(1)$ and $\\left(\\frac{f}{g}\\right)'(1)$.",
              a: "Product: $(-1)(-9) + (-3)(-8) = 9 + 24 = 33$.\nQuotient: $\\frac{(-1)(-9) - (-3)(-8)}{(-9)^2} = \\frac{9 - 24}{81} = \\frac{-15}{81} = -\\frac{5}{27}$"
            }
          ]
        }
,

    {
          pt_id: "FD_002",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Differentiating Basics",
          pt: "Finding the equation of a tangent at a given x or y value",
          testing: "Testing: Find gradient via derivative, use point-gradient form",
          reason_bank: ["wrong_rule", "substitution_error", "sign_error", "algebra_slip", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_002_e01",
              q: "Find the equation of the tangent to $y = x^2 - 3x + 1$ at $x = 2$.",
              a: "$y' = 2 x - 3$. At $x=2$: gradient $= 1$, $y = -1$. Tangent: $y = x - 3$"
            },
            {
              qid: "FD_002_e02",
              q: "Find the equation of the tangent to $y = x^3 - 2x$ at $x = 1$.",
              a: "$y' = 3 x^{2} - 2$. At $x=1$: gradient $= 1$, $y = -1$. Tangent: $y = x - 2$"
            },
            {
              qid: "FD_002_e03",
              q: "Find the equation of the tangent to $y = 3x^2 + 2x$ at the origin.",
              a: "$y' = 6 x + 2$. At $x=0$: gradient $= 2$. Tangent: $y = 2 x$"
            }
          ],
          medium: [
            {
              qid: "FD_002_m01",
              q: "Find the equation of the tangent to $y = e^x - x$ at $x = 0$.",
              a: "$y' = e^{x} - 1$. At $x=0$: gradient $= 0$, $y = 1$. Tangent: $y = 1$ (horizontal)"
            },
            {
              qid: "FD_002_m02",
              q: "Find the equation of the tangent to $y = 2x^3 + x^2 - 4x + 3$ at $x = -1$.",
              a: "$y' = 6 x^{2} + 2 x - 4$. At $x=-1$: gradient $= 0$, $y = 6$. Tangent: $y = 6$"
            },
            {
              qid: "FD_002_m03",
              q: "Find the equation of the tangent to $y = 3\\sqrt{x} - x$ at $x = 9$.",
              a: "$y' = -1 + \\frac{3}{2 \\sqrt{x}}$. At $x=9$: gradient $= - \\frac{1}{2}$, $y = 0$. Tangent: $y = \\frac{9}{2} - \\frac{x}{2}$"
            },
            {
              qid: "FD_002_m04",
              q: "Find the equation of the tangent to $y = \\ln(2x)$ at $x = \\frac{e}{2}$.",
              a: "$y' = \\frac{1}{x}$. At $x = \\frac{e}{2}$: gradient $= \\frac{2}{e}$, $y = 1$. Tangent: $y = \\frac{2x}{e}$"
            },
            {
              qid: "FD_002_m05",
              q: "Find the equation of the tangent to $y = x^3 - 4x^2 + 5$ at the $y$-intercept.",
              a: "$y$-intercept: $(0, 5)$. $y' = 3 x^{2} - 8 x$. Gradient $= 0$. Tangent: $y = 5$"
            }
          ],
          hard: [
            {
              qid: "FD_002_h01",
              q: "Find the equation(s) of the tangent to $y = x^2 - 2x + 3$ at the point(s) where $y = 6$.",
              a: "$x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0$. At $x = -1$: gradient $= -4$, tangent: $y = 2 - 4 x$. At $x = 3$: gradient $= 4$, tangent: $y = 4 x - 6$"
            },
            {
              qid: "FD_002_h02",
              q: "Find the equation(s) of the tangent to $y = x^2$ that pass through the point $(0, -1)$.",
              a: "Tangent at $(a, a^2)$: $y = 2ax - a^2$. Through $(0, -1)$: $-1 = -a^2 \\Rightarrow a = \\pm 1$. Tangents: $y = 2x - 1$ and $y = -2x - 1$"
            },
            {
              qid: "FD_002_h03",
              q: "Find the equation of the tangent to $y = 2e^{x/2} - 1$ at $x = 0$.",
              a: "$y' = e^{\\frac{x}{2}}$. At $x=0$: gradient $= 1$, $y = 1$. Tangent: $y = x + 1$"
            },
            {
              qid: "FD_002_h04",
              q: "Find the equation(s) of the tangent to $y = x^3 - x$ that is perpendicular to $y = -\\frac{x}{2} + 3$.",
              a: "Perpendicular gradient $= 2$. $y' = 3 x^{2} - 1 = 2 \\Rightarrow x = \\pm 1$. At $x = -1$: tangent $y = 2 x + 2$. At $x = 1$: tangent $y = 2 x - 2$"
            },
            {
              qid: "FD_002_h05",
              q: "Find the equation of the **normal** to $y = x^2 + 4x$ at $x = 1$.",
              a: "$y' = 2 x + 4$. At $x=1$: gradient $= 6$, $y = 5$. Normal gradient $= -\\frac{1}{6}$. Normal: $y = \\frac{31}{6} - \\frac{x}{6}$"
            }
          ]
        }
,

    {
          pt_id: "FD_NEW_02",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Product Rule",
          pt: "Finding equation of tangent to a product of functions at a given point",
          testing: "Product rule differentiation then tangent equation",
          reason_bank: ["wrong_rule", "substitution_error", "sign_error", "algebra_slip", "forgot_y_value", "not_sure"],
          easy: [
            {
              qid: "FD_NEW_02_e01",
              q: "Find the equation of the tangent to $y = (x + 1)(x^2 - 3)$ at $x = 2$.",
              a: "Product rule: $y' = 1(x^2-3) + (x+1)(2x) = x^2 - 3 + 2x^2 + 2x = 3x^2 + 2x - 3$.\nAt $x=2$: gradient $= 12+4-3 = 13$. $y = 3 \\times 1 = 3$.\nTangent: $y - 3 = 13(x - 2)$, i.e. $y = 13x - 23$"
            },
            {
              qid: "FD_NEW_02_e02",
              q: "Find the equation of the tangent to $y = x(x - 4)^2$ at $x = 1$.",
              a: "$y' = (x-4)^2 + x \\cdot 2(x-4) = (x-4)^2 + 2x(x-4) = (x-4)[(x-4) + 2x] = (x-4)(3x-4)$.\nAt $x=1$: gradient $= (-3)(-1) = 3$. $y = 1(9) = 9$.\nTangent: $y - 9 = 3(x - 1)$, i.e. $y = 3x + 6$"
            },
            {
              qid: "FD_NEW_02_e03",
              q: "Find the equation of the tangent to $y = x^2 e^x$ at $x = 0$.",
              a: "$y' = 2xe^x + x^2 e^x = xe^x(2+x)$. At $x=0$: gradient $= 0$. $y = 0$.\nTangent: $y = 0$ (horizontal tangent at the origin)"
            }
          ],
          medium: [
            {
              qid: "FD_NEW_02_m01",
              q: "Find the equation of the tangent to $y = (2x-1)\\sin(x)$ at $x = \\frac{\\pi}{2}$.",
              a: "$y' = 2\\sin(x) + (2x-1)\\cos(x)$. At $x = \\frac{\\pi}{2}$: $y' = 2(1) + (\\pi - 1)(0) = 2$.\n$y = (\\pi - 1)(1) = \\pi - 1$. Tangent: $y - (\\pi - 1) = 2(x - \\frac{\\pi}{2})$"
            },
            {
              qid: "FD_NEW_02_m02",
              q: "Find the equation of the tangent to $y = e^{-x}(x^2 + 1)$ at $x = 1$.",
              a: "$y' = -e^{-x}(x^2+1) + e^{-x}(2x) = e^{-x}(2x - x^2 - 1) = -e^{-x}(x-1)^2$.\nAt $x=1$: $y' = 0$. $y = 2e^{-1}$. Tangent: $y = \\frac{2}{e}$"
            }
          ],
          hard: [
            {
              qid: "FD_NEW_02_h01",
              q: "Find the equation of the tangent to $y = (x^2 - 1)e^{2x}$ at $x = 0$.",
              a: "$y' = 2xe^{2x} + 2(x^2-1)e^{2x} = e^{2x}(2x + 2x^2 - 2) = 2e^{2x}(x^2 + x - 1)$.\nAt $x=0$: $y' = 2(1)(-1) = -2$. $y = -1$.\nTangent: $y + 1 = -2(x - 0)$, i.e. $y = -2x - 1$"
            }
          ]
        }
,

    {
          pt_id: "FD_003",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Differentiating Basics",
          pt: "Finding the value of a derivative at a given x or y value",
          testing: "Testing: Substitute into derivative after differentiating",
          reason_bank: ["wrong_rule", "substitution_error", "sign_error", "algebra_slip", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_003_e01",
              q: "Given $f(x) = 3x^4 - 2x^2 + 5x$, find $f'(2)$.",
              a: "$f'(x) = 12 x^{3} - 4 x + 5$, so $f'(2) = 93$"
            },
            {
              qid: "FD_003_e02",
              q: "Given $f(x) = 2x^3 + x^2 - 7x$, find $f'(-1)$.",
              a: "$f'(x) = 6 x^{2} + 2 x - 7$, so $f'(-1) = -3$"
            },
            {
              qid: "FD_003_e03",
              q: "Given $f(x) = x^5 - 4x^3$, find $f'(1)$.",
              a: "$f'(x) = 5 x^{4} - 12 x^{2}$, so $f'(1) = -7$"
            }
          ],
          medium: [
            {
              qid: "FD_003_m01",
              q: "If $y = \\frac{x^3}{3} - 4\\sqrt{x}$, find $\\frac{dy}{dx}$ when $x = 4$.",
              a: "$\\frac{dy}{dx} = x^{2} - \\frac{2}{\\sqrt{x}}$, so at $x=4$: $15$"
            },
            {
              qid: "FD_003_m02",
              q: "Given $f(x) = 5x^2 - \\frac{3}{x}$, find $f'\\left(\\frac{1}{2}\\right)$.",
              a: "$f'(x) = 10 x + \\frac{3}{x^{2}}$, so $f'(1/2) = 17$"
            },
            {
              qid: "FD_003_m03",
              q: "If $y = 6\\sqrt{x} + x^2 - 3x$, find $\\frac{dy}{dx}$ when $x = 9$.",
              a: "$\\frac{dy}{dx} = 2 x - 3 + \\frac{3}{\\sqrt{x}}$. At $x = 9$: $16$"
            },
            {
              qid: "FD_003_m04",
              q: "Given $f(x) = 4x^3 - x^2 + 2x$, find $f'(-2)$.",
              a: "$f'(x) = 12 x^{2} - 2 x + 2$, so $f'(-2) = 54$"
            },
            {
              qid: "FD_003_m05",
              q: "If $f(x) = 2x^{3/2} - x^{1/3}$, find $f'(8)$.",
              a: "$f'(x) = 3 \\sqrt{x} - \\frac{1}{3 x^{\\frac{2}{3}}}$, so $f'(8) = - \\frac{1}{12} + 6 \\sqrt{2}$"
            }
          ],
          hard: [
            {
              qid: "FD_003_h01",
              q: "The curve $y = x^2 - 4x + 7$ has points where $y = 4$. Find the value(s) of $\\frac{dy}{dx}$ at these points.",
              a: "$y = 4 \\Rightarrow x^2 - 4x + 3 = 0 \\Rightarrow x = 1, 3$. $y' = 2 x - 4$. At $x=1$: $y'=-2$. At $x=3$: $y'=2$"
            },
            {
              qid: "FD_003_h02",
              q: "Given $f(x) = 2x^3 - \\frac{5}{x^2} + \\frac{1}{x}$, find $f'(-1)$.",
              a: "$f'(x) = 6 x^{2} - \\frac{1}{x^{2}} + \\frac{10}{x^{3}}$. $f'(-1) = -5$"
            },
            {
              qid: "FD_003_h03",
              q: "Given $f(x) = ax^2 + 3x$ and $f'(2) = 11$, find the value of $a$.",
              a: "$f'(x) = 2 a x + 3$. $f'(2) = 4 a + 3 = 11 \\Rightarrow a = 2$"
            },
            {
              qid: "FD_003_h04",
              q: "If $y = x\\sqrt{x} + \\frac{4}{\\sqrt{x}}$, find $\\frac{dy}{dx}$ when $x = 4$.",
              a: "Rewrite: $y = x^{3/2} + 4x^{-1/2}$. $y' = \\frac{3 \\sqrt{x}}{2} - \\frac{2}{x^{\\frac{3}{2}}}$. At $x = 4$: $11/4$"
            },
            {
              qid: "FD_003_h05",
              q: "Find the rate of change of $y = \\frac{x^3}{3} - \\frac{5x^2}{2} + 6x - 1$ at $x = 3$.",
              a: "$\\frac{dy}{dx} = x^{2} - 5 x + 6$. At $x = 3$: $\\frac{dy}{dx} = 0$. (Stationary point)"
            }
          ]
        }
,

    {
          pt_id: "FD_NEW_03",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Chain Rule",
          pt: "Multi-link chain rule with three or more related variables (dy/da = dy/dr × dr/dm × dm/da)",
          testing: "Extending chain rule to multiple intermediate variables",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_NEW_03_e01",
              q: "If $y = 3u^2$, $u = 2t + 1$, find $\\frac{dy}{dt}$ when $t = 1$.",
              a: "$\\frac{dy}{du} = 6u$, $\\frac{du}{dt} = 2$. $\\frac{dy}{dt} = 6u \\times 2 = 12u$.\nAt $t = 1$: $u = 3$, so $\\frac{dy}{dt} = 36$"
            },
            {
              qid: "FD_NEW_03_e02",
              q: "If $y = u^3$, $u = 4 - x^2$, find $\\frac{dy}{dx}$ when $x = 1$.",
              a: "$\\frac{dy}{du} = 3u^2$, $\\frac{du}{dx} = -2x$. $\\frac{dy}{dx} = 3u^2 \\times (-2x) = -6xu^2$.\nAt $x=1$: $u = 3$, so $\\frac{dy}{dx} = -6(1)(9) = -54$"
            },
            {
              qid: "FD_NEW_03_e03",
              q: "If $A = e^h$ and $h = 3t + 2$, find $\\frac{dA}{dt}$.",
              a: "$\\frac{dA}{dh} = e^h$, $\\frac{dh}{dt} = 3$. $\\frac{dA}{dt} = 3e^h = 3e^{3t+2}$"
            }
          ],
          medium: [
            {
              qid: "FD_NEW_03_m01",
              q: "If $y = r^2$, $r = m + 3$, and $m = 3a^2$, find $\\frac{dy}{da}$ in terms of $a$.",
              a: "$\\frac{dy}{dr} = 2r$, $\\frac{dr}{dm} = 1$, $\\frac{dm}{da} = 6a$.\n$\\frac{dy}{da} = 2r \\times 1 \\times 6a = 12ra$.\nSubstitute: $r = m + 3 = 3a^2 + 3$.\n$\\frac{dy}{da} = 12a(3a^2 + 3) = 36a^3 + 36a$"
            },
            {
              qid: "FD_NEW_03_m02",
              q: "Given $h = 2t^2 - t + 5$ and $A = e^{h/10}$, find $\\frac{dA}{dt}$ when $t = 2$.",
              a: "$\\frac{dA}{dh} = \\frac{1}{10}e^{h/10}$, $\\frac{dh}{dt} = 4t - 1$.\n$\\frac{dA}{dt} = \\frac{4t-1}{10}e^{h/10}$.\nAt $t=2$: $h = 11$, $\\frac{dA}{dt} = \\frac{7}{10}e^{1.1} \\approx 2.10$"
            },
            {
              qid: "FD_NEW_03_m03",
              q: "If $y = \\sin(u)$, $u = e^{2t}$, find $\\frac{dy}{dt}$.",
              a: "$\\frac{dy}{du} = \\cos(u)$, $\\frac{du}{dt} = 2e^{2t}$.\n$\\frac{dy}{dt} = 2e^{2t}\\cos(e^{2t})$"
            }
          ],
          hard: [
            {
              qid: "FD_NEW_03_h01",
              q: "If $y = 2u^3$, $u = \\frac{1}{v}$, $v = e^x$, find $\\frac{dy}{dx}$.",
              a: "$\\frac{dy}{du} = 6u^2$, $\\frac{du}{dv} = -\\frac{1}{v^2}$, $\\frac{dv}{dx} = e^x$.\n$\\frac{dy}{dx} = 6u^2 \\times (-\\frac{1}{v^2}) \\times e^x$.\nSubstitute: $u = e^{-x}$, $v = e^x$.\n$= 6e^{-2x} \\times (-e^{-2x}) \\times e^x = -6e^{-3x}$"
            }
          ]
        }
,

    {
          pt_id: "FD_004",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Product Rule",
          pt: "Using a table of values to calculate the derivative of the product of two functions at a given point",
          testing: "Testing: $(fg)'(a) = f'(a)g(a) + f(a)g'(a)$ from table",
          reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
          easy: [
            {
              qid: "FD_004_e01",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | 3       | 2        | 4       | 1        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
              a: "$f'(2)g(2) + f(2)g'(2) = (2)(4) + (3)(1) = 8 + 3 = 11$"
            },
            {
              qid: "FD_004_e02",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 5       | 1        | 2       | 3        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$.",
              a: "$f'(1)g(1) + f(1)g'(1) = (1)(2) + (5)(3) = 2 + 15 = 17$"
            },
            {
              qid: "FD_004_e03",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 0   | 4       | 3        | 6       | 2        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 0$.",
              a: "$f'(0)g(0) + f(0)g'(0) = (3)(6) + (4)(2) = 18 + 8 = 26$"
            }
          ],
          medium: [
            {
              qid: "FD_004_m01",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 3   | 2       | -1       | 5       | 4        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 3$.",
              a: "$f'(3)g(3) + f(3)g'(3) = (-1)(5) + (2)(4) = -5 + 8 = 3$"
            },
            {
              qid: "FD_004_m02",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | -3       | 4        | 2       | -5        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
              a: "$f'(2)g(2) + f(2)g'(2) = (4)(2) + (-3)(-5) = 8 + 15 = 23$"
            },
            {
              qid: "FD_004_m03",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 4       | -2       | 3       | 7        |\n| 4   | -1      | 5        | 6       | -3       |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$ and at $x = 4$.",
              a: "At $x = 1$: $(-2)(3) + (4)(7) = -6 + 28 = 22$.\nAt $x = 4$: $(5)(6) + (-1)(-3) = 30 + 3 = 33$."
            },
            {
              qid: "FD_004_m04",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | $\\frac{1}{2}$       | 3        | 4       | $-\\frac{1}{2}$        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
              a: "$f'(2)g(2) + f(2)g'(2) = (3)(4) + \\left(\\frac{1}{2}\\right)\\left(-\\frac{1}{2}\\right) = 12 - \\frac{1}{4} = \\frac{47}{4}$"
            },
            {
              qid: "FD_004_m05",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 5   | 2       | -3        | 7       | 1        |\nFind $\\frac{d}{dx}[3f(x)g(x)]$ at $x = 5$.",
              a: "$3[f'(5)g(5) + f(5)g'(5)] = 3[(-3)(7) + (2)(1)] = 3[-21 + 2] = 3 \\times -19 = -57$"
            }
          ],
          hard: [
            {
              qid: "FD_004_h01",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ | $h(x)$ | $h'(x)$ |\n|-----|---------|----------|---------|----------|---------|----------|\n| 1   | 3       | -2       | 4       | 5        | -1      | 6        |\nFind $\\frac{d}{dx}[f(x)g(x) + h(x)]$ at $x = 1$.",
              a: "$[f'(1)g(1) + f(1)g'(1)] + h'(1) = [(-2)(4) + (3)(5)] + 6 = [-8 + 15] + 6 = 13$"
            },
            {
              qid: "FD_004_h02",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ |\n|-----|---------|----------|\n| 3   | -4      | 5        |\nUse the product rule to find $\\frac{d}{dx}[f(x)]^2$ at $x = 3$. *Hint: $[f(x)]^2 = f(x) \\cdot f(x)$*.",
              a: "$\\frac{d}{dx}[f(x)]^2 = f'(x)f(x) + f(x)f'(x) = 2f(x)f'(x)$. At $x = 3$: $2(-4)(5) = -40$."
            },
            {
              qid: "FD_004_h03",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ | $h(x)$ | $h'(x)$ |\n|-----|---------|----------|---------|----------|---------|----------|\n| 2   | 1       | 3        | -2      | 4        | 5       | -1       |\nFind $\\frac{d}{dx}[f(x)g(x)h(x)]$ at $x = 2$.",
              a: "$f'gh + fg'h + fgh' = (3)(-2)(5) + (1)(4)(5) + (1)(-2)(-1) = -30 + 20 + 2 = -8$"
            },
            {
              qid: "FD_004_h04",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 6       | -2       | 3       | 4        |\nFind $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.",
              a: "$\\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{(-2)(3) - (6)(4)}{3^2} = \\frac{-6 - 24}{9} = \\frac{-30}{9} = -\\frac{10}{3}$"
            },
            {
              qid: "FD_004_h05",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 0   | 2       | -1       | 5       | 3        |\n| 2   | 4       | 0        | 1       | -2       |\nLet $P(x) = f(x)g(x)$. Find $P'(0)$ and $P'(2)$, and determine whether $P$ is increasing or decreasing at each point.",
              a: "$P'(0) = (-1)(5) + (2)(3) = -5 + 6 = 1 > 0$ (increasing).\n$P'(2) = (0)(1) + (4)(-2) = 0 - 8 = -8 < 0$ (decreasing)."
            }
          ]
        }
,

    {
          pt_id: "FD_005",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Quotient Rule",
          pt: "Quotient rule differentiation of simple functions",
          testing: "Testing: (u/v)' = (u'v - uv') / v²",
          reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
          easy: [
            {
              qid: "FD_005_e01",
              q: "Differentiate $y = \\frac{x^2}{x + 3}$.",
              a: "$\\frac{x \\left(x + 6\\right)}{\\left(x + 3\\right)^{2}}$"
            },
            {
              qid: "FD_005_e02",
              q: "Differentiate $y = \\frac{2x + 1}{x - 1}$.",
              a: "$- \\frac{3}{\\left(x - 1\\right)^{2}}$"
            },
            {
              qid: "FD_005_e03",
              q: "Differentiate $y = \\frac{x^3}{x^2 + 1}$.",
              a: "$\\frac{x^{2} \\left(x^{2} + 3\\right)}{\\left(x^{2} + 1\\right)^{2}}$"
            }
          ],
          medium: [
            {
              qid: "FD_005_m01",
              q: "Differentiate $y = \\frac{e^x}{x^2}$.",
              a: "$\\frac{\\left(x - 2\\right) e^{x}}{x^{3}}$"
            },
            {
              qid: "FD_005_m02",
              q: "Differentiate $y = \\frac{x^2 - 1}{x^2 + 1}$.",
              a: "$\\frac{4 x}{\\left(x^{2} + 1\\right)^{2}}$"
            },
            {
              qid: "FD_005_m03",
              q: "Differentiate $y = \\frac{\\sqrt{x}}{x + 4}$.",
              a: "$\\frac{4 - x}{2 \\sqrt{x} \\left(x + 4\\right)^{2}}$"
            },
            {
              qid: "FD_005_m04",
              q: "Differentiate $y = \\frac{3x + 2}{e^x}$.",
              a: "$\\left(1 - 3 x\\right) e^{- x}$"
            },
            {
              qid: "FD_005_m05",
              q: "Differentiate $y = \\frac{x}{\\sqrt{x + 1}}$.",
              a: "$\\frac{x + 2}{2 \\left(x + 1\\right)^{\\frac{3}{2}}}$"
            }
          ],
          hard: [
            {
              qid: "FD_005_h01",
              q: "Show that $\\frac{d}{dx}\\left(\\frac{\\sin x}{\\cos x}\\right) = \\frac{1}{\\cos^2 x}$.",
              a: "$\\frac{\\cos x \\cdot \\cos x - \\sin x(-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$"
            },
            {
              qid: "FD_005_h02",
              q: "Differentiate $y = \\frac{e^{2x}}{x^2 + 3}$.",
              a: "$\\frac{2 \\left(x^{2} - x + 3\\right) e^{2 x}}{\\left(x^{2} + 3\\right)^{2}}$"
            },
            {
              qid: "FD_005_h03",
              q: "Differentiate $y = \\frac{x^2 + 1}{\\sin x}$.",
              a: "$\\frac{2 x \\sin{\\left(x \\right)} - \\left(x^{2} + 1\\right) \\cos{\\left(x \\right)}}{\\sin^{2}{\\left(x \\right)}}$"
            },
            {
              qid: "FD_005_h04",
              q: "Differentiate $y = \\frac{\\ln x}{x^2}$.",
              a: "$\\frac{1 - 2 \\log{\\left(x \\right)}}{x^{3}}$"
            },
            {
              qid: "FD_005_h05",
              q: "Differentiate $y = \\frac{2x - \\sin x}{x + \\cos x}$.",
              a: "$\\frac{2 x \\sin{\\left(x \\right)} - x \\cos{\\left(x \\right)} + \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)} - 1}{\\left(x + \\cos{\\left(x \\right)}\\right)^{2}}$"
            }
          ]
        }
,

    {
          pt_id: "FD_NEW_05",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Calculating Second Derivatives",
          pt: "Finding coordinates where the second derivative equals a given value",
          testing: "Differentiate twice, set f''(x) = value, solve, find y-coordinates",
          reason_bank: ["differentiation_error", "algebra_slip", "substitution_error", "sign_error", "not_sure"],
          easy: [
            {
              qid: "FD_NEW_05_e01",
              q: "Find the coordinates on $y = x^3 - 6x$ where $f''(x) = 12$.",
              a: "$f'(x) = 3x^2 - 6$. $f''(x) = 6x$. $6x = 12 \\Rightarrow x = 2$. $y = 8 - 12 = -4$. Point: $(2, -4)$"
            },
            {
              qid: "FD_NEW_05_e02",
              q: "Find where $f''(x) = 0$ for $y = x^3 - 3x^2 + 1$.",
              a: "$f'(x) = 3x^2 - 6x$. $f''(x) = 6x - 6 = 0 \\Rightarrow x = 1$. $y = -1$. Point of inflection at $(1, -1)$"
            },
            {
              qid: "FD_NEW_05_e03",
              q: "Find where $f''(x) = 18$ for $y = x^4 + 2x$.",
              a: "$f'(x) = 4x^3 + 2$. $f''(x) = 12x^2 = 18 \\Rightarrow x^2 = 1.5 \\Rightarrow x = \\pm\\sqrt{1.5}$"
            }
          ],
          medium: [
            {
              qid: "FD_NEW_05_m01",
              q: "Find the coordinates on $y = 3x^4 + 2$ where $f''(x) = 9$.",
              a: "$f'(x) = 12x^3$. $f''(x) = 36x^2 = 9$. $x^2 = \\frac{1}{4}$. $x = \\pm\\frac{1}{2}$.\n$y = 3(\\frac{1}{16}) + 2 = \\frac{35}{16}$. Points: $(\\frac{1}{2}, \\frac{35}{16})$ and $(-\\frac{1}{2}, \\frac{35}{16})$"
            },
            {
              qid: "FD_NEW_05_m02",
              q: "For $f(x) = e^{2x}$, find $x$ where $f''(x) = 8$.",
              a: "$f'(x) = 2e^{2x}$. $f''(x) = 4e^{2x} = 8 \\Rightarrow e^{2x} = 2 \\Rightarrow 2x = \\ln 2 \\Rightarrow x = \\frac{\\ln 2}{2}$"
            }
          ],
          hard: [
            {
              qid: "FD_NEW_05_h01",
              q: "For $f(x) = x^2 e^x$, find where $f''(x) = 0$.",
              a: "$f'(x) = e^x(2x + x^2)$. $f''(x) = e^x(2 + 4x + x^2) = e^x(x+2)^2 - 2e^x$.\nUsing product rule carefully: $f''(x) = e^x(x^2 + 4x + 2) = 0$.\nSince $e^x \\neq 0$: $x = \\frac{-4 \\pm \\sqrt{8}}{2} = -2 \\pm \\sqrt{2}$"
            }
          ]
        }
,

    {
          pt_id: "FD_006",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Quotient Rule",
          pt: "Using a table of values to calculate the derivative of the quotient of two functions at a given point",
          testing: "Testing: $\\left(\\frac{f}{g}\\right)'(a) = \\frac{f'(a)g(a) - f(a)g'(a)}{[g(a)]^2}$",
          reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
          easy: [
            {
              qid: "FD_006_e01",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $2$ | $6$ | $3$ | $4$ | $-2$ |",
              a: "$\\frac{(3)(4) - (6)(-2)}{4^2} = \\frac{24}{16} = \\frac{3}{2}$"
            },
            {
              qid: "FD_006_e02",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $1$ | $4$ | $2$ | $2$ | $1$ |",
              a: "$\\frac{(2)(2) - (4)(1)}{2^2} = \\frac{0}{4} = 0$"
            },
            {
              qid: "FD_006_e03",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 3$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $3$ | $9$ | $6$ | $3$ | $1$ |",
              a: "$\\frac{(6)(3) - (9)(1)}{3^2} = \\frac{9}{9} = 1$"
            }
          ],
          medium: [
            {
              qid: "FD_006_m01",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 0$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $0$ | $-1$ | $4$ | $2$ | $-3$ |",
              a: "$\\frac{(4)(2) - (-1)(-3)}{2^2} = \\frac{5}{4} = \\frac{5}{4}$"
            },
            {
              qid: "FD_006_m02",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = -1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $-1$ | $3$ | $-2$ | $5$ | $4$ |",
              a: "$\\frac{(-2)(5) - (3)(4)}{5^2} = \\frac{-22}{25} = - \\frac{22}{25}$"
            },
            {
              qid: "FD_006_m03",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 4$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $4$ | $10$ | $-1$ | $2$ | $3$ |",
              a: "$\\frac{(-1)(2) - (10)(3)}{2^2} = \\frac{-32}{4} = -8$"
            },
            {
              qid: "FD_006_m04",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $2$ | $0$ | $5$ | $-3$ | $2$ |",
              a: "$\\frac{(5)(-3) - (0)(2)}{-3^2} = \\frac{-15}{9} = - \\frac{5}{3}$"
            },
            {
              qid: "FD_006_m05",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $1$ | $-2$ | $7$ | $4$ | $-1$ |",
              a: "$\\frac{(7)(4) - (-2)(-1)}{4^2} = \\frac{26}{16} = \\frac{13}{8}$"
            }
          ],
          hard: [
            {
              qid: "FD_006_h01",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 3$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $3$ | $-4$ | $5$ | $-2$ | $6$ |",
              a: "$\\frac{(5)(-2) - (-4)(6)}{-2^2} = \\frac{14}{4} = \\frac{7}{2}$"
            },
            {
              qid: "FD_006_h02",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 0$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $0$ | $1$ | $-3$ | $-1$ | $2$ |",
              a: "$\\frac{(-3)(-1) - (1)(2)}{-1^2} = \\frac{1}{1} = 1$"
            },
            {
              qid: "FD_006_h03",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = -2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $-2$ | $8$ | $-3$ | $4$ | $7$ |",
              a: "$\\frac{(-3)(4) - (8)(7)}{4^2} = \\frac{-68}{16} = - \\frac{17}{4}$"
            },
            {
              qid: "FD_006_h04",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 5$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $5$ | $12$ | $-4$ | $6$ | $1$ |",
              a: "$\\frac{(-4)(6) - (12)(1)}{6^2} = \\frac{-36}{36} = -1$"
            },
            {
              qid: "FD_006_h05",
              q: "Using the table below, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| $1$ | $-5$ | $10$ | $3$ | $-4$ |",
              a: "$\\frac{(10)(3) - (-5)(-4)}{3^2} = \\frac{10}{9} = \\frac{10}{9}$"
            }
          ]
        }
,

    {
          pt_id: "FD_NEW_06",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Finding global maximum and minimum on a closed interval by checking stationary points AND endpoints",
          testing: "Find all critical points, evaluate at endpoints, compare all values",
          reason_bank: ["forgot_endpoints", "differentiation_error", "algebra_slip", "comparison_error", "not_sure"],
          easy: [
            {
              qid: "FD_NEW_06_e01",
              q: "Find the global maximum and minimum of $f(x) = x^2 - 4x + 3$ on $[0, 5]$.",
              a: "$f'(x) = 2x - 4 = 0 \\Rightarrow x = 2$. $f(2) = -1$.\nEndpoints: $f(0) = 3$, $f(5) = 8$.\nGlobal min: $-1$ at $x = 2$. Global max: $8$ at $x = 5$"
            },
            {
              qid: "FD_NEW_06_e02",
              q: "Find the global maximum of $f(x) = -x^2 + 6x$ on $[0, 4]$.",
              a: "$f'(x) = -2x + 6 = 0 \\Rightarrow x = 3$. $f(3) = 9$.\nEndpoints: $f(0) = 0$, $f(4) = 8$.\nGlobal max: $9$ at $x = 3$"
            },
            {
              qid: "FD_NEW_06_e03",
              q: "Find the global maximum of $f(x) = -x^2 + 4x$ on $[3, 5]$.",
              a: "$f'(x) = -2x + 4 = 0 \\Rightarrow x = 2$. But $x = 2$ is OUTSIDE $[3, 5]$.\nEndpoints only: $f(3) = 3$, $f(5) = -5$.\nGlobal max: $3$ at $x = 3$ (endpoint!)"
            }
          ],
          medium: [
            {
              qid: "FD_NEW_06_m01",
              q: "Find the global maximum of $f(x) = (x-1)(x^2-16)$ on $[-4, 4]$.",
              a: "$f'(x) = (x^2-16) + (x-1)(2x) = 3x^2 - 2x - 16$. Setting $= 0$: $x = \\frac{8}{3}$ or $x = -2$.\n$f(-2) = (-3)(4-16) = 36$. $f(8/3) \\approx -20.4$.\nEndpoints: $f(-4) = 0$, $f(4) = 0$.\nGlobal max: $36$ at $x = -2$"
            },
            {
              qid: "FD_NEW_06_m02",
              q: "Find the global min and max of $f(x) = 2\\sin(x) + 1$ on $[0, 2\\pi]$.",
              a: "$f'(x) = 2\\cos(x) = 0 \\Rightarrow x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$.\n$f(\\pi/2) = 3$, $f(3\\pi/2) = -1$.\nEndpoints: $f(0) = 1$, $f(2\\pi) = 1$.\nGlobal max: $3$ at $x = \\pi/2$. Global min: $-1$ at $x = 3\\pi/2$"
            }
          ],
          hard: [
            {
              qid: "FD_NEW_06_h01",
              q: "Find the global maximum and minimum of $f(x) = x^4 - 4x^3 + 16x - 16$ on $[-2, 3]$.",
              a: "$f'(x) = 4x^3 - 12x^2 + 16 = 4(x^3 - 3x^2 + 4) = 4(x+1)(x-2)^2$.\nCritical: $x = -1$ and $x = 2$.\n$f(-1) = 1 + 4 - 16 - 16 = -27$. $f(2) = 16 - 32 + 32 - 16 = 0$.\nEndpoints: $f(-2) = 16 + 32 - 32 - 16 = 0$. $f(3) = 81 - 108 + 48 - 16 = 5$.\nGlobal max: $5$ at $x = 3$. Global min: $-27$ at $x = -1$"
            }
          ]
        }
,

    {
          pt_id: "FD_007",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Trigonometric Functions",
          pt: "Differentiation involving the product of functions with one including a trigonometric function",
          testing: "Testing: Product rule where one factor is a trigonometric function",
          reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
          easy: [
            {
              qid: "FD_007_e01",
              q: "Differentiate $y = x\\sin(x)$.",
              a: "$y' = \\sin(x) + x\\cos(x)$"
            },
            {
              qid: "FD_007_e02",
              q: "Differentiate $y = x^2\\cos(x)$.",
              a: "$y' = 2x\\cos(x) - x^2\\sin(x) = x(2\\cos(x) - x\\sin(x))$"
            },
            {
              qid: "FD_007_e03",
              q: "Differentiate $y = 3x\\cos(x)$.",
              a: "$y' = 3\\cos(x) - 3x\\sin(x) = 3(\\cos(x) - x\\sin(x))$"
            }
          ],
          medium: [
            {
              qid: "FD_007_m01",
              q: "Differentiate $y = x^3\\sin(x)$.",
              a: "$y' = 3x^2\\sin(x) + x^3\\cos(x) = x^2(3\\sin(x) + x\\cos(x))$"
            },
            {
              qid: "FD_007_m02",
              q: "Differentiate $y = e^x\\sin(x)$.",
              a: "$y' = e^x\\sin(x) + e^x\\cos(x) = e^x(\\sin(x) + \\cos(x))$"
            },
            {
              qid: "FD_007_m03",
              q: "Differentiate $y = e^x\\sin(3x)$.",
              a: "$y' = e^x\\sin(3x) + 3e^x\\cos(3x) = e^x(\\sin(3x) + 3\\cos(3x))$"
            },
            {
              qid: "FD_007_m04",
              q: "Differentiate $y = (x+1)\\cos(x)$.",
              a: "$y' = \\cos(x) - (x+1)\\sin(x)$"
            },
            {
              qid: "FD_007_m05",
              q: "Differentiate $y = x\\cos(2x)$.",
              a: "$y' = \\cos(2x) - 2x\\sin(2x)$"
            }
          ],
          hard: [
            {
              qid: "FD_007_h01",
              q: "Differentiate $y = x^2\\sin(x)\\cos(x)$.",
              a: "Using $y = \\frac{x^2}{2}\\sin(2x)$:\n$y' = x\\sin(2x) + x^2\\cos(2x)$"
            },
            {
              qid: "FD_007_h02",
              q: "Differentiate $y = e^x\\cos(x)$.",
              a: "$y' = e^x\\cos(x) - e^x\\sin(x) = e^x(\\cos(x) - \\sin(x))$"
            },
            {
              qid: "FD_007_h03",
              q: "Differentiate $y = \\sqrt{x}\\sin(x)$.",
              a: "$y' = \\frac{\\sin(x)}{2\\sqrt{x}} + \\sqrt{x}\\cos(x) = \\frac{\\sin(x) + 2x\\cos(x)}{2\\sqrt{x}}$"
            },
            {
              qid: "FD_007_h04",
              q: "Differentiate $y = (2x-1)^2\\sin(x)$.",
              a: "$y' = 4(2x-1)\\sin(x) + (2x-1)^2\\cos(x) = (2x-1)(4\\sin(x) + (2x-1)\\cos(x))$"
            },
            {
              qid: "FD_007_h05",
              q: "Differentiate $y = e^{-x}\\sin(2x)$.",
              a: "$y' = -e^{-x}\\sin(2x) + 2e^{-x}\\cos(2x) = e^{-x}(2\\cos(2x) - \\sin(2x))$"
            }
          ]
        }
,

    {
          pt_id: "FD_NEW_07",
          topic: "Differentiation",
          subtopic: "Small Increments",
          concept: "Basic Use of Small Increments Formula",
          pt: "Using increments formula to approximate percentage change in one quantity given percentage change in another",
          testing: "δy/y ≈ (dy/dx × δx) / y with cancellation to get percentage",
          reason_bank: ["wrong_formula", "substitution_error", "simplification_error", "forgot_percentage_conversion", "not_sure"],
          easy: [
            {
              qid: "FD_NEW_07_e01",
              q: "A spherical balloon has surface area $S = 4\\pi r^2$. Find the approximate percentage increase in $S$ when $r$ increases by 1%.",
              a: "$\\frac{dS}{dr} = 8\\pi r$. $\\delta r = 0.01r$.\n$\\frac{\\delta S}{S} \\approx \\frac{8\\pi r \\times 0.01r}{4\\pi r^2} = \\frac{0.08\\pi r^2}{4\\pi r^2} = 0.02 = 2\\%$"
            },
            {
              qid: "FD_NEW_07_e02",
              q: "A cube has volume $V = x^3$. Find the approximate percentage change in $V$ when $x$ increases by 2%.",
              a: "$\\frac{dV}{dx} = 3x^2$. $\\delta x = 0.02x$.\n$\\frac{\\delta V}{V} \\approx \\frac{3x^2 \\times 0.02x}{x^3} = \\frac{0.06x^3}{x^3} = 0.06 = 6\\%$"
            },
            {
              qid: "FD_NEW_07_e03",
              q: "Find the approximate percentage change in the volume of a cylinder (height 10cm) when the radius increases by 2%.",
              a: "$V = 10\\pi r^2$. $\\frac{dV}{dr} = 20\\pi r$. $\\delta r = 0.02r$.\n$\\frac{\\delta V}{V} \\approx \\frac{20\\pi r \\times 0.02r}{10\\pi r^2} = 0.04 = 4\\%$"
            }
          ],
          medium: [
            {
              qid: "FD_NEW_07_m01",
              q: "A solid cone has fixed height 20cm and volume $V = \\frac{1}{3}\\pi r^2(20) = \\frac{20\\pi r^2}{3}$. Find the approximate percentage change in $V$ for a 0.5% increase in base radius.",
              a: "$\\frac{dV}{dr} = \\frac{40\\pi r}{3}$. $\\delta r = 0.005r$.\n$\\frac{\\delta V}{V} \\approx \\frac{\\frac{40\\pi r}{3} \\times 0.005r}{\\frac{20\\pi r^2}{3}} = \\frac{0.2\\pi r^2/3}{20\\pi r^2/3} = 0.01 = 1\\%$"
            },
            {
              qid: "FD_NEW_07_m02",
              q: "Given $y = \\frac{1}{\\sqrt{x}}$, find the percentage change in $y$ when $x$ increases by 0.8%.",
              a: "$y = x^{-1/2}$. $\\frac{dy}{dx} = -\\frac{1}{2}x^{-3/2}$. $\\delta x = 0.008x$.\n$\\frac{\\delta y}{y} \\approx \\frac{-\\frac{1}{2}x^{-3/2} \\times 0.008x}{x^{-1/2}} = \\frac{-0.004x^{-1/2}}{x^{-1/2}} = -0.004 = -0.4\\%$.\n$y$ decreases by approximately 0.4%."
            },
            {
              qid: "FD_NEW_07_m03",
              q: "Use the increments formula to approximate $\\sqrt{99}$. (Hint: use $f(x) = \\sqrt{x}$ near $x = 100$.)",
              a: "$f(x) = \\sqrt{x}$. $f'(x) = \\frac{1}{2\\sqrt{x}}$.\nAt $x = 100$: $f(100) = 10$, $f'(100) = 0.05$.\n$\\delta x = -1$. $\\delta y \\approx 0.05 \\times (-1) = -0.05$.\n$\\sqrt{99} \\approx 10 - 0.05 = 9.95$"
            }
          ],
          hard: [
            {
              qid: "FD_NEW_07_h01",
              q: "The area of a circle changes from 300 cm$^2$ to 302 cm$^2$. Use the increments formula to approximate the change in radius.",
              a: "$A = \\pi r^2$. $\\frac{dA}{dr} = 2\\pi r$. When $A = 300$: $r = \\sqrt{\\frac{300}{\\pi}} \\approx 9.772$.\n$\\delta A = 2$. $\\delta r \\approx \\frac{\\delta A}{\\frac{dA}{dr}} = \\frac{2}{2\\pi(9.772)} \\approx 0.0326$ cm"
            }
          ]
        }
,

    {
          pt_id: "FD_008",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Trigonometric Functions",
          pt: "Differentiation involving the quotient of functions with one including a trigonometric function",
          testing: "Testing: Quotient rule where one factor is a trigonometric function",
          reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
          easy: [
            {
              qid: "FD_008_e01",
              q: "Differentiate $y = \\frac{\\sin(x)}{x}$.",
              a: "$y' = \\frac{x\\cos(x) - \\sin(x)}{x^2}$"
            },
            {
              qid: "FD_008_e02",
              q: "Differentiate $y = \\frac{x}{\\cos(x)}$.",
              a: "$y' = \\frac{\\cos(x) + x\\sin(x)}{\\cos^2(x)}$"
            },
            {
              qid: "FD_008_e03",
              q: "Differentiate $y = \\frac{\\cos(x)}{x}$.",
              a: "$y' = \\frac{-x\\sin(x) - \\cos(x)}{x^2}$"
            }
          ],
          medium: [
            {
              qid: "FD_008_m01",
              q: "Differentiate $y = \\frac{\\sin(x)}{x + 1}$.",
              a: "$y' = \\frac{(x+1)\\cos(x) - \\sin(x)}{(x+1)^2}$"
            },
            {
              qid: "FD_008_m02",
              q: "Differentiate $y = \\frac{x^2}{\\sin(x)}$.",
              a: "$y' = \\frac{2x\\sin(x) - x^2\\cos(x)}{\\sin^2(x)} = \\frac{x(2\\sin(x) - x\\cos(x))}{\\sin^2(x)}$"
            },
            {
              qid: "FD_008_m03",
              q: "Differentiate $y = \\frac{\\cos(x)}{1 + \\sin(x)}$.",
              a: "$y' = \\frac{-\\sin(x)(1+\\sin(x)) - \\cos^2(x)}{(1+\\sin(x))^2} = \\frac{-\\sin(x) - 1}{(1+\\sin(x))^2} = \\frac{-1}{1+\\sin(x)}$"
            },
            {
              qid: "FD_008_m04",
              q: "Differentiate $y = \\frac{e^x}{\\cos(x)}$.",
              a: "$y' = \\frac{e^x\\cos(x) + e^x\\sin(x)}{\\cos^2(x)} = \\frac{e^x(\\cos(x) + \\sin(x))}{\\cos^2(x)}$"
            },
            {
              qid: "FD_008_m05",
              q: "Differentiate $y = \\frac{\\sin(x)}{e^x}$.",
              a: "$y' = \\frac{e^x\\cos(x) - e^x\\sin(x)}{e^{2x}} = \\frac{\\cos(x) - \\sin(x)}{e^x}$"
            }
          ],
          hard: [
            {
              qid: "FD_008_h01",
              q: "Show that $\\frac{d}{dx}(\\frac{\\sin(x)}{\\cos(x)}) = \\frac{1}{\\cos^2(x)}$.",
              a: "$\\frac{\\cos(x) \\cdot \\cos(x) - \\sin(x)(-\\sin(x))}{\\cos^2(x)} = \\frac{\\cos^2(x) + \\sin^2(x)}{\\cos^2(x)} = \\frac{1}{\\cos^2(x)}$ $\\checkmark$"
            },
            {
              qid: "FD_008_h02",
              q: "Differentiate $y = \\frac{x\\sin(x)}{\\cos(x)}$.",
              a: "$y = x\\tan(x)$. Using product rule on $x\\tan(x)$:\n$y' = \\tan(x) + \\frac{x}{\\cos^2(x)}$"
            },
            {
              qid: "FD_008_h03",
              q: "Differentiate $y = \\frac{\\sin(2x)}{x^2 + 1}$.",
              a: "$y' = \\frac{2(x^2+1)\\cos(2x) - 2x\\sin(2x)}{(x^2+1)^2}$"
            },
            {
              qid: "FD_008_h04",
              q: "Show that $\\frac{d}{dx}(\\frac{\\cos(x)}{\\sin(x)}) = -\\frac{1}{\\sin^2(x)}$.",
              a: "$\\frac{-\\sin^2(x) - \\cos^2(x)}{\\sin^2(x)} = \\frac{-1}{\\sin^2(x)}$ $\\checkmark$"
            },
            {
              qid: "FD_008_h05",
              q: "Differentiate $y = \\frac{1 + \\cos(x)}{\\sin(x)}$.",
              a: "$y' = \\frac{-\\sin^2(x) - (1+\\cos(x))\\cos(x)}{\\sin^2(x)} = \\frac{-\\sin^2(x) - \\cos(x) - \\cos^2(x)}{\\sin^2(x)} = \\frac{-1 - \\cos(x)}{\\sin^2(x)}$"
            }
          ]
        }
,

    {
          pt_id: "FD_NEW_08",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Calculating Second Derivatives",
          pt: "Finding f''(x) when f'(x) is a product of functions, then evaluating at exact trig values",
          testing: "Product rule applied to a derivative expression, exact value evaluation",
          reason_bank: ["wrong_rule", "trig_value_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_NEW_08_e01",
              q: "Given $f'(x) = x \\cdot e^x$, find $f''(x)$ and evaluate at $x = 0$.",
              a: "$f''(x) = e^x + xe^x = e^x(1 + x)$. $f''(0) = 1(1) = 1$"
            },
            {
              qid: "FD_NEW_08_e02",
              q: "Given $g'(x) = x^2 \\cos(x)$, find $g''(x)$ and evaluate at $x = \\frac{\\pi}{2}$.",
              a: "Product rule: $g''(x) = 2x\\cos(x) + x^2(-\\sin(x)) = 2x\\cos(x) - x^2\\sin(x)$.\nAt $x = \\frac{\\pi}{2}$: $g'' = 2 \\cdot \\frac{\\pi}{2} \\cdot 0 - \\frac{\\pi^2}{4} \\cdot 1 = -\\frac{\\pi^2}{4}$"
            }
          ],
          medium: [
            {
              qid: "FD_NEW_08_m01",
              q: "Given $g'(x) = e^{2x}\\sin(3x)$, find a simplified value for $g''\\left(\\frac{\\pi}{2}\\right)$.",
              a: "Product rule: $g''(x) = 2e^{2x}\\sin(3x) + 3e^{2x}\\cos(3x)$.\nAt $x = \\frac{\\pi}{2}$: $\\sin(\\frac{3\\pi}{2}) = -1$, $\\cos(\\frac{3\\pi}{2}) = 0$.\n$g''(\\frac{\\pi}{2}) = 2e^{\\pi}(-1) + 3e^{\\pi}(0) = -2e^{\\pi}$"
            },
            {
              qid: "FD_NEW_08_m02",
              q: "Given $h'(x) = e^{-x}\\cos(x)$, find $h''(0)$.",
              a: "$h''(x) = -e^{-x}\\cos(x) + e^{-x}(-\\sin(x)) = -e^{-x}(\\cos(x) + \\sin(x))$.\n$h''(0) = -1(1 + 0) = -1$"
            }
          ],
          hard: [
            {
              qid: "FD_NEW_08_h01",
              q: "Given $f'(x) = (2x-1)e^{3x}$, find $f''(x)$ and determine where $f''(x) = 0$.",
              a: "$f''(x) = 2e^{3x} + 3(2x-1)e^{3x} = e^{3x}(2 + 6x - 3) = e^{3x}(6x - 1)$.\n$f''(x) = 0$ when $6x - 1 = 0$, i.e. $x = \\frac{1}{6}$ (since $e^{3x} \\neq 0$)"
            }
          ]
        }
,

    {
          pt_id: "FD_009",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Trigonometric Functions",
          pt: "Differentiation of composite functions — trigonometric function as inside function",
          testing: "Testing: Chain rule with trig on the inside, e.g. $f(\\sin(x))$",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_009_e01",
              q: "Differentiate $y = e^{\\sin(x)}$.",
              a: "$y' = \\cos(x) \\cdot e^{\\sin(x)}$"
            },
            {
              qid: "FD_009_e02",
              q: "Differentiate $y = \\cos^3(x)$.",
              a: "$y' = -3\\cos^2(x)\\sin(x)$"
            },
            {
              qid: "FD_009_e03",
              q: "Differentiate $y = \\sin^4(x)$.",
              a: "$y' = 4\\sin^3(x)\\cos(x)$"
            }
          ],
          medium: [
            {
              qid: "FD_009_m01",
              q: "Differentiate $y = \\sqrt{\\sin(x)}$.",
              a: "$y' = \\frac{\\cos(x)}{2\\sqrt{\\sin(x)}}$"
            },
            {
              qid: "FD_009_m02",
              q: "Differentiate $y = \\ln(\\cos(x))$.",
              a: "$y' = -\\frac{\\sin(x)}{\\cos(x)} = -\\tan(x)$"
            },
            {
              qid: "FD_009_m03",
              q: "Differentiate $y = e^{\\cos(x)}$.",
              a: "$y' = -\\sin(x) \\cdot e^{\\cos(x)}$"
            },
            {
              qid: "FD_009_m04",
              q: "Differentiate $y = \\frac{1}{\\cos(x)}$.",
              a: "$y = (\\cos(x))^{-1}$. $y' = \\frac{\\sin(x)}{\\cos^2(x)}$"
            },
            {
              qid: "FD_009_m05",
              q: "Differentiate $y = \\ln(\\sin(x))$.",
              a: "$y' = \\frac{\\cos(x)}{\\sin(x)} = \\cot(x)$"
            }
          ],
          hard: [
            {
              qid: "FD_009_h01",
              q: "Differentiate $y = \\frac{1}{\\sin^2(x)}$.",
              a: "$y = (\\sin(x))^{-2}$. $y' = -2\\sin^{-3}(x)\\cos(x) = \\frac{-2\\cos(x)}{\\sin^3(x)}$"
            },
            {
              qid: "FD_009_h02",
              q: "Differentiate $y = e^{\\tan(x)}$.",
              a: "$y' = \\frac{e^{\\tan(x)}}{\\cos^2(x)}$"
            },
            {
              qid: "FD_009_h03",
              q: "Differentiate $y = \\cos^3(2x)$.",
              a: "$y' = 3\\cos^2(2x) \\cdot (-2\\sin(2x)) = -6\\cos^2(2x)\\sin(2x)$"
            },
            {
              qid: "FD_009_h04",
              q: "Differentiate $y = \\sqrt{1 + \\sin(x)}$.",
              a: "$y' = \\frac{\\cos(x)}{2\\sqrt{1 + \\sin(x)}}$"
            },
            {
              qid: "FD_009_h05",
              q: "Differentiate $y = \\ln(\\sin^2(x) + 1)$.",
              a: "$y' = \\frac{2\\sin(x)\\cos(x)}{\\sin^2(x) + 1} = \\frac{\\sin(2x)}{\\sin^2(x) + 1}$"
            }
          ]
        }
,

    {
          pt_id: "FD_010",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Trigonometric Functions",
          pt: "Differentiation of composite functions — trigonometric function as outside function",
          testing: "Testing: Chain rule with trig on the outside, e.g. $\\sin(f(x))$",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_010_e01",
              q: "Differentiate $y = \\sin(3x + 2)$.",
              a: "$y' = 3\\cos(3x + 2)$"
            },
            {
              qid: "FD_010_e02",
              q: "Differentiate $y = \\cos(x^2)$.",
              a: "$y' = -2x\\sin(x^2)$"
            },
            {
              qid: "FD_010_e03",
              q: "Differentiate $y = \\sin(5x - 1)$.",
              a: "$y' = 5\\cos(5x - 1)$"
            }
          ],
          medium: [
            {
              qid: "FD_010_m01",
              q: "Differentiate $y = \\sin(x^3)$.",
              a: "$y' = 3x^2\\cos(x^3)$"
            },
            {
              qid: "FD_010_m02",
              q: "Differentiate $y = \\cos(e^x)$.",
              a: "$y' = -e^x\\sin(e^x)$"
            },
            {
              qid: "FD_010_m03",
              q: "Differentiate $y = \\sin(\\sqrt{x})$.",
              a: "$y' = \\frac{\\cos(\\sqrt{x})}{2\\sqrt{x}}$"
            },
            {
              qid: "FD_010_m04",
              q: "Differentiate $y = \\cos(2x^2 - x)$.",
              a: "$y' = -(4x - 1)\\sin(2x^2 - x)$"
            },
            {
              qid: "FD_010_m05",
              q: "Differentiate $y = \\sin(\\ln(x))$.",
              a: "$y' = \\frac{\\cos(\\ln(x))}{x}$"
            }
          ],
          hard: [
            {
              qid: "FD_010_h01",
              q: "Differentiate $y = \\sin(\\frac{1}{x})$.",
              a: "$y' = -\\frac{\\cos(1/x)}{x^2}$"
            },
            {
              qid: "FD_010_h02",
              q: "Differentiate $y = \\cos(\\sin(x))$.",
              a: "$y' = -\\cos(x)\\sin(\\sin(x))$"
            },
            {
              qid: "FD_010_h03",
              q: "Differentiate $y = \\sin(x^2 + 3x)$.",
              a: "$y' = (2x + 3)\\cos(x^2 + 3x)$"
            },
            {
              qid: "FD_010_h04",
              q: "Differentiate $y = \\cos((2x+1)^3)$.",
              a: "$y' = -6(2x+1)^2\\sin((2x+1)^3)$"
            },
            {
              qid: "FD_010_h05",
              q: "Differentiate $y = \\sin(e^{2x})$.",
              a: "$y' = 2e^{2x}\\cos(e^{2x})$"
            }
          ]
        }
,

    {
          pt_id: "FD_011",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Trigonometric Functions",
          pt: "Differentiation of simple trigonometric functions",
          testing: "Testing: Derivatives of $\\sin$, $\\cos$, $\\tan$ with chain rule",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_011_e01",
              q: "Differentiate $y = 2 \\sin(3 x)$.",
              a: "$y' = 6 \\cos(3 x)$"
            },
            {
              qid: "FD_011_e02",
              q: "Differentiate $y = \\sin(x) + \\cos(2 x)$.",
              a: "$y' = - 2 \\sin(2 x) + \\cos(x)$"
            },
            {
              qid: "FD_011_e03",
              q: "Differentiate $y = - 3 \\sin(x) + 5 \\cos(x)$.",
              a: "$y' = - 5 \\sin(x) - 3 \\cos(x)$"
            }
          ],
          medium: [
            {
              qid: "FD_011_m01",
              q: "Differentiate $y = 3 \\sin(2 x) + \\cos(5 x)$.",
              a: "$y' = - 5 \\sin(5 x) + 6 \\cos(2 x)$"
            },
            {
              qid: "FD_011_m02",
              q: "Differentiate $y = \\tan(3x + 1)$.",
              a: "$y' = \\frac{3}{\\cos^2(3x+1)}$"
            },
            {
              qid: "FD_011_m03",
              q: "Differentiate $y = 4 \\sin(\\frac{x}{2}) - \\cos(3 x)$.",
              a: "$y' = 3 \\sin(3 x) + 2 \\cos(\\frac{x}{2})$"
            },
            {
              qid: "FD_011_m04",
              q: "Differentiate $y = \\sin^2(x)$.",
              a: "$y' = 2\\sin(x)\\cos(x) = \\sin(2x)$"
            },
            {
              qid: "FD_011_m05",
              q: "Differentiate $y = 2\\tan(x) - \\sin(4x)$.",
              a: "$y' = \\frac{2}{\\cos^2(x)} - 4\\cos(4x)$"
            }
          ],
          hard: [
            {
              qid: "FD_011_h01",
              q: "Differentiate $y = \\cos^2(x) + \\sin^2(x)$.",
              a: "Since $\\cos^2(x) + \\sin^2(x) = 1$, we have $y' = 0$"
            },
            {
              qid: "FD_011_h02",
              q: "Differentiate $y = \\sin(2x)\\cos(2x)$.",
              a: "**Method 1:** Use identity $y = \\frac{1}{2}\\sin(4x)$, so $y' = 2\\cos(4x)$\n**Method 2 (product rule):** $y' = 2\\cos(2x)\\cos(2x) + \\sin(2x)(-2\\sin(2x)) = 2\\cos^2(2x) - 2\\sin^2(2x) = 2\\cos(4x)$"
            },
            {
              qid: "FD_011_h03",
              q: "Differentiate $y = x + \\sin(x)\\cos(x)$.",
              a: "$y' = 1 + \\cos^2(x) - \\sin^2(x) = 1 + \\cos(2x) = 2\\cos^2(x)$"
            },
            {
              qid: "FD_011_h04",
              q: "Differentiate $y = \\sin^2(3x)$.",
              a: "$y' = 2\\sin(3x) \\cdot 3\\cos(3x) = 6\\sin(3x)\\cos(3x) = 3\\sin(6x)$"
            },
            {
              qid: "FD_011_h05",
              q: "Differentiate $y = \\tan(x^2)$.",
              a: "$y' = \\frac{2x}{\\cos^2(x^2)}$"
            }
          ]
        }
,

    {
          pt_id: "FD_012",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "Trigonometric Functions",
          pt: "Finding value of a trigonometric function at a given point",
          testing: "Testing: Evaluate trig derivative at specific $x$",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_012_e01",
              q: "If $f(x) = \\sin(x)$, find $f'(\\frac{\\pi}{6})$.",
              a: "$f'(x) = \\cos(x)$. $f'(\\pi/6) = \\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}$"
            },
            {
              qid: "FD_012_e02",
              q: "If $f(x) = 2\\cos(x)$, find $f'(\\frac{\\pi}{4})$.",
              a: "$f'(x) = -2\\sin(x)$. $f'(\\pi/4) = -2 \\cdot \\frac{\\sqrt{2}}{2} = -\\sqrt{2}$"
            },
            {
              qid: "FD_012_e03",
              q: "If $f(x) = \\sin(2x)$, find $f'(\\frac{\\pi}{3})$.",
              a: "$f'(x) = 2\\cos(2x)$. $f'(\\pi/3) = 2\\cos(2\\pi/3) = 2 \\cdot (-\\frac{1}{2}) = -1$"
            }
          ],
          medium: [
            {
              qid: "FD_012_m01",
              q: "If $f(x) = 2\\sin(3x) - \\cos(x)$, find $f'(\\frac{\\pi}{6})$.",
              a: "$f'(x) = 6\\cos(3x) + \\sin(x)$. $f'(\\pi/6) = 6\\cos(\\pi/2) + \\sin(\\pi/6) = 0 + \\frac{1}{2} = \\frac{1}{2}$"
            },
            {
              qid: "FD_012_m02",
              q: "If $f(x) = x\\sin(x)$, find $f'(\\pi)$.",
              a: "$f'(x) = \\sin(x) + x\\cos(x)$. $f'(\\pi) = \\sin(\\pi) + \\pi\\cos(\\pi) = 0 + \\pi(-1) = -\\pi$"
            },
            {
              qid: "FD_012_m03",
              q: "If $f(x) = \\cos^2(x)$, find $f'(\\frac{\\pi}{4})$.",
              a: "$f'(x) = -2\\cos(x)\\sin(x) = -\\sin(2x)$. $f'(\\pi/4) = -\\sin(\\pi/2) = -1$"
            },
            {
              qid: "FD_012_m04",
              q: "If $f(x) = \\sin(x) + \\cos(2x)$, find $f'(\\frac{\\pi}{2})$.",
              a: "$f'(x) = \\cos(x) - 2\\sin(2x)$. $f'(\\pi/2) = \\cos(\\pi/2) - 2\\sin(\\pi) = 0 - 0 = 0$"
            },
            {
              qid: "FD_012_m05",
              q: "If $f(x) = 3\\cos(\\frac{x}{2})$, find $f'(\\pi)$.",
              a: "$f'(x) = -\\frac{3}{2}\\sin(\\frac{x}{2})$. $f'(\\pi) = -\\frac{3}{2}\\sin(\\pi/2) = -\\frac{3}{2}$"
            }
          ],
          hard: [
            {
              qid: "FD_012_h01",
              q: "If $f(x) = e^x\\cos(x)$, find $f'(0)$.",
              a: "$f'(x) = e^x(\\cos(x) - \\sin(x))$. $f'(0) = e^0(1 - 0) = 1$"
            },
            {
              qid: "FD_012_h02",
              q: "If $f(x) = \\frac{\\sin(x)}{x}$, find $f'(\\pi)$.",
              a: "$f'(x) = \\frac{x\\cos(x) - \\sin(x)}{x^2}$. $f'(\\pi) = \\frac{\\pi(-1) - 0}{\\pi^2} = -\\frac{1}{\\pi}$"
            },
            {
              qid: "FD_012_h03",
              q: "If $f(x) = x^2\\cos(x)$, find $f'(\\frac{\\pi}{2})$.",
              a: "$f'(x) = 2x\\cos(x) - x^2\\sin(x)$. $f'(\\pi/2) = 2 \\cdot \\frac{\\pi}{2} \\cdot 0 - \\frac{\\pi^2}{4} \\cdot 1 = -\\frac{\\pi^2}{4}$"
            },
            {
              qid: "FD_012_h04",
              q: "The displacement of a particle is $s(t) = 4\\sin(2t) + \\cos(t)$ metres. Find the velocity at $t = \\frac{\\pi}{4}$.",
              a: "$v(t) = s'(t) = 8\\cos(2t) - \\sin(t)$. $v(\\pi/4) = 8\\cos(\\pi/2) - \\sin(\\pi/4) = 0 - \\frac{\\sqrt{2}}{2} = -\\frac{\\sqrt{2}}{2}$ m/s"
            },
            {
              qid: "FD_012_h05",
              q: "If $f(x) = \\sin(x)\\cos(x)$, find $f'(\\frac{\\pi}{3})$.",
              a: "$f'(x) = \\cos^2(x) - \\sin^2(x) = \\cos(2x)$. $f'(\\pi/3) = \\cos(2\\pi/3) = -\\frac{1}{2}$"
            }
          ]
        }
,

    {
          pt_id: "FD_013",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "e Functions",
          pt: "Differentiation involving the product of functions with one including an e function",
          testing: "Testing: Product rule with exponential factor",
          reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
          easy: [
            {
              qid: "FD_013_e01",
              q: "Differentiate $y = xe^x$.",
              a: "$y' = e^x + xe^x = e^x(1 + x)$"
            },
            {
              qid: "FD_013_e02",
              q: "Differentiate $y = x^2 e^x$.",
              a: "$y' = 2xe^x + x^2 e^x = xe^x(2 + x)$"
            },
            {
              qid: "FD_013_e03",
              q: "Differentiate $y = (x+3)e^{-x}$.",
              a: "$y' = e^{-x} - (x+3)e^{-x} = e^{-x}(1 - x - 3) = -(x+2)e^{-x}$"
            }
          ],
          medium: [
            {
              qid: "FD_013_m01",
              q: "Differentiate $y = x^3 e^{-x}$.",
              a: "$y' = 3x^2 e^{-x} - x^3 e^{-x} = x^2 e^{-x}(3 - x)$"
            },
            {
              qid: "FD_013_m02",
              q: "Differentiate $y = (2x+1)e^{4x}$.",
              a: "$y' = 2e^{4x} + 4(2x+1)e^{4x} = e^{4x}(8x + 6) = 2e^{4x}(4x + 3)$"
            },
            {
              qid: "FD_013_m03",
              q: "Differentiate $y = (x^2 - 1)e^{2x}$.",
              a: "$y' = 2xe^{2x} + 2(x^2-1)e^{2x} = 2e^{2x}(x^2 + x - 1)$"
            },
            {
              qid: "FD_013_m04",
              q: "Differentiate $y = \\sqrt{x} \\cdot e^x$.",
              a: "$y' = \\frac{e^x}{2\\sqrt{x}} + \\sqrt{x} \\cdot e^x = e^x(\\frac{1}{2\\sqrt{x}} + \\sqrt{x}) = \\frac{e^x(2x + 1)}{2\\sqrt{x}}$"
            },
            {
              qid: "FD_013_m05",
              q: "Differentiate $y = (3x - 2)e^{-3x}$.",
              a: "$y' = 3e^{-3x} - 3(3x-2)e^{-3x} = e^{-3x}(3 - 9x + 6) = 3e^{-3x}(3 - 3x) = 9(1-x)e^{-3x}$"
            }
          ],
          hard: [
            {
              qid: "FD_013_h01",
              q: "Differentiate $y = xe^{x^2}$.",
              a: "$y' = e^{x^2} + 2x^2 e^{x^2} = e^{x^2}(1 + 2x^2)$"
            },
            {
              qid: "FD_013_h02",
              q: "Find the gradient of $y = x^2 e^{3x}$ at $x = 0$.",
              a: "$y' = 2xe^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$. At $x = 0$: $y' = 0$"
            },
            {
              qid: "FD_013_h03",
              q: "Find the coordinates of the stationary point of $y = xe^{-x}$.",
              a: "$y' = e^{-x} - xe^{-x} = e^{-x}(1 - x) = 0 \\Rightarrow x = 1$. $y(1) = e^{-1}$. Stationary point: $(1, e^{-1})$"
            },
            {
              qid: "FD_013_h04",
              q: "Differentiate $y = (x^2 + 2x)e^{-x}$.",
              a: "$y' = (2x+2)e^{-x} - (x^2+2x)e^{-x} = e^{-x}(2x + 2 - x^2 - 2x) = e^{-x}(2 - x^2)$"
            },
            {
              qid: "FD_013_h05",
              q: "Differentiate $y = e^x\\ln(x)$.",
              a: "$y' = e^x\\ln(x) + \\frac{e^x}{x} = e^x(\\ln(x) + \\frac{1}{x})$"
            }
          ]
        }
,

    {
          pt_id: "FD_014",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "e Functions",
          pt: "Differentiation involving the quotient of functions with one including an e function",
          testing: "Testing: Quotient rule with exponential in numerator or denominator",
          reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
          easy: [
            {
              qid: "FD_014_e01",
              q: "Differentiate $y = \\frac{e^x}{x}$.",
              a: "$y' = \\frac{xe^x - e^x}{x^2} = \\frac{e^x(x - 1)}{x^2}$"
            },
            {
              qid: "FD_014_e02",
              q: "Differentiate $y = \\frac{x}{e^x}$.",
              a: "$y' = \\frac{e^x - xe^x}{e^{2x}} = \\frac{1 - x}{e^x}$"
            },
            {
              qid: "FD_014_e03",
              q: "Differentiate $y = \\frac{e^x}{x + 1}$.",
              a: "$y' = \\frac{(x+1)e^x - e^x}{(x+1)^2} = \\frac{xe^x}{(x+1)^2}$"
            }
          ],
          medium: [
            {
              qid: "FD_014_m01",
              q: "Differentiate $y = \\frac{e^{2x}}{x+1}$.",
              a: "$y' = \\frac{2(x+1)e^{2x} - e^{2x}}{(x+1)^2} = \\frac{e^{2x}(2x+1)}{(x+1)^2}$"
            },
            {
              qid: "FD_014_m02",
              q: "Differentiate $y = \\frac{e^x}{x^2}$.",
              a: "$y' = \\frac{x^2 e^x - 2xe^x}{x^4} = \\frac{e^x(x-2)}{x^3}$"
            },
            {
              qid: "FD_014_m03",
              q: "Differentiate $y = \\frac{3x+2}{e^x}$.",
              a: "$y' = \\frac{3e^x - (3x+2)e^x}{e^{2x}} = \\frac{1 - 3x}{e^x}$"
            },
            {
              qid: "FD_014_m04",
              q: "Differentiate $y = \\frac{x^2 - 1}{e^x}$.",
              a: "$y' = \\frac{2xe^x - (x^2-1)e^x}{e^{2x}} = \\frac{2x - x^2 + 1}{e^x} = \\frac{-(x^2 - 2x - 1)}{e^x}$"
            },
            {
              qid: "FD_014_m05",
              q: "Differentiate $y = \\frac{e^x}{x^2 + 1}$.",
              a: "$y' = \\frac{(x^2+1)e^x - 2xe^x}{(x^2+1)^2} = \\frac{e^x(x^2 - 2x + 1)}{(x^2+1)^2} = \\frac{e^x(x-1)^2}{(x^2+1)^2}$"
            }
          ],
          hard: [
            {
              qid: "FD_014_h01",
              q: "Differentiate $y = \\frac{e^{2x}}{x^2 + 3}$.",
              a: "$y' = \\frac{2(x^2+3)e^{2x} - 2xe^{2x}}{(x^2+3)^2} = \\frac{2e^{2x}(x^2 - x + 3)}{(x^2+3)^2}$"
            },
            {
              qid: "FD_014_h02",
              q: "Differentiate $y = \\frac{xe^x}{x + 1}$.",
              a: "Using quotient rule with $u = xe^x$, $v = x+1$:\n$u' = e^x + xe^x = e^x(1+x)$\n$y' = \\frac{e^x(1+x)(x+1) - xe^x}{(x+1)^2} = \\frac{e^x(x^2 + 2x + 1 - x)}{(x+1)^2} = \\frac{e^x(x^2 + x + 1)}{(x+1)^2}$"
            },
            {
              qid: "FD_014_h03",
              q: "Find the stationary point of $y = \\frac{e^x}{x^2}$ for $x > 0$.",
              a: "$y' = \\frac{e^x(x-2)}{x^3} = 0 \\Rightarrow x = 2$. $y(2) = \\frac{e^2}{4}$. Stationary point: $(2, \\frac{e^2}{4})$"
            },
            {
              qid: "FD_014_h04",
              q: "Differentiate $y = \\frac{e^{-x}}{x + 2}$.",
              a: "$y' = \\frac{-(x+2)e^{-x} - e^{-x}}{(x+2)^2} = \\frac{-e^{-x}(x+3)}{(x+2)^2}$"
            },
            {
              qid: "FD_014_h05",
              q: "Differentiate $y = \\frac{\\ln(x)}{e^x}$.",
              a: "$y' = \\frac{\\frac{1}{x} \\cdot e^x - \\ln(x) \\cdot e^x}{e^{2x}} = \\frac{1 - x\\ln(x)}{xe^x}$"
            }
          ]
        }
,

    {
          pt_id: "FD_015",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "e Functions",
          pt: "Differentiation of $e^x$ or $e^{g(x)}$",
          testing: "Testing: Chain rule with exponential function",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_015_e01",
              q: "Differentiate $y = e^{3x}$.",
              a: "$y' = 3e^{3x}$"
            },
            {
              qid: "FD_015_e02",
              q: "Differentiate $y = e^{-2x}$.",
              a: "$y' = -2e^{-2x}$"
            },
            {
              qid: "FD_015_e03",
              q: "Differentiate $y = 4e^{x/2}$.",
              a: "$y' = 2e^{x/2}$"
            }
          ],
          medium: [
            {
              qid: "FD_015_m01",
              q: "Differentiate $y = e^{3x^2 - x}$.",
              a: "$y' = (6x - 1)e^{3x^2 - x}$"
            },
            {
              qid: "FD_015_m02",
              q: "Differentiate $y = 5e^{-2x} + e^{\\sqrt{x}}$.",
              a: "$y' = -10e^{-2x} + \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$"
            },
            {
              qid: "FD_015_m03",
              q: "Differentiate $y = e^{x^2 + 1}$.",
              a: "$y' = 2xe^{x^2 + 1}$"
            },
            {
              qid: "FD_015_m04",
              q: "Differentiate $y = e^{1/x}$.",
              a: "$y' = -\\frac{e^{1/x}}{x^2}$"
            },
            {
              qid: "FD_015_m05",
              q: "Differentiate $y = 3e^{2x} - e^{-x}$.",
              a: "$y' = 6e^{2x} + e^{-x}$"
            }
          ],
          hard: [
            {
              qid: "FD_015_h01",
              q: "Differentiate $y = e^{x^3 - 2x}$.",
              a: "$y' = (3x^2 - 2)e^{x^3 - 2x}$"
            },
            {
              qid: "FD_015_h02",
              q: "Differentiate $y = e^{\\sin(x)}$.",
              a: "$y' = \\cos(x) \\cdot e^{\\sin(x)}$"
            },
            {
              qid: "FD_015_h03",
              q: "Differentiate $y = e^{e^x}$.",
              a: "$y' = e^x \\cdot e^{e^x}$"
            },
            {
              qid: "FD_015_h04",
              q: "Differentiate $y = e^{(\\ln(x))^2}$.",
              a: "$y' = \\frac{2\\ln(x)}{x} \\cdot e^{(\\ln(x))^2}$"
            },
            {
              qid: "FD_015_h05",
              q: "If $f(x) = e^{x^2 - 4x}$, find $f'(2)$.",
              a: "$f'(x) = (2x - 4)e^{x^2 - 4x}$. $f'(2) = 0 \\cdot e^{-4} = 0$. (Stationary point)"
            }
          ]
        }
,

    {
          pt_id: "FD_016",
          topic: "Differentiation",
          subtopic: "Basic Differentiation Skills",
          concept: "e Functions",
          pt: "Differentiation of composite functions — e function as outside function",
          testing: "Testing: Chain rule with $e^{f(x)}$ where $f$ is non-linear",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_016_e01",
              q: "Differentiate $y = e^{\\cos(x)}$.",
              a: "$y' = -\\sin(x) \\cdot e^{\\cos(x)}$"
            },
            {
              qid: "FD_016_e02",
              q: "Differentiate $y = e^{x^2}$.",
              a: "$y' = 2x \\cdot e^{x^2}$"
            },
            {
              qid: "FD_016_e03",
              q: "Differentiate $y = e^{3x+1}$.",
              a: "$y' = 3e^{3x+1}$"
            }
          ],
          medium: [
            {
              qid: "FD_016_m01",
              q: "Differentiate $y = e^{\\sin(x)}$.",
              a: "$y' = \\cos(x) \\cdot e^{\\sin(x)}$"
            },
            {
              qid: "FD_016_m02",
              q: "Differentiate $y = e^{\\sqrt{x}}$.",
              a: "$y' = \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$"
            },
            {
              qid: "FD_016_m03",
              q: "Differentiate $y = e^{x^2 - 3x}$.",
              a: "$y' = (2x - 3)e^{x^2 - 3x}$"
            },
            {
              qid: "FD_016_m04",
              q: "Differentiate $y = e^{\\ln(x)}$ and explain your answer.",
              a: "Since $e^{\\ln(x)} = x$, we have $y' = 1$. Alternatively, by chain rule: $y' = \\frac{1}{x} \\cdot e^{\\ln(x)} = \\frac{x}{x} = 1$"
            },
            {
              qid: "FD_016_m05",
              q: "Differentiate $y = e^{1/(x+1)}$.",
              a: "$y' = -\\frac{e^{1/(x+1)}}{(x+1)^2}$"
            }
          ],
          hard: [
            {
              qid: "FD_016_h01",
              q: "Differentiate $y = e^{\\tan(x)}$.",
              a: "$y' = \\frac{e^{\\tan(x)}}{\\cos^2(x)}$"
            },
            {
              qid: "FD_016_h02",
              q: "Differentiate $y = e^{e^x}$.",
              a: "$y' = e^x \\cdot e^{e^x}$"
            },
            {
              qid: "FD_016_h03",
              q: "Differentiate $y = e^{x\\sin(x)}$.",
              a: "Inner function: $u = x\\sin(x)$, $u' = \\sin(x) + x\\cos(x)$.\n$y' = (\\sin(x) + x\\cos(x))e^{x\\sin(x)}$"
            },
            {
              qid: "FD_016_h04",
              q: "Find the $x$-coordinate(s) where $y = e^{-x^2}$ has a stationary point.",
              a: "$y' = -2xe^{-x^2} = 0$. Since $e^{-x^2} > 0$ always, we need $x = 0$. Stationary point at $x = 0$."
            },
            {
              qid: "FD_016_h05",
              q: "If $f(x) = e^{x^2 + 2x - 3}$, find $f'(1)$.",
              a: "$f'(x) = (2x + 2)e^{x^2 + 2x - 3}$. $f'(1) = 4e^{1+2-3} = 4e^0 = 4$"
            }
          ]
        }
,

    {
          pt_id: "FD_028",
          topic: "Differentiation",
          subtopic: "Optimisation Problems",
          concept: "Solving Optimisation Problems",
          pt: "Deriving objective function from constraint (show that)",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_028_e01",
              q: "A rectangle has perimeter 20 cm. If the width is $x$ cm, show that the area is $A = 10x - x^2$.",
              a: "Perimeter: $2x + 2l = 20 \\Rightarrow l = 10 - x$. Area: $A = x(10 - x) = 10x - x^2$."
            },
            {
              qid: "FD_028_e02",
              q: "An open-top box has a square base of side $x$ cm and height $h$ cm. The total surface area is 75 cm². Show that $h = \\frac{75 - x^2}{4x}$.",
              a: "Surface area of open box: $x^2 + 4xh = 75$. Rearranging: $4xh = 75 - x^2$, so $h = \\frac{75 - x^2}{4x}$."
            },
            {
              qid: "FD_028_e03",
              q: "An isosceles triangle has two equal sides of length $x$ cm and a base of $b$ cm. The perimeter is 30 cm. Show that $b = 30 - 2x$.",
              a: "Perimeter: $2x + b = 30$. Therefore $b = 30 - 2x$."
            }
          ],
          medium: [
            {
              qid: "FD_028_m01",
              q: "A box with a square base and open top has surface area 48 cm². Show that the volume is $V = 12x - \\frac{x^3}{4}$ where $x$ is the side length of the base.",
              a: "$SA = x^2 + 4xh = 48 \\Rightarrow h = \\frac{48 - x^2}{4x}$. $V = x^2 h = x^2 \\cdot \\frac{48 - x^2}{4x} = \\frac{x(48-x^2)}{4} = 12x - \\frac{x^3}{4}$"
            },
            {
              qid: "FD_028_m02",
              q: "A closed cylinder has volume $100\\pi$ cm³. Show that the total surface area is $S = 2\\pi r^2 + \\frac{200\\pi}{r}$ where $r$ is the radius.",
              a: "$V = \\pi r^2 h = 100\\pi \\Rightarrow h = \\frac{100}{r^2}$. $S = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + 2\\pi r \\cdot \\frac{100}{r^2} = 2\\pi r^2 + \\frac{200\\pi}{r}$."
            },
            {
              qid: "FD_028_m03",
              q: "A farmer uses 120 m of fencing to create a rectangular pen divided into two equal sections by a fence parallel to the width. If the width is $x$ m, show that the area is $A = 60x - \\frac{3x^2}{2}$.",
              a: "Fencing: $2l + 3x = 120 \\Rightarrow l = \\frac{120 - 3x}{2}$. Area: $A = xl = x \\cdot \\frac{120 - 3x}{2} = 60x - \\frac{3x^2}{2}$."
            },
            {
              qid: "FD_028_m04",
              q: "A window consists of a rectangle of width $2r$ and height $h$ topped by a semicircle of radius $r$. The perimeter is 10 m. Show that $h = 5 - r - \\frac{\\pi r}{2}$.",
              a: "Perimeter: $2h + 2r + \\pi r = 10$. Solving: $2h = 10 - 2r - \\pi r$, so $h = 5 - r - \\frac{\\pi r}{2}$."
            },
            {
              qid: "FD_028_m05",
              q: "A box is made by cutting squares of side $x$ cm from each corner of a 20 cm × 12 cm sheet and folding up. Show that the volume is $V = 4x^3 - 64x^2 + 240x$.",
              a: "Dimensions: $(20-2x) \\times (12-2x) \\times x$. $V = x(20-2x)(12-2x) = x(240 - 40x - 24x + 4x^2) = x(4x^2 - 64x + 240) = 4x^3 - 64x^2 + 240x$."
            }
          ],
          hard: [
            {
              qid: "FD_028_h01",
              q: "A cone of radius $r$ and height $h$ is inscribed in a sphere of radius $R = 6$ cm, with the base of the cone a chord of the sphere. Show that $r^2 = 12h - h^2$ and hence $V = \\frac{\\pi h}{3}(12h - h^2)$.",
              a: "The apex is at the top of the sphere, so the distance from the centre to the base is $6 - h$. By Pythagoras on the cross-section: $r^2 + (6-h)^2 = 36$. So $r^2 = 36 - (6-h)^2 = 36 - 36 + 12h - h^2 = 12h - h^2$. Volume: $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi h}{3}(12h - h^2)$."
            },
            {
              qid: "FD_028_h02",
              q: "A poster must contain 150 cm² of printed area. It has 3 cm margins on the sides and 4 cm margins top and bottom. If the printed width is $x$ cm, show that the total area of the poster is $A = (x+6)\\left(\\frac{150}{x} + 8\\right)$.",
              a: "Printed area: $xy = 150 \\Rightarrow y = \\frac{150}{x}$. Poster dimensions: width $= x + 6$, height $= y + 8 = \\frac{150}{x} + 8$. Total area: $A = (x+6)\\left(\\frac{150}{x} + 8\\right)$."
            },
            {
              qid: "FD_028_h03",
              q: "A trough is 2 m long with a trapezoidal cross-section. The base is $x$ m wide, the top is $(x + 2h)$ m wide, and the depth is $h$ m. If the total area of the four sides and base is 6 m², show that $h = \\frac{6 - 2x}{2(x + 2)}$.",
              a: "The cross-section is an isosceles trapezium. Area of base: $2x$. Two end trapezoids: $2 \\times \\frac{1}{2}(x + x + 2h)h = (2x+2h)h$. Wait — reframing: Base: $2x$ m². Two long sides: $2 \\times 2h = 4h$ m². Two short ends: $2 \\times \\frac{1}{2}(x + x + 2h)h = h(2x+2h)$... Actually, for a rectangular trough 2 m long with base width $x$: Base = $2x$, two long sides = $2 \\times 2h = 4h$, total = $2x + 4h + 2xh$... Hmm, let me simplify. For sides: base $= 2x$, two long sides $= 2 \\times 2h$, two short sides $= 2 \\times xh$... Actually given $6 = 2x + 4h + 2xh = 2x + 2h(2+x)$. Rearranging: $2h(x+2) = 6 - 2x$, so $h = \\frac{6 - 2x}{2(x+2)}$."
            },
            {
              qid: "FD_028_h04",
              q: "A company sells $x$ items at price $p = 50 - 0.5x$ dollars each. The cost to produce $x$ items is $C = 200 + 10x$. Show that the profit is $P = -0.5x^2 + 40x - 200$.",
              a: "Revenue: $R = xp = x(50 - 0.5x) = 50x - 0.5x^2$. Profit: $P = R - C = (50x - 0.5x^2) - (200 + 10x) = -0.5x^2 + 40x - 200$."
            },
            {
              qid: "FD_028_h05",
              q: "A gutter is formed by folding up equal strips of width $x$ cm on each side of a 30 cm wide metal sheet. Show that the cross-sectional area is $A = 30x - 2x^2$, and state the domain for $x$.",
              a: "After folding up strips of width $x$ on each side, the base width is $30 - 2x$ and the depth is $x$. Cross-sectional area: $A = x(30 - 2x) = 30x - 2x^2$. Domain: $0 < x < 15$ (base must be positive)."
            }
          ]
        }
,

    {
          pt_id: "FD_029",
          topic: "Differentiation",
          subtopic: "Optimisation Problems",
          concept: "Solving Optimisation Problems",
          pt: "Determining optimised result using first and second derivative tests",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_029_e01",
              q: "Find the maximum value of $A = 20x - x^2$.",
              a: "$A' = 20 - 2 x = 0 \\Rightarrow x = 10$. $A'' = -2 < 0$ (maximum). Maximum value: $A(10) = 100$."
            },
            {
              qid: "FD_029_e02",
              q: "Find the minimum value of $C = x^2 - 8x + 20$.",
              a: "$C' = 2 x - 8 = 0 \\Rightarrow x = 4$. $C'' = 2 > 0$ (minimum). Minimum value: $C(4) = 4$."
            },
            {
              qid: "FD_029_e03",
              q: "Find the value of $x$ that maximises $y = 12x - 3x^2$ and state the maximum value.",
              a: "$y' = 12 - 6 x = 0 \\Rightarrow x = 2$. $y'' = -6 < 0$ (max). Maximum value: $y(2) = 12$."
            }
          ],
          medium: [
            {
              qid: "FD_029_m01",
              q: "A farmer has 200 m of fencing to enclose a rectangular paddock against a straight river (no fence needed along the river). Find the dimensions that maximise the area.",
              a: "Let width $= x$, length $= 200 - 2x$. $A = x(200 - 2x) = 200x - 2x^2$. $A'(x) = 200 - 4x = 0 \\Rightarrow x = 50$. $A''(x) = -4 < 0$ (max). Dimensions: $50$ m × $100$ m, area = $5000$ m²."
            },
            {
              qid: "FD_029_m02",
              q: "A cylindrical can must hold 500 cm³. Find the radius that minimises the surface area.",
              a: "$V = \\pi r^2 h = 500 \\Rightarrow h = \\frac{500}{\\pi r^2}$. $SA = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\frac{1000}{r}$. $\\frac{dSA}{dr} = 4\\pi r - \\frac{1000}{r^2} = 0 \\Rightarrow r^3 = \\frac{250}{\\pi} \\Rightarrow r = \\left(\\frac{250}{\\pi}\\right)^{1/3} \\approx 4.30$ cm."
            },
            {
              qid: "FD_029_m03",
              q: "A box is made by cutting squares of side $x$ cm from each corner of a 20 cm × 12 cm sheet. The volume is $V = 4x^3 - 64x^2 + 240x$. Find the value of $x$ that maximises the volume.",
              a: "$V' = 12 x^{2} - 128 x + 240 = 0$. Solving: $12 x^{2} - 128 x + 240 = 0$, so $x = \\frac{16}{3} - \\frac{2 \\sqrt{19}}{3}$ or $x = \\frac{2 \\sqrt{19}}{3} + \\frac{16}{3}$. Since $0 < x < 6$, we use $x = \\frac{16}{3} - \\frac{2 \\sqrt{19}}{3}$. $V'' = 24 x - 128$. At $x = \\frac{16}{3} - \\frac{2 \\sqrt{19}}{3}$: $V'' = - 16 \\sqrt{19} < 0$ (max). Max volume $= \\frac{1792}{27} + \\frac{1216 \\sqrt{19}}{27}$ cm³."
            },
            {
              qid: "FD_029_m04",
              q: "A company's profit is $P = -0.5x^2 + 40x - 200$ dollars for selling $x$ items. Find the number of items that maximises profit and the maximum profit.",
              a: "$P' = 40 - x = 0 \\Rightarrow x = 40$. $P'' = -1 < 0$ (max). Maximum profit: $P(40) = 600$ dollars."
            },
            {
              qid: "FD_029_m05",
              q: "The cross-sectional area of a gutter is $A = 30x - 2x^2$ cm² where $0 < x < 15$. Find the depth $x$ that maximises the area.",
              a: "$A' = 30 - 4 x = 0 \\Rightarrow x = \\frac{15}{2}$. $A'' = -4 < 0$ (max). Maximum area: $A(\\frac{15}{2}) = \\frac{225}{2}$ cm²."
            }
          ],
          hard: [
            {
              qid: "FD_029_h01",
              q: "An open-top box with a square base must have volume 32 cm³. The base costs \\$2/cm² and the sides cost \\$1/cm². Find the dimensions that minimise the total cost.",
              a: "$V = x^2 h = 32 \\Rightarrow h = \\frac{32}{x^2}$. Cost: $C = 2x^2 + 4xh = 2x^2 + \\frac{128}{x}$. $C' = 4x - \\frac{128}{x^2} = 0 \\Rightarrow x^3 = 32 \\Rightarrow x = \\sqrt[3]{32} = 2\\sqrt[3]{4} \\approx 3.17$ cm. $C'' = 4 + \\frac{256}{x^3} > 0$ (min). Height: $h = \\frac{32}{x^2} \\approx 3.17$ cm."
            },
            {
              qid: "FD_029_h02",
              q: "Two positive numbers $x$ and $y$ satisfy $x + 3y = 24$. Find the maximum value of $P = xy^2$.",
              a: "$x = 24 - 3y$, so $P = (24-3y)y^2 = 24y^2 - 3y^3$. $P' = 48y - 9y^2 = 3y(16-3y) = 0 \\Rightarrow y = \\frac{16}{3}$ (since $y > 0$). $P'' = 48 - 18y$. At $y = \\frac{16}{3}$: $P'' = 48 - 96 = -48 < 0$ (max). $x = 24 - 16 = 8$. Maximum $P = 8 \\times \\left(\\frac{16}{3}\\right)^2 = \\frac{2048}{9}$."
            },
            {
              qid: "FD_029_h03",
              q: "A poster has 150 cm² of printed area, with 3 cm side margins and 4 cm top/bottom margins. The total area is $A = (x+6)\\left(\\frac{150}{x} + 8\\right)$ where $x$ is the print width. Find the print width that minimises the total poster area.",
              a: "$A = 150 + 8x + \\frac{900}{x} + 48 = 198 + 8x + \\frac{900}{x}$. $A' = 8 - \\frac{900}{x^2} = 0 \\Rightarrow x^2 = \\frac{900}{8} = 112.5 \\Rightarrow x = \\sqrt{112.5} = \\frac{15\\sqrt{2}}{2} \\approx 10.61$ cm. $A'' = \\frac{1800}{x^3} > 0$ (min)."
            },
            {
              qid: "FD_029_h04",
              q: "Find the point on the curve $y = \\sqrt{x}$ that is closest to the point $(3, 0)$.",
              a: "Distance² = $D = (x-3)^2 + (\\sqrt{x})^2 = (x-3)^2 + x = x^2 - 5x + 9$. $D' = 2x - 5 = 0 \\Rightarrow x = \\frac{5}{2}$. $D'' = 2 > 0$ (min). Closest point: $\\left(\\frac{5}{2}, \\sqrt{\\frac{5}{2}}\\right) = \\left(\\frac{5}{2}, \\frac{\\sqrt{10}}{2}\\right)$."
            },
            {
              qid: "FD_029_h05",
              q: "A 1-metre string is cut into two pieces. One piece forms a square and the other forms a circle. Where should the cut be made to minimise the total area enclosed? Let $x$ metres be used for the square.",
              a: "Square side $= \\frac{x}{4}$, area $= \\frac{x^2}{16}$. Circle circumference $= 1-x$, so $r = \\frac{1-x}{2\\pi}$, area $= \\pi r^2 = \\frac{(1-x)^2}{4\\pi}$. Total: $A = \\frac{x^2}{16} + \\frac{(1-x)^2}{4\\pi}$. $A' = \\frac{x}{8} - \\frac{1-x}{2\\pi} = 0 \\Rightarrow \\frac{x}{8} = \\frac{1-x}{2\\pi} \\Rightarrow \\pi x = 4(1-x) \\Rightarrow x = \\frac{4}{\\pi + 4}$. $A'' = \\frac{1}{8} + \\frac{1}{2\\pi} > 0$ (min). Cut at $x = \\frac{4}{\\pi + 4} \\approx 0.56$ m for the square."
            }
          ]
        }
,

    {
          pt_id: "FD_030",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Calculating Second Derivatives",
          pt: "Calculation and interpretation of second derivative in real-world context",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_030_e01",
              q: "The height of a projectile is given by $h(t) = 15t - 5t^2$ metres. Find $h''(t)$.",
              a: "$h'(t) = 15 - 10 t$, $h''(t) = -10$ m/s²"
            },
            {
              qid: "FD_030_e02",
              q: "The total cost of producing $t$ items is $C(t) = 3t^2 + 10t + 50$ dollars. Find $C''(t)$ and state what it tells us about the cost.",
              a: "$C'(t) = 6 t + 10$, $C''(t) = 6$. Since $C''(t) = 6 > 0$, the marginal cost is increasing — each additional unit costs more to produce."
            },
            {
              qid: "FD_030_e03",
              q: "A particle's displacement is $s(t) = t^3 - 6t^2 + 9t$ metres. Find the acceleration $s''(t)$.",
              a: "$s'(t) = 3 t^{2} - 12 t + 9$ (velocity), $s''(t) = 6 t - 12$ m/s² (acceleration)"
            }
          ],
          medium: [
            {
              qid: "FD_030_m01",
              q: "The height of a ball is given by $h(t) = 20t - 5t^2$ metres. Find $h''(t)$ and explain what it represents.",
              a: "$h'(t) = 20 - 10t$ (velocity), $h''(t) = -10$ m/s². This represents the constant downward acceleration due to gravity."
            },
            {
              qid: "FD_030_m02",
              q: "The population of bacteria (in thousands) is modelled by $P(t) = 2t^3 - 15t^2 + 36t + 100$ where $t$ is in hours. Find $P''(3)$ and interpret the result.",
              a: "$P'(t) = 6 t^{2} - 30 t + 36$, $P''(t) = 12 t - 30$. $P''(3) = 6$. Since $P''(3) > 0$, the rate of population growth is increasing at $t = 3$ hours."
            },
            {
              qid: "FD_030_m03",
              q: "The temperature of a cooling object is $T(t) = 500e^{-0.2t}$ °C. Find $T''(t)$ and evaluate $T''(0)$. Interpret the sign.",
              a: "$T'(t) = - 100 e^{- \\frac{t}{5}}$, $T''(t) = 20 e^{- \\frac{t}{5}}$. $T''(0) = 20$. Since $T''(0) > 0$, the rate of cooling is slowing down (temperature is concave up)."
            },
            {
              qid: "FD_030_m04",
              q: "Monthly revenue is modelled by $R(t) = -\\frac{1}{4}t^4 + 8t^3 - 60t^2 + 200t$ thousand dollars. Find $R''(14)$ and state whether revenue growth is accelerating or decelerating.",
              a: "$R'(t) = - t^{3} + 24 t^{2} - 120 t + 200$, $R''(t) = - 3 t^{2} + 48 t - 120$. $R''(14) = -36$. Since $R''(14) < 0$, revenue growth is decelerating at $t = 14$."
            },
            {
              qid: "FD_030_m05",
              q: "The distance travelled by a boat is $d(t) = 10\\sqrt{t + 1}$ metres. Find $d''(t)$ and evaluate $d''(3)$. Interpret the result.",
              a: "$d'(t) = \\frac{5}{\\sqrt{t + 1}}$, $d''(t) = - \\frac{5}{2 \\left(t + 1\\right)^{\\frac{3}{2}}}$. $d''(3) = - \\frac{5}{16}$. Since $d''(3) < 0$, the boat is decelerating."
            }
          ],
          hard: [
            {
              qid: "FD_030_h01",
              q: "A particle moves with displacement $s(t) = t^2 e^{-t}$ metres. Find $s''(t)$ and determine the values of $t$ where the acceleration is zero.",
              a: "$s'(t) = t \\left(2 - t\\right) e^{- t}$. $s''(t) = \\left(t^{2} - 4 t + 2\\right) e^{- t}$. Setting $s''(t) = 0$: $t = 2 - \\sqrt{2}$ or $t = \\sqrt{2} + 2$."
            },
            {
              qid: "FD_030_h02",
              q: "The percentage of a task completed after $t$ minutes is $P(t) = \\frac{100t}{t+5}$. Find $P''(t)$, then evaluate $P''(5)$ and $P''(15)$. What do these tell us about the rate of progress?",
              a: "$P'(t) = \\frac{500}{\\left(t + 5\\right)^{2}}$. $P''(t) = - \\frac{1000}{\\left(t + 5\\right)^{3}}$. $P''(5) = -1$, $P''(15) = - \\frac{1}{8}$. Both are negative, so the rate of progress is always decelerating — gains slow as the task nears completion."
            },
            {
              qid: "FD_030_h03",
              q: "The depth of water in a harbour is $D(t) = 5\\sin\\!\\left(\\frac{t}{2}\\right) + 3\\cos(t)$ metres. Find $D''(t)$ and evaluate $D''(\\pi)$. State whether the depth is concave up or down at $t = \\pi$.",
              a: "$D'(t) = - 3 \\sin{\\left(t \\right)} + \\frac{5 \\cos{\\left(\\frac{t}{2} \\right)}}{2}$. $D''(t) = - \\frac{5 \\sin{\\left(\\frac{t}{2} \\right)}}{4} - 3 \\cos{\\left(t \\right)}$. $D''(\\pi) = \\frac{7}{4}$. Since $D''(\\pi) > 0$, the depth function is concave up at $t = \\pi$ — the rate of change of depth is increasing."
            },
            {
              qid: "FD_030_h04",
              q: "The temperature of an oven is $T(t) = 200 - 150e^{-0.1t} - 50e^{-0.5t}$ °C. Find $T''(t)$ and evaluate $T''(0)$. What does this tell us about the heating rate initially?",
              a: "$T'(t) = 25 e^{- \\frac{t}{2}} + 15 e^{- \\frac{t}{10}}$. $T''(t) = - \\frac{25 e^{- \\frac{t}{2}}}{2} - \\frac{3 e^{- \\frac{t}{10}}}{2}$. $T''(0) = -14$. Since $T''(0) < 0$, the rate of heating is decreasing from the start — the oven heats fastest initially."
            },
            {
              qid: "FD_030_h05",
              q: "A rocket's height is $h(t) = -\\frac{1}{3}t^3 + 6t^2 + 12t$ metres. Find the time when the acceleration is zero, and determine the velocity at that instant.",
              a: "$h'(t) = - t^{2} + 12 t + 12$, $h''(t) = 12 - 2 t$. Setting $h''(t) = 0$: $t = 6$. Velocity at $t = 6$: $h'(6) = 48$ m/s."
            }
          ]
        }
,

    {
          pt_id: "FD_031",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Calculating Second Derivatives",
          pt: "Calculation of second derivative",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_031_e01",
              q: "Find $f''(x)$ if $f(x) = 5x^3 - 2x^2 + 7x - 1$.",
              a: "$f'(x) = 15 x^{2} - 4 x + 7$, $f''(x) = 30 x - 4$"
            },
            {
              qid: "FD_031_e02",
              q: "Find $\\frac{d^2y}{dx^2}$ if $y = x^4 + \\frac{3}{x}$.",
              a: "$y' = 4x^3 - \\frac{3}{x^2}$, $y'' = 12x^2 + \\frac{6}{x^3}$"
            },
            {
              qid: "FD_031_e03",
              q: "Find $f''(x)$ if $f(x) = \\frac{1}{2}x^4 - \\frac{3}{2}x^2 + 4$.",
              a: "$f'(x) = 2x^3 - 3x$, $f''(x) = 6 x^{2} - 3$"
            }
          ],
          medium: [
            {
              qid: "FD_031_m01",
              q: "Find $f''(x)$ if $f(x) = x^4 - 3x^3 + 2x$.",
              a: "$f'(x) = 4x^3 - 9x^2 + 2$, $f''(x) = 12x^2 - 18x$"
            },
            {
              qid: "FD_031_m02",
              q: "Find $\\frac{d^2y}{dx^2}$ if $y = e^{2x} \\sin(x)$.",
              a: "$y' = 2e^{2x}\\sin(x) + e^{2x}\\cos(x) = e^{2x}(2\\sin x + \\cos x)$. $y'' = 2e^{2x}(2\\sin x + \\cos x) + e^{2x}(2\\cos x - \\sin x) = e^{2x}(3\\sin x + 4\\cos x)$"
            },
            {
              qid: "FD_031_m03",
              q: "Find $f''(x)$ if $f(x) = (2x + 1)^4$.",
              a: "$f'(x) = 8 \\left(2 x + 1\\right)^{3}$, $f''(x) = 48 \\left(2 x + 1\\right)^{2}$"
            },
            {
              qid: "FD_031_m04",
              q: "Find $\\frac{d^2y}{dx^2}$ if $y = x^2 e^x$.",
              a: "$y' = x \\left(x + 2\\right) e^{x}$, $y'' = \\left(x^{2} + 4 x + 2\\right) e^{x}$"
            },
            {
              qid: "FD_031_m05",
              q: "Find $f''(x)$ if $f(x) = \\sqrt{4x + 1}$.",
              a: "$f'(x) = \\frac{2}{\\sqrt{4 x + 1}}$, $f''(x) = - \\frac{4}{\\left(4 x + 1\\right)^{\\frac{3}{2}}}$"
            }
          ],
          hard: [
            {
              qid: "FD_031_h01",
              q: "Find $\\frac{d^2y}{dx^2}$ if $y = x^2\\cos(x)$.",
              a: "$y' = x \\left(- x \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)}\\right)$. $y'' = - x^{2} \\cos{\\left(x \\right)} - 4 x \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)}$"
            },
            {
              qid: "FD_031_h02",
              q: "If $f(x) = \\frac{x}{x^2 + 1}$, find $f''(x)$ and evaluate $f''(1)$.",
              a: "$f'(x) = \\frac{1 - x^{2}}{x^{4} + 2 x^{2} + 1}$. $f''(x) = \\frac{2 x \\left(x^{2} - 3\\right)}{\\left(x^{2} + 1\\right)^{3}}$. $f''(1) = - \\frac{1}{2}$"
            },
            {
              qid: "FD_031_h03",
              q: "Find $f''(x)$ if $f(x) = x^2 \\ln(x)$.",
              a: "$f'(x) = x \\left(2 \\ln{\\left(x \\right)} + 1\\right)$, $f''(x) = 2 \\ln{\\left(x \\right)} + 3$"
            },
            {
              qid: "FD_031_h04",
              q: "Find $\\frac{d^2y}{dx^2}$ if $y = e^{-x^2}$ and evaluate it at $x = 1$.",
              a: "$y' = - 2 x e^{- x^{2}}$. $y'' = 2 \\left(2 x^{2} - 1\\right) e^{- x^{2}}$. At $x = 1$: $y'' = \\frac{2}{e}$"
            },
            {
              qid: "FD_031_h05",
              q: "If $y = \\frac{\\sin(x)}{x}$, find $y''$ and evaluate $y''(\\pi)$.",
              a: "$y' = \\frac{x \\cos{\\left(x \\right)} - \\sin{\\left(x \\right)}}{x^{2}}$. $y'' = \\frac{- x^{2} \\sin{\\left(x \\right)} - 2 x \\cos{\\left(x \\right)} + 2 \\sin{\\left(x \\right)}}{x^{3}}$. $y''(\\pi) = \\frac{2}{\\pi^{2}}$"
            }
          ]
        }
,

    {
          pt_id: "FD_032",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Deriving simultaneous equations from turning point, inflection point, and function value conditions",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_032_e01",
              q: "The curve $y = ax^2 + bx$ has a stationary point at $x = 3$. Find an equation relating $a$ and $b$.",
              a: "$y' = 2ax + b = 0$ at $x = 3$: $6a + b = 0$."
            },
            {
              qid: "FD_032_e02",
              q: "The curve $y = x^3 + ax^2 + b$ passes through $(1, 5)$ and has a stationary point at $x = 0$. Find $a$ and $b$.",
              a: "$y' = 3x^2 + 2ax$. At $x = 0$: $y'(0) = 0$ (always true). Passes through $(1, 5)$: $1 + a + b = 5 \\Rightarrow a + b = 4$. Since the stationary point condition gives no info about $a$, we need another condition — with just these two conditions, $a$ is free."
            },
            {
              qid: "FD_032_e03",
              q: "The curve $y = ax^2 + bx + 3$ has a stationary point at $(2, 7)$. Find $a$ and $b$.",
              a: "$y' = 2ax + b = 0$ at $x = 2$: $4a + b = 0$ … (1). Passes through $(2, 7)$: $4a + 2b + 3 = 7 \\Rightarrow 4a + 2b = 4$ … (2). From (1): $b = -4a$. Sub into (2): $4a - 8a = 4 \\Rightarrow a = -1$, $b = 4$."
            }
          ],
          medium: [
            {
              qid: "FD_032_m01",
              q: "The cubic $f(x) = ax^3 + bx^2 + cx$ has a stationary point at $x = 1$ and an inflection point at $x = 2$. Find $a$ and $b$.",
              a: "$f'(x) = 3ax^2 + 2bx + c = 0$ at $x=1$: $3a + 2b + c = 0$. $f''(x) = 6ax + 2b = 0$ at $x=2$: $12a + 2b = 0 \\Rightarrow b = -6a$. From first equation: $3a - 12a + c = 0 \\Rightarrow c = 9a$."
            },
            {
              qid: "FD_032_m02",
              q: "The curve $y = ax^3 + bx^2$ has a local maximum at $(1, 2)$. Find $a$ and $b$.",
              a: "$y' = 3ax^2 + 2bx = 0$ at $x = 1$: $3a + 2b = 0$ … (1). Passes through $(1, 2)$: $a + b = 2$ … (2). From (1): $b = -\\frac{3a}{2}$. Sub into (2): $a - \\frac{3a}{2} = 2 \\Rightarrow -\\frac{a}{2} = 2 \\Rightarrow a = -4$, $b = 6$."
            },
            {
              qid: "FD_032_m03",
              q: "The curve $y = ax^3 + bx^2 + cx + d$ has stationary points at $x = -1$ and $x = 3$, and passes through the origin. Write down three equations in $a$, $b$, $c$, $d$.",
              a: "$y' = 3ax^2 + 2bx + c$. At $x = -1$: $3a - 2b + c = 0$ … (1). At $x = 3$: $27a + 6b + c = 0$ … (2). Passes through $(0,0)$: $d = 0$ … (3)."
            },
            {
              qid: "FD_032_m04",
              q: "The quartic $y = x^4 + ax^3 + bx^2$ has an inflection point at $x = 1$ where $y = 3$. Find $a$ and $b$.",
              a: "$y'' = 12x^2 + 6ax + 2b = 0$ at $x = 1$: $12 + 6a + 2b = 0 \\Rightarrow 6a + 2b = -12$ … (1). Passes through $(1, 3)$: $1 + a + b = 3 \\Rightarrow a + b = 2$ … (2). From (2): $b = 2 - a$. Sub into (1): $6a + 4 - 2a = -12 \\Rightarrow 4a = -16 \\Rightarrow a = -4$, $b = 6$."
            },
            {
              qid: "FD_032_m05",
              q: "The curve $y = ax^2 + bx + c$ has a maximum value of 10 at $x = 2$ and passes through $(0, 6)$. Find $a$, $b$ and $c$.",
              a: "$y'(2) = 4a + b = 0$ … (1). $y(2) = 4a + 2b + c = 10$ … (2). $y(0) = c = 6$ … (3). From (3): $c = 6$. From (1): $b = -4a$. Sub into (2): $4a - 8a + 6 = 10 \\Rightarrow -4a = 4 \\Rightarrow a = -1$, $b = 4$."
            }
          ],
          hard: [
            {
              qid: "FD_032_h01",
              q: "The cubic $f(x) = ax^3 + bx^2 + cx + d$ has a local max at $(-1, 6)$ and a local min at $(2, -21)$. Find $a$, $b$, $c$ and $d$.",
              a: "$f' = 3ax^2 + 2bx + c$. $f'(-1) = 3a - 2b + c = 0$ … (1). $f'(2) = 12a + 4b + c = 0$ … (2). $f(-1) = -a + b - c + d = 6$ … (3). $f(2) = 8a + 4b + 2c + d = -21$ … (4). (2)−(1): $9a + 6b = 0 \\Rightarrow b = -\\frac{3a}{2}$. From (1): $3a + 3a + c = 0 \\Rightarrow c = -6a$. (4)−(3): $9a + 3b + 3c = -27 \\Rightarrow 9a - \\frac{9a}{2} - 18a = -27 \\Rightarrow -\\frac{27a}{2} = -27 \\Rightarrow a = 2$. So $b = -3$, $c = -12$, $d = -1$."
            },
            {
              qid: "FD_032_h02",
              q: "A quartic $y = x^4 + ax^3 + bx^2 + cx$ has stationary points at $x = 0$ and $x = 1$, and an inflection point at $x = 2$. Find $a$, $b$ and $c$.",
              a: "$y' = 4x^3 + 3ax^2 + 2bx + c$. $y'(0) = c = 0$. $y'(1) = 4 + 3a + 2b = 0$ … (1). $y'' = 12x^2 + 6ax + 2b$. $y''(2) = 48 + 12a + 2b = 0$ … (2). From (2): $b = -24 - 6a$. Sub into (1): $4 + 3a - 48 - 12a = 0 \\Rightarrow -9a = 44 \\Rightarrow a = -\\frac{44}{9}$, $b = -24 + \\frac{264}{9} = \\frac{48}{9} = \\frac{16}{3}$."
            },
            {
              qid: "FD_032_h03",
              q: "The function $f(x) = ax^3 + bx^2 + cx + 1$ has an inflection point at $(1, 0)$ and $f'(1) = -3$. Find $a$, $b$ and $c$.",
              a: "$f''(x) = 6ax + 2b$. $f''(1) = 6a + 2b = 0 \\Rightarrow b = -3a$ … (1). $f(1) = a + b + c + 1 = 0 \\Rightarrow a + b + c = -1$ … (2). $f'(1) = 3a + 2b + c = -3$ … (3). From (1): $b = -3a$. (2): $a - 3a + c = -1 \\Rightarrow c = 2a - 1$. (3): $3a - 6a + 2a - 1 = -3 \\Rightarrow -a = -2 \\Rightarrow a = 2$. So $b = -6$, $c = 3$."
            },
            {
              qid: "FD_032_h04",
              q: "The curve $y = ax^4 + bx^2 + c$ is symmetric about the $y$-axis, has a maximum at $(0, 5)$, and passes through $(1, 2)$ and $(-1, 2)$. Find $a$, $b$ and $c$.",
              a: "$y(0) = c = 5$. $y'(0) = 0$ is automatic (even function). $y(1) = a + b + 5 = 2 \\Rightarrow a + b = -3$ … (1). $y'(x) = 4ax^3 + 2bx$. For max at $x=0$: $y''(0) = 2b < 0 \\Rightarrow b < 0$. We need more: since it's a local max, $b < 0$. From (1): $a = -3 - b$. For the function to tend to $+\\infty$ we need $a > 0$, so $b < -3$. Taking the simplest: with given info, $a + b = -3$ and $c = 5$."
            },
            {
              qid: "FD_032_h05",
              q: "The cubic $f(x) = 2x^3 + bx^2 + cx + d$ has a stationary point at $x = -1$, passes through $(0, 4)$, and has $f(2) = 0$. Find $b$, $c$ and $d$.",
              a: "$d = f(0) = 4$. $f'(x) = 6x^2 + 2bx + c$. $f'(-1) = 6 - 2b + c = 0 \\Rightarrow c = 2b - 6$ … (1). $f(2) = 16 + 4b + 2c + 4 = 0 \\Rightarrow 4b + 2c = -20 \\Rightarrow 2b + c = -10$ … (2). Sub (1) into (2): $2b + 2b - 6 = -10 \\Rightarrow 4b = -4 \\Rightarrow b = -1$, $c = -8$."
            }
          ]
        }
,

    {
          pt_id: "FD_033",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Determine the values for which a curve has a given concavity",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_033_e01",
              q: "For $f(x) = x^3 - 3x^2$, find where the curve is concave up.",
              a: "$f''(x) = 6 x - 6$. Concave up when $f''(x) > 0$: $6 x - 6 > 0 \\Rightarrow x > 1$."
            },
            {
              qid: "FD_033_e02",
              q: "For $f(x) = -x^3 + 12x$, find where the curve is concave down.",
              a: "$f''(x) = - 6 x$. Concave down when $f''(x) < 0$: $- 6 x < 0 \\Rightarrow x > 0$."
            },
            {
              qid: "FD_033_e03",
              q: "For $f(x) = 2x^3 - 6x^2 + x + 5$, find the values of $x$ for which the curve is concave up.",
              a: "$f''(x) = 12 x - 12$. Concave up when $12 x - 12 > 0 \\Rightarrow x > 1$."
            }
          ],
          medium: [
            {
              qid: "FD_033_m01",
              q: "For $f(x) = x^3 - 6x^2 + 9x$, find where the curve is concave up.",
              a: "$f''(x) = 6x - 12 > 0 \\Rightarrow x > 2$. Concave up for $x > 2$."
            },
            {
              qid: "FD_033_m02",
              q: "For $f(x) = x^4 - 8x^2$, find the intervals where the curve is concave up.",
              a: "$f''(x) = 12 x^{2} - 16 = 12 x^{2} - 16$. $f''(x) = 0$ at $x = - \\frac{2 \\sqrt{3}}{3}$ and $x = \\frac{2 \\sqrt{3}}{3}$. Concave up when $f''(x) > 0$: $x < - \\frac{2 \\sqrt{3}}{3}$ or $x > \\frac{2 \\sqrt{3}}{3}$."
            },
            {
              qid: "FD_033_m03",
              q: "For $f(x) = xe^{-x}$, find where the curve is concave down.",
              a: "$f'(x) = \\left(1 - x\\right) e^{- x}$. $f''(x) = \\left(x - 2\\right) e^{- x}$. $f''(x) < 0$ when $x - 2 < 0$, i.e. $x < 2$. Concave down for $x < 2$."
            },
            {
              qid: "FD_033_m04",
              q: "For $f(x) = \\frac{\\ln x}{x}$ (where $x > 0$), find where the curve is concave down.",
              a: "$f'(x) = \\frac{1 - \\ln{\\left(x \\right)}}{x^{2}}$. $f''(x) = \\frac{2 \\ln{\\left(x \\right)} - 3}{x^{3}}$. For $x > 0$: concave down when $2\\ln x - 3 > 0$, i.e. $\\ln x > \\frac{3}{2}$, i.e. $x > e^{3/2}$."
            },
            {
              qid: "FD_033_m05",
              q: "For $f(x) = x^3 - 6x^2 + 12x - 3$, find where the curve is concave up and where it is concave down.",
              a: "$f''(x) = 6 x - 12$. $f''(x) = 0$ at $x = 2$. Concave up for $x > 2$, concave down for $x < 2$."
            }
          ],
          hard: [
            {
              qid: "FD_033_h01",
              q: "For $f(x) = x^4 - 4x^3 + 6x^2$, determine where the curve is concave up.",
              a: "$f''(x) = 12 x^{2} - 24 x + 12 = 12 \\left(x - 1\\right)^{2}$. Since $12 \\left(x - 1\\right)^{2} = 12(x-1)^2 \\geq 0$ for all $x$, the curve is concave up everywhere (and has an inflection point at $x = 1$ where concavity doesn't change)."
            },
            {
              qid: "FD_033_h02",
              q: "For $f(x) = \\sin(x)$, find the intervals on $[0, 2\\pi]$ where the curve is concave down.",
              a: "$f''(x) = -\\sin(x)$. Concave down when $f''(x) < 0$, i.e. $-\\sin(x) < 0 \\Rightarrow \\sin(x) > 0$. On $[0, 2\\pi]$: concave down for $x \\in (0, \\pi)$."
            },
            {
              qid: "FD_033_h03",
              q: "For $f(x) = x^2 e^x$, find the intervals where the curve is concave up.",
              a: "$f''(x) = \\left(x^{2} + 4 x + 2\\right) e^{x}$. Since $e^x > 0$, sign depends on $x^2 + 4x + 2 = 0 \\Rightarrow x = -2 \\pm \\sqrt{2}$. Concave up for $x < -2 - \\sqrt{2}$ or $x > -2 + \\sqrt{2}$."
            },
            {
              qid: "FD_033_h04",
              q: "For $f(x) = \\frac{x}{x^2 + 1}$, find all intervals where the curve is concave up.",
              a: "$f''(x) = \\frac{2 x \\left(x^{2} - 3\\right)}{\\left(x^{2} + 1\\right)^{3}}$. Since $(x^2+1)^3 > 0$, sign depends on $2x(x^2 - 3) = 0$ at $x = 0, \\pm\\sqrt{3}$. Testing signs: concave up on $(-\\sqrt{3}, 0) \\cup (\\sqrt{3}, \\infty)$."
            },
            {
              qid: "FD_033_h05",
              q: "For $f(x) = e^{-x^2/2}$ (the Gaussian bell curve), find where the curve is concave up.",
              a: "$f''(x) = \\left(x^{2} - 1\\right) e^{- \\frac{x^{2}}{2}}$. Since $e^{-x^2/2} > 0$, concave up when $x^2 - 1 > 0$, i.e. $x < -1$ or $x > 1$."
            }
          ]
        }
,

    {
          pt_id: "FD_034",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Determining concavity of a curve at a given point",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_034_e01",
              q: "Determine whether $f(x) = x^3 - 6x + 1$ is concave up or concave down at $x = 2$.",
              a: "$f''(x) = 6 x$. $f''(2) = 12 > 0$, so concave up at $x = 2$."
            },
            {
              qid: "FD_034_e02",
              q: "Determine whether $f(x) = -2x^3 + 3x^2 + 5$ is concave up or concave down at $x = 3$.",
              a: "$f''(x) = 6 - 12 x$. $f''(3) = -30 < 0$, so concave down at $x = 3$."
            },
            {
              qid: "FD_034_e03",
              q: "Is $f(x) = x^4 - 4x^2$ concave up or down at $x = 0$?",
              a: "$f''(x) = 12 x^{2} - 8$. $f''(0) = -8 < 0$, so concave down at $x = 0$."
            }
          ],
          medium: [
            {
              qid: "FD_034_m01",
              q: "Determine whether $f(x) = x \\ln(x)$ is concave up or concave down at $x = 1$.",
              a: "$f'(x) = \\ln(x) + 1$, $f''(x) = \\frac{1}{x}$. $f''(1) = 1 > 0$, so concave up at $x = 1$."
            },
            {
              qid: "FD_034_m02",
              q: "Determine whether $f(x) = xe^{-x}$ is concave up or concave down at $x = 1$.",
              a: "$f''(x) = \\left(x - 2\\right) e^{- x}$. $f''(1) = - \\frac{1}{e}$. Since $f''(1) < 0$, concave down at $x = 1$."
            },
            {
              qid: "FD_034_m03",
              q: "Determine the concavity of $f(x) = \\sin(x) + \\cos(x)$ at $x = \\frac{\\pi}{4}$.",
              a: "$f''(x) = - \\sin{\\left(x \\right)} - \\cos{\\left(x \\right)}$. $f''(\\pi/4) = - \\sqrt{2}$. Since $f''(\\pi/4) < 0$, concave down at $x = \\frac{\\pi}{4}$."
            },
            {
              qid: "FD_034_m04",
              q: "Determine the concavity of $f(x) = \\frac{x^2}{x + 1}$ at $x = 2$.",
              a: "$f''(x) = \\frac{2}{x^{3} + 3 x^{2} + 3 x + 1}$. $f''(2) = \\frac{2}{27} > 0$, so concave up at $x = 2$."
            },
            {
              qid: "FD_034_m05",
              q: "Determine the concavity of $f(x) = e^x \\cos(x)$ at $x = 0$.",
              a: "$f''(x) = - 2 e^{x} \\sin{\\left(x \\right)}$. $f''(0) = 0$. Since $f''(0) < 0$, concave down at $x = 0$."
            }
          ],
          hard: [
            {
              qid: "FD_034_h01",
              q: "Determine the concavity of $f(x) = \\ln(x^2 + 1)$ at $x = 0$ and at $x = 2$.",
              a: "$f''(x) = \\frac{2 \\left(1 - x^{2}\\right)}{\\left(x^{2} + 1\\right)^{2}}$. $f''(0) = 2 > 0$ (concave up). $f''(2) = - \\frac{6}{25} < 0$ (concave down)."
            },
            {
              qid: "FD_034_h02",
              q: "Is $f(x) = x^2 \\ln(x)$ concave up or down at $x = \\frac{1}{2}$?",
              a: "$f''(x) = 2 \\ln{\\left(x \\right)} + 3$. $f''(1/2) = 3 - \\ln{\\left(4 \\right)}$. Since $f''(1/2) > 0$, concave up."
            },
            {
              qid: "FD_034_h03",
              q: "Determine the concavity of $f(x) = x\\sin(x)$ at $x = \\pi$.",
              a: "$f''(x) = - x \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)}$. $f''(\\pi) = -2$. Since $f''(\\pi) > 0$, concave up at $x = \\pi$."
            },
            {
              qid: "FD_034_h04",
              q: "For $f(x) = e^{-x^2}$, determine the concavity at $x = 0$ and at $x = 2$.",
              a: "$f''(x) = 2 \\left(2 x^{2} - 1\\right) e^{- x^{2}}$. $f''(0) = -2 < 0$ (concave down). $f''(2) = \\frac{14}{e^{4}} > 0$ (concave up)."
            },
            {
              qid: "FD_034_h05",
              q: "Determine the concavity of $f(x) = (x^2 - 1)e^x$ at $x = -1$.",
              a: "$f''(x) = \\left(x^{2} + 4 x + 1\\right) e^{x}$. $f''(-1) = - \\frac{2}{e}$. Since $f''(-1) < 0$, concave down at $x = -1$."
            }
          ]
        }
,

    {
          pt_id: "FD_035",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Determining nature of stationary or inflection points using second derivative tests",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_035_e01",
              q: "Classify the stationary point of $f(x) = x^2 - 6x + 10$.",
              a: "$f'(x) = 2 x - 6 = 0 \\Rightarrow x = 3$. $f''(x) = 2 > 0$, so local minimum at $(3, 1)$."
            },
            {
              qid: "FD_035_e02",
              q: "Classify the stationary point of $f(x) = -x^2 + 4x + 1$.",
              a: "$f'(x) = 4 - 2 x = 0 \\Rightarrow x = 2$. $f''(x) = -2 < 0$, so local maximum at $(2, 5)$."
            },
            {
              qid: "FD_035_e03",
              q: "Classify the stationary points of $f(x) = x^3 - 12x$.",
              a: "$f'(x) = 3 x^{2} - 12 = 0 \\Rightarrow x = -2$ or $x = 2$. $f''(x) = 6 x$. $f''(-2) = -12 < 0$ (local max). $f''(2) = 12 > 0$ (local min)."
            }
          ],
          medium: [
            {
              qid: "FD_035_m01",
              q: "Classify the stationary points of $f(x) = x^3 - 3x + 2$.",
              a: "$f'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$. $f''(x) = 6x$. At $x = -1$: $f''(-1) = -6 < 0$ (local max). At $x = 1$: $f''(1) = 6 > 0$ (local min)."
            },
            {
              qid: "FD_035_m02",
              q: "Classify the stationary points of $f(x) = 3x^4 - 4x^3$.",
              a: "$f'(x) = 12 x^{2} \\left(x - 1\\right) = 12 x^{2} \\left(x - 1\\right) = 0 \\Rightarrow x = 0$ or $x = 1$. $f''(x) = 12 x \\left(3 x - 2\\right)$. $f''(0) = 0$ (inconclusive). $f''(1) = 12 > 0$ (local min at $(1, -1)$). At $x = 0$: check sign of $f'$: $f'(-0.1) > 0$, $f'(0.1) < 0$... Actually $f'(x) = 12x^2(x-1)$: for $x$ near $0$, $f'(x) < 0$ on both sides when $x < 1$, so $x = 0$ is an inflection point, not a turning point."
            },
            {
              qid: "FD_035_m03",
              q: "Find and classify the stationary point(s) of $f(x) = xe^{-x}$.",
              a: "$f'(x) = \\left(1 - x\\right) e^{- x} = 0 \\Rightarrow x = 1$. $f''(x) = \\left(x - 2\\right) e^{- x}$. $f''(1) = - \\frac{1}{e} < 0$, so local maximum at $(1, e^{-1})$."
            },
            {
              qid: "FD_035_m04",
              q: "Classify the stationary points of $f(x) = x^3 - 3x^2 - 9x + 5$.",
              a: "$f'(x) = 3 x^{2} - 6 x - 9 = 3 \\left(x - 3\\right) \\left(x + 1\\right) = 0 \\Rightarrow x = -1$ or $x = 3$. $f''(x) = 6 x - 6$. $f''(-1) = -12 < 0$ (local max at $(-1, 10))$. $f''(3) = 12 > 0$ (local min at $(3, -22))$."
            },
            {
              qid: "FD_035_m05",
              q: "Find and classify the stationary points of $f(x) = 2x^3 + 3x^2 - 36x + 10$.",
              a: "$f'(x) = 6 x^{2} + 6 x - 36 = 6 \\left(x - 2\\right) \\left(x + 3\\right) = 0 \\Rightarrow x = -3$ or $x = 2$. $f''(x) = 12 x + 6$. $f''(-3) = -30 < 0$ (local max). $f''(2) = 30 > 0$ (local min)."
            }
          ],
          hard: [
            {
              qid: "FD_035_h01",
              q: "Find and classify all stationary points of $f(x) = x^4 - 4x^3 + 4x^2$.",
              a: "$f'(x) = 4 x \\left(x^{2} - 3 x + 2\\right) = 4 x \\left(x - 2\\right) \\left(x - 1\\right) = 0 \\Rightarrow x = 0$ or $x = 2$. $f''(x) = 12 x^{2} - 24 x + 8$. $f''(0) = 8 > 0$ (local min at $(0, 0)$). $f''(2) = 8 > 0$ (local min at $(2, 0)$). Check $x = 0$: actually $f'(x) = 4x(x-2)^2$, so $x = 2$ has $f'$ same sign on both sides → not a turning point but an inflection."
            },
            {
              qid: "FD_035_h02",
              q: "Find and classify the stationary point(s) of $f(x) = \\frac{e^x}{x}$ for $x > 0$.",
              a: "$f'(x) = \\frac{\\left(x - 1\\right) e^{x}}{x^{2}} = 0 \\Rightarrow x - 1 = 0 \\Rightarrow x = 1$. $f''(x) = \\frac{\\left(x^{2} - 2 x + 2\\right) e^{x}}{x^{3}}$. $f''(1) = e > 0$, so local minimum at $(1, e)$."
            },
            {
              qid: "FD_035_h03",
              q: "Find and classify the stationary point(s) of $f(x) = x^2 \\ln(x)$ for $x > 0$.",
              a: "$f'(x) = x \\left(2 \\ln{\\left(x \\right)} + 1\\right) = 0$. Since $x > 0$: $2\\ln(x) + 1 = 0 \\Rightarrow \\ln(x) = -\\frac{1}{2} \\Rightarrow x = e^{-1/2} = \\frac{1}{\\sqrt{e}}$. $f''(x) = 2 \\ln{\\left(x \\right)} + 3$. $f''(e^{-1/2}) = 2\\ln(e^{-1/2}) + 3 = -1 + 3 = 2 > 0$ (local min)."
            },
            {
              qid: "FD_035_h04",
              q: "Find and classify the stationary points of $f(x) = x^3 e^{-x}$ for $x \\geq 0$.",
              a: "$f'(x) = x^{2} \\left(3 - x\\right) e^{- x} = 0 \\Rightarrow x^2(3-x) = 0 \\Rightarrow x = 0$ or $x = 3$. $f''(x) = x \\left(x^{2} - 6 x + 6\\right) e^{- x}$. $f''(0) = 0$ (inconclusive — check: $f'(x)$ changes from $0$ through $0$, $x = 0$ is an inflection). $f''(3) = - \\frac{9}{e^{3}} < 0$ (local max at $(3, 27e^{-3})$)."
            },
            {
              qid: "FD_035_h05",
              q: "Classify the stationary points of $f(x) = \\sin(x)\\cos(x)$ on $[0, \\pi]$.",
              a: "$f(x) = \\frac{1}{2}\\sin(2x)$, so $f'(x) = \\cos(2x) = 0 \\Rightarrow 2x = \\frac{\\pi}{2}, \\frac{3\\pi}{2} \\Rightarrow x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$. $f''(x) = -2\\sin(2x)$. $f''(\\pi/4) = -2 < 0$ (local max). $f''(3\\pi/4) = 2 > 0$ (local min)."
            }
          ]
        }
,

    {
          pt_id: "FD_036",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Finding $x$ and/or $y$ intercepts",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_036_e01",
              q: "Find the $x$ and $y$ intercepts of $f(x) = x^2 - 4x + 3$.",
              a: "$y$-intercept: $f(0) = 3$. $x$-intercepts: $\\left(x - 3\\right) \\left(x - 1\\right) = 0 \\Rightarrow x = 1$ or $x = 3$."
            },
            {
              qid: "FD_036_e02",
              q: "Find the intercepts of $f(x) = x^3 - x$.",
              a: "$y$-intercept: $f(0) = 0$. $x$-intercepts: $x^{3} - x = 0 \\Rightarrow x = -1, 0, 1$."
            },
            {
              qid: "FD_036_e03",
              q: "Find the intercepts of $f(x) = 2x + 6$.",
              a: "$y$-intercept: $f(0) = 6$. $x$-intercept: $2x + 6 = 0 \\Rightarrow x = -3$."
            }
          ],
          medium: [
            {
              qid: "FD_036_m01",
              q: "Find the $x$ and $y$ intercepts of $f(x) = xe^{-x}$.",
              a: "$y$-intercept: $f(0) = 0$. $x$-intercept: $xe^{-x} = 0 \\Rightarrow x = 0$ (since $e^{-x} \\neq 0$). Only intercept: $(0, 0)$."
            },
            {
              qid: "FD_036_m02",
              q: "Find the intercepts of $f(x) = x^2 e^x - xe^x$.",
              a: "$f(x) = xe^x(x - 1)$. $y$-intercept: $f(0) = 0$. $x$-intercepts: $xe^x(x-1) = 0$. Since $e^x \\neq 0$: $x = 0$ or $x = 1$."
            },
            {
              qid: "FD_036_m03",
              q: "Find the $x$-intercept(s) of $f(x) = x\\ln(x)$ for $x > 0$.",
              a: "$x\\ln(x) = 0$. Since $x > 0$: $\\ln(x) = 0 \\Rightarrow x = 1$. Intercept at $(1, 0)$."
            },
            {
              qid: "FD_036_m04",
              q: "Find the intercepts of $f(x) = e^x - 4$.",
              a: "$y$-intercept: $f(0) = 1 - 4 = -3$. $x$-intercept: $e^x = 4 \\Rightarrow x = \\ln(4) = 2\\ln(2)$."
            },
            {
              qid: "FD_036_m05",
              q: "Find the intercepts of $f(x) = \\frac{x-1}{x+2}$.",
              a: "$y$-intercept: $f(0) = \\frac{-1}{2} = -\\frac{1}{2}$. $x$-intercept: $x - 1 = 0 \\Rightarrow x = 1$."
            }
          ],
          hard: [
            {
              qid: "FD_036_h01",
              q: "Find all intercepts of $f(x) = x^3 - 4x^2 + 4x$ and state the multiplicity of each $x$-intercept.",
              a: "$f(x) = x(x-2)^2$. $y$-intercept: $f(0) = 0$. $x$-intercepts: $x = 0$ (multiplicity 1) and $x = 2$ (multiplicity 2, so the curve touches but doesn't cross)."
            },
            {
              qid: "FD_036_h02",
              q: "Find the intercepts of $f(x) = \\ln(x^2 + 1)$.",
              a: "$y$-intercept: $f(0) = \\ln(1) = 0$. $x$-intercepts: $\\ln(x^2+1) = 0 \\Rightarrow x^2 + 1 = 1 \\Rightarrow x = 0$. Only intercept: $(0, 0)$."
            },
            {
              qid: "FD_036_h03",
              q: "Find the $y$-intercept and the $x$-intercepts on $[0, 2\\pi]$ of $f(x) = \\sin(x) + \\cos(x) - 1$.",
              a: "$y$-intercept: $f(0) = 0 + 1 - 1 = 0$. For $x$-intercepts: $\\sin(x) + \\cos(x) = 1$. Using $R\\sin(x + \\alpha) = 1$ where $R = \\sqrt{2}$, $\\alpha = \\pi/4$: $\\sqrt{2}\\sin(x + \\pi/4) = 1 \\Rightarrow \\sin(x + \\pi/4) = \\frac{1}{\\sqrt{2}}$. So $x + \\pi/4 = \\pi/4$ or $3\\pi/4$. Thus $x = 0$ or $x = \\pi/2$."
            },
            {
              qid: "FD_036_h04",
              q: "Find all intercepts of $f(x) = \\frac{x^2 - 9}{x^2 - 4}$.",
              a: "$y$-intercept: $f(0) = \\frac{-9}{-4} = \\frac{9}{4}$. $x$-intercepts: $x^2 - 9 = 0 \\Rightarrow x = \\pm 3$. Note: $x = \\pm 2$ are vertical asymptotes (excluded)."
            },
            {
              qid: "FD_036_h05",
              q: "Find all intercepts of $f(x) = e^x - x - 2$, giving exact values where possible.",
              a: "$y$-intercept: $f(0) = 1 - 0 - 2 = -1$. $x$-intercepts: $e^x = x + 2$. At $x = 0$: $f(0) = -1 \\neq 0$. Check $f(\\ln 3) = 3 - \\ln 3 - 2 = 1 - \\ln 3 \\approx -0.1$, so root near $x \\approx 1.15$ (numerical). Also $f(-2) = e^{-2} + 0 - 2 < 0$, $f(-1) = e^{-1} - 1 < 0$... By inspection, no neat exact form — roots are approximately $x \\approx -1.84$ and $x \\approx 1.15$."
            }
          ]
        }
,

    {
          pt_id: "FD_037",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Finding locations of stationary and/or inflection points",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_037_e01",
              q: "Find the stationary point of $f(x) = x^2 - 4x + 7$.",
              a: "$f'(x) = 2 x - 4 = 0 \\Rightarrow x = 2$. $f(2) = 3$. Stationary point at $(2, 3)$."
            },
            {
              qid: "FD_037_e02",
              q: "Find all stationary points of $f(x) = x^3 - 3x^2$.",
              a: "$f'(x) = 3 x \\left(x - 2\\right) = 3 x \\left(x - 2\\right) = 0 \\Rightarrow x = 0$ or $x = 2$. Points: $(0, 0)$ and $(2, -4)$."
            },
            {
              qid: "FD_037_e03",
              q: "Find the inflection point of $f(x) = x^3 - 6x^2 + 12x$.",
              a: "$f''(x) = 6 x - 12 = 0 \\Rightarrow x = 2$. $f(2) = 8$. Inflection point at $(2, 8)$."
            }
          ],
          medium: [
            {
              qid: "FD_037_m01",
              q: "Find all stationary points of $f(x) = 2x^3 - 9x^2 + 12x - 4$.",
              a: "$f'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2) = 0$, so $x = 1$ and $x = 2$. Points: $(1, 1)$ and $(2, 0)$."
            },
            {
              qid: "FD_037_m02",
              q: "Find the inflection point(s) of $f(x) = x^4 - 6x^2 + 8x$.",
              a: "$f'(x) = 4x^3 - 12x + 8$, $f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 0$ at $x = \\pm 1$. Points: $(1, 3)$ and $(-1, -13)$."
            },
            {
              qid: "FD_037_m03",
              q: "Find the stationary point of $f(x) = xe^{-x}$.",
              a: "$f'(x) = \\left(1 - x\\right) e^{- x} = 0 \\Rightarrow 1 - x = 0 \\Rightarrow x = 1$. $f(1) = e^{-1}$. Stationary point at $(1, e^{-1})$."
            },
            {
              qid: "FD_037_m04",
              q: "Find all stationary points and inflection points of $f(x) = x^3 + 3x^2 - 9x + 5$.",
              a: "$f'(x) = 3 x^{2} + 6 x - 9 = 3 \\left(x - 1\\right) \\left(x + 3\\right) = 0 \\Rightarrow x = -3$ or $x = 1$. Stationary points: $(-3, 32)$ and $(1, 0)$. $f''(x) = 6 x + 6 = 0 \\Rightarrow x = -1$. Inflection at $(-1, 16)$."
            },
            {
              qid: "FD_037_m05",
              q: "Find any stationary points of $f(x) = \\ln(x^2 + 4)$.",
              a: "$f'(x) = \\frac{2 x}{x^{2} + 4} = 0 \\Rightarrow x = 0$. $f(0) = \\ln(4) = 2\\ln(2)$. Stationary point at $(0, 2\\ln 2)$."
            }
          ],
          hard: [
            {
              qid: "FD_037_h01",
              q: "Find all stationary points and inflection points of $f(x) = x^4 - 8x^2 + 3$.",
              a: "$f'(x) = 4 x \\left(x^{2} - 4\\right) = 4 x \\left(x^{2} - 4\\right) = 0 \\Rightarrow x = 0, \\pm 2$. Points: $(0, 3)$, $(2, -13)$, $(-2, -13)$. $f''(x) = 12 x^{2} - 16 = 0 \\Rightarrow x = \\pm\\frac{2 \\sqrt{3}}{3}$. Inflections at $\\left(\\pm\\frac{2 \\sqrt{3}}{3}, - \\frac{53}{9}\\right)$."
            },
            {
              qid: "FD_037_h02",
              q: "Find all stationary and inflection points of $f(x) = x^2 e^{-x}$.",
              a: "$f'(x) = x \\left(2 - x\\right) e^{- x} = 0 \\Rightarrow x(2-x) = 0 \\Rightarrow x = 0$ or $x = 2$. Stationary points: $(0, 0)$ and $(2, 4e^{-2})$. $f''(x) = \\left(x^{2} - 4 x + 2\\right) e^{- x} = 0 \\Rightarrow x^2 - 4x + 2 = 0 \\Rightarrow x = 2 \\pm \\sqrt{2}$. Two inflection points."
            },
            {
              qid: "FD_037_h03",
              q: "Find the inflection points of $f(x) = \\sin(x) + x$ on $[0, 4\\pi]$.",
              a: "$f''(x) = -\\sin(x) = 0 \\Rightarrow \\sin(x) = 0 \\Rightarrow x = 0, \\pi, 2\\pi, 3\\pi, 4\\pi$. Check concavity change: $f''$ changes sign at each, so inflection points at $x = \\pi, 2\\pi, 3\\pi$ (endpoints excluded). Points: $(\\pi, \\pi)$, $(2\\pi, 2\\pi)$, $(3\\pi, 3\\pi)$."
            },
            {
              qid: "FD_037_h04",
              q: "Find all stationary points of $f(x) = (x^2 - 1)^2$ and classify them.",
              a: "$f'(x) = 4 x \\left(x^{2} - 1\\right) = 4x(x-1)(x+1) = 0 \\Rightarrow x = -1, 0, 1$. $f''(x) = 12 x^{2} - 4$. $f''(-1) = 8 > 0$ (local min, $y=0$). $f''(0) = -4 < 0$ (local max, $y=1$). $f''(1) = 8 > 0$ (local min, $y=0$)."
            },
            {
              qid: "FD_037_h05",
              q: "Find all stationary points of $f(x) = \\frac{x}{x^2+1}$.",
              a: "$f'(x) = \\frac{1 - x^{2}}{x^{4} + 2 x^{2} + 1} = 0 \\Rightarrow 1 - x^2 = 0 \\Rightarrow x = \\pm 1$. $f(1) = \\frac{1}{2}$, $f(-1) = -\\frac{1}{2}$. Stationary points at $\\left(1, \\frac{1}{2}\\right)$ and $\\left(-1, -\\frac{1}{2}\\right)$."
            }
          ]
        }
,

    {
          pt_id: "FD_038",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Finding where maximal rate of change occurs by finding vertical inflection point",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_038_e01",
              q: "The number of items sold is $N(t) = -t^3 + 6t^2 + 15t$. Find the time when sales are growing fastest.",
              a: "Rate of growth: $N'(t) = - 3 x^{2} + 12 x + 15$. Max rate when $N''(t) = 12 - 6 x = 0 \\Rightarrow t = 2$. $N'''(t) = -6 < 0$ confirms max. Greatest rate: $N'(2) = 27$ items per unit time."
            },
            {
              qid: "FD_038_e02",
              q: "A population is modelled by $P(t) = -t^3 + 9t^2 + 3$. At what time is the population growing most rapidly?",
              a: "$P'(t) = 3 t \\left(6 - t\\right)$. $P''(t) = 18 - 6 t = 0 \\Rightarrow t = 3$. Max rate at $t = 3$."
            },
            {
              qid: "FD_038_e03",
              q: "Revenue is modelled by $R(t) = -2t^3 + 18t^2 + 10t$. Find the time of maximum revenue growth and the growth rate at that time.",
              a: "$R'(t) = - 6 t^{2} + 36 t + 10$. $R''(t) = 36 - 12 t = 0 \\Rightarrow t = 3$. Maximum growth rate: $R'(3) = 64$."
            }
          ],
          medium: [
            {
              qid: "FD_038_m01",
              q: "The number of bacteria in a culture is modelled by $N(t) = \\frac{1000}{1 + 9e^{-0.5t}}$. Find the time when the rate of growth is greatest.",
              a: "The maximum rate of change occurs at the inflection point. Since this is a logistic curve, inflection occurs when $N = 500$. Solving: $500 = \\frac{1000}{1+9e^{-0.5t}} \\Rightarrow 9e^{-0.5t} = 1 \\Rightarrow t = \\frac{\\ln 9}{0.5} = 2\\ln 9 \\approx 4.39$"
            },
            {
              qid: "FD_038_m02",
              q: "Profit is modelled by $P(t) = -\\frac{1}{4}t^4 + 2t^3 - 3t^2 + 24t$. Find when profit is growing fastest.",
              a: "$P'(t) = - t^{3} + 6 t^{2} - 6 t + 24$. $P''(t) = - 3 t^{2} + 12 t - 6 = 0$. Solving $- 3 t^{2} + 12 t - 6 = 0$: inflection points at $t = 2 - sqrt(2)$ and $t = sqrt(2) + 2$. $P'''(t) = 12 - 6 t$. $P'''(sqrt(2) + 2) = -6*sqrt(2) < 0$ so max rate at $t = sqrt(2) + 2$."
            },
            {
              qid: "FD_038_m03",
              q: "The spread of a rumour is modelled by $R(t) = \\frac{500}{1 + 24e^{-0.3t}}$. At what time is the rumour spreading fastest?",
              a: "For a logistic model $\\frac{L}{1+Ae^{-kt}}$, the inflection (max rate) occurs when $R = \\frac{L}{2} = 250$. Solving: $250 = \\frac{500}{1+24e^{-0.3t}} \\Rightarrow 24e^{-0.3t} = 1 \\Rightarrow e^{-0.3t} = \\frac{1}{24} \\Rightarrow t = \\frac{\\ln 24}{0.3} \\approx 10.6$."
            },
            {
              qid: "FD_038_m04",
              q: "The velocity of fluid flow is $v(t) = 100t^2 e^{-t/2}$. Find the time when the velocity is increasing most rapidly.",
              a: "We need the max of $v'(t)$, which occurs when $v''(t) = 0$. $v'(t) = 50 t \\left(4 - t\\right) e^{- \\frac{t}{2}}$. $v''(t) = 25 \\left(t^{2} - 8 t + 8\\right) e^{- \\frac{t}{2}} = 0$. Factor: $t^2 - 8t + 4 = 0$ gives $t = 4 \\pm 2\\sqrt{3}$. The maximum rate of increase occurs at $t = 4 - 2\\sqrt{3} \\approx 0.54$ (the earlier inflection where rate goes from increasing to decreasing)."
            },
            {
              qid: "FD_038_m05",
              q: "The concentration of a drug is $C(t) = t^3 e^{-t}$ mg/L. Find when the concentration is increasing most rapidly.",
              a: "$C'(t) = t^{2} \\left(3 - t\\right) e^{- t}$. Max of $C'$ when $C''(t) = 0$. $C''(t) = t \\left(t^{2} - 6 t + 6\\right) e^{- t} = 0$. Since $e^{-t} > 0$ and $t > 0$: $t^2 - 6t + 6 = 0 \\Rightarrow t = 3 - \\sqrt{3} \\approx 1.27$ (taking the value where $C'''(t) < 0$)."
            }
          ],
          hard: [
            {
              qid: "FD_038_h01",
              q: "The number of users of an app is $N(t) = \\frac{10000}{1 + 49e^{-0.4t}}$. Find: (a) the time of fastest growth, (b) the number of users at that time, (c) the rate of growth at that time.",
              a: "(a) Inflection at $N = 5000$: $5000 = \\frac{10000}{1+49e^{-0.4t}} \\Rightarrow 49e^{-0.4t} = 1 \\Rightarrow t = \\frac{\\ln 49}{0.4} = \\frac{2\\ln 7}{0.4} = 5\\ln 7 \\approx 9.73$. (b) $N = 5000$ users. (c) $N'(t) = \\frac{10000 \\times 49 \\times 0.4 \\times e^{-0.4t}}{(1+49e^{-0.4t})^2}$. At inflection: $e^{-0.4t} = \\frac{1}{49}$, so $N'= \\frac{10000 \\times 0.4 \\times 1}{(1+1)^2} = \\frac{4000}{4} = 1000$ users per unit time."
            },
            {
              qid: "FD_038_h02",
              q: "The height of a tree (in metres) is modelled by $H(t) = \\frac{20}{1 + 3e^{-0.2t}}$. Show that the tree is growing fastest when $H = 10$ and find this rate.",
              a: "Logistic inflection at $H = \\frac{L}{2} = 10$. Solving: $10(1+3e^{-0.2t}) = 20 \\Rightarrow 3e^{-0.2t} = 1 \\Rightarrow t = 5\\ln 3$. Rate: $H'(t) = \\frac{20 \\times 3 \\times 0.2 \\times e^{-0.2t}}{(1+3e^{-0.2t})^2}$. At $t = 5\\ln 3$: $e^{-0.2t} = \\frac{1}{3}$, so $H' = \\frac{20 \\times 0.2 \\times 1}{(1+1)^2} = \\frac{4}{4} = 1$ m per unit time."
            },
            {
              qid: "FD_038_h03",
              q: "The speed of a chemical reaction is $v(t) = 50te^{-t/4}$. Find the time at which the speed is increasing most rapidly.",
              a: "$v'(t) = \\frac{25 \\left(4 - t\\right) e^{- \\frac{t}{4}}}{2}$. $v''(t) = \\frac{25 \\left(t - 8\\right) e^{- \\frac{t}{4}}}{8} = 0$. Since $e^{-t/4} > 0$: $t - 8 = 0$ but we need $v'' = 0$... Actually $v''(t) = \\frac{50e^{-t/4}}{16}(t - 16 + 2 \\cdot 4) = ...$. Properly: the inflection of $v$ needs $v'' = 0$. But we want max of $v$, not max rate of $v$. Actually, the question asks when $v$ increases fastest, i.e. max of $v'$, which is when $v'' = 0$. Solving: $t = 8$."
            },
            {
              qid: "FD_038_h04",
              q: "A disease spreads such that the number infected is $I(t) = 5000 - 4800e^{-0.1t} - 200e^{-t}$. Find when the disease is spreading fastest.",
              a: "$I'(t) = 480e^{-0.1t} + 200e^{-t}$. $I''(t) = -48e^{-0.1t} - 200e^{-t} = 0 \\Rightarrow 48e^{-0.1t} = -200e^{-t}$. Since both terms of $I''$ are negative for $t > 0$, $I''(t) < 0$ always. So $I'$ is strictly decreasing, meaning the disease spreads fastest at $t = 0$ with rate $I'(0) = 480 + 200 = 680$ people per unit time."
            },
            {
              qid: "FD_038_h05",
              q: "A company's revenue is $R(t) = -\\frac{3}{4}t^4 + 10t^3 - 36t^2 + 48t$ (in thousands). Find all times at which the rate of revenue growth has a local maximum, and determine which gives the greatest growth rate.",
              a: "$R'(t) = - 3 t^{3} + 30 t^{2} - 72 t + 48$. $R''(t) = - 9 t^{2} + 60 t - 72 = - 9 t^{2} + 60 t - 72 = 0$. Inflection points of $R$ at $t = 10/3 - 2*sqrt(7)/3$ and $t = 2*sqrt(7)/3 + 10/3$. $R'''(t) = 60 - 18 t$. At $t = 10/3 - 2*sqrt(7)/3$: $R''' = 12*sqrt(7)$ (> 0, local min of rate). At $t = 2*sqrt(7)/3 + 10/3$: $R''' = -12*sqrt(7)$ (< 0, local max of rate). Compare $R'$ values at the local maxima to find the greatest."
            }
          ]
        }
,

    {
          pt_id: "FD_039",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Sketching of Graphs",
          pt: "Sketching graphs of function based on values of function, derivatives, second derivatives from calculations",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_039_e01",
              q: "For $f(x) = x^2 - 4x + 3$, find the intercepts, stationary point and its nature, and describe the shape of the graph.",
              a: "$y$-intercept: $(0, 3)$. $x$-intercepts: $\\left(x - 3\\right) \\left(x - 1\\right) = 0$, so $x = 1$ and $x = 3$. $f'(x) = 2 x - 4 = 0 \\Rightarrow x = 2$. $f(2) = -1$. $f''(x) = 2 > 0$ (local min). Upward parabola with vertex at $(2, -1)$."
            },
            {
              qid: "FD_039_e02",
              q: "For $f(x) = x^3 - 3x$, find the intercepts, stationary points and their nature, and the inflection point.",
              a: "$y$-intercept: $(0, 0)$. $x$-intercepts: $x(x^{2} - 3) = 0$, so $x = 0, \\pm\\sqrt{3}$. $f'(x) = 3 x^{2} - 3 = 0 \\Rightarrow x = -1, 1$. $f''(x) = 6 x$. $f''(-1) = -6 < 0$ (local max at $(-1, 2)$). $f''(1) = 6 > 0$ (local min at $(1, -2)$). Inflection at $x = 0$, point $(0, 0)$."
            },
            {
              qid: "FD_039_e03",
              q: "For $f(x) = -x^2 + 6x - 5$, find the intercepts, vertex (stationary point), and describe the graph.",
              a: "$y$-intercept: $(0, -5)$. $x$-intercepts: $- \\left(x - 5\\right) \\left(x - 1\\right) = 0$, so $x = 1$ and $x = 5$. $f'(x) = 6 - 2 x = 0 \\Rightarrow x = 3$. $f(3) = 4$. $f''(x) = -2 < 0$ (local max). Downward parabola with vertex at $(3, 4)$."
            }
          ],
          medium: [
            {
              qid: "FD_039_m01",
              q: "Sketch the graph of $f(x) = x^3 - 3x^2$ by finding all intercepts, stationary points (and their nature), and inflection points.",
              a: "$x$-int: $x = 0, 3$. $y$-int: $0$. $f'(x) = 3x^2 - 6x = 3x(x-2) = 0$ at $x = 0$ (local max, $y = 0$) and $x = 2$ (local min, $y = -4$). $f''(x) = 6x - 6 = 0$ at $x = 1$ (inflection at $(1, -2)$). Graph rises to $(0,0)$, falls to $(2,-4)$, then rises."
            },
            {
              qid: "FD_039_m02",
              q: "Find all key features and sketch $f(x) = x^3 - 6x^2 + 9x$.",
              a: "$y$-int: $(0, 0)$. $x$-int: $x \\left(x - 3\\right)^{2} = 0$, so $x = 0$ and $x = 3$ (double root — touches). $f'(x) = 3 x^{2} - 12 x + 9 = 3 \\left(x - 3\\right) \\left(x - 1\\right) = 0 \\Rightarrow x = 1, 3$. $f''(x) = 6 x - 12$. $f''(1) = -6 < 0$ (local max at $(1, 4)$). $f''(3) = 6 > 0$ (local min at $(3, 0)$). Inflection at $x = 2$, point $(2, 2)$."
            },
            {
              qid: "FD_039_m03",
              q: "Find all key features and sketch $f(x) = x^4 - 4x^3$.",
              a: "$y$-int: $(0, 0)$. $x$-int: $x^3(x-4) = 0$, so $x = 0$ (triple root) and $x = 4$. $f'(x) = 4 x^{2} \\left(x - 3\\right) = 4 x^{2} \\left(x - 3\\right) = 0 \\Rightarrow x = 0, 3$. $f''(x) = 12 x \\left(x - 2\\right)$. $f''(0) = 0$ (inconclusive — $f'$ doesn't change sign, so inflection). $f''(3) = 36 > 0$ (local min at $(3, -27)$). Inflection: $12 x \\left(x - 2\\right) = 0 \\Rightarrow x = 0, 2$. As $x \\to \\pm\\infty$, $f \\to +\\infty$."
            },
            {
              qid: "FD_039_m04",
              q: "Find all key features and sketch $f(x) = xe^{-x}$ for $x \\geq 0$.",
              a: "$y$-int: $(0, 0)$. $x$-int: $x = 0$. $f'(x) = \\left(1 - x\\right) e^{- x} = 0 \\Rightarrow x = 1$. $f(1) = e^{-1}$. $f''(x) = \\left(x - 2\\right) e^{- x}$. $f''(1) = -e^{-1} < 0$ (local max at $(1, e^{-1})$). Inflection: $x - 2 = 0 \\Rightarrow x = 2$, point $(2, 2e^{-2})$. As $x \\to \\infty$, $f \\to 0^+$."
            },
            {
              qid: "FD_039_m05",
              q: "Find all key features and sketch $f(x) = x^2 - 2x - 8$. Include intercepts, vertex, axis of symmetry, and concavity.",
              a: "$y$-int: $(0, -8)$. $x$-int: $\\left(x - 4\\right) \\left(x + 2\\right) = 0$, so $x = -2, 4$. $f'(x) = 2 x - 2 = 0 \\Rightarrow x = 1$. Vertex: $(1, -9)$. Axis of symmetry: $x = 1$. $f''(x) = 2 > 0$, concave up everywhere. Upward parabola."
            }
          ],
          hard: [
            {
              qid: "FD_039_h01",
              q: "Find all key features and sketch $f(x) = x^3 - 3x^2 - 9x + 27$.",
              a: "$y$-int: $(0, 27)$. $x$-int: $\\left(x - 3\\right)^{2} \\left(x + 3\\right) = 0$, so $x = -3$ (double root) and $x = 3$. $f'(x) = 3 x^{2} - 6 x - 9 = 3 \\left(x - 3\\right) \\left(x + 1\\right) = 0 \\Rightarrow x = -1, 3$. $f''(x) = 6 x - 6$. $f''(-1) = -12$ (max at $(-1, 32)$). $f''(3) = 12$ (min at $(3, 0)$). Inflection at $x = 1$, $f(1) = 16$."
            },
            {
              qid: "FD_039_h02",
              q: "Find all key features and sketch $f(x) = \\frac{x^2 - 4}{x}$ for $x \\neq 0$. Include asymptotes.",
              a: "Rewrite: $f(x) = x - \\frac{4}{x}$. No $y$-intercept (undefined at $x = 0$). Vertical asymptote: $x = 0$. Oblique asymptote: $y = x$. $x$-int: $x^2 - 4 = 0 \\Rightarrow x = \\pm 2$. $f'(x) = 1 + \\frac{4}{x^{2}} = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$. But $f(\\pm 2) = 0$, so stationary points are at the $x$-intercepts. $f''(x) = - \\frac{8}{x^{3}}$. $f''(2) = -1 > 0$ (local min). $f''(-2) = 1 < 0$ (local max). Odd function: symmetric about origin."
            },
            {
              qid: "FD_039_h03",
              q: "Find all key features and sketch $f(x) = x^2 e^{-x}$.",
              a: "$y$-int: $(0, 0)$. $x$-int: $x = 0$ (double root). $f'(x) = x \\left(2 - x\\right) e^{- x} = 0 \\Rightarrow x(2-x) = 0$, so $x = 0, 2$. $f(2) = 4e^{-2}$. $f''(x) = \\left(x^{2} - 4 x + 2\\right) e^{- x}$. $f''(0) = 0$ (inconclusive — check: $f'$ goes from neg to $0$ to pos? No, $f'(x) = x(2-x)e^{-x}$: for small positive $x$, $f' > 0$ so $x=0$ is local min). $f''(2) = (4-8+2)e^{-2} = -2e^{-2} < 0$ (local max at $(2, 4e^{-2})$). Inflections at $x = 2 \\pm \\sqrt{2}$. As $x \\to \\infty$, $f \\to 0^+$."
            },
            {
              qid: "FD_039_h04",
              q: "Find all key features and sketch $f(x) = \\frac{\\ln x}{x}$ for $x > 0$.",
              a: "Domain: $x > 0$. $x$-int: $\\ln x = 0 \\Rightarrow x = 1$. No $y$-int (not defined at $x = 0$). $f'(x) = \\frac{1 - \\ln{\\left(x \\right)}}{x^{2}} = 0 \\Rightarrow 1 - \\ln x = 0 \\Rightarrow x = e$. $f(e) = \\frac{1}{e}$. $f''(x) = \\frac{2 \\ln{\\left(x \\right)} - 3}{x^{3}}$. At $x = e$: numerator $= 2\\ln e - 3 = -1 < 0$ (local max at $(e, 1/e)$). As $x \\to 0^+$, $f \\to -\\infty$. As $x \\to \\infty$, $f \\to 0^+$. Inflection when $2\\ln x - 3 = 0$, i.e. $x = e^{3/2}$."
            },
            {
              qid: "FD_039_h05",
              q: "Find all key features and sketch $f(x) = x^4 - 8x^2 + 16$.",
              a: "$f(x) = (x^2 - 4)^2$. $y$-int: $(0, 16)$. $x$-int: $(x^2-4)^2 = 0 \\Rightarrow x = \\pm 2$ (both double roots — touches axis). $f'(x) = 4 x \\left(x^{2} - 4\\right) = 4x(x-2)(x+2) = 0 \\Rightarrow x = 0, \\pm 2$. $f''(x) = 12 x^{2} - 16$. $f''(0) = -16 < 0$ (local max at $(0, 16)$). $f''(2) = 32 > 0$ (local min at $(2, 0)$). $f''(-2) = 32 > 0$ (local min at $(-2, 0)$). Even function, W-shape."
            }
          ]
        }
,

    {
          pt_id: "FD_040",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Sketching of Graphs",
          pt: "Sketching graphs of function based on values of function, derivatives, second derivatives from given table",
          testing: "",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_040_e01",
              q: "The following is known about $f(x)$:\n- $f(0) = 1$, $f(2) = 5$, $f(4) = 1$\n- $f'(x) > 0$ for $0 < x < 2$, $f'(x) < 0$ for $x > 2$, $f'(2) = 0$\nSketch a possible graph of $f(x)$ for $x \\geq 0$.",
              a: "Graph starts at $(0, 1)$, increases to a maximum at $(2, 5)$, then decreases through $(4, 1)$. Smooth hill-shaped curve."
            },
            {
              qid: "FD_040_e02",
              q: "The following is known about $g(x)$:\n- $g(0) = -3$, $g(3) = 0$, $g(6) = 9$\n- $g'(x) > 0$ for all $x$\n- $g'(3) = 2$\nSketch a possible graph of $g(x)$.",
              a: "Graph passes through $(0, -3)$, $(3, 0)$, $(6, 9)$ and is always increasing. The gradient at $x = 3$ is $2$. A smooth increasing curve."
            },
            {
              qid: "FD_040_e03",
              q: "The following is known about $h(x)$:\n- $h(-1) = 4$, $h(1) = 0$, $h(3) = 4$\n- $h'(x) < 0$ for $x < 1$, $h'(1) = 0$, $h'(x) > 0$ for $x > 1$\nSketch a possible graph and state the type of stationary point.",
              a: "Graph decreases from $(-1, 4)$ to a minimum at $(1, 0)$, then increases to $(3, 4)$. The stationary point at $x = 1$ is a local minimum."
            }
          ],
          medium: [
            {
              qid: "FD_040_m01",
              q: "The following information is known about $f(x)$:\n- $f(0) = 2$, $f(3) = -1$, $f(5) = 4$\n- $f'(x) < 0$ for $0 < x < 3$, $f'(x) > 0$ for $x > 3$, $f'(3) = 0$\n- $f''(x) < 0$ for $x < 1$, $f''(x) > 0$ for $x > 1$\nSketch a possible graph of $f(x)$ for $x \\geq 0$.",
              a: "Starts at $(0, 2)$, decreasing and concave down until inflection near $x = 1$, continues decreasing but concave up, reaches minimum at $(3, -1)$, then increases through $(5, 4)$."
            },
            {
              qid: "FD_040_m02",
              q: "A function $f(x)$ has the following properties:\n| $x$ | $f(x)$ | $f'(x)$ | $f''(x)$ |\n|-----|--------|---------|----------|\n| 0   | 3      | 0       | $-2$     |\n| 2   | 1      | $-1$    | 0        |\n| 4   | 0      | 0       | 2        |\nAlso, $f'(x) < 0$ for $0 < x < 4$ and $f'(x) > 0$ for $x > 4$.\nSketch a possible graph.",
              a: "Local max at $(0, 3)$ (since $f'(0) = 0$, $f''(0) < 0$). Decreasing and concave down until inflection at $x = 2$ where $f = 1$. Then decreasing and concave up to local min at $(4, 0)$ (since $f'(4) = 0$, $f''(4) > 0$). Then increasing."
            },
            {
              qid: "FD_040_m03",
              q: "The following sign diagrams apply to $f(x)$:\n- $f'(x)$: positive for $x < -1$, zero at $x = -1$, negative for $-1 < x < 2$, zero at $x = 2$, positive for $x > 2$\n- $f(-1) = 4$, $f(2) = -5$, $f(0) = 0$\nSketch a possible graph.",
              a: "Increasing to local max at $(-1, 4)$, decreasing through $(0, 0)$ to local min at $(2, -5)$, then increasing. The graph crosses the $x$-axis at $(0, 0)$."
            },
            {
              qid: "FD_040_m04",
              q: "A function satisfies:\n- $f(0) = 0$, and as $x \\to \\infty$, $f(x) \\to 3$\n- $f'(x) > 0$ for all $x > 0$\n- $f''(x) > 0$ for $0 < x < 2$, $f''(x) < 0$ for $x > 2$\nSketch a possible graph for $x \\geq 0$.",
              a: "Starts at origin, always increasing toward horizontal asymptote $y = 3$. Concave up for $0 < x < 2$ (rate of increase accelerating), inflection at $x = 2$, concave down for $x > 2$ (rate of increase decelerating). S-shaped curve approaching $y = 3$."
            },
            {
              qid: "FD_040_m05",
              q: "A function $f(x)$ has these properties:\n- $f(-2) = 0$, $f(0) = -4$, $f(2) = 0$\n- $f'(-2) = 0$, $f'(0) = 0$, $f'(2) = 0$\n- $f''(-2) > 0$, $f''(0) < 0$, $f''(2) > 0$\nSketch a possible graph of $f(x)$.",
              a: "Local min at $(-2, 0)$ (touches $x$-axis). Increases to local max at $(0, -4)$... Wait — $f(0) = -4$ with $f''(0) < 0$ means local max at $(0, -4)$. Then decreases to local min at $(2, 0)$ (touches $x$-axis). W-shape entirely below the $x$-axis, touching it at $x = \\pm 2$."
            }
          ],
          hard: [
            {
              qid: "FD_040_h01",
              q: "A function $f(x)$ has these properties:\n- Domain: $x > 0$\n- $f(1) = 0$, $f(e) = \\frac{1}{e}$\n- As $x \\to 0^+$, $f(x) \\to -\\infty$. As $x \\to \\infty$, $f(x) \\to 0^+$.\n- $f'(e) = 0$, $f'(x) > 0$ for $0 < x < e$, $f'(x) < 0$ for $x > e$\n- $f''(x)$ changes sign at $x = e^{3/2}$\nSketch a possible graph.",
              a: "The function resembles $\\frac{\\ln x}{x}$. From $x \\to 0^+$ it rises from $-\\infty$, crosses the $x$-axis at $x = 1$, reaches a maximum at $(e, 1/e)$, then decreases toward $0$. Inflection at $x = e^{3/2}$ where concavity changes from down to up."
            },
            {
              qid: "FD_040_h02",
              q: "The following information is known about a continuous function $f(x)$:\n| Interval | $f'(x)$ | $f''(x)$ |\n|----------|---------|----------|\n| $x < -2$ | $+$ | $+$ |\n| $x = -2$ | $0$ | $0$ |\n| $-2 < x < 0$ | $-$ | $+$ |\n| $x = 0$ | $0$ | $+$ |\n| $0 < x < 3$ | $+$ | $+$ |\n| $x = 3$ | $+$ | $0$ |\n| $x > 3$ | $+$ | $-$ |\nAlso $f(-2) = 5$, $f(0) = 1$, $f(3) = 10$. Sketch a possible graph.",
              a: "Increasing and concave up to $x = -2$ where there's a horizontal inflection at $(-2, 5)$. Then decreasing and concave up to local min at $(0, 1)$. Increasing and concave up from $0$ to inflection at $(3, 10)$. Then increasing but concave down for $x > 3$."
            },
            {
              qid: "FD_040_h03",
              q: "A function $f(x)$ satisfies:\n- Vertical asymptote at $x = 2$, horizontal asymptote $y = 1$\n- $f(0) = 0$, $f(4) = 2$\n- $f'(x) > 0$ for all $x \\neq 2$\n- $f''(x) > 0$ for $x < 2$, $f''(x) < 0$ for $x > 2$\nSketch a possible graph.",
              a: "For $x < 2$: starts near $y = 1$ from the left, increasing and concave up, passes through $(0, 0)$, then $f \\to +\\infty$ as $x \\to 2^-$. For $x > 2$: $f$ comes from $-\\infty$ as $x \\to 2^+$, increasing and concave down, passes through $(4, 2)$, approaching $y = 1$ from above. Resembles $\\frac{x}{x-2} + $ adjustment."
            },
            {
              qid: "FD_040_h04",
              q: "A function $f(x)$ defined for $x \\geq 0$ has:\n| $x$ | $f(x)$ | $f'(x)$ | $f''(x)$ |\n|-----|--------|---------|----------|\n| 0   | 0      | 0       | 2        |\n| 2   | $4e^{-2}$ | 0  | $-2e^{-2}$ |\nAlso: $f'(x) > 0$ for $0 < x < 2$, $f'(x) < 0$ for $x > 2$, $f(x) \\to 0$ as $x \\to \\infty$.\nSketch the graph and identify the nature of each stationary point.",
              a: "At $(0, 0)$: $f'(0) = 0$, $f''(0) = 2 > 0$, so local min. At $(2, 4e^{-2})$: $f'(2) = 0$, $f''(2) < 0$, so local max. Graph rises from min at origin to max at $(2, 4e^{-2} \\approx 0.54)$, then decreases toward $0$. This resembles $x^2 e^{-x}$."
            },
            {
              qid: "FD_040_h05",
              q: "A function $f(x)$ on $[0, 2\\pi]$ has:\n- $f(0) = 1$, $f(\\pi/2) = 2$, $f(\\pi) = 1$, $f(3\\pi/2) = 0$, $f(2\\pi) = 1$\n- $f'(0) > 0$, $f'(\\pi/2) = 0$, $f'(\\pi) < 0$, $f'(3\\pi/2) = 0$, $f'(2\\pi) > 0$\n- $f''(\\pi/2) < 0$, $f''(3\\pi/2) > 0$\nSketch the graph and describe its shape.",
              a: "Local max at $(\\pi/2, 2)$ ($f' = 0$, $f'' < 0$). Local min at $(3\\pi/2, 0)$ ($f' = 0$, $f'' > 0$). Graph oscillates: rises from $(0, 1)$ to max $(\\pi/2, 2)$, falls through $(\\pi, 1)$ to min $(3\\pi/2, 0)$, rises to $(2\\pi, 1)$. This resembles $1 + \\sin(x)$ or $1 + \\cos(x - \\pi/2)$."
            }
          ]
        }
,

    {
          pt_id: "FD_041",
          topic: "Differentiation",
          subtopic: "Small Increments",
          concept: "Basic Use of Small Increments Formula",
          pt: "Comparing incremental estimate to true value and explaining limitation of linear approximation",
          testing: "",
          reason_bank: ["wrong_rule", "substitution_error", "sign_error", "algebra_slip", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_041_e01",
              q: "For $f(x) = x^2$, use the increments formula to estimate $f(3.1)$ and compare with the true value.",
              a: "$f'(x) = 2x$. Estimate: $f(3.1) \\approx f(3) + f'(3)(0.1) = 9 + 6(0.1) = 9.6$. True: $3.1^2 = 9.610000000000001$. Error: $0.010000000000001563$. Underestimate because $f''(x) = 2 > 0$ (concave up)."
            },
            {
              qid: "FD_041_e02",
              q: "For $f(x) = x^3$, use the increments formula to estimate $f(2.05)$ and compare with the true value.",
              a: "$f'(x) = 3x^2$. Estimate: $f(2.05) \\approx f(2) + f'(2)(0.05) = 8 + 12(0.05) = 8.6$. True: $2.05^3 = 8.615124999999997$. Underestimate since $f''(2) = 12 > 0$ (concave up)."
            },
            {
              qid: "FD_041_e03",
              q: "For $f(x) = \\frac{1}{x}$, use the increments formula to estimate $f(2.1)$ and compare with the true value.",
              a: "$f'(x) = -\\frac{1}{x^2}$. Estimate: $f(2.1) \\approx f(2) + f'(2)(0.1) = 0.5 + (-0.25)(0.1) = 0.475$. True: $\\frac{1}{2.1} \\approx 0.4762$. The estimate is slightly less than the true value. This is an underestimate because $f''(x) = \\frac{2}{x^3} > 0$ (concave up), so the tangent line lies below the curve."
            }
          ],
          medium: [
            {
              qid: "FD_041_m01",
              q: "For $f(x) = x^3$, use the increments formula to estimate $f(2.1)$ and compare with the true value. Explain any difference.",
              a: "$f'(x) = 3x^2$. Estimate: $f(2.1) \\approx f(2) + 3(4)(0.1) = 8 + 1.2 = 9.2$. True value: $2.1^3 = 9.261$. The linear approximation underestimates because the function is concave up ($f'' > 0$), so the tangent line lies below the curve."
            },
            {
              qid: "FD_041_m02",
              q: "Use the increments formula to estimate $\\sqrt{26}$ starting from $\\sqrt{25}$. Compare with the true value and explain the direction of error.",
              a: "$f(x) = \\sqrt{x}$, $f'(x) = \\frac{1}{2\\sqrt{x}}$. At $x = 25$: $f(25) = 5$, $f'(25) = \\frac{1}{10}$. Estimate: $\\sqrt{26} \\approx 5 + \\frac{1}{10}(1) = 5.1$. True: $\\sqrt{26} \\approx 5.0990$. Overestimate because $f''(x) = -\\frac{1}{4x^{3/2}} < 0$ (concave down), so the tangent line lies above the curve."
            },
            {
              qid: "FD_041_m03",
              q: "Use the increments formula to estimate $e^{0.1}$ and compare with the true value (to 4 d.p.).",
              a: "$f(x) = e^x$, $f'(x) = e^x$. At $x = 0$: $f(0) = 1$, $f'(0) = 1$. Estimate: $e^{0.1} \\approx 1 + 1(0.1) = 1.1$. True: $e^{0.1} \\approx 1.1052$. Underestimate because $f''(x) = e^x > 0$ (concave up)."
            },
            {
              qid: "FD_041_m04",
              q: "Use the increments formula to estimate $\\sin(0.6)$ using the base point $x = \\frac{\\pi}{6}$ (since $\\frac{\\pi}{6} \\approx 0.5236$). Compare with the true value.",
              a: "$f(x) = \\sin(x)$, $f'(x) = \\cos(x)$. At $x = \\pi/6$: $f(\\pi/6) = 0.5$, $f'(\\pi/6) = \\frac{\\sqrt{3}}{2} \\approx 0.8660$. $\\delta x = 0.6 - \\pi/6 \\approx 0.0764$. Estimate: $\\sin(0.6) \\approx 0.5 + 0.8660(0.0764) \\approx 0.5662$. True: $\\sin(0.6) \\approx 0.5646$. Slight overestimate since $f''(\\pi/6) = -\\sin(\\pi/6) = -0.5 < 0$ (concave down)."
            },
            {
              qid: "FD_041_m05",
              q: "Use the increments formula to estimate $\\ln(1.05)$ and compare with the true value. Explain the direction of error using concavity.",
              a: "$f(x) = \\ln(x)$, $f'(x) = \\frac{1}{x}$. At $x = 1$: $f(1) = 0$, $f'(1) = 1$. Estimate: $\\ln(1.05) \\approx 0 + 1(0.05) = 0.05$. True: $\\ln(1.05) \\approx 0.04879$. Overestimate because $f''(x) = -\\frac{1}{x^2} < 0$ (concave down), so the tangent lies above the curve."
            }
          ],
          hard: [
            {
              qid: "FD_041_h01",
              q: "Use the increments formula to estimate $\\sqrt[3]{8.3}$ and compare with the calculator value. Calculate the percentage error.",
              a: "$f(x) = x^{1/3}$, $f'(x) = \\frac{1}{3}x^{-2/3}$. At $x = 8$: $f(8) = 2$, $f'(8) = \\frac{1}{3} \\cdot \\frac{1}{4} = \\frac{1}{12}$. Estimate: $\\sqrt[3]{8.3} \\approx 2 + \\frac{1}{12}(0.3) = 2.025$. True: $8.3^{1/3} \\approx 2.02485$. Error: $|2.025 - 2.02485| = 0.00015$. Percentage error: $\\frac{0.00015}{2.02485} \\times 100 \\approx 0.0074\\%$."
            },
            {
              qid: "FD_041_h02",
              q: "For $f(x) = e^{-x^2}$, use the increments formula to estimate $f(1.02)$ from $f(1)$. Compare with the true value and explain the error using $f''(1)$.",
              a: "$f'(x) = -2xe^{-x^2}$. At $x = 1$: $f(1) = e^{-1} \\approx 0.36788$, $f'(1) = -2e^{-1} \\approx -0.73576$. Estimate: $f(1.02) \\approx 0.36788 + (-0.73576)(0.02) \\approx 0.35317$. True: $e^{-1.0404} \\approx 0.35345$. $f''(1) = (4 \\cdot 1 - 2)e^{-1} = 2e^{-1} > 0$ (concave up), so tangent lies below → underestimate."
            },
            {
              qid: "FD_041_h03",
              q: "Use the increments formula to estimate $\\sqrt{4.02}$ using $f(x) = \\sqrt{x}$ at $x = 4$. Then use a second-order correction $\\delta y \\approx f'(a)\\delta x + \\frac{1}{2}f''(a)(\\delta x)^2$ and compare both estimates with the true value.",
              a: "$f'(x) = \\frac{1}{2\\sqrt{x}}$, $f''(x) = -\\frac{1}{4x^{3/2}}$. At $x = 4$: $f = 2$, $f' = 0.25$, $f'' = -\\frac{1}{32}$. Linear: $\\sqrt{4.02} \\approx 2 + 0.25(0.02) = 2.005$. Quadratic: $2.005 + \\frac{1}{2}(-\\frac{1}{32})(0.02)^2 = 2.005 - 0.00000625 \\approx 2.00499$. True: $\\sqrt{4.02} \\approx 2.00499$. The second-order correction is dramatically more accurate."
            },
            {
              qid: "FD_041_h04",
              q: "For $f(x) = x\\ln(x)$, estimate $f(e + 0.1)$ using the increments formula from $x = e$. Compare with the true value and calculate absolute and relative errors.",
              a: "$f'(x) = \\ln(x) + 1$. At $x = e$: $f(e) = e \\cdot 1 = e \\approx 2.71828$, $f'(e) = 2$. Estimate: $f(e + 0.1) \\approx e + 2(0.1) = e + 0.2 \\approx 2.91828$. True: $(e+0.1)\\ln(e+0.1) \\approx 2.8183 \\times 1.03509 \\approx 2.91721$. Absolute error $\\approx 0.00107$. Relative error $\\approx 0.037\\%$."
            },
            {
              qid: "FD_041_h05",
              q: "A sphere has radius $r = 10$ cm, measured with error $\\delta r = \\pm 0.1$ cm. Use the increments formula to estimate the maximum error in the calculated volume, and express this as a percentage of the true volume.",
              a: "$V = \\frac{4}{3}\\pi r^3$, $\\frac{dV}{dr} = 4\\pi r^2$. At $r = 10$: $\\frac{dV}{dr} = 400\\pi$. $\\delta V \\approx 400\\pi \\times 0.1 = 40\\pi \\approx 125.7$ cm³. True volume: $V = \\frac{4}{3}\\pi(1000) = \\frac{4000\\pi}{3} \\approx 4188.8$ cm³. Percentage error: $\\frac{40\\pi}{4000\\pi/3} \\times 100 = \\frac{40 \\times 3}{4000} \\times 100 = 3\\%$. Note: this equals $3 \\times \\frac{\\delta r}{r} \\times 100 = 3 \\times 1\\% = 3\\%$."
            }
          ]
        }
,

    {
          pt_id: "FD_042",
          topic: "Differentiation",
          subtopic: "Small Increments",
          concept: "Basic Use of Small Increments Formula",
          pt: "Using increments formula to approximate change",
          testing: "$\\delta y \\approx \\frac{dy}{dx} \\cdot \\delta x$",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_042_e01",
              q: "Use the increments formula to approximate the change in $y = x^2$ when $x$ changes from $4$ to $4.03$.",
              a: "$\\frac{dy}{dx} = 2x$. At $x = 4$: $\\frac{dy}{dx} = 8$. $\\delta y \\approx 8 \\times 0.03 = 0.24$."
            },
            {
              qid: "FD_042_e02",
              q: "Use the increments formula to approximate the change in $y = 3x^2 + 2x$ when $x$ increases from $2$ to $2.1$.",
              a: "$\\frac{dy}{dx} = 6 x + 2$. At $x = 2$: $\\frac{dy}{dx} = 14$. $\\delta y \\approx 14 \\times 0.1 = 1.4000000000000001$."
            },
            {
              qid: "FD_042_e03",
              q: "Use the increments formula to approximate the change in $y = x^3$ when $x$ changes from $3$ to $3.02$.",
              a: "$\\frac{dy}{dx} = 3x^2$. At $x = 3$: $\\frac{dy}{dx} = 27$. $\\delta y \\approx 27 \\times 0.02 = 0.54$."
            }
          ],
          medium: [
            {
              qid: "FD_042_m01",
              q: "Use the increments formula to approximate the change in the area of a circle when the radius increases from 5 cm to 5.02 cm.",
              a: "$A = \\pi r^2$, $\\frac{dA}{dr} = 2\\pi r$. At $r = 5$: $\\frac{dA}{dr} = 10\\pi$. $\\delta A \\approx 10\\pi \\times 0.02 = 0.2\\pi \\approx 0.628$ cm²."
            },
            {
              qid: "FD_042_m02",
              q: "If $f(x) = \\sqrt{x}$, use the increments formula to approximate $\\sqrt{36.5}$.",
              a: "$f'(x) = \\frac{1}{2\\sqrt{x}}$. At $x = 36$: $f(36) = 6$, $f'(36) = \\frac{1}{12}$. $f(36.5) \\approx 6 + \\frac{1}{12}(0.5) = 6.0417$"
            },
            {
              qid: "FD_042_m03",
              q: "Use the increments formula to approximate $e^{-0.02}$ starting from $x = 0$.",
              a: "$f(x) = e^x$, $f'(x) = e^x$. At $x = 0$: $f(0) = 1$, $f'(0) = 1$. $e^{-0.02} \\approx 1 + 1 \\times (-0.02) = 0.98$. (True value: $e^{-0.02} \\approx 0.9802$)."
            },
            {
              qid: "FD_042_m04",
              q: "Use the increments formula to approximate $\\sin(31°)$. Use $\\sin(30°) = 0.5$ and note $\\delta x = 1° = \\frac{\\pi}{180}$ radians.",
              a: "$f'(x) = \\cos(x)$. At $x = 30°$ ($= \\pi/6$): $\\cos(30°) = \\frac{\\sqrt{3}}{2} \\approx 0.8660$. $\\delta x = \\frac{\\pi}{180} \\approx 0.01745$. $\\sin(31°) \\approx 0.5 + 0.8660 \\times 0.01745 \\approx 0.5151$. (True: $\\sin(31°) \\approx 0.5150$)."
            },
            {
              qid: "FD_042_m05",
              q: "Use the increments formula to approximate $\\ln(2.05)$ starting from $\\ln(2)$.",
              a: "$f'(x) = \\frac{1}{x}$. At $x = 2$: $f'(2) = 0.5$. $\\ln(2.05) \\approx \\ln(2) + 0.5(0.05) = 0.6931 + 0.025 = 0.7181$. (True: $\\ln(2.05) \\approx 0.7178$)."
            }
          ],
          hard: [
            {
              qid: "FD_042_h01",
              q: "The side of a cube is measured as 10 cm with a possible error of $\\pm 0.05$ cm. Use the increments formula to estimate the maximum error in the calculated volume.",
              a: "$V = x^3$, $\\frac{dV}{dx} = 3x^2$. At $x = 10$: $\\frac{dV}{dx} = 300$. $\\delta V \\approx 300 \\times 0.05 = 15$ cm³. True volume $= 1000$ cm³, so percentage error $\\approx 1.5\\%$."
            },
            {
              qid: "FD_042_h02",
              q: "Use the increments formula to approximate the change in $y = \\sqrt{x^2 + 5}$ when $x$ increases from $2$ to $2.04$.",
              a: "$\\frac{dy}{dx} = \\frac{x}{\\sqrt{x^{2} + 5}}$. At $x = 2$: $\\frac{dy}{dx} = \\frac{2}{\\sqrt{9}} = \\frac{2}{3}$. $\\delta y \\approx \\frac{2}{3} \\times 0.04 = \\frac{0.08}{3} \\approx 0.0267$."
            },
            {
              qid: "FD_042_h03",
              q: "A balloon has radius $r = 15$ cm. Air is added causing the radius to increase by $0.2$ cm. Use the increments formula to estimate the change in surface area.",
              a: "$S = 4\\pi r^2$, $\\frac{dS}{dr} = 8\\pi r$. At $r = 15$: $\\frac{dS}{dr} = 120\\pi$. $\\delta S \\approx 120\\pi \\times 0.2 = 24\\pi \\approx 75.4$ cm²."
            },
            {
              qid: "FD_042_h04",
              q: "The temperature of a cooling object is $T = 100e^{-0.1t}$ °C. Use the increments formula to estimate the change in temperature between $t = 5$ and $t = 5.5$.",
              a: "$\\frac{dT}{dt} = -10e^{-0.1t}$. At $t = 5$: $\\frac{dT}{dt} = -10e^{-0.5} \\approx -6.065$. $\\delta T \\approx -6.065 \\times 0.5 \\approx -3.033$ °C. The temperature drops by approximately $3.03$ °C."
            },
            {
              qid: "FD_042_h05",
              q: "The period of a pendulum is $T = 2\\pi\\sqrt{\\frac{l}{g}}$. If the length $l$ is increased by $2\\%$, use the increments formula to estimate the percentage change in the period.",
              a: "$T = 2\\pi\\sqrt{\\frac{l}{g}} = \\frac{2\\pi}{\\sqrt{g}} \\cdot l^{1/2}$. $\\frac{dT}{dl} = \\frac{2\\pi}{\\sqrt{g}} \\cdot \\frac{1}{2}l^{-1/2} = \\frac{T}{2l}$. So $\\frac{\\delta T}{T} \\approx \\frac{1}{2} \\cdot \\frac{\\delta l}{l} = \\frac{1}{2} \\times 2\\% = 1\\%$. The period increases by approximately $1\\%$."
            }
          ]
        }
,

    {
          pt_id: "FD_043",
          topic: "Differentiation",
          subtopic: "Small Increments",
          concept: "Basic Use of Small Increments Formula",
          pt: "Using increments formula with a fixed or constrained quantity",
          testing: "Rearrange with fixed quantity as constant, differentiate, apply δy ≈ (dy/dx)·δx",
          reason_bank: ["wrong_rule", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_043_e01",
              q: "A rectangle has a fixed area of $60$ cm². When the width is $5$ cm, it increases by $0.2$ cm. Use the increments formula to estimate the change in length.",
              a: "$A = lw = 60$, so $l = \\frac{60}{w}$. $\\frac{dl}{dw} = -\\frac{60}{w^2}$. At $w = 5$: $\\frac{dl}{dw} = -\\frac{60}{25} = -2.4$. $\\delta l \\approx -2.4 \\times 0.2 = -0.48$ cm. The length decreases by approximately $0.48$ cm."
            },
            {
              qid: "FD_043_e02",
              q: "A square has a fixed perimeter of $40$ cm, so the side length is $s = 10$ cm and the area is $A = s^2$. If the perimeter is now measured as $40.8$ cm ($s$ increases by $0.2$ cm), estimate the change in area using the increments formula.",
              a: "$A = s^2$, $\\frac{dA}{ds} = 2s$. At $s = 10$: $\\frac{dA}{ds} = 20$. $\\delta A \\approx 20 \\times 0.2 = 4$ cm²."
            },
            {
              qid: "FD_043_e03",
              q: "A circle has a fixed area of $100\\pi$ cm², so $r = 10$ cm. If the radius increases by $0.1$ cm, use the increments formula to estimate the change in the circumference $C = 2\\pi r$.",
              a: "$C = 2\\pi r$, $\\frac{dC}{dr} = 2\\pi$. $\\delta C \\approx 2\\pi \\times 0.1 = 0.2\\pi \\approx 0.628$ cm."
            }
          ],
          medium: [
            {
              qid: "FD_043_m01",
              q: "A cylinder has a fixed volume of $200\\pi$ cm³. When the radius is $5$ cm, it increases by $0.1$ cm. Use the increments formula to estimate the change in height.",
              a: "$V = \\pi r^2 h = 200\\pi$, so $h = \\frac{200}{r^2}$. $\\frac{dh}{dr} = -\\frac{400}{r^3}$. At $r = 5$: $h = 8$ cm, $\\frac{dh}{dr} = -\\frac{400}{125} = -3.2$. $\\delta h \\approx -3.2 \\times 0.1 = -0.32$ cm. The height decreases by approximately $0.32$ cm."
            },
            {
              qid: "FD_043_m02",
              q: "A closed cylinder has a fixed height of $12$ cm. Use the increments formula to estimate the change in total surface area when the radius increases from $4$ cm to $4.05$ cm.",
              a: "$SA = 2\\pi r^2 + 2\\pi r(12) = 2\\pi r^2 + 24\\pi r$. $\\frac{dSA}{dr} = 4\\pi r + 24\\pi$. At $r = 4$: $\\frac{dSA}{dr} = 16\\pi + 24\\pi = 40\\pi$. $\\delta SA \\approx 40\\pi \\times 0.05 = 2\\pi \\approx 6.28$ cm²."
            },
            {
              qid: "FD_043_m03",
              q: "A cone has a fixed volume of $48\\pi$ cm³. When the radius is $6$ cm, it increases by $0.2$ cm. Estimate the change in height.",
              a: "$V = \\frac{1}{3}\\pi r^2 h = 48\\pi$, so $h = \\frac{144}{r^2}$. $\\frac{dh}{dr} = -\\frac{288}{r^3}$. At $r = 6$: $h = 4$ cm, $\\frac{dh}{dr} = -\\frac{288}{216} = -\\frac{4}{3}$. $\\delta h \\approx -\\frac{4}{3} \\times 0.2 = -\\frac{4}{15} \\approx -0.267$ cm."
            },
            {
              qid: "FD_043_m04",
              q: "A sphere has a fixed volume of $\\frac{4000\\pi}{3}$ cm³ (so $r = 10$ cm). If the radius increases by $0.05$ cm, estimate the change in surface area.",
              a: "$SA = 4\\pi r^2$, $\\frac{dSA}{dr} = 8\\pi r$. At $r = 10$: $\\frac{dSA}{dr} = 80\\pi$. $\\delta SA \\approx 80\\pi \\times 0.05 = 4\\pi \\approx 12.57$ cm²."
            },
            {
              qid: "FD_043_m05",
              q: "An open-top box has a square base of side $x$ cm and a fixed volume of $500$ cm³. When $x = 10$ cm ($h = 5$ cm), the side increases by $0.3$ cm. Estimate the change in height.",
              a: "$V = x^2 h = 500$, so $h = \\frac{500}{x^2}$. $\\frac{dh}{dx} = -\\frac{1000}{x^3}$. At $x = 10$: $\\frac{dh}{dx} = -\\frac{1000}{1000} = -1$. $\\delta h \\approx -1 \\times 0.3 = -0.3$ cm. The height decreases by approximately $0.3$ cm."
            }
          ],
          hard: [
            {
              qid: "FD_043_h01",
              q: "A closed cylinder has a fixed total surface area of $130\\pi$ cm². When $r = 5$ cm, the radius increases by $0.1$ cm. Estimate the change in volume.",
              a: "$SA = 2\\pi r^2 + 2\\pi rh = 130\\pi$, so $h = \\frac{130 - 2r^2}{2r} = \\frac{65}{r} - r$. $V = \\pi r^2 h = \\pi r^2 \\left(\\frac{65}{r} - r\\right) = 65\\pi r - \\pi r^3$. $\\frac{dV}{dr} = 65\\pi - 3\\pi r^2$. At $r = 5$: $\\frac{dV}{dr} = 65\\pi - 75\\pi = -10\\pi$. $\\delta V \\approx -10\\pi \\times 0.1 = -\\pi \\approx -3.14$ cm³."
            },
            {
              qid: "FD_043_h02",
              q: "A cone has a fixed slant height of $13$ cm. When the radius is $5$ cm (so $h = 12$ cm), the radius increases by $0.2$ cm. Estimate the change in volume.",
              a: "$l^2 = r^2 + h^2 = 169$, so $h = \\sqrt{169 - r^2}$. $V = \\frac{1}{3}\\pi r^2 \\sqrt{169 - r^2}$. $\\frac{dV}{dr} = \\frac{\\pi}{3}\\left[2r\\sqrt{169 - r^2} + r^2 \\cdot \\frac{-r}{\\sqrt{169 - r^2}}\\right] = \\frac{\\pi r}{3} \\cdot \\frac{2(169 - r^2) - r^2}{\\sqrt{169 - r^2}} = \\frac{\\pi r(338 - 3r^2)}{3\\sqrt{169 - r^2}}$. At $r = 5$: $\\frac{dV}{dr} = \\frac{5\\pi(338-75)}{3(12)} = \\frac{5\\pi(263)}{36} = \\frac{1315\\pi}{36}$. $\\delta V \\approx \\frac{1315\\pi}{36} \\times 0.2 \\approx 22.93$ cm³."
            },
            {
              qid: "FD_043_h03",
              q: "A gas obeys Boyle's Law: $PV = 800$ (constant temperature). When $V = 40$ cm³, the volume increases by $0.5$ cm³. Use the increments formula to estimate the change in pressure.",
              a: "$P = \\frac{800}{V}$, $\\frac{dP}{dV} = -\\frac{800}{V^2}$. At $V = 40$: $P = 20$, $\\frac{dP}{dV} = -\\frac{800}{1600} = -0.5$. $\\delta P \\approx -0.5 \\times 0.5 = -0.25$ units. Also as a percentage: $\\frac{\\delta P}{P} \\approx \\frac{-0.25}{20} = -1.25\\%$."
            },
            {
              qid: "FD_043_h04",
              q: "A rectangle has a fixed perimeter of $40$ cm. When the width is $w = 8$ cm (so length $= 12$ cm), the width increases by $2\\%$. Use the increments formula to estimate the percentage change in area.",
              a: "$P = 2w + 2l = 40$, so $l = 20 - w$. $A = w(20 - w) = 20w - w^2$. $\\frac{dA}{dw} = 20 - 2w$. At $w = 8$: $A = 96$, $\\frac{dA}{dw} = 4$. $\\delta w = 0.02 \\times 8 = 0.16$. $\\delta A \\approx 4 \\times 0.16 = 0.64$ cm². Percentage change: $\\frac{0.64}{96} \\times 100 = 0.\\overline{6}\\% \\approx 0.67\\%$."
            },
            {
              qid: "FD_043_h05",
              q: "A cylinder has a fixed volume $V$. Show that the curved surface area is $CSA = \\frac{2V}{r}$, and hence estimate the percentage change in curved surface area when the radius increases by $3\\%$.",
              a: "$V = \\pi r^2 h$, so $h = \\frac{V}{\\pi r^2}$. Curved surface area: $CSA = 2\\pi r h = 2\\pi r \\cdot \\frac{V}{\\pi r^2} = \\frac{2V}{r}$. $\\frac{dCSA}{dr} = -\\frac{2V}{r^2}$. Now $\\frac{\\delta CSA}{CSA} \\approx \\frac{-\\frac{2V}{r^2} \\cdot \\delta r}{\\frac{2V}{r}} = -\\frac{\\delta r}{r}$. So a $3\\%$ increase in $r$ gives approximately a $3\\%$ decrease in curved surface area."
            }
          ]
        }
,

    {
          pt_id: "FD_044",
          topic: "Differentiation",
          subtopic: "Applications of Differentiation",
          concept: "Related Rates",
          pt: "Finding a rate of change using the chain rule with a geometric constraint",
          testing: "Testing: Set up geometric relationship, differentiate with respect to time using chain rule, substitute known values",
          reason_bank: ["wrong_rule", "missing_chain_factor", "setup_error", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_044_e01",
              q: "The radius of a circle increases at $2$ cm/s. Find the rate of increase of the area when $r = 5$ cm.",
              a: "$A = \\pi r^2$. $\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt} = 2\\pi(5)(2) = 20\\pi \\approx 62.8$ cm²/s."
            },
            {
              qid: "FD_044_e02",
              q: "The side of a square increases at $0.5$ cm/s. Find the rate of increase of the area when the side is $8$ cm.",
              a: "$A = s^2$. $\\frac{dA}{dt} = 2s \\cdot \\frac{ds}{dt} = 2(8)(0.5) = 8$ cm²/s."
            },
            {
              qid: "FD_044_e03",
              q: "The radius of a sphere increases at $0.1$ cm/s. Find the rate of increase of the volume when $r = 3$ cm.",
              a: "$V = \\frac{4}{3}\\pi r^3$. $\\frac{dV}{dt} = 4\\pi r^2 \\cdot \\frac{dr}{dt} = 4\\pi(9)(0.1) = 3.6\\pi \\approx 11.3$ cm³/s."
            }
          ],
          medium: [
            {
              qid: "FD_044_m01",
              q: "A spherical balloon is inflated so that its volume increases at $50$ cm³/s. Find the rate of increase of the radius when $r = 10$ cm.",
              a: "$V = \\frac{4}{3}\\pi r^3$. $\\frac{dV}{dt} = 4\\pi r^2 \\cdot \\frac{dr}{dt}$. $50 = 4\\pi(100) \\cdot \\frac{dr}{dt}$. $\\frac{dr}{dt} = \\frac{50}{400\\pi} = \\frac{1}{8\\pi} \\approx 0.0398$ cm/s."
            },
            {
              qid: "FD_044_m02",
              q: "Water is poured into a cylindrical tank of radius $4$ cm at $20$ cm³/s. Find the rate at which the water level rises.",
              a: "$V = \\pi r^2 h = 16\\pi h$. $\\frac{dV}{dt} = 16\\pi \\cdot \\frac{dh}{dt}$. $20 = 16\\pi \\cdot \\frac{dh}{dt}$. $\\frac{dh}{dt} = \\frac{20}{16\\pi} = \\frac{5}{4\\pi} \\approx 0.398$ cm/s."
            },
            {
              qid: "FD_044_m03",
              q: "A circular oil spill expands so that its radius increases at $0.4$ m/min. Find the rate of increase of the area when the area is $100\\pi$ m².",
              a: "When $A = 100\\pi$: $\\pi r^2 = 100\\pi \\Rightarrow r = 10$ m. $\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt} = 2\\pi(10)(0.4) = 8\\pi \\approx 25.1$ m²/min."
            },
            {
              qid: "FD_044_m04",
              q: "A cube expands so that its surface area increases at $24$ cm²/s. Find the rate of increase of the volume when the edge length is $5$ cm.",
              a: "$S = 6s^2$, $\\frac{dS}{dt} = 12s \\cdot \\frac{ds}{dt}$. $24 = 12(5) \\cdot \\frac{ds}{dt} \\Rightarrow \\frac{ds}{dt} = 0.4$ cm/s. $V = s^3$, $\\frac{dV}{dt} = 3s^2 \\cdot \\frac{ds}{dt} = 3(25)(0.4) = 30$ cm³/s."
            },
            {
              qid: "FD_044_m05",
              q: "Water is poured into a conical vessel with semi-vertical angle $30°$ at $6$ cm³/s. Find the rate at which the water level rises when the depth is $4$ cm.",
              a: "Since the semi-vertical angle is $30°$: $r = h\\tan 30° = \\frac{h}{\\sqrt{3}}$. $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi h^3}{9}$. $\\frac{dV}{dt} = \\frac{\\pi h^2}{3} \\cdot \\frac{dh}{dt}$. $6 = \\frac{16\\pi}{3} \\cdot \\frac{dh}{dt}$. $\\frac{dh}{dt} = \\frac{18}{16\\pi} = \\frac{9}{8\\pi} \\approx 0.358$ cm/s."
            }
          ],
          hard: [
            {
              qid: "FD_044_h01",
              q: "A $5$ m ladder leans against a vertical wall. The base slides away from the wall at $0.3$ m/s. Find the rate at which the top slides down the wall when the base is $3$ m from the wall.",
              a: "$x^2 + y^2 = 25$. When $x = 3$: $y = 4$. Differentiating: $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$. $2(3)(0.3) + 2(4)\\frac{dy}{dt} = 0$. $\\frac{dy}{dt} = -\\frac{1.8}{8} = -0.225$ m/s. The top slides down at $0.225$ m/s."
            },
            {
              qid: "FD_044_h02",
              q: "Water flows into an inverted cone (height $12$ cm, radius $4$ cm) at $3$ cm³/s. Find the rate at which the water level rises when the depth is $6$ cm.",
              a: "By similar triangles: $\\frac{r}{h} = \\frac{4}{12} = \\frac{1}{3}$, so $r = \\frac{h}{3}$. $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi h^3}{27}$. $\\frac{dV}{dt} = \\frac{\\pi h^2}{9} \\cdot \\frac{dh}{dt}$. $3 = \\frac{36\\pi}{9} \\cdot \\frac{dh}{dt} = 4\\pi \\cdot \\frac{dh}{dt}$. $\\frac{dh}{dt} = \\frac{3}{4\\pi} \\approx 0.239$ cm/s."
            },
            {
              qid: "FD_044_h03",
              q: "A $2$ m tall person walks away from a $6$ m tall lamp post at $1.5$ m/s. Find the rate at which the length of their shadow increases.",
              a: "Let $x$ = distance from lamp, $s$ = shadow length. By similar triangles: $\\frac{6}{x + s} = \\frac{2}{s}$. So $6s = 2(x + s) \\Rightarrow 4s = 2x \\Rightarrow s = \\frac{x}{2}$. $\\frac{ds}{dt} = \\frac{1}{2} \\cdot \\frac{dx}{dt} = \\frac{1}{2}(1.5) = 0.75$ m/s."
            },
            {
              qid: "FD_044_h04",
              q: "A trough is $3$ m long with triangular cross-section (top width $1$ m, depth $0.5$ m). Water is added at $0.02$ m³/min. Find the rate at which the water level rises when the depth is $0.2$ m.",
              a: "By similar triangles: $\\frac{w}{h} = \\frac{1}{0.5} = 2$, so $w = 2h$. Cross-sectional area $= \\frac{1}{2}wh = h^2$. $V = 3h^2$. $\\frac{dV}{dt} = 6h \\cdot \\frac{dh}{dt}$. $0.02 = 6(0.2) \\cdot \\frac{dh}{dt}$. $\\frac{dh}{dt} = \\frac{0.02}{1.2} = \\frac{1}{60} \\approx 0.0167$ m/min."
            },
            {
              qid: "FD_044_h05",
              q: "A particle moves along the curve $y = x^2$. When the particle is at the point $(2, 4)$, the $x$-coordinate is increasing at $3$ units/s. Find the rate at which the distance from the origin is increasing at that instant.",
              a: "Distance: $D = \\sqrt{x^2 + y^2} = \\sqrt{x^2 + x^4}$. $\\frac{dD}{dt} = \\frac{2x + 4x^3}{2\\sqrt{x^2 + x^4}} \\cdot \\frac{dx}{dt} = \\frac{x(1 + 2x^2)}{\\sqrt{x^2 + x^4}} \\cdot \\frac{dx}{dt}$. At $x = 2$: $\\frac{dD}{dt} = \\frac{2(9)}{\\sqrt{4 + 16}} \\cdot 3 = \\frac{54}{\\sqrt{20}} = \\frac{54}{2\\sqrt{5}} = \\frac{27\\sqrt{5}}{5} \\approx 12.08$ units/s."
            }
          ]
        }
,

    {
          pt_id: "FD_045",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Distinguishing between stationary points and turning points",
          testing: "Testing: Identify that all turning points are stationary, but not all stationary points are turning points (e.g. horizontal inflections)",
          reason_bank: ["interpretation_mixup", "conceptual_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_045_e01",
              q: "The curve $y = x^3$ has a stationary point at the origin. Is it a turning point? Justify your answer.",
              a: "$y' = 3x^2 = 0$ at $x = 0$ ✓. For $x < 0$: $y' > 0$. For $x > 0$: $y' > 0$. The gradient does not change sign, so this is a stationary point of horizontal inflection — not a turning point."
            },
            {
              qid: "FD_045_e02",
              q: "The curve $y = x^2 - 4x + 3$ has a stationary point at $x = 2$. Is it a turning point? Justify your answer.",
              a: "$y' = 2x - 4 = 0$ at $x = 2$ ✓. For $x < 2$: $y' < 0$. For $x > 2$: $y' > 0$. The gradient changes from negative to positive, so this is a turning point (local minimum)."
            },
            {
              qid: "FD_045_e03",
              q: "True or false: Every turning point is a stationary point, and every stationary point is a turning point.",
              a: "The first part is true: at a turning point the gradient is zero. The second part is false: a stationary point where the gradient does not change sign (e.g. $y = x^3$ at the origin) is not a turning point."
            }
          ],
          medium: [
            {
              qid: "FD_045_m01",
              q: "Find all stationary points of $y = x^3 - 3x^2 + 3x + 1$ and determine which (if any) are turning points.",
              a: "$y' = 3x^2 - 6x + 3 = 3(x - 1)^2 = 0 \\Rightarrow x = 1$. Since $y' = 3(x-1)^2 \\geq 0$ for all $x$, the gradient does not change sign. The stationary point at $(1, 2)$ is a horizontal inflection, not a turning point."
            },
            {
              qid: "FD_045_m02",
              q: "Find the stationary points of $y = x^4 - 4x^3$ and classify each as a turning point or a stationary point of inflection.",
              a: "$y' = 4x^3 - 12x^2 = 4x^2(x - 3) = 0 \\Rightarrow x = 0$ or $x = 3$. At $x = 0$: $y'$ is negative on both sides (check $x = -1$ and $x = 1$), so the gradient does not change sign — horizontal inflection at $(0, 0)$. At $x = 3$: $y'$ changes from negative to positive — turning point (local minimum) at $(3, -27)$."
            },
            {
              qid: "FD_045_m03",
              q: "Give an example of a function with a stationary point that is not a turning point, and explain why it fails to be a turning point.",
              a: "Example: $y = x^3$ at $x = 0$. $y'(0) = 0$ so it is stationary. But $y' = 3x^2 > 0$ for all $x \\neq 0$, so the function is increasing on both sides of $x = 0$. The gradient does not change sign, so it is not a turning point."
            },
            {
              qid: "FD_045_m04",
              q: "The function $f(x) = (x - 1)^3 + 2$ has a stationary point at $x = 1$. Classify it and justify.",
              a: "$f'(x) = 3(x-1)^2 = 0$ at $x = 1$. For $x < 1$: $f'(x) > 0$. For $x > 1$: $f'(x) > 0$. The gradient does not change sign — this is a stationary point of horizontal inflection at $(1, 2)$, not a turning point."
            },
            {
              qid: "FD_045_m05",
              q: "A student claims: 'Since $f'(2) = 0$ and $f''(2) = 0$, the point $x = 2$ is an inflection point, not a turning point.' Is this reasoning valid? Explain.",
              a: "The reasoning is not valid. $f''(2) = 0$ alone does not confirm an inflection point — we need to check whether $f''$ changes sign at $x = 2$. For example, $f(x) = (x - 2)^4$ has $f'(2) = 0$ and $f''(2) = 0$, but $x = 2$ is a local minimum (a turning point), not an inflection."
            }
          ],
          hard: [
            {
              qid: "FD_045_h01",
              q: "Find and classify all stationary points of $y = 3x^5 - 5x^3$.",
              a: "$y' = 15x^4 - 15x^2 = 15x^2(x^2 - 1) = 15x^2(x-1)(x+1) = 0 \\Rightarrow x = -1, 0, 1$. At $x = -1$: $y'$ changes from $+$ to $-$ — local maximum at $(-1, 2)$. At $x = 0$: $y' \\leq 0$ on both sides — horizontal inflection at $(0, 0)$. At $x = 1$: $y'$ changes from $-$ to $+$ — local minimum at $(1, -2)$."
            },
            {
              qid: "FD_045_h02",
              q: "Let $f(x) = x^2(x - 2)^3$. Find all stationary points and determine which are turning points.",
              a: "$f'(x) = 2x(x-2)^3 + 3x^2(x-2)^2 = x(x-2)^2(5x - 4) = 0 \\Rightarrow x = 0, \\frac{4}{5}, 2$. At $x = 0$: $f'$ changes from $+$ to $-$ — turning point (local max) at $(0, 0)$. At $x = \\frac{4}{5}$: $f'$ changes from $-$ to $+$ — turning point (local min) at $(\\frac{4}{5}, -\\frac{6912}{3125})$. At $x = 2$: $f'$ has factor $(x-2)^2$ so does not change sign — horizontal inflection at $(2, 0)$."
            },
            {
              qid: "FD_045_h03",
              q: "Explain why $y = x^n$ at $x = 0$ is a turning point when $n$ is even but not when $n$ is odd (for integer $n \\geq 2$).",
              a: "$y' = nx^{n-1}$. When $n$ is even: $n - 1$ is odd, so $y'$ changes sign at $x = 0$ (negative for $x < 0$, positive for $x > 0$) — turning point (minimum). When $n$ is odd: $n - 1$ is even, so $y' = nx^{n-1} \\geq 0$ for all $x$ — the gradient does not change sign, so $x = 0$ is a stationary inflection, not a turning point."
            },
            {
              qid: "FD_045_h04",
              q: "Find all stationary points of $y = x^4 - 4x^3 + 6x^2 - 4x + 1$ and classify them.",
              a: "$y = (x-1)^4$. $y' = 4(x-1)^3 = 0 \\Rightarrow x = 1$. For $x < 1$: $y' < 0$. For $x > 1$: $y' > 0$. The gradient changes sign from negative to positive — this is a turning point (local minimum) at $(1, 0)$, despite $y''(1) = 0$."
            },
            {
              qid: "FD_045_h05",
              q: "The function $g(x) = x^3(x - 4)$ has stationary points at $x = 0$ and $x = 3$. Classify each as a turning point or inflection and verify using a sign diagram of $g'(x)$.",
              a: "$g'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$. Sign diagram of $g'$: negative for $x < 0$, negative for $0 < x < 3$, positive for $x > 3$. At $x = 0$: $g'$ does not change sign — horizontal inflection at $(0, 0)$. At $x = 3$: $g'$ changes from negative to positive — turning point (local minimum) at $(3, -27)$."
            }
          ]
        }
,

    {
          pt_id: "FD_046",
          topic: "Differentiation",
          subtopic: "Second Derivatives",
          concept: "Locating Critical Points",
          pt: "Recognising that f''(a) = 0 is necessary but not sufficient for an inflection point",
          testing: "Testing: Check whether f'' actually changes sign at a point where f''(a) = 0",
          reason_bank: ["interpretation_mixup", "conceptual_error", "wrong_rule", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_046_e01",
              q: "For $y = x^4$, show that $y''(0) = 0$ but that $x = 0$ is not a point of inflection.",
              a: "$y'' = 12x^2$. $y''(0) = 0$ ✓. But $y'' = 12x^2 \\geq 0$ for all $x$, so $y''$ does not change sign at $x = 0$. The curve is concave up on both sides — $x = 0$ is not an inflection point (it is a minimum)."
            },
            {
              qid: "FD_046_e02",
              q: "For $y = x^3$, show that $y''(0) = 0$ and verify that $x = 0$ is a point of inflection.",
              a: "$y'' = 6x$. $y''(0) = 0$ ✓. For $x < 0$: $y'' < 0$ (concave down). For $x > 0$: $y'' > 0$ (concave up). Since $y''$ changes sign, $x = 0$ is a point of inflection."
            },
            {
              qid: "FD_046_e03",
              q: "True or false: If $f''(a) = 0$, then $x = a$ is a point of inflection.",
              a: "False. $f''(a) = 0$ is necessary but not sufficient. We also need $f''$ to change sign at $x = a$. Counterexample: $f(x) = x^4$ has $f''(0) = 0$ but $x = 0$ is a local minimum, not an inflection."
            }
          ],
          medium: [
            {
              qid: "FD_046_m01",
              q: "Find all values of $x$ where $f''(x) = 0$ for $f(x) = x^4 - 6x^2 + 8x + 1$, and determine which are points of inflection.",
              a: "$f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 0 \\Rightarrow x = \\pm 1$. At $x = -1$: $f''$ changes from $+$ to $-$ ✓ inflection. At $x = 1$: $f''$ changes from $-$ to $+$ ✓ inflection. Both are genuine inflection points."
            },
            {
              qid: "FD_046_m02",
              q: "For $f(x) = x^6$, find $f''(0)$ and determine whether $x = 0$ is a point of inflection.",
              a: "$f''(x) = 30x^4$. $f''(0) = 0$. But $f''(x) = 30x^4 \\geq 0$ for all $x$, so $f''$ does not change sign at $x = 0$. This is not a point of inflection — it is a local minimum."
            },
            {
              qid: "FD_046_m03",
              q: "Find all points of inflection of $y = 3x^5 - 5x^4$.",
              a: "$y'' = 60x^3 - 60x^2 = 60x^2(x - 1) = 0 \\Rightarrow x = 0$ or $x = 1$. At $x = 0$: $y'' = 60x^2(x-1)$. For $x$ near $0$, the factor $x^2$ is positive and $(x-1)$ is negative on both sides, so $y'' < 0$ on both sides — not an inflection. At $x = 1$: $y''$ changes from $-$ to $+$ — inflection at $(1, -2)$."
            },
            {
              qid: "FD_046_m04",
              q: "A student writes: '$f''(x) = 0$ at $x = 2$, and $f'''(2) = 6 \\neq 0$, so $x = 2$ is a point of inflection.' Is this reasoning correct?",
              a: "Yes, this reasoning is correct. If $f''(a) = 0$ and $f'''(a) \\neq 0$, then $f''$ changes sign at $x = a$ (since $f''$ passes through zero with a non-zero slope), confirming a genuine point of inflection."
            },
            {
              qid: "FD_046_m05",
              q: "Find all values of $x$ where $f''(x) = 0$ for $f(x) = x^4 - 4x^3 + 6x^2$. Determine which (if any) are inflection points.",
              a: "$f''(x) = 12x^2 - 24x + 12 = 12(x - 1)^2 = 0 \\Rightarrow x = 1$. Since $f''(x) = 12(x-1)^2 \\geq 0$ for all $x$, the second derivative does not change sign at $x = 1$. No inflection point exists — $x = 1$ is a minimum."
            }
          ],
          hard: [
            {
              qid: "FD_046_h01",
              q: "For $f(x) = x^2(x - 1)^3$, find all candidates for inflection points (where $f''(x) = 0$) and verify which are genuine.",
              a: "$f'(x) = x(x-1)^2(5x - 2)$. $f''(x) = 2(x-1)(10x^2 - 8x + 1)$. Setting $f''(x) = 0$: $x = 1$ or $10x^2 - 8x + 1 = 0 \\Rightarrow x = \\frac{4 \\pm \\sqrt{6}}{10}$. Check sign changes: all three are genuine inflection points since $f''$ changes sign at each (the quadratic factor has two distinct roots, and the linear factor gives a simple zero at $x = 1$)."
            },
            {
              qid: "FD_046_h02",
              q: "Explain why $f(x) = x^{2n}$ (for positive integer $n$) always has $f''(0) = 0$ when $n \\geq 2$, but never has an inflection at $x = 0$.",
              a: "$f''(x) = 2n(2n-1)x^{2n-2}$. When $n \\geq 2$: $f''(0) = 0$ ✓. But $2n - 2$ is even, so $x^{2n-2} \\geq 0$ for all $x$. Therefore $f''(x) \\geq 0$ everywhere — it does not change sign at $x = 0$. The origin is always a local minimum, never an inflection."
            },
            {
              qid: "FD_046_h03",
              q: "The function $g(x) = x^5 - 5x^4 + 10x^3 - 10x^2 + 5x - 1$ can be written as $(x - 1)^5$. Find $g''(1)$ and determine whether $x = 1$ is a point of inflection. What feature does the graph have at $x = 1$?",
              a: "$g''(x) = 20(x-1)^3$. $g''(1) = 0$. For $x < 1$: $g''(x) < 0$. For $x > 1$: $g''(x) > 0$. Since $g''$ changes sign, $x = 1$ is a genuine inflection point. The graph has a horizontal inflection at $(1, 0)$ since $g'(1) = 0$ as well."
            },
            {
              qid: "FD_046_h04",
              q: "Find all inflection points of $f(x) = e^{-x^2}$ and verify each one.",
              a: "$f'(x) = -2xe^{-x^2}$. $f''(x) = (4x^2 - 2)e^{-x^2} = 0 \\Rightarrow 4x^2 - 2 = 0 \\Rightarrow x = \\pm \\frac{1}{\\sqrt{2}}$. At $x = -\\frac{1}{\\sqrt{2}}$: $f''$ changes from $+$ to $-$ ✓. At $x = \\frac{1}{\\sqrt{2}}$: $f''$ changes from $-$ to $+$ ✓. Both are genuine inflection points."
            },
            {
              qid: "FD_046_h05",
              q: "For what value(s) of $k$ does $f(x) = x^4 + kx^2$ have exactly two points of inflection?",
              a: "$f''(x) = 12x^2 + 2k = 0 \\Rightarrow x^2 = -\\frac{k}{6}$. For two real solutions: $-\\frac{k}{6} > 0 \\Rightarrow k < 0$. When $k < 0$: $x = \\pm\\sqrt{-\\frac{k}{6}}$. At each, $f''(x) = 12x^2 + 2k$ changes sign (it is a quadratic in $x$ opening upward with two roots), so both are genuine inflection points. Answer: $k < 0$."
            }
          ]
        }
,

    {
          pt_id: "XX_001",
          topic: "Differentiation",
          subtopic: "General",
          concept: "Chain Rule",
          pt: "Differentiation of composite functions when given separate equations for two related variables",
          testing: "Testing: Chain rule with related rates / parametric-style",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "XX_001_e01",
              q: "Given $y = u^2 + 3u$ and $u = 2x - 1$, find $\\frac{dy}{dx}$.",
              a: "$\\frac{dy}{du} = 2 u + 3$, $\\frac{du}{dx} = 2$. $\\frac{dy}{dx} = 4 u + 6|_{u=2x-1} = 8 x + 2$"
            },
            {
              qid: "XX_001_e02",
              q: "Given $y = 3u - u^2$ and $u = x + 2$, find $\\frac{dy}{dx}$.",
              a: "$\\frac{dy}{du} = 3 - 2 u$, $\\frac{du}{dx} = 1$. $\\frac{dy}{dx} = - 2 x - 1$"
            },
            {
              qid: "XX_001_e03",
              q: "Given $y = \\sqrt{u}$ and $u = 3x + 4$, find $\\frac{dy}{dx}$.",
              a: "$\\frac{dy}{du} = \\frac{1}{2 \\sqrt{u}}$, $\\frac{du}{dx} = 3$. $\\frac{dy}{dx} = \\frac{3}{2 \\sqrt{3 x + 4}}$"
            }
          ],
          medium: [
            {
              qid: "XX_001_m01",
              q: "Given $y = e^u$ and $u = x^2 + 1$, find $\\frac{dy}{dx}$.",
              a: "$\\frac{dy}{du} = e^{u}$, $\\frac{du}{dx} = 2 x$. $\\frac{dy}{dx} = 2 x e^{x^{2} + 1}$"
            },
            {
              qid: "XX_001_m02",
              q: "Given $y = \\frac{1}{u^2}$ and $u = 3x - 2$, find $\\frac{dy}{dx}$.",
              a: "$\\frac{dy}{du} = - \\frac{2}{u^{3}}$, $\\frac{du}{dx} = 3$. $\\frac{dy}{dx} = - \\frac{6}{\\left(3 x - 2\\right)^{3}}$"
            },
            {
              qid: "XX_001_m03",
              q: "Given $y = \\ln(u)$ and $u = x^2 - 3$, find $\\frac{dy}{dx}$.",
              a: "$\\frac{dy}{du} = \\frac{1}{u}$, $\\frac{du}{dx} = 2 x$. $\\frac{dy}{dx} = \\frac{2 x}{x^{2} - 3}$"
            },
            {
              qid: "XX_001_m04",
              q: "Given $y = u^3 + 2u$ and $u = \\sin(x)$, find $\\frac{dy}{dx}$ when $x = \\frac{\\pi}{6}$.",
              a: "$\\frac{dy}{du} = 3 u^{2} + 2$, $\\frac{du}{dx} = \\cos(x)$. At $x = \\frac{\\pi}{6}$: $u = \\frac{1}{2}$, $\\frac{dy}{dx} = \\frac{11 \\sqrt{3}}{8}$"
            },
            {
              qid: "XX_001_m05",
              q: "Given $y = u^2$ and $u = e^x + 1$, find $\\frac{dy}{dx}$ at $x = 0$.",
              a: "$\\frac{dy}{du} = 2 u$, $\\frac{du}{dx} = e^{x}$. At $x = 0$: $u = 2$, $\\frac{dy}{dx} = 4$"
            }
          ],
          hard: [
            {
              qid: "XX_001_h01",
              q: "Given $y = \\frac{u}{u+1}$ and $u = x^2$, find $\\frac{dy}{dx}$.",
              a: "$\\frac{dy}{du} = \\frac{1}{\\left(u + 1\\right)^{2}}$, $\\frac{du}{dx} = 2 x$. $\\frac{dy}{dx} = \\frac{2 x}{x^{4} + 2 x^{2} + 1}$"
            },
            {
              qid: "XX_001_h02",
              q: "Given $y = \\sin(u)$ and $u = \\ln(x)$, find $\\frac{dy}{dx}$ at $x = 1$.",
              a: "$\\frac{dy}{du} = \\cos(u)$, $\\frac{du}{dx} = \\frac{1}{x}$. At $x = 1$: $u = 0$, $\\frac{dy}{dx} = \\cos(0) \\cdot 1 = 1$"
            },
            {
              qid: "XX_001_h03",
              q: "Given $y = v^2$, $v = u + 1$, and $u = 3x$, find $\\frac{dy}{dx}$.",
              a: "$\\frac{dy}{dv} = 2v$, $\\frac{dv}{du} = 1$, $\\frac{du}{dx} = 3$. $\\frac{dy}{dx} = 6v = 6(u+1) = 6(3x+1) = 18 x + 6$"
            },
            {
              qid: "XX_001_h04",
              q: "Given $y = e^{u^2}$ and $u = 2x + 1$, find $\\frac{dy}{dx}$ at $x = 0$.",
              a: "$\\frac{dy}{du} = 2 u e^{u^{2}}$, $\\frac{du}{dx} = 2$. At $x=0$: $u = 1$, $\\frac{dy}{dx} = 4 e$"
            },
            {
              qid: "XX_001_h05",
              q: "Given $\\frac{dy}{dx} = 6x^2$ and $\\frac{du}{dx} = 2x$, find $\\frac{dy}{du}$ in terms of $x$.",
              a: "$\\frac{dy}{du} = \\frac{dy/dx}{du/dx} = \\frac{6x^2}{2x} = 3x$"
            }
          ]
        }
,

    {
          pt_id: "XX_002",
          topic: "Differentiation",
          subtopic: "General",
          concept: "Chain Rule",
          pt: "Differentiation of reciprocal functions requiring chain rule",
          testing: "Testing: Chain rule on negative powers",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "XX_002_e01",
              q: "Differentiate $y = \\frac{3}{(x^2 + 1)^2}$.",
              a: "$y = 3(x^2+1)^{-2}$. $\\frac{dy}{dx} = - \\frac{12 x}{\\left(x^{2} + 1\\right)^{3}}$"
            },
            {
              qid: "XX_002_e02",
              q: "Differentiate $y = \\frac{2}{3x - 1}$.",
              a: "$\\frac{dy}{dx} = - \\frac{6}{\\left(3 x - 1\\right)^{2}}$"
            },
            {
              qid: "XX_002_e03",
              q: "Differentiate $y = \\frac{1}{(x + 4)^3}$.",
              a: "$\\frac{dy}{dx} = - \\frac{3}{\\left(x + 4\\right)^{4}}$"
            }
          ],
          medium: [
            {
              qid: "XX_002_m01",
              q: "Differentiate $y = \\frac{5}{2x^2 - 3}$.",
              a: "$\\frac{dy}{dx} = - \\frac{20 x}{\\left(2 x^{2} - 3\\right)^{2}}$"
            },
            {
              qid: "XX_002_m02",
              q: "Differentiate $y = \\frac{1}{(x^3 + x)^2}$.",
              a: "$\\frac{dy}{dx} = \\frac{2 \\left(- 3 x^{2} - 1\\right)}{x^{3} \\left(x^{2} + 1\\right)^{3}}$"
            },
            {
              qid: "XX_002_m03",
              q: "Differentiate $y = \\frac{4}{\\sqrt{1 - x^2}}$.",
              a: "$\\frac{dy}{dx} = \\frac{4 x}{\\left(1 - x^{2}\\right)^{\\frac{3}{2}}}$"
            },
            {
              qid: "XX_002_m04",
              q: "If $f(x) = \\frac{2}{x^2 + 5}$, find $f'(1)$.",
              a: "$f'(x) = - \\frac{4 x}{\\left(x^{2} + 5\\right)^{2}}$. $f'(1) = - \\frac{1}{9}$"
            },
            {
              qid: "XX_002_m05",
              q: "Differentiate $y = \\frac{3}{e^x + 1}$.",
              a: "$\\frac{dy}{dx} = - \\frac{3}{4 \\cosh^{2}{\\left(\\frac{x}{2} \\right)}}$"
            }
          ],
          hard: [
            {
              qid: "XX_002_h01",
              q: "Differentiate $y = \\frac{1}{(x^2 + 2x + 5)^{3/2}}$.",
              a: "$\\frac{dy}{dx} = \\frac{3 \\left(- x - 1\\right)}{\\left(x^{2} + 2 x + 5\\right)^{\\frac{5}{2}}}$"
            },
            {
              qid: "XX_002_h02",
              q: "Differentiate $y = \\frac{1}{\\sin(x)}$.",
              a: "$y = (\\sin x)^{-1}$. $\\frac{dy}{dx} = - \\frac{\\cos{\\left(x \\right)}}{\\sin^{2}{\\left(x \\right)}}$"
            },
            {
              qid: "XX_002_h03",
              q: "Differentiate $y = \\frac{1}{\\ln(x)}$ for $x > 1$.",
              a: "$\\frac{dy}{dx} = - \\frac{1}{x \\log{\\left(x \\right)}^{2}}$"
            },
            {
              qid: "XX_002_h04",
              q: "Find the gradient of $y = \\frac{4}{x^2 - 1}$ at $x = 3$.",
              a: "$\\frac{dy}{dx} = - \\frac{8 x}{\\left(x^{2} - 1\\right)^{2}}$. At $x = 3$: $- \\frac{3}{8}$"
            },
            {
              qid: "XX_002_h05",
              q: "Differentiate $y = \\frac{1}{\\left(x + \\frac{1}{x}\\right)^2}$.",
              a: "$\\frac{dy}{dx} = - \\frac{2 x \\left(x^{2} - 1\\right)}{\\left(x^{2} + 1\\right)^{3}}$"
            }
          ]
        }
,

    {
          pt_id: "XX_003",
          topic: "Differentiation",
          subtopic: "General",
          concept: "Chain Rule",
          pt: "Differentiation of simple composite functions",
          testing: "Testing: Apply chain rule $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "XX_003_e01",
              q: "Differentiate $y = (3x + 1)^5$.",
              a: "$\\frac{dy}{dx} = 15 \\left(3 x + 1\\right)^{4}$"
            },
            {
              qid: "XX_003_e02",
              q: "Differentiate $y = (2x - 3)^4$.",
              a: "$\\frac{dy}{dx} = 8 \\left(2 x - 3\\right)^{3}$"
            },
            {
              qid: "XX_003_e03",
              q: "Differentiate $y = (5 - x)^3$.",
              a: "$\\frac{dy}{dx} = - 3 \\left(x - 5\\right)^{2}$"
            }
          ],
          medium: [
            {
              qid: "XX_003_m01",
              q: "Differentiate $y = \\sqrt{4 - x^2}$.",
              a: "$\\frac{dy}{dx} = - \\frac{x}{\\sqrt{4 - x^{2}}}$"
            },
            {
              qid: "XX_003_m02",
              q: "Differentiate $y = \\frac{1}{(x^2 + 1)^3}$.",
              a: "$y = (x^2+1)^{-3}$. $\\frac{dy}{dx} = - \\frac{6 x}{\\left(x^{2} + 1\\right)^{4}}$"
            },
            {
              qid: "XX_003_m03",
              q: "Differentiate $y = (3x^2 - 2x + 1)^4$.",
              a: "$\\frac{dy}{dx} = 8 \\left(3 x - 1\\right) \\left(3 x^{2} - 2 x + 1\\right)^{3}$"
            },
            {
              qid: "XX_003_m04",
              q: "Differentiate $y = \\sqrt{1 + x^3}$.",
              a: "$\\frac{dy}{dx} = \\frac{3 x^{2}}{2 \\sqrt{x^{3} + 1}}$"
            },
            {
              qid: "XX_003_m05",
              q: "Differentiate $y = \\frac{1}{(4x - 1)^2}$.",
              a: "$y = (4x-1)^{-2}$. $\\frac{dy}{dx} = - \\frac{8}{\\left(4 x - 1\\right)^{3}}$"
            }
          ],
          hard: [
            {
              qid: "XX_003_h01",
              q: "Differentiate $y = \\frac{1}{\\sqrt{x^2 - 3x + 2}}$.",
              a: "$\\frac{dy}{dx} = \\frac{\\frac{3}{2} - x}{\\left(x^{2} - 3 x + 2\\right)^{\\frac{3}{2}}}$"
            },
            {
              qid: "XX_003_h02",
              q: "Differentiate $y = \\left(\\frac{2x+1}{x-1}\\right)^3$.",
              a: "$\\frac{dy}{dx} = - \\frac{9 \\left(2 x + 1\\right)^{2}}{\\left(x - 1\\right)^{4}}$"
            },
            {
              qid: "XX_003_h03",
              q: "If $f(x) = (x^3 - 8)^{2/3}$, find $f'(2)$.",
              a: "$f'(x) = \\frac{2 x^{2}}{\\sqrt[3]{x^{3} - 8}}$. At $x = 2$: $x^3 - 8 = 0$, so $f'(2)$ is undefined (vertical tangent)."
            },
            {
              qid: "XX_003_h04",
              q: "Differentiate $y = \\sqrt{5x^2 - 4x}$ and evaluate $\\frac{dy}{dx}$ at $x = 1$.",
              a: "$\\frac{dy}{dx} = \\frac{5 x - 2}{\\sqrt{x \\left(5 x - 4\\right)}}$. At $x = 1$: $3$"
            },
            {
              qid: "XX_003_h05",
              q: "Differentiate $y = \\left(x + \\frac{1}{x}\\right)^2$.",
              a: "$\\frac{dy}{dx} = 2 x - \\frac{2}{x^{3}}$. Expanded: $2 x - \\frac{2}{x^{3}}$"
            }
          ]
        }
,

    {
          pt_id: "XX_004",
          topic: "Differentiation",
          subtopic: "General",
          concept: "Chain Rule",
          pt: "Using a table of values or graphs of two functions and their derivatives to calculate the derivative of a composite function at a given point",
          testing: "Testing: $(f \\circ g)'(a) = f'(g(a)) \\cdot g'(a)$",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "XX_004_e01",
              q: "Given the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 3       | 4        | 2       | -1       |\n| 2   | 5       | -2       | 1       | 3        |\n| 3   | 1       | 6        | 3       | 2        |\nFind $\\frac{d}{dx}[f(g(x))]$ at $x = 1$.",
              a: "$f'(g(1)) \\cdot g'(1) = f'(2) \\cdot (-1) = (-2)(-1) = 2$"
            },
            {
              qid: "XX_004_e02",
              q: "Using the table above, find $\\frac{d}{dx}[f(g(x))]$ at $x = 3$.",
              a: "$f'(g(3)) \\cdot g'(3) = f'(3) \\cdot 2 = 6 \\cdot 2 = 12$"
            },
            {
              qid: "XX_004_e03",
              q: "Using the table above, find $\\frac{d}{dx}[g(f(x))]$ at $x = 1$.",
              a: "$g'(f(1)) \\cdot f'(1) = g'(3) \\cdot 4 = 2 \\cdot 4 = 8$"
            }
          ],
          medium: [
            {
              qid: "XX_004_m01",
              q: "Given the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 4       | -3       | 3       | 5        |\n| 2   | 1       | 2        | 4       | -1       |\n| 3   | 2       | 7        | 1       | 4        |\n| 4   | 3       | -1       | 2       | 6        |\nFind $\\frac{d}{dx}[f(g(x))]$ at $x = 2$.",
              a: "$f'(g(2)) \\cdot g'(2) = f'(4) \\cdot (-1) = (-1)(-1) = 1$"
            },
            {
              qid: "XX_004_m02",
              q: "Using the table above, find $\\frac{d}{dx}[g(f(x))]$ at $x = 3$.",
              a: "$g'(f(3)) \\cdot f'(3) = g'(2) \\cdot 7 = (-1)(7) = -7$"
            },
            {
              qid: "XX_004_m03",
              q: "Using the table above, find $\\frac{d}{dx}[f(f(x))]$ at $x = 1$.",
              a: "$f'(f(1)) \\cdot f'(1) = f'(4) \\cdot (-3) = (-1)(-3) = 3$"
            },
            {
              qid: "XX_004_m04",
              q: "Using the table above, find $\\frac{d}{dx}[g(g(x))]$ at $x = 4$.",
              a: "$g'(g(4)) \\cdot g'(4) = g'(2) \\cdot 6 = (-1)(6) = -6$"
            },
            {
              qid: "XX_004_m05",
              q: "Using the first table (Q1), explain why $\\frac{d}{dx}[g(f(x))]$ at $x = 2$ cannot be determined.",
              a: "$g'(f(2)) \\cdot f'(2) = g'(5) \\cdot (-2)$. Since $g'(5)$ is not in the table, this cannot be determined."
            }
          ],
          hard: [
            {
              qid: "XX_004_h01",
              q: "Using the table from Q4, find $\\frac{d}{dx}[f(g(x)) \\cdot g(x)]$ at $x = 3$.",
              a: "Product rule: $f'(g(3)) \\cdot g'(3) \\cdot g(3) + f(g(3)) \\cdot g'(3) = f'(1) \\cdot 4 \\cdot 1 + f(1) \\cdot 4 = (-3)(4)(1) + (4)(4) = -12 + 16 = 4$"
            },
            {
              qid: "XX_004_h02",
              q: "Using the table from Q4, find $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.",
              a: "Quotient rule: $\\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{(-3)(3) - (4)(5)}{9} = \\frac{-29}{9}$"
            },
            {
              qid: "XX_004_h03",
              q: "Using the table from Q4, find $\\frac{d}{dx}[f(x)]^2$ at $x = 3$.",
              a: "$2f(3) \\cdot f'(3) = 2(2)(7) = 28$"
            },
            {
              qid: "XX_004_h04",
              q: "Using the table from Q4, find $\\frac{d}{dx}[f(g(g(x)))]$ at $x = 4$.",
              a: "$f'(g(g(4))) \\cdot g'(g(4)) \\cdot g'(4) = f'(g(2)) \\cdot g'(2) \\cdot 6 = f'(4) \\cdot (-1) \\cdot 6 = (-1)(-1)(6) = 6$"
            },
            {
              qid: "XX_004_h05",
              q: "Using the table from Q4, find $\\frac{d}{dx}\\sqrt{f(x)}$ at $x = 1$.",
              a: "$\\frac{f'(1)}{2\\sqrt{f(1)}} = \\frac{-3}{2\\sqrt{4}} = \\frac{-3}{4}$"
            }
          ]
        }
,

    {
          pt_id: "XX_005",
          topic: "Uncategorised",
          subtopic: "General",
          concept: "Product Rule",
          pt: "Differentiating $x^n \\cdot \\ln(f(x))$ using product rule",
          testing: "Testing: Product rule where one factor is a logarithmic function",
          reason_bank: [
            "wrong_rule",
            "setup_error",
            "sign_error",
            "algebra_slip",
            "missing_chain_factor",
            "not_sure"
          ],
          easy: [
            {
              qid: "XX_005_e01",
              q: "Differentiate $y = x\\ln(x)$.",
              a: "$u = x$, $v = \\ln(x)$. $u' = 1$, $v' = \\frac{1}{x}$.\n$y' = \\ln(x) + x \\cdot \\frac{1}{x} = \\ln(x) + 1$"
            },
            {
              qid: "XX_005_e02",
              q: "Differentiate $y = x^2 \\ln(x)$.",
              a: "$y' = 2x\\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x = x(2\\ln(x) + 1)$"
            },
            {
              qid: "XX_005_e03",
              q: "Differentiate $y = 3x\\ln(x)$.",
              a: "$y' = 3\\ln(x) + 3x \\cdot \\frac{1}{x} = 3\\ln(x) + 3 = 3(\\ln(x) + 1)$"
            }
          ],
          medium: [
            {
              qid: "XX_005_m01",
              q: "Differentiate $y = x^3 \\ln(x)$.",
              a: "$y' = 3x^2\\ln(x) + x^3 \\cdot \\frac{1}{x} = 3x^2\\ln(x) + x^2 = x^2(3\\ln(x) + 1)$"
            },
            {
              qid: "XX_005_m02",
              q: "Differentiate $y = x^2 \\ln(2x)$.",
              a: "$u = x^2$, $v = \\ln(2x)$. $u' = 2x$, $v' = \\frac{2}{2x} = \\frac{1}{x}$.\n$y' = 2x\\ln(2x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(2x) + x = x(2\\ln(2x) + 1)$"
            },
            {
              qid: "XX_005_m03",
              q: "Differentiate $y = \\sqrt{x}\\ln(x)$.",
              a: "$u = x^{1/2}$, $v = \\ln(x)$. $u' = \\frac{1}{2\\sqrt{x}}$, $v' = \\frac{1}{x}$.\n$y' = \\frac{\\ln(x)}{2\\sqrt{x}} + \\frac{\\sqrt{x}}{x} = \\frac{\\ln(x)}{2\\sqrt{x}} + \\frac{1}{\\sqrt{x}} = \\frac{\\ln(x) + 2}{2\\sqrt{x}}$"
            },
            {
              qid: "XX_005_m04",
              q: "Differentiate $y = (x + 1)\\ln(x)$.",
              a: "$y' = \\ln(x) + \\frac{x+1}{x} = \\ln(x) + 1 + \\frac{1}{x}$"
            },
            {
              qid: "XX_005_m05",
              q: "Differentiate $y = x\\ln(x^2)$.",
              a: "**Method 1 (simplify first):** $y = 2x\\ln(x)$, so $y' = 2(\\ln(x) + 1)$\n**Method 2 (direct):** $u = x$, $v = \\ln(x^2)$. $v' = \\frac{2x}{x^2} = \\frac{2}{x}$. $y' = \\ln(x^2) + 2 = 2\\ln(x) + 2$"
            }
          ],
          hard: [
            {
              qid: "XX_005_h01",
              q: "Differentiate $y = x^2 \\ln(3x + 1)$.",
              a: "$u = x^2$, $v = \\ln(3x+1)$. $u' = 2x$, $v' = \\frac{3}{3x+1}$.\n$y' = 2x\\ln(3x+1) + \\frac{3x^2}{3x+1}$"
            },
            {
              qid: "XX_005_h02",
              q: "Differentiate $y = (x^2 - 1)\\ln(x + 1)$.",
              a: "$u = x^2-1$, $v = \\ln(x+1)$. $u' = 2x$, $v' = \\frac{1}{x+1}$.\n$y' = 2x\\ln(x+1) + \\frac{x^2-1}{x+1} = 2x\\ln(x+1) + \\frac{(x-1)(x+1)}{x+1} = 2x\\ln(x+1) + (x - 1)$"
            },
            {
              qid: "XX_005_h03",
              q: "Find the coordinates of the stationary point of $f(x) = x^2\\ln(x)$ for $x > 0$.",
              a: "$f'(x) = 2x\\ln(x) + x = x(2\\ln(x) + 1)$.\nFor $x > 0$: $2\\ln(x) + 1 = 0 \\Rightarrow \\ln(x) = -\\frac{1}{2} \\Rightarrow x = e^{-1/2} = \\frac{1}{\\sqrt{e}}$.\n$f\\left(\\frac{1}{\\sqrt{e}}\\right) = \\frac{1}{e} \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{1}{2e}$.\nStationary point: $\\left(\\frac{1}{\\sqrt{e}}, -\\frac{1}{2e}\\right)$"
            },
            {
              qid: "XX_005_h04",
              q: "Using the product rule on $y = x^{-1}\\ln(x)$, find $\\frac{dy}{dx}$.",
              a: "$u = x^{-1}$, $v = \\ln(x)$. $u' = -x^{-2}$, $v' = \\frac{1}{x}$.\n$y' = -x^{-2}\\ln(x) + x^{-1} \\cdot \\frac{1}{x} = \\frac{-\\ln(x)}{x^2} + \\frac{1}{x^2} = \\frac{1 - \\ln(x)}{x^2}$"
            },
            {
              qid: "XX_005_h05",
              q: "Differentiate $y = e^x \\ln(x)$.",
              a: "$u = e^x$, $v = \\ln(x)$. $u' = e^x$, $v' = \\frac{1}{x}$.\n$y' = e^x\\ln(x) + \\frac{e^x}{x} = e^x\\left(\\ln(x) + \\frac{1}{x}\\right)$"
            }
          ]
        }
,

    {
          pt_id: "XX_006",
          topic: "Differentiation",
          subtopic: "General",
          concept: "Product Rule",
          pt: "Differentiation of a product of functions that requires the use of quotient or chain rule as part of the product rule process",
          testing: "Testing: Nested rules — product rule with chain rule inside",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "XX_006_e01",
              q: "Differentiate $y = x(2x + 1)^3$.",
              a: "$u = x$, $v = (2x+1)^3$. $u' = 1$, $v' = 6(2x+1)^2$.\n$y' = (2x+1)^3 + 6x(2x+1)^2 = (2x+1)^2[(2x+1) + 6x] = (2x+1)^2(8x + 1)$"
            },
            {
              qid: "XX_006_e02",
              q: "Differentiate $y = x^2 \\sin(3x)$.",
              a: "$u = x^2$, $v = \\sin(3x)$. $u' = 2x$, $v' = 3\\cos(3x)$.\n$y' = 2x\\sin(3x) + 3x^2\\cos(3x) = x[2\\sin(3x) + 3x\\cos(3x)]$"
            },
            {
              qid: "XX_006_e03",
              q: "Differentiate $y = (x + 1)e^{2x}$.",
              a: "$u = x+1$, $v = e^{2x}$. $u' = 1$, $v' = 2e^{2x}$.\n$y' = e^{2x} + 2(x+1)e^{2x} = e^{2x}(1 + 2x + 2) = e^{2x}(2x + 3)$"
            }
          ],
          medium: [
            {
              qid: "XX_006_m01",
              q: "Differentiate $y = x^3 \\sin(2x)$.",
              a: "$y' = 3x^2 \\sin(2x) + x^3 \\cdot 2\\cos(2x) = x^2[3\\sin(2x) + 2x\\cos(2x)]$"
            },
            {
              qid: "XX_006_m02",
              q: "Differentiate $y = e^{3x}(x^2 + 1)^4$.",
              a: "$u = e^{3x}$, $v = (x^2+1)^4$. $u' = 3e^{3x}$, $v' = 8x(x^2+1)^3$.\n$y' = 3e^{3x}(x^2+1)^4 + 8xe^{3x}(x^2+1)^3 = e^{3x}(x^2+1)^3[3(x^2+1) + 8x] = e^{3x}(x^2+1)^3(3x^2 + 8x + 3)$"
            },
            {
              qid: "XX_006_m03",
              q: "Differentiate $y = (2x - 3)^2 \\cos(x)$.",
              a: "$u = (2x-3)^2$, $v = \\cos(x)$. $u' = 4(2x-3)$, $v' = -\\sin(x)$.\n$y' = 4(2x-3)\\cos(x) - (2x-3)^2\\sin(x) = (2x-3)[4\\cos(x) - (2x-3)\\sin(x)]$"
            },
            {
              qid: "XX_006_m04",
              q: "Differentiate $y = x\\sqrt{x^2 + 4}$.",
              a: "$u = x$, $v = (x^2+4)^{1/2}$. $u' = 1$, $v' = \\frac{x}{\\sqrt{x^2+4}}$.\n$y' = \\sqrt{x^2+4} + \\frac{x^2}{\\sqrt{x^2+4}} = \\frac{x^2+4+x^2}{\\sqrt{x^2+4}} = \\frac{2x^2+4}{\\sqrt{x^2+4}}$"
            },
            {
              qid: "XX_006_m05",
              q: "Differentiate $y = e^{-x}\\sin(x)$.",
              a: "$u = e^{-x}$, $v = \\sin(x)$. $u' = -e^{-x}$, $v' = \\cos(x)$.\n$y' = -e^{-x}\\sin(x) + e^{-x}\\cos(x) = e^{-x}(\\cos(x) - \\sin(x))$"
            }
          ],
          hard: [
            {
              qid: "XX_006_h01",
              q: "Differentiate $y = (x^2 + 5\\pi)\\cos(2x)$.",
              a: "$u = x^2+5\\pi$, $v = \\cos(2x)$. $u' = 2x$, $v' = -2\\sin(2x)$.\n$y' = 2x\\cos(2x) - 2(x^2 + 5\\pi)\\sin(2x)$"
            },
            {
              qid: "XX_006_h02",
              q: "Differentiate $y = x^2 e^x \\cos(x)$.",
              a: "Using extended product rule on three functions:\n$y' = 2xe^x\\cos(x) + x^2 e^x\\cos(x) + x^2 e^x(-\\sin(x))$\n$= xe^x[2\\cos(x) + x\\cos(x) - x\\sin(x)] = xe^x[(2+x)\\cos(x) - x\\sin(x)]$"
            },
            {
              qid: "XX_006_h03",
              q: "Differentiate $y = (3x - 1)^4 \\sqrt{2x + 5}$.",
              a: "$u = (3x-1)^4$, $v = (2x+5)^{1/2}$. $u' = 12(3x-1)^3$, $v' = \\frac{1}{\\sqrt{2x+5}}$.\n$y' = 12(3x-1)^3\\sqrt{2x+5} + \\frac{(3x-1)^4}{\\sqrt{2x+5}}$\n$= \\frac{(3x-1)^3}{\\sqrt{2x+5}}[12(2x+5) + (3x-1)] = \\frac{(3x-1)^3(27x + 59)}{\\sqrt{2x+5}}$"
            },
            {
              qid: "XX_006_h04",
              q: "Differentiate $y = x\\sin(x)e^x$.",
              a: "Using extended product rule:\n$y' = \\sin(x)e^x + x\\cos(x)e^x + x\\sin(x)e^x = e^x[\\sin(x) + x\\cos(x) + x\\sin(x)]$\n$= e^x[(1+x)\\sin(x) + x\\cos(x)]$"
            },
            {
              qid: "XX_006_h05",
              q: "Differentiate $y = (x^2 - 4)^3(3x + 1)^2$.",
              a: "$u = (x^2-4)^3$, $v = (3x+1)^2$. $u' = 6x(x^2-4)^2$, $v' = 6(3x+1)$.\n$y' = 6x(x^2-4)^2(3x+1)^2 + 6(x^2-4)^3(3x+1)$\n$= 6(x^2-4)^2(3x+1)[x(3x+1) + (x^2-4)] = 6(x^2-4)^2(3x+1)(4x^2 + x - 4)$"
            }
          ]
        }
,

    {
          pt_id: "XX_007",
          topic: "Differentiation",
          subtopic: "General",
          concept: "Product Rule",
          pt: "Product rule differentiation of simple functions",
          testing: "Testing: $(uv)' = u'v + uv'$ with polynomial/simple functions",
          reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
          easy: [
            {
              qid: "XX_007_e01",
              q: "Differentiate $y = xe^x$.",
              a: "$y' = e^x + xe^x = e^x(1 + x)$"
            },
            {
              qid: "XX_007_e02",
              q: "Use the product rule to differentiate $y = x^2(x + 3)$.",
              a: "Let $u = x^2$, $v = x + 3$. Then $u' = 2x$, $v' = 1$.\n$y' = 2x(x+3) + x^2(1) = 2x^2 + 6x + x^2 = 3x^2 + 6x = 3x(x+2)$"
            },
            {
              qid: "XX_007_e03",
              q: "Differentiate $y = (2x + 1)e^x$.",
              a: "$u = 2x+1$, $v = e^x$. $u' = 2$, $v' = e^x$.\n$y' = 2e^x + (2x+1)e^x = e^x(2x + 3)$"
            }
          ],
          medium: [
            {
              qid: "XX_007_m01",
              q: "Differentiate $y = x^2 e^x$.",
              a: "$y' = 2xe^x + x^2 e^x = xe^x(2 + x)$"
            },
            {
              qid: "XX_007_m02",
              q: "Differentiate $y = (3x + 1)(2x - 5)^4$.",
              a: "$y' = 3(2x-5)^4 + (3x+1) \\cdot 8(2x-5)^3 = (2x-5)^3[3(2x-5) + 8(3x+1)] = (2x-5)^3(30x - 7)$"
            },
            {
              qid: "XX_007_m03",
              q: "Differentiate $y = x^3 \\sin(x)$.",
              a: "$y' = 3x^2 \\sin(x) + x^3 \\cos(x) = x^2[3\\sin(x) + x\\cos(x)]$"
            },
            {
              qid: "XX_007_m04",
              q: "Differentiate $y = \\sqrt{x}(x^2 - 1)$.",
              a: "$u = x^{1/2}$, $v = x^2 - 1$. $u' = \\frac{1}{2\\sqrt{x}}$, $v' = 2x$.\n$y' = \\frac{x^2 - 1}{2\\sqrt{x}} + 2x\\sqrt{x} = \\frac{x^2 - 1 + 4x^2}{2\\sqrt{x}} = \\frac{5x^2 - 1}{2\\sqrt{x}}$"
            },
            {
              qid: "XX_007_m05",
              q: "Differentiate $y = (x + 4)e^{-x}$.",
              a: "$u = x+4$, $v = e^{-x}$. $u' = 1$, $v' = -e^{-x}$.\n$y' = e^{-x} + (x+4)(-e^{-x}) = e^{-x}(1 - x - 4) = -(x+3)e^{-x}$"
            }
          ],
          hard: [
            {
              qid: "XX_007_h01",
              q: "Differentiate $y = (x^2 + 3x)(4x - 1)^3$.",
              a: "$u = x^2+3x$, $v = (4x-1)^3$. $u' = 2x+3$, $v' = 12(4x-1)^2$.\n$y' = (2x+3)(4x-1)^3 + 12(x^2+3x)(4x-1)^2$\n$= (4x-1)^2[(2x+3)(4x-1) + 12x(x+3)]$\n$= (4x-1)^2(20 x^{2} + 46 x - 3)$"
            },
            {
              qid: "XX_007_h02",
              q: "Differentiate $y = x^2 e^{3x}$.",
              a: "$u = x^2$, $v = e^{3x}$. $u' = 2x$, $v' = 3e^{3x}$.\n$y' = 2xe^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$"
            },
            {
              qid: "XX_007_h03",
              q: "Differentiate $y = (2x - 1)^3(x + 5)^2$.",
              a: "$u = (2x-1)^3$, $v = (x+5)^2$. $u' = 6(2x-1)^2$, $v' = 2(x+5)$.\n$y' = 6(2x-1)^2(x+5)^2 + 2(2x-1)^3(x+5)$\n$= 2(2x-1)^2(x+5)[3(x+5) + (2x-1)] = 2(2x-1)^2(x+5)(5x + 14)$"
            },
            {
              qid: "XX_007_h04",
              q: "Differentiate $y = \\sqrt{x}\\cos(x)$.",
              a: "$u = x^{1/2}$, $v = \\cos(x)$. $u' = \\frac{1}{2\\sqrt{x}}$, $v' = -\\sin(x)$.\n$y' = \\frac{\\cos(x)}{2\\sqrt{x}} - \\sqrt{x}\\sin(x) = \\frac{\\cos(x) - 2x\\sin(x)}{2\\sqrt{x}}$"
            },
            {
              qid: "XX_007_h05",
              q: "Differentiate $y = (3x^2 - 2)e^{-2x}$.",
              a: "$u = 3x^2-2$, $v = e^{-2x}$. $u' = 6x$, $v' = -2e^{-2x}$.\n$y' = 6xe^{-2x} - 2(3x^2-2)e^{-2x} = e^{-2x}(6x - 6x^2 + 4) = -2e^{-2x}(3x^2 - 3x - 2)$"
            }
          ]
        }
,

    {
          pt_id: "XX_008",
          topic: "Differentiation",
          subtopic: "General",
          concept: "Product Rule",
          pt: "Using a table of values or graphs of two functions and their derivatives to calculate the derivative of the product of the two functions at a given point",
          testing: "Testing: $(fg)'(a) = f'(a)g(a) + f(a)g'(a)$ from table",
          reason_bank: ["wrong_rule", "setup_error", "sign_error", "algebra_slip", "missing_chain_factor", "not_sure"],
          easy: [
            {
              qid: "XX_008_e01",
              q: "Given $f(1) = 2$, $f'(1) = 3$, $g(1) = 5$, $g'(1) = 1$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$.",
              a: "$(fg)'(1) = f'(1)g(1) + f(1)g'(1) = 3(5) + 2(1) = 15 + 2 = 17$"
            },
            {
              qid: "XX_008_e02",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | 4       | 0        | 3       | 2        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
              a: "$f'(2)g(2) + f(2)g'(2) = 0(3) + 4(2) = 8$"
            },
            {
              qid: "XX_008_e03",
              q: "Given $f(0) = 3$, $f'(0) = -2$, $g(0) = 4$, $g'(0) = 5$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 0$.",
              a: "$f'(0)g(0) + f(0)g'(0) = (-2)(4) + 3(5) = -8 + 15 = 7$"
            }
          ],
          medium: [
            {
              qid: "XX_008_m01",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 3       | 4        | 2       | -1       |\n| 2   | 5       | -2       | 1       | 3        |\n| 3   | 1       | 6        | 3       | 2        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 3$.",
              a: "$f'(3)g(3) + f(3)g'(3) = 6(3) + 1(2) = 18 + 2 = 20$"
            },
            {
              qid: "XX_008_m02",
              q: "Let $h(x) = f(x)g(x)$. Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | -1      | 2        | 6       | 3        |\n| 4   | 3       | -4       | 2       | 1        |\nFind $h'(1)$ and $h'(4)$.",
              a: "$h'(1) = f'(1)g(1) + f(1)g'(1) = 2(6) + (-1)(3) = 12 - 3 = 9$\n$h'(4) = f'(4)g(4) + f(4)g'(4) = (-4)(2) + 3(1) = -8 + 3 = -5$"
            },
            {
              qid: "XX_008_m03",
              q: "Given $f(2) = \\frac{1}{2}$, $f'(2) = 3$, $g(2) = 4$, $g'(2) = -\\frac{1}{3}$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$.",
              a: "$f'(2)g(2) + f(2)g'(2) = 3(4) + \\frac{1}{2} \\cdot \\left(-\\frac{1}{3}\\right) = 12 - \\frac{1}{6} = \\frac{71}{6}$"
            },
            {
              qid: "XX_008_m04",
              q: "Let $h(x) = f(x)g(x)$. Given $f(3) = 2$, $f'(3) = k$, $g(3) = 5$, $g'(3) = -1$ and $h'(3) = 13$, find $k$.",
              a: "$h'(3) = f'(3)g(3) + f(3)g'(3) = 5k + 2(-1) = 5k - 2$\n$5k - 2 = 13 \\Rightarrow 5k = 15 \\Rightarrow k = 3$"
            },
            {
              qid: "XX_008_m05",
              q: "Using the table, determine whether $h(x) = f(x)g(x)$ has a stationary point at $x = 2$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 2   | 6       | -3       | 4       | 2        |",
              a: "$h'(2) = f'(2)g(2) + f(2)g'(2) = (-3)(4) + 6(2) = -12 + 12 = 0$\nSince $h'(2) = 0$, yes, $h(x)$ has a stationary point at $x = 2$."
            }
          ],
          hard: [
            {
              qid: "XX_008_h01",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 1   | 3       | 4        | 2       | -1       |\n| 2   | 5       | -2       | 1       | 3        |\nFind $\\frac{d}{dx}[f(x)g(x)]$ at $x = 1$ and $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$.",
              a: "Product: $f'(1)g(1) + f(1)g'(1) = 4(2) + 3(-1) = 8 - 3 = 5$\nQuotient: $\\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{4(2) - 3(-1)}{4} = \\frac{11}{4}$"
            },
            {
              qid: "XX_008_h02",
              q: "Using the values $f(2) = 3$, $f'(2) = -1$, $g(2) = 4$, $g'(2) = 2$, find $\\frac{d}{dx}\\left[[f(x)]^2 \\cdot g(x)\\right]$ at $x = 2$.",
              a: "$\\frac{d}{dx}[f^2 g] = 2f(x)f'(x)g(x) + [f(x)]^2 g'(x)$\n$= 2(3)(-1)(4) + (3)^2(2) = -24 + 18 = -6$"
            },
            {
              qid: "XX_008_h03",
              q: "Using the table:\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ | $h(x)$ | $h'(x)$ |\n|-----|---------|----------|---------|----------|---------|----------|\n| 1   | 2       | -3       | 4       | 1        | 5       | -2       |\nFind $\\frac{d}{dx}[f(x)g(x)h(x)]$ at $x = 1$.",
              a: "$\\frac{d}{dx}[fgh] = f'gh + fg'h + fgh'$\n$= (-3)(4)(5) + (2)(1)(5) + (2)(4)(-2) = -60 + 10 - 16 = -66$"
            },
            {
              qid: "XX_008_h04",
              q: "Using the values $f(1) = 3$, $f'(1) = 2$, $g(1) = -2$, $g'(1) = 4$, find the equation of the tangent to $y = f(x)g(x)$ at $x = 1$.",
              a: "At $x = 1$: $y = f(1)g(1) = 3(-2) = -6$. Point: $(1, -6)$.\nGradient: $f'(1)g(1) + f(1)g'(1) = 2(-2) + 3(4) = -4 + 12 = 8$\nTangent: $y - (-6) = 8(x - 1)$, i.e. $y = 8x - 14$"
            },
            {
              qid: "XX_008_h05",
              q: "Using the table below, determine the value(s) of $x$ for which $\\frac{d}{dx}[f(x)g(x)] > 0$.\n| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n|-----|---------|----------|---------|----------|\n| 0   | 1       | 2        | -3      | 4        |\n| 1   | -2      | 3        | 1       | -5       |\n| 2   | 4       | -1       | 2       | 3        |",
              a: "$x = 0$: $f'g + fg' = 2(-3) + 1(4) = -2 < 0$ ✗\n$x = 1$: $f'g + fg' = 3(1) + (-2)(-5) = 13 > 0$ ✓\n$x = 2$: $f'g + fg' = (-1)(2) + 4(3) = 10 > 0$ ✓\nSo $(fg)' > 0$ at $x = 1$ and $x = 2$."
            }
          ]
        }

  ]
};