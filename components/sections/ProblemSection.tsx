import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/lib/mock-data";

export function ProblemSection() {
  return (
    <section className="section">
      <div className="container-kl">
        <SectionHeading
          eyebrow="Das eigentliche Problem"
          title="Warum viele kluge Singles im Dating trotzdem stecken bleiben"
          subtitle="Oft ist es kein Attraktivitätsproblem – sondern ein Thema von Kommunikation, Klarheit und Resonanz."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <Card key={p.title} className="!p-6" interactive>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink">
                <span className="text-sm font-bold">!</span>
              </div>
              <h3 className="text-base font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{p.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
