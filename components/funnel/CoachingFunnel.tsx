"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

/**
 * Coaching-Funnel (/starte-jetzt), Vorbild Relationship Hero:
 * 4 kurze Fragen (je eine pro Schritt, Fortschrittsbalken) → danach
 * SOFORT der bestehende KI-Chat (public/chat.js), ohne Umweg.
 *
 * Bewusst ohne Login und ohne Server: Die Antworten bleiben im Browser
 * (sessionStorage) und werden dem Chat als Kontext mitgegeben
 * (Feld `context` an POST /api/chat – rückwärtskompatibel, optional).
 */

type Antworten = {
  status?: string;
  thema?: string;
  wunsch?: string;
  kanal?: string;
};

// Schlüssel, die auch public/chat.js kennt:
const KONTEXT_KEY = "kl-chat-kontext";
const AUTOOPEN_KEY = "kl-chat-autoopen";
// Nur für den Funnel selbst (Wiederherstellen nach Zurück-Navigation):
const ANTWORTEN_KEY = "kl-funnel-antworten";

interface Schritt {
  key: keyof Antworten;
  frage: string;
  optionen?: { label: string; hinweis?: string }[];
  freitext?: { placeholder: string };
}

const SCHRITTE: Schritt[] = [
  {
    key: "status",
    frage: "Wo stehst du gerade?",
    optionen: [
      { label: "Single" },
      { label: "In Trennung" },
      { label: "Beziehung mit Problemen" },
      { label: "Es ist kompliziert" },
    ],
  },
  {
    key: "thema",
    frage: "Worum geht es dir vor allem?",
    optionen: [
      { label: "Neue Liebe finden" },
      { label: "Ex zurück / Trennung verarbeiten" },
      { label: "Dating-Frust" },
      { label: "Beziehung retten" },
    ],
  },
  {
    key: "wunsch",
    frage: "Was wünschst du dir in 3 Monaten?",
    freitext: {
      placeholder:
        "z. B. wieder Freude am Kennenlernen, Klarheit über meine Beziehung, inneren Frieden nach der Trennung …",
    },
  },
  {
    key: "kanal",
    frage: "Wie möchtest du am liebsten sprechen?",
    optionen: [
      { label: "Chat", hinweis: "schriftlich, in deinem Tempo" },
      { label: "Telefon", hinweis: "persönlich, ohne Kamera" },
      { label: "Video", hinweis: "von Angesicht zu Angesicht" },
    ],
  },
];

/** Öffnet das globale Chat-Widget (public/chat.js). */
function chatOeffnen(): void {
  const w = window as unknown as { klChatOpen?: () => void };
  if (typeof w.klChatOpen === "function") {
    w.klChatOpen();
    return;
  }
  // Fallback: Widget noch nicht geladen → beim nächsten Laden automatisch öffnen.
  try {
    sessionStorage.setItem(AUTOOPEN_KEY, "1");
  } catch {
    /* sessionStorage nicht verfügbar – kein Blocker */
  }
}

function Fortschritt({ wert, label }: { wert: number; label: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-medium text-ink-400">
        <span>{label}</span>
        <span>{Math.round(wert)} %</span>
      </div>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full bg-cream-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(wert)}
        aria-label="Fortschritt im Fragebogen"
      >
        <div
          className="h-full rounded-full bg-brand-gradient transition-all duration-300"
          style={{ width: `${wert}%` }}
        />
      </div>
    </div>
  );
}

export function CoachingFunnel() {
  const [schritt, setSchritt] = useState(0);
  const [antworten, setAntworten] = useState<Antworten>({});
  const [wunschText, setWunschText] = useState("");
  const [fertig, setFertig] = useState(false);

  // Bereits gegebene Antworten wiederherstellen (z. B. nach Seitenwechsel).
  useEffect(() => {
    try {
      const roh = sessionStorage.getItem(ANTWORTEN_KEY);
      if (roh) {
        const alt = JSON.parse(roh) as Antworten;
        setAntworten(alt);
        if (alt.wunsch) setWunschText(alt.wunsch);
      }
    } catch {
      /* kein sessionStorage – Funnel funktioniert trotzdem */
    }
  }, []);

  function speichern(neu: Antworten) {
    setAntworten(neu);
    try {
      sessionStorage.setItem(ANTWORTEN_KEY, JSON.stringify(neu));
    } catch {
      /* ignorieren */
    }
  }

  function abschliessen(neu: Antworten) {
    const kontext = [
      neu.status && `Beziehungsstatus: ${neu.status}`,
      neu.thema && `Anliegen: ${neu.thema}`,
      neu.wunsch && `Wunsch in 3 Monaten: ${neu.wunsch}`,
      neu.kanal && `Gewünschter Gesprächskanal: ${neu.kanal}`,
    ]
      .filter(Boolean)
      .join("\n");
    try {
      sessionStorage.setItem(KONTEXT_KEY, kontext);
    } catch {
      /* ignorieren */
    }
    setFertig(true);
    // Sofort-Übergang: Chat direkt öffnen, keine Wartezeit, kein Termin.
    chatOeffnen();
  }

  function waehlen(key: keyof Antworten, wert: string) {
    const neu = { ...antworten, [key]: wert };
    speichern(neu);
    if (schritt < SCHRITTE.length - 1) {
      setSchritt(schritt + 1);
    } else {
      abschliessen(neu);
    }
  }

  function weiterMitFreitext(e: React.FormEvent) {
    e.preventDefault();
    waehlen(SCHRITTE[schritt].key, wunschText.trim());
  }

  if (fertig) {
    return (
      <div className="mx-auto max-w-xl animate-fade-up">
        <Fortschritt wert={100} label="Geschafft!" />
        <div className="mt-6 rounded-2xl bg-white p-8 text-center shadow-card ring-1 ring-cream-200">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-xl text-white">
            💬
          </div>
          <h2 className="mt-4 text-2xl font-bold text-ink-900">
            Dein KI-Coach ist sofort für dich da – kostenlos.
          </h2>
          <p className="mt-3 text-ink-500">
            Der Chat unten rechts hat sich geöffnet und kennt deine Antworten
            bereits. Du sprichst dort mit einer <strong>KI</strong> – klar
            gekennzeichnet, ohne Termin, so lange du magst. Wenn du tiefer
            gehen willst, übernimmt <strong>Monika persönlich</strong>.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={() => chatOeffnen()}>Chat öffnen 💬</Button>
            <Button href="/persoenliches-coaching" variant="secondary">
              Persönliches Coaching ansehen
            </Button>
          </div>
          <p className="mt-5 text-xs text-ink-400">
            Lieber direkt mit Monika sprechen?{" "}
            <Link
              href="/kontakt?thema=Kostenloses+Erstgespräch"
              className="text-brand-violet underline underline-offset-2"
            >
              Kostenloses Erstgespräch anfragen
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }

  const aktuell = SCHRITTE[schritt];

  return (
    <div className="mx-auto max-w-xl">
      <Fortschritt
        wert={(schritt / SCHRITTE.length) * 100}
        label={`Schritt ${schritt + 1} von ${SCHRITTE.length}`}
      />

      <div
        key={schritt}
        className="mt-6 animate-fade-up rounded-2xl bg-white p-6 shadow-card ring-1 ring-cream-200 sm:p-8"
      >
        <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
          {aktuell.frage}
        </h2>

        {aktuell.optionen ? (
          <div className="mt-6 grid gap-3">
            {aktuell.optionen.map((option) => {
              const aktiv = antworten[aktuell.key] === option.label;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => waehlen(aktuell.key, option.label)}
                  className={[
                    "w-full rounded-xl border px-5 py-4 text-left transition-all duration-150",
                    aktiv
                      ? "border-brand-violet bg-brand-violet/5 ring-1 ring-brand-violet/40"
                      : "border-cream-200 bg-white hover:border-brand-violet/40 hover:bg-brand-violet/5",
                  ].join(" ")}
                >
                  <span className="font-medium text-ink-900">
                    {option.label}
                  </span>
                  {option.hinweis && (
                    <span className="mt-0.5 block text-sm text-ink-400">
                      {option.hinweis}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <form onSubmit={weiterMitFreitext} className="mt-6">
            <label htmlFor="funnel-wunsch" className="sr-only">
              Dein Wunsch in 3 Monaten
            </label>
            <textarea
              id="funnel-wunsch"
              rows={4}
              value={wunschText}
              onChange={(e) => setWunschText(e.target.value)}
              placeholder={aktuell.freitext?.placeholder}
              className="w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition placeholder:text-ink-400 focus:border-brand-violet/50 focus:ring-2 focus:ring-brand-violet/20"
            />
            <p className="mt-2 text-xs text-ink-400">
              Ein, zwei Sätze reichen völlig – du kannst das Feld auch leer
              lassen.
            </p>
            <Button type="submit" className="mt-4 w-full sm:w-auto">
              Weiter →
            </Button>
          </form>
        )}

        {schritt > 0 && (
          <button
            type="button"
            onClick={() => setSchritt(schritt - 1)}
            className="mt-6 text-sm text-ink-400 transition-colors hover:text-ink-700"
          >
            ← Zurück
          </button>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-ink-400">
        Ohne Login · deine Antworten bleiben in deinem Browser (nur für diese
        Sitzung)
      </p>
    </div>
  );
}
