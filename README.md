# TradePath Chicago ⚒

**Find the trade that fits you. Then find who will pay you to learn it.**

Built in one day by **Claude Team 6** at the **Claude Impact Lab, Chicago** (Aug 2026), answering the question from the July 30 Claude Conversation: *"What is AI doing to me, my kids, my community?"*

## ▶ Start here

**[index.html](index.html)** is the master app (lead builder: Spenser). No install, no server, no signup:

```bash
git clone https://github.com/buildwithdesi/trade-match.git
```

Clone, open `index.html`, done. Works offline, works on phones.

## What it does

1. **Fit test.** 20 questions about how you actually work, scored against 16 trades with real BLS pay data. The engine measures distance from the *average* trade per trait, so honest answers win and distinctive trades surface.
2. **Program match.** Your result feeds a 6-question eligibility check (county, age, education, situation) and ranks the real Chicagoland programs that will take you: paid apprenticeships, free pre-apprenticeships, and the WIOA vouchers and grants almost nobody should be skipping. Near-misses name the program that unblocks you.
3. **Chicago, live.** The top trade card fetches the City of Chicago's building permits API in real time: how many permits your trade pulled in the last 90 days, the top companies pulling them by name, and which neighborhoods. Offline? A labeled cached snapshot renders instead.
4. **The plan.** One printable page: your trade, your three programs, the money to apply for before you enroll anywhere, and a 7-day checklist.

Plus a browsable directory of every tracked program, and an "Open now" deadline board, because union application windows are the single biggest reason people miss out.

## The data

- Pay and outlook: U.S. Bureau of Labor Statistics, May 2024 wages, 2024-34 projections.
- Programs: hand-verified against primary sources, August 2026.
- Unions and application routes: twice-verified reference in [context/CHICAGO-SOURCES.md](context/CHICAGO-SOURCES.md).
- Live demand: City of Chicago Building Permits (dataset `ydr8-5enu`), open API, no key.

## For the team

[`context/`](context/) is the shared brain. Paste any file into a Claude session:

| File | Purpose |
|---|---|
| [PRODUCT.md](context/PRODUCT.md) | Single source of truth |
| [PITCH.md](context/PITCH.md) | One-liner, 90-second pitch, objection handling |
| [DEMO-SCRIPT.md](context/DEMO-SCRIPT.md) | Morgan's timed 2-minute demo with verified answer key |
| [CHICAGO-SOURCES.md](context/CHICAGO-SOURCES.md) | Verified unions, programs, application windows, API notes |
| [BRAND.md](context/BRAND.md) | Visual identity and voice rules |

Also in the repo: `trade-match.html` (the original standalone fit test), `landing.html` (story page for the standalone test), and `original/` (the first prototype, untouched).

## License

MIT. Take it, fork it, bring it to your city: the structure ports, because BLS data is national and every state has workforce boards and JATCs.
