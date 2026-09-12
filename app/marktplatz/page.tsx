import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kuratiertes Matching? Gibt es nicht.",
  alternates: { canonical: "/marktplatz" },
  description:
    "Ein kuratiertes Matching war einmal geplant und ist vom Tisch. Klartext Liebe ist Singlecoaching und Datingberatung, keine Vermittlung.",
};

/**
 * Bis 12.09.2026 warb diese Seite für ein geplantes „kuratiertes Matching"
 * mit Vormerkformular. Herausgenommen, weil das Vermitteln von Bekanntschaften
 * nach § 38 GewO ein überwachungsbedürftiges Gewerbe ist und die
 * Gewerbeanmeldung dafür fehlt. Auch eine Ankündigung ist Werbung dafür.
 * Alte Fassung im Git-Tag stand-vor-entschaerfung-2026-09-12.
 */
export default function MarktplatzPage() {
  return (
    <>
      <PageHero
        eyebrow="Klartext"
        title="Das kuratierte Matching kommt nicht."
        subtitle="Hier stand einmal ein Plan: Profile, die nach Tiefe bewertet werden, und Menschen, die einander vorgestellt werden. Diesen Plan gibt es nicht mehr."
      />

      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl space-y-6 text-ink-600">
            <p className="leading-relaxed">
              Wer sich dafür vorgemerkt hatte: Es kommt nichts nach. Ich sage
              das lieber deutlich, als eine Seite stehen zu lassen, die etwas in
              Aussicht stellt, das nicht kommt.
            </p>
            <p className="leading-relaxed">
              Was bleibt, ist die Arbeit, die ich wirklich mache: der ehrliche
              Blick von außen auf deine Wirkung, deine Auswahl und deine Art zu
              reden. Dafür brauchst du keine Plattform, sondern jemanden, der
              dir sagt, was er sieht.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/coaching">Coaching ansehen</Button>
              <Button href="/kurse" variant="secondary">
                Kurse ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
