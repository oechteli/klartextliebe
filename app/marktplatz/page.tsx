import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { MatchingPreview } from "@/components/sections/MatchingPreview";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Kuratiertes Matching – in Vorbereitung",
  alternates: { canonical: "/marktplatz" },
  description:
    "Kuratiertes Matching statt endlosem Swipen ist in Vorbereitung: Profile mit Tiefgang, Werteabgleich, Kommunikationsstil und Lebensphase. Jetzt unverbindlich vormerken.",
};

/**
 * Stand 02.09.2026: Es gibt keinen Teilnehmerpool und keine
 * Matching-Funktion. Die Seite erklärt den geplanten Ansatz und bietet eine
 * Vormerkung. Bewusst entfernt: „Profil anlegen und Matches erhalten",
 * „Monika schaut sich dein Profil an und schlägt passende Menschen vor",
 * „Das VIP-Matchklarheit-Paket beinhaltet Matching inklusive".
 * (VIP-Matchklarheit ist ein Coaching-Paket; ein Matching kann erst
 * versprochen werden, wenn es Teilnehmende gibt.)
 */

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
        badge="In Vorbereitung"
        eyebrow="Kuratiertes Matching"
        title="Kuratiertes Matching statt Swipe-Karussell"
        subtitle="Keine Swipe-Plattform, sondern persönlich ausgewählte Begegnungen für reflektierte Singles – so der Plan. Das Matching startet mit unserer Lernplattform, sobald genug Menschen vorgemerkt sind, damit es ehrlich funktioniert."
      />

      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-ink-900">
              Wonach hier einmal geschaut wird
            </h2>
            <p className="mt-3 text-ink-500">
              Statt oberflächlicher Bewertung zählen die Dimensionen, die echte
              Verbindung tragen.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {criteria.map(([t, d]) => (
              <Card key={t} className="!p-6">
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
          <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">
                Warum wir hier ehrlich bleiben
              </h2>
              <p className="mt-3 text-ink-500">
                Ein Matching lebt davon, dass es genug passende Menschen gibt.
                Solange das nicht der Fall ist, versprechen wir keine
                Vorschläge. Was du heute bekommst, ist Coaching: Klarheit über
                deine Muster, deine Kommunikation und deine Auswahl – die beste
                Vorbereitung auf jede Begegnung.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/coaching">Coaching ansehen</Button>
                <Button href="/analyse" variant="secondary">
                  Persönlichkeitsanalyse starten
                </Button>
              </div>
            </div>

            <Card className="!p-6 sm:!p-8">
              <Badge tone="soon" className="mb-3">
                Unverbindliche Vormerkung
              </Badge>
              <h2 className="text-2xl font-bold text-ink-900">
                Fürs Matching vormerken
              </h2>
              <p className="mt-2 text-ink-500">
                Schreib in zwei, drei Sätzen, wer du bist und wen du suchst. Das
                ist noch kein Profil und keine Zusage – nur ein Signal, dass du
                dabei sein möchtest, wenn es startet.
              </p>
              <div className="mt-6">
                <ContactForm
                  standardAnliegen="Vormerkung Matching"
                  standardNachricht={
                    "Ich möchte mich für das kuratierte Matching vormerken.\n\nKurz zu mir: \nWen ich suche: "
                  }
                  buttonText="Vormerken"
                  erfolgText="Du bist vorgemerkt. Wir melden uns persönlich, sobald das Matching startet."
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
