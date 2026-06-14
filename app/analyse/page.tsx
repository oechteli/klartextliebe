import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Questionnaire } from "@/components/questionnaire/Questionnaire";

export const metadata: Metadata = {
  title: "Persönlichkeits- & Resonanzanalyse",
  description:
    "Verstehe deine Werte, Beziehungsmuster, Kommunikationsstil und Resonanz besser – als Basis für bewusstere Partnerwahl und echte Verbindung.",
};

export default function AnalysePage() {
  return (
    <>
      <PageHero
        eyebrow="Persönlichkeitsanalyse"
        title="Verstehe dich – als Basis für echte Verbindung"
        subtitle="Ein ausführlicher Fragebogen zu Werten, Beziehungsmustern, Kommunikation, Resonanz, Lebenszielen und Datingverhalten. Am Ende erhältst du eine orientierende Auswertung."
      />

      <section className="section">
        <div className="container-kl">
          <div className="mx-auto max-w-3xl">
            <Questionnaire />
          </div>
        </div>
      </section>
    </>
  );
}
