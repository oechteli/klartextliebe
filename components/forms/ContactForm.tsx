"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Kontaktformular.
 *
 * MVP: simuliert das Senden.
 * TODO: An E-Mail-Service (z. B. Resend) oder Supabase-Tabelle anbinden.
 */

const inputClass =
  "w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-brand-violet/50 focus:ring-2 focus:ring-brand-violet/20 placeholder:text-ink-400";
const labelClass = "block text-sm font-medium text-ink-700 mb-1.5";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
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
          Danke für deine Nachricht!
        </h3>
        <p className="mt-2 text-sm text-ink-500">
          Wir melden uns so bald wie möglich bei dir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="c-name">
            Name
          </label>
          <input id="c-name" name="name" required className={inputClass} placeholder="Dein Name" />
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
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="c-subject">
          Anliegen
        </label>
        <select id="c-subject" name="subject" className={inputClass} defaultValue="">
          <option value="" disabled>
            Bitte wählen
          </option>
          <option>Coaching</option>
          <option>Community-Zugang anfragen</option>
          <option>VIP-Matchklarheit anfragen</option>
          <option>Events</option>
          <option>Presse / Kooperation</option>
          <option>Sonstiges</option>
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

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "Wird gesendet …" : "Nachricht senden"}
      </Button>
    </form>
  );
}
