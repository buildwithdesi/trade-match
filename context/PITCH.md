# TradePath Chicago — Pitch (Claude Team 6)

> The spoken pitch for the Claude Impact Lab demo day. Built by Team 6. Lead builder: Spenser.

## One-liner

"TradePath Chicago finds the trade that fits you, then finds who will pay you to learn it. Live city data included."

## The 90-second spoken pitch

At the Claude Conversation in July, this city asked one question: what is AI doing to me, my kids, my community?

Team 6's answer: it's coming for desk jobs, so we used it to build the off-ramp into the jobs it can't touch.

Chicagoland doesn't have a funding shortage for trades training. It has an orientation problem and a navigation problem. Most people who'd thrive in a trade never seriously consider one, and the ones who do end up paying for school they didn't need to pay for, because over fifty million dollars a year in apprenticeships, pre-apprenticeships, and vouchers is scattered across forty agencies that don't talk to each other.

TradePath fixes both, in order.

**First, the fit test.** Twenty questions about how you actually work, scored against sixteen trades with real federal pay data. Not a horoscope: the engine is built so the honest answer wins, and it names the traits that drove your match.

**Second, the program match.** Your result flows straight into a directory of real Chicagoland programs, filtered by the things that actually gate you: your county, your age, your education, your situation. It ranks what will take you, flags what pays you while you train, and shows what's open right now, because union windows close fast: Plumbers 130 opens in November, IBEW 134 registers Wednesday mornings, and if one fixable thing blocks you, it names the program that unblocks it.

**Third, live city data.** When you match to a trade, the app pulls the City of Chicago's own building permits, live, and shows who's pulling permits for your trade right now and in which neighborhoods. Match to elevator tech and it shows you Otis pulled 46 permits in the last 90 days, mostly Near North Side and the Loop. Those names come off real permits. That's who you call, or walk up to.

**And it ends in a plan.** One printable page: your trade, your three programs, the money to apply for before you enroll anywhere, and a checklist for the next seven days.

We built this today, as a team, with Claude. It runs on a phone, offline, no signup. Take the test.

## Why this wins a community-minded room

- **It's a complete loop, not a demo.** Quiz → eligibility → funded programs → live demand signal → printable plan. Most teams show a front end; this hands you Monday morning.
- **The data is real and layered.** Federal BLS pay data + hand-verified Chicagoland program records with application windows + live City of Chicago permits. Three data sources, one of them updating live on stage.
- **It routes people to free money.** The core insight: almost nobody in Chicagoland should pay full price for trades training. The app's whole job is stopping the $20,000 wrong guess.
- **It flips the AI fear.** The event's question treats AI as a threat. This is AI as a counselor, a navigator, and a jobs radar for work AI cannot do.

## Objection handling

**"A quiz doesn't get you a job."**
Agreed, which is why the quiz is one of four parts. The program match names the actual door (IBEW 134 registers in person, Wednesdays 9-11am in Alsip). The deadline board tracks the windows. The live permits panel names the companies working your trade this quarter. And the plan tells you what to do this week.

**"Is the program data real?"**
Every program record was verified against primary sources in August 2026, and the app says "call before you count on it" where a provider's own site is stale. The union locals and application URLs were verified twice, second pass adversarial (see context/CHICAGO-SOURCES.md).

**"Is the live data real?"**
It's the City of Chicago's public permits API, fetched in front of you, no key, no server. Kill the wifi and the app falls back to a labeled cached snapshot. We can demo it either way.

**"What's the business?"**
Phase 1 is civic infrastructure: workforce boards and CPS counselors are the natural operators. The longer arc adds warm handoffs to providers (qualified referrals both sides want) and the paid try-a-trade pairing: about $2,000 for a month alongside a working tradesperson before you bet tuition, income for them, truth for you.

**"Why won't this go stale?"**
The permits layer updates itself. Program records need a monthly verification pass, which is exactly what phase 1 of the roadmap on the app's own methodology page proposes, with a "last verified" date on every card.

## Where this goes next (the wrap-up beat)

Provider handoffs (CWIT, Revolution Workshop, Illinois Works intake forms inside the app), deadline alerts when Local 150's window opens, outcome data flowing back so the fit test learns from who's still in the trade at 18 months, then statewide: the structure ports because BLS data is national and every state has WIOA boards and JATCs.
