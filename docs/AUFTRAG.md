# Aktueller Auftrag

> Hier steht immer nur **eine** Sache. Erledigtes wandert nach `STAND.md`.
> Monika trägt hier ein, was als Nächstes dran ist. Beide Modelle lesen es.

## Auftrag

_Noch nicht gesetzt._

## Abnahmekriterien

_Woran erkennt man, dass es fertig ist? Ohne diese Liste gilt der Auftrag als
nicht abnehmbar._

---

## Vorrat: offene Punkte

Stand 10.09.2026. Nachgeprüft, nicht nur aus `HANDOFF.md` übernommen — die alte
Liste enthielt zwei Punkte, die längst erledigt waren.

### Blockiert, braucht Monika

- [ ] **Stripe-Auszahlungen sind ausgesetzt.** Stripe verlangt eine
      aktualisierte Bankverbindung. Buchungen gehen ein, das Geld kommt aber
      nicht aufs Konto. Einstellungen → Unternehmen → Kontostatus. Bankdaten
      trägt nur Monika ein
- [ ] **Benachrichtigung bei Buchung prüfen.** Die Website verspricht Rückmeldung
      innerhalb von 24 Stunden. Das klappt nur, wenn Stripe Monika bei jeder
      Zahlung eine E-Mail schickt (Profil → Kommunikationseinstellungen)
- [ ] **Eine echte Testbuchung** über den 79-€-Link und danach in Stripe
      erstatten. Prüft den ganzen Weg bis zur Bestätigung und zur E-Mail
- [ ] AGB §3 und §4 anwaltlich ansehen lassen, ebenso das Pflichtfeld „Beginn
      der Leistung" in den Stripe-Links (siehe `STRIPE-LINKS.md`)

### Offen, inhaltlich

- [ ] Kontaktformular echt absenden lassen. Die Seite ist ein statischer Export
      (`output: "export"` in `next.config.mjs`), es gibt keine Serverroute. Das
      Formular fällt deshalb immer auf eine vorausgefüllte E-Mail im
      Mailprogramm der Besucherin zurück. Wer keines eingerichtet hat, kommt
      nicht durch. Braucht Supabase oder einen externen Formulardienst
- [ ] Über-mich-Foto ergänzen
- [ ] Eigene Domain endgültig anbinden

### Erledigt

- [x] ~~Sessionpakete angleichen~~ — am 10.09. auf 319 € und 949 € gesetzt,
      siehe `ENTSCHEIDUNGEN.md`
- [x] ~~Impressum und Datenschutz befüllen~~ — **war nie offen.** Beide sind
      befüllt und live, mit vollständiger Anschrift, Kleinunternehmer-Hinweis
      und Haftungsausschluss. Am 10.09. auf der Live-Seite nachgeprüft
- [x] ~~Stripe Payment Links eintragen~~ — am 11.09.2026. Acht Links angelegt,
      sieben auf der Website verbaut, alle Buchungsknöpfe führen direkt zu
      Stripe. VIP bleibt beim Erstgespräch. Übersicht: `STRIPE-LINKS.md`
- [x] ~~Deploy nachholen~~ — am 10.09.2026 erledigt. Monika hat Platz auf C:
      geschaffen, Build lief durch, `wrangler pages deploy` ausgeführt. Der
      Relaunch vom 07.09. ist live, alle neuen Seiten liefern HTTP 200
- [x] ~~Platz auf Laufwerk C:~~ — am 10.09.2026 von Monika erledigt, 5,1 GB frei
- [x] ~~YouTube-Einbettung~~ — `components/sections/YouTubeSection.tsx` und
      `app/youtube/page.tsx` sind gebaut, nur noch nicht live

### Vorsicht beim Build

`NEXT_PUBLIC_SITE_URL` ist **nicht** nötig. Fehlt die Variable, benutzt
`app/sitemap.ts` von sich aus `https://www.klartext-liebe.de`, also den
richtigen Wert. Wer `.env.local.example` nach `.env.local` kopiert, holt sich
dagegen `http://localhost:3000` ins Haus und baut damit eine Sitemap voller
localhost-Adressen. Also entweder keine `.env.local` anlegen oder dort die
echte Adresse eintragen.
