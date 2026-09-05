import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { EmailSchutz } from "@/components/ui/EmailSchutz";

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
                durch den Hosting-Anbieter verarbeitet. Nur wenn Sie den freiwilligen KI-Chat
                nutzen, werden Ihre Chat-Eingaben an einen KI-Dienst übermittelt (Details in
                Abschnitt 6).
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">2. Verantwortliche Stelle</h2>
              <p className="leading-relaxed">
                Monika Oechtering-Sorg · Klartext Liebe – Singlecoaching &amp; Datingberatung
                <br />
                Amthausstraße 33, 76227 Karlsruhe
                <br />
                E-Mail:{" "}
                <EmailSchutz nutzer="monika.oechtering" domain="googlemail.com" />
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
                Beim Kontaktformular werden Name, E-Mail-Adresse, das gewählte Anliegen und
                Ihre Nachricht zur Bearbeitung der Anfrage verarbeitet. Für den zuverlässigen
                Versand dieser Formular-E-Mail an uns setzen wir den Dienstleister{" "}
                <strong>Resend (Resend, Inc., San Francisco, USA)</strong> ein; dabei werden
                die genannten Angaben übertragen. Sollte der Versanddienst nicht erreichbar
                sein, öffnet sich ersatzweise Ihr eigenes E-Mail-Programm mit der Nachricht.
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO. Die Daten werden nicht zu
                Werbezwecken weitergegeben und nach Abschluss der Kommunikation gelöscht,
                sofern keine gesetzliche Aufbewahrungspflicht besteht.{" "}
                <a href="https://resend.com/legal/privacy-policy" target="_blank"
                  rel="noopener noreferrer" className="text-brand-teal hover:underline">
                  Datenschutzerklärung Resend
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">
                5. Vormerkungen (Community, Live-Treffen, Matching)
              </h2>
              <p className="leading-relaxed">
                Community, Live-Treffen und kuratiertes Matching befinden sich in Vorbereitung.
                Wenn Sie sich über das Kontaktformular dafür vormerken, verarbeiten wir Ihre
                Angaben (Name, E-Mail-Adresse und Ihre Nachricht) ausschließlich, um Sie zu
                benachrichtigen, sobald das jeweilige Angebot startet, und um Ihre Nachricht zu
                beantworten. Es wird kein Nutzerprofil angelegt und kein Newsletter versendet;
                eine Weitergabe an Dritte erfolgt nicht (Versand der Formular-E-Mail über Resend,
                siehe Abschnitt 4). Die Daten werden gelöscht, sobald sie nicht mehr benötigt
                werden, sofern keine gesetzliche Aufbewahrungspflicht besteht. Ihre Einwilligung
                können Sie jederzeit per E-Mail an{" "}
                <EmailSchutz nutzer="monika.oechtering" domain="googlemail.com" />{" "}
                widerrufen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">6. KI-Chat (Sofort-Assistent)</h2>
              <p className="leading-relaxed">
                Auf dieser Website steht ein KI-Chat zur Verfügung (als KI gekennzeichnet).
                Wenn Sie den Chat nutzen, werden Ihre Chat-Nachrichten – und, falls Sie den
                Fragebogen auf „Starte jetzt“ ausgefüllt haben, Ihre dortigen Antworten – zur
                Erzeugung der Antwort an <strong>OpenRouter, Inc.</strong> (San Francisco,
                USA) übermittelt und dort durch KI-Modelle (z. B. Google Gemini) verarbeitet.
                Die Nutzung ist freiwillig; bitte geben Sie im Chat keine besonders sensiblen
                Daten (z. B. Gesundheitsdaten) ein. Wir speichern die Chat-Verläufe nicht auf
                unseren Servern; die Fragebogen-Antworten verbleiben nur für die Dauer der
                Browser-Sitzung auf Ihrem Gerät. Rechtsgrundlage: Art. 6 Abs. 1 lit. a und f
                DSGVO.{" "}
                <a href="https://openrouter.ai/privacy" target="_blank" rel="noopener noreferrer"
                  className="text-brand-teal hover:underline">
                  Datenschutzerklärung OpenRouter
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">
                7. Zahlungsabwicklung – Stripe{" "}
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
                8. Nutzerkonto &amp; Datenbank – Supabase{" "}
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
                9. KI-gestützte Persönlichkeitsanalyse{" "}
                <span className="ml-1 rounded bg-cream-200 px-2 py-0.5 text-xs font-normal text-ink-400">
                  aktiv sobald KI-Analyse integriert ist
                </span>
              </h2>
              <p className="leading-relaxed">
                <strong>Derzeit:</strong> Der Fragebogen auf der Seite „Analyse“ wird
                ausschließlich lokal in Ihrem Browser ausgewertet. Ihre Antworten werden weder an
                uns noch an Dritte übertragen und nicht gespeichert.{" "}
                <strong>Geplant:</strong> Eine spätere KI-gestützte Auswertung (z. B. mit
                Unterstützung von <strong>Anthropic, PBC</strong>, San Francisco, USA) würde nur
                mit Ihrer ausdrücklichen Einwilligung erfolgen (Art. 6 Abs. 1 lit. a DSGVO); diese
                Erklärung wird vorher entsprechend aktualisiert.{" "}
                <a href="https://www.anthropic.com/legal/privacy" target="_blank"
                  rel="noopener noreferrer" className="text-brand-teal hover:underline">
                  Datenschutzerklärung Anthropic
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">10. Ihre Rechte</h2>
              <p className="leading-relaxed">Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc space-y-1 pl-6 leading-relaxed">
                <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
                <li>Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
              <p className="leading-relaxed">
                Kontakt:{" "}
                <EmailSchutz nutzer="monika.oechtering" domain="googlemail.com" />
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-ink-900">11. Cookies</h2>
              <p className="leading-relaxed">
                Diese Website setzt ausschließlich technisch notwendige Cookies ein. Es werden
                keine Werbe-Cookies, Tracking-Pixel oder Third-Party-Cookies verwendet.
              </p>
            </div>

            <p className="text-xs text-ink-300">
              Stand: September 2026 · Diese Erklärung wird bei Änderungen der Datenverarbeitung aktualisiert.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
