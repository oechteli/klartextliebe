"use client";

import type {
  QuestionnaireStep,
  QuestionnaireAnswers,
  Question,
} from "@/types/questionnaire";
import { Badge } from "@/components/ui/Badge";

interface QuestionStepProps {
  step: QuestionnaireStep;
  answers: QuestionnaireAnswers;
  onChange: (id: string, value: string) => void;
}

const inputClass =
  "w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-violet/50 focus:ring-2 focus:ring-brand-violet/20 placeholder:text-ink-400";

function Field({
  q,
  value,
  onChange,
}: {
  q: Question;
  value: string;
  onChange: (v: string) => void;
}) {
  switch (q.type) {
    case "textarea":
      return (
        <textarea
          rows={3}
          className={inputClass}
          placeholder={q.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "number":
      return (
        <input
          type="number"
          className={inputClass}
          placeholder={q.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "select":
      return (
        <select
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Bitte wählen</option>
          {q.options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    case "radio":
      return (
        <div className="flex flex-wrap gap-2">
          {q.options?.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium ring-1 transition",
                value === o.value
                  ? "bg-brand-violet/10 text-brand-violet ring-brand-violet/40"
                  : "bg-white text-ink-700 ring-cream-200 hover:bg-cream-100",
              ].join(" ")}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
    case "scale":
      return (
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onChange(String(n))}
              className={[
                "h-11 w-11 rounded-xl text-sm font-semibold ring-1 transition",
                value === String(n)
                  ? "bg-brand-gradient text-white ring-transparent"
                  : "bg-white text-ink-700 ring-cream-200 hover:bg-cream-100",
              ].join(" ")}
              aria-label={`Wert ${n} von 5`}
            >
              {n}
            </button>
          ))}
        </div>
      );
    default:
      return (
        <input
          type="text"
          className={inputClass}
          placeholder={q.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
}

export function QuestionStep({ step, answers, onChange }: QuestionStepProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-ink-900">{step.title}</h2>
        {step.subtitle && (
          <p className="mt-2 text-ink-500">{step.subtitle}</p>
        )}
      </div>

      <div className="space-y-6">
        {step.questions.map((q) => (
          <div key={q.id}>
            <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-ink-700">
              {q.label}
              {q.sensitive && (
                <Badge tone="soon" className="!py-0.5 !text-[10px]">
                  vertraulich
                </Badge>
              )}
            </label>
            {q.help && <p className="mb-2 text-xs text-ink-400">{q.help}</p>}
            <Field
              q={q}
              value={answers[q.id] ?? ""}
              onChange={(v) => onChange(q.id, v)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
