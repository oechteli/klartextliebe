import type { ReactNode } from "react";

type Tone = "neutral" | "brand" | "turquoise" | "pink" | "orange" | "soon";

const tones: Record<Tone, string> = {
  neutral: "bg-cream-100 text-ink-700 ring-cream-200",
  brand: "bg-brand-violet/10 text-brand-violet ring-brand-violet/20",
  turquoise: "bg-brand-turquoise/10 text-brand-turquoise ring-brand-turquoise/20",
  pink: "bg-brand-pink/10 text-brand-pink ring-brand-pink/20",
  orange: "bg-brand-orange/10 text-brand-orange ring-brand-orange/20",
  soon: "bg-cream-100 text-ink-500 ring-cream-200",
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1",
        tones[tone],
        className ?? "",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
