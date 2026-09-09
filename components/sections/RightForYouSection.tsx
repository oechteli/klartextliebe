import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * „Du bist hier richtig, wenn …" (Relaunch 07.09.2026, Vorbild chrissurel.com).
 * Drei Situationen aus Monikas Erfahrung, keine erfundenen Personen.
 */
const situationen = [
  {
    titel: "Du bist ein guter Fang. Trotzdem klappt es nicht.",
    text: "Klug, warmherzig, mit Tiefe. Und trotzdem bleiben Gespräche oberflächlich oder brechen ab. Du verstehst nicht, warum.",
  },
  {
    titel: "Du kennst deine Muster. Und wiederholst sie doch.",
    text: "Immer derselbe Typ Mensch, dieselbe Enttäuschung. Du weißt es längst, aber allein kommst du nicht raus.",
  },
  {
    titel: "Du willst einen ehrlichen Blick von außen.",
    text: "Keine Tricks, kein Pick-up, keine Schmeicheleien. Jemand, der dir sagt, wie du wirkst und was du ändern kannst.",
  },
];

export function RightForYouSection() {
  return (
    <section className="section">
      <div className="container-kl">
        <SectionHeading
          eyebrow="Für wen"
          title="Du bist hier richtig, wenn …"
          subtitle="Klartext Liebe ist für Frauen und Männer, die eine Beziehung wollen, nicht das nächste Date."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {situationen.map((s, i) => (
            <Card key={s.titel} className="!p-6" interactive>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-900">{s.titel}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
