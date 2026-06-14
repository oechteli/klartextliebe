import { Badge } from "@/components/ui/Badge";

export function WhatIsSection() {
  return (
    <section className="section">
      <div className="container-kl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Was ist Klartext Liebe?</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              YouTube-Kanal, Coachingplattform – und perspektivisch eine
              kuratierte Community.
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Klartext Liebe richtet sich an reflektierte Singles, Akademiker und
              Menschen mit Tiefgang. Es geht nicht um Masse, sondern um bessere
              Orientierung, klare Kommunikation und passendere Begegnungen.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="turquoise">YouTube-Kanal</Badge>
              <Badge tone="brand">Singlecoaching</Badge>
              <Badge tone="pink">Community (geplant)</Badge>
              <Badge tone="orange">Kuratiertes Matching (geplant)</Badge>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-brand-soft p-8 shadow-soft">
              <div className="space-y-4">
                {[
                  ["Orientierung", "statt endloser Auswahl ohne Verbindung"],
                  ["Klare Kommunikation", "statt Rätselraten und Spielchen"],
                  ["Geistige Resonanz", "statt oberflächlichem Swipen"],
                  ["Echte Begegnung", "online und in Städten"],
                ].map(([t, s]) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 backdrop-blur"
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                      ✓
                    </span>
                    <p className="text-sm">
                      <span className="font-semibold text-ink-900">{t}</span>{" "}
                      <span className="text-ink-500">{s}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
