"use client";

import { useState } from "react";

/**
 * Zeigt eine E-Mail-Adresse erst auf Klick.
 *
 * Angelegt am 04.09.2026: Die Adresse stand auf Impressum, Datenschutz und AGB
 * zehnmal als lesbarer Text im Quelltext. Sammelprogramme greifen genau das ab,
 * und Monika bekam zunehmend Spam. Die Adresse wird jetzt erst im Browser aus
 * zwei Teilen zusammengesetzt; im ausgelieferten HTML steht sie nirgends.
 *
 * Rechtlich unbedenklich: § 5 TMG und Art. 13 DSGVO verlangen, dass die Adresse
 * erreichbar ist, nicht dass sie ungeschützt im Quelltext steht. Ein Klick genügt.
 */
export function EmailSchutz({
  nutzer,
  domain,
  className = "",
}: {
  nutzer: string;
  domain: string;
  className?: string;
}) {
  const [sichtbar, setSichtbar] = useState(false);
  const adresse = `${nutzer}@${domain}`;

  if (sichtbar) {
    return (
      <a href={`mailto:${adresse}`} className={className || "text-brand-violet hover:underline"}>
        {adresse}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setSichtbar(true)}
      className="inline-flex items-center rounded-full border border-ink-900/25 px-3 py-1 text-sm font-medium text-ink-900 transition hover:border-ink-900/50 hover:bg-cream-200"
    >
      E-Mail-Adresse anzeigen
    </button>
  );
}
