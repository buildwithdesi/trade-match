// TradePath Chicago — "Broadside" one-pager (the yellow one)
// Pulled from Lovable project tradepathv1 (Trade Match Pages), Aug 7 2026.
// Stack: TanStack Start + React + Tailwind v4.
// Needs: tradepath-content.ts (data), VariantSwitcher.tsx (bottom pill nav),
// the brand tokens from styles.css (--color-amber #f5a524, --color-ink-dark
// #12151c, fonts Archivo/Inter/IBM Plex Mono), and broadside-portrait.jpg
// (halftone apprentice portrait; asset lives in the Lovable project).

import { createFileRoute } from "@tanstack/react-router";
import { VariantSwitcher } from "@/components/VariantSwitcher";
import { TRADES, STEPS, FACTS } from "@/lib/tradepath-content";
import portrait from "@/assets/broadside-portrait.jpg";

export const Route = createFileRoute("/broadside")({
  head: () => ({
    meta: [
      { title: "TradePath Chicago — Broadside edition" },
      {
        name: "description",
        content:
          "A print-shop broadside for TradePath Chicago: the trade that fits you, and who will pay you to learn it.",
      },
      { property: "og:title", content: "TradePath Chicago — Broadside edition" },
      {
        property: "og:description",
        content: "Amber poster typography, real BLS numbers, Chicagoland programs that pay you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Broadside,
});

function Broadside() {
  return (
    <main className="min-h-screen bg-amber text-ink-dark">
      <div className="mx-auto max-w-6xl px-6">
        <header className="flex items-center justify-between py-6 font-mono text-[11px] uppercase tracking-[0.18em]">
          <span>TradePath ⚒ Chicagoland</span>
          <span className="text-ink-dark/60">No. 006 · Aug 2026</span>
        </header>

        <section className="grid items-end gap-8 border-y-4 border-ink-dark py-10 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h1 className="text-[3.4rem] font-extrabold uppercase leading-[0.86] md:text-[7rem]">
              Who will
              <br />
              pay you
              <br />
              to learn it
            </h1>
            <p className="mt-8 max-w-lg text-[17px] font-medium leading-relaxed">
              A 5 minute test tells you which skilled trade fits how you actually work. Then it
              names the Chicagoland programs that will take you, and the ones that pay you while
              you train.
            </p>
            <a
              href="#trades"
              className="mt-8 inline-block bg-ink-dark px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-amber"
            >
              Take the test
            </a>
          </div>
          <img
            src={portrait}
            alt="Halftone portrait of an apprentice electrician with a toolbelt"
            width={1008}
            height={1312}
            loading="lazy"
            className="w-full border-4 border-ink-dark object-cover mix-blend-multiply"
          />
        </section>

        <section className="grid gap-0 border-b-4 border-ink-dark md:grid-cols-4">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="border-ink-dark px-5 py-8 md:border-r-2 md:last:border-r-0"
            >
              <p className="font-mono text-[12px]">{s.n}</p>
              <h2 className="mt-2 text-lg font-extrabold uppercase leading-tight">{s.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-dark/75">{s.body}</p>
            </article>
          ))}
        </section>

        <section id="trades" className="bg-ink-dark px-6 py-14 text-amber md:px-12">
          <h2 className="text-3xl font-extrabold uppercase md:text-5xl">The numbers, not adjectives</h2>
          <div className="mt-10 divide-y divide-amber/25">
            {TRADES.map((t) => (
              <div
                key={t.name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-5"
              >
                <p className="text-lg font-bold uppercase">{t.name}</p>
                <p className="order-3 w-full max-w-md text-[13.5px] text-amber/60 md:order-2">
                  {t.note}
                </p>
                <p className="order-2 font-display text-3xl font-extrabold md:order-3">{t.pay}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b-4 border-ink-dark py-16 text-center">
          <p className="font-display text-[3rem] font-extrabold uppercase leading-[0.9] md:text-[5rem]">
            Stop the $20,000
            <br />
            wrong guess
          </p>
          <a
            href="https://github.com/buildwithdesi/trade-match"
            className="mt-10 inline-block bg-ink-dark px-10 py-4 text-sm font-bold uppercase tracking-[0.1em] text-amber"
          >
            Open the app
          </a>
        </section>

        <footer className="py-10 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-dark/70">
          {FACTS.map((f) => (
            <p key={f} className="py-1">
              {f}
            </p>
          ))}
          <p className="mt-6 font-bold text-ink-dark">
            Built with Claude at the Claude Impact Lab, Chicago
          </p>
        </footer>
        <div className="h-16" />
      </div>
      <VariantSwitcher tone="amber" />
    </main>
  );
}
