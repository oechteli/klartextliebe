/* =====================================================================
   Klartext Liebe - KI-Chat-Widget
   Selbst-injizierend: erzeugt Button + Fenster, spricht mit /api/chat.
   ===================================================================== */
(function () {
  "use strict";

  var VIOLETT   = "#7C6BC4";
  var TUERKIS   = "#3FB9C7";
  var INK       = "#1f2233";

  // Kopplung an den Coaching-Funnel (/starte-jetzt):
  // - kl-chat-kontext:  Fragebogen-Antworten, werden als `context` an /api/chat mitgeschickt
  // - kl-chat-autoopen: einmaliges Flag, Chat nach Funnel-Abschluss automatisch oeffnen
  var KONTEXT_KEY  = "kl-chat-kontext";
  var AUTOOPEN_KEY = "kl-chat-autoopen";

  function sessionLesen(key) {
    try { return sessionStorage.getItem(key) || ""; } catch (e) { return ""; }
  }

  // ---------- Styles ----------
  var css = ''
    + '#kl-chat-btn{position:fixed;right:20px;bottom:20px;z-index:9998;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,' + VIOLETT + ',' + TUERKIS + ');color:#fff;border:none;cursor:pointer;box-shadow:0 8px 24px rgba(31,34,51,.25);font-size:26px;display:flex;align-items:center;justify-content:center;transition:transform .15s ease}'
    + '#kl-chat-btn:hover{transform:scale(1.06)}'
    + '#kl-chat{position:fixed;right:20px;bottom:90px;z-index:9999;width:360px;max-width:calc(100vw - 40px);height:500px;max-height:calc(100vh - 120px);background:#fff;border:1px solid #e7e5ee;border-radius:18px;box-shadow:0 16px 48px rgba(31,34,51,.22);display:none;flex-direction:column;overflow:hidden;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}'
    + '#kl-chat.open{display:flex}'
    + '#kl-chat-head{background:linear-gradient(135deg,' + VIOLETT + ',' + TUERKIS + ');color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between}'
    + '#kl-chat-head strong{font-size:15px}'
    + '#kl-chat-head small{display:block;font-size:11px;opacity:.9;font-weight:400}'
    + '#kl-chat-close{background:none;border:none;color:#fff;font-size:22px;cursor:pointer;line-height:1}'
    + '#kl-chat-msgs{flex:1;overflow-y:auto;padding:14px;background:#f7f6fb;display:flex;flex-direction:column;gap:10px}'
    + '.kl-msg{max-width:85%;padding:10px 13px;border-radius:14px;font-size:14px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}'
    + '.kl-bot{background:#fff;border:1px solid #e7e5ee;align-self:flex-start;border-bottom-left-radius:4px}'
    + '.kl-user{background:' + VIOLETT + ';color:#fff;align-self:flex-end;border-bottom-right-radius:4px}'
    + '.kl-typing{align-self:flex-start;color:#6b6f7e;font-size:13px;font-style:italic}'
    + '#kl-chat-form{display:flex;gap:8px;padding:10px;border-top:1px solid #e7e5ee;background:#fff}'
    + '#kl-chat-input{flex:1;border:1px solid #e7e5ee;border-radius:10px;padding:10px 12px;font:inherit;font-size:14px;resize:none;max-height:90px}'
    + '#kl-chat-input:focus{outline:2px solid ' + TUERKIS + ';border-color:' + TUERKIS + '}'
    + '#kl-chat-send{background:' + VIOLETT + ';color:#fff;border:none;border-radius:10px;padding:0 16px;cursor:pointer;font-weight:600}'
    + '#kl-chat-send:disabled{opacity:.5;cursor:default}'
    + '#kl-chat-foot{font-size:11px;color:#6b6f7e;text-align:center;padding:0 0 8px;background:#fff}';

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // ---------- HTML ----------
  var btn = document.createElement("button");
  btn.id = "kl-chat-btn";
  btn.setAttribute("aria-label", "Chat öffnen");
  btn.innerHTML = "💬";

  var box = document.createElement("div");
  box.id = "kl-chat";
  box.innerHTML =
      '<div id="kl-chat-head">'
    +   '<div><strong>Klartext Liebe</strong><small>Deine Fragen, ehrlich beantwortet</small></div>'
    +   '<button id="kl-chat-close" aria-label="Chat schließen">&times;</button>'
    + '</div>'
    + '<div id="kl-chat-msgs" role="log" aria-live="polite"></div>'
    + '<form id="kl-chat-form">'
    +   '<textarea id="kl-chat-input" rows="1" placeholder="Deine Frage …"></textarea>'
    +   '<button id="kl-chat-send" type="submit">Senden</button>'
    + '</form>'
    + '<div id="kl-chat-foot">KI-Assistent · keine Therapie oder Rechtsberatung</div>';

  document.body.appendChild(btn);
  document.body.appendChild(box);

  var msgsEl  = box.querySelector("#kl-chat-msgs");
  var formEl  = box.querySelector("#kl-chat-form");
  var inputEl = box.querySelector("#kl-chat-input");
  var sendEl  = box.querySelector("#kl-chat-send");

  var history = [];      // {role, content}
  var greeted = false;

  function addMsg(text, who) {
    var d = document.createElement("div");
    d.className = "kl-msg " + (who === "user" ? "kl-user" : "kl-bot");
    d.textContent = text;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return d;
  }

  function openChat() {
    box.classList.add("open");
    if (!greeted) {
      greeted = true;
      if (sessionLesen(KONTEXT_KEY)) {
        // Nutzer kommt aus dem Coaching-Funnel (/starte-jetzt)
        addMsg("Schön, dass du da bist! 💙 Ich bin dein KI-Coach von Klartext Liebe – eine KI, sofort und kostenlos für dich da. Deine Antworten aus dem Fragebogen habe ich schon gelesen. Erzähl mir einfach, was dich gerade am meisten beschäftigt – wir legen direkt los. Und wenn du tiefer gehen willst, übernimmt Monika persönlich.", "bot");
      } else {
        addMsg("Hallo! 👋 Ich bin der Assistent von Klartext Liebe. Frag mich gern zu Coaching, Preisen, dem kostenlosen Erstgespräch oder wie die Zusammenarbeit abläuft.", "bot");
      }
    }
    inputEl.focus();
  }
  function closeChat() { box.classList.remove("open"); }

  btn.addEventListener("click", function () {
    box.classList.contains("open") ? closeChat() : openChat();
  });
  box.querySelector("#kl-chat-close").addEventListener("click", closeChat);

  // Textarea waechst leicht mit
  inputEl.addEventListener("input", function () {
    inputEl.style.height = "auto";
    inputEl.style.height = Math.min(inputEl.scrollHeight, 90) + "px";
  });
  // Enter sendet, Shift+Enter = neue Zeile
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); formEl.requestSubmit(); }
  });

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = inputEl.value.trim();
    if (!text) return;

    addMsg(text, "user");
    history.push({ role: "user", content: text });
    inputEl.value = "";
    inputEl.style.height = "auto";
    sendEl.disabled = true;

    var typing = document.createElement("div");
    typing.className = "kl-typing";
    typing.textContent = "schreibt …";
    msgsEl.appendChild(typing);
    msgsEl.scrollTop = msgsEl.scrollHeight;

    // Fragebogen-Kontext (falls vorhanden) mitschicken – rueckwaertskompatibel.
    var kontext = sessionLesen(KONTEXT_KEY);
    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(kontext ? { messages: history, context: kontext } : { messages: history })
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      typing.remove();
      if (data && data.reply) {
        addMsg(data.reply, "bot");
        history.push({ role: "assistant", content: data.reply });
      } else {
        addMsg((data && data.error) ? data.error : "Entschuldigung, das hat nicht geklappt. Schreib uns gern über das Kontaktformular.", "bot");
      }
    })
    .catch(function () {
      typing.remove();
      addMsg("Verbindung nicht möglich. Bitte nutze das Kontaktformular unter /kontakt.", "bot");
    })
    .finally(function () {
      sendEl.disabled = false;
      inputEl.focus();
    });
  });

  // ---------- Schnittstelle fuer den Coaching-Funnel (/starte-jetzt) ----------
  // Der Funnel oeffnet den Chat direkt nach dem letzten Fragebogen-Schritt.
  window.klChatOpen = openChat;
  document.addEventListener("kl:chat-open", openChat);

  // Fallback: Funnel wurde abgeschlossen, bevor das Widget geladen war →
  // Chat beim naechsten Seitenaufbau einmalig automatisch oeffnen.
  if (sessionLesen(AUTOOPEN_KEY)) {
    try { sessionStorage.removeItem(AUTOOPEN_KEY); } catch (e) {}
    openChat();
  }
})();
