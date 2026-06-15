import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { videoIdeas } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "YouTube",
  alternates: { canonical: "/youtube" },
  description:
    "Der Klartext-Liebe-YouTube-Kanal: Orientierung für reflektierte Singles zu Kommunikation, Selbstwert und echter Verbindung.",
};

const YOUTUBE_URL =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL ?? "https://youtube.com/@klartextliebe";

export default function YouTubePage() {
  return (
    <>
      <PageHero
        eyebrow="YouTube"
        title="Klartext zu Liebe, Kommunikation und echter Verbindung"
        subtitle="Der Kanal gibt reflektierten Singles Orientierung – ehrlich, empathisch und ohne Flirt-Guru-Gehabe."
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
            <div>
              {/* Video-Platzhalter / Einbettung */}
              <div className="aspect-video w-full overflow-hidden rounded-3xl bg-brand-soft shadow-card">
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  {/* TODO: echtes YouTube-iframe oder neueste Videos via API einbetten */}
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/80 text-2xl text-brand-pink shadow-soft">
                    ▶
                  </span>
                  <span className="text-sm text-ink-400">
                    Video-Einbettung folgt
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-900">
                Worum es im Kanal geht
              </h2>
              <p className="mt-4 text-ink-500">
                Klartext Liebe ist mehr als ein Kanal – es ist Orientierung für
                Menschen, die das Dating bewusster angehen wollen. Statt Tricks
                und Spielchen geht es um Klarheit, Selbstwert, Kommunikation und
                geistige Resonanz.
              </p>
              <div className="mt-6">
                <Button href={YOUTUBE_URL}>YouTube abonnieren</Button>
              </div>
            </div>
          </div>

          {/* Videoideen */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-ink-900">
              Themen, die dich erwarten
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {videoIdeas.map((v) => (
                <Card key={v.title} className="!p-6" interactive>
                  <span className="text-brand-pink">▶</span>
                  <h3 className="mt-3 text-base font-semibold text-ink-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{v.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
