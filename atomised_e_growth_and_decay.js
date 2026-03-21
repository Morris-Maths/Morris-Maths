// ======================================================================
// ATOMISED PRACTICE — ATOMISED_E_GROWTH_AND_DECAY
// Topic: Modelling Exponential Growth and Decay
// 12 PTs, 151 questions (E:36 M:59 H:56)
// Reorganised from source files — richest version kept for each PT
// Unquoted keys for WSH compatibility
// ======================================================================

var ATOMISED_E_GROWTH_AND_DECAY = {
  questions: [
    {
          pt_id: "FD_NEW_04",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Using P(t2) = P(t1)e^(k(t2-t1)) to find values starting from non-zero time",
          testing: "Recognising dP/dt = kP and applying the shifted-time exponential formula",
          reason_bank: ["wrong_formula", "substitution_error", "sign_error", "log_error", "interpretation_mixup", "not_sure"],
          easy: [
            {
              qid: "FD_NEW_04_e01",
              q: "A population grows at a continuous rate of 5% per year. If there are 2000 at $t = 3$ years, find the population at $t = 7$.",
              a: "$P(7) = P(3) \\times e^{0.05(7-3)} = 2000e^{0.2} \\approx 2443$"
            },
            {
              qid: "FD_NEW_04_e02",
              q: "A substance decays with $k = -0.1$. If 500g remain at $t = 2$ hours, find the mass at $t = 10$ hours.",
              a: "$M(10) = 500 \\times e^{-0.1(10-2)} = 500e^{-0.8} \\approx 225$ g"
            },
            {
              qid: "FD_NEW_04_e03",
              q: "A streaming service has 12000 subscribers at $t = 3$ months with instantaneous growth rate 6% per month. Estimate subscribers at $t = 9$ months.",
              a: "$N(9) = 12000 \\times e^{0.06(9-3)} = 12000e^{0.36} \\approx 17\\,200$ subscribers"
            }
          ],
          medium: [
            {
              qid: "FD_NEW_04_m01",
              q: "If $\\frac{dP}{dt} = -0.08P$ and $P = 50\\,000$ when $t = 5$, find $P$ at $t = 20$.",
              a: "$P(20) = 50000 \\times e^{-0.08(20-5)} = 50000 \\times e^{-1.2} \\approx 15\\,060$"
            },
            {
              qid: "FD_NEW_04_m02",
              q: "The concentration of a drug is $C = 4e^{-0.05t}$ mg/L ($t$ hours after dose at 9am). Crisis occurs if $C < 2.5$ mg/L. What is the latest time another dose can be given?",
              a: "$2.5 = 4e^{-0.05t}$. $e^{-0.05t} = 0.625$. $t = \\frac{-\\ln(0.625)}{0.05} \\approx 9.4$ hours.\nLatest time: approximately 6:24 pm"
            },
            {
              qid: "FD_NEW_04_m03",
              q: "A radioactive substance has $\\frac{dA}{dt} = 0.3A$ and $A = 80$ when $t = 0$. Find $A$ at $t = 4$.",
              a: "Since $\\frac{dA}{dt} = 0.3A$, $k = 0.3$ and $A_0 = 80$.\n$A(t) = 80e^{0.3t}$. $A(4) = 80e^{1.2} \\approx 265.6$"
            },
            {
              qid: "FD_NEW_04_m04",
              q: "The function $A = 8e^{0.4t+3}$ models a quantity. What is the continuous growth rate and what is $A_0$?",
              a: "Separate: $A = 8e^3 \\times e^{0.4t}$. So $A_0 = 8e^3 \\approx 160.7$ and $k = 0.4$ (40% growth rate).\nThe $+3$ is absorbed into the initial value — it does not change $k$."
            }
          ],
          hard: [
            {
              qid: "FD_NEW_04_h01",
              q: "Fermium-257 decays with half-life 100.5 days. (a) Find $k$ to 3 s.f. (b) How many days for 100g to decay below 5g? (c) Find the rate of change on the day from (b).",
              a: "(a) $k = \\frac{\\ln(0.5)}{100.5} = -0.00690$.\n(b) $5 = 100e^{-0.00690t}$. $t = \\frac{\\ln(0.05)}{-0.00690} \\approx 434$ days.\n(c) $\\frac{dP}{dt} = kP = -0.00690 \\times 5 = -0.0345$ g/day"
            }
          ]
        }
,

    {
          pt_id: "FD_017",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Determining decay constant k from given half-life using logarithms",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_017_e01",
              q: "A substance decays according to $N(t) = N_0 e^{kt}$. If the half-life is $10$ years, find $k$.",
              a: "$\\frac{N_0}{2} = N_0 e^{10k} \\Rightarrow 10k = \\ln\\left(\\frac{1}{2}\\right) \\Rightarrow k = \\frac{-\\ln 2}{10} \\approx -0.0693$"
            },
            {
              qid: "FD_017_e02",
              q: "A radioactive element has a half-life of $5$ hours. If $N(t) = N_0 e^{kt}$, find $k$.",
              a: "$\\frac{N_0}{2} = N_0 e^{5k} \\Rightarrow k = \\frac{-\\ln 2}{5} \\approx -0.1386$"
            },
            {
              qid: "FD_017_e03",
              q: "A substance decays with half-life $20$ minutes. Given $N(t) = N_0 e^{kt}$, find $k$.",
              a: "$\\frac{N_0}{2} = N_0 e^{20k} \\Rightarrow k = \\frac{-\\ln 2}{20} \\approx -0.0347$"
            }
          ],
          medium: [
            {
              qid: "FD_017_m01",
              q: "A radioactive isotope has a half-life of 12 days. If it decays according to $N(t) = N_0 e^{kt}$, find $k$.",
              a: "$\\frac{N_0}{2} = N_0 e^{12k} \\Rightarrow k = \\frac{-\\ln 2}{12} \\approx -0.0578$ per day"
            },
            {
              qid: "FD_017_m02",
              q: "Radium-226 has a half-life of $1600$ years. Given $N(t) = N_0 e^{kt}$, find $k$ correct to 6 decimal places.",
              a: "$\\frac{N_0}{2} = N_0 e^{1600k} \\Rightarrow k = \\frac{-\\ln 2}{1600} \\approx -0.000433$"
            },
            {
              qid: "FD_017_m03",
              q: "Iodine-131 has a half-life of $8$ days. If $N(t) = N_0 e^{kt}$, determine the exact value of $k$.",
              a: "$\\frac{N_0}{2} = N_0 e^{8k} \\Rightarrow k = \\frac{-\\ln 2}{8}$"
            },
            {
              qid: "FD_017_m04",
              q: "Carbon-14 has a half-life of $5730$ years. If $N(t) = N_0 e^{kt}$, find $k$ to 6 significant figures.",
              a: "$k = \\frac{-\\ln 2}{5730} \\approx -0.000121$ per year"
            },
            {
              qid: "FD_017_m05",
              q: "A drug has a half-life of $2.5$ hours in the body. Using $C(t) = C_0 e^{kt}$ where $t$ is in minutes, find $k$.",
              a: "$2.5$ hours $= 150$ minutes. $\\frac{C_0}{2} = C_0 e^{150k} \\Rightarrow k = \\frac{-\\ln 2}{150} \\approx -0.00462$ per minute"
            }
          ],
          hard: [
            {
              qid: "FD_017_h01",
              q: "A radioactive sample decays to $25\\%$ of its original mass in $30$ days. Find the decay constant $k$ and the half-life.",
              a: "$0.25 N_0 = N_0 e^{30k} \\Rightarrow 30k = \\ln(0.25) = -2\\ln 2 \\Rightarrow k = \\frac{-2\\ln 2}{30} = \\frac{-\\ln 2}{15} \\approx -0.0462$. Half-life $= \\frac{\\ln 2}{0.0462} = 15$ days."
            },
            {
              qid: "FD_017_h02",
              q: "Only $10\\%$ of a substance remains after $100$ years. Find $k$ and the half-life.",
              a: "$0.1 = e^{100k} \\Rightarrow k = \\frac{\\ln(0.1)}{100} = \\frac{-\\ln 10}{100} \\approx -0.02303$. Half-life $= \\frac{\\ln 2}{0.02303} \\approx 30.1$ years."
            },
            {
              qid: "FD_017_h03",
              q: "A decaying quantity satisfies $N(2) = 800$ and $N(6) = 500$. Given $N(t) = N_0 e^{kt}$, find $k$ and hence the half-life.",
              a: "$\\frac{N(6)}{N(2)} = \\frac{500}{800} = e^{4k} \\Rightarrow k = \\frac{1}{4}\\ln\\left(\\frac{5}{8}\\right) \\approx -0.1178$. Half-life $= \\frac{\\ln 2}{0.1178} \\approx 5.88$ years."
            },
            {
              qid: "FD_017_h04",
              q: "A substance decays to $\\frac{1}{3}$ of its original amount in $15$ hours. Find $k$ and the half-life.",
              a: "$\\frac{N_0}{3} = N_0 e^{15k} \\Rightarrow k = \\frac{-\\ln 3}{15} \\approx -0.0732$. Half-life $= \\frac{\\ln 2}{0.0732} \\approx 9.46$ hours."
            },
            {
              qid: "FD_017_h05",
              q: "Given $N(t) = N_0 e^{-0.04t}$, find the half-life and the time for $90\\%$ of the substance to decay.",
              a: "Half-life: $t = \\frac{\\ln 2}{0.04} \\approx 17.33$. For $90\\%$ decay ($10\\%$ remaining): $0.1 = e^{-0.04t} \\Rightarrow t = \\frac{\\ln 10}{0.04} \\approx 57.56$."
            }
          ]
        }
,

    {
          pt_id: "FD_018",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Determining half-lives or other percentage of initial values",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_018_e01",
              q: "A substance decays according to $N(t) = N_0 e^{-0.1t}$. Find the half-life.",
              a: "$\\frac{N_0}{2} = N_0 e^{-0.1t} \\Rightarrow t = \\frac{\\ln 2}{0.1} \\approx 6.93$ units"
            },
            {
              qid: "FD_018_e02",
              q: "Given $N(t) = 100 e^{-0.05t}$, find the half-life.",
              a: "$50 = 100 e^{-0.05t} \\Rightarrow -0.05t = \\ln(0.5) \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$ units"
            },
            {
              qid: "FD_018_e03",
              q: "A population decreases according to $P(t) = P_0 e^{-0.2t}$. Find the half-life.",
              a: "$\\frac{P_0}{2} = P_0 e^{-0.2t} \\Rightarrow t = \\frac{\\ln 2}{0.2} \\approx 3.47$ units"
            }
          ],
          medium: [
            {
              qid: "FD_018_m01",
              q: "A radioactive substance decays according to $N(t) = N_0 e^{-0.02t}$. Find the half-life.",
              a: "$\\frac{N_0}{2} = N_0 e^{-0.02t} \\Rightarrow -0.02t = \\ln(0.5) \\Rightarrow t = \\frac{\\ln 2}{0.02} = 34.66$ units"
            },
            {
              qid: "FD_018_m02",
              q: "A substance decays as $N(t) = N_0 e^{-0.03t}$. Find the time for $75\\%$ of the original to remain.",
              a: "$0.75 N_0 = N_0 e^{-0.03t} \\Rightarrow -0.03t = \\ln(0.75) \\Rightarrow t = \\frac{-\\ln(0.75)}{0.03} \\approx 9.59$ units"
            },
            {
              qid: "FD_018_m03",
              q: "A population grows according to $P(t) = P_0 e^{0.06t}$. Find the doubling time.",
              a: "$2P_0 = P_0 e^{0.06t} \\Rightarrow 0.06t = \\ln 2 \\Rightarrow t = \\frac{\\ln 2}{0.06} \\approx 11.55$ units"
            },
            {
              qid: "FD_018_m04",
              q: "Given $M(t) = M_0 e^{-0.04t}$, find the time for only $30\\%$ of the substance to remain.",
              a: "$0.3 = e^{-0.04t} \\Rightarrow -0.04t = \\ln(0.3) \\Rightarrow t = \\frac{-\\ln(0.3)}{0.04} \\approx 30.10$ units"
            },
            {
              qid: "FD_018_m05",
              q: "A colony grows as $N(t) = N_0 e^{0.08t}$. Find the time for the population to triple.",
              a: "$3N_0 = N_0 e^{0.08t} \\Rightarrow 0.08t = \\ln 3 \\Rightarrow t = \\frac{\\ln 3}{0.08} \\approx 13.73$ units"
            }
          ],
          hard: [
            {
              qid: "FD_018_h01",
              q: "A substance decays as $N(t) = N_0 e^{-0.01t}$. How long until only $1\\%$ remains?",
              a: "$0.01 N_0 = N_0 e^{-0.01t} \\Rightarrow -0.01t = \\ln(0.01) \\Rightarrow t = \\frac{\\ln 100}{0.01} = \\frac{2\\ln 10}{0.01} \\approx 460.5$ units"
            },
            {
              qid: "FD_018_h02",
              q: "A substance has a half-life of $15$ years. How long until $80\\%$ has decayed?",
              a: "$k = \\frac{-\\ln 2}{15}$. Solve $0.2 = e^{kt}$: $t = \\frac{\\ln(0.2)}{k} = \\frac{15 \\ln 5}{\\ln 2} \\approx 34.83$ years."
            },
            {
              qid: "FD_018_h03",
              q: "A population grows as $P(t) = P_0 e^{0.05t}$. Find the time for the population to reach (i) $5$ times and (ii) $10$ times its initial size.",
              a: "(i) $5 = e^{0.05t} \\Rightarrow t = \\frac{\\ln 5}{0.05} \\approx 32.19$. (ii) $10 = e^{0.05t} \\Rightarrow t = \\frac{\\ln 10}{0.05} \\approx 46.05$ units."
            },
            {
              qid: "FD_018_h04",
              q: "Substance A decays as $N_A(t) = N_0 e^{-0.02t}$ and substance B has a half-life of $40$ years. Which decays faster? Justify your answer.",
              a: "Substance A: half-life $= \\frac{\\ln 2}{0.02} \\approx 34.66$ years. Substance B: half-life $= 40$ years. A has a shorter half-life, so A decays faster."
            },
            {
              qid: "FD_018_h05",
              q: "A substance has half-life $T$. Show that after $3T$ time units, $\\frac{1}{8}$ of the original amount remains. What percentage has decayed?",
              a: "After $3T$: $N = N_0 e^{k \\cdot 3T}$. Since $e^{kT} = \\frac{1}{2}$, we get $N = N_0 \\left(\\frac{1}{2}\\right)^3 = \\frac{N_0}{8}$. So $\\frac{7}{8} = 87.5\\%$ has decayed."
            }
          ]
        }
,

    {
          pt_id: "FD_019",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Determining initial value of exponential model",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_019_e01",
              q: "After $3$ years at a continuous growth rate of $5\\%$ p.a., an investment is worth $\\$2000$. Find the initial investment.",
              a: "$2000 = A_0 e^{0.05 \\times 3} \\Rightarrow A_0 = 2000 e^{-0.15} \\approx \\$1722$"
            },
            {
              qid: "FD_019_e02",
              q: "A radioactive sample has $500$ grams remaining after $4$ years. If $k = -0.1$, find the original mass.",
              a: "$500 = N_0 e^{-0.1 \\times 4} \\Rightarrow N_0 = 500 e^{0.4} \\approx 746$ grams"
            },
            {
              qid: "FD_019_e03",
              q: "A bacteria population reaches $1500$ after $2$ hours of continuous growth at rate $k = 0.1$. Find the initial population.",
              a: "$1500 = P_0 e^{0.1 \\times 2} \\Rightarrow P_0 = 1500 e^{-0.2} \\approx 1229$"
            }
          ],
          medium: [
            {
              qid: "FD_019_m01",
              q: "After 6 years, an investment is worth $\\$15,000$. If it grew at a continuous rate of 4% p.a., find the initial investment.",
              a: "$15000 = A_0 e^{0.04 \\times 6} \\Rightarrow A_0 = 15000 e^{-0.24} \\approx \\$11,799$"
            },
            {
              qid: "FD_019_m02",
              q: "After $8$ hours, $120$ mg of a drug remains in the bloodstream. Given $M(t) = M_0 e^{-0.03t}$, find $M_0$.",
              a: "$120 = M_0 e^{-0.03 \\times 8} \\Rightarrow M_0 = 120 e^{0.24} \\approx 152.5$ mg"
            },
            {
              qid: "FD_019_m03",
              q: "A culture grows to $800$ bacteria after $5$ hours with $k = 0.07$. Find the initial count.",
              a: "$800 = P_0 e^{0.07 \\times 5} \\Rightarrow P_0 = 800 e^{-0.35} \\approx 564$"
            },
            {
              qid: "FD_019_m04",
              q: "An investment is worth $\\$25{,}000$ after $12$ years at a continuous rate of $4.5\\%$ p.a. Find the initial investment.",
              a: "$25000 = A_0 e^{0.045 \\times 12} \\Rightarrow A_0 = 25000 e^{-0.54} \\approx \\$14{,}553$"
            },
            {
              qid: "FD_019_m05",
              q: "A sample has $200$ mg remaining after $15$ years with $k = -0.06$. Find the original mass.",
              a: "$200 = N_0 e^{-0.06 \\times 15} \\Rightarrow N_0 = 200 e^{0.9} \\approx 492$ mg"
            }
          ],
          hard: [
            {
              qid: "FD_019_h01",
              q: "A substance has a half-life of $10$ years. After $25$ years, $150$ g remains. Find the original mass.",
              a: "$k = \\frac{-\\ln 2}{10}$. $150 = N_0 e^{-\\frac{\\ln 2}{10} \\times 25} = N_0 \\cdot 2^{-2.5}$. $N_0 = 150 \\times 2^{2.5} = 150 \\times 4\\sqrt{2} \\approx 849$ g."
            },
            {
              qid: "FD_019_h02",
              q: "A bone sample contains $73\\%$ of the original Carbon-14. Given the half-life of C-14 is $5730$ years, estimate the age of the bone.",
              a: "$0.73 = e^{kt}$ where $k = \\frac{-\\ln 2}{5730}$. $t = \\frac{\\ln(0.73)}{k} = \\frac{-5730 \\ln(0.73)}{\\ln 2} \\approx 2602$ years."
            },
            {
              qid: "FD_019_h03",
              q: "A quantity satisfies $N(3) = 600$ and $N(7) = 350$. Given $N(t) = N_0 e^{kt}$, find $N_0$.",
              a: "$\\frac{350}{600} = e^{4k} \\Rightarrow k = \\frac{1}{4}\\ln\\left(\\frac{7}{12}\\right) \\approx -0.1335$. $N_0 = 600 e^{-3k} = 600 e^{0.4006} \\approx 896$."
            },
            {
              qid: "FD_019_h04",
              q: "A cooling object has temperature $T(t) = A + Be^{-0.1t}$. If $T(0) = 90°$C and the room temperature is $20°$C, find $A$, $B$, and $T(5)$.",
              a: "As $t \\to \\infty$, $T \\to A = 20$. At $t=0$: $20 + B = 90 \\Rightarrow B = 70$. $T(5) = 20 + 70e^{-0.5} \\approx 62.4°$C."
            },
            {
              qid: "FD_019_h05",
              q: "An investment earns $3.5\\%$ p.a. continuous interest. What minimum amount must be invested to have $\\$50{,}000$ after $20$ years?",
              a: "$50000 = A_0 e^{0.035 \\times 20} = A_0 e^{0.7} \\Rightarrow A_0 = 50000 e^{-0.7} \\approx \\$24{,}833$"
            }
          ]
        }
,

    {
          pt_id: "FD_020",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Determining parameters of exponential model from two data points",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_020_e01",
              q: "A population follows $P(t) = Ae^{kt}$ with $P(0) = 100$ and $P(3) = 200$. Find $A$ and $k$.",
              a: "$A = P(0) = 100$. $200 = 100e^{3k} \\Rightarrow e^{3k} = 2 \\Rightarrow k = \\frac{\\ln 2}{3} \\approx 0.2310$"
            },
            {
              qid: "FD_020_e02",
              q: "A substance follows $N(t) = Ae^{kt}$ with $N(0) = 500$ and $N(4) = 250$. Find $A$ and $k$.",
              a: "$A = 500$. $250 = 500e^{4k} \\Rightarrow e^{4k} = 0.5 \\Rightarrow k = \\frac{-\\ln 2}{4} \\approx -0.1733$"
            },
            {
              qid: "FD_020_e03",
              q: "Bacteria grow as $P(t) = Ae^{kt}$ with $P(0) = 50$ and $P(10) = 150$. Find $A$ and $k$.",
              a: "$A = 50$. $150 = 50e^{10k} \\Rightarrow e^{10k} = 3 \\Rightarrow k = \\frac{\\ln 3}{10} \\approx 0.1099$"
            }
          ],
          medium: [
            {
              qid: "FD_020_m01",
              q: "A population $P(t) = Ae^{kt}$ satisfies $P(0) = 200$ and $P(5) = 350$. Find $A$ and $k$.",
              a: "$A = 200$. $350 = 200e^{5k} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{350}{200}\\right) = \\frac{\\ln(1.75)}{5} \\approx 0.1119$"
            },
            {
              qid: "FD_020_m02",
              q: "A quantity follows $N(t) = Ae^{kt}$. Given $N(2) = 400$ and $N(8) = 100$, find $A$ and $k$.",
              a: "$\\frac{100}{400} = e^{6k} \\Rightarrow k = \\frac{\\ln(0.25)}{6} = \\frac{-\\ln 4}{6} \\approx -0.2310$. $A = 400 e^{-2k} = 400 e^{\\frac{\\ln 4}{3}} \\approx 635$."
            },
            {
              qid: "FD_020_m03",
              q: "A colony satisfies $P(1) = 120$ and $P(4) = 300$ with $P(t) = Ae^{kt}$. Find $A$ and $k$.",
              a: "$\\frac{300}{120} = e^{3k} \\Rightarrow k = \\frac{\\ln(2.5)}{3} \\approx 0.3054$. $A = 120 e^{-k} \\approx 88.4$."
            },
            {
              qid: "FD_020_m04",
              q: "The mass of a substance follows $M(t) = Ae^{kt}$. Given $M(0) = 80$ and $M(5) = 50$, find $A$ and $k$.",
              a: "$A = 80$. $50 = 80e^{5k} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{50}{80}\\right) = \\frac{1}{5}\\ln\\left(\\frac{5}{8}\\right) \\approx -0.0941$"
            },
            {
              qid: "FD_020_m05",
              q: "A population follows $P(t) = Ae^{kt}$ with $P(3) = 1000$ and $P(9) = 4000$. Find $k$ and $A$.",
              a: "$\\frac{4000}{1000} = e^{6k} \\Rightarrow k = \\frac{\\ln 4}{6} \\approx 0.2310$. $A = 1000 e^{-3k} = 1000 e^{-\\frac{\\ln 4}{2}} = \\frac{1000}{2} = 500$."
            }
          ],
          hard: [
            {
              qid: "FD_020_h01",
              q: "A population follows $P(t) = Ae^{kt}$. Given $P(4) = 300$ and $P(8) = 1200$, find $A$, $k$, and verify by finding $P(0)$.",
              a: "$\\frac{1200}{300} = e^{4k} \\Rightarrow k = \\frac{\\ln 4}{4} \\approx 0.3466$. $A = 300 e^{-4k} = 300 \\cdot \\frac{1}{4} = 75$. Check: $P(0) = 75$ ✓"
            },
            {
              qid: "FD_020_h02",
              q: "A substance follows $N(t) = Ae^{kt}$ with $N(3) = 450$ and $N(10) = 180$. Find $A$ and $k$.",
              a: "$\\frac{180}{450} = e^{7k} \\Rightarrow k = \\frac{1}{7}\\ln\\left(\\frac{2}{5}\\right) \\approx -0.1309$. $A = 450 e^{-3k} \\approx 666$."
            },
            {
              qid: "FD_020_h03",
              q: "Given $P(2) = 500$ and $P(6) = 2000$ with $P(t) = Ae^{kt}$, find $A$ and $k$. Hence predict $P(10)$.",
              a: "$\\frac{2000}{500} = e^{4k} \\Rightarrow k = \\frac{\\ln 4}{4} \\approx 0.3466$. $A = 500 e^{-2k} = 250$. $P(10) = 250 e^{10 \\times 0.3466} = 250 \\times 32 = 8000$."
            },
            {
              qid: "FD_020_h04",
              q: "A cooling object follows $T(t) = C + Ae^{kt}$. Given $T(0) = 80$, $T(5) = 45$, and the room is $20°$C, find $C$, $A$, $k$, and $T(10)$.",
              a: "$C = 20$. $T(0) = 20 + A = 80 \\Rightarrow A = 60$. $45 = 20 + 60e^{5k} \\Rightarrow e^{5k} = \\frac{25}{60} \\Rightarrow k = \\frac{1}{5}\\ln\\left(\\frac{5}{12}\\right) \\approx -0.1753$. $T(10) = 20 + 60e^{10k} \\approx 30.4°$C."
            },
            {
              qid: "FD_020_h05",
              q: "A population follows $P(t) = Ae^{kt}$ with $P(2) = 300$ and $P(5) = 600$. Find $k$ and the time when $P = 5000$.",
              a: "$k = \\frac{\\ln 2}{3} \\approx 0.2310$. $A = 300 e^{-\\frac{2\\ln 2}{3}} = 300 \\cdot 2^{-2/3} \\approx 189.0$. $5000 = 189.0 \\cdot e^{0.2310 t} \\Rightarrow t = \\frac{\\ln(26.46)}{0.2310} \\approx 14.2$ units."
            }
          ]
        }
,

    {
          pt_id: "FD_021",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Determining rate of growth or decay by using derivative of e function",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_021_e01",
              q: "Given $P(t) = 200e^{0.05t}$, find the rate of change at $t = 0$.",
              a: "$P'(t) = 10e^{0.05t}$. $P'(0) = 10$ per unit time."
            },
            {
              qid: "FD_021_e02",
              q: "Given $N(t) = 500e^{-0.1t}$, find the rate of decay at $t = 0$.",
              a: "$N'(t) = -50e^{-0.1t}$. $N'(0) = -50$ per unit time."
            },
            {
              qid: "FD_021_e03",
              q: "The mass of a substance is $M(t) = 100e^{-0.2t}$ grams. Find the rate of decay at $t = 3$.",
              a: "$M'(t) = -20e^{-0.2t}$. $M'(3) = -20e^{-0.6} \\approx -10.98$ grams per unit time."
            }
          ],
          medium: [
            {
              qid: "FD_021_m01",
              q: "The temperature of a cooling object is $T(t) = 25 + 75e^{-0.1t}$ °C. Find the rate of cooling at $t = 5$ minutes.",
              a: "$T'(t) = -7.5e^{-0.1t}$. $T'(5) = -7.5e^{-0.5} \\approx -4.55$ °C/min"
            },
            {
              qid: "FD_021_m02",
              q: "A population is modelled by $P(t) = 1000e^{0.03t}$. Find the rate of growth when $t = 10$.",
              a: "$P'(t) = 30e^{0.03t}$. $P'(10) = 30e^{0.3} \\approx 40.50$ per year."
            },
            {
              qid: "FD_021_m03",
              q: "The value of a car is $V(t) = 5000e^{-0.08t}$ dollars. Find the rate of depreciation at $t = 6$ years.",
              a: "$V'(t) = -400e^{-0.08t}$. $V'(6) = -400e^{-0.48} \\approx -\\$247.24$ per year."
            },
            {
              qid: "FD_021_m04",
              q: "Given $N(t) = 800e^{-0.04t}$, find the rate of decay at $t = 0$ and $t = 10$. Is the rate of decay increasing or decreasing?",
              a: "$N'(t) = -32e^{-0.04t}$. $N'(0) = -32$. $N'(10) = -32e^{-0.4} \\approx -21.45$. The magnitude of decay decreases (rate slows down)."
            },
            {
              qid: "FD_021_m05",
              q: "A cooling object has $T(t) = 20 + 60e^{-0.15t}$. Find the time when the rate of cooling is $-3°$C/min.",
              a: "$T'(t) = -9e^{-0.15t} = -3 \\Rightarrow e^{-0.15t} = \\frac{1}{3} \\Rightarrow t = \\frac{\\ln 3}{0.15} \\approx 7.32$ min."
            }
          ],
          hard: [
            {
              qid: "FD_021_h01",
              q: "Given $N(t) = 400e^{-0.05t}$, show that $N'(t) = -0.05 N(t)$. Find the time when the rate of decay is half the initial rate.",
              a: "$N'(t) = -20e^{-0.05t} = -0.05 \\times 400e^{-0.05t} = -0.05 N(t)$ ✓. Initial rate $= -20$. Half $= -10$: $-20e^{-0.05t} = -10 \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$."
            },
            {
              qid: "FD_021_h02",
              q: "Given $P(t) = 600e^{0.04t}$, find (i) the average rate of change over $[0, 10]$ and (ii) the instantaneous rate at $t = 5$.",
              a: "(i) $\\frac{P(10) - P(0)}{10} = \\frac{600e^{0.4} - 600}{10} = 60(e^{0.4} - 1) \\approx 29.54$. (ii) $P'(5) = 24e^{0.2} \\approx 29.30$."
            },
            {
              qid: "FD_021_h03",
              q: "The mass of a substance is $M(t) = 250e^{-0.06t}$ grams. Find $t$ when the rate of decay is $5$ grams per year.",
              a: "$M'(t) = -15e^{-0.06t}$. Set $|M'(t)| = 5$: $15e^{-0.06t} = 5 \\Rightarrow e^{-0.06t} = \\frac{1}{3} \\Rightarrow t = \\frac{\\ln 3}{0.06} \\approx 18.31$ years."
            },
            {
              qid: "FD_021_h04",
              q: "Temperature follows $T(t) = 15 + 40e^{-0.1t} + 30e^{-0.3t}$. Find the rate of cooling at $t = 2$.",
              a: "$T'(t) = -4e^{-0.1t} - 9e^{-0.3t}$. $T'(2) = -4e^{-0.2} - 9e^{-0.6} \\approx -3.276 - 4.940 = -8.22°$C/min."
            },
            {
              qid: "FD_021_h05",
              q: "A cooling body has $T(t) = 22 + 58e^{-0.12t}$. Show that $T'(t) = -0.12(T - 22)$ and find $t$ when $T'(t) = -2$.",
              a: "$T'(t) = -6.96e^{-0.12t} = -0.12 \\times 58e^{-0.12t} = -0.12(T - 22)$ ✓. $-6.96e^{-0.12t} = -2 \\Rightarrow e^{-0.12t} = \\frac{2}{6.96} \\Rightarrow t = \\frac{-\\ln(2/6.96)}{0.12} \\approx 10.4$ min."
            }
          ]
        }
,

    {
          pt_id: "FD_022",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Determining the time when the value of the exponential model equals a given value",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_022_e01",
              q: "Find $t$ when $N(t) = 500e^{-0.1t}$ equals $250$.",
              a: "$250 = 500e^{-0.1t} \\Rightarrow e^{-0.1t} = 0.5 \\Rightarrow t = \\frac{\\ln 2}{0.1} \\approx 6.93$"
            },
            {
              qid: "FD_022_e02",
              q: "Find $t$ when $P(t) = 200e^{0.05t}$ reaches $400$.",
              a: "$400 = 200e^{0.05t} \\Rightarrow e^{0.05t} = 2 \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$"
            },
            {
              qid: "FD_022_e03",
              q: "A sample has mass $M(t) = 1000e^{-0.2t}$ grams. Find when $M = 500$ g.",
              a: "$500 = 1000e^{-0.2t} \\Rightarrow e^{-0.2t} = 0.5 \\Rightarrow t = \\frac{\\ln 2}{0.2} = 3.47$ units"
            }
          ],
          medium: [
            {
              qid: "FD_022_m01",
              q: "A substance decays according to $M(t) = 80e^{-0.05t}$ grams. Find when only 20 g remains.",
              a: "$20 = 80e^{-0.05t} \\Rightarrow e^{-0.05t} = 0.25 \\Rightarrow -0.05t = \\ln(0.25) \\Rightarrow t = \\frac{-\\ln(0.25)}{0.05} = \\frac{\\ln 4}{0.05} \\approx 27.7$ years"
            },
            {
              qid: "FD_022_m02",
              q: "An investment grows as $A(t) = 150e^{0.04t}$. Find when it reaches $\\$600$.",
              a: "$600 = 150e^{0.04t} \\Rightarrow e^{0.04t} = 4 \\Rightarrow t = \\frac{\\ln 4}{0.04} \\approx 34.66$ years"
            },
            {
              qid: "FD_022_m03",
              q: "Given $N(t) = 300e^{-0.03t}$, find when $N = 100$.",
              a: "$100 = 300e^{-0.03t} \\Rightarrow e^{-0.03t} = \\frac{1}{3} \\Rightarrow t = \\frac{\\ln 3}{0.03} \\approx 36.62$ units"
            },
            {
              qid: "FD_022_m04",
              q: "A drug concentration is $C(t) = 50e^{-0.12t}$ mg/L. Find when $C$ drops below $10$ mg/L.",
              a: "$10 = 50e^{-0.12t} \\Rightarrow e^{-0.12t} = 0.2 \\Rightarrow t = \\frac{\\ln 5}{0.12} \\approx 13.41$ hours"
            },
            {
              qid: "FD_022_m05",
              q: "A population follows $P(t) = 2000e^{0.06t}$. How long until it reaches $8000$?",
              a: "$8000 = 2000e^{0.06t} \\Rightarrow e^{0.06t} = 4 \\Rightarrow t = \\frac{\\ln 4}{0.06} \\approx 23.10$ units"
            }
          ],
          hard: [
            {
              qid: "FD_022_h01",
              q: "A cooling body has $T(t) = 20 + 60e^{-0.08t}$. Find when $T = 35°$C.",
              a: "$35 = 20 + 60e^{-0.08t} \\Rightarrow 60e^{-0.08t} = 15 \\Rightarrow e^{-0.08t} = 0.25 \\Rightarrow t = \\frac{\\ln 4}{0.08} \\approx 17.33$ min."
            },
            {
              qid: "FD_022_h02",
              q: "Drug absorption follows $C(t) = 100(1 - e^{-0.05t})$ mg/L. Find when $C = 80$.",
              a: "$80 = 100(1 - e^{-0.05t}) \\Rightarrow e^{-0.05t} = 0.2 \\Rightarrow t = \\frac{\\ln 5}{0.05} \\approx 32.19$ min."
            },
            {
              qid: "FD_022_h03",
              q: "Given $M(t) = 400e^{-0.04t}$, find the time it takes for $M$ to decrease from $300$ to $200$.",
              a: "$M = 300$: $t_1 = \\frac{-\\ln(0.75)}{0.04} \\approx 7.19$. $M = 200$: $t_2 = \\frac{\\ln 2}{0.04} \\approx 17.33$. Time $= t_2 - t_1 \\approx 10.14$ units."
            },
            {
              qid: "FD_022_h04",
              q: "Two populations grow as $P_1(t) = 500e^{0.03t}$ and $P_2(t) = 800e^{0.01t}$. Find when $P_1 = P_2$.",
              a: "$500e^{0.03t} = 800e^{0.01t} \\Rightarrow e^{0.02t} = \\frac{8}{5} \\Rightarrow t = \\frac{\\ln(1.6)}{0.02} \\approx 23.5$ units."
            },
            {
              qid: "FD_022_h05",
              q: "Given $N(t) = 1200e^{-0.06t}$, find the value of $N$ when the rate of decay is $36$ per year.",
              a: "$N'(t) = -72e^{-0.06t}$. Set $|N'(t)| = 36$: $72e^{-0.06t} = 36 \\Rightarrow e^{-0.06t} = 0.5 \\Rightarrow t = \\frac{\\ln 2}{0.06}$. $N = 1200 \\times 0.5 = 600$."
            }
          ]
        }
,

    {
          pt_id: "FD_023",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Determining the value of the exponential model as t becomes large",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_023_e01",
              q: "Find the value of $N(t) = 200e^{-0.1t}$ as $t \\to \\infty$.",
              a: "As $t \\to \\infty$, $e^{-0.1t} \\to 0$, so $N \\to 0$."
            },
            {
              qid: "FD_023_e02",
              q: "Find the limiting value of $T(t) = 15 + 85e^{-0.2t}$ as $t \\to \\infty$.",
              a: "As $t \\to \\infty$, $e^{-0.2t} \\to 0$, so $T \\to 15$."
            },
            {
              qid: "FD_023_e03",
              q: "Find the limiting value of $C(t) = 100(1 - e^{-0.5t})$ as $t \\to \\infty$.",
              a: "As $t \\to \\infty$, $e^{-0.5t} \\to 0$, so $C \\to 100$."
            }
          ],
          medium: [
            {
              qid: "FD_023_m01",
              q: "A drug concentration is modelled by $C(t) = 50(1 - e^{-0.3t})$ mg/L. What is the limiting concentration?",
              a: "As $t \\to \\infty$, $e^{-0.3t} \\to 0$, so $C \\to 50$ mg/L."
            },
            {
              qid: "FD_023_m02",
              q: "A cooling object has $T(t) = 22 + 48e^{-0.15t}$ °C. State the limiting temperature and explain its significance.",
              a: "As $t \\to \\infty$, $T \\to 22°$C. This represents the room temperature (ambient temperature)."
            },
            {
              qid: "FD_023_m03",
              q: "A learning curve is modelled by $L(t) = 80 - 80e^{-0.1t}$ (score out of 80). What is the maximum possible score according to this model?",
              a: "As $t \\to \\infty$, $e^{-0.1t} \\to 0$, so $L \\to 80$. The maximum possible score is $80$."
            },
            {
              qid: "FD_023_m04",
              q: "A tank fills according to $V(t) = 500(1 - e^{-0.04t})$ litres. Find the limiting volume and the percentage filled at $t = 20$.",
              a: "Limiting volume $= 500$ L. $V(20) = 500(1 - e^{-0.8}) \\approx 275.3$ L. Percentage $= \\frac{275.3}{500} \\times 100 \\approx 55.1\\%$."
            },
            {
              qid: "FD_023_m05",
              q: "Given $C(t) = 200(1 - e^{-0.2t})$, find what fraction of the limiting value has been reached at $t = 10$.",
              a: "Limiting value $= 200$. $C(10) = 200(1 - e^{-2}) \\approx 172.9$. Fraction $= 1 - e^{-2} \\approx 0.865$ or $86.5\\%$."
            }
          ],
          hard: [
            {
              qid: "FD_023_h01",
              q: "A population follows the logistic model $P(t) = \\frac{1000}{1 + 9e^{-0.2t}}$. Find the limiting population.",
              a: "As $t \\to \\infty$, $e^{-0.2t} \\to 0$, so $P \\to \\frac{1000}{1+0} = 1000$. The carrying capacity is $1000$."
            },
            {
              qid: "FD_023_h02",
              q: "A temperature follows $T(t) = 25 + 30e^{-0.1t} + 15e^{-0.3t}$. Find $T(0)$ and the limiting temperature.",
              a: "$T(0) = 25 + 30 + 15 = 70°$C. As $t \\to \\infty$, both exponentials $\\to 0$, so $T \\to 25°$C."
            },
            {
              qid: "FD_023_h03",
              q: "A model gives $N(t) = 400(1 - 0.6e^{-0.05t})$. Find $N(0)$, the limiting value, and explain whether $N$ is increasing or decreasing.",
              a: "$N(0) = 400(1 - 0.6) = 160$. As $t \\to \\infty$, $N \\to 400$. Since $N'(t) = 12e^{-0.05t} > 0$, $N$ is always increasing."
            },
            {
              qid: "FD_023_h04",
              q: "Model A: $C_A(t) = 60(1 - e^{-0.1t})$. Model B: $C_B(t) = 80(1 - e^{-0.05t})$. Find each limiting value and which reaches $90\\%$ of its limit first.",
              a: "Limits: $C_A \\to 60$, $C_B \\to 80$. $90\\%$ of $C_A = 54$: $t_A = \\frac{\\ln 10}{0.1} \\approx 23.0$. $90\\%$ of $C_B = 72$: $t_B = \\frac{\\ln 10}{0.05} \\approx 46.1$. Model A reaches $90\\%$ first."
            },
            {
              qid: "FD_023_h05",
              q: "Given $V(t) = L(1 - e^{-kt})$ for $k > 0$ and $L > 0$, show algebraically that $V(t) < L$ for all finite $t > 0$ and $V \\to L$ as $t \\to \\infty$.",
              a: "Since $k > 0$ and $t > 0$, $e^{-kt} > 0$, so $1 - e^{-kt} < 1$, hence $V(t) = L(1 - e^{-kt}) < L$. As $t \\to \\infty$, $e^{-kt} \\to 0$, so $V \\to L(1-0) = L$."
            }
          ]
        }
,

    {
          pt_id: "FD_024",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Determining the value of the exponential model at a given time",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_024_e01",
              q: "Given $P(t) = 300e^{0.02t}$, find $P(5)$.",
              a: "$P(5) = 300e^{0.1} \\approx 331.5$"
            },
            {
              qid: "FD_024_e02",
              q: "A sample has mass $N(t) = 1000e^{-0.05t}$ grams. Find $N(10)$.",
              a: "$N(10) = 1000e^{-0.5} \\approx 606.5$ grams"
            },
            {
              qid: "FD_024_e03",
              q: "Given $M(t) = 200e^{-0.1t}$, find $M(3)$.",
              a: "$M(3) = 200e^{-0.3} \\approx 148.2$"
            }
          ],
          medium: [
            {
              qid: "FD_024_m01",
              q: "A population is modelled by $P(t) = 500e^{0.03t}$ where $t$ is in years. Find the population after 10 years.",
              a: "$P(10) = 500e^{0.3} = 500 \\times 1.3499 \\approx 675$"
            },
            {
              qid: "FD_024_m02",
              q: "A cooling body has $T(t) = 20 + 70e^{-0.1t}$ °C. Find the temperature at $t = 8$ minutes.",
              a: "$T(8) = 20 + 70e^{-0.8} \\approx 20 + 31.45 = 51.5°$C"
            },
            {
              qid: "FD_024_m03",
              q: "A drug concentration follows $C(t) = 50(1 - e^{-0.2t})$ mg/L. Find $C(5)$.",
              a: "$C(5) = 50(1 - e^{-1}) \\approx 50(1 - 0.3679) = 31.6$ mg/L"
            },
            {
              qid: "FD_024_m04",
              q: "An investment earns $4.5\\%$ p.a. continuous interest: $A(t) = 10000e^{0.045t}$. Find the value after $15$ years.",
              a: "$A(15) = 10000e^{0.675} \\approx \\$19{,}643$"
            },
            {
              qid: "FD_024_m05",
              q: "A substance decays as $M(t) = 750e^{-0.07t}$ grams. Find the mass remaining after $12$ years.",
              a: "$M(12) = 750e^{-0.84} \\approx 750 \\times 0.4317 = 323.8$ grams"
            }
          ],
          hard: [
            {
              qid: "FD_024_h01",
              q: "A cooling object has $T(t) = 25 + 55e^{-0.12t}$. Find $T(10)$ and by how many degrees the object has cooled from $t = 0$.",
              a: "$T(0) = 80$. $T(10) = 25 + 55e^{-1.2} \\approx 41.6°$C. Cooled by $80 - 41.6 = 38.4°$C."
            },
            {
              qid: "FD_024_h02",
              q: "Colony A: $P_1(t) = 500e^{0.04t}$. Colony B: $P_2(t) = 300e^{0.07t}$. Which is larger at $t = 20$?",
              a: "$P_1(20) = 500e^{0.8} \\approx 1114$. $P_2(20) = 300e^{1.4} \\approx 1216$. Colony B is larger at $t = 20$."
            },
            {
              qid: "FD_024_h03",
              q: "A population follows $P(t) = \\frac{2000}{1 + 4e^{-0.3t}}$. Find $P(0)$, $P(5)$, and $P(\\infty)$.",
              a: "$P(0) = \\frac{2000}{1+4} = 400$. $P(5) = \\frac{2000}{1+4e^{-1.5}} \\approx \\frac{2000}{1.893} \\approx 1057$. $P(\\infty) = 2000$."
            },
            {
              qid: "FD_024_h04",
              q: "Given $N(t) = 800e^{-0.06t}$, find the percentage of the original remaining at $t = 5$, $t = 10$, and $t = 20$.",
              a: "$t=5$: $e^{-0.3} \\approx 74.1\\%$. $t=10$: $e^{-0.6} \\approx 54.9\\%$. $t=20$: $e^{-1.2} \\approx 30.1\\%$."
            },
            {
              qid: "FD_024_h05",
              q: "A car's value is $V(t) = 15000e^{-0.08t}$. Find $V(3)$, $V(7)$, and the loss in value between $t = 3$ and $t = 7$.",
              a: "$V(3) = 15000e^{-0.24} \\approx \\$11{,}813$. $V(7) = 15000e^{-0.56} \\approx \\$8{,}569$. Loss $\\approx \\$3{,}244$."
            }
          ]
        }
,

    {
          pt_id: "FD_025",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Find the derivative (or rate of change) at a given population/value of the function",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_025_e01",
              q: "A population satisfies $\\frac{dP}{dt} = 0.05P$. Find the rate of change when $P = 200$.",
              a: "$\\frac{dP}{dt} = 0.05 \\times 200 = 10$ per unit time."
            },
            {
              qid: "FD_025_e02",
              q: "A substance decays with $\\frac{dN}{dt} = -0.1N$. Find the rate when $N = 300$.",
              a: "$\\frac{dN}{dt} = -0.1 \\times 300 = -30$ per unit time."
            },
            {
              qid: "FD_025_e03",
              q: "The mass decreases according to $\\frac{dM}{dt} = -0.02M$. Find the rate when $M = 500$ g.",
              a: "$\\frac{dM}{dt} = -0.02 \\times 500 = -10$ g per unit time."
            }
          ],
          medium: [
            {
              qid: "FD_025_m01",
              q: "Given $P(t) = 1000e^{0.02t}$ and $\\frac{dP}{dt} = 0.02P$, find the rate of change when $P = 1500$.",
              a: "$\\frac{dP}{dt} = 0.02 \\times 1500 = 30$ per unit time."
            },
            {
              qid: "FD_025_m02",
              q: "Given $P(t) = 1000e^{0.03t}$, find the rate of change when $P = 2500$.",
              a: "$\\frac{dP}{dt} = 0.03P = 0.03 \\times 2500 = 75$ per unit time."
            },
            {
              qid: "FD_025_m03",
              q: "A cooling object follows $T(t) = 22 + 58e^{-0.1t}$. Show $T'(t) = -0.1(T - 22)$ and find the rate of cooling when $T = 50°$C.",
              a: "$T'(t) = -5.8e^{-0.1t} = -0.1 \\times 58e^{-0.1t} = -0.1(T-22)$ ✓. When $T=50$: $T' = -0.1(28) = -2.8°$C/min."
            },
            {
              qid: "FD_025_m04",
              q: "A substance decays with $\\frac{dN}{dt} = -0.06N$. Find $N$ when the rate of decay is $12$ per unit time.",
              a: "$-0.06N = -12 \\Rightarrow N = \\frac{12}{0.06} = 200$."
            },
            {
              qid: "FD_025_m05",
              q: "Given $P(t) = 400e^{0.04t}$, find $P'(10)$ and express the rate as a function of $P$.",
              a: "$P'(t) = 16e^{0.04t}$. $P'(10) = 16e^{0.4} \\approx 23.87$. Since $P = 400e^{0.04t}$, $P'(t) = 0.04 \\times P$."
            }
          ],
          hard: [
            {
              qid: "FD_025_h01",
              q: "A population satisfies $\\frac{dP}{dt} = kP$ with $P(0) = 500$ and $P(3) = 650$. Find $k$ and the rate when $P = 1000$.",
              a: "$k = \\frac{1}{3}\\ln\\left(\\frac{650}{500}\\right) = \\frac{\\ln(1.3)}{3} \\approx 0.0875$. Rate when $P=1000$: $0.0875 \\times 1000 \\approx 87.5$."
            },
            {
              qid: "FD_025_h02",
              q: "Given $N(t) = 800e^{-0.05t}$, find (i) the rate of decay when $N = 400$ and (ii) the time when $N = 400$.",
              a: "(i) $\\frac{dN}{dt} = -0.05 \\times 400 = -20$. (ii) $400 = 800e^{-0.05t} \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$ units."
            },
            {
              qid: "FD_025_h03",
              q: "Newton's cooling gives $T'(t) = -0.08(T - 15)$. Find the rate of cooling when $T = 40°$C and interpret it.",
              a: "$T' = -0.08(40 - 15) = -0.08 \\times 25 = -2°$C/min. The object is cooling at $2°$C per minute."
            },
            {
              qid: "FD_025_h04",
              q: "A population satisfies $\\frac{dP}{dt} = 0.04P$. The growth rate increases from $20$ to $40$ per year. Find the corresponding population values.",
              a: "When rate $= 20$: $P = \\frac{20}{0.04} = 500$. When rate $= 40$: $P = \\frac{40}{0.04} = 1000$. Population doubled as rate doubled."
            },
            {
              qid: "FD_025_h05",
              q: "A drug satisfies $C'(t) = -0.15C$ with initial concentration $50$ mg/L. The therapeutic range is $10$–$50$ mg/L. Find the rate of elimination at each boundary and how long the drug stays therapeutic.",
              a: "At $C=50$: rate $= -7.5$ mg/L/hr. At $C=10$: rate $= -1.5$ mg/L/hr. Time: $10 = 50e^{-0.15t} \\Rightarrow t = \\frac{\\ln 5}{0.15} \\approx 10.73$ hours."
            }
          ]
        }
,

    {
          pt_id: "FD_026",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Identifying or determining k (the percentage rate of growth or decay)",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_026_e01",
              q: "Given $P(t) = 200e^{0.03t}$, state the value of $k$ and whether the model represents growth or decay.",
              a: "$k = 0.03 > 0$, so the model represents continuous growth at $3\\%$ per unit time."
            },
            {
              qid: "FD_026_e02",
              q: "Given $N(t) = 500e^{-0.08t}$, identify $k$ and state whether this is growth or decay.",
              a: "$k = -0.08 < 0$, so this represents continuous decay at $8\\%$ per unit time."
            },
            {
              qid: "FD_026_e03",
              q: "A quantity doubles every $10$ years. Find the continuous growth rate $k$.",
              a: "$2 = e^{10k} \\Rightarrow k = \\frac{\\ln 2}{10} \\approx 0.0693$ or about $6.93\\%$ per year."
            }
          ],
          medium: [
            {
              qid: "FD_026_m01",
              q: "A quantity doubles every 8 years following $A(t) = A_0 e^{kt}$. Find $k$.",
              a: "$2A_0 = A_0 e^{8k} \\Rightarrow \\ln 2 = 8k \\Rightarrow k = \\frac{\\ln 2}{8} \\approx 0.0866$"
            },
            {
              qid: "FD_026_m02",
              q: "A population triples every $15$ years. Find $k$.",
              a: "$3 = e^{15k} \\Rightarrow k = \\frac{\\ln 3}{15} \\approx 0.0732$"
            },
            {
              qid: "FD_026_m03",
              q: "A substance loses $25\\%$ of its mass every $5$ years. Find $k$.",
              a: "$0.75 = e^{5k} \\Rightarrow k = \\frac{\\ln(0.75)}{5} \\approx -0.0575$"
            },
            {
              qid: "FD_026_m04",
              q: "A population grows from $1200$ to $1600$ in $4$ years. Given $P(t) = 1200e^{kt}$, find $k$.",
              a: "$1600 = 1200e^{4k} \\Rightarrow e^{4k} = \\frac{4}{3} \\Rightarrow k = \\frac{1}{4}\\ln\\left(\\frac{4}{3}\\right) \\approx 0.0719$"
            },
            {
              qid: "FD_026_m05",
              q: "A car depreciates such that $85\\%$ of its value remains after each year. Find the continuous rate $k$.",
              a: "$e^k = 0.85 \\Rightarrow k = \\ln(0.85) \\approx -0.1625$"
            }
          ],
          hard: [
            {
              qid: "FD_026_h01",
              q: "An investment grows at $5\\%$ per annum compounded annually. Find the equivalent continuous growth rate.",
              a: "$e^k = 1.05 \\Rightarrow k = \\ln(1.05) \\approx 0.04879$. The continuous rate is about $4.88\\%$."
            },
            {
              qid: "FD_026_h02",
              q: "Given $N(2) = 750$ and $N(5) = 500$, find $k$ for the model $N(t) = Ae^{kt}$.",
              a: "$\\frac{500}{750} = e^{3k} \\Rightarrow k = \\frac{1}{3}\\ln\\left(\\frac{2}{3}\\right) \\approx -0.1352$"
            },
            {
              qid: "FD_026_h03",
              q: "A substance has $k = -0.07$. What percentage of the substance is lost each year?",
              a: "After 1 year: $e^{-0.07} \\approx 0.9324$. Percentage lost $= (1 - 0.9324) \\times 100 \\approx 6.76\\%$ per year."
            },
            {
              qid: "FD_026_h04",
              q: "Population A: $P_1 = 400e^{0.05t}$. Population B: $P_2 = 600e^{0.02t}$. Find when they are equal.",
              a: "$400e^{0.05t} = 600e^{0.02t} \\Rightarrow e^{0.03t} = \\frac{3}{2} \\Rightarrow t = \\frac{\\ln(1.5)}{0.03} \\approx 13.52$ units."
            },
            {
              qid: "FD_026_h05",
              q: "The 'Rule of 70' states that doubling time $\\approx \\frac{70}{r}$ where $r$ is the percentage rate. Derive this from $t_2 = \\frac{\\ln 2}{k}$ where $k = r/100$.",
              a: "$t_2 = \\frac{\\ln 2}{k} = \\frac{\\ln 2}{r/100} = \\frac{100 \\ln 2}{r} \\approx \\frac{69.3}{r} \\approx \\frac{70}{r}$."
            }
          ]
        }
,

    {
          pt_id: "FD_027",
          topic: "Exponential Growth and Decay Models",
          subtopic: "Exponential Growth and Decay",
          concept: "Modelling Continuous Exponential Growth and Decay",
          pt: "Interpreting derivative's units or interpreting derivative value of a function of e",
          testing: "",
          reason_bank: ["wrong_rule", "missing_chain_factor", "substitution_error", "sign_error", "algebra_slip", "not_sure"],
          easy: [
            {
              qid: "FD_027_e01",
              q: "Water leaks from a tank: $V(t) = 500e^{-0.1t}$ litres ($t$ in hours). Find $V'(2)$ and interpret.",
              a: "$V'(t) = -50e^{-0.1t}$. $V'(2) = -50e^{-0.2} \\approx -40.9$. At $t = 2$ hours, the volume is decreasing at about $40.9$ litres per hour."
            },
            {
              qid: "FD_027_e02",
              q: "A population grows as $P(t) = 300e^{0.04t}$ ($t$ in days). Find $P'(0)$ and interpret.",
              a: "$P'(t) = 12e^{0.04t}$. $P'(0) = 12$. Initially, the population is increasing at $12$ per day."
            },
            {
              qid: "FD_027_e03",
              q: "The mass of a substance is $M(t) = 80e^{-0.05t}$ grams ($t$ in years). If $M'(4) \\approx -3.27$, interpret this value.",
              a: "At $t = 4$ years, the mass is decreasing at approximately $3.27$ grams per year."
            }
          ],
          medium: [
            {
              qid: "FD_027_m01",
              q: "The volume of water in a tank is $V(t) = 200e^{-0.05t}$ litres where $t$ is in hours. If $V'(3) = -8.61$, interpret this value.",
              a: "At $t = 3$ hours, the volume of water is decreasing at a rate of 8.61 litres per hour."
            },
            {
              qid: "FD_027_m02",
              q: "A cooling coffee has $T(t) = 22 + 58e^{-0.12t}$ °C ($t$ in minutes). Find $T'(5)$ and interpret.",
              a: "$T'(t) = -6.96e^{-0.12t}$. $T'(5) = -6.96e^{-0.6} \\approx -3.82$. At $t = 5$ minutes, the temperature is decreasing at about $3.82°$C per minute."
            },
            {
              qid: "FD_027_m03",
              q: "An investment grows as $A(t) = 5000e^{0.045t}$ dollars ($t$ in years). Find $A'(10)$ and explain what it represents.",
              a: "$A'(t) = 225e^{0.045t}$. $A'(10) = 225e^{0.45} \\approx \\$352.71$. At $t = 10$ years, the investment is growing at about $\\$352.71$ per year."
            },
            {
              qid: "FD_027_m04",
              q: "A drug concentration is $C(t) = 40e^{-0.08t}$ mg/L ($t$ in hours). Interpret the sign and magnitude of $C'(t)$.",
              a: "$C'(t) = -3.2e^{-0.08t}$. Negative sign: concentration is always decreasing. Magnitude decreases over time since $e^{-0.08t}$ decreases, so the drug is eliminated more slowly as concentration drops."
            },
            {
              qid: "FD_027_m05",
              q: "Soil moisture is $W(t) = 120e^{-0.03t}$ mm ($t$ in days). Find $W'(10)$ and state its units.",
              a: "$W'(t) = -3.6e^{-0.03t}$. $W'(10) = -3.6e^{-0.3} \\approx -2.67$ mm per day. The soil is losing about $2.67$ mm of moisture per day at $t = 10$."
            }
          ],
          hard: [
            {
              qid: "FD_027_h01",
              q: "A population follows $P(t) = 500e^{0.03t}$ ($t$ in years). Find $P''(10)$ and explain what it tells us about the growth.",
              a: "$P'(t) = 15e^{0.03t}$, $P''(t) = 0.45e^{0.03t}$. $P''(10) = 0.45e^{0.3} \\approx 0.607$. Since $P'' > 0$, the rate of growth itself is increasing (the population is accelerating)."
            },
            {
              qid: "FD_027_h02",
              q: "Given $N(t) = 800e^{-0.04t}$, compare $N'(5)$ (instantaneous rate) with the average rate of change over $[4, 6]$.",
              a: "$N'(5) = -32e^{-0.2} \\approx -26.2$. Average $= \\frac{N(6)-N(4)}{2} = \\frac{800e^{-0.24}-800e^{-0.16}}{2} \\approx \\frac{629.0-681.7}{2} = -26.4$. They are very close; the instantaneous rate approximates the average over small intervals."
            },
            {
              qid: "FD_027_h03",
              q: "Newton's Law of Cooling gives $\\frac{dT}{dt} = -0.1(T - 20)$ where $T$ is in °C and $t$ in minutes. Interpret this equation and explain why the rate of cooling decreases over time.",
              a: "The rate of temperature change is proportional to the difference between the object's temperature and the room ($20°$C). As the object cools, $(T - 20)$ decreases, so $|\\frac{dT}{dt}|$ decreases — cooling slows down as the object approaches room temperature."
            },
            {
              qid: "FD_027_h04",
              q: "The charge on a capacitor is $Q(t) = Q_0 e^{-t/(RC)}$ coulombs where $R$ (ohms) and $C$ (farads) are constants and $t$ is in seconds. Find $Q'(t)$ and state its units.",
              a: "$Q'(t) = -\\frac{Q_0}{RC} e^{-t/(RC)}$. The units of $Q'(t)$ are coulombs per second, which equals amperes (A). This is the current flowing through the circuit."
            },
            {
              qid: "FD_027_h05",
              q: "For $N(t) = Ae^{kt}$, show that the percentage rate of change $\\frac{N'(t)}{N(t)} \\times 100$ is constant. What is its value?",
              a: "$N'(t) = kAe^{kt}$. $\\frac{N'(t)}{N(t)} = \\frac{kAe^{kt}}{Ae^{kt}} = k$. So the percentage rate $= 100k\\%$, which is constant regardless of $t$ or the value of $N$."
            }
          ]
        }

  ]
};