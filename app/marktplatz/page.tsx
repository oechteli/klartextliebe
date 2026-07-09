import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { MatchingPreview } from "@/components/sections/MatchingPreview";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Kuratiertes Matching",
  alternates: { canonical: "/marktplatz" },
  description:
    "Kuratiertes Matching statt endlosem Swipen: Profile mit Tiefgang, Werteabgleich, Kommunikationsstil und Lebensphase.",
};

const criteria = [
  ["Werte", "Was dir im Leben wirklich wichtig ist"],
  ["Lebensphase", "Wo du gerade stehst und wohin du willst"],
  ["Kommunikationsstil", "Wie du in Kontakt gehst und in Verbindung bleibst"],
  ["Denkstil", "Wie du die Welt betrachtest und reflektierst"],
  ["Beziehungsziel", "Was du dir von einer Partnerschaft wuenschst"],
  ["Emotionale Reife", "Wie du mit Nähe, Distanz und Konflikt umgehst"],
];

export default function MarktplatzPage() {
  return (
    <>
      <PageHero
        title="Kuratiertes Matching statt Swipe-Karussell"
        subtitle="Keine Swipe-Plattform, sondern persönlich ausgewaehlte Begegnungen für reflektierte Singles. Profile werden nach Tiefe bewertet, nicht nach Foto."
      />

      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-ink-900">
              Wonach hier wirklich geschaut wird
            </h2>
            <p className="mt-3 text-ink-500">
              Statt oberflächlicher Bewertung zaehlen die Dimensionen, die echte
              Verbindung tragen.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {criteria.map(([t, d]) => (
              <Card key={t} className="!p-6" interactive>
                <Badge tone="turquoise" className="mb-3">
                  {t}
                </Badge>
                <p className="text-sm text-ink-500">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MatchingPreview />

      <section className="section">
        <div className="container-kl">
          <div className="rounded-3xl bg-brand-gradient px-6 py-14 text-center text-white shadow-card sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Profil anlegen und Matches erhalten
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Das Matching läuft persönlich und kuratorisch. Schreib uns, wer du
              bist und was du suchst. Monika schaut sich dein Profil an und schlaegt
              passende Menschen vor.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                href="/kontakt?thema=Matching-Profil+anlegen"
                variant="secondary"
                size="lg"
              >
                Profil anlegen
              </Button>
              <Button
                href="/coaching"
                size="lg"
                className="bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25"
              >
                Erst Coaching buchen
              </Button>
            </div>
            <p className="mt-5 text-sm text-white/60">
              Das VIP-Matchklarheit-Paket beinhaltet Matching inklusive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
