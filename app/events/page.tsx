import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { events } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Events & Live-Treffen – in Vorbereitung",
  alternates: { canonical: "/events" },
  description:
    "Moderierte Online-Treffen und lokale Deep-Talk-Abende für reflektierte Singles sind in Vorbereitung. Jetzt unverbindlich vormerken und den ersten Termin nicht verpassen.",
};

/**
 * Stand 02.09.2026: Es gibt noch keine terminierten Veranstaltungen. Die
 * Einträge in lib/mock-data.ts sind Format-Ideen und werden hier als
 * solche gezeigt. Anmeldung = Vormerkung über das Kontaktformular.
 *
 * Archiv (nicht mehr verwendet): Karten mit Städte-Badge (Karlsruhe,
 * Berlin, München, Hamburg), Datum "Termin folgt" und Button
 * "Interesse anmelden" → /kontakt.
 */

const formats = [
  "Online-Treffen",
  "Lokale Treffen in Städten",
  "Moderierte Single-Abende",
  "Kennenlernabende",
  "Deep-Talk-Events",
  "Kommunikationsübungen",
  "Themenabende",
  "Begegnungsformate für reflektierte Singles",
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        badge="In Vorbereitung"
        eyebrow="Live-Treffen"
        title="Echte Begegnungen statt endlosem Swipen"
        subtitle="Moderierte Online-Treffen und lokale Events – für Gespräche, die in die Tiefe gehen. Termine gibt es noch keine; die Formate starten mit unserer Lernplattform. Wer sich vormerkt, erfährt den ersten Termin zuerst."
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr]">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">
                Formate, die wir planen
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Ideen, keine Termine. Welche Formate zuerst starten und in
                welchen Städten, hängt davon ab, wer sich vormerkt – sag uns
                gern, was dich interessiert.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {formats.map((f) => (
                  <Badge key={f} tone="neutral">
                    {f}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {events.map((ev) => (
                  <Card key={ev.id} className="flex flex-col !p-6">
                    <div className="flex items-center justify-between">
                      <Badge tone="soon">Geplantes Format</Badge>
                      <span className="text-xs text-ink-400">
                        {ev.isOnline ? "online" : "vor Ort"}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-ink-900">
                      {ev.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-ink-500">
                      {ev.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="!p-6 sm:!p-8 lg:sticky lg:top-24">
                <Badge tone="soon" className="mb-3">
                  Unverbindliche Vormerkung
                </Badge>
                <h2 className="text-2xl font-bold text-ink-900">
                  Für Events vormerken
                </h2>
                <p className="mt-2 text-ink-500">
                  Schreib uns, welches Format dich reizt und in welcher Region
                  du bist. Wir melden uns, sobald ein erster Termin feststeht.
                </p>
                <div className="mt-6">
                  <ContactForm
                    standardAnliegen="Vormerkung Events"
                    standardNachricht={
                      "Ich möchte mich für Live-Treffen vormerken.\n\nFormat, das mich interessiert: \nMeine Region / online: "
                    }
                    buttonText="Vormerken"
                    erfolgText="Du bist vorgemerkt. Wir melden uns, sobald ein erster Termin feststeht."
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
