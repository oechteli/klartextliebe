/**
 * Inhalt der mehrstufigen Persönlichkeits- & Resonanzanalyse (/analyse).
 * Bewusst hochwertig & reflektiert formuliert – kein oberflächlicher
 * Dating-App-Test. Keine sensiblen Daten ohne Zustimmung (DSGVO).
 */

import type { QuestionnaireStep } from "@/types/questionnaire";

export const questionnaireSteps: QuestionnaireStep[] = [
  {
    id: "basis",
    title: "Basisdaten",
    subtitle: "Ein paar Eckdaten, damit wir dich besser einordnen können.",
    questions: [
      { id: "vorname", label: "Vorname", type: "text", placeholder: "Wie dürfen wir dich nennen?" },
      { id: "alter", label: "Alter", type: "number", placeholder: "z. B. 34" },
      { id: "stadt", label: "Stadt / Region", type: "text", placeholder: "z. B. Karlsruhe" },
      {
        id: "geschlecht",
        label: "Geschlecht",
        type: "select",
        options: [
          { label: "weiblich", value: "weiblich" },
          { label: "männlich", value: "maennlich" },
          { label: "divers", value: "divers" },
          { label: "keine Angabe", value: "keine_angabe" },
        ],
      },
      {
        id: "sucht",
        label: "Wen möchtest du kennenlernen?",
        type: "select",
        options: [
          { label: "Frauen", value: "frauen" },
          { label: "Männer", value: "maenner" },
          { label: "offen", value: "offen" },
        ],
      },
      {
        id: "beziehungsziel",
        label: "Beziehungsziel",
        type: "select",
        options: [
          { label: "feste Partnerschaft", value: "partnerschaft" },
          { label: "erst kennenlernen, offen", value: "offen" },
          { label: "langfristig, evtl. Familie", value: "langfristig" },
        ],
      },
      { id: "altersrange", label: "Gewünschte Altersrange", type: "text", placeholder: "z. B. 30–42" },
      {
        id: "radius",
        label: "Gewünschter Radius / Ortsflexibilität",
        type: "select",
        options: [
          { label: "nur meine Stadt", value: "stadt" },
          { label: "Umkreis (~50 km)", value: "umkreis" },
          { label: "deutschlandweit offen", value: "weit" },
        ],
      },
    ],
  },
  {
    id: "werte",
    title: "Werte & Lebensstil",
    subtitle: "Was deinen Alltag und deine Haltung prägt.",
    questions: [
      { id: "familie", label: "Welche Rolle spielt Familie für dich?", type: "textarea" },
      { id: "beruf", label: "Beruf / beruflicher Hintergrund", type: "text", help: "Optional" },
      { id: "bildung", label: "Bildung & intellektuelle Interessen", type: "textarea", help: "Optional" },
      { id: "freizeit", label: "Wie verbringst du am liebsten deine Freizeit?", type: "textarea" },
      { id: "kultur", label: "Kultur, Bücher, Musik, Kunst, Wissenschaft", type: "textarea" },
      {
        id: "gesundheit",
        label: "Wie wichtig ist dir Gesundheit & Lebensstil?",
        type: "scale",
      },
      {
        id: "spiritualitaet",
        label: "Spiritualität / Weltanschauung",
        type: "textarea",
        help: "Optional und ganz frei – nur wenn es dir wichtig ist.",
      },
      {
        id: "naehe_freiheit",
        label: "Brauchst du eher viel Nähe oder viel Freiheit?",
        type: "scale",
        help: "1 = viel Freiheit · 5 = viel Nähe",
      },
      {
        id: "kinderwunsch",
        label: "Kinderwunsch",
        type: "select",
        options: [
          { label: "ja", value: "ja" },
          { label: "nein", value: "nein" },
          { label: "offen / unsicher", value: "offen" },
          { label: "habe bereits Kinder", value: "vorhanden" },
        ],
      },
      { id: "lebensvision", label: "Deine Lebensvision in ein paar Sätzen", type: "textarea" },
    ],
  },
  {
    id: "resonanz",
    title: "Geistige Resonanz",
    subtitle: "Was dich wirklich anregt und lebendig macht.",
    questions: [
      { id: "gespraeche_lebendig", label: "Welche Gespräche machen dich lebendig?", type: "textarea" },
      { id: "themen", label: "Welche Themen interessieren dich wirklich?", type: "textarea" },
      { id: "langweilt", label: "Was langweilt dich beim Dating schnell?", type: "textarea" },
      {
        id: "wichtig_humor_denken",
        label: "Wie wichtig sind Humor, Denken, Bildung, Neugier und Tiefgang?",
        type: "scale",
      },
      {
        id: "aehnlicher_hintergrund",
        label: "Wie wichtig ist dir ein ähnlicher Bildungs- oder Interessenshintergrund?",
        type: "scale",
      },
      { id: "intelligente_anziehung", label: "Was bedeutet „intelligente Anziehung“ für dich?", type: "textarea" },
    ],
  },
  {
    id: "kommunikation",
    title: "Kommunikation",
    subtitle: "Wie du in Kontakt gehst und in Verbindung bleibst.",
    questions: [
      { id: "interesse_zeigen", label: "Wie zeigst du Interesse?", type: "textarea" },
      { id: "umgang_unsicherheit", label: "Wie reagierst du auf Unsicherheit?", type: "textarea" },
      {
        id: "schreibtempo",
        label: "Wie schnell möchtest du schreiben?",
        type: "select",
        options: [
          { label: "gern viel & schnell", value: "schnell" },
          { label: "mittel, im Alltag", value: "mittel" },
          { label: "lieber langsam & bewusst", value: "langsam" },
        ],
      },
      {
        id: "telefonate",
        label: "Wie wichtig sind Telefonate?",
        type: "scale",
      },
      { id: "konflikte", label: "Wie gehst du mit Konflikten um?", type: "textarea" },
      {
        id: "kommunikationstyp",
        label: "Bist du eher …",
        type: "radio",
        options: [
          { label: "direkt", value: "direkt" },
          { label: "vorsichtig", value: "vorsichtig" },
          { label: "analytisch", value: "analytisch" },
          { label: "emotional", value: "emotional" },
        ],
      },
      {
        id: "tiefe_am_anfang",
        label: "Wie viel Tiefe möchtest du am Anfang?",
        type: "scale",
      },
    ],
  },
  {
    id: "muster",
    title: "Beziehungsmuster",
    subtitle: "Sensibel – wird vertraulich behandelt. Nur teilen, was sich stimmig anfühlt.",
    questions: [
      {
        id: "tendenzen",
        label: "Welche Tendenzen kennst du an dir?",
        help: "Mehrere möglich, frei beschreiben: Verlustangst, Bindungsangst, Rückzug, Klammern, Idealisierung, Überanalyse …",
        type: "textarea",
        sensitive: true,
      },
      { id: "red_flags", label: "Welche Red Flags sind für dich ein klares No-Go?", type: "textarea", sensitive: true },
      { id: "fruehere_erfahrungen", label: "Was hast du aus früheren Erfahrungen gelernt?", type: "textarea", sensitive: true },
      {
        id: "dynamiken_kennenlernphase",
        label: "Typische Dynamiken in deiner Kennenlernphase",
        type: "textarea",
        sensitive: true,
      },
    ],
  },
  {
    id: "datingverhalten",
    title: "Datingverhalten",
    subtitle: "Wie sich Dating für dich bisher angefühlt hat.",
    questions: [
      {
        id: "apps",
        label: "Wie nutzt du Dating-Apps?",
        type: "textarea",
      },
      { id: "erste_dates", label: "Wie sind erste Dates für dich?", type: "textarea" },
      { id: "chatverhalten", label: "Wie ist dein Chatverhalten?", type: "textarea" },
      { id: "erwartungen", label: "Welche Erwartungen hast du?", type: "textarea" },
      { id: "schwierigkeiten", label: "Was fällt dir typischerweise schwer?", type: "textarea" },
      { id: "ghosting", label: "Wie gehst du mit Ghosting um?", type: "textarea", sensitive: true },
      {
        id: "tempo",
        label: "Welches Tempo beim Kennenlernen tut dir gut?",
        type: "select",
        options: [
          { label: "langsam wachsen lassen", value: "langsam" },
          { label: "ausgewogen", value: "ausgewogen" },
          { label: "schnell Klarheit", value: "schnell" },
        ],
      },
    ],
  },
  {
    id: "freitext",
    title: "Deine Worte",
    subtitle: "Hier zählt nur, was wirklich stimmt – ganz frei.",
    questions: [
      { id: "wunsch", label: "Was wünschst du dir wirklich?", type: "textarea" },
      { id: "verstehen", label: "Was soll ein potenzieller Partner unbedingt verstehen?", type: "textarea" },
      { id: "nicht_funktioniert", label: "Was hat bisher oft nicht funktioniert?", type: "textarea" },
      { id: "echte_verbindung", label: "Was bedeutet für dich echte Verbindung?", type: "textarea" },
      { id: "anziehung", label: "Welche Art von Mensch zieht dich geistig und emotional an?", type: "textarea" },
    ],
  },
];
