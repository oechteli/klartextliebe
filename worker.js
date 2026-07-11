// Cloudflare-Worker fuer Klartext Liebe.
// Liefert den statischen Next.js-Export (out/) aus und beantwortet
// zusaetzlich POST /api/chat mit dem KI-Assistenten (ueber OpenRouter).
//
// Benoetigtes Secret in Cloudflare: OPENROUTER_KEY
// (Dashboard -> Worker "klartextliebe" -> Settings -> Variables -> Secret,
//  oder:  npx wrangler secret put OPENROUTER_KEY)

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

PERSOENLICHES COACHING - SESSIONPAKETE (Seite /persoenliches-coaching):
- Einzelne 1:1-Sessions (je 60 Minuten) mit Monika per Chat, Telefon oder Video - OHNE Mitgliedschaft und OHNE Abo: Einzelsession 89 EUR, 3er-Paket 219 EUR, 10er-Paket 649 EUR.
- Buchung per Anfrage ueber /kontakt ("Session anfragen"), Antwort innerhalb von 24 Stunden.
- Bei Fragen zum Unterschied zwischen Sessionpaketen und den Coaching-Paketen oben: nicht spekulieren, sondern freundlich auf das kostenlose Erstgespraech verweisen - dort findet Monika das passende Format.

COACHING-FUNNEL UND KI-COACH:
- Auf /starte-jetzt gibt es einen kurzen Fragebogen (3 Minuten, kostenlos, ohne Login). Direkt danach oeffnet sich dieser Chat - du bist dann der KI-Coach: kostenlos, sofort, ohne Termin.
- Du bist eine KI, kein Mensch. Sage das klar, wenn du gefragt wirst oder dich vorstellst. Persoenliche Coachings und alle bezahlten Sessions uebernimmt Monika.

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

async function handleChat(request, env) {
  if (!env.OPENROUTER_KEY) {
    return json({ error: "Der Chat ist noch nicht konfiguriert. Bitte nutze /kontakt." }, 500);
  }

  // Missbrauchsschutz: Anfragen muessen von der eigenen Website kommen.
  const herkunft = request.headers.get("Origin") || request.headers.get("Referer") || "";
  const erlaubt =
    /^https:\/\/([a-z0-9-]+\.)?klartext-liebe\.de([/:]|$)/.test(herkunft) ||
    /^https:\/\/[a-z0-9-]*klartextliebe[a-z0-9-]*\.workers\.dev([/:]|$)/.test(herkunft) ||
    /^https:\/\/[a-z0-9-]*klartextliebe[a-z0-9-]*\.pages\.dev([/:]|$)/.test(herkunft) ||
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

  // Optionaler Fragebogen-Kontext aus dem Coaching-Funnel (/starte-jetzt).
  // Rueckwaertskompatibel: das Feld darf fehlen, alte Clients funktionieren unveraendert.
  if (typeof data.context === "string" && data.context.trim()) {
    messages.splice(1, 0, {
      role: "system",
      content:
        "FRAGEBOGEN-KONTEXT (der Nutzer kommt gerade aus dem Coaching-Fragebogen auf /starte-jetzt):\n" +
        data.context.trim().slice(0, 1200) +
        "\n\nGehe als KI-Coach empathisch und konkret auf diese Angaben ein, ohne sie wortwoertlich aufzuzaehlen. Stelle jeweils EINE gute Rueckfrage und gib kleine, umsetzbare Impulse. Wenn der Nutzer tiefer gehen moechte, empfiehl die persoenlichen Sessions mit Monika (/persoenliches-coaching, ohne Abo) oder das kostenlose Erstgespraech (/kontakt).",
    });
  }

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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/chat") {
      if (request.method === "POST") return handleChat(request, env);
      return json({ error: "Methode nicht erlaubt." }, 405);
    }

    // Alles andere: statische Assets aus out/ ausliefern.
    return env.ASSETS.fetch(request);
  },
};
