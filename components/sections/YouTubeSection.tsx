import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { videoIdeas } from "@/lib/mock-data";

const YOUTUBE_URL =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL ?? "https://youtube.com/@klartextliebe";

/**
 * YouTube auf der Startseite (Relaunch 07.09.2026). Keine Abonnentenzahlen,
 * keine Frequenzversprechen. Die Themenkarten kommen aus lib/mock-data.ts
 * und werden durch echte Videos ersetzt, sobald sie online sind (youtubeId).
 */
export function YouTubeSection() {
  return (
    <section className="section">
      <div className="container-kl">
        <SectionHeading
          eyebrow="YouTube"
          title="Klartext, jede Woche ein Thema"
          subtitle="Auf @klartextliebe spreche ich über das, was ich in Gesprächen immer wieder sehe."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videoIdeas.slice(0, 3).map((v) => (
            <Card key={v.title} className="!p-6" interactive>
              <span className="text-brand-pink">▶</span>
              <h3 className="mt-3 text-base font-semibold text-ink-900">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{v.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={YOUTUBE_URL}>Kanal abonnieren</Button>
          <Button href="/youtube" variant="outline">
            Alle Themen
          </Button>
        </div>
      </div>
    </section>
  );
}
