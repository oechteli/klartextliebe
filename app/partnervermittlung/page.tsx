import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partnervermittlung? Die gibt es hier nicht.",
  alternates: { canonical: "/partnervermittlung" },
  description:
    "Klartext Liebe ist Singlecoaching und Datingberatung. Eine Partnervermittlung gehört nicht zum Angebot: keine Kartei, keine Vorschläge, keine Vermittlung.",
};

/**
 * Bis 12.09.2026 stand hier ein Angebot „Partnervermittlung" in zwei Stufen.
 * Herausgenommen, weil Partnervermittlung nach § 38 GewO ein
 * überwachungsbedürftiges Gewerbe ist und die Gewerbeanmeldung dafür fehlt.
 * Die alte Fassung liegt im Git-Tag stand-vor-entschaerfung-2026-09-12.
 * Die Seite bleibt bestehen, damit Suchende eine klare Antwort finden.
 */
export default function PartnervermittlungPage() {
  return (
    <>
      <PageHero
        eyebrow="Klartext"
        title="Ich vermittle keine Partner."
        subtitle="Diese Frage bekomme ich oft, deshalb steht die Antwort hier so deutlich: Klartext Liebe ist Coaching und Datingberatung. Eine Partnervermittlung ist es nicht."
      />

      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl space-y-8">
            <div>
              <h2 className="text-xl font-bold text-ink-900">Was ich nicht mache</h2>
              <ul className="mt-4 space-y-2 text-ink-600">
                <li>Keine Kartei und keine Datenbank mit Singles.</li>
                <li>Keine Vorschläge, wen du treffen sollst.</li>
                <li>Keine Vermittlung, weder heute noch geplant.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink-900">Was ich mache</h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                Ich schaue mit dir darauf, warum es bisher nicht klappt: wie du
                wirkst, für wen du dich immer wieder entscheidest und wie du
                redest, wenn es darauf ankommt. Die Menschen findest du selbst.
                Aber du gehst ihnen anders entgegen.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-teal/20 bg-brand-teal/5 p-6 text-sm text-ink-600">
              Man nannte mich früher die Kupplerin, weil ich im Freundeskreis
              gern Menschen zusammengebracht habe. Das war und ist privat: unter
              Bekannten, ohne Geld, ohne Auftrag. Ein Angebot von Klartext Liebe
              ist es nicht.
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/coaching">Coaching ansehen</Button>
              <Button
                href="/kontakt?thema=Kostenloses+Erstgespräch"
                variant="secondary"
              >
                Kostenloses Erstgespräch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
