import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { kurse } from "@/lib/kurse";

/**
 * Die drei Kurse (Relaunch 07.09.2026). Kurs 1 ist als Live-Gruppe buchbar,
 * Kurs 2 und 3 stehen ohne Buchungs- oder Vormerk-Button da (keine Wartelisten).
 */
export function CoursesSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="section bg-cream-50" id="kurse">
      <div className="container-kl">
        {withHeading && (
          <SectionHeading
            eyebrow="Kurse"
            title="Der Klartext-Weg in drei Kursen"
            subtitle="Aufeinander aufgebaut, einzeln buchbar. Du fängst dort an, wo du stehst."
          />
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {kurse.map((k) => (
            <Card
              key={k.slug}
              highlight={k.buchbar}
              interactive
              className="flex flex-col"
            >
              {k.buchbar ? (
                <Badge tone="brand" className="absolute -top-3 left-6">
                  Jetzt buchbar
                </Badge>
              ) : (
                <Badge tone="soon" className="absolute -top-3 left-6">
                  Folgt
                </Badge>
              )}
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-violet">
                Kurs {k.nummer}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-ink-900">{k.titel}</h3>
              <p className="text-sm font-medium text-ink-600">{k.untertitel}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{k.kernfrage}</p>

              <ul className="mt-4 space-y-1.5">
                {k.inhalte.map((i) => (
                  <li key={i.woche} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="mt-0.5 text-brand-turquoise">✓</span>
                    <span>{i.titel}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p className="text-2xl font-bold text-ink-900">{k.preis}</p>
                <p className="mt-1 text-xs text-ink-400">{k.format}</p>
                {k.buchbar && k.buchungsLink ? (
                  <>
                    <Button href={`/kurse/${k.slug}`} className="mt-4 w-full">
                      Kurs ansehen und buchen
                    </Button>
                    {k.hinweis && (
                      <p className="mt-2 text-center text-xs text-ink-400">{k.hinweis}</p>
                    )}
                  </>
                ) : (
                  <p className="mt-4 rounded-xl bg-cream-100 p-3 text-xs leading-relaxed text-ink-500">
                    {k.hinweis}{" "}
                    <Link href="/coaching" className="font-medium text-brand-violet underline underline-offset-2">
                      Zum 1:1
                    </Link>
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-500">
          Live-Gruppe mit Monika: Du bist an vier Abenden dabei, stellst Fragen
          und bekommst persönliches Feedback.
        </p>
      </div>
    </section>
  );
}
