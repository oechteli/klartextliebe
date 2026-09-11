import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Kurz-FAQ auf der Startseite (Relaunch 07.09.2026). Die vollständige Liste
 * mit FAQPage-JSON-LD liegt auf /faq; hier bewusst ohne zweites JSON-LD.
 */
const fragen = [
  {
    q: "Was kostet der Einstieg?",
    a: "Nichts. Selbsttest, Erstgespräch und YouTube sind kostenlos. Danach entscheidest du: Kurs ab 149 €, Einzelgespräch 119 €, schriftliche Analyse 79 €.",
  },
  {
    q: "Wie läuft der Kurs ab?",
    a: "Kurs 1 ist eine Live-Gruppe: vier Abende à 90 Minuten per Video, höchstens acht Teilnehmende, Workbook, persönliches Feedback. Du bist dabei, keine Aufzeichnung ohne dich.",
  },
  {
    q: "Ist das für Frauen und Männer?",
    a: "Ja. Auswahl, Wirkung und Kommunikation sind für alle Themen. Ich arbeite mit beiden.",
  },
  {
    q: "Vermittelst du Partner?",
    a: "Heute persönlich und nur für Menschen aus der Intensivbegleitung, die ich gut kenne. Kein Pool, kein Versprechen. Eine eigene Vermittlung folgt, wenn genug Menschen dabei sind.",
  },
  {
    q: "Ist das Therapie?",
    a: "Nein. Coaching arbeitet an Dating, Wirkung und Kommunikation im Alltag. Bei tieferliegenden seelischen Belastungen empfehle ich offen ärztliche oder therapeutische Hilfe.",
  },
  {
    q: "Wie buche ich?",
    a: "Direkt online beim jeweiligen Angebot, bezahlt wird sicher über Stripe. Danach melde ich mich in der Regel innerhalb von 24 Stunden, um den Termin abzustimmen. Kein Abo, keine automatische Verlängerung.",
  },
];

export function FaqSection() {
  return (
    <section className="section bg-cream-50">
      <div className="container-kl">
        <SectionHeading eyebrow="Fragen" title="Kurz beantwortet" />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-cream-200 rounded-2xl bg-white shadow-soft ring-1 ring-cream-200">
          {fragen.map((f) => (
            <details key={f.q} className="group px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink-900">
                {f.q}
                <span aria-hidden className="text-ink-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink-500">
          Mehr Fragen und Antworten:{" "}
          <Link href="/faq" className="font-medium text-brand-violet underline underline-offset-2">
            Alle FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}
