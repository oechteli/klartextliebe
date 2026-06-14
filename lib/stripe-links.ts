/**
 * Zentrale Stripe-Payment-Links für die Coachingangebote.
 *
 * MVP-Ansatz: Wir nutzen Stripe **Payment Links** (im Stripe-Dashboard
 * unter "Payment Links" erstellen) und tragen die URLs hier ein.
 * Die Buttons in /coaching verlinken einfach auf diese URLs.
 *
 * TODO (echte Integration später):
 *  - Stripe Checkout Sessions serverseitig erzeugen (lib/stripe.ts)
 *  - Webhook /api/stripe/webhook für coaching_orders anlegen
 *  - Erfolg/Abbruch-Seiten /coaching/danke bzw. /coaching/abbruch
 *
 * Solange ein Link "#" ist, zeigt der Button einen dezenten
 * "Bald buchbar"-Hinweis statt eines toten Links.
 */
export const stripeLinks = {
  profilChatAnalyse: "#", // TODO: Stripe Payment Link für "Profil- & Chat-Analyse" (79 €)
  singlecoaching: "#", // TODO: Stripe Payment Link für "Singlecoaching 1:1" (149 €)
  datingKlarheit: "#", // TODO: Stripe Payment Link für "Dating-Klarheit Paket" (399 €)
  vipMatchklarheit: "#", // TODO: VIP ist Anfrage -> ggf. Kontaktformular statt Stripe (799 €)
} as const;

export type StripeLinkKey = keyof typeof stripeLinks;

/** Ist für diesen Schlüssel schon ein echter Link hinterlegt? */
export function hasStripeLink(key: StripeLinkKey): boolean {
  const url: string = stripeLinks[key];
  return url.length > 1 && url !== "#";
}
