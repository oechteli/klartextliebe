import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  badge?: string;
}

/** Einheitlicher, dezenter Seitenkopf für Unterseiten. */
export function PageHero({ eyebrow, title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-cream-200 bg-brand-soft">
      <div
        aria-hidden
        className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-brand-violet/15 blur-3xl"
      />
      <div className="container-kl py-16 sm:py-20">
        <div className="max-w-3xl">
          {badge && (
            <Badge tone="brand" className="mb-4">
              {badge}
            </Badge>
          )}
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-ink-500">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
