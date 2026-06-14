/**
 * Typen für die KI-Persönlichkeits- & Resonanzanalyse (/analyse).
 * Im MVP rein clientseitig; später Persistenz in Supabase
 * (Tabelle questionnaire_answers) + echte KI-Auswertung.
 */

export type QuestionType =
  | "text"
  | "textarea"
  | "number"
  | "select"
  | "radio"
  | "scale"; // 1–5 Skala

export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  label: string;
  help?: string;
  type: QuestionType;
  placeholder?: string;
  options?: QuestionOption[];
  /** Sensibel = im Datenschutz besonders behandeln */
  sensitive?: boolean;
  required?: boolean;
}

export interface QuestionnaireStep {
  id: string;
  title: string;
  subtitle?: string;
  questions: Question[];
}

/** Antworten: Frage-ID -> Wert (String, Skala als String) */
export type QuestionnaireAnswers = Record<string, string>;

/** Ergebnis der (vorerst gemockten) Analyse */
export interface AnalysisResult {
  communicationStyle: string;
  topValues: string[];
  resonanceProfile: string;
  possiblePatterns: string[];
  needsWhenDating: string[];
  likelyGoodMatches: string;
  dynamicsToAvoid: string[];
  conversationsThatFitYou: string[];
}
