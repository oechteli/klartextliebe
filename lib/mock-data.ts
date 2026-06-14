/**
 * Zentrale Platzhalter-/Mock-Daten.
 * Später durch Supabase-Queries ersetzbar – die UI bleibt gleich.
 */

import type {
  Offer,
  EventItem,
  ProblemCard,
  FeatureItem,
  VideoIdea,
} from "@/types";

/* ------------------------------------------------------------------ */
/* Coachingangebote (/coaching + Preview auf der Startseite)           */
/* ------------------------------------------------------------------ */
export const offers: Offer[] = [
  {
    id: "profil-chat-analyse",
    title: "Profil- & Chat-Analyse",
    price: "79 €",
    description:
      "Analyse deines Datingprofils oder anonymisierten Chatverlaufs mit klaren Verbesserungsvorschlägen. Besonders geeignet für Singles, deren Gespräche immer wieder abbrechen oder nicht in echte Begegnungen führen.",
    cta: "Analyse kaufen",
    stripeKey: "profilChatAnalyse",
    features: [
      "Schriftliches Feedback zu Profil oder Chat",
      "Konkrete, umsetzbare Verbesserungen",
      "Anonymisiert & vertraulich",
    ],
  },
  {
    id: "singlecoaching-1-1",
    title: "Singlecoaching 1:1",
    price: "149 €",
    description:
      "Ein persönliches Coachinggespräch zu Dating, Kommunikation, Selbstwert, Partnerwahl, geistiger Resonanz oder Kennenlernphase.",
    cta: "Coaching buchen",
    stripeKey: "singlecoaching",
    highlight: true,
    features: [
      "60 Minuten persönliches Gespräch",
      "Fokus auf dein konkretes Thema",
      "Klare nächste Schritte",
    ],
  },
  {
    id: "dating-klarheit-paket",
    title: "Dating-Klarheit Paket",
    price: "399 €",
    description:
      "3 Sitzungen für Singles, die ihre Muster verstehen, klarer kommunizieren und bewusster daten möchten.",
    cta: "Paket kaufen",
    stripeKey: "datingKlarheit",
    features: [
      "3 Coachingsitzungen",
      "Arbeit an Mustern & Kommunikation",
      "Begleitung über mehrere Wochen",
    ],
  },
  {
    id: "vip-matchklarheit",
    title: "VIP-Matchklarheit",
    price: "799 €",
    description:
      "Intensive Begleitung mit Persönlichkeitsanalyse, Profilfeedback, Chatfeedback und Datingstrategie für reflektierte Singles mit Anspruch.",
    cta: "Anfragen",
    stripeKey: "vipMatchklarheit",
    features: [
      "Persönlichkeits- & Resonanzanalyse",
      "Profil- und Chatfeedback",
      "Individuelle Datingstrategie",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Problemsektion (Startseite C)                                       */
/* ------------------------------------------------------------------ */
export const problems: ProblemCard[] = [
  {
    title: "Gespräche bleiben oberflächlich",
    description:
      "Smalltalk statt echtem Austausch – der Funke springt nie wirklich über.",
  },
  {
    title: "Auswahl ohne Verbindung",
    description:
      "Dating-Apps erzeugen viele Kontakte, aber kaum echte Nähe oder Resonanz.",
  },
  {
    title: "Hohe Ansprüche, unklare Kommunikation",
    description:
      "Du weißt, was du suchst – aber es kommt im Kennenlernen nicht an.",
  },
  {
    title: "Unsicherheit wirkt wie Desinteresse",
    description:
      "Zurückhaltung wird missverstanden, obwohl eigentlich Interesse da ist.",
  },
  {
    title: "Geistige Resonanz fehlt",
    description:
      "Viele Kontakte, aber selten jemand, der dich wirklich anregt und fordert.",
  },
  {
    title: "Falsche Menschen zu lange gehalten",
    description:
      "Aus Hoffnung oder Unsicherheit bleibt man, wo längst klar ist: Es passt nicht.",
  },
];

/* ------------------------------------------------------------------ */
/* Lösungssektion (Startseite D)                                       */
/* ------------------------------------------------------------------ */
export const solutions: FeatureItem[] = [
  {
    title: "Singlecoaching",
    description: "Persönliche Begleitung für Klarheit, Selbstwert und Mut.",
    icon: "🧭",
  },
  {
    title: "Datingberatung",
    description: "Konkrete Hilfe für Profile, Chats und erste Begegnungen.",
    icon: "💬",
  },
  {
    title: "Kommunikationsanalyse",
    description: "Verstehe, wie du wirkst – und wie du klarer kommunizierst.",
    icon: "🔍",
  },
  {
    title: "Persönlichkeitsanalyse",
    description: "Werte, Muster und Resonanz sichtbar machen.",
    icon: "🧠",
  },
  {
    title: "Community für Tiefgang",
    description: "Austausch mit reflektierten Singles auf Augenhöhe.",
    icon: "🤝",
  },
  {
    title: "Kuratierte Matchvorschläge",
    description: "Orientierung statt endlosem Swipen – werte- und resonanzbasiert.",
    icon: "✨",
  },
  {
    title: "Deep-Talk-Events",
    description: "Echte Begegnungen online und in Städten.",
    icon: "🏙️",
  },
  {
    title: "Begegnung statt Masse",
    description: "Qualität, Tiefe und Verbindlichkeit statt Wegwerf-Dating.",
    icon: "❤️",
  },
];

/* ------------------------------------------------------------------ */
/* Events (/events + Preview)                                          */
/* ------------------------------------------------------------------ */
export const events: EventItem[] = [
  {
    id: "online-ohne-spielchen",
    title: "Dating ohne Spielchen",
    location: "Online",
    date: "Termin folgt",
    description:
      "Ein moderierter Online-Abend über ehrliche Kommunikation statt Taktik und Rätselraten.",
    isOnline: true,
  },
  {
    id: "karlsruhe-deep-talk",
    title: "Deep Talk für Singles",
    location: "Karlsruhe",
    date: "Termin folgt",
    description:
      "Echte Gespräche statt Smalltalk – Kennenlernen über Themen, die wirklich zählen.",
    isOnline: false,
  },
  {
    id: "berlin-ohne-smalltalk",
    title: "Kennenlernen ohne Smalltalk",
    location: "Berlin",
    date: "Termin folgt",
    description:
      "Ein Abend mit Gesprächsformaten, die direkt in die Tiefe gehen.",
    isOnline: false,
  },
  {
    id: "muenchen-ab-40",
    title: "Dating ab 40 mit Tiefgang",
    location: "München",
    date: "Termin folgt",
    description:
      "Für reflektierte Singles, die mit Lebenserfahrung bewusst neu beginnen.",
    isOnline: false,
  },
  {
    id: "hamburg-echte-verbindung",
    title: "Echte Verbindung statt Swipen",
    location: "Hamburg",
    date: "Termin folgt",
    description:
      "Begegnung in entspannter Atmosphäre – ganz ohne App und Wischen.",
    isOnline: false,
  },
  {
    id: "online-sapiosexuell",
    title: "Sapiosexuell daten – was bedeutet geistige Anziehung?",
    location: "Online",
    date: "Termin folgt",
    description:
      "Ein Gesprächsabend darüber, was geistige Resonanz wirklich ausmacht.",
    isOnline: true,
  },
];

/* ------------------------------------------------------------------ */
/* YouTube-Videoideen (/youtube)                                       */
/* ------------------------------------------------------------------ */
export const videoIdeas: VideoIdea[] = [
  {
    title: "Warum so viele Singles nicht an Liebe scheitern",
    description:
      "Oft ist es kein Attraktivitätsproblem, sondern ein Klarheits- und Kommunikationsthema.",
  },
  {
    title: "5 Kommunikationsfehler beim Dating",
    description: "Kleine Muster mit großer Wirkung – und wie du sie auflöst.",
  },
  {
    title: "Warum kluge Menschen beim Dating oft zu viel analysieren",
    description: "Wenn der Kopf die Verbindung ausbremst, die das Herz sucht.",
  },
  {
    title: "Warum nette Menschen beim Dating oft unsichtbar bleiben",
    description: "Zwischen Zurückhaltung und Klarheit liegt mehr Spielraum, als du denkst.",
  },
  {
    title: "Warum geistige Anziehung allein nicht reicht",
    description: "Resonanz im Kopf braucht emotionale Reife, um zu tragen.",
  },
];

/* ------------------------------------------------------------------ */
/* Werte (Über-mich-Seite)                                             */
/* ------------------------------------------------------------------ */
export const values: { title: string; opposite: string }[] = [
  { title: "Ehrlichkeit", opposite: "statt Spielchen" },
  { title: "Tiefe", opposite: "statt Smalltalk" },
  { title: "Verbindung", opposite: "statt Manipulation" },
  { title: "Selbstwert", opposite: "statt Anpassung" },
  { title: "Klarheit", opposite: "statt Rätselraten" },
  { title: "Beziehung", opposite: "statt Dauer-Dating" },
  { title: "Geistige Resonanz", opposite: "statt oberflächlicher Auswahl" },
];
