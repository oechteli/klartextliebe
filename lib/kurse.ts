/**
 * Die drei Klartext-Kurse (Relaunch 07.09.2026, Vorbild chrissurel.com).
 *
 * Regel der Inhaberin: Nichts zeigen, was nicht buchbar ist, keine Wartelisten.
 * Darum ist heute nur Kurs 1 buchbar, als Live-Gruppe per Video (4 Abende).
 * Die Aufzeichnungen werden zum Selbstlernkurs auf der Lernplattform.
 * Kurs 2 und 3 stehen mit Inhalt da, sind aber klar als „folgt" markiert und
 * haben keinen Buchungs- oder Vormerk-Button. Ihre Themen gibt es heute im 1:1.
 */

export interface Kurs {
  slug: string;
  nummer: 1 | 2 | 3;
  titel: string;
  untertitel: string;
  kernfrage: string;
  fuerWen: string[];
  inhalte: { woche: string; titel: string; text: string }[];
  ergebnis: string[];
  preis: string;
  format: string;
  /** true = heute buchbar (Live-Gruppe). false = folgt, ohne Vormerkung. */
  buchbar: boolean;
  buchungsLink?: string;
  hinweis?: string;
}

export const kurse: Kurs[] = [
  {
    slug: "klartext-start",
    nummer: 1,
    titel: "Klartext Start",
    untertitel: "Warum du noch Single bist",
    kernfrage:
      "Du bist klug, warmherzig und hast einiges zu bieten. Trotzdem klappt es nicht. In vier Wochen findest du heraus, woran es wirklich liegt.",
    fuerWen: [
      "Du fragst dich ehrlich, warum es bei dir nicht klappt, obwohl du dir Mühe gibst.",
      "Du ziehst immer wieder denselben Typ Mensch an und weißt, dass das kein Zufall ist.",
      "Du möchtest keine Tricks, sondern einen klaren Blick von außen.",
    ],
    inhalte: [
      {
        woche: "Woche 1",
        titel: "Bestandsaufnahme ohne Schönfärberei",
        text: "Dein bisheriger Weg, deine Auswahl, deine Ausreden. Mit Selbsttest und Workbook.",
      },
      {
        woche: "Woche 2",
        titel: "Deine Muster",
        text: "Warum du wen anziehst und wen du übersiehst. Bindungsverhalten verständlich erklärt.",
      },
      {
        woche: "Woche 3",
        titel: "Dein Selbstbild und deine Wirkung",
        text: "Wie du dich siehst und wie du ankommst. Der ehrliche Abgleich.",
      },
      {
        woche: "Woche 4",
        titel: "Dein Plan",
        text: "Was du ab morgen anders machst. Konkret, klein, machbar. Mit persönlichem Feedback.",
      },
    ],
    ergebnis: [
      "Du kennst die zwei, drei Dinge, die dich bisher wirklich aufgehalten haben.",
      "Du hast einen Plan für die nächsten drei Monate, der zu dir passt.",
      "Du weißt, ob und welche Begleitung danach sinnvoll ist.",
    ],
    preis: "149 €",
    format:
      "Live-Gruppe: 4 Abende à 90 Minuten per Video, höchstens 8 Teilnehmende, Workbook, persönliches Feedback von Monika. Die Abende werden aufgezeichnet.",
    buchbar: true,
    buchungsLink: "/kontakt?thema=Buchung+Kurs+Klartext+Start+(149+%E2%82%AC)",
    hinweis:
      "Erste Gruppe: Start im Oktober 2026. Die genauen Abende legen wir gemeinsam mit den Teilnehmenden fest.",
  },
  {
    slug: "wirkung",
    nummer: 2,
    titel: "Wirkung",
    untertitel: "Wie du gesehen wirst",
    kernfrage:
      "Der ehrliche Blick von außen: Stil, Auftreten, Fotos, Profil, erste Nachricht, Small Talk. Was ankommt und was nicht.",
    fuerWen: [
      "Du bekommst kaum Antworten oder die Gespräche versanden.",
      "Du hast das Gefühl, dass du anders wirkst, als du bist.",
      "Du willst wissen, was Kleidung, Haltung und Hobbys über dich erzählen.",
    ],
    inhalte: [
      { woche: "Woche 1", titel: "Äußere Wirkung", text: "Stil, Haltung, Ausstrahlung. Ehrlich und wertschätzend." },
      { woche: "Woche 2", titel: "Profil und Fotos", text: "Was ein Profil wirklich sagt und wie deins klarer wird." },
      { woche: "Woche 3", titel: "Die ersten Sätze", text: "Erste Nachricht, Small Talk, echtes Interesse zeigen." },
      { woche: "Woche 4", titel: "Begegnungsräume", text: "Hobbys, Orte und Gelegenheiten, bei denen du Menschen triffst, die zu dir passen." },
    ],
    ergebnis: [
      "Du weißt, wie du wirkst, und kannst es steuern.",
      "Dein Profil und deine ersten Nachrichten sind klar und echt.",
    ],
    preis: "199 €",
    format: "Folgt als Videokurs mit Workbook.",
    buchbar: false,
    hinweis: "Die Themen dieses Kurses gibt es heute im Einzelgespräch und in der Profil- und Chat-Analyse.",
  },
  {
    slug: "vom-date-zur-beziehung",
    nummer: 3,
    titel: "Vom Date zur Beziehung",
    untertitel: "Auswahl, Tempo, Bindung",
    kernfrage:
      "Du lernst Menschen kennen, aber es wird nichts Festes. Oder du bleibst zu lange bei den Falschen. Hier geht es um Auswahl, Kommunikation und Bindung.",
    fuerWen: [
      "Du hast Dates, aber daraus wird keine Beziehung.",
      "Du erkennst rote Flaggen zu spät oder ignorierst sie.",
      "Du willst verstehen, wie Nähe entsteht und wie sie bleibt.",
    ],
    inhalte: [
      { woche: "Woche 1", titel: "Auswahl", text: "Woran du erkennst, ob jemand zu dir passt. Rote und grüne Flaggen." },
      { woche: "Woche 2", titel: "Tempo", text: "Zu schnell, zu langsam, zu viel Kopf. Das richtige Maß." },
      { woche: "Woche 3", titel: "Kommunikation", text: "Wünsche sagen, Grenzen zeigen, Konflikte klären." },
      { woche: "Woche 4", titel: "Bindung", text: "Wie aus Verliebtheit Verbindung wird. Psychologie verständlich." },
    ],
    ergebnis: [
      "Du triffst bessere Entscheidungen, früher.",
      "Du weißt, wie du eine Beziehung aufbaust statt nur Dates zu sammeln.",
    ],
    preis: "199 €",
    format: "Folgt als Videokurs mit Workbook.",
    buchbar: false,
    hinweis: "Die Themen dieses Kurses gibt es heute im Einzelgespräch und im Dating-Klarheit-Paket.",
  },
];

export const kursBundle = {
  preis: "449 €",
  text: "Alle drei Kurse zusammen, sobald Kurs 2 und 3 erschienen sind.",
};

export function kursBySlug(slug: string): Kurs | undefined {
  return kurse.find((k) => k.slug === slug);
}
