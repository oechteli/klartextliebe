import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { OfferSection } from "@/components/sections/OfferSection";
import { DiscoveryCallBanner } from "@/components/sections/DiscoveryCallBanner";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Coaching",
  alternates: { canonical: "/coaching" },
  description:
    "Singlecoaching, Profil- & Chat-Analyse, Dating-Klarheit Paket und VIP-Matchklarheit fuer reflektierte Singles mit Anspruch.",
};

const faqs = [
  {
    q: "Wie laeuft ein Erstgespraech ab?",
    a: "Das kostenlose 20-Minuten-Gespraech ist ein unverbindliches Kennenlernen. Wir schauen gemeinsam, wo du gerade stehst, was dich aufhaelt und ob Coaching sinnvoll ist. Kein Druck, kein Verkaufsgespraech.",
  },
  {
    q: "Welches Paket ist das Richtige fuer mich?",
    a: "Wenn du schnell Feedback zu deinem Profil oder einer Konversation brauchst, ist die Profil- & Chat-Analyse ein guter Einstieg. Fuer tiefgehende Begleitung empfehle ich das Singlecoaching 1:1 oder das Dating-Klarheit-Paket. Im Erstgespraech finden wir das gemeinsam heraus.",
  },
  {
    q: "Ist das Coaching auch fuer Maenner?",
    a: "Ja. Klartext Liebe richtet sich an reflektierte Singles, unabhaengig vom Geschlecht. Der Ansatz funktioniert fuer Frauen und Maenner gleichermassen.",
  },
  {
    q: "Ist das eine Datingstrategie mit Tricks?",
    a: "Nein. Klartext Liebe arbeitet ohne Manipulation. Es geht um Klarheit, Selbstwert und ehrliche Kommunikation, nicht um Spielchen.",
  },
  {
    q: "Fuer wen ist das Coaching gedacht?",
    a: "Fuer reflektierte Singles, die mehr suchen als oberflaechliches Dating und bereit sind, sich selbst ehrlich anzuschauen.",
  },
  {
    q: "Gibt es eine Garantie, dass ich jemanden finde?",
    a: "Nein, und das waere unserios. Wir bieten Orientierung, bessere Passung und bewusstere Partnerwahl, keine Erfolgsgarantie.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const steps = [
  {
    step: "1",
    title: "Kostenloses Erstgespraech",
    desc: "20 Minuten kennenlernen, unverbindlich. Wir klaeren, was dich aufhaelt und welches Angebot passt.",
  },
  {
    step: "2",
    title: "Persoenliche Begleitung",
    desc: "Im Coaching oder Analyse-Paket schauen wir gemeinsam hin: Muster, Kommunikation, Auswahl.",
  },
  {
    step: "3",
    title: "Klarheit & Umsetzung",
    desc: "Du gehst mit konkreten Erkenntnissen und naechsten Schritten in deinen Alltag.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Coaching"
        title="Begleitung fuer bewusstere Partnersuche"
        subtitle="Vier Angebote, vom schnellen Feedback bis zur intensiven Begleitung. Persoenlich, klar und ohne manipulative Datingtricks."
      />

      <DiscoveryCallBanner />

      <section className="section pb-0">
        <div className="container-kl">
          <h2 className="text-center text-2xl font-bold text-ink-900">
            In 3 Schritten zu mehr Klarheit
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfferSection withHeading={false} />

      <section className="section pt-0">
        <div className="container-kl">
          <div className="rounded-2xl border border-brand-teal/20 bg-brand-teal/5 p-6 text-sm text-ink-600">
            <strong className="text-ink-800">So laeuft die Buchung ab:</strong>{" "}
            Klick auf den Button, kurze Nachricht ueber das Kontaktformular. Monika
            meldet sich persoenlich innerhalb von 24 Stunden mit den naechsten
            Schritten und dem Zahlungslink.
          </div>

          <h2 className="mt-16 text-2xl font-bold text-ink-900">
            Haeufige Fragen
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
