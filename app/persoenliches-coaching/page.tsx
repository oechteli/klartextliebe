import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Persönliches Coaching – Sessions ohne Abo",
  alternates: { canonical: "/persoenliches-coaching" },
  description:
    "Persönliche 60-Minuten-Sessions mit Monika per Chat, Telefon oder Video. Keine Mitgliedschaft, kein Abo – du kaufst nur, was du brauchst. Einzelsession 89 €, 3er-Paket 219 €, 10er-Paket 649 €.",
};

/**
 * Session-Pakete (Funnel-Angebot, Vorbild Relationship Hero – aber bewusst
 * OHNE Abo-Zwang). Noch keine Stripe-Links: Alle CTAs führen auf das
 * bestehende Kontaktformular („Session anfragen – Antwort innerhalb von 24 h").
 */
const pakete = [
  {
    id: "einzel",
    title: "Einzelsession",
    price: "89 €",
    einheit: "60 Minuten",
    description:
      "Ein Thema, ein Gespräch, klare nächste Schritte. Ideal, um Monika und die Arbeitsweise kennenzulernen.",
    features: [
      "60 Minuten 1:1 mit Monika",
      "Per Chat, Telefon oder Video – du wählst",
      "Konkrete nächste Schritte zum Mitnehmen",
    ],
    highlight: false,
    thema: "Session anfragen – Einzelsession (89 €)",
  },
  {
    id: "dreier",
    title: "3er-Paket",
    price: "219 €",
    einheit: "3 × 60 Minuten · 73 € pro Session",
    description:
      "Dranbleiben statt Strohfeuer: drei Sessions, um ein Thema wirklich zu bewegen – in deinem Tempo.",
    features: [
      "3 Sessions à 60 Minuten",
      "Flexibel terminiert – kein fester Rhythmus",
      "Roter Faden über alle Gespräche",
    ],
    highlight: true,
    thema: "Session anfragen – 3er-Paket (219 €)",
  },
  {
    id: "zehner",
    title: "10er-Paket",
    price: "649 €",
    einheit: "10 × 60 Minuten · 64,90 € pro Session",
    description:
      "Für tiefgreifende Veränderung: intensive Begleitung über mehrere Wochen oder Monate – wann immer du sie brauchst.",
    features: [
      "10 Sessions à 60 Minuten",
      "Bester Preis pro Session",
      "Langfristige Begleitung ohne Bindung",
    ],
    highlight: false,
    thema: "Session anfragen – 10er-Paket (649 €)",
  },
];

const versprechen = [
  {
    title: "Kein Abo, keine Mitgliedschaft",
    desc: "Du kaufst Sessions, keine Verpflichtung. Keine Kündigungsfrist, keine versteckten Folgekosten.",
  },
  {
    title: "Du bestimmst das Tempo",
    desc: "Sessions dann, wenn du sie brauchst – wöchentlich, monatlich oder nach Bedarf.",
  },
  {
    title: "Dein Kanal, deine Wahl",
    desc: "Chat, Telefon oder Video – jede Session so, wie es sich für dich richtig anfühlt.",
  },
];

const ablauf = [
  {
    step: "1",
    title: "Session anfragen",
    desc: "Kurze Nachricht über das Kontaktformular – welches Paket, worum es grob geht.",
  },
  {
    step: "2",
    title: "Antwort innerhalb von 24 h",
    desc: "Monika meldet sich persönlich mit Terminvorschlägen und dem Zahlungslink.",
  },
  {
    step: "3",
    title: "Deine Session",
    desc: "Per Chat, Telefon oder Video – vertraulich, ehrlich und ohne Spielchen.",
  },
];

export default function PersoenlichesCoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Persönliches Coaching"
        title={
          <>
            Persönliche Sessions mit Monika –{" "}
            <span className="text-gradient">ohne Abo</span>.
          </>
        }
        subtitle="Keine Mitgliedschaft, kein Abo – du kaufst nur, was du brauchst. 60-Minuten-Sessions per Chat, Telefon oder Video, einzeln oder im Paket."
      />

      <section className="section pb-0">
        <div className="container-kl">
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {versprechen.map((v) => (
              <div key={v.title}>
                <h3 className="flex items-start gap-2 font-semibold text-ink-900">
                  <span className="mt-0.5 text-brand-turquoise">✓</span>
                  {v.title}
                </h3>
                <p className="mt-1 text-sm text-ink-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-6 md:grid-cols-3">
            {pakete.map((paket) => (
              <Card
                key={paket.id}
                highlight={paket.highlight}
                interactive
                className="flex flex-col"
              >
                {paket.highlight && (
                  <Badge tone="brand" className="absolute -top-3 left-6">
                    Beliebt
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-ink-900">
                  {paket.title}
                </h3>
                <p className="mt-2 text-3xl font-bold text-ink-900">
                  {paket.price}
                </p>
                <p className="mt-1 text-xs font-medium text-ink-400">
                  {paket.einheit}
                </p>
                <p className="mt-3 text-sm text-ink-500">{paket.description}</p>
                <ul className="mt-4 space-y-2">
                  {paket.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <span className="mt-0.5 text-brand-turquoise">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Button
                    href={`/kontakt?thema=${encodeURIComponent(paket.thema)}`}
                    variant={paket.highlight ? "primary" : "outline"}
                    className="w-full"
                  >
                    Session anfragen
                  </Button>
                  <p className="mt-2 text-center text-xs text-ink-400">
                    Antwort innerhalb von 24 h
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-violet/20 bg-brand-violet/5 p-6 text-sm text-ink-600">
            <strong className="text-ink-800">
              Warum wir bewusst auf ein Abo verzichten:
            </strong>{" "}
            Viele Coaching-Plattformen verkaufen Mitgliedschaften, die still
            weiterlaufen. Bei Klartext Liebe entscheidest du bei jeder Session
            neu – das hält uns ehrlich und dich frei.
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-kl">
          <h2 className="text-center text-2xl font-bold text-ink-900">
            So läuft die Buchung ab
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
            {ablauf.map((s) => (
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

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-sm text-ink-500">
              Noch unsicher, ob Coaching das Richtige ist?{" "}
              <Link
                href="/starte-jetzt"
                className="font-medium text-brand-violet underline underline-offset-2"
              >
                Starte kostenlos mit dem KI-Coach
              </Link>{" "}
              oder frage ein{" "}
              <Link
                href="/kontakt?thema=Kostenloses+Erstgespräch"
                className="font-medium text-brand-violet underline underline-offset-2"
              >
                kostenloses Erstgespräch
              </Link>{" "}
              an. Die themenbezogenen Programme findest du unter{" "}
              <Link
                href="/coaching"
                className="font-medium text-brand-violet underline underline-offset-2"
              >
                Coaching
              </Link>
              .
            </p>
            <p className="mt-4 text-xs text-ink-400">
              Hinweis: Coaching ersetzt keine Psychotherapie. Bei akuten
              seelischen Krisen wende dich bitte an ärztliche oder
              therapeutische Hilfe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
