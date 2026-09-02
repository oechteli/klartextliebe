import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { events } from "@/lib/mock-data";

/**
 * Live-Treffen-Teaser.
 * Stand 02.09.2026: Es gibt noch keine terminierten Events. Die Einträge in
 * lib/mock-data.ts sind Format-Ideen. Sie werden hier ausdrücklich als
 * „geplantes Format" gezeigt – ohne Städte-Badges, die laufende
 * Veranstaltungen suggerieren, und ohne Anmelde-Button pro Karte.
 *
 * Archiv: Badge zeigte Stadt bzw. "Online", Datum "Termin folgt",
 * Button "Interesse anmelden" pro Karte.
 */
interface EventPreviewProps {
  preview?: boolean;
}

export function EventPreview({ preview = false }: EventPreviewProps) {
  const items = preview ? events.slice(0, 3) : events;

  return (
    <section className="section">
      <div className="container-kl">
        <SectionHeading
          eyebrow="Live-Treffen · in Vorbereitung"
          title="Echte Begegnungen – online und in Städten"
          subtitle="Moderierte Single-Abende, Deep-Talk-Events und Kennenlernformate für reflektierte Singles. Noch ohne Termine – diese Formate planen wir."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((ev) => (
            <Card key={ev.id} className="flex flex-col">
              <div className="flex items-center justify-between">
                <Badge tone="soon">Geplantes Format</Badge>
                <span className="text-xs text-ink-400">
                  {ev.isOnline ? "online" : "vor Ort"}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                {ev.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500">
                {ev.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/events" variant="outline">
            {preview ? "Für Events vormerken" : "Jetzt vormerken"}
          </Button>
          <p className="mt-3 text-xs text-ink-400">
            Wir melden uns, sobald ein erster Termin feststeht. Kein Newsletter,
            keine Werbung.
          </p>
        </div>
      </div>
    </section>
  );
}
