import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { values } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Über mich",
  alternates: { canonical: "/ueber-mich" },
  description:
    "Warum Klartext Liebe entstanden ist: Viele Singles haben kein Attraktivitätsproblem, sondern ein Kommunikations-, Klarheits- und Resonanzthema.",
};

export default function UeberMichPage() {
  const tags = [
    "Singlecoaching",
    "Datingberatung",
    "Kommunikationsanalyse",
    "KI-Persönlichkeitsanalyse",
    "Kuratiertes Matching",
  ];

  return (
    <>
      <PageHero
        eyebrow="Über mich"
        title="Hinter Klartext Liebe steht ein klarer Gedanke"
        subtitle="Viele Singles scheitern nicht an Aussehen oder Alter, sondern an Kommunikation, Klarheit, Mustern und fehlender Resonanz."
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-12 lg:grid-cols-2" style={{ gridTemplateColumns: "320px 1fr" }}>
            {/* Foto */}
            <div>
              <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal/10 via-brand-blue/10 to-brand-violet/10 shadow-soft ring-2 ring-dashed ring-brand-violet/20">
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <span className="text-4xl">📸</span>
                  <span className="px-6 text-sm font-medium text-ink-400">
                    Foto von Monika Oechtering
                  </span>
                  <span className="px-6 text-xs text-ink-300">
                    Datei in public/brand/ ablegen und hier einbinden
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-base font-semibold text-ink-900">Monika Oechtering</p>
                <p className="text-sm text-ink-400">Gründerin · Singlecoach · Datingberaterin</p>
              </div>
            </div>

            <div className="prose-kl max-w-none">
              <h2 className="text-2xl font-bold text-ink-900">
                Warum ich Klartext Liebe gegründet habe
              </h2>
              <div className="mt-4 space-y-4 text-ink-500">
                <p className="text-lg">
                  Über Jahre habe ich beobachtet, wie kluge, warmherzige und
                  reflektierte Menschen im Dating immer wieder an denselben
                  Stellen hängen bleiben. Nicht, weil mit ihnen etwas nicht
                  stimmt, sondern weil Gespräche oberflächlich bleiben,
                  Unsicherheit wie Desinteresse wirkt und Nähe gewünscht,
                  aber Distanz gesendet wird.
                </p>
                <p className="text-lg">
                  Mein Eindruck wurde immer deutlicher: Viele Singles haben kein
                  Attraktivitätsproblem, sondern ein Kommunikations-,
                  Klarheits-, Resonanz- und Musterproblem. Genau hier setzt
                  Klartext Liebe an - mit Verständnis statt Bewertung und mit
                  Klarheit statt Tricks.
                </p>

                <blockquote className="my-6 border-l-4 border-brand-violet pl-5 text-xl font-medium italic text-ink-700">
                  Du musst dich nicht verbiegen, um geliebt zu werden. Du musst
                  nur klarer werden: über dich selbst und über das, was du
                  wirklich suchst.
                </blockquote>

                <p className="text-lg">
                  Klartext Liebe grenzt sich bewusst von manipulativen
                  Datingstrategien ab. Es geht nicht darum, jemanden zu gewinnen
                  oder Spielchen zu spielen, sondern darum, dich selbst besser zu
                  verstehen, klarer zu kommunizieren und bewusster auszuwählen.
                  Orientierung statt Garantie - das ist mein Versprechen.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-violet/20 bg-brand-violet/5 px-3 py-1 text-xs font-medium text-brand-violet"
                  >
                    {tag}
                  </span>
                ))}
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

          {/* YouTube-Kanal */}
          <div className="mt-10 rounded-2xl border border-brand-teal/20 bg-brand-teal/5 p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <span className="text-4xl">▶️</span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-ink-900">@klartextliebe auf YouTube</h3>
                <p className="mt-1 text-sm text-ink-500">
                  Videos zu Dating, Selbstwert, Kommunikation und geistiger Resonanz
                  für reflektierte Singles, die mehr wollen als Oberflächlichkeit.
                </p>
              </div>
              <Button
                href="https://www.youtube.com/@klartextliebe"
                variant="secondary"
              >
                Kanal besuchen
              </Button>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-brand-soft p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-ink-900">
              Lust auf echte Klarheit?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-500">
              Im Coaching schauen wir gemeinsam hin: ehrlich, empathisch und ohne
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
