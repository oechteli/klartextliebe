import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Klartext Liebe.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero title="Impressum" />
      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl space-y-8 text-ink-600">

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">Angaben gemäß § 5 DDG</h2>
              <p className="leading-relaxed">
                Monika Oechtering
                <br />
                Klartext Liebe – Singlecoaching &amp; Datingberatung
                <br />
                <span className="rounded bg-brand-orange/10 px-1 text-brand-orange text-sm">
                  [Straße und Hausnummer – bitte ergänzen]
                </span>
                <br />
                <span className="rounded bg-brand-orange/10 px-1 text-brand-orange text-sm">
                  [PLZ und Ort – bitte ergänzen]
                </span>
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">Kontakt</h2>
              <p className="leading-relaxed">
                E-Mail:{" "}
                <a href="mailto:monika.oechtering@googlemail.com" className="text-brand-teal hover:underline">
                  monika.oechtering@googlemail.com
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">Berufsbezeichnung</h2>
              <p className="leading-relaxed">
                Singlecoaching und Datingberatung sind in Deutschland nicht reglementierte
                Tätigkeiten. Es gelten keine besonderen berufsrechtlichen Regelungen oder
                Kammerzugehörigkeiten.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">Umsatzsteuer-Identifikationsnummer</h2>
              <p className="leading-relaxed text-ink-400">
                Eine USt-IdNr. liegt derzeit nicht vor. Sofern Leistungen umsatzsteuerpflichtig
                erbracht werden, wird diese Angabe ergänzt.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="leading-relaxed">Monika Oechtering (Anschrift s. o.)</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">EU-Streitschlichtung</h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                  className="text-brand-teal hover:underline">
                  ec.europa.eu/consumers/odr
                </a>
                . Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle bin ich nicht verpflichtet und nicht bereit.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">Haftungsausschluss</h2>
              <p className="leading-relaxed">
                Die Inhalte dieser Seite wurden sorgfältig erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität kann jedoch keine Gewähr übernommen werden.
                Das Coaching ersetzt keine psychologische oder therapeutische Fachbehandlung.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">Urheberrecht</h2>
              <p className="leading-relaxed">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
                jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                der schriftlichen Zustimmung der Autorin.
              </p>
            </div>

            <p className="text-xs text-ink-300">Stand: Juni 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
