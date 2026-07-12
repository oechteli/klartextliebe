import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von Klartext Liebe.",
  alternates: { canonical: "/agb" },
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <>
      <PageHero title="Allgemeine Geschäftsbedingungen (AGB)" />
      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl space-y-8 text-ink-600">

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">1. Geltungsbereich und Anbieterin</h2>
              <p className="leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über
                Coaching- und Beratungsleistungen, die zwischen Monika Oechtering,
                Klartext Liebe – Singlecoaching &amp; Datingberatung (nachfolgend
                &bdquo;Anbieterin&ldquo;, Kontaktdaten siehe{" "}
                <a href="/impressum" className="text-brand-teal hover:underline">Impressum</a>)
                und Verbraucherinnen und Verbrauchern (nachfolgend &bdquo;Kundin/Kunde&ldquo;)
                über die Website klartext-liebe.de angebahnt oder geschlossen werden.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">2. Leistungen</h2>
              <p className="leading-relaxed">
                Die Anbieterin bietet Singlecoaching und Datingberatung an, insbesondere:
                schriftliche Profil- und Chat-Analysen, 1:1-Coachinggespräche (per Chat,
                Telefon oder Video), Coaching-Pakete mit mehreren Sitzungen, Sessionpakete
                ohne Mitgliedschaft, Zugang zur Community sowie kuratiertes Matching.
                Inhalt, Umfang und Preis der jeweiligen Leistung ergeben sich aus der
                Beschreibung auf der Website zum Zeitpunkt der Anfrage sowie aus der
                individuellen Auftragsbestätigung.
              </p>
              <p className="leading-relaxed">
                Coaching ist eine Dienstleistung zur persönlichen Orientierung und
                Weiterentwicklung. Die Anbieterin schuldet die sorgfältige Erbringung der
                vereinbarten Leistung, nicht jedoch einen bestimmten Erfolg (insbesondere
                nicht das Zustandekommen einer Partnerschaft). Coaching ist keine
                Psychotherapie, Heilbehandlung oder Rechtsberatung und ersetzt diese nicht.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">3. Vertragsschluss</h2>
              <p className="leading-relaxed">
                Die Darstellung der Leistungen auf der Website ist kein rechtlich bindendes
                Angebot, sondern eine Einladung zur Anfrage. Die Kundin/der Kunde stellt
                über das Kontaktformular oder per E-Mail eine unverbindliche Anfrage. Die
                Anbieterin meldet sich daraufhin persönlich, in der Regel innerhalb von
                24 Stunden, mit den nächsten Schritten. Der Vertrag kommt erst zustande,
                wenn die Anbieterin die Buchung ausdrücklich bestätigt (z. B. per E-Mail
                mit Auftragsbestätigung und Zahlungslink) oder mit der Leistung beginnt.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">4. Preise und Zahlung</h2>
              <p className="leading-relaxed">
                Es gelten die zum Zeitpunkt der Anfrage auf der Website ausgewiesenen
                Preise. Alle Preise sind Endpreise in Euro. Die Zahlung erfolgt nach
                Auftragsbestätigung über den mitgeteilten Zahlungsweg (z. B.
                Zahlungslink). Sitzungen finden erst nach Zahlungseingang statt, sofern
                nichts anderes vereinbart ist. Es besteht kein Abonnement und keine
                automatische Verlängerung; Pakete enden mit der letzten enthaltenen
                Sitzung.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">5. Termine, Verschiebung und Absage</h2>
              <p className="leading-relaxed">
                Vereinbarte Termine können bis 24 Stunden vor Beginn kostenfrei verschoben
                oder abgesagt werden (per E-Mail ausreichend). Bei späterer Absage oder
                Nichterscheinen gilt die Sitzung als in Anspruch genommen, es sei denn,
                die Kundin/der Kunde hat die Verhinderung nicht zu vertreten. Muss die
                Anbieterin einen Termin absagen, wird ein Ersatztermin angeboten;
                alternativ wird die Sitzung erstattet.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">6. Mitwirkung und Vertraulichkeit</h2>
              <p className="leading-relaxed">
                Coaching lebt von der aktiven Mitwirkung der Kundin/des Kunden. Alle im
                Coaching besprochenen persönlichen Inhalte behandelt die Anbieterin
                streng vertraulich. Eingereichte Unterlagen (z. B. Datingprofile,
                anonymisierte Chatverläufe) werden ausschließlich zur Leistungserbringung
                verwendet. Einzelheiten zur Datenverarbeitung regelt die{" "}
                <a href="/datenschutz" className="text-brand-teal hover:underline">Datenschutzerklärung</a>.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">7. Widerrufsrecht für Verbraucher</h2>
              <p className="leading-relaxed">
                Verbrauchern steht bei Fernabsatzverträgen ein gesetzliches Widerrufsrecht
                zu. Es gilt die folgende Belehrung:
              </p>
              <h3 className="font-semibold text-ink-900">Widerrufsbelehrung</h3>
              <p className="leading-relaxed">
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
                Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag
                des Vertragsabschlusses. Um Ihr Widerrufsrecht auszuüben, müssen Sie mir
                (Monika Oechtering, Klartext Liebe, E-Mail:{" "}
                <a href="mailto:monika.oechtering@googlemail.com" className="text-brand-teal hover:underline">
                  monika.oechtering@googlemail.com
                </a>
                ) mittels einer eindeutigen Erklärung (z. B. per E-Mail) über Ihren
                Entschluss, diesen Vertrag zu widerrufen, informieren. Zur Wahrung der
                Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung
                des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              </p>
              <h3 className="font-semibold text-ink-900">Folgen des Widerrufs</h3>
              <p className="leading-relaxed">
                Wenn Sie diesen Vertrag widerrufen, habe ich Ihnen alle Zahlungen, die ich
                von Ihnen erhalten habe, unverzüglich und spätestens binnen vierzehn Tagen
                ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei
                mir eingegangen ist. Für die Rückzahlung verwende ich dasselbe
                Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt
                haben; in keinem Fall werden Ihnen wegen der Rückzahlung Entgelte
                berechnet. Haben Sie verlangt, dass die Dienstleistung während der
                Widerrufsfrist beginnen soll, so haben Sie mir einen angemessenen Betrag
                zu zahlen, der dem Anteil der bis zum Widerruf bereits erbrachten
                Leistung im Vergleich zum Gesamtumfang der vereinbarten Leistung
                entspricht. Das Widerrufsrecht erlischt, wenn die Dienstleistung
                vollständig erbracht wurde und mit der Ausführung erst begonnen wurde,
                nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben und gleichzeitig
                Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei
                vollständiger Vertragserfüllung verlieren.
              </p>
              <h3 className="font-semibold text-ink-900">Muster-Widerrufsformular</h3>
              <p className="leading-relaxed">
                Wenn Sie den Vertrag widerrufen wollen, können Sie folgenden Text per
                E-Mail senden: &bdquo;Hiermit widerrufe ich den von mir abgeschlossenen
                Vertrag über die Erbringung der folgenden Dienstleistung: [Bezeichnung].
                Bestellt am: [Datum]. Name und Anschrift des Verbrauchers: [&hellip;].
                Datum: [&hellip;].&ldquo;
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">8. Haftung</h2>
              <p className="leading-relaxed">
                Die Anbieterin haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit
                sowie bei Verletzung von Leben, Körper oder Gesundheit. Bei einfacher
                Fahrlässigkeit haftet sie nur für die Verletzung wesentlicher
                Vertragspflichten (Kardinalpflichten), begrenzt auf den
                vertragstypischen, vorhersehbaren Schaden. Die Verantwortung für
                Entscheidungen, die die Kundin/der Kunde auf Grundlage des Coachings
                trifft, verbleibt bei der Kundin/dem Kunden.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">9. Community und kuratiertes Matching</h2>
              <p className="leading-relaxed">
                Für die Community und das kuratierte Matching gelten ergänzend: respektvoller
                Umgang, keine Weitergabe fremder persönlicher Daten, kein kommerzielles
                Anwerben. Die Anbieterin kann Teilnehmende bei Verstößen ausschließen;
                bereits bezahlte, noch nicht erbrachte Leistungen werden in diesem Fall
                anteilig erstattet, außer der Ausschluss beruht auf einem vorsätzlichen
                Verstoß. Ein Anspruch auf eine bestimmte Anzahl von Matching-Vorschlägen
                besteht nur, soweit ausdrücklich vereinbart.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-ink-900">10. Schlussbestimmungen</h2>
              <p className="leading-relaxed">
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
                UN-Kaufrechts; gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit
                ihnen dadurch nicht der Schutz zwingender Bestimmungen des Staates ihres
                gewöhnlichen Aufenthalts entzogen wird. Sollten einzelne Bestimmungen
                dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam. Die
                frühere EU-Plattform zur Online-Streitbeilegung wurde zum 20. Juli 2025
                eingestellt (siehe Impressum); zur Teilnahme an einem
                Verbraucherschlichtungsverfahren ist die Anbieterin nicht verpflichtet
                und nicht bereit.
              </p>
            </div>

            <p className="text-xs text-ink-300">Stand: Juli 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
