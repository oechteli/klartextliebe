"use client";

import type { AnalysisResult } from "@/types/questionnaire";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ResultPreviewProps {
  result: AnalysisResult;
  onRestart: () => void;
}

function ListCard({
  title,
  items,
  tone = "brand",
}: {
  title: string;
  items: string[];
  tone?: "brand" | "turquoise" | "pink" | "orange";
}) {
  const dot =
    tone === "turquoise"
      ? "text-brand-turquoise"
      : tone === "pink"
        ? "text-brand-pink"
        : tone === "orange"
          ? "text-brand-orange"
          : "text-brand-violet";
  return (
    <Card className="!p-6">
      <h3 className="text-base font-semibold text-ink-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-ink-700">
            <span className={`mt-0.5 ${dot}`}>●</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function ResultPreview({ result, onRestart }: ResultPreviewProps) {
  return (
    <div className="animate-fade-up">
      <div className="text-center">
        <Badge tone="brand" className="mb-4">
          Deine Auswertung (Vorschau)
        </Badge>
        <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">
          Dein Resonanzprofil
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-500">
          Eine orientierende Auswertung – keine Diagnose und keine Garantie. Sie
          soll dir helfen, dich selbst und deine Begegnungen besser zu verstehen.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="!p-6 md:col-span-2 bg-brand-soft ring-0">
          <h3 className="text-base font-semibold text-ink-900">
            Dein Kommunikationsstil
          </h3>
          <p className="mt-2 text-ink-700">{result.communicationStyle}</p>
          <h3 className="mt-5 text-base font-semibold text-ink-900">
            Dein Resonanzprofil
          </h3>
          <p className="mt-2 text-ink-700">{result.resonanceProfile}</p>
        </Card>

        <ListCard title="Deine wichtigsten Werte" items={result.topValues} tone="turquoise" />
        <ListCard
          title="Was du beim Kennenlernen brauchst"
          items={result.needsWhenDating}
          tone="brand"
        />
        <ListCard
          title="Mögliche Datingmuster"
          items={result.possiblePatterns}
          tone="orange"
        />
        <ListCard
          title="Dynamiken, die du vermeiden solltest"
          items={result.dynamicsToAvoid}
          tone="pink"
        />
        <ListCard
          title="Gespräche & Begegnungen, die dir guttun"
          items={result.conversationsThatFitYou}
          tone="turquoise"
        />
        <Card className="!p-6">
          <h3 className="text-base font-semibold text-ink-900">
            Welche Menschen vermutlich besser zu dir passen
          </h3>
          <p className="mt-3 text-sm text-ink-700">{result.likelyGoodMatches}</p>
        </Card>
      </div>

      <div className="mt-10 rounded-2xl border border-cream-200 bg-white p-6 text-center sm:p-8">
        <h3 className="text-lg font-semibold text-ink-900">
          Möchtest du tiefer gehen?
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
          Im persönlichen Coaching schauen wir gemeinsam genauer hin – auf deine
          Muster, deine Kommunikation und deinen Weg zu echter Verbindung.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/coaching">Coaching ansehen</Button>
          <Button variant="ghost" type="button" onClick={onRestart}>
            Analyse neu starten
          </Button>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-xl text-center text-xs text-ink-400">
        Hinweis: Diese Auswertung ist eine Orientierung und ersetzt keine
        psychologische oder therapeutische Beratung.
      </p>
    </div>
  );
}
