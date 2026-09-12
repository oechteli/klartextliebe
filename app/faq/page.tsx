import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen",
  alternates: { canonical: "/faq" },
  description:
    "Antworten auf die häufigsten Fragen zu Klartext Liebe: Kosten, Ablauf, Seriosität, Unterschied zu Dating-Apps und Partnervermittlungen.",
};

interface Faq {
  q: string;
  a: string;
}

const gruppen: { titel: string; fragen: Faq[] }[] = [
  {
    titel: "Angebot & Ablauf",
    fragen: [
      {
        q: "Was genau ist Klartext Liebe?",
        a: "Klartext Liebe ist Singlecoaching und Datingberatung mit schriftlicher Profil- und Chat-Analyse – für reflektierte Singles, die mehr suchen als Swipen und Smalltalk. Der Ansatz: Klarheit, Selbstwert und ehrliche Kommunikation statt Dating-Tricks. Community, Live-Treffen und kuratiertes Matching sind in Vorbereitung und starten mit unserer Lernplattform.",
      },
      {
        q: "Was sind die Klartext-Kurse?",
        a: "Drei aufeinander aufbauende Kurse: „Klartext Start – Warum du noch Single bist“ (Muster, Selbstbild, Plan), „Wirkung – Wie du gesehen wirst“ (Stil, Profil, erste Sätze) und „Vom Date zur Beziehung“ (Auswahl, Tempo, Bindung). Kurs 1 läuft als Live-Gruppe mit Monika: vier Abende à 90 Minuten per Video, höchstens acht Teilnehmende, Workbook, 149 €. Kurs 2 und 3 folgen als Videokurse, ihre Themen gibt es bis dahin im Einzelgespräch.",
      },
      {
        q: "Vermittelt Klartext Liebe Partner?",
        a: "Nein. Klartext Liebe ist Coaching und Datingberatung. Es gibt keine Partnervermittlung, keine Kartei und keine Vorschläge – weder heute noch geplant.",
      },
      {
        q: "Wie läuft die Zusammenarbeit ab?",
        a: "In vier Schritten: kostenloses Erstgespräch (ca. 20 Minuten), gemeinsame Wahl des passenden Angebots, persönliche Begleitung online per Video oder schriftlich, dann Umsetzung in deinem Alltag. Eine ausführliche Beschreibung findest du auf der Seite „So funktioniert's“.",
      },
      {
        q: "Findet das Coaching online oder vor Ort statt?",
        a: "Online per Videogespräch – du brauchst nur einen ruhigen Ort und eine stabile Internetverbindung. Dadurch ist das Coaching deutschlandweit und darüber hinaus möglich, ohne Anfahrt und ortsunabhängig.",
      },
      {
        q: "Ist das Angebot für Frauen und Männer?",
        a: "Ja. Anders als viele Dating-Coaches, die sich nur an Männer oder nur an Frauen richten, arbeitet Klartext Liebe mit reflektierten Singles unabhängig vom Geschlecht. Die Themen – Auswahl, Kommunikation, Selbstwert – sind universell.",
      },
      {
        q: "Für wen ist das Coaching nicht geeignet?",
        a: "Wenn du nach Aufreißer-Taktiken, schnellen Tricks oder einer Garantie suchst, sind wir die falsche Adresse. Und wichtig: Coaching ersetzt keine Psychotherapie. Bei tieferliegenden seelischen Belastungen empfehlen wir offen professionelle therapeutische Unterstützung.",
      },
    ],
  },
  {
    titel: "Kosten & Buchung",
    fragen: [
      {
        q: "Was kostet das Coaching?",
        a: "Die schriftliche Profil- & Chat-Analyse kostet 79 €, ein Einzelgespräch (60 Minuten) 119 €, ein Paargespräch zu zweit (90 Minuten) 169 €, das Dating-Klarheit-Paket mit drei Gesprächen 399 € und die intensive VIP-Matchklarheit 799 €. Das Erstgespräch (20 Minuten) ist kostenlos. Alle Preise stehen transparent auf der Coaching-Seite – es gibt keine versteckten Kosten und kein Abo.",
        // Altwerte bis 02.09.2026: Einzelsitzung 149 € (bzw. 89 € als Einzelsession); kein Paargespräch
      },
      {
        q: "Gibt es auch ein Gespräch für Paare?",
        a: "Ja. Das Paargespräch dauert 90 Minuten, findet online per Video statt und kostet 169 €. Es ist für Paare gedacht, die aneinander vorbeireden, im Kreis streiten oder klären wollen, wie es weitergeht. Moderiert, ohne Schuldzuweisung – aber kein Ersatz für Paartherapie. Anfrage wie bei allen Formaten über das Kontaktformular.",
      },
      {
        q: "Ist das nicht teuer?",
        a: "Zur Einordnung: Einzelcoaching zu Beziehungs- und Datingthemen liegt bei vielen Anbieterinnen und Anbietern in Deutschland im Bereich von etwa 90 bis 150 € pro Stunde, Intensivprogramme deutlich darüber. Klartext Liebe liegt mit 119 € für 60 Minuten mittendrin – und du startest klein: Erstgespräch kostenlos, schriftliche Analyse 79 €. Du musst kein teures Paket kaufen, um herauszufinden, ob es dir hilft.",
      },
      {
        q: "Wie buche und bezahle ich?",
        a: "Direkt online: Du klickst beim Angebot auf den Buchungsknopf und bezahlst sicher über Stripe. Danach meldet sich Monika innerhalb von 24 Stunden, um den Termin abzustimmen. Die VIP-Matchklarheit buchst du nach einem kostenlosen Erstgespräch. Kein Abo, keine automatischen Verlängerungen.",
      },
      {
        q: "Übernimmt die Krankenkasse die Kosten?",
        a: "Nein. Single- und Beziehungscoaching ist – wie bei allen Anbietern – eine private Leistung und keine Kassenleistung. Dafür entscheidest du selbst über Umfang und Tempo, ohne Diagnose und ohne Wartezeit.",
      },
      {
        q: "Was ist, wenn ich einen Termin verschieben muss?",
        a: "Das Leben passiert – schreib einfach so früh wie möglich eine kurze Nachricht über das Kontaktformular oder per E-Mail, dann finden wir gemeinsam einen neuen Termin.",
      },
    ],
  },
  {
    titel: "Seriosität & Haltung",
    fragen: [
      {
        q: "Woran erkenne ich, dass Klartext Liebe seriös ist?",
        a: "An dem, was wir nicht tun: keine Erfolgsquoten, keine Vorher-nachher-Versprechen, keine Manipulationstechniken, keine Lockangebote mit Countdown. Preise und Ablauf stehen offen auf der Website, das Erstgespräch ist ein echtes Kennenlernen ohne Verkaufsskript – und wenn Coaching für dein Thema nicht das Richtige ist, sagen wir das.",
      },
      {
        q: "Gibt es eine Erfolgsgarantie?",
        a: "Nein – und Vorsicht bei jedem Anbieter, der eine verspricht. Ob und wann du einen passenden Menschen triffst, kann niemand garantieren. Was Coaching leisten kann: dass du klarer auswählst, ehrlicher kommunizierst und Muster erkennst, die dir bisher im Weg standen. Orientierung statt Garantie.",
      },
      {
        q: "Was unterscheidet euch von Dating-Apps und Partnervermittlungen?",
        a: "Apps liefern Kontakte, Partnervermittlungen liefern Vorschläge – beides scheitert oft daran, wie danach kommuniziert und ausgewählt wird. Klartext Liebe setzt genau dort an: an dir, deiner Wirkung und deinen Entscheidungen. Ein kuratiertes Matching ist in Vorbereitung; es soll die Arbeit an dir ergänzen, nicht ersetzen.",
      },
      {
        q: "Was unterscheidet euch von typischen Flirt- und Pick-up-Coaches?",
        a: "Grundsätzliches. Pick-up arbeitet mit einstudierten Techniken, um kurzfristig Wirkung zu erzeugen – das widerspricht allem, wofür Klartext Liebe steht. Wir arbeiten an echter Passung: Werte, Kommunikation, Selbstwert. Nichts, was du bei uns lernst, musst du vor einem Partner geheim halten.",
      },
      {
        q: "Bleibt das, was ich erzähle, vertraulich?",
        a: "Ja. Persönliche Themen bleiben im Gespräch, Chatverläufe und Profile werden für die Analyse anonymisiert behandelt. Es werden keine Inhalte aus Coachings veröffentlicht – auch nicht anonymisiert als „Erfolgsgeschichte“, ohne dass du es ausdrücklich möchtest.",
      },
    ],
  },
  {
    titel: "Community, Analyse & Live-Treffen",
    fragen: [
      {
        q: "Gibt es die Community schon?",
        a: "Noch nicht. Geplant ist ein geschützter Raum für reflektierte Singles: ehrlicher Austausch auf Augenhöhe, Deep-Talk-Impulse, Live-Fragerunden und Stadtgruppen. Die Community startet mit unserer Lernplattform; bis dahin kannst du dich auf der Community-Seite unverbindlich vormerken.",
      },
      {
        q: "Wann finden Live-Treffen statt?",
        a: "Termine gibt es noch keine. Welche Formate zuerst starten – online oder vor Ort – hängt davon ab, wer sich vormerkt. Sobald ein erster Termin feststeht, melden wir uns bei allen Vorgemerkten persönlich.",
      },
      {
        q: "Wie funktioniert die Profil- & Chat-Analyse?",
        a: "Du reichst dein Datingprofil oder einen anonymisierten Chatverlauf ein und bekommst schriftliches, konkretes Feedback: was gut wirkt, wo Gespräche kippen und was du beim nächsten Mal anders machen kannst. Ein guter Einstieg, wenn Kontakte immer an derselben Stelle abbrechen.",
      },
      {
        q: "Gibt es ein kuratiertes Matching?",
        a: "Nein. Diese Idee ist vom Tisch. Klartext Liebe hilft dir dabei, selbst klarer zu sehen, zu kommunizieren und auszuwählen – die Menschen findest du selbst.",
      },
    ],
  },
];

const alleFragen = gruppen.flatMap((g) => g.fragen);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: alleFragen.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Häufige Fragen, ehrliche Antworten"
        subtitle="Kosten, Ablauf, Seriosität – hier findest du Klartext zu allem, was Interessierte am häufigsten wissen wollen."
      />

      <section className="section">
        <div className="container-kl">
          {gruppen.map((gruppe) => (
            <div key={gruppe.titel} className="mb-14 last:mb-0">
              <h2 className="text-2xl font-bold text-ink-900">
                {gruppe.titel}
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {gruppe.fragen.map((f) => (
                  <Card key={f.q} className="!p-6">
                    <h3 className="text-base font-semibold text-ink-900">
                      {f.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {f.a}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 rounded-2xl border border-brand-violet/20 bg-brand-violet/5 p-6 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-ink-900">
              Deine Frage war nicht dabei?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-ink-600">
              Schreib uns einfach – du bekommst innerhalb von 24 Stunden eine
              persönliche Antwort. Oder du klärst alles direkt im kostenlosen
              Erstgespräch.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Button href="/kontakt" size="sm">
                Frage stellen
              </Button>
              <Button href="/so-funktionierts" variant="secondary" size="sm">
                So funktioniert's
              </Button>
              <Button href="/blog" variant="ghost" size="sm">
                Zum Ratgeber
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
