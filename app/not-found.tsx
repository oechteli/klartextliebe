import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: "Diese Seite gibt es nicht (mehr). Finde zurück zu Klartext Liebe.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-kl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-violet">
            Fehler 404
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
            Diese Seite haben wir <span className="text-gradient">nicht gefunden</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-ink-500">
            Vielleicht wurde der Link geändert oder die Seite existiert nicht mehr.
            Hier geht es zurück zu echter Verbindung.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Zur Startseite
            </Button>
            <Button href="/coaching" variant="secondary" size="lg">
              Coaching ansehen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
