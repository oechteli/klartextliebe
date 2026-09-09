import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const YOUTUBE_URL =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL ?? "https://youtube.com/@klartextliebe";

/**
 * Kostenloser Einstieg (Relaunch 07.09.2026). Bewusst ohne Newsletter und
 * ohne E-Mail-Sammlung (Entscheidung der Inhaberin): drei Wege, die es heute
 * wirklich gibt.
 */
const wege = [
  {
    titel: "Selbsttest",
    dauer: "3 Minuten",
    text: "Vier kurze Fragen, dann ist der KI-Coach sofort für dich da. Ohne Termin, ohne Login.",
    href: "/starte-jetzt",
    cta: "Selbsttest starten",
  },
  {
    titel: "Erstgespräch mit Monika",
    dauer: "20 Minuten",
    text: "Wir schauen gemeinsam, was dich aufhält und ob Klartext Liebe das Richtige für dich ist. Kein Verkaufsgespräch.",
    href: "/kontakt?thema=Kostenloses+Erstgespräch",
    cta: "Erstgespräch anfragen",
  },
  {
    titel: "Videos auf YouTube",
    dauer: "Jederzeit",
    text: "Klartext zu Dating, Wirkung und Kommunikation. Ehrlich, ohne Flirt-Guru-Gehabe.",
    href: YOUTUBE_URL,
    cta: "Kanal ansehen",
  },
];

export function FreeStartSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section" id="kostenlos">
      <div className="container-kl">
        {!compact && (
          <SectionHeading
            eyebrow="Kostenlos starten"
            title="Drei Wege, die nichts kosten"
            subtitle="Du musst nichts kaufen, um herauszufinden, ob das hier zu dir passt."
          />
        )}
        <div className={`${compact ? "" : "mt-12"} grid gap-6 md:grid-cols-3`}>
          {wege.map((w) => (
            <Card key={w.titel} className="flex flex-col !p-6" interactive>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-violet">
                {w.dauer}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">{w.titel}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{w.text}</p>
              <div className="mt-auto pt-5">
                <Button href={w.href} variant="secondary" size="sm" className="w-full">
                  {w.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
