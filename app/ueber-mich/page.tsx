import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { values } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Warum Klartext Liebe entstanden ist: Viele Singles haben kein Attraktivitätsproblem, sondern ein Kommunikations-, Klarheits- und Resonanzthema.",
};

export default function UeberMichPage() {
  return (
    <>
      <PageHero
        eyebrow="Über mich"
        title="Hinter Klartext Liebe steht ein klarer Gedanke"
        subtitle="Viele Singles scheitern nicht an Aussehen oder Alter – sondern an Kommunikation, Klarheit, Mustern und fehlender Resonanz."
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-12 lg:grid-cols-[320px,1fr]">
            {/* Foto-Platzhalter */}
            <div>
              <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl bg-brand-soft shadow-soft">
                <div className="flex h-full items-center justify-center text-center text-ink-400">
                  {/* TODO: persönliches Foto der Gründerin einsetzen */}
                  <span className="px-6 text-sm">
                    Platz für dein persönliches Foto
                  </span>
                </div>
              </div>
            </div>

            <div className="prose-kl max-w-none">
              <h2 className="text-2xl font-bold text-ink-900">
                Warum Klartext Liebe entstanden ist
              </h2>
              <div className="mt-4 space-y-4 text-lg text-ink-500">
                <p>
                  Über Jahre habe ich beobachtet, wie kluge, warmherzige und
                  reflektierte Menschen im Dating immer wieder an denselben
                  Stellen hängen bleiben. Nicht, weil mit ihnen etwas „nicht
                  stimmt“ – sondern weil Gespräche oberflächlich bleiben,
                  Unsicherheit wie Desinteresse wirkt und Nähe gewünscht, aber
                  Distanz gesendet wird.
                </p>
                <p>
                  Mein Eindruck wurde immer deutlicher: Viele Singles haben kein
                  Attraktivitätsproblem, sondern ein Kommunikations-, Klarheits-,
                  Resonanz- und Musterproblem. Genau hier setzt Klartext Liebe an
                  – mit Verständnis statt Bewertung und mit Klarheit statt Tricks.
                </p>
                <p>
                  Klartext Liebe grenzt sich bewusst von manipulativen
                  Datingstrategien ab. Es geht nicht darum, jemanden zu „gewinnen“
                  oder Spielchen zu spielen, sondern darum, dich selbst besser zu
                  verstehen, klarer zu kommunizieren und bewusster auszuwählen.
                </p>
              </div>
            </div>
          </div>

          {/* Werte */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-ink-900">
              Wofür Klartext Liebe steht
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <Card key={v.title} className="!p-5">
                  <p className="text-base">
                    <span className="font-semibold text-ink-900">{v.title}</span>{" "}
                    <span className="text-ink-500">{v.opposite}</span>
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-3xl bg-brand-soft p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-ink-900">
              Lust auf echte Klarheit?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-500">
              Im Coaching schauen wir gemeinsam hin – ehrlich, empathisch und ohne
              Bewertung.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/coaching">Coaching ansehen</Button>
              <Button href="/analyse" variant="secondary">
                Persönlichkeitsanalyse
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
