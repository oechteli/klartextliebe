"use client";

import { useState } from "react";
import { questionnaireSteps } from "@/lib/questionnaire-data";
import { analyzeProfile } from "@/lib/analyze-profile";
import type {
  QuestionnaireAnswers,
  AnalysisResult,
} from "@/types/questionnaire";
import { QuestionStep } from "./QuestionStep";
import { ResultPreview } from "./ResultPreview";
import { Button } from "@/components/ui/Button";

export function Questionnaire() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const total = questionnaireSteps.length;
  const step = questionnaireSteps[current];
  const isLast = current === total - 1;
  const progress = Math.round(((current + 1) / total) * 100);

  function handleChange(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function next() {
    if (!isLast) {
      setCurrent((c) => c + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function prev() {
    if (current > 0) {
      setCurrent((c) => c - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function finish() {
    setAnalyzing(true);
    // TODO: später echte KI-Analyse serverseitig (siehe lib/analyze-profile.ts)
    const r = await analyzeProfile(answers);
    setResult(r);
    setAnalyzing(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    setAnswers({});
    setResult(null);
    setCurrent(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (result) {
    return <ResultPreview result={result} onRestart={restart} />;
  }

  return (
    <div>
      {/* Fortschritt */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-ink-700">
            Schritt {current + 1} von {total}
          </span>
          <span className="text-ink-400">{step.title}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-cream-200">
          <div
            className="h-2 rounded-full bg-brand-gradient transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-cream-200 bg-white p-6 shadow-soft sm:p-10">
        <QuestionStep step={step} answers={answers} onChange={handleChange} />

        <div className="mt-10 flex items-center justify-between gap-4">
          <Button
            type="button"
            variant="ghost"
            onClick={prev}
            disabled={current === 0}
          >
            ← Zurück
          </Button>

          {isLast ? (
            <Button type="button" onClick={finish} disabled={analyzing}>
              {analyzing ? "Wird ausgewertet …" : "Auswertung ansehen"}
            </Button>
          ) : (
            <Button type="button" onClick={next}>
              Weiter →
            </Button>
          )}
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-ink-400">
        Deine Angaben werden im MVP nur in deinem Browser verarbeitet und nicht
        gespeichert. Sensible Felder behandeln wir besonders vertraulich.
      </p>
    </div>
  );
}
