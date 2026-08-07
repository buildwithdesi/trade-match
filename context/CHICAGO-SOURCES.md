# Chicago Way-In Sources (verified Aug 7, 2026)

> Every row was researched and then adversarially re-verified by a second pass (union local confirmed for the trade, application URL fetched live). Use these in the app, the pitch, and when a judge asks "is that real?" Application windows change; the status column is what was true today.

| Trade | Union / Route | Program | Apply | Status + reality check |
|---|---|---|---|---|
| Electrician | IBEW Local 134 | IN-TECH / EJATT (Alsip) | https://ejatt.com/ | Register in person Wed 9-11am. HS diploma/GED + 1 yr algebra (C+), aptitude test. 5-yr paid, no tuition. |
| Plumber | Plumbers Local 130 UA | JAC Local 130 Apprenticeship | https://plumberslu130ua.com/apprenticeship.aspx | Portal (apply.jac130.org) opens each NOVEMBER, closed until then. $50 fee. Prep documents now. |
| HVAC | Pipefitters Local 597 UA | Training Fund (HVAC Service track) | https://www.pftf597.org/applications/ | Applications 1st Wednesday of EVERY month, Mokena, $20 fee. 5-yr paid. |
| Elevator | IUEC Local 2 | NEIEP | https://www.neiep.org/elevator-apprenticeship-recruitment-opportunities/ | CLOSED as of Aug 2026; opens in recruitment windows. Sign up for alerts. EIAT test + interview. |
| Welder | Pipefitters 597 (weld track) | Training Fund welding specialty | https://www.pftf597.org/applications/ | No standalone welders' union; weld inside 597/Ironworkers/Boilermakers. School route: Daley College Welding cert. |
| Carpenter | Mid-America Carpenters (UBC) | MACTC, Elk Grove Village | https://mactc.org/registration-process/ | Walk in M-F 9:30-3:00, 1256 Estes Ave. No experience needed. Free PATTS pre-apprentice school exists. |
| Millwright | Millwrights Local 1693 | MACTC (Millwright craft) | https://mactc.org/registration-process/ | Same Elk Grove Village center; Local 1693 at (630) 325-6036. |
| Lineman | IBEW Local 9 | Outside Line Apprenticeship | https://www.ibew9.org/apprentice_opportunities/ | CLOSED until further notice (Aug 2026). Needs CDL-A with air brake BEFORE applying. (708) 235-2960. |
| Ironworker | Iron Workers Local 63 | Local 63 Apprenticeship | https://iwlocal63.com/apprenticeship/ | OPEN year-round (18+, HS/GED, driver's license). Structural Local 1 currently closed. |
| Sheet metal | SMART Local 73 | 4-yr JATC, Bellwood | https://www.smw73.org/training/application.html | CLOSED as of Aug 2026; window-based. $20 fee, aptitude + drug test when open. |
| Mason | BAC ADC 1 of Illinois | DCTC Apprenticeship | https://www.bac2school.org/ | Apply online or in Addison. Bring license, birth cert, SS card, $20. Pre-apprentice track available. |
| Operator | IUOE Local 150 | ASIP | https://local150.org/apply/ | $25 money order. License address MUST match application. Applications expire after one year. |
| Machinist | (mostly non-union) | JARC Careers in Manufacturing, free CNC | https://jarctraining.org/locations/chicago/ | $0 tuition + job placement (Ravenswood, Austin, Chatham). School: Daley College MTEC. |
| Diesel | IAM Local 701 | Diesel Power & Equipment (~23 mo) | https://local701training.org/ | Full union wages while training 1 day/week in Aurora. ~$1,400 total cost. Fall cohorts. |
| Auto | IAM Local 701 | Automotive Technology (27 mo) | https://local701training.org/ | Rare union path for auto techs. School alt: Kennedy-King College. |
| Aircraft | (unionize after hire) | AIM Chicago, FAA Part 147 A&P | https://aviationmaintenance.edu/campuses/chicago-il/ | 3711 S Ashland near Midway. Alt: Lewis University (Romeoville), evening format. |

## Live data layer (in the app, verified working)

- **Dataset:** City of Chicago Building Permits, `ydr8-5enu` (Socrata). Open CORS, no key, callable from a static HTML file.
- **The trick:** trade contractors hide across contact slots 1-6 under TWO spellings ("CONTRACTOR-PLUMBER/PLUMBING" and "PLUMBING CONTRACTOR" are both live values). The app queries all slots, both spellings.
- **Verified live counts (last 90 days, Aug 7):** plumbing 1,390 permits · elevator 296 · electrical 311+ · HVAC 411 · general contractor 466.
- **Neighborhoods:** `community_area` is a numeric code; the app maps it through the standard 77-area table (61 = New City, 68 = Englewood).
- **Dead end, do not retry:** Business Licenses dataset (r5kz-chrr) has ZERO trade contractor licenses; trades are licensed by the Dept. of Buildings, not BACP.
- **Future signal:** CDOT right-of-way permits (`pubx-yq2d`) are huge volume (19K+ public-way work permits since May), the classic dig/sewer-tap category. Good phase-2 data source.
