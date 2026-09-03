import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { OfferSection } from "@/components/sections/OfferSection";
import { DiscoveryCallBanner } from "@/components/sections/DiscoveryCallBanner";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Coaching – Formate, Ablauf & Preise",
  alternates: { canonical: "/coaching" },
  description:
    "Coaching bei Klartext Liebe: schriftliche Profil- & Chat-Analyse (79 €), Einzelgespräch 60 Min (119 €), Paargespräch 90 Min (169 €), Dating-Klarheit-Programm (399 €) und Intensivbegleitung (799 €). Ablauf, Dauer und Buchung transparent erklärt.",
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.klartext-liebe.de";

const faqs = [
  {
    q: "Wie läuft ein Erstgespräch ab?",
    a: "Das kostenlose 20-Minuten-Gespräch ist ein unverbindliches Kennenlernen. Wir schauen gemeinsam, wo du gerade stehst, was dich aufhält und ob Coaching sinnvoll ist. Kein Druck, kein Verkaufsgespräch.",
  },
  {
    q: "Welches Format ist das Richtige für mich?",
    a: "Wenn du schnell Feedback zu deinem Profil oder einer Konversation brauchst, ist die schriftliche Profil- & Chat-Analyse ein guter Einstieg. Für ein konkretes Thema passt das Einzelgespräch, für Muster, die sich wiederholen, das Dating-Klarheit-Programm. Im Erstgespräch finden wir das gemeinsam heraus.",
  },
  {
    q: "Ist das Coaching auch für Männer?",
    a: "Ja. Klartext Liebe richtet sich an reflektierte Singles, unabhängig vom Geschlecht. Der Ansatz funktioniert für Frauen und Männer gleichermaßen.",
  },
  {
    q: "Ist das eine Datingstrategie mit Tricks?",
    a: "Nein. Klartext Liebe arbeitet ohne Manipulation. Es geht um Klarheit, Selbstwert und ehrliche Kommunikation, nicht um Spielchen.",
  },
  {
    q: "Für wen ist das Coaching gedacht?",
    a: "Für reflektierte Singles, die mehr suchen als oberflächliches Dating und bereit sind, sich selbst ehrlich anzuschauen.",
  },
  {
    q: "Gibt es eine Garantie, dass ich jemanden finde?",
    a: "Nein, und das wäre unseriös. Wir bieten Orientierung, bessere Passung und bewusstere Partnerwahl, keine Erfolgsgarantie.",
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
    title: "Kostenloses Erstgespräch",
    desc: "20 Minuten kennenlernen, unverbindlich. Wir klären, was dich aufhält und welches Format passt.",
  },
  {
    step: "2",
    title: "Persönliche Begleitung",
    desc: "Im Gespräch oder in der schriftlichen Analyse schauen wir gemeinsam hin: Muster, Kommunikation, Auswahl.",
  },
  {
    step: "3",
    title: "Klarheit & Umsetzung",
    desc: "Du gehst mit konkreten Erkenntnissen und nächsten Schritten in deinen Alltag.",
  },
];

/**
 * Leistungsübersicht je Format (seit 02.09.2026).
 * Preise nach Entscheidung der Inhaberin vom 02.09.2026:
 *   Einzelgespräch 60 Min einheitlich 119 € (Altwerte: 149 € hier, 89 € auf
 *   /persoenliches-coaching), Paargespräch 90 Min 169 € (neu), schriftliche
 *   Analyse 79 € (unverändert – das war das bisherige 79-€-Format), Programme
 *   399 € / 799 € unverändert.
 */
const formate = [
  {
    id: "analyse",
    format: "Schriftliche Analyse",
    name: "Profil- & Chat-Analyse",
    fuerWen: "Wenn Gespräche immer wieder abbrechen oder dein Profil nicht die Richtigen anzieht.",
    ablauf: "Du reichst dein Datingprofil oder einen anonymisierten Chatverlauf ein. Du bekommst schriftliches Feedback: was gut wirkt, wo es kippt, was du konkret ändern kannst.",
    dauer: "Schriftlich, ohne Termin",
    preis: "79 €",
    thema: "Buchung Profil & Chat-Analyse (79 €)",
  },
  {
    id: "einzelgespraech",
    format: "Einzelgespräch",
    name: "Singlecoaching 1:1",
    fuerWen: "Ein konkretes Thema: Kennenlernphase, Kommunikation, Selbstwert, Partnerwahl.",
    ablauf: "60 Minuten persönliches Gespräch mit Monika – per Video, Telefon oder Chat, du wählst. Fokus auf dein Thema, am Ende klare nächste Schritte. Derselbe Preis wie eine Einzelsession im Persönlichen Coaching.",
    dauer: "1 × 60 Minuten",
    preis: "119 €", // Altwert: 149 €
    thema: "Buchung Singlecoaching 1:1 (119 €)",
    empfohlen: true,
  },
  {
    id: "paargespraech",
    format: "Paargespräch",
    name: "Paargespräch zu zweit",
    fuerWen: "Für Paare, die aneinander vorbeireden, im Kreis streiten oder klären wollen, wie es weitergeht – auch nach einer Krise oder vor einer Entscheidung.",
    ablauf: "90 Minuten mit euch beiden und Monika, online per Video. Moderiert, ohne Schuldzuweisung: Jede und jeder kommt zu Wort, am Ende steht ein gemeinsamer nächster Schritt. Kein Ersatz für Paartherapie – bei tiefen Verletzungen oder Gewalt empfehle ich offen therapeutische Hilfe.",
    dauer: "1 × 90 Minuten",
    preis: "169 €",
    thema: "Buchung Paargespräch 90 Minuten (169 €)",
    neu: true,
  },
  {
    id: "programm",
    format: "Programm",
    name: "Dating-Klarheit-Paket",
    fuerWen: "Wenn sich Muster wiederholen und du sie wirklich verändern willst.",
    ablauf: "Drei Coachinggespräche, verteilt über mehrere Wochen: Muster verstehen, klarer kommunizieren, bewusster auswählen – mit rotem Faden zwischen den Terminen.",
    dauer: "3 Gespräche über mehrere Wochen",
    preis: "399 €",
    thema: "Buchung Dating-Klarheit-Paket (399 €)",
  },
  {
    id: "intensiv",
    format: "Intensivbegleitung",
    name: "VIP-Matchklarheit",
    fuerWen: "Für reflektierte Singles mit Anspruch, die alles in einer Begleitung wollen.",
    ablauf: "Persönlichkeits- & Resonanzanalyse, Profil- und Chatfeedback und eine individuelle Datingstrategie – Gespräche nach Vereinbarung. Umfang klären wir im Erstgespräch.",
    dauer: "Mehrere Wochen, individuell",
    preis: "799 €",
    thema: "Buchung VIP-Matchklarheit (799 €)",
  },
];

// Strukturierte Daten zu den Formaten (schema.org Service + Offer, Preise in EUR).
const angeboteJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/coaching#service`,
  name: "Singlecoaching & Paargespräch – Klartext Liebe",
  serviceType: "Beziehungs- und Singlecoaching",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: "DE",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${SITE_URL}/kontakt`,
    availableLanguage: "de",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Coaching-Formate",
    itemListElement: formate.map((f) => ({
      "@type": "Offer",
      name: `${f.name} (${f.format})`,
      description: f.ablauf,
      price: f.preis.replace(/[^\d]/g, ""),
      priceCurrency: "EUR",
      url: `${SITE_URL}/coaching#${f.id}`,
      availability: "https://schema.org/InStock",
    })),
  },
};

export default function CoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqJsonLd, angeboteJsonLd]),
        }}
      />
      <PageHero
        eyebrow="Coaching"
        title="Begleitung für bewusstere Partnersuche – und fürs Miteinander"
        subtitle="Fünf Formate, vom schnellen schriftlichen Feedback über das Einzel- und Paargespräch bis zur intensiven Begleitung. Persönlich, klar und ohne manipulative Datingtricks – Preise und Ablauf stehen offen hier."
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

      {/* Leistungsübersicht je Format */}
      <section className="section pb-0">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Formate im Überblick</p>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">
              Welches Format passt zu dir?
            </h2>
            <p className="mt-4 text-ink-500">
              Jedes Format hat einen klaren Zweck, eine klare Dauer und einen
              klaren Preis. Buchung immer persönlich über das Kontaktformular –
              bewusst ohne Sofortkauf.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {formate.map((f) => (
              <Card
                key={f.name}
                highlight={f.empfohlen}
                className="flex scroll-mt-24 flex-col !p-6 sm:!p-7"
              >
                <div id={f.id} className="flex flex-wrap items-center gap-2">
                  <Badge tone="brand">{f.format}</Badge>
                  {f.empfohlen && <Badge tone="turquoise">Guter Einstieg</Badge>}
                  {f.neu && <Badge tone="pink">Neu</Badge>}
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink-900">{f.name}</h3>
                  <p className="shrink-0 text-2xl font-bold text-ink-900">{f.preis}</p>
                </div>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-ink-800">Für wen</dt>
                    <dd className="mt-0.5 text-ink-500">{f.fuerWen}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink-800">Ablauf</dt>
                    <dd className="mt-0.5 text-ink-500">{f.ablauf}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    <div>
                      <dt className="inline font-semibold text-ink-800">Dauer: </dt>
                      <dd className="inline text-ink-500">{f.dauer}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-ink-800">Buchung: </dt>
                      <dd className="inline text-ink-500">per Kontaktformular</dd>
                    </div>
                  </div>
                </dl>
                <div className="mt-5">
                  <Link
                    href={`/kontakt?thema=${encodeURIComponent(f.thema)}`}
                    className="text-sm font-semibold text-brand-violet underline-offset-4 hover:underline"
                  >
                    {f.name} anfragen →
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-brand-violet/20 bg-brand-violet/5 p-6 text-sm text-ink-600">
            <strong className="text-ink-800">Lieber einzelne Sessions statt Programm?</strong>{" "}
            Beim{" "}
            <Link
              href="/persoenliches-coaching"
              className="font-medium text-brand-violet underline underline-offset-2"
            >
              Persönlichen Coaching
            </Link>{" "}
            buchst du 60-Minuten-Sessions mit Monika per Chat, Telefon oder
            Video – einzeln (119 €, derselbe Preis wie das Einzelgespräch) oder
            im 3er- (219 €) bzw. 10er-Paket (649 €), ohne Mitgliedschaft, ohne
            Abo. Oder du{" "}
            <Link
              href="/starte-jetzt"
              className="font-medium text-brand-violet underline underline-offset-2"
            >
              startest kostenlos mit dem KI-Coach
            </Link>
            .
          </div>
        </div>
      </section>

      <OfferSection withHeading={false} />

      <section className="section pt-0">
        <div className="container-kl">
          <div className="rounded-2xl border border-brand-teal/20 bg-brand-teal/5 p-6 text-sm text-ink-600">
            <strong className="text-ink-800">So läuft die Buchung ab:</strong>{" "}
            Klick auf den Button, kurze Nachricht über das Kontaktformular. Monika
            meldet sich persönlich, in der Regel innerhalb von 24 Stunden, mit
            den nächsten Schritten und dem Zahlungslink. Der Vertrag kommt erst
            mit ihrer Bestätigung zustande – keine automatische Sofortbuchung,
            keine Verlängerung.
          </div>

          <div className="mt-6 rounded-2xl border border-cream-200 bg-white p-6 text-sm text-ink-600">
            <strong className="text-ink-800">Coaching ist keine Therapie.</strong>{" "}
            Wir arbeiten an Dating, Kommunikation und Selbstwert im Alltag. Bei
            tieferliegenden seelischen Belastungen sagen wir das offen und
            empfehlen ärztliche oder psychotherapeutische Hilfe. In einer akuten
            Krise: Telefonseelsorge <strong>0800 111 0 111</strong> oder{" "}
            <strong>0800 111 0 222</strong> (kostenlos, rund um die Uhr), in
            Notfällen die 112.
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
          <p className="mt-6 text-sm text-ink-500">
            Mehr Antworten – auch zu Kosten und Seriosität – findest du auf der{" "}
            <Link
              href="/faq"
              className="font-medium text-brand-violet underline underline-offset-2"
            >
              FAQ-Seite
            </Link>
            . Den kompletten Ablauf erklärt{" "}
            <Link
              href="/so-funktionierts"
              className="font-medium text-brand-violet underline underline-offset-2"
            >
              So funktioniert&apos;s
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
