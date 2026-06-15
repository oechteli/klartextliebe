import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { MatchingPreview } from "@/components/sections/MatchingPreview";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Kuratierter Marktplatz",
  alternates: { canonical: "/marktplatz" },
  description:
    "Kuratiertes Matching statt endlosem Swipen: Profile mit Tiefgang, Werteabgleich, Kommunikationsstil und Lebensphase – Orientierung statt Garantie.",
};

const criteria = [
  ["Werte", "Was dir im Leben wirklich wichtig ist"],
  ["Lebensphase", "Wo du gerade stehst und wohin du willst"],
  ["Kommunikationsstil", "Wie du in Kontakt gehst und in Verbindung bleibst"],
  ["Denkstil", "Wie du die Welt betrachtest und reflektierst"],
  ["Beziehungsziel", "Was du dir von einer Partnerschaft wünschst"],
  ["Emotionale Reife", "Wie du mit Nähe, Distanz und Konflikt umgehst"],
];

export default function MarktplatzPage() {
  return (
    <>
      <PageHero
        badge="Bald verfügbar"
        title="Ein kuratierter Marktplatz – kein Swipe-Karussell"
        subtitle="Kein Swipe-Marktplatz, sondern eine kuratierte Matching-Plattform für reflektierte Singles mit Tiefe. Profile werden nicht nur nach Foto bewertet."
      />

      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-ink-900">
              Wonach hier wirklich geschaut wird
            </h2>
            <p className="mt-3 text-ink-500">
              Statt oberflächlicher Bewertung zählen die Dimensionen, die echte
              Verbindung tragen. Keine Garantie für perfekte Matches – aber
              bessere Orientierung und bewusstere Begegnungen.
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

      {/* Ablauf */}
      <MatchingPreview />

      <section className="section">
        <div className="container-kl">
          <div className="rounded-3xl bg-brand-gradient px-6 py-14 text-center text-white shadow-card sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Sei dabei, wenn der Marktplatz öffnet
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Trag dich auf die Warteliste ein – wir informieren dich, sobald du
              dein Profil mit Tiefgang anlegen kannst.
            </p>
            <div className="mt-7">
              <Button href="/community" variant="secondary" size="lg">
                Zur Warteliste
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
