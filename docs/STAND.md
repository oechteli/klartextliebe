# Stand

> Neueste Einträge oben. Jeder Eintrag: Datum, wer (Claude oder Codex), was
> gemacht wurde, was daraus offen blieb.

## 10.09.2026 — Claude (Deploy erledigt, Relaunch ist live)

Monika hat Platz auf C: geschaffen, 5,1 GB frei. Damit war der Build möglich.

`npm run build` lief fehlerfrei durch, alle Seiten erzeugt, `out/` 5,7 MB. Im
Build die neuen Preise geprüft (319 / 949, 106,33 / 94,90 pro Session), alte
Werte kommen nicht mehr vor. Dann
`npx wrangler pages deploy out --project-name klartext-liebe --branch main`.

**Der Relaunch vom 07.09. ist live.** Nachgeprüft mit `curl` unter Umgehung des
Zwischenspeichers: `/`, `/kurse`, `/kurse/klartext-start`, `/partnervermittlung`,
`/youtube`, `/kostenlos-starten`, `/coaching`, `/impressum`, `/datenschutz`
liefern alle HTTP 200. `/kurse` gab vorher eine 404. Die Paketpreise stehen auf
`/persoenliches-coaching` und `/coaching`, der Kurs steht mit 149 €. Die Sitemap
enthält kein localhost.

**Merkposten fürs nächste Mal:** Direkt nach dem Deploy zeigte das Abruf-Werkzeug
noch die alte Seite. Das war sein eigener Zwischenspeicher, nicht das Deploy.
Zum Prüfen deshalb `curl` mit einem Zufallsparameter benutzen, nicht WebFetch.

**Hinweis von Wrangler:** `wrangler.toml` fehlt das Feld
`pages_build_output_dir`. Die Datei wird beim Deploy deshalb ignoriert. Das
Deploy funktioniert trotzdem, weil das Verzeichnis auf der Kommandozeile steht.
Nicht geändert, weil an einer funktionierenden Veröffentlichung nichts ohne Not
gedreht wird.

## 10.09.2026 — Claude (Preise, Syntaxfehler, Deploy vorbereitet)

Auf Monikas Anweisung selbständig entschieden und umgesetzt:

**Sessionpakete angeglichen.** 3er-Paket 319 €, 10er-Paket 949 €, siehe
`ENTSCHEIDUNGEN.md`. Geändert in `app/persoenliches-coaching/page.tsx` (Preis,
Einheit, Buchungsthema, Metabeschreibung) und `app/coaching/page.tsx`. Die alten
Werte 219 und 649 kommen im Code nicht mehr vor. Damit ist der Befund aus
`PRUEFBERICHT.md` erledigt.

**Syntaxfehler in `app/faq/page.tsx` behoben.** Zeile 29 mischte deutsche
Anführungszeichen: geöffnet mit „, geschlossen mit einem geraden ". Das gerade
Zeichen beendet die JavaScript-Zeichenkette und machte die Datei ungültig.
`npx tsc --noEmit` meldete rund zwanzig Folgefehler. **Damit wäre jeder Build
gescheitert** — das war ein stiller zweiter Blocker fürs Deploy, unabhängig von
der verlorenen Wrangler-Anmeldung. Drei Zeichen ersetzt, Typprüfung jetzt
fehlerfrei.

Eine Suche über `app/`, `lib/` und `components/` fand 35 weitere gemischte
Anführungszeichen, alle in Kommentaren und damit harmlos. Nicht angefasst.

**Tag 14 des YouTube-Skripts** um die echten Angebote ergänzt: kostenloser
Selbsttest und Erstgespräch, die neuen Paketpreise und der Kurs Klartext Start
(149 €, vier Abende à 90 Minuten, höchstens acht Teilnehmende, Start Oktober).
Der Kurs existiert tatsächlich, ich hatte ihn am 09.09. fälschlich für erfunden
gehalten und gestrichen.

**Zwei Korrekturen an früheren Annahmen:**

1. Impressum und Datenschutz sind **nicht** Platzhalter. Sie sind befüllt und
   live, mit vollständiger Anschrift und Kleinunternehmer-Hinweis. Der
   entsprechende Punkt in `AUFTRAG.md` ist veraltet.
2. Ein Push löst **kein** Deploy aus. Es gibt keine GitHub-Action, nur
   `wrangler.toml`. Live geht die Seite nur über einen lokalen Build plus
   `wrangler pages deploy`.

**Deploy weiterhin offen, jetzt aus einem anderen Grund.** Laufwerk C: hatte
heute zwischen 186 und 206 MB frei. Ein `npm run build` habe ich deshalb nicht
gestartet: Wenn die Platte dabei vollläuft, werden Dateien beschädigt — genau so
ist am 02.09. die Wrangler-Anmeldung verloren gegangen. Aufräumen kann nur
Monika, hier wird nichts gelöscht. Sobald ein paar Gigabyte frei sind:
`npm run build`, dann `npx wrangler login`, dann
`npx wrangler pages deploy out --project-name klartext-liebe --branch main`.

Der Relaunch vom 07.09. ist damit weiter nicht live; `klartext-liebe.de/kurse`
gibt eine 404 zurück.

## 09.09.2026 — Claude (YouTube, Umstellung auf lange Videos)

Monika hat darauf hingewiesen, dass Werbung mitten im Video erst ab einer
bestimmten Länge läuft. Nachgeprüft und bestätigt: Mid-Roll-Anzeigen gibt es ab
**8 Minuten** (bis Mitte 2020 waren es 10). Fürs Partnerprogramm gelten
weiterhin 1.000 Abonnenten und 4.000 Wiedergabestunden in 12 Monaten, ab
**Februar 2027** steigt die Schwelle für neue Kanäle auf 8.000 Stunden;
bestehende Mitglieder sind ausgenommen.

Folge: Der Plan mit 4- bis 6-Minuten-Videos war falsch gerechnet. Umgestellt auf
**14 Videos zu je 8 bis 12 Minuten**, neue Datei `youtube/VIDEOS-TAG-01-14.md`.
Die 21 kurzen Themen sind zu 14 langen zusammengefasst, damit die Länge aus
Inhalt entsteht und nicht aus Streckung: Profilfoto, Profiltext und erste
Nachricht bilden jetzt Tag 3, Interesse erkennen und Dauerchat ohne Treffen
Tag 7, Gesprächsführung und erstes Date Tag 12. Jedes Skript hat einen
Übungsteil und einen Abschnitt zu den eigenen Grenzen.

`youtube/KANAL-START.md` angepasst: Abschnitt 1 auf das neue Format, neuer
Abschnitt 1a mit der Rechnung, warum lange Videos den Weg ins Partnerprogramm
halbieren. Ehrlich vermerkt, dass täglich 8 bis 12 Minuten deutlich mehr
Aufnahmezeit kostet, mit dem Hinweis, im Zweifel die Anzahl zu senken und die
Länge zu halten.

`youtube/VIDEOS-TAG-01-21.md` **nicht gelöscht**, nur mit einem Hinweis oben
versehen, dass die Längenpläne darin überholt sind. Inhalt unverändert.

Preise in Tag 14 aus `ENTSCHEIDUNGEN.md` übernommen (79 / 119 / 169 / 399 /
799). Die Sessionpakete 219 und 649 bleiben im Video ungenannt, solange sie laut
Prüfbericht nicht angeglichen sind. Ein zuvor von mir erfundener Kurs für 149 €
ist entfernt — er stand in keiner Entscheidung.

Offen: Laufwerk C: ist weiterhin praktisch voll (rund 250 MB frei). Beim
Schreiben ist deshalb schon einmal eine Datei verloren gegangen. Aufräumen kann
nur Monika, gelöscht wird hier nichts.

## 09.09.2026 — Claude

Zwei-Modell-Werkbank eingerichtet. `CLAUDE.md` und `AGENTS.md` angelegt, damit
beide Modelle beim Start dieselben Regeln lesen. Gemeinsamer Notizblock in
`docs/`. `pruefen.ps1` ruft Codex zum Gegenlesen auf und schaltet dabei die
Windows-Variable `ANTHROPIC_AUTH_TOKEN` ab, damit nichts an der Abo-Anmeldung
vorbeiläuft.

Codex-CLI 0.153.4 installiert, angemeldet über ChatGPT-Konto, kein API-Schlüssel
im Anmeldespeicher.

Offen: `pruefen.ps1` ist noch nicht an einem echten Auftrag erprobt.
