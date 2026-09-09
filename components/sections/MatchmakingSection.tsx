import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/**
 * Partnervermittlung, Stufe 1 (Relaunch 07.09.2026).
 * Ehrlich: Es gibt keinen Teilnehmerpool. Was es gibt: Monika stellt Kunden
 * der Intensivbegleitung Menschen aus ihrem Umfeld vor, wenn sie passen.
 * Kein Versprechen, keine Quote, keine Vormerkliste auf der Startseite.
 */
export function MatchmakingSection() {
  return (
    <section className="section-dunkel section">
      <svg className="band band-kuehl" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="kl-match" x1="0" y1="0" x2="1" y2="1">
            <stop className="b1" offset="0" />
            <stop className="b2" offset=".55" />
            <stop className="b3" offset="1" />
          </linearGradient>
        </defs>
        <g>
          <path d="M0 300C200 200 420 190 640 240s360 120 520 90 200-90 280-140v430H0Z" fill="url(#kl-match)" />
        </g>
      </svg>
      <div className="container-kl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <Badge tone="pink" className="mb-4">Partnervermittlung</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ich stelle dir Menschen vor. Persönlich, nicht per Algorithmus.
            </h2>
            <p className="mt-5 text-lg">
              Das habe ich mein Leben lang gemacht, lange bevor es Klartext Liebe
              gab. Heute geht das so: Wer mit mir in der Intensivbegleitung
              arbeitet, den kenne ich gut. Wenn ich in meinem Umfeld jemanden
              sehe, der passen könnte, stelle ich euch einander vor.
            </p>
            <p className="mt-4">
              Kein Pool, keine Quote, kein Versprechen. Nur der Blick einer
              Kupplerin, die weiß, worauf es ankommt. Eine eigene Vermittlung
              mit Bewerbung und Aufnahmegespräch kommt, sobald genug Menschen
              dabei sind.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/partnervermittlung" variant="secondary">
                So funktioniert die Vermittlung
              </Button>
              <Button
                href="/coaching#vip-matchklarheit"
                className="bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25"
              >
                Intensivbegleitung ansehen
              </Button>
            </div>
          </div>
          <div className="karte-dunkel rounded-3xl border p-7 sm:p-8">
            <h3 className="text-lg font-semibold">So läuft es heute</h3>
            <ol className="mt-4 space-y-4">
              {[
                ["1", "Du arbeitest mit mir in der Intensivbegleitung. Ich lerne dich kennen: Werte, Lebensphase, Art zu reden, Wünsche."],
                ["2", "Ich behalte dich im Kopf. Wenn ich jemanden treffe, der passen könnte, frage ich euch beide."],
                ["3", "Wenn ihr wollt, stelle ich euch vor. Was daraus wird, liegt bei euch."],
              ].map(([n, t]) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15 text-sm font-bold text-white">
                    {n}
                  </span>
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
