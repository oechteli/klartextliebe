/* TODO: Echte Kundenstimmen eintragen – Platzhalter unten ersetzen */

const testimonials = [
  {
    quote:
      "Nach Jahren erfolglosem Online-Dating hat mir Klartext Liebe zum ersten Mal wirklich geholfen zu verstehen, warum ich immer wieder in dieselben Muster falle. Die Kommunikationsanalyse war für mich ein echter Wendepunkt.",
    name: "Sandra K.",
    context: "38, Unternehmerin",
    initial: "S",
  },
  {
    quote:
      "Ich dachte immer, das Problem sei mein Profil oder mein Aussehen. Im Coaching wurde mir klar, dass ich einfach die falschen Menschen auswähle – und warum. Das hat alles verändert.",
    name: "Markus T.",
    context: "44, Ingenieur",
    initial: "M",
  },
  {
    quote:
      "Endlich jemand, der ohne Spielchen und Tricks arbeitet. Der Ansatz ist ehrlich, die Begleitung warmherzig und die Analysen erstaunlich treffend. Ich würde es sofort wieder machen.",
    name: "Julia M.",
    context: "35, Lehrerin",
    initial: "J",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section bg-cream-50">
      <div className="container-kl">
        <div className="text-center">
          <p className="eyebrow mb-3">Stimmen</p>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">
            Was Klienten sagen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-500">
            Echte Einblicke – von Menschen, die den Schritt gewagt haben.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-cream-200 bg-white p-6 shadow-soft"
            >
              {/* Sterne */}
              <div className="flex gap-0.5 text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Zitat */}
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-600">
                „{t.quote}"
              </blockquote>

              {/* Person */}
              <div className="flex items-center gap-3 border-t border-cream-200 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-400">{t.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-300">
          Namen zum Schutz der Privatsphäre anonymisiert.
        </p>
      </div>
    </section>
  );
}
