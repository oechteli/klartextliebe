import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/**
 * Startseiten-Teaser Community.
 * Stand 02.09.2026: Die Community existiert noch nicht als Funktion; sie
 * startet mit unserer Lernplattform. Darum ehrlich als „in Vorbereitung"
 * mit Vormerkung statt „Aufnahme läuft".
 *
 * Archiv der früheren Formulierungen:
 *   Badge: "Aufnahme läuft" · Button: "Zugang anfragen"
 */
export function CommunityPreview() {
  return (
    <section className="section bg-brand-soft">
      <div className="container-kl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-cream-200">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <Badge tone="soon" className="mb-4">
                In Vorbereitung
              </Badge>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Eine geschützte Community für Singles mit Tiefgang
              </h2>
              <p className="mt-5 text-lg text-ink-500">
                Geplant ist ein geschützter Raum für reflektierte Singles, die
                bewusster daten, tiefer kommunizieren und echte Verbindung
                suchen. Die Community startet mit unserer Lernplattform – wer
                sich vormerkt, erfährt es als Erste oder Erster.
              </p>
              <div className="mt-7">
                <Button href="/community">Vormerken &amp; mehr erfahren</Button>
              </div>
            </div>

            <div className="bg-cream-100/70 p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                So ist die Community gedacht
              </p>
              <ul className="mt-3 space-y-3">
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
                Kontaktaufnahme – mit klaren Community-Regeln von Anfang an.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
