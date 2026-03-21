// ======================================================================
// CONCEPTS — Rectilinear Motion
// Full conceptual revision content (Pairs Activity format)
// 22 questions across 9 subsections in 3 platform sections
// Source: Integration_Kinematics_Pair_Revision.pdf (pages 14-21)
// ======================================================================

var CONCEPTS_RECTILINEAR_MOTION = {
  topic: "Rectilinear Motion",
  subtitle: "Conceptual Revision — Pair Activity",
  instructions: "Work in pairs. One student is the Reader and the other is the Responder. The Reader reads each prompt aloud. The Responder must explain their answer in words — not just write equations. The goal is to articulate your understanding, not perform calculations. Swap roles after each section. If used individually: Cover the answer, attempt a verbal explanation, then check.",

  sections: [

    // ════════════════════════════════════════════════════════════
    // SECTION 1: Displacement vs Distance from Origin
    // Platform section: Kinematics: General
    // ════════════════════════════════════════════════════════════
    {
      section: "Displacement vs Distance from Origin",
      subtopic: "Kinematics: General",
      swap_after: true,
      questions: [
        {
          qid: "C_KN_34",
          q: "A particle has displacement function $x(t)$.\nIf $x(3) = -5$, what is the displacement at $t = 3$?\nWhat is the distance from the origin at $t = 3$? Why are these different?",
          answer: "Displacement at $t = 3$ is $-5$ (this is $x(3)$ directly — it includes direction/sign).\nDistance from the origin at $t = 3$ is $|-5| = 5$ (always positive).\nThey differ because displacement is a signed quantity indicating position relative to the origin (negative = left of origin), while distance from origin is a magnitude (always positive).",
          diagram: null
        },
        {
          qid: "C_KN_35",
          q: "Explain the difference between 'change in displacement between $t = 1$ and $t = 4$' and 'change in distance from origin between $t = 1$ and $t = 4$'.",
          answer: "Change in displacement $= x(4) - x(1)$: the net shift in position.\nChange in distance from origin $= |x(4)| - |x(1)|$: whether the particle is closer to or further from the origin.\nThese can be very different — e.g. if $x(1) = -3$ and $x(4) = 2$: change in displacement $= 5$ (moved 5 right), but change in distance from origin $= 2 - 3 = -1$ (actually closer to the origin).",
          diagram: null
        },
        {
          qid: "C_KN_36",
          q: "Therefore, what part of the velocity graph is equivalent to the change in displacement between $t = a$ and $t = b$?\nWhat part of the velocity graph is equivalent to the distance travelled between $t = a$ and $t = b$?",
          answer: "The **signed area** between the $t$-axis and the velocity curve (between $t = a$ and $t = b$) tells us about the change in displacement between $t = a$ and $t = b$.\n\nThe **total area** between the $t$-axis and the velocity curve (between $t = a$ and $t = b$) tells us the distance travelled between $t = a$ and $t = b$.",
          diagram: "C_KN_36_velocity_signed_total_area.png"
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 2: Velocity vs Speed
    // Platform section: Kinematics: General
    // ════════════════════════════════════════════════════════════
    {
      section: "Velocity vs Speed",
      subtopic: "Kinematics: General",
      swap_after: true,
      questions: [
        {
          qid: "C_KN_37",
          q: "What are the differences between velocity and speed?",
          answer: "Velocity tells us both the direction of travel and the instantaneous rate the displacement from the origin is changing.\nThe sign indicates direction: positive = moving right, negative = moving left.\nSpeed only tells us the instantaneous rate the distance from the origin is changing.\nSpeed $= |v(t)|$.\nA particle moving left at 3 m/s has velocity $= -3$ m/s but speed $= 3$ m/s. Speed $= 0$ only when the particle is momentarily at rest ($v = 0$).",
          diagram: null
        },
        {
          qid: "C_KN_38",
          q: "If $v(2) = -4$, describe the motion of the particle at $t = 2$. What is its speed?",
          answer: "The particle is moving in the negative direction (to the left) at $t = 2$, with a velocity of $-4$ units per second.\nIts speed is $|-4| = 4$ units per second.\nSpeed is the magnitude of velocity — it tells you how fast without indicating direction.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 3: Speeding Up vs Slowing Down
    // Platform section: Kinematics: General
    // ════════════════════════════════════════════════════════════
    {
      section: "Speeding Up vs Slowing Down",
      subtopic: "Kinematics: General",
      swap_after: true,
      questions: [
        {
          qid: "C_KN_39",
          q: "A particle has $v(3) = -2$ and $a(3) = -1$. Is it speeding up or slowing down at $t = 3$? Explain.",
          answer: "It is SPEEDING UP.\nBoth velocity and acceleration are negative — they have the SAME SIGN.\nWhen velocity and acceleration share the same sign, the acceleration pushes the particle faster in the direction it is already moving.\nHere the particle moves left ($v < 0$) and accelerates left ($a < 0$), so it goes faster to the left.",
          diagram: null
        },
        {
          qid: "C_KN_40",
          q: "A particle has $v(5) = 3$ and $a(5) = -2$. Is it speeding up or slowing down? Explain.",
          answer: "It is SLOWING DOWN.\nVelocity is positive but acceleration is negative — they have OPPOSITE SIGNS.\nThe acceleration opposes the direction of motion, acting as a braking force.\nCommon misconception: Do not assume negative acceleration always means slowing down — it doesn't! It depends on the sign of velocity too.",
          diagram: null
        },
        {
          qid: "C_KN_41",
          q: "State the complete rule for determining speeding up vs slowing down.",
          answer: "Speeding up: velocity and acceleration have the SAME sign (both positive, both negative).\nSlowing down: velocity and acceleration have OPPOSITE signs.\nWhen either $v = 0$ or $a = 0$, the particle is neither speeding up nor slowing down at that instant.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 4: Changing Direction
    // Platform section: Kinematics: General
    // ════════════════════════════════════════════════════════════
    {
      section: "Changing Direction",
      subtopic: "Kinematics: General",
      swap_after: true,
      questions: [
        {
          qid: "C_KN_42",
          q: "What conditions must be met for a particle to change direction?",
          answer: "The velocity must equal zero AND then change sign (a max or min on the displacement curve).\nBoth conditions are needed. $v(t) = 0$ alone is not sufficient — if the velocity touches zero but its derivative (gradient) does not change sign (like at a horizontal inflection point in the displacement function), the particle momentarily pauses but does not reverse.\nFor a genuine direction change, $v$ (displacement's derivative) must go from positive to negative or vice versa.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 5: Maximum Speed vs Maximum Velocity
    // Platform section: Kinematics: Differentiation
    // ════════════════════════════════════════════════════════════
    {
      section: "Maximum Speed vs Maximum Velocity",
      subtopic: "Kinematics: Differentiation",
      swap_after: true,
      questions: [
        {
          qid: "C_KN_43",
          q: "Why is finding maximum speed harder than finding maximum velocity? What extra work is involved?",
          answer: "Maximum velocity just requires finding where $a(t) = 0$ and checking the sign change (standard calculus maximum).\nBut maximum SPEED is the maximum of $|v(t)|$, which could occur at maximum velocity OR at minimum velocity (most negative).\nYou must:\n(1) Find all critical points where $a(t) = 0$.\n(2) Evaluate $|v(t)|$ at each critical point AND at the endpoints.\n(3) Compare all absolute values to find the largest.",
          diagram: null
        },
        {
          qid: "C_KN_44",
          q: "A particle's velocity function has a maximum of 6 m/s and a minimum of $-8$ m/s. What is the maximum speed?",
          answer: "The maximum speed is 8 m/s.\nThe particle moves fastest when its velocity is $-8$ m/s.\nMoving left at 8 m/s is faster than moving right at 6 m/s. Speed does not care about direction.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 6: Interpreting Velocity and Acceleration Graphs
    // Platform section: Kinematics: Differentiation
    // ════════════════════════════════════════════════════════════
    {
      section: "Interpreting Velocity and Acceleration Graphs",
      subtopic: "Kinematics: Differentiation",
      swap_after: true,
      questions: [
        {
          qid: "C_KN_45",
          q: "On a velocity-time graph, how can you tell when the particle is:\n(a) moving right,\n(b) moving left,\n(c) at rest,\n(d) at maximum displacement?",
          answer: "(a) Moving right: where $v(t) > 0$, the graph is above the $t$-axis. This tells us the gradient of the displacement curve is positive.\n(b) Moving left: where $v(t) < 0$, the graph is below the $t$-axis. This tells us the gradient of the displacement curve is negative.\n(c) At rest: where $v(t) = 0$, the graph crosses or touches the $t$-axis. Gradient is 0 on the displacement curve.\n(d) Maximum displacement: where $v(t) = 0$ and changes from positive to negative — the particle stops moving forward and starts going back. We need to check endpoints to see if there is a global maximum.",
          diagram: null
        },
        {
          qid: "C_KN_46",
          q: "On a velocity-time graph, what does the area between the curve and the time axis represent?",
          answer: "The signed area represents displacement (change in position).\nArea above the $t$-axis = displacement in the positive direction.\nArea below = displacement in the negative direction.\nThe NET signed area gives total displacement.\nThe TOTAL area (all sections positive) gives total distance travelled.\nThis is why distance and displacement calculations require different treatments.",
          diagram: null
        },
        {
          qid: "C_KN_47",
          q: "On an acceleration-time graph, what does a positive value mean? What does the definite integral of acceleration represent?",
          answer: "Positive acceleration means the velocity is increasing (not necessarily speeding up — that depends on direction of motion).\nNegative acceleration means velocity is decreasing.\nThe signed area under the acceleration graph between two times gives the total change in velocity:\n$v(b) - v(a) = \\int_a^b a(t) \\, dt$.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 7: Rectilinear Motion — Integration
    // Platform section: Kinematics: Integration
    // ════════════════════════════════════════════════════════════
    {
      section: "Rectilinear Motion — Integration",
      subtopic: "Kinematics: Integration",
      swap_after: true,
      questions: [
        {
          qid: "C_KN_48",
          q: "What does $\\int_a^b v(t) \\, dt$ represent?",
          answer: "$\\int_a^b v(t) \\, dt$ represents the total displacement (net change in position) between time $a$ and time $b$.\nIt is the signed area under the velocity curve.\nIf positive, the particle ends up to the right of where it started; if negative, to the left.\nIt does NOT tell you the total distance travelled.",
          diagram: null
        },
        {
          qid: "C_KN_49",
          q: "Why does $\\int_a^b v(t) \\, dt$ give change in displacement but $\\int_a^b |v(t)| \\, dt$ give distance travelled?",
          answer: "When $v(t) < 0$ the particle moves backward.\nThe integral $\\int v(t) \\, dt$ counts backward movement as negative, so it cancels forward movement — giving net displacement.\nBut $\\int |v(t)| \\, dt$ makes all contributions positive — backward movement is counted as positive distance, so nothing cancels.",
          diagram: null
        },
        {
          qid: "C_KN_50",
          q: "How can you find distance travelled from $t = a$ to $t = b$ when you are given the $v(t)$ equation, without using $\\int_a^b |v(t)| \\, dt$ on ClassPad?",
          answer: "Find when $v(t)$ intersects the $t$-axis and goes from above the axis to below.\nCalculate the area between the curve in the sections between intercepts (by finding the integrals for each section). Make all areas positive and add them together.\ne.g. $\\int_a^{c_1} v(t) \\, dt + \\left| \\int_{c_1}^{c_2} v(t) \\, dt \\right| + \\int_{c_2}^{c_3} v(t) \\, dt + \\left| \\int_{c_3}^{b} v(t) \\, dt \\right|$",
          diagram: null
        },
        {
          qid: "C_KN_51",
          q: "If you are given $a(t)$ and asked to find $v(t)$, explain the full process. Why is the initial condition essential?",
          answer: "Step 1: Integrate $a(t)$ to get $v(t) = \\int a(t) \\, dt + C$.\nStep 2: Use the initial condition (e.g. $v(0) = 5$) to find $C$.\nWithout the $+C$, you have infinitely many possible velocity functions.\nThe acceleration tells you how velocity changes, but not what it started at.\nThe same applies when integrating velocity to get displacement.",
          diagram: null
        },
        {
          qid: "C_KN_52",
          q: "If you are given $a(t)$ and asked to find the change in velocity between times $t = a$ and $t = b$, explain the full process. Why is the initial condition NOT essential here?",
          answer: "Use the total change formula: Change in velocity $= v(b) - v(a) = \\int_a^b a(t) \\, dt$.\nThe initial condition is not needed because you are finding the CHANGE in velocity, not the velocity function itself. The definite integral directly gives the net change without needing to know the starting value.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 8: Average Velocity and Average Speed
    // Platform section: Kinematics: Integration
    // ════════════════════════════════════════════════════════════
    {
      section: "Average Velocity and Average Speed",
      subtopic: "Kinematics: Integration",
      swap_after: true,
      questions: [
        {
          qid: "C_KN_53",
          q: "How would you calculate average velocity between times $a$ and $b$?",
          answer: "Average velocity $= \\frac{x(b) - x(a)}{b - a}$ (total displacement divided by total time).\nUsing the velocity function: $\\frac{\\int_a^b v(t) \\, dt}{b - a}$.\nGeometrically, it is the slope of the secant line on the displacement-time graph between the two points.",
          diagram: null
        },
        {
          qid: "C_KN_54",
          q: "How would you calculate average speed between times $a$ and $b$? Why is this different?",
          answer: "Average speed $= \\frac{\\text{total distance}}{b - a} = \\frac{\\int_a^b |v(t)| \\, dt}{b - a}$.\nThis requires splitting the integral at points where $v(t) = 0$ and taking absolute values.\nIt differs because distance $\\geq$ displacement — if the particle changes direction, the distance is greater, making average speed $\\geq$ average velocity.\nThey are only equal when the particle moves in one direction the entire time.",
          diagram: null
        }
      ]
    },

    // ════════════════════════════════════════════════════════════
    // SECTION 9: Why Initial Conditions Matter in Rectilinear Motion
    // Platform section: Kinematics: Integration
    // ════════════════════════════════════════════════════════════
    {
      section: "Why Initial Conditions Matter in Rectilinear Motion",
      subtopic: "Kinematics: Integration",
      swap_after: false,
      questions: [
        {
          qid: "C_KN_55",
          q: "Two particles have the same velocity $v(t) = 3t^2 - 2t$.\nOne starts at $x = 0$, the other at $x = 5$. How does their motion differ?",
          answer: "Both particles have identical velocity at every moment — they speed up, slow down, and change direction at exactly the same times.\nThe only difference is position: the second particle is always 5 units ahead.\nTheir displacement functions are $x_1(t) = t^3 - t^2$ and $x_2(t) = t^3 - t^2 + 5$.\nIn this case $+C$ from integration represents this positional offset.",
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
      filename: "C_KN_36_velocity_signed_total_area.png",
      description: "A velocity-time graph showing v(t) as a smooth curve that starts positive, dips below the t-axis, then returns positive. The region from t=a to where v(t) crosses zero is shaded lightly (positive area = forward displacement). The region below the t-axis is shaded with crosshatch (negative area = backward displacement). Below the graph: two annotations — 'Signed area = change in displacement' and 'Total area (all positive) = distance travelled'. Points a and b marked on t-axis. The curve label v(t) on the right.",
      type: "function_graph",
      forQuestion: "C_KN_36"
    }
  ]
};
