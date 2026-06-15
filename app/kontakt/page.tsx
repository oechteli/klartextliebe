import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Kontakt",
  alternates: { canonical: "/kontakt" },
  description:
    "Schreib uns – zu Coaching, Community, VIP-Matchklarheit, Events oder Kooperationen.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Lass uns ins Gespräch kommen"
        subtitle="Ob Coaching, Community, VIP-Anfrage oder eine Frage zu einem Event – schreib uns einfach."
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr]">
            <Card className="!p-6 sm:!p-8">
              <ContactForm />
            </Card>

            <div className="space-y-6">
              <Card className="!p-6 bg-brand-soft ring-0">
                <h3 className="text-base font-semibold text-ink-900">
                  Worauf du dich verlassen kannst
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-600">
                  <li>· Vertraulicher Umgang mit deinen Angaben</li>
                  <li>· Ehrliche, empathische Antworten</li>
                  <li>· Keine Werbung, kein Spam</li>
                </ul>
              </Card>
              <Card className="!p-6">
                <h3 className="text-base font-semibold text-ink-900">
                  VIP-Matchklarheit anfragen
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  Wähle im Formular einfach „VIP-Matchklarheit anfragen“ als
                  Anliegen – wir melden uns mit den nächsten Schritten.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
