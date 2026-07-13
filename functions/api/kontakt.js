// Cloudflare Pages Function: Kontaktanfrage per Resend versenden.
// Erwartet POST application/json { name, email, anliegen?, nachricht?, firma? }.
//   ("firma" ist ein verstecktes Honeypot-Feld gegen Spam-Bots.)
// Secrets/Env im Cloudflare-Pages-Projekt "klartext-liebe":
//   RESEND_API_KEY (Pflicht) · RESEND_FROM (verifizierte Absenderadresse) · RESEND_TO (Ziel)
// Ohne RESEND_API_KEY antwortet die Funktion mit 503 -> das Formular faellt sauber auf mailto zurueck.

export async function onRequestPost({ request, env }) {
  try {
    // Missbrauchsschutz: Anfragen muessen von der eigenen Website kommen.
    const herkunft = request.headers.get("Origin") || request.headers.get("Referer") || "";
    const erlaubt =
      /^https:\/\/([a-z0-9-]+\.)?klartext-liebe\.de([/:]|$)/.test(herkunft) ||
      /^https:\/\/[a-z0-9-]*klartext-?liebe[a-z0-9-]*\.pages\.dev([/:]|$)/.test(herkunft) ||
      /^http:\/\/localhost(:\d+)?([/:]|$)/.test(herkunft);
    if (!erlaubt) return json({ ok: false, error: "Nicht erlaubt." }, 403);

    const data = await request.json().catch(() => ({}));
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const anliegen = String(data.anliegen || "").trim();
    const nachricht = String(data.nachricht || "").trim();
    const honeypot = String(data.firma || "").trim();

    // Bot hat das versteckte Feld ausgefuellt -> stillschweigend als Erfolg verwerfen.
    if (honeypot) return json({ ok: true });

    if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return json(
        { ok: false, error: "Bitte gib deinen Namen und eine gültige E-Mail-Adresse an." },
        400
      );
    }

    if (!env.RESEND_API_KEY) {
      return json(
        { ok: false, error: "Der automatische Versand ist noch nicht aktiviert." },
        503
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.RESEND_FROM || "Klartext Liebe <onboarding@resend.dev>",
        to: [env.RESEND_TO || "info@klartext-liebe.de"],
        reply_to: email,
        subject: `Kontaktanfrage klartext-liebe.de: ${anliegen || "Allgemein"} – ${name}`,
        text:
          `Neue Anfrage über das Kontaktformular auf klartext-liebe.de\n\n` +
          `Name: ${name}\n` +
          `E-Mail: ${email}\n` +
          `Anliegen: ${anliegen || "-"}\n\n` +
          `Nachricht:\n${nachricht || "-"}\n`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return json(
        { ok: false, error: "Der Versand hat leider nicht geklappt. Bitte versuch es später erneut.", detail },
        502
      );
    }

    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, error: "Unerwarteter Fehler. Bitte versuch es später erneut." }, 500);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
