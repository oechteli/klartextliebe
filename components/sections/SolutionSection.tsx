import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/lib/mock-data";

export function SolutionSection() {
  return (
    <section className="section bg-brand-soft">
      <div className="container-kl">
        <SectionHeading
          eyebrow="Der Klartext-Liebe-Weg"
          title="Klartext Liebe bringt Tiefe, Klarheit und Verbindung ins Dating"
          subtitle="Ein begleiteter Weg zu bewussterer Partnersuche – statt endlosem Swipen."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white/80 p-6 shadow-soft ring-1 ring-white/60 backdrop-blur"
            >
              <div className="text-2xl" aria-hidden>
                {s.icon}
              </div>
              <h3 className="mt-3 text-base font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
