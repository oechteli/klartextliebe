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
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Werde Teil von Klartext Liebe
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Für Singles, die echte Gespräche, geistige Resonanz und
              verbindliche Begegnungen suchen.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/coaching" variant="secondary" size="lg">
                Coaching buchen
              </Button>
              <Button
                href="/community"
                size="lg"
                className="bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25"
              >
                Warteliste beitreten
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
