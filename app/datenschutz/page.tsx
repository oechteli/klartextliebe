import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Klartext Liebe.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero title="Datenschutzerklärung" />
      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl space-y-8 text-ink-600">

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">1. Datenschutz auf einen Blick</h2>
              <p className="leading-relaxed">
                Diese Website verwendet <strong>keine Tracking-Cookies</strong>, kein Google
                Analytics und keine sozialen Plugins. Es werden nur technisch notwendige Daten
                durch den Hosting-Anbieter verarbeitet.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">2. Verantwortliche Stelle</h2>
              <p className="leading-relaxed">
                Monika Oechtering · Klartext Liebe – Singlecoaching &amp; Datingberatung
                <br />
                E-Mail:{" "}
                <a href="mailto:monika.oechtering@googlemail.com" className="text-brand-teal hover:underline">
                  monika.oechtering@googlemail.com
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">3. Hosting – Cloudflare</h2>
              <p className="leading-relaxed">
                Diese Website wird über <strong>Cloudflare, Inc.</strong> (101 Townsend St,
                San Francisco, CA 94107, USA) ausgeliefert. Cloudflare verarbeitet technisch
                notwendige Daten (IP-Adresse, Browsertyp, Zugriffszeit) zum Betrieb und Schutz
                der Website. Cloudflare ist nach dem EU-US Data Privacy Framework zertifiziert.
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.{" "}
                <a href="https://www.cloudflare.com/de-de/privacypolicy/" target="_blank"
                  rel="noopener noreferrer" className="text-brand-teal hover:underline">
                  Datenschutzerklärung Cloudflare
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">4. Kontaktformular</h2>
              <p className="leading-relaxed">
                Beim Kontaktformular werden Name, E-Mail-Adresse und Nachricht zur Bearbeitung
                der Anfrage verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Die
                Daten werden nicht an Dritte weitergegeben und nach Abschluss der Kommunikation
                gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">5. Warteliste</h2>
              <p className="leading-relaxed">
                Bei Eintragung in die Warteliste wird die E-Mail-Adresse gespeichert, um über
                neue Angebote zu informieren. Die Einwilligung kann jederzeit per E-Mail an{" "}
                <a href="mailto:monika.oechtering@googlemail.com" className="text-brand-teal hover:underline">
                  monika.oechtering@googlemail.com
                </a>{" "}
                widerrufen werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">
                6. Zahlungsabwicklung – Stripe{" "}
                <span className="ml-1 rounded bg-cream-200 px-2 py-0.5 text-xs font-normal text-ink-400">
                  aktiv sobald Buchungen möglich sind
                </span>
              </h2>
              <p className="leading-relaxed">
                Für Buchungen wird <strong>Stripe Payments Europe, Ltd.</strong> (Dublin,
                Irland) als Zahlungsdienstleister eingesetzt. Zahlungsdaten werden direkt
                von Stripe verarbeitet und nicht auf diesem Server gespeichert.
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.{" "}
                <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer"
                  className="text-brand-teal hover:underline">
                  Datenschutzerklärung Stripe
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">
                7. Nutzerkonto &amp; Datenbank – Supabase{" "}
                <span className="ml-1 rounded bg-cream-200 px-2 py-0.5 text-xs font-normal text-ink-400">
                  aktiv sobald Konten möglich sind
                </span>
              </h2>
              <p className="leading-relaxed">
                Für Nutzerkonten und Profile wird <strong>Supabase</strong> mit EU-Serverstandort
                (Frankfurt) eingesetzt. Gespeichert werden E-Mail-Adresse, verschlüsseltes
                Passwort und freiwillig eingegebene Profildaten. Profildaten sind zunächst
                privat und werden erst nach ausdrücklicher Freigabe im Matching-Bereich
                sichtbar. Rechtsgrundlage: Art. 6 Abs. 1 lit. a und b DSGVO.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">
                8. KI-gestützte Persönlichkeitsanalyse{" "}
                <span className="ml-1 rounded bg-cream-200 px-2 py-0.5 text-xs font-normal text-ink-400">
                  aktiv sobald KI-Analyse integriert ist
                </span>
              </h2>
              <p className="leading-relaxed">
                Die Auswertung des Fragebogens erfolgt mit Unterstützung der KI von{" "}
                <strong>Anthropic, PBC</strong> (San Francisco, USA). Die Übertragung erfolgt
                ausschließlich mit ausdrücklicher Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                Ergebnisse werden nur im persönlichen Bereich gespeichert.{" "}
                <a href="https://www.anthropic.com/legal/privacy" target="_blank"
                  rel="noopener noreferrer" className="text-brand-teal hover:underline">
                  Datenschutzerklärung Anthropic
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">9. Deine Rechte</h2>
              <p className="leading-relaxed">Du hast jederzeit das Recht auf:</p>
              <ul className="list-disc space-y-1 pl-6 leading-relaxed">
                <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              <p className="leading-relaxed">
                Kontakt:{" "}
                <a href="mailto:monika.oechtering@googlemail.com" className="text-brand-teal hover:underline">
                  monika.oechtering@googlemail.com
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">10. Cookies</h2>
              <p className="leading-relaxed">
                Diese Website setzt ausschließlich technisch notwendige Cookies ein. Es werden
                keine Werbe-Cookies, Tracking-Pixel oder Third-Party-Cookies verwendet.
              </p>
            </div>

            <p className="text-xs text-ink-300">
              Stand: Juni 2026 · Diese Erklärung wird bei Änderungen der Datenverarbeitung aktualisiert.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
