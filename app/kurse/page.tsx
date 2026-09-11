import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { kursBundle } from "@/lib/kurse";

export const metadata: Metadata = {
  title: "Kurse – Klartext Start, Wirkung, Vom Date zur Beziehung",
  alternates: { canonical: "/kurse" },
  description:
    "Drei Kurse für Singles, die eine Beziehung wollen: Klartext Start (Live-Gruppe, 149 €), Wirkung und Vom Date zur Beziehung. Ehrlich, ohne Tricks, ohne Abo.",
};

const ablauf = [
  ["Anmeldung", "Du meldest dich direkt online an und bezahlst sicher über Stripe. Kein Abo, keine Verlängerung, Rechnung per Mail."],
  ["Rückmeldung", "Ich melde mich in der Regel innerhalb von 24 Stunden mit den Terminen der vier Abende."],
  ["Vorher unsicher?", "Schreib mir über das Kontaktformular, 15 Minuten per Telefon oder Video reichen: Passt der Kurs zu dir? Wenn nicht, sage ich es."],
  ["Los geht's", "Workbook vorab, dann vier Abende in kleiner Runde. Aufzeichnung für dich zum Nachschauen."],
];

export default function KursePage() {
  return (
    <>
      <PageHero
        eyebrow="Kurse"
        title="Der Klartext-Weg in drei Kursen"
        subtitle="Kurs 1 startet als Live-Gruppe mit mir. Kurs 2 und 3 folgen als Videokurse, sobald die erste Gruppe gelaufen ist. Bis dahin gibt es ihre Themen im 1:1."
      />

      <CoursesSection withHeading={false} />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">So läuft die Buchung</h2>
              <ol className="mt-6 space-y-5">
                {ablauf.map(([t, d], i) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900">{t}</p>
                      <p className="mt-1 text-sm text-ink-500">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <Card className="!p-6 sm:!p-8">
              <h2 className="text-xl font-bold text-ink-900">Alle drei Kurse</h2>
              <p className="mt-2 text-3xl font-bold text-ink-900">{kursBundle.preis}</p>
              <p className="mt-2 text-sm text-ink-500">{kursBundle.text}</p>
              <p className="mt-4 rounded-xl bg-cream-100 p-3 text-xs leading-relaxed text-ink-500">
                Heute buchbar ist Kurs 1. Wer ihn gebucht hat, bekommt das Bundle
                später zum Differenzpreis.
              </p>
              <div className="mt-6">
                <Button href="/kurse/klartext-start" className="w-full">
                  Mit Kurs 1 starten
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
