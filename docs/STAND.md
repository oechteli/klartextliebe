# Stand

> Neueste Einträge oben. Jeder Eintrag: Datum, wer (Claude oder Codex), was
> gemacht wurde, was daraus offen blieb.

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
