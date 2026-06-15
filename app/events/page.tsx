import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { events } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Events & Live-Treffen",
  alternates: { canonical: "/events" },
  description:
    "Moderierte Online-Treffen und lokale Events: Deep-Talk-Abende, Kennenlernabende und Gesprächsformate für reflektierte Singles.",
};

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
        eyebrow="Live-Treffen"
        title="Echte Begegnungen statt endlosem Swipen"
        subtitle="Moderierte Online-Treffen und lokale Events in verschiedenen Städten – für Gespräche, die in die Tiefe gehen."
      />

      <section className="section">
        <div className="container-kl">
          <div className="flex flex-wrap gap-2">
            {formats.map((f) => (
              <Badge key={f} tone="neutral">
                {f}
              </Badge>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((ev) => (
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
                  {/* TODO: später echte Anmeldung -> event_registrations (Supabase) */}
                  <Button href="/kontakt" variant="outline" size="sm" className="w-full">
                    Interesse anmelden
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-400">
            Termine folgen. Trag dich über das Kontaktformular ein, dann
            informieren wir dich, sobald ein Event in deiner Nähe stattfindet.
          </p>
        </div>
      </section>
    </>
  );
}
