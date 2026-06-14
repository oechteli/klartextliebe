import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const steps = [
  ["Fragebogen", "Werte, Kommunikation & Resonanz erfassen"],
  ["Resonanzprofil", "Persönlichkeits- und Resonanzprofil erhalten"],
  ["Passende Menschen", "Profile mit Tiefgang statt Fotokatalog"],
  ["Kuratierte Vorschläge", "Werte-, Stil- und Lebensphasenabgleich"],
  ["Kennenlernen", "Online oder live in entspannter Atmosphäre"],
];

export function MatchingPreview() {
  return (
    <section className="section bg-brand-soft">
      <div className="container-kl">
        <div className="mx-auto max-w-2xl text-center">
          <Badge tone="orange" className="mb-4">
            Bald verfügbar
          </Badge>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Kuratiertes Matching statt endlosem Swipen
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Profile werden nicht nur nach Foto bewertet, sondern nach Werten,
            Lebensphase, Kommunikationsstil, Denkstil und Beziehungsziel. Keine
            Garantie für perfekte Matches – aber bessere Orientierung und
            bewusstere Begegnungen.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([title, desc], i) => (
            <li
              key={title}
              className="rounded-2xl bg-white/80 p-5 shadow-soft ring-1 ring-white/60 backdrop-blur"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-ink-900">
                {title}
              </h3>
              <p className="mt-1 text-xs text-ink-500">{desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Button href="/marktplatz" variant="secondary">
            Mehr zum Marktplatz
          </Button>
        </div>
      </div>
    </section>
  );
}
