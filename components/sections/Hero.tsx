import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* dezenter Marken-Hintergrund */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-brand-soft"
      />
      <div
        aria-hidden
        className="absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-brand-turquoise/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-0 -z-10 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl"
      />

      {/* Marken-Banner (Header) – über die ganze Breite */}
      <div className="w-full">
        <Image
          src="/brand/header.jpg"
          alt="Klartext Liebe – Singlecoaching für echte Verbindung"
          width={1920}
          height={1080}
          priority
          className="h-[190px] w-full object-cover object-center sm:h-[260px] lg:h-[340px]"
        />
      </div>

      <div className="container-kl py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <Badge tone="brand" className="mb-6">
            ✨ Bewusste Partnerwahl statt oberflächlichem Dating
          </Badge>

          <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Dating für <span className="text-gradient">reflektierte Singles</span>{" "}
            mit Tiefe.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-500 sm:text-xl">
            Klartext Liebe verbindet Singlecoaching, Kommunikation,
            Persönlichkeitsanalyse und kuratierte Begegnungen für Menschen, die
            mehr suchen als Smalltalk, Swipen und Spielchen.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/starte-jetzt" size="lg">
              Starte jetzt – 3 Minuten, kostenlos →
            </Button>
            <Button
              href="/kontakt?thema=Kostenloses+Erstgespräch"
              variant="secondary"
              size="lg"
            >
              Kostenloses Erstgespräch
            </Button>
          </div>

          <p className="mt-6 text-sm text-ink-400">
            4 kurze Fragen, dann ist dein KI-Coach sofort für dich da – ohne
            Termin, ohne Login. Wenn du tiefer gehen willst, übernimmt Monika
            persönlich.
          </p>
        </div>
      </div>
    </section>
  );
}
