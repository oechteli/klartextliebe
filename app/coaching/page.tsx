import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { OfferSection } from "@/components/sections/OfferSection";
import { DiscoveryCallBanner } from "@/components/sections/DiscoveryCallBanner";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Coaching",
  alternates: { canonical: "/coaching" },
  description:
    "Singlecoaching, Profil- & Chat-Analyse, Dating-Klarheit Paket und VIP-Matchklarheit – für reflektierte Singles mit Anspruch.",
};

const faqs = [
  {
    q: "Wie läuft ein Erstgespräch ab?",
    a: "Das kostenlose 20-Minuten-Gespräch ist ein unverbindliches Kennenlernen. Wir schauen gemeinsam, wo du gerade stehst, was dich aufhält – und ob Coaching sinnvoll ist. Kein Druck, kein Verkaufsgespräch.",
  },
  {
    q: "Welches Paket ist das Richtige für mich?",
    a: "Wenn du schnell Feedback zu deinem Profil oder einer Konversation brauchst, ist die Profil- & Chat-Analyse ein guter Einstieg. Für tiefgehende Begleitung empfehle ich das Singlecoaching 1:1 oder das Dating-Klarheit-Paket. Im Erstgespräch finden wir das gemeinsam heraus.",
  },
  {
    q: "Ist das Coaching auch für Männer?",
    a: "Ja. Klartext Liebe richtet sich an reflektierte Singles – unabhängig vom Geschlecht. Der Ansatz funktioniert für Frauen und Männer gleichermaßen.",
  },
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Coaching"
        title="Begleitung für bewusstere Partnersuche"
        subtitle="Vier Angebote – vom schnellen Feedback bis zur intensiven Begleitung. Persönlich, klar und ohne manipulative Datingtricks."
      />

      <DiscoveryCallBanner />

      {/* Prozessschritte */}
      <section className="section pb-0">
        <div className="container-kl">
          <h2 className="text-center text-2xl font-bold text-ink-900">
            In 3 Schritten zu mehr Klarheit
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Kostenloses Erstgespräch",
                desc: "20 Minuten kennenlernen – unverbindlich. Wir klären, was dich aufhält und welches Angebot passt.",
              },
              {
                step: "2",
                title: "Persönliche Begleitung",
                desc: "Im Coaching oder Analyse-Paket schauen wir gemeinsam hin: Muster, Kommunikation, Auswahl.",
              },
              {
                step: "3",
                title: "Klarheit & Umsetzung",
                desc: "Du gehst mit konkreten Erkenntnissen und nächsten Schritten in deinen Alltag – bewusster und klarer.",
              },
            ].map((s) => (
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
