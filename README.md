# Trade Match ⚒

**The AI-proof career test.** A 5-minute assessment that tells you which skilled trade fits how you actually work, backed by real Bureau of Labor Statistics pay data.

Built with Claude in one day at the **Claude Impact Lab, Chicago**, answering the question from the July 30 Claude Conversation: *"What is AI doing to me, my kids, my community?"*

## Try it

No install, no server, no signup. Download and open in any browser:

- **[trade-match.html](trade-match.html)** — the test (works offline, works on phones)
- **[landing.html](landing.html)** — the product story page

Or clone and double-click:

```bash
git clone https://github.com/buildwithdesi/trade-match.git
```

## What it does

1. **Assess.** 20 questions about how you work, not what you know. The engine measures 15 traits: heights, precision, diagnostics, people tolerance, risk, routine, craft pride, and more.
2. **Match.** All 16 trades ranked by fit, each with median and top-10% pay (BLS May 2024), job outlook (BLS 2024-34), the real entry path, what the work does to your body, and an honest warning before you commit.
3. **Pair** *(the vision)*. Match with a solo working tradesperson in your neighborhood. Pay ~$2,000 to spend a month on the job before betting tuition on the switch. They earn a second income. You get the truth about the craft.

## Why the engine is honest

Most career quizzes let the "moderate on everything" option win every time. Trade Match scores each trade against how far it sits from the *average* trade on each trait (z-score normalization), so distinctive trades surface when they genuinely fit, and the results explain *why* you matched, in plain language, from your own answers.

## For the team

Everything you need to build, pitch, or design is in [`context/`](context/):

| File | What it's for |
|---|---|
| [PRODUCT.md](context/PRODUCT.md) | Single source of truth. Paste into any Claude session to get aligned output. |
| [PITCH.md](context/PITCH.md) | One-liner, 90-second spoken pitch, objection handling. |
| [DEMO-SCRIPT.md](context/DEMO-SCRIPT.md) | Timed 2-minute demo script with a verified answer key. |
| [BRAND.md](context/BRAND.md) | Palette, typography, voice rules. Keeps every asset looking like one product. |

The untouched pre-glow-up prototype lives in [`original/`](original/) for reference.

## Tech

One self-contained HTML file per page. No framework, no build step, no dependencies, no tracking. The trait engine, 16 trade profiles, and scoring run entirely in the browser. Keyboard shortcuts: A/B/C/D or 1-4 to answer.

## Data

Pay figures are U.S. national medians from the Bureau of Labor Statistics, Occupational Outlook Handbook, May 2024 wage data; outlooks are BLS 2024-34 projections. Figures vary by state, union status, and overtime, and the product says so on every screen.

## License

MIT. Take it, fork it, bring it to your city.
