import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="section">
      <div className="container-kl">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 text-center shadow-card sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/70">
              Erster Schritt
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Lass uns kurz sprechen.
            </h2>
            <p className="mt-4 text-lg text-white/85">
              20 Minuten, kostenlos und unverbindlich. Wir schauen gemeinsam,
              was dich aufhält – und ob Klartext Liebe das Richtige für dich ist.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/kontakt?thema=Kostenloses+Erstgespräch"
                variant="secondary"
                size="lg"
              >
                Kostenloses Erstgespräch anfragen
              </Button>
              <Button
                href="/coaching"
                size="lg"
                className="bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25"
              >
                Alle Angebote ansehen
              </Button>
            </div>
            <p className="mt-5 text-sm text-white/60">
              Kein Verkaufsgespräch. Kein Druck. Nur Klarheit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
