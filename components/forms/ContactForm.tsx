"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Kontaktformular.
 *
 * Versand ohne Backend: baut eine vorausgefüllte E-Mail (mailto) und zeigt
 * die Adresse als Fallback an, falls kein E-Mail-Programm eingerichtet ist.
 * TODO (Ausbau): An E-Mail-Service (z. B. Resend) oder Supabase-Tabelle anbinden.
 *
 * Vorbelegung: liest ?thema=… aus der URL (kommt von den Buchungs-Buttons)
 * und setzt Anliegen + Nachricht entsprechend.
 */

const EMPFAENGER = "monika.oechtering@googlemail.com";

const ANLIEGEN_OPTIONEN = [
  "Kostenloses Erstgespräch",
  "Coaching",
  "Community-Zugang anfragen",
  "VIP-Matchklarheit anfragen",
  "Events",
  "Presse / Kooperation",
  "Sonstiges",
] as const;

function anliegenAusThema(thema: string): string {
  if (/erstgespräch/i.test(thema)) return "Kostenloses Erstgespräch";
  if (/community/i.test(thema)) return "Community-Zugang anfragen";
  if (/vip/i.test(thema)) return "VIP-Matchklarheit anfragen";
  if (/event/i.test(thema)) return "Events";
  if (/buchung|session|coaching/i.test(thema)) return "Coaching";
  return "Sonstiges";
}

const inputClass =
  "w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-violet/50 focus:ring-2 focus:ring-brand-violet/20 placeholder:text-ink-400";
const labelClass = "block text-sm font-medium text-ink-700 mb-1.5";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // ?thema=… aus der URL übernehmen (z. B. „Buchung Singlecoaching 1:1 (149 €)“)
  useEffect(() => {
    const thema = new URLSearchParams(window.location.search).get("thema");
    if (!thema) return;
    setSubject(anliegenAusThema(thema));
    setMessage((vorhanden) =>
      vorhanden ? vorhanden : `Anliegen: ${thema}\n\n`
    );
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const betreff = `[klartext-liebe.de] ${subject || "Kontaktanfrage"}`;
    const body = `Name: ${name}\nE-Mail: ${email}\n\n${message}`;
    window.location.href = `mailto:${EMPFAENGER}?subject=${encodeURIComponent(
      betreff
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-brand-soft p-8">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-xl text-white">
          ✓
        </div>
        <h3 className="text-center text-xl font-semibold text-ink-900">
          Fast geschafft – bitte E-Mail absenden
        </h3>
        <p className="mt-2 text-center text-sm text-ink-500">
          Dein E-Mail-Programm sollte sich mit deiner Nachricht geöffnet haben.
          Bitte dort noch auf „Senden“ klicken – erst dann kommt sie bei uns an.
        </p>
        <p className="mt-4 text-center text-sm text-ink-500">
          Kein E-Mail-Fenster aufgegangen? Dann sende deine Nachricht bitte
          direkt an{" "}
          <a
            href={`mailto:${EMPFAENGER}`}
            className="font-medium text-brand-violet underline"
          >
            {EMPFAENGER}
          </a>
          . Deine Nachricht zum Kopieren:
        </p>
        <pre className="mt-3 max-h-48 overflow-auto whitespace-pre-wrap rounded-xl bg-white p-4 text-xs text-ink-600 ring-1 ring-cream-200">
          {`Anliegen: ${subject || "Kontaktanfrage"}\nName: ${name}\nE-Mail: ${email}\n\n${message}`}
        </pre>
        <p className="mt-4 text-center text-xs text-ink-400">
          Wir antworten in der Regel innerhalb von 24 Stunden.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="c-name">
            Name
          </label>
          <input
            id="c-name"
            name="name"
            required
            className={inputClass}
            placeholder="Dein Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="c-email">
            E-Mail
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="du@beispiel.de"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="c-subject">
          Anliegen
        </label>
        <select
          id="c-subject"
          name="subject"
          required
          className={inputClass}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          {ANLIEGEN_OPTIONEN.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="c-message">
          Nachricht
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          required
          className={inputClass}
          placeholder="Worum geht es?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-500">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-cream-200" />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="text-brand-violet underline">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Angaben zu.
        </span>
      </label>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Nachricht per E-Mail senden
      </Button>
      <p className="text-xs text-ink-400">
        Öffnet dein E-Mail-Programm mit der fertigen Nachricht – so landet
        deine Anfrage direkt und ohne Umwege bei Monika.
      </p>
    </form>
  );
}
