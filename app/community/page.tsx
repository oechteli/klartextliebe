import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Die geschützte Klartext-Liebe-Community für reflektierte Singles, Akademiker und Menschen mit Tiefgang. Jetzt auf die Warteliste.",
};

const benefits = [
  "Geschützter Austausch auf Augenhöhe",
  "Datingfragen ehrlich besprechen",
  "Reflexionsaufgaben & Deep-Talk-Impulse",
  "Live-Q&As mit echten Antworten",
  "Chat- und Profilfeedback",
  "Stadtgruppen für lokale Begegnungen",
  "Thematische Gruppen",
  "Austausch über Werte, Kommunikation & Muster",
  "Online-Gesprächsabende",
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        badge="In Vorbereitung"
        title="Eine Community für Singles mit Tiefgang"
        subtitle="Für reflektierte Singles, Akademiker, sapiosexuelle Menschen und alle, die keine Lust mehr auf oberflächliche Datingmechaniken haben."
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">
                Was die Community bietet
              </h2>
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
                  Die Community ist kein Ort für Belästigung, Manipulation,
                  toxisches Verhalten oder respektlose Kontaktaufnahme. Es gelten
                  klare Regeln, und Verstöße werden konsequent moderiert.
                </p>
              </Card>
            </div>

            <div>
              <Card className="!p-6 sm:!p-8">
                <h2 className="text-2xl font-bold text-ink-900">
                  Auf die Warteliste
                </h2>
                <p className="mt-2 text-sm text-ink-500">
                  Sei dabei, sobald die Community öffnet. Erzähl uns kurz, was du
                  suchst.
                </p>
                <div className="mt-6">
                  <WaitlistForm />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
