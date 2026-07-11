import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CoachingFunnel } from "@/components/funnel/CoachingFunnel";

export const metadata: Metadata = {
  title: "Starte jetzt – 3 Minuten, kostenlos",
  alternates: { canonical: "/starte-jetzt" },
  description:
    "Beantworte 4 kurze Fragen und sprich sofort mit deinem KI-Coach – kostenlos, ohne Login, ohne Termin. Wenn du tiefer gehen willst, übernimmt Monika persönlich.",
};

const ablauf = [
  {
    step: "1",
    title: "4 kurze Fragen",
    desc: "Beziehungsstatus, Anliegen, dein Wunsch – dauert keine 3 Minuten.",
  },
  {
    step: "2",
    title: "Sofort im Gespräch",
    desc: "Dein KI-Coach öffnet sich direkt – kostenlos, ohne Termin, klar als KI gekennzeichnet.",
  },
  {
    step: "3",
    title: "Monika übernimmt",
    desc: "Wenn du tiefer gehen willst: persönliche Sessions – ohne Abo, ohne Mitgliedschaft.",
  },
];

export default function StarteJetztPage() {
  return (
    <>
      <PageHero
        eyebrow="Starte jetzt"
        title={
          <>
            3 Minuten, die <span className="text-gradient">Klarheit</span>{" "}
            bringen.
          </>
        }
        subtitle="Vier kurze Fragen – danach ist dein KI-Coach sofort für dich da. Kostenlos, ohne Login, ohne Wartezeit. Wenn du tiefer gehen willst, übernimmt Monika persönlich."
      />

      <section className="section">
        <div className="container-kl">
          <CoachingFunnel />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-kl">
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {ablauf.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-400">
            Ehrlich gesagt: Der KI-Coach ist eine KI – kein Mensch. Er hilft
            dir sofort beim Sortieren. Für alles, was echte Tiefe braucht, ist
            Monika persönlich da. Coaching ersetzt keine Psychotherapie.
          </p>
        </div>
      </section>
    </>
  );
}
