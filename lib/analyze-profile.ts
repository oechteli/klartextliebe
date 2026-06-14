/**
 * Auswertung der Persönlichkeits- & Resonanzanalyse.
 *
 * MVP: rein gemockte, regelbasierte Funktion, die aus den Antworten
 * eine plausible, hochwertige Ergebnis-Preview erzeugt.
 *
 * WICHTIG (rechtlich/ethisch):
 *  - Keine 100%-Match-Versprechen.
 *  - Formulierungen bleiben bei "Orientierung", "bessere Passung",
 *    "mögliche Muster" – niemals Garantien.
 *
 * TODO (echte KI-Integration später):
 *  - Antworten an Claude/OpenAI senden (serverseitig, API-Key aus env)
 *  - Strukturierte Ausgabe gemäß types/questionnaire.ts erzwingen
 *  - Ergebnis in Supabase (analysis_results) speichern
 *  - Sensible Felder vorher pseudonymisieren / Einwilligung prüfen
 */

import type {
  QuestionnaireAnswers,
  AnalysisResult,
} from "@/types/questionnaire";

export async function analyzeProfile(
  answers: QuestionnaireAnswers
): Promise<AnalysisResult> {
  // Simuliert eine kurze "Analyse"-Zeit für realistisches Gefühl.
  await new Promise((r) => setTimeout(r, 600));

  const komm = answers["kommunikationstyp"] ?? "";
  const tempo = answers["tempo"] ?? "";
  const tiefe = Number(answers["tiefe_am_anfang"] ?? "3");

  const communicationStyleMap: Record<string, string> = {
    direkt: "Du kommunizierst klar und direkt – das schafft schnell Orientierung.",
    vorsichtig:
      "Du gehst behutsam in Kontakt. Deine Tiefe zeigt sich, wenn Vertrauen da ist.",
    analytisch:
      "Du näherst dich Menschen denkend und beobachtend – Resonanz entsteht über Gespräche.",
    emotional:
      "Du spürst Verbindung früh und intensiv – Echtheit ist dir wichtiger als Taktik.",
  };

  // Hinweis: Diese Inhalte sind bewusst orientierend, nicht diagnostisch.
  return {
    communicationStyle:
      communicationStyleMap[komm] ??
      "Dein Kommunikationsstil ist vielschichtig – du passt dich der Situation an.",
    topValues: [
      "Ehrlichkeit & Klarheit",
      "Tiefe statt Smalltalk",
      "Verlässlichkeit und echtes Interesse",
    ],
    resonanceProfile:
      tiefe >= 4
        ? "Du suchst von Beginn an geistige Resonanz und Substanz – Oberflächlichkeit ermüdet dich schnell."
        : "Du lässt Tiefe wachsen und schätzt Menschen, die Schritt für Schritt mehr von sich zeigen.",
    possiblePatterns: [
      "Tendenz, vielversprechende Kontakte gedanklich stark zu analysieren",
      "Interesse kann durch Zurückhaltung leiser wirken, als es ist",
    ],
    needsWhenDating: [
      "Gespräche mit Substanz statt Smalltalk",
      "Verbindlichkeit und ehrliche Signale",
      tempo === "schnell"
        ? "frühe Klarheit über gegenseitiges Interesse"
        : "Raum, Verbindung in deinem Tempo wachsen zu lassen",
    ],
    likelyGoodMatches:
      "Vermutlich passen Menschen gut zu dir, die Neugier, emotionale Reife und Gesprächsfreude mitbringen – und die Verbindlichkeit nicht scheuen. (Orientierung, keine Garantie.)",
    dynamicsToAvoid: [
      "Spielchen, Hinhalten und unklare Signale",
      "Dauer-Dating ohne echte Absicht",
      "Kontakte, bei denen geistige Resonanz dauerhaft fehlt",
    ],
    conversationsThatFitYou: [
      "Gespräche über Werte, Lebensziele und das, was euch antreibt",
      "Ehrlicher Austausch über Erwartungen und Gefühle",
      "Themen, bei denen ihr euch gegenseitig zum Denken bringt",
    ],
  };
}
