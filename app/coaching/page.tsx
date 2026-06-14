import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { OfferSection } from "@/components/sections/OfferSection";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Singlecoaching, Profil- & Chat-Analyse, Dating-Klarheit Paket und VIP-Matchklarheit – für reflektierte Singles mit Anspruch.",
};

const faqs = [
  {
    q: "Ist das eine Datingstrategie mit Tricks?",
    a: "Nein. Klartext Liebe arbeitet ohne Manipulation. Es geht um Klarheit, Selbstwert und ehrliche Kommunikation – nicht um Spielchen.",
  },
  {
    q: "Für wen ist das Coaching gedacht?",
    a: "Für reflektierte Singles, die mehr suchen als oberflächliches Dating und bereit sind, sich selbst ehrlich anzuschauen.",
  },
  {
    q: "Gibt es eine Garantie, dass ich jemanden finde?",
    a: "Nein – und das wäre unseriös. Wir bieten Orientierung, bessere Passung und bewusstere Partnerwahl, keine Erfolgsgarantie.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching"
        title="Begleitung für bewusstere Partnersuche"
        subtitle="Vier Angebote – vom schnellen Feedback bis zur intensiven Begleitung. Persönlich, klar und ohne manipulative Datingtricks."
      />

      {/* Produktkarten inkl. Stripe-Buttons */}
      <OfferSection withHeading={false} />

      <section className="section pt-0">
        <div className="container-kl">
          <div className="rounded-2xl border border-cream-200 bg-cream-100/60 p-6 text-sm text-ink-500">
            <strong className="text-ink-700">Hinweis zur Buchung:</strong> Die
            Bezahlung läuft über Stripe. Solange noch kein Zahlungslink hinterlegt
            ist, erscheint „Bald buchbar“. Bei der VIP-Begleitung erfolgt die
            Kontaktaufnahme zunächst über das Kontaktformular.
          </div>

          <h2 className="mt-16 text-2xl font-bold text-ink-900">
            Häufige Fragen
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {faqs.map((f) => (
              <Card key={f.q} className="!p-6">
                <h3 className="text-base font-semibold text-ink-900">{f.q}</h3>
                <p className="mt-2 text-sm text-ink-500">{f.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
