import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { kursBySlug } from "@/lib/kurse";

const kurs = kursBySlug("klartext-start")!;

export const metadata: Metadata = {
  title: `Kurs 1: ${kurs.titel} – ${kurs.untertitel} (${kurs.preis})`,
  alternates: { canonical: "/kurse/klartext-start" },
  description:
    "Vier Wochen Live-Gruppe mit Monika: Muster erkennen, Wirkung verstehen, Plan machen. Höchstens 8 Teilnehmende, Workbook, persönliches Feedback. 149 €, kein Abo.",
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.klartext-liebe.de";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: `${kurs.titel}: ${kurs.untertitel}`,
  description: kurs.kernfrage,
  provider: { "@type": "Organization", name: "Klartext Liebe", url: SITE_URL },
  inLanguage: "de-DE",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "EUR",
    url: `${SITE_URL}/kurse/klartext-start`,
    availability: "https://schema.org/InStock",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT6H",
    instructor: { "@type": "Person", name: "Monika Oechtering-Sorg" },
  },
};

const faq = [
  ["Muss ich vor der Kamera sprechen?", "Nein. Du kannst mit Kamera dabei sein oder nur zuhören und im Chat fragen. Feedback bekommst du in jedem Fall."],
  ["Was, wenn ich einen Abend verpasse?", "Jeder Abend wird aufgezeichnet. Du bekommst die Aufzeichnung und kannst deine Fragen beim nächsten Mal stellen."],
  ["Ist das auch etwas für Männer?", "Ja. Die Gruppe ist gemischt. Muster, Wirkung und Auswahl sind für alle Themen."],
  ["Kann ich danach ins 1:1 wechseln?", "Ja. Wer den Kurs gemacht hat, bekommt den Kurspreis beim Dating-Klarheit-Paket angerechnet."],
  ["Gibt es eine Garantie?", "Nein. Niemand kann dir seriös versprechen, wann du jemanden triffst. Was ich verspreche: Du siehst nach vier Wochen klar, was dich bisher aufgehalten hat."],
];

export default function KlartextStartPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        badge="Kurs 1 · Live-Gruppe"
        eyebrow={kurs.untertitel}
        title={kurs.titel}
        subtitle={kurs.kernfrage}
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr] lg:items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-ink-900">Für wen der Kurs ist</h2>
                <ul className="mt-5 space-y-3">
                  {kurs.fuerWen.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">✓</span>
                      <span className="text-ink-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-ink-900">Die vier Wochen</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {kurs.inhalte.map((i) => (
                    <Card key={i.woche} className="!p-5">
                      <Badge tone="brand">{i.woche}</Badge>
                      <h3 className="mt-3 text-base font-semibold text-ink-900">{i.titel}</h3>
                      <p className="mt-1.5 text-sm text-ink-500">{i.text}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-ink-900">Was du am Ende hast</h2>
                <ul className="mt-5 space-y-3">
                  {kurs.ergebnis.map((e) => (
                    <li key={e} className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand-turquoise">✓</span>
                      <span className="text-ink-700">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-brand-soft p-7 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="mx-auto w-28 shrink-0 overflow-hidden rounded-2xl sm:mx-0">
                    <Image src="/brand/monika.png" alt="Monika Oechtering" width={224} height={298} className="h-auto w-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-ink-900">Warum ich diesen Kurs zuerst mache</h2>
                    <p className="mt-2 text-sm text-ink-600">
                      Fast jedes Gespräch, das ich mit Singles führe, landet bei
                      derselben Frage: Woran liegt es eigentlich? Die Antwort ist
                      selten das Aussehen und selten das Alter. Sie steckt in
                      Mustern, die man selbst nicht sieht. Genau da fangen wir an.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-ink-900">Fragen zum Kurs</h2>
                <div className="mt-5 divide-y divide-cream-200 rounded-2xl bg-white shadow-soft ring-1 ring-cream-200">
                  {faq.map(([q, a]) => (
                    <details key={q} className="group px-6 py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink-900">
                        {q}
                        <span aria-hidden className="text-ink-400 transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-ink-600">{a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <Card highlight className="lg:sticky lg:top-24 !p-6 sm:!p-8">
              <Badge tone="brand" className="absolute -top-3 left-6">Jetzt buchbar</Badge>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-violet">Kurs 1 · Live-Gruppe</p>
              <h2 className="mt-1 text-2xl font-bold text-ink-900">{kurs.titel}</h2>
              <p className="mt-3 text-4xl font-bold text-ink-900">{kurs.preis}</p>
              <p className="mt-1 text-xs text-ink-400">Endpreis, keine Umsatzsteuer (§ 19 UStG). Kein Abo.</p>
              <ul className="mt-5 space-y-2 text-sm text-ink-700">
                {[
                  "4 Abende à 90 Minuten per Video",
                  "Höchstens 8 Teilnehmende",
                  "Workbook und Selbsttest",
                  "Persönliches Feedback von Monika",
                  "Aufzeichnung aller Abende",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-brand-turquoise">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-cream-100 p-3 text-xs leading-relaxed text-ink-600">{kurs.hinweis}</p>
              <div className="mt-6">
                <Button href={kurs.buchungsLink!} className="w-full" size="lg">
                  Platz anfragen
                </Button>
                <p className="mt-2 text-center text-xs text-ink-400">
                  Anfrage per Kontaktformular · Antwort in der Regel innerhalb von 24 h
                </p>
              </div>
              <div className="mt-4 text-center">
                <Button href="/kontakt?thema=Kostenloses+Erstgespräch" variant="ghost" size="sm">
                  Erst unverbindlich sprechen
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
