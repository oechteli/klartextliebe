import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Hervorgehobene Karte (z. B. beliebtestes Angebot) */
  highlight?: boolean;
  /** Sanfter Hover-Lift */
  interactive?: boolean;
}

export function Card({
  children,
  className,
  highlight = false,
  interactive = false,
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl bg-white p-6 sm:p-8 shadow-soft ring-1 ring-cream-200",
        highlight
          ? "ring-2 ring-brand-violet/40 shadow-card relative"
          : "",
        interactive
          ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
          : "",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
