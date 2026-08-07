// Bottom pill nav that flips between the three Lovable one-pager designs.
// Pulled from Lovable project tradepathv1, Aug 7 2026.

import { Link } from "@tanstack/react-router";
import { VARIANTS } from "@/lib/tradepath-content";

type Tone = "dark" | "paper" | "amber";

const tones: Record<Tone, { wrap: string; item: string; active: string }> = {
  dark: {
    wrap: "border-line bg-panel/80 text-dim",
    item: "hover:text-ink",
    active: "bg-amber text-ink-dark",
  },
  paper: {
    wrap: "border-ink-dark/15 bg-paper/90 text-ink-dark/60",
    item: "hover:text-ink-dark",
    active: "bg-ink-dark text-paper",
  },
  amber: {
    wrap: "border-ink-dark/25 bg-amber/90 text-ink-dark/70",
    item: "hover:text-ink-dark",
    active: "bg-ink-dark text-amber",
  },
};

export function VariantSwitcher({ tone = "dark" }: { tone?: Tone }) {
  const t = tones[tone];
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div
        className={`flex items-center gap-1 rounded-full border p-1 backdrop-blur-md ${t.wrap}`}
      >
        {VARIANTS.map((v) => (
          <Link
            key={v.to}
            to={v.to}
            title={v.hint}
            activeOptions={{ exact: true }}
            activeProps={{ className: `${t.active} rounded-full` }}
            className={`rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] transition-colors ${t.item}`}
          >
            {v.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
