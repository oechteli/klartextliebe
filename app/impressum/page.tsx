import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Klartext Liebe.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero title="Impressum" />
      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl space-y-6 text-ink-600">
            <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-5 text-sm text-ink-700">
              <strong className="text-ink-900">Bitte ergänzen:</strong> Hier
              müssen die rechtlich vorgeschriebenen Angaben nach § 5 DDG (ehem.
              TMG) eingetragen werden.
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">
                Angaben gemäß § 5 DDG
              </h2>
              <p>
                [Name / Firma]
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ und Ort]
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">Kontakt</h2>
              <p>
                Telefon: [Telefonnummer]
                <br />
                E-Mail: [E-Mail-Adresse]
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">
                Umsatzsteuer-ID
              </h2>
              <p>[falls vorhanden]</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">
                Verantwortlich für den Inhalt
              </h2>
              <p>[Name, Anschrift]</p>
            </div>

            <p className="text-sm text-ink-400">
              Dieser Platzhalter ersetzt keine Rechtsberatung. Bitte ein
              vollständiges, geprüftes Impressum einsetzen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
