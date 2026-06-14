/**
 * Zentrale, app-weite Typen.
 * Fragebogen-spezifische Typen liegen in types/questionnaire.ts.
 */

// Nutzerrollen – steuert spätere Sichtbarkeiten & Admin-Funktionen.
export type UserRole = "visitor" | "member" | "premium_member" | "coach_admin";

export interface Offer {
  id: string;
  title: string;
  price: string; // Platzhalter-Preis als String, z. B. "79 €"
  description: string;
  cta: string;
  /** Schlüssel in lib/stripe-links.ts */
  stripeKey: keyof typeof import("@/lib/stripe-links").stripeLinks;
  highlight?: boolean;
  features?: string[];
}

export interface EventItem {
  id: string;
  title: string;
  location: string; // Stadt oder "Online"
  date: string; // Platzhalter-Datum
  description: string;
  isOnline: boolean;
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string; // optionaler Icon-Key (Emoji als Platzhalter)
}

export interface VideoIdea {
  title: string;
  description: string;
  youtubeId?: string; // später echte Video-ID
}
