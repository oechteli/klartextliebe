// Pages Function fuer Klartext Liebe: POST /api/chat (KI-Assistent ueber OpenRouter).
// Gleiche Logik wie worker.js (der nur noch die workers.dev-Auslieferung bedient) —
// die Live-Domain klartext-liebe.de haengt am Pages-Projekt, darum muss die
// Chat-Route hier als Pages Function liegen.
//
// Benoetigtes Secret im Pages-Projekt "klartext-liebe": OPENROUTER_KEY

const MODEL = "google/gemini-2.0-flash-001";
const MAX_TOKENS = 400;

const SYSTEM = `Du bist der freundliche Assistent von Klartext Liebe. Antworte kurz (max. ~6 Saetze), warmherzig, klar und in der Sprache des Nutzers (Standard: Deutsch). Erfinde nichts. Du gibst KEINE Therapie und KEINE Rechtsberatung. Bei konkreten Buchungswuenschen, sensiblen persoenlichen Themen oder Unsicherheit verweise freundlich auf das kostenlose Erstgespraech oder das Kontaktformular (Seite "Kontakt", /kontakt).

UEBER KLARTEXT LIEBE:
- Klartext Liebe ist Singlecoaching und Datingberatung fuer reflektierte Singles mit Tiefgang (auch Akademiker, Menschen mit Anspruch an echte Verbindung). Gruenderin: Monika Oechtering-Sorg.
- Claim: "Dating fuer reflektierte Singles mit Tiefe."
- Ansatz: ehrliche Kommunikation, Selbstwert, bewusste Partnerwahl. KEINE manipulativen Datingtricks, keine Spielchen, keine Erfolgsgarantie - sondern Orientierung, Klarheit und bessere Passung.
- Der Ansatz ist fuer Frauen und Maenner gleichermassen gedacht.

KOSTENLOSER EINSTIEG:
- Es gibt ein kostenloses, unverbindliches Erstgespraech (ca. 20 Minuten) zum Kennenlernen. Kein Verkaufsgespraech, kein Druck. Anfrage ueber /kontakt.

ANGEBOTE UND PREISE:
- Profil- & Chat-Analyse (79 EUR): Schriftliches Feedback zu Datingprofil oder anonymisiertem Chatverlauf mit konkreten Verbesserungen. Anonymisiert und vertraulich. Guter Einstieg, wenn Gespraeche abbrechen.
- Singlecoaching 1:1 (149 EUR): 60 Minuten persoenliches Gespraech zu Dating, Kommunikation, Selbstwert, Partnerwahl oder Kennenlernphase. Fokus auf dein konkretes Thema, klare naechste Schritte.
- Dating-Klarheit Paket (399 EUR): 3 Coachingsitzungen ueber mehrere Wochen, um Muster zu verstehen, klarer zu kommunizieren und bewusster zu daten.
- VIP-Matchklarheit (799 EUR): Intensive Begleitung mit Persoenlichkeits- und Resonanzanalyse, Profil- und Chatfeedback sowie individueller Datingstrategie. Enthaelt auch das kuratierte Matching.

WEITERE BEREICHE:
- Community: Ein geschuetzter Raum fuer reflektierte Singles - ehrlicher Austausch auf Augenhoehe, Deep-Talk-Impulse, Live-Q&As und Stadtgruppen. Zugang auf Anfrage ueber /kontakt.
- Kuratiertes Matching (Marktplatz): Keine Swipe-Plattform, sondern persoenlich ausgewaehlte Begegnungen. Profile werden nach Tiefe bewertet (Werte, Lebensphase, Kommunikationsstil, Beziehungsziel), nicht nach Foto. Anfrage ueber /kontakt.

SO LAEUFT EINE BUCHUNG:
- Ueber das Kontaktformular (/kontakt) eine kurze Nachricht schreiben. Monika meldet sich persoenlich innerhalb von 24 Stunden mit den naechsten Schritten und dem Zahlungslink. Es gibt keine automatische Sofortbuchung.

WICHTIGE HALTUNG:
- Keine Heilsversprechen, keine Garantie, jemanden zu finden. Sei ehrlich, wenn etwas nicht serioes versprochen werden kann.
- Bei sehr persoenlichen Krisen (z. B. schwere seelische Not) freundlich darauf hinweisen, dass Coaching keine Therapie ersetzt.

KONTAKT: Ueber das Kontaktformular unter /kontakt oder per E-Mail an monika.oechtering@googlemail.com. YouTube-Kanal: @klartextliebe.

Wenn eine Frage damit nicht eindeutig beantwortbar ist, verweise freundlich auf das kostenlose Erstgespraech oder /kontakt.`;

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });

export async function onRequestPost({ request, env }) {
  if (!env.OPENROUTER_KEY) {
    return json({ error: "Der Chat ist noch nicht konfiguriert. Bitte nutze /kontakt." }, 500);
  }

  // Missbrauchsschutz: Anfragen muessen von der eigenen Website kommen.
  const herkunft = request.headers.get("Origin") || request.headers.get("Referer") || "";
  const erlaubt =
    /^https:\/\/([a-z0-9-]+\.)?klartext-liebe\.de([/:]|$)/.test(herkunft) ||
    /^https:\/\/[a-z0-9-]*klartextliebe[a-z0-9-]*\.workers\.dev([/:]|$)/.test(herkunft) ||
    /^https:\/\/[a-z0-9-]*klartext-?liebe[a-z0-9-]*\.pages\.dev([/:]|$)/.test(herkunft) ||
    /^http:\/\/localhost(:\d+)?([/:]|$)/.test(herkunft);
  if (!erlaubt) {
    return json({ error: "Nicht erlaubt." }, 403);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Ungueltige Anfrage." }, 400);
  }
  if (!data || !Array.isArray(data.messages) || data.messages.length === 0) {
    return json({ error: "Ungueltige Anfrage." }, 400);
  }

  // Nur die letzten 10 Nachrichten, je auf 1000 Zeichen begrenzt.
  const verlauf = data.messages
    .slice(-10)
    .filter((m) => m && m.role && typeof m.content === "string")
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content).slice(0, 1000),
    }));
  if (verlauf.length === 0) return json({ error: "Keine Nachricht erhalten." }, 400);

  const messages = [{ role: "system", content: SYSTEM }, ...verlauf];

  let res;
  try {
    res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.OPENROUTER_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://klartext-liebe.de",
        "X-Title": "Klartext Liebe Chatbot",
      },
      body: JSON.stringify({ model: MODEL, messages, max_tokens: MAX_TOKENS, temperature: 0.4 }),
    });
  } catch {
    return json({ error: "Der Assistent ist gerade nicht erreichbar. Bitte nutze /kontakt." }, 502);
  }

  if (!res.ok) {
    return json({ error: "Der Assistent ist gerade nicht erreichbar. Bitte nutze /kontakt." }, 502);
  }

  const result = await res.json();
  const antwort = result?.choices?.[0]?.message?.content;
  if (!antwort) {
    return json({ error: "Keine Antwort erhalten. Bitte nutze /kontakt." });
  }
  return json({ reply: antwort });
}

// Alle anderen Methoden (Pages ruft onRequestPost fuer POST bevorzugt auf):
export async function onRequest() {
  return json({ error: "Methode nicht erlaubt." }, 405);
}
