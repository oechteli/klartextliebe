import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/**
 * Hero seit dem Relaunch 07.09.2026 (Vorbild chrissurel.com): Monikas Gesicht,
 * ein Claim, ein Hauptbutton „Kostenlos starten".
 *
 * Archiv (bis 07.09.2026): Marken-Banner /brand/header.jpg über die ganze Breite
 * (bleibt das OpenGraph-Bild), darunter zentriert die Überschrift
 * „Dating für reflektierte Singles mit Tiefe." mit zwei Buttons
 * (/starte-jetzt und Erstgespräch). Claim-Entscheidung 07.09.2026:
 * „Klartext Liebe. Damit aus Suchen Finden wird."
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden band-flaeche">
      <svg
        className="band band-warm"
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="kl-hero" x1="0" y1="0" x2="1" y2="1">
            <stop className="b1" offset="0" />
            <stop className="b2" offset=".55" />
            <stop className="b3" offset="1" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M0 232C168 150 372 118 566 158c184 38 316 122 508 122 132 0 246-32 366-96v436H0Z"
            fill="url(#kl-hero)"
          />
        </g>
      </svg>
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand-soft" />
      <div
        aria-hidden
        className="absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-brand-turquoise/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-0 -z-10 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl"
      />

      <div className="container-kl py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr,1fr] lg:gap-16">
          <div className="animate-fade-up text-center lg:text-left">
            <Badge tone="brand" className="mb-6">
              Singlecoaching · Kurse · Datingberatung
            </Badge>

            <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Klartext Liebe. Damit aus{" "}
              <span className="akzentwort">Suchen</span>{" "}
              <span className="akzentwort-3">Finden</span> wird.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-500 sm:text-xl lg:mx-0">
              Ich bin Monika. Ich bringe seit Jahrzehnten Menschen zusammen und
              sage dir ehrlich, was dich bisher aufgehalten hat: an deiner
              Wirkung, deiner Auswahl, deiner Art zu reden.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button href="/kostenlos-starten" size="lg">
                Kostenlos starten
              </Button>
              <Button href="/kurse" variant="secondary" size="lg">
                Die Kurse
              </Button>
            </div>

            <p className="mt-6 text-sm text-ink-400">
              Für Frauen und Männer. Ohne Tricks, ohne Garantieversprechen,
              ohne Abo.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[380px] lg:mx-0 lg:justify-self-end">
            <div className="mockup mockup-rechts aspect-[3/4]">
              <Image
                src="/brand/monika.png"
                alt="Monika Oechtering, Gründerin von Klartext Liebe"
                width={640}
                height={853}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
