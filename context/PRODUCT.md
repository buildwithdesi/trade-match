# Trade Match — Product Context

> Paste this file into any Claude session to get aligned output. This is the single source of truth for what Trade Match is, who it serves, and what exists versus what is pitched.

## One-liner

Trade Match is a 5-minute assessment that tells you which skilled trade fits how you actually work, backed by real government pay data, and then pairs you with a working local tradesperson so you can try the craft before you bet tuition on it.

## The problem

AI is disrupting desk jobs fast. Software engineers, project managers, marketers, and new college grads are all asking the same question: "Will I have a job next year, and if not, what do I do?"

Meanwhile, skilled trades pay $50K to $106K median, many are growing faster than average, and most cannot be done by AI. But nobody maps a specific person to a specific trade. Career switchers face a blind bet: quit, pay for trade school, and hope they picked right.

## The answer: three stages

### Stage 1 — Assess (built, working)
A 20-question test about how you like to work, what you can tolerate, and what you want your life to look like. No right answers. It measures 15 traits (outdoor tolerance, heights, precision, diagnostics, people contact, risk, routine, craft pride, and more).

### Stage 2 — Match (built, working)
Results rank all 16 trades by fit. The top 3 come with:
- Median pay and top-10% pay (U.S. Bureau of Labor Statistics, May 2024 wage data)
- Job outlook (BLS 2024-34 projections)
- The real entry path (apprenticeships, unions, trade school, certs)
- What the work does to your body
- An honest "before you commit" warning per trade

### Stage 3 — Pair (the vision, pitched at demo)
A two-sided local marketplace:
- **The switcher** pays roughly $2,000 to spend a month on the job with a solo working tradesperson (electrician, plumber, HVAC tech) before committing to trade school or an apprenticeship.
- **The tradesperson** earns a second income teaching what they already do every day.
- Compare the cost: one month of real on-the-job truth for a fraction of one semester of college tuition. If the trade is not for you, you found out for $2,000 instead of $20,000.

People make money, save money, and save time. That is the community impact.

## Target users

1. **The disrupted worker.** Software engineer, PM, analyst watching AI circle their industry. Wants a concrete plan, not a think piece.
2. **The new grad.** Degree in hand, market underwater, open to a different path.
3. **The college evaluator.** Deciding whether college is even the right spend versus a paid trade path that starts earning from day one.
4. **(Original seed audience) The high schooler** deciding what to do next.

## Why the matching engine is honest

Most career quizzes let the "moderate on everything" option win every time. Trade Match scores each trade against how far it sits from the AVERAGE trade on each trait (z-score normalization). Distinctive trades surface when they genuinely fit, and the results say WHY you matched, in plain language, using your own answers.

The results page also tells you NOT to trust a quiz: shadow someone for a day, call the union hall, search your state's apprenticeship programs. The product's own advice is the seed of Stage 3.

## What is real vs pitched

| Piece | Status |
|---|---|
| 20-question assessment, 15-trait engine | Built, working, single HTML file, runs offline |
| 16 trade profiles with BLS May 2024 pay + 2024-34 outlook | Built, data sourced |
| Results with fit %, reasons, paths, warnings, print/PDF | Built |
| Stage 3 pairing marketplace | Vision. Demoed as a results-screen panel + pitch |

## Data sourcing

All pay figures are U.S. national medians from the Bureau of Labor Statistics, Occupational Outlook Handbook, May 2024 wage data. Outlooks are BLS 2024-34 projections. Figures vary by state, union status, and overtime, and the product says so.

## Tech (one honest paragraph)

Trade Match is a single self-contained HTML file: no framework, no build step, no server, no tracking. The trait engine, 16 trade profiles, and scoring run entirely in the browser and work offline. Built with Claude at the Claude Impact Lab, Chicago.

## Event framing

Built at the **Claude Impact Lab** (Chicago). The July 30 Claude Conversation asked: "What is AI doing to me, my kids, my community?" Trade Match is the team's answer: use the same technology that is disrupting your job to move into work it cannot touch, and put money in local tradespeople's pockets while you do it.
