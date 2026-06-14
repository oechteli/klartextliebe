"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Wartelistenformular für die Community.
 *
 * MVP: Speichert NICHT echt – simuliert nur den Absende-Vorgang.
 *
 * TODO (Supabase): In handleSubmit createBrowserSupabaseClient() nutzen
 * und in die Tabelle `waitlist` schreiben (siehe supabase/migrations).
 * Vorher Einwilligung (DSGVO) per Checkbox einholen (bereits enthalten).
 */

const inputClass =
  "w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-violet/50 focus:ring-2 focus:ring-brand-violet/20 placeholder:text-ink-400";
const labelClass = "block text-sm font-medium text-ink-700 mb-1.5";

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: echten Supabase-Insert ergänzen.
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-brand-soft p-8 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-xl text-white">
          ✓
        </div>
        <h3 className="text-xl font-semibold text-ink-900">
          Danke – du stehst auf der Warteliste!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
          Wir melden uns, sobald die Community öffnet. Bis dahin findest du
          Impulse auf unserem YouTube-Kanal.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="wl-name">
            Name
          </label>
          <input id="wl-name" name="name" required className={inputClass} placeholder="Vor- und Nachname" />
        </div>
        <div>
          <label className={labelClass} htmlFor="wl-email">
            E-Mail
          </label>
          <input
            id="wl-email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="du@beispiel.de"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="wl-city">
            Stadt
          </label>
          <input id="wl-city" name="city" className={inputClass} placeholder="z. B. Karlsruhe" />
        </div>
        <div>
          <label className={labelClass} htmlFor="wl-age">
            Altersgruppe
          </label>
          <select id="wl-age" name="age_group" className={inputClass} defaultValue="">
            <option value="" disabled>
              Bitte wählen
            </option>
            <option>28–34</option>
            <option>35–44</option>
            <option>45–54</option>
            <option>55+</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="wl-background">
          Bildungs-/Interessenshintergrund <span className="text-ink-400">(optional)</span>
        </label>
        <input
          id="wl-background"
          name="background"
          className={inputClass}
          placeholder="z. B. Naturwissenschaft, Kunst, Philosophie …"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="wl-seeking">
          Was suchst du?
        </label>
        <textarea
          id="wl-seeking"
          name="seeking"
          rows={3}
          className={inputClass}
          placeholder="Was wünschst du dir von der Community und vom Dating?"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="wl-conversation">
          Was macht für dich ein gutes Gespräch aus?
        </label>
        <textarea
          id="wl-conversation"
          name="good_conversation"
          rows={3}
          className={inputClass}
          placeholder="Erzähl uns, was dich in Gesprächen lebendig macht."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-500">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-cream-200" />
        <span>
          Ich stimme zu, dass meine Angaben zur Kontaktaufnahme bezüglich der
          Warteliste gespeichert werden. Details in der{" "}
          <a href="/datenschutz" className="text-brand-violet underline">
            Datenschutzerklärung
          </a>
          .
        </span>
      </label>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "Wird gesendet …" : "Warteliste beitreten"}
      </Button>
    </form>
  );
}
