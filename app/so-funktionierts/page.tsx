import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { DiscoveryCallBanner } from "@/components/sections/DiscoveryCallBanner";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "So funktioniert's",
  alternates: { canonical: "/so-funktionierts" },
  description:
    "Vom kostenlosen Erstgespräch bis zur Umsetzung: So läuft die Zusammenarbeit bei Klartext Liebe ab – transparent, persönlich und ohne Verkaufsdruck.",
};

const schritte = [
  {
    nr: "1",
    title: "Kostenloses Erstgespräch",
    zeit: "ca. 20 Minuten · unverbindlich",
    text: "Du schreibst eine kurze Nachricht über das Kontaktformular, Monika meldet sich persönlich innerhalb von 24 Stunden. Im Gespräch klären wir, wo du stehst, was dich aufhält und ob Coaching für dich sinnvoll ist. Kein Verkaufsgespräch, kein Druck – wenn es nicht passt, sagen wir das ehrlich.",
  },
  {
    nr: "2",
    title: "Passendes Angebot wählen",
    zeit: "gemeinsam im Gespräch",
    text: "Auf Basis des Erstgesprächs empfehlen wir das Format, das wirklich zu deinem Thema passt – von der schriftlichen Profil- & Chat-Analyse (79 €) über das Singlecoaching 1:1 (149 €) bis zum Dating-Klarheit-Paket (399 €) oder der VIP-Matchklarheit (799 €). Du entscheidest in Ruhe; den Zahlungslink bekommst du erst danach.",
  },
  {
    nr: "3",
    title: "Persönliche Begleitung",
    zeit: "online per Video oder schriftlich",
    text: "Jetzt geht es in die Tiefe: Muster verstehen, Kommunikation schärfen, Auswahl bewusster treffen. Die Gespräche finden bequem online statt, die Analyse bekommst du schriftlich. Alles, was du teilst, bleibt vertraulich.",
  },
  {
    nr: "4",
    title: "Klarheit & Umsetzung",
    zeit: "dein Alltag, deine Schritte",
    text: "Du gehst mit konkreten Erkenntnissen und nächsten Schritten in dein Dating-Leben – und entscheidest selbst, ob du zusätzlich Community, Events oder das kuratierte Matching nutzen möchtest. Kein Abo, keine versteckten Verlängerungen.",
  },
];

const prinzipien = [
  {
    title: "Orientierung statt Garantie",
    text: "Niemand kann dir seriös versprechen, dass du in X Wochen die Liebe deines Lebens findest – wir auch nicht. Was wir versprechen können: ehrliches Feedback, Klarheit über deine Muster und bessere Entscheidungen.",
  },
  {
    title: "Keine Tricks, keine Spielchen",
    text: "Bei uns gibt es keine Pick-up-Taktiken und keine Manipulationsstrategien. Der Ansatz: Selbstwert, ehrliche Kommunikation und bewusste Partnerwahl – für Frauen und Männer gleichermaßen.",
  },
  {
    title: "Vertraulich und auf Augenhöhe",
    text: "Chatverläufe und Profile werden anonymisiert behandelt, persönliche Themen bleiben im Gespräch. Du bekommst eine ehrliche Einschätzung – wohlwollend formuliert, aber ohne Schönfärberei.",
  },
  {
    title: "Coaching ist keine Therapie",
    text: "Wir arbeiten an Dating, Kommunikation und Selbstwert im Alltag. Bei tieferliegenden seelischen Belastungen sagen wir das offen und empfehlen professionelle therapeutische Unterstützung.",
  },
];

export default function SoFunktioniertsPage() {
  return (
    <>
      <PageHero
        eyebrow="So funktioniert's"
        title="Transparent von der ersten Nachricht bis zur Umsetzung"
        subtitle="Kein Abo-Labyrinth, keine Verkaufsmaschinerie: vier klare Schritte, bei denen du jederzeit weißt, woran du bist."
      />

      <DiscoveryCallBanner />

      {/* Ablauf */}
      <section className="section">
        <div className="container-kl">
          <h2 className="text-2xl font-bold text-ink-900">
            Der Ablauf in vier Schritten
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {schritte.map((s) => (
              <Card key={s.nr} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-base font-bold text-white">
                    {s.nr}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">
                      {s.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-brand-violet">
                      {s.zeit}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-teal/20 bg-brand-teal/5 p-6 text-sm text-ink-600">
            <strong className="text-ink-800">Gut zu wissen:</strong> Die
            Buchung läuft bewusst persönlich – erst Nachricht über das{" "}
            <Link
              href="/kontakt"
              className="font-medium text-brand-violet underline underline-offset-2"
            >
              Kontaktformular
            </Link>
            , dann Rückmeldung mit den nächsten Schritten und dem
            Zahlungslink. Es gibt keine automatische Sofortbuchung und keine
            versteckten Kosten.
          </div>
        </div>
      </section>

      {/* Prinzipien */}
      <section className="section bg-cream-100/60 pt-14">
        <div className="container-kl">
          <h2 className="text-2xl font-bold text-ink-900">
            Wofür wir stehen – und wofür nicht
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {prinzipien.map((p) => (
              <Card key={p.title} className="!p-6">
                <h3 className="text-base font-semibold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {p.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Abschluss */}
      <section className="section">
        <div className="container-kl text-center">
          <h2 className="text-2xl font-bold text-ink-900">
            Noch Fragen offen?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink-500">
            Antworten zu Kosten, Seriosität und Ablauf findest du in den FAQ.
            Oder du fragst direkt das kostenlose Erstgespräch an – die
            schnellste Art herauszufinden, ob es passt.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button href="/kontakt?thema=Kostenloses+Erstgespräch">
              Kostenloses Erstgespräch
            </Button>
            <Button href="/faq" variant="secondary">
              Zu den FAQ
            </Button>
            <Button href="/coaching" variant="ghost">
              Alle Angebote ansehen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
