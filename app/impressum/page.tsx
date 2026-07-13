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
                Monika Oechtering-Sorg
                <br />
                Klartext Liebe – Singlecoaching &amp; Datingberatung
                <br />
                Amthausstraße 33
                <br />
                76227 Karlsruhe
                <br />
                Deutschland
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
              <h2 className="text-lg font-semibold text-ink-900">Umsatzsteuer</h2>
              <p className="leading-relaxed">
                Kleinunternehmerin gemäß § 19 UStG – es wird keine Umsatzsteuer berechnet
                und ausgewiesen.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="leading-relaxed">Monika Oechtering-Sorg (Anschrift s. o.)</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">Verbraucherstreitbeilegung</h2>
              <p className="leading-relaxed">
                Die Plattform der Europäischen Kommission zur Online-Streitbeilegung
                (OS-Plattform) wurde zum 20. Juli 2025 eingestellt. Zur Teilnahme an einem
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bin ich
                nicht verpflichtet und nicht bereit.
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

            <p className="text-xs text-ink-300">Stand: Juli 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
