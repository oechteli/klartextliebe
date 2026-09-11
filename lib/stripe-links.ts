/**
 * Buchungs-Links für die Coachingangebote.
 * Seit 11.09.2026: Stripe Payment Links im Konto ACAMINDO, Live-Modus.
 * Übersicht und Einstellungen: docs/STRIPE-LINKS.md
 * Bis 11.09.2026: Anfrage per Kontaktformular → Monika bestätigt und sendet Zahlungslink.
 *
 * Ausnahme VIP-Matchklarheit: Der Umfang wird im Erstgespräch geklärt, darum
 * führt der Knopf weiter aufs Kontaktformular. Den Zahlungslink schickt Monika
 * nach dem Gespräch, siehe vipMatchklarheitZahlung unten.
 */
export const stripeLinks = {
  // Bis 11.09.2026: "/kontakt?thema=Buchung+Profil+%26+Chat-Analyse+(79+%E2%82%AC)"
  profilChatAnalyse: "https://book.stripe.com/00weVebVYeyH33p9ybak00X",
  // Altwert bis 02.09.2026: "…Singlecoaching+1%3A1+(149+%E2%82%AC)"
  singlecoaching: "https://book.stripe.com/aFa8wQ9NQ2PZavR11Fak00Y",
  // Neu seit 11.09.2026: Sessionpakete direkt buchbar
  paket3: "https://book.stripe.com/6oU28s8JM8ajbzV7q3ak00Z",
  paket10: "https://book.stripe.com/28EeVed023U3avR9ybak010",
  // Neu seit 02.09.2026
  paargespraech: "https://book.stripe.com/3cI8wQf8a2PZfQbeSvak011",
  datingKlarheit: "https://book.stripe.com/4gM28s9NQ8ajavR8u7ak013",
  // Bleibt beim Kontaktformular, siehe oben
  vipMatchklarheit: "/kontakt?thema=Buchung+VIP-Matchklarheit+(799+%E2%82%AC)",
  // Neu seit 07.09.2026: Kurs 1 als Live-Gruppe
  kursKlartextStart: "https://book.stripe.com/14A5kE5xA2PZ9rN8u7ak012",
} as const;

/** Nicht auf der Website verlinkt. Monika verschickt ihn nach dem Erstgespräch. */
export const vipMatchklarheitZahlung = "https://book.stripe.com/14A6oIaRU3U3dI38u7ak014";

export type StripeLinkKey = keyof typeof stripeLinks;

/** Immer true – alle Angebote sind buchbar (via Kontaktformular oder direktem Stripe-Link) */
export function hasStripeLink(_key: StripeLinkKey): boolean {
  return true;
}
