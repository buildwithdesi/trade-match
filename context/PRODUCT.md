# TradePath Chicago — Product Context (Claude Team 6)

> Paste this into any Claude session to get aligned output. Single source of truth for the merged product. Lead builder: Spenser. Master file: `index.html`.

## One-liner

TradePath Chicago finds the trade that fits you, then finds who will pay you to learn it: a fit test, a funded-program matcher, live city demand data, and a printable plan, in one offline-capable HTML file.

## The two problems (in order)

1. **Orientation.** Most people who would thrive in a trade never seriously consider one, and the ones who do pick by proximity (a relative is an electrician). Nobody asks whether they'd rather be 80 feet up on a beam or holding a thousandth-of-an-inch tolerance indoors. A directory can't fix that; it assumes you already know the answer.
2. **Navigation.** Chicagoland moves $50M+/year toward exactly the person who wants to learn a trade, across seven workforce boards, City Colleges, ~18 union JATCs, and 40+ nonprofits. Eligibility differs by county, age, income, diploma, record, gender, and which Wednesday you check the website. So people route around the free money, enroll at for-profit schools, and take on debt.

## The four parts

1. **Fit test** (20 questions, 15 traits, 16 trades, BLS May 2024 pay + 2024-34 outlook). Scored against distance from the AVERAGE trade per trait, so distinctive trades surface and "moderate everything" can't always win. Results explain WHY in plain language, and say so when the signal is weak.
2. **Program match.** The fit result seeds a 6-question eligibility quiz (county, age, education, trades, goal, situational flags). Hard filters remove what won't take you; the rest ranks by trade fit (scaled by fit %), whether it pays you, whether it's open now, and your goal. Near-misses show the specific program that unblocks the blocker.
3. **Chicago, live.** On the top trade card, the app fetches City of Chicago building permits (dataset `ydr8-5enu`, open CORS): exact 90-day permit count, top 5 contractors by name, top community areas. Falls back to a labeled cached snapshot offline. Verified live: 1,390 plumbing permits, 296 elevator, 411 HVAC in the last 90 days (Aug 7).
4. **The plan.** One printable page: trade, the Chicago door in, three programs with exact first steps, the funding to apply for BEFORE enrolling, and a 7-day checklist.

Plus a **Browse all** directory with filters, an **Open now** deadline board (union windows are the #1 reason people miss out), and a **methodology page** that documents the engine and the build-out roadmap honestly.

## Target users

The AI-disrupted desk worker · the new grad · the career switcher · the person deciding whether college is the right spend · the high schooler.

## What is real vs pitched

| Piece | Status |
|---|---|
| Fit test, program match, plan, browse, deadline board | Built, working, one HTML file, offline-capable |
| Live permits panel (count, contractors, neighborhoods) | Built, verified live Aug 7 |
| Program records | Hand-verified against primary sources, Aug 2026 |
| Union/apprenticeship reference | Twice-verified, see CHICAGO-SOURCES.md |
| Provider warm handoffs, deadline alerts, accounts | Roadmap (documented in-app) |
| Paid try-a-trade pairing (~$2K/month with a working pro) | Vision, pitched as the long arc |

## Tech (honest paragraph)

One self-contained HTML file. No framework, no build, no server, no tracking, no signup. The only network call is the optional live-permits fetch to the City of Chicago open data portal. Built with Claude in one day at the Claude Impact Lab by Team 6.

## Team framing

Built by **Claude Team 6** at the Claude Impact Lab, Chicago (Aug 2026), answering the July 30 Claude Conversation's question: "What is AI doing to me, my kids, my community?" The answer: AI as counselor, navigator, and jobs radar for the work it cannot do.
