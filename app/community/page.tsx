import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Community",
  alternates: { canonical: "/community" },
  description:
    "Die Klartext-Liebe-Community fuer reflektierte Singles: ehrlicher Austausch, Deep-Talk-Impulse, Live-Q&As und Stadtgruppen.",
};

const benefits = [
  "Geschuetzter Austausch auf Augenhoehe",
  "Datingfragen ehrlich besprechen",
  "Reflexionsaufgaben & Deep-Talk-Impulse",
  "Live-Q&As mit echten Antworten",
  "Chat- und Profilfeedback",
  "Stadtgruppen fuer lokale Begegnungen",
  "Thematische Gruppen",
  "Austausch ueber Werte, Kommunikation & Muster",
  "Online-Gespraeche mit Tiefgang",
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Eine Community fuer Singles mit Tiefgang"
        subtitle="Fuer reflektierte Singles, die keinen Swipe-Marktplatz wollen, sondern echten Austausch auf Augenhoehe."
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
                  Die Community ist kein Ort fuer Belaestigung, Manipulation,
                  toxisches Verhalten oder respektlose Kontaktaufnahme. Es gelten
                  klare Regeln, und Verstoesse werden konsequent moderiert.
                </p>
              </Card>
            </div>

            <div>
              <Card className="!p-6 sm:!p-8">
                <h2 className="text-2xl font-bold text-ink-900">
                  Jetzt Zugang anfragen
                </h2>
                <p className="mt-2 text-ink-500">
                  Die Community oeffnet fortlaufend fuer neue Mitglieder. Schreib
                  uns kurz, wer du bist und was dich hierher bringt.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-cream-200 bg-cream-50 p-4">
                    <p className="text-sm font-semibold text-ink-900">
                      Was wir wissen moechten:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-ink-500">
                      <li>✓ Wer du bist (kurz)</li>
                      <li>✓ Was dich an der Community interessiert</li>
                      <li>✓ Deine E-Mail-Adresse fuer die Rueckmeldung</li>
                    </ul>
                  </div>
                  <Button
                    href="/kontakt?thema=Community-Zugang+anfragen"
                    className="w-full"
                    size="lg"
                  >
                    Zugang anfragen
                  </Button>
                  <p className="text-center text-xs text-ink-400">
                    Persoenliche Rueckmeldung von Monika innerhalb von 48 h
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
