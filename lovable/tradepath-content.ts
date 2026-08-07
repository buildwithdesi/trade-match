// Shared data for the Lovable one-pagers (Worklight / Blueprint / Broadside).
// Pulled from Lovable project tradepathv1, Aug 7 2026.
// Heads up: the pay figures here are Lovable's own; cross-check against the
// app's BLS numbers before shipping (e.g. app says Plumber $62,970, this says
// $65,190; Ironworker $61,940 vs $62,110; Operator $58,320 vs $62,180).

export const TRADES = [
  { name: "Elevator Installer", pay: "$106,580", growth: "+6%", note: "Highest median of the 16. Small, competitive intake." },
  { name: "Electrician", pay: "$62,350", growth: "+11%", note: "IBEW 134 registers in person, Wednesdays 9-11am, Alsip." },
  { name: "Plumber / Pipefitter", pay: "$65,190", growth: "+6%", note: "Plumbers 130 opens its window in November." },
  { name: "Ironworker", pay: "$62,110", growth: "+4%", note: "You are 80 feet up on a steel beam. Weather is the job." },
  { name: "HVAC Technician", pay: "$59,810", growth: "+9%", note: "Steadiest year-round demand in the metro." },
  { name: "Operating Engineer", pay: "$62,180", growth: "+4%", note: "Local 150 window opens without much warning." },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "The fit test",
    body: "20 questions about how you actually work, scored against 16 trades. The engine measures distance from the average trade per trait, so honest answers win.",
  },
  {
    n: "02",
    title: "The program match",
    body: "6 eligibility questions (county, age, education, situation) rank the real Chicagoland programs that will take you. Near-misses name the program that unblocks you.",
  },
  {
    n: "03",
    title: "Chicago, live",
    body: "Your top trade pulls the City of Chicago permits API: how many permits your trade pulled in 90 days, which companies, which neighborhoods.",
  },
  {
    n: "04",
    title: "The plan",
    body: "One printable page. Your trade, your three programs, the money to apply for before you enroll anywhere, and a 7-day checklist.",
  },
] as const;

export const STATS = [
  { k: "$50M+", v: "a year in Chicagoland training funds, scattered across 40 agencies" },
  { k: "16", v: "trades ranked with May 2024 BLS wage and 2024-34 outlook data" },
  { k: "5 min", v: "no signup, no server, works offline on a phone" },
] as const;

export const FACTS = [
  "Pay and outlook: U.S. Bureau of Labor Statistics, May 2024 wages.",
  "Programs: hand-verified against primary sources, August 2026.",
  "Live demand: City of Chicago Building Permits, dataset ydr8-5enu.",
] as const;

export const VARIANTS = [
  { to: "/", label: "Worklight", hint: "Dark, amber, job site at dusk" },
  { to: "/blueprint", label: "Blueprint", hint: "Paper, grid, technical drawing" },
  { to: "/broadside", label: "Broadside", hint: "Amber poster, union print shop" },
] as const;
