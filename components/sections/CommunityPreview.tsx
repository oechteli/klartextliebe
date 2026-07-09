import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function CommunityPreview() {
  return (
    <section className="section bg-brand-soft">
      <div className="container-kl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-cream-200">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <Badge tone="pink" className="mb-4">
                Aufnahme läuft
              </Badge>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Eine geschützte Community für Singles mit Tiefgang
              </h2>
              <p className="mt-5 text-lg text-ink-500">
                Eine geschützte Community für reflektierte Singles, die bewusster
                daten, tiefer kommunizieren und echte Verbindung suchen.
              </p>
              <div className="mt-7">
                <Button href="/community">Zugang anfragen</Button>
              </div>
            </div>

            <div className="bg-cream-100/70 p-8 sm:p-12">
              <ul className="space-y-3">
                {[
                  "Geschützter Austausch auf Augenhöhe",
                  "Deep-Talk-Impulse & Reflexionsaufgaben",
                  "Live-Q&As und Gesprächsabende",
                  "Chat- und Profilfeedback",
                  "Stadt- und Themengruppen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 text-brand-pink">◆</span>
                    <span className="text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-400">
                Kein Ort für Belästigung, Manipulation oder respektlose
                Kontaktaufnahme – mit klaren Community-Regeln.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
