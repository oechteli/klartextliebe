import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sapiosexuell? Partnersuche für Menschen, die sich in Gedanken verlieben",
  alternates: { canonical: "/kluge-koepfe" },
  description:
    "Sapiosexuell bedeutet: Intelligenz zieht dich an. Klartext Liebe ist die Anlaufstelle für sapiosexuelle Singles, Akademiker und Menschen mit Tiefgang – Coaching und kuratiertes Matching statt Swipe-Apps.",
  keywords: [
    "sapiosexuell",
    "sapiosexuell Dating",
    "sapiosexuell Partner finden",
    "Partnersuche Akademiker",
    "Dating für intelligente Menschen",
    "Singlecoaching",
  ],
};

const YOUTUBE_URL =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL ?? "https://youtube.com/@klartextliebe";

const signs = [
  "Ein kluges Gespräch zieht dich mehr an als jedes Foto.",
  "Rechtschreibfehler in der ersten Nachricht sind für dich ein echter Dämpfer.",
  "Du willst wissen, wie jemand denkt – nicht nur, wie jemand aussieht.",
  "Small Talk ermüdet dich, Tiefgang belebt dich.",
  "Humor, Wortwitz und Neugier sind für dich attraktiver als Statussymbole.",
  "Nach einem Date fragst du dich zuerst: Hat mich das Gespräch inspiriert?",
];

const painPoints = [
  {
    title: "Apps zeigen Fotos, keine Gedanken",
    desc: "Swipe-Apps entscheiden in Millisekunden über das Bild. Genau das, was dich anzieht, ist dort unsichtbar.",
  },
  {
    title: "Small Talk statt Substanz",
    desc: "Auf den großen Portalen versandet jedes Gespräch nach drei Nachrichten. Du suchst Tiefe, bekommst Oberfläche.",
  },
  {
    title: "Geistige Nähe lässt sich nicht filtern",
    desc: "Neugier, Reflexionsfähigkeit und Gesprächstiefe stehen in keinem Suchfilter. Daran scheitert die Passung.",
  },
];

const dimensions = [
  ["Denkstil", "Wie du die Welt betrachtest, hinterfragst und einordnest."],
  ["Werte", "Was dir wirklich wichtig ist, jenseits von Statussymbolen."],
  ["Neugier & Bildung", "Gemeinsame geistige Wellenlänge statt zufälliger Übereinstimmung."],
  ["Kommunikationsstil", "Wie du Nähe herstellst und in Verbindung bleibst."],
  ["Emotionale Reife", "Wie du mit Nähe, Distanz und Konflikt umgehst."],
  ["Lebensphase", "Wo du stehst und wohin du willst."],
];

const steps = [
  {
    step: "1",
    title: "Kostenloses Erstgespräch",
    desc: "20 Minuten, unverbindlich. Wir klären, wonach du wirklich suchst und wo es aktuell hakt.",
  },
  {
    step: "2",
    title: "Persönliches Matching & Coaching",
    desc: "Kein anonymer Algorithmus, sondern von Hand ausgewählte Begegnungen plus Begleitung, damit sie gelingen.",
  },
  {
    step: "3",
    title: "Echte Verbindung",
    desc: "Du triffst Menschen auf deiner Wellenlänge und gehst bewusster in Beziehung.",
  },
];

export default function KlugeKoepfePage() {
  return (
    <>
      <PageHero
        badge="Sapiosexuell · Akademiker · Menschen mit Tiefgang"
        eyebrow="Für wen ist Klartext Liebe?"
        title="Du verliebst dich in Gedanken? Willkommen."
        subtitle="Dafür gibt es ein Wort: sapiosexuell – wenn Intelligenz, Sprache und Gesprächstiefe anziehender sind als alles andere. Viele kennen das Gefühl, wenige das Wort. Und fast niemand bietet dafür einen Ort. Genau das ist Klartext Liebe."
      />

      {/* Primärer CTA direkt unter dem Hero */}
      <section className="section pb-0">
        <div className="container-kl">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="/kontakt?thema=Kostenloses+Erstgespräch+(sapiosexuell)" size="lg">
              Kostenloses Erstgespräch
            </Button>
            <p className="text-sm text-ink-500">
              20 Minuten, unverbindlich. Kein Verkaufsgespräch, nur Klarheit.
            </p>
          </div>
        </div>
      </section>

      {/* Selbsterkennung */}
      <section className="section">
        <div className="container-kl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
                Woran du merkst, dass du hier richtig bist
              </h2>
              <p className="mt-4 text-ink-500">
                Sapiosexualität ist kein Etikett und kein Abschluss-Nachweis. Es
                ist eine Art, Anziehung zu empfinden. Vielleicht erkennst du dich
                wieder:
              </p>
              <p className="mt-4 text-ink-500">
                Ob mit Doktortitel oder ohne: Wenn du beim Lesen genickt hast,
                bist du hier richtig.
              </p>
            </div>
            <div className="rounded-3xl bg-brand-soft p-8 shadow-soft">
              <ul className="space-y-3">
                {signs.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm text-ink-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section bg-cream-50">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-ink-900">
              Warum Dating-Apps für dich nicht gebaut sind
            </h2>
            <p className="mt-3 text-ink-500">
              Nicht, weil zu wenige Menschen passen. Sondern weil die üblichen
              Plattformen genau das nicht abbilden, was für dich zählt.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {painPoints.map((p) => (
              <Card key={p.title} className="!p-6">
                <h3 className="text-base font-semibold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wonach hier geschaut wird */}
      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-ink-900">
              Wonach hier wirklich geschaut wird
            </h2>
            <p className="mt-3 text-ink-500">
              Statt Foto und Wischgeschwindigkeit zählen die Dimensionen, die
              geistige Nähe tragen.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dimensions.map(([t, d]) => (
              <Card key={t} className="!p-6" interactive>
                <Badge tone="brand" className="mb-3">
                  {t}
                </Badge>
                <p className="text-sm text-ink-500">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section bg-cream-50">
        <div className="container-kl">
          <h2 className="text-center text-2xl font-bold text-ink-900">
            So läuft es ab
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube-Funnel */}
      <section className="section">
        <div className="container-kl">
          <div className="rounded-3xl bg-brand-soft p-8 shadow-soft sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr] lg:items-center">
              <div>
                <Badge tone="pink" className="mb-4">
                  Täglich neu auf YouTube
                </Badge>
                <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
                  Jeden Tag ein ehrlicher Impuls für deine Partnersuche
                </h2>
                <p className="mt-4 text-ink-500">
                  Auf dem Klartext-Liebe-Kanal bekommst du täglich konkrete
                  Beratung: wie du klüger kommunizierst, dich selbstbewusster
                  zeigst und leichter Menschen auf deiner Wellenlänge findest.
                  Ohne Flirt-Tricks, ohne Spielchen.
                </p>
                <div className="mt-6">
                  <Button href={YOUTUBE_URL} variant="secondary">
                    YouTube abonnieren
                  </Button>
                </div>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-white/70 shadow-soft">
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-2xl text-brand-pink shadow-soft">
                    ▶
                  </span>
                  <span className="text-sm text-ink-400">Neueste Folge folgt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section className="section pt-0">
        <div className="container-kl">
          <div className="rounded-3xl bg-brand-gradient px-6 py-14 text-center text-white shadow-card sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Bereit für Begegnungen mit Substanz?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Erzähl mir kurz, wer du bist und wen du suchst. Im kostenlosen
              Erstgespräch finden wir heraus, ob und wie ich dir helfen kann.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                href="/kontakt?thema=Kostenloses+Erstgespräch+(sapiosexuell)"
                variant="secondary"
                size="lg"
              >
                Kostenloses Erstgespräch
              </Button>
              <Button
                href="/coaching"
                size="lg"
                className="bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25"
              >
                Angebote ansehen
              </Button>
            </div>
            <p className="mt-5 text-sm text-white/60">
              Kein Verkaufsgespräch. Kein Druck. Nur Klarheit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
