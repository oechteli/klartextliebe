import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Community – in Vorbereitung",
  alternates: { canonical: "/community" },
  description:
    "Die Klartext-Liebe-Community für reflektierte Singles ist in Vorbereitung und startet mit unserer Lernplattform. Jetzt unverbindlich vormerken.",
};

/**
 * Stand 02.09.2026: Hinter der Community steckt noch keine Funktion. Die
 * Seite beschreibt ehrlich, was geplant ist, und bietet eine Vormerkung
 * über das bestehende Kontaktformular (Anliegen „Vormerkung Community").
 *
 * Archiv der früheren Formulierungen (nicht mehr verwendet):
 *   Hero: "Eine Community für Singles mit Tiefgang" / Karte "Jetzt Zugang
 *   anfragen" – "Die Community öffnet fortlaufend für neue Mitglieder." –
 *   "Persönliche Rückmeldung von Monika innerhalb von 48 h" –
 *   Button "/kontakt?thema=Community-Zugang+anfragen".
 */

const benefits = [
  "Geschützter Austausch auf Augenhöhe",
  "Datingfragen ehrlich besprechen",
  "Reflexionsaufgaben & Deep-Talk-Impulse",
  "Live-Q&As mit echten Antworten",
  "Chat- und Profilfeedback",
  "Stadtgruppen für lokale Begegnungen",
  "Thematische Gruppen",
  "Austausch über Werte, Kommunikation & Muster",
  "Online-Gespräche mit Tiefgang",
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        badge="In Vorbereitung"
        eyebrow="Community"
        title="Eine Community für Singles mit Tiefgang – bald"
        subtitle="Für reflektierte Singles, die keinen Swipe-Marktplatz wollen, sondern echten Austausch auf Augenhöhe. Die Community startet mit unserer Lernplattform. Bis dahin kannst du dich unverbindlich vormerken."
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">
                So ist die Community gedacht
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Das ist der Plan – nichts davon läuft heute schon. Wir bauen
                die Community auf unserer Lernplattform auf, damit Austausch,
                Live-Formate und Moderation von Anfang an sauber funktionieren.
              </p>
              <ul className="mt-6 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-violet/10 text-xs text-brand-violet">
                      ✓
                    </span>
                    <span className="text-ink-700">{b}</span>
                  </li>
                ))}
              </ul>

              <Card className="mt-8 !p-6 bg-brand-soft ring-0">
                <h3 className="text-base font-semibold text-ink-900">
                  Klare Regeln, sicherer Raum
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  Die Community wird kein Ort für Belästigung, Manipulation,
                  toxisches Verhalten oder respektlose Kontaktaufnahme. Es
                  gelten von Anfang an klare Regeln, und Verstöße werden
                  konsequent moderiert.
                </p>
              </Card>

              <Card className="mt-6 !p-6">
                <h3 className="text-base font-semibold text-ink-900">
                  Was du heute schon nutzen kannst
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  Das Coaching ist da: kostenloses Erstgespräch, schriftliche
                  Profil- &amp; Chat-Analyse und persönliche Gespräche mit
                  Monika – alles über die{" "}
                  <a
                    href="/coaching"
                    className="font-medium text-brand-violet underline underline-offset-2"
                  >
                    Coaching-Seite
                  </a>
                  .
                </p>
              </Card>
            </div>

            <div>
              <Card className="!p-6 sm:!p-8">
                <Badge tone="soon" className="mb-3">
                  Unverbindliche Vormerkung
                </Badge>
                <h2 className="text-2xl font-bold text-ink-900">
                  Für den Community-Start vormerken
                </h2>
                <p className="mt-2 text-ink-500">
                  Schreib kurz, wer du bist und was dich an der Community
                  interessiert. Wir melden uns, sobald es losgeht – kein
                  Newsletter, keine Werbung, und du kannst dich jederzeit
                  wieder austragen lassen.
                </p>
                <div className="mt-6">
                  <ContactForm
                    standardAnliegen="Vormerkung Community"
                    standardNachricht={
                      "Ich möchte mich für den Start der Community vormerken.\n\nWas mich interessiert: "
                    }
                    buttonText="Vormerken"
                    erfolgText="Du bist vorgemerkt. Wir melden uns persönlich, sobald die Community startet."
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
