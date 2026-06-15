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
      <PageHero title="Datenschutz" />
      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl space-y-6 text-ink-600">
            <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-5 text-sm text-ink-700">
              <strong className="text-ink-900">Bitte ergänzen:</strong> Es wird
              eine vollständige, DSGVO-konforme Datenschutzerklärung benötigt –
              insbesondere wegen Fragebogen, Community, Profilen, Stripe und
              späterer KI-Analyse.
            </div>

            <p>
              Diese Seite ist ein Platzhalter. Die folgende Liste zeigt
              Verarbeitungen, die in der finalen Erklärung beschrieben werden
              müssen:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-ink-900">Kontakt- & Wartelistenformulare:</strong>{" "}
                Verarbeitung von Name, E-Mail und freiwilligen Angaben zur
                Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. a/b DSGVO).
              </li>
              <li>
                <strong className="text-ink-900">Persönlichkeits- & Resonanzanalyse:</strong>{" "}
                Der Fragebogen enthält sensible Angaben (Beziehungsmuster,
                Erfahrungen). Diese sind besonders schützenswert und dürfen nur
                mit ausdrücklicher Einwilligung gespeichert/ausgewertet werden.
              </li>
              <li>
                <strong className="text-ink-900">Spätere KI-Analyse:</strong>{" "}
                Bei Anbindung externer KI-Dienste (z. B. OpenAI/Claude) müssen
                Auftragsverarbeitung, Datenflüsse und ggf. Drittlandtransfer
                offengelegt werden.
              </li>
              <li>
                <strong className="text-ink-900">Stripe (Zahlungen):</strong>{" "}
                Bei Buchungen werden Zahlungsdaten durch Stripe verarbeitet.
              </li>
              <li>
                <strong className="text-ink-900">Supabase (Hosting/DB):</strong>{" "}
                Speicherung von Konto-, Profil- und Formulardaten.
              </li>
              <li>
                <strong className="text-ink-900">Community & Marktplatz:</strong>{" "}
                Profildaten werden nur nach ausdrücklicher Zustimmung sichtbar;
                keine Veröffentlichung sensibler Daten oder echter Kontaktdaten.
              </li>
            </ul>

            <p className="text-sm text-ink-400">
              Dieser Platzhalter ersetzt keine Rechtsberatung. Bitte eine
              geprüfte Datenschutzerklärung einsetzen, bevor echte Daten erhoben
              werden.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
