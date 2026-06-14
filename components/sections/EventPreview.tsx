import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { events } from "@/lib/mock-data";

interface EventPreviewProps {
  preview?: boolean;
}

export function EventPreview({ preview = false }: EventPreviewProps) {
  const items = preview ? events.slice(0, 3) : events;

  return (
    <section className="section">
      <div className="container-kl">
        <SectionHeading
          eyebrow="Live-Treffen"
          title="Echte Begegnungen – online und in Städten"
          subtitle="Moderierte Single-Abende, Deep-Talk-Events und Kennenlernformate für reflektierte Singles."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((ev) => (
            <Card key={ev.id} interactive className="flex flex-col">
              <div className="flex items-center justify-between">
                <Badge tone={ev.isOnline ? "turquoise" : "brand"}>
                  {ev.isOnline ? "Online" : ev.location}
                </Badge>
                <span className="text-xs text-ink-400">{ev.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                {ev.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500">
                {ev.description}
              </p>
              <div className="mt-5">
                <Button href="/events" variant="outline" size="sm" className="w-full">
                  Interesse anmelden
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {preview && (
          <div className="mt-10 text-center">
            <Button href="/events" variant="outline">
              Alle Events ansehen
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
