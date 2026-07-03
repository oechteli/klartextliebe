/**
 * Buchungs-Links für die Coachingangebote.
 * Derzeit: Anfrage per Kontaktformular → Monika bestätigt und sendet Zahlungslink.
 * Später: Stripe Payment Links direkt eintragen, dann läuft die Buchung vollautomatisch.
 */
export const stripeLinks = {
  profilChatAnalyse: "/kontakt?thema=Buchung+Profil+%26+Chat-Analyse+(79+%E2%82%AC)",
  singlecoaching: "/kontakt?thema=Buchung+Singlecoaching+1%3A1+(149+%E2%82%AC)",
  datingKlarheit: "/kontakt?thema=Buchung+Dating-Klarheit-Paket+(399+%E2%82%AC)",
  vipMatchklarheit: "/kontakt?thema=Buchung+VIP-Matchklarheit+(799+%E2%82%AC)",
} as const;

export type StripeLinkKey = keyof typeof stripeLinks;

/** Immer true – alle Angebote sind buchbar (via Kontaktformular oder direktem Stripe-Link) */
export function hasStripeLink(_key: StripeLinkKey): boolean {
  return true;
}
