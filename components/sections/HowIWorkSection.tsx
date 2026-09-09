import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

/**
 * Ersetzt seit 02.09.2026 die frühere Testimonial-Sektion (erfundene
 * Platzhalter-Stimmen, siehe Kommentar-Archiv in TestimonialsSection.tsx).
 * Hier steht nur, was wir tatsächlich versprechen können: Haltung, Ablauf,
 * typische Anliegen (anonymisierte Themen, keine Personen) und die Grenzen
 * des Coachings.
 */

const haltung = [
  {
    title: "Ehrlich statt schmeichelhaft",
    text: "Du bekommst eine klare Einschätzung – wohlwollend formuliert, aber ohne Schönfärberei. Wenn Coaching für dein Thema nicht das Richtige ist, sage ich das.",
  },
  {
    title: "Ohne Tricks und Spielchen",
    text: "Keine Pick-up-Taktiken, keine Manipulationsstrategien. Wir arbeiten an Selbstwert, Kommunikation und bewusster Auswahl – für Frauen und Männer gleichermaßen.",
  },
  {
    title: "Orientierung statt Garantie",
    text: "Niemand kann dir seriös versprechen, wann du einen passenden Menschen triffst. Was ich verspreche: dass du deine Muster klarer siehst und bessere Entscheidungen triffst.",
  },
];

const anliegen = [
  "Gespräche brechen nach wenigen Nachrichten ab – und ich verstehe nicht, warum.",
  "Ich ziehe immer wieder denselben Typ Mensch an, obwohl ich es besser weiß.",
  "Ich wirke kühl oder desinteressiert, dabei bin ich nur vorsichtig.",
  "Nach der Trennung möchte ich wieder daten – aber diesmal bewusster.",
  "Ich habe klare Vorstellungen und frage mich, ob ich zu anspruchsvoll bin.",
  "Mir fehlt geistige Resonanz – die meisten Kontakte bleiben oberflächlich.",
  "Wir reden aneinander vorbei – und wollen das zu zweit klären.",
];

export function HowIWorkSection() {
  return (
    <section className="section bg-cream-50">
      <div className="container-kl">
        <div className="text-center">
          <p className="eyebrow mb-3">So arbeite ich</p>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">
            Was du von mir erwarten kannst – und was nicht
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-500">
            Klartext Liebe ist ein junges Angebot. Statt mit Bewertungen zu
            werben, sage ich dir lieber offen, wie ich arbeite.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {haltung.map((h) => (
            <Card key={h.title} className="!p-6">
              <h3 className="text-base font-semibold text-ink-900">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{h.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          <div className="rounded-3xl bg-brand-soft p-8 shadow-soft">
            <h3 className="text-lg font-semibold text-ink-900">
              Typische Anliegen, mit denen Menschen zu mir kommen
            </h3>
            <p className="mt-1 text-xs text-ink-400">
              Anonymisierte Themen, keine Zitate einzelner Personen.
            </p>
            <ul className="mt-5 space-y-3">
              {anliegen.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm text-ink-700">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="!p-6 sm:!p-8">
            <h3 className="text-lg font-semibold text-ink-900">
              Wo Coaching aufhört
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-600">
              <li>
                <strong className="text-ink-800">Keine Therapie.</strong> Coaching
                arbeitet an Dating, Kommunikation und Selbstwert im Alltag. Bei
                tieferliegenden seelischen Belastungen empfehle ich offen
                ärztliche oder psychotherapeutische Hilfe.
              </li>
              <li>
                <strong className="text-ink-800">Keine Erfolgsgarantie.</strong>{" "}
                Ich arbeite ohne Erfolgsquoten und ohne Vorher-nachher-Versprechen.
              </li>
              <li>
                {/* alt (bis 07.09.2026): „Keine Partnervermittlung. Community, Events und
                    kuratiertes Matching sind in Vorbereitung …" */}
                <strong className="text-ink-800">Kein Partnerpool.</strong>{" "}
                Ich stelle Menschen aus der Intensivbegleitung persönlich
                jemandem vor, wenn ich in meinem Umfeld eine Passung sehe. Das ist
                keine Datenbank und kein Versprechen. Community und Live-Treffen
                folgen mit der Lernplattform.
              </li>
            </ul>
            <p className="mt-5 rounded-xl border border-cream-200 bg-cream-50 p-4 text-xs leading-relaxed text-ink-500">
              <strong className="text-ink-700">In einer akuten Krise</strong> bist du
              bei der Telefonseelsorge richtig: <strong>0800 111 0 111</strong> oder{" "}
              <strong>0800 111 0 222</strong>, kostenlos und rund um die Uhr. In
              Notfällen wähle die 112.
            </p>
            <div className="mt-6">
              <Button href="/so-funktionierts" variant="outline" size="sm">
                Den Ablauf ansehen
              </Button>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-center text-sm text-ink-500">
          Mehr über mich und warum es Klartext Liebe gibt:{" "}
          <Link
            href="/ueber-mich"
            className="font-medium text-brand-violet underline underline-offset-2"
          >
            Über mich
          </Link>
        </p>
      </div>
    </section>
  );
}
