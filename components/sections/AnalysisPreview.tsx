import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function AnalysisPreview() {
  return (
    <section className="section">
      <div className="container-kl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-cream-200 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-ink-900">
                  Dein Resonanzprofil
                </span>
                <Badge tone="brand">Vorschau</Badge>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  ["Kommunikationsstil", 78],
                  ["Tiefe & Resonanz", 88],
                  ["Verbindlichkeit", 72],
                  ["Emotionale Reife", 81],
                ].map(([label, val]) => (
                  <div key={label as string}>
                    <div className="mb-1 flex justify-between text-xs text-ink-500">
                      <span>{label}</span>
                      <span>{val}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-cream-200">
                      <div
                        className="h-2 rounded-full bg-brand-gradient"
                        style={{ width: `${val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-ink-400">
                Beispielhafte Darstellung. Orientierung statt Garantie.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">KI-Persönlichkeitsanalyse</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Verstehe dich selbst besser – als Basis für echte Verbindung
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Ein ausführlicher Fragebogen hilft dabei, Werte, Beziehungsmuster,
              Kommunikationsstil, Bindungstendenzen, Lebensziele, Denkstil und
              Datingverhalten besser zu verstehen.
            </p>
            <div className="mt-7">
              <Button href="/analyse">Analyse starten</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
