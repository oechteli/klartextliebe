import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { MatchmakingSection } from "@/components/sections/MatchmakingSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Partnervermittlung – persönlich statt per Algorithmus",
  alternates: { canonical: "/partnervermittlung" },
  description:
    "Monika stellt Menschen persönlich einander vor: heute für Kundinnen und Kunden der Intensivbegleitung, später als eigene Vermittlung mit Aufnahmegespräch. Kein Pool, kein Versprechen.",
};

/**
 * Partnervermittlung, Stufe 1 (Relaunch 07.09.2026).
 * Stufe 2 (eigene Vermittlung mit Bewerbung, Aufnahmegespräch, Aufnahmegebühr
 * und Erfolgsvereinbarung) folgt, sobald genug Menschen dabei sind. Rechtlich
 * dann zu beachten: § 656 BGB, Art. 9 DSGVO, eigene AGB.
 */
const stufen = [
  {
    badge: "Heute",
    tone: "brand" as const,
    titel: "Vorstellung aus meinem Umfeld",
    text: "Wer mit mir in der Intensivbegleitung arbeitet, den kenne ich gut: Werte, Lebensphase, Art zu reden, Wünsche. Wenn ich in meinem Umfeld jemanden sehe, der passen könnte, frage ich beide und stelle euch vor, wenn ihr wollt.",
    punkte: ["Persönlich, nicht per Datenbank", "Nur mit Zustimmung beider Seiten", "Keine Zusatzkosten in der Intensivbegleitung", "Keine Quote, kein Versprechen"],
  },
  {
    badge: "Später",
    tone: "soon" as const,
    titel: "Eigene Vermittlung mit Aufnahmegespräch",
    text: "Sobald genug Menschen dabei sind, öffne ich die Vermittlung als eigenes Angebot: Bewerbung, persönliches Aufnahmegespräch, klare Regeln, faire Vergütung. Erst dann steht hier ein Formular.",
    punkte: ["Aufnahme nur nach Gespräch", "Diskretion als Grundregel", "Eigene AGB und Datenschutzregeln", "Kein Start vor der ersten Kursgruppe"],
  },
];

export default function PartnervermittlungPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnervermittlung"
        title="Ich stelle Menschen einander vor. Seit Jahrzehnten."
        subtitle="Man nannte mich die Kupplerin, lange bevor es Klartext Liebe gab. Was ich damals im Freundeskreis gemacht habe, mache ich heute für die Menschen, mit denen ich arbeite."
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-6 md:grid-cols-2">
            {stufen.map((s) => (
              <Card key={s.titel} className="!p-6 sm:!p-8">
                <Badge tone={s.tone}>{s.badge}</Badge>
                <h2 className="mt-3 text-xl font-bold text-ink-900">{s.titel}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.text}</p>
                <ul className="mt-5 space-y-2">
                  {s.punkte.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                      <span className="mt-0.5 text-brand-turquoise">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-brand-soft p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold text-ink-900">Der Weg dorthin führt über das Kennenlernen</h2>
            <p className="mx-auto mt-3 max-w-2xl text-ink-600">
              Ich stelle niemanden vor, den ich nicht kenne. Darum beginnt jede
              Vermittlung mit Coaching: Erst verstehe ich, wer du bist und wen
              du suchst. Dann halte ich die Augen offen.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/coaching#vip-matchklarheit">Intensivbegleitung ansehen</Button>
              <Button href="/kontakt?thema=Kostenloses+Erstgespräch" variant="secondary">
                Erst unverbindlich sprechen
              </Button>
            </div>
            <p className="mt-5 text-xs text-ink-400">
              Der frühere Plan eines kuratierten Matchings mit Vormerkung bleibt
              unter{" "}
              <Link href="/marktplatz" className="underline underline-offset-2">
                Kuratiertes Matching
              </Link>{" "}
              nachlesbar.
            </p>
          </div>
        </div>
      </section>

      <MatchmakingSection />
    </>
  );
}
