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

- [ ] **Platz auf Laufwerk C: schaffen.** Heute waren 186 bis 206 MB frei bei
      238 GB Gesamtgröße. Solange das so ist, wird hier kein `npm run build`
      gestartet: Läuft die Platte beim Bauen voll, werden Dateien beschädigt —
      so ist am 02.09. die Wrangler-Anmeldung verloren gegangen. Für einen
      ruhigen Build sollten ein bis zwei Gigabyte frei sein. **Gelöscht wird
      hier nichts, das macht Monika selbst.**
- [ ] **Deploy nachholen**, sobald Platz da ist. Der Relaunch vom 07.09. ist
      nicht live, `klartext-liebe.de/kurse` gibt eine 404 zurück. Weg:
      `npm run build`, dann `npx wrangler login`, dann
      `npx wrangler pages deploy out --project-name klartext-liebe --branch main`.
      Ein Push nach GitHub reicht **nicht** — es gibt keine GitHub-Action, nur
      `wrangler.toml`. Am 10.09. gepusht und geprüft: Die Live-Seite änderte
      sich nicht.

### Offen, inhaltlich

- [ ] Stripe Payment Links in `lib/stripe-links.ts` eintragen. Heute zeigen alle
      Buchungsknöpfe aufs Kontaktformular, Monika bestätigt und schickt den
      Zahlungslink von Hand
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
- [x] ~~YouTube-Einbettung~~ — `components/sections/YouTubeSection.tsx` und
      `app/youtube/page.tsx` sind gebaut, nur noch nicht live

### Vorsicht beim Build

`NEXT_PUBLIC_SITE_URL` ist **nicht** nötig. Fehlt die Variable, benutzt
`app/sitemap.ts` von sich aus `https://www.klartext-liebe.de`, also den
richtigen Wert. Wer `.env.local.example` nach `.env.local` kopiert, holt sich
dagegen `http://localhost:3000` ins Haus und baut damit eine Sitemap voller
localhost-Adressen. Also entweder keine `.env.local` anlegen oder dort die
echte Adresse eintragen.
