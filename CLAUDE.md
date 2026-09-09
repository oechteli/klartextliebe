# Klartext Liebe — Anweisungen für Claude Code

## Zusammenarbeit mit Codex (ChatGPT)

An diesem Projekt arbeiten zwei Modelle an denselben Dateien: Claude Code und
Codex. Der gemeinsame Notizblock liegt in `docs/`. Vor der Arbeit lesen, nach
der Arbeit fortschreiben — sonst weiß der andere nicht, was passiert ist.

| Datei | Inhalt |
|---|---|
| `docs/AUFTRAG.md` | Was gerade zu tun ist, mit Abnahmekriterien |
| `docs/STAND.md` | Was erledigt wurde, neueste Einträge oben |
| `docs/ENTSCHEIDUNGEN.md` | Getroffene Festlegungen, die nicht wieder aufgerollt werden |
| `docs/PRUEFBERICHT.md` | Befunde aus Codex' letztem Gegenlesen |

### Rollenverteilung

Claude baut, Codex liest gegen. Umgekehrt genauso, wenn Monika mit Codex
anfängt — dann prüft Claude.

### Codex zum Gegenlesen aufrufen

```powershell
.\pruefen.ps1
```

Das Skript ruft `codex exec` auf und legt die Befunde in `docs/PRUEFBERICHT.md`
ab. Danach die Befunde einzeln abarbeiten und in `docs/STAND.md` vermerken,
welche umgesetzt und welche mit Begründung verworfen wurden.

Ein eigener Auftrag an Codex geht so:

```powershell
.\pruefen.ps1 -Auftrag "Prüfe nur app/coaching/page.tsx auf falsche Preise"
```

### Warum ein Skript und kein direkter Aufruf

Auf diesem Rechner ist die Windows-Variable `ANTHROPIC_AUTH_TOKEN` mit einem
OpenRouter-Schlüssel belegt. Solche Variablen können ein Kommandozeilen-Werkzeug
an der Abo-Anmeldung vorbei auf kostenpflichtiges Guthaben leiten. Das Skript
schaltet sie für den Aufruf ab. Deshalb Codex hier immer über `pruefen.ps1`
starten und nie einen API-Schlüssel als Umgebungsvariable setzen.

## Arbeitsregeln für dieses Projekt

- Antworten auf Deutsch.
- Nichts löschen oder verschieben ohne ausdrückliches Okay, auch keine
  vermeintlichen Karteileichen. Im Zweifel kopieren.
- Kein Grün und kein Rot in Gestaltung und Oberfläche.
- Keine Kontaktdaten im Klartext auf den Seiten, E-Mail nur per Klick-Knopf.
- Push auf `main` löst ein Live-Deploy aus. Vorher `npm run build` lokal testen.
- Texte und Markenstimme gehören Monika. Umformulierungen nur auf Wunsch.
- Grundhaltung der Marke: Orientierung statt Garantie. Nie eine Match- oder
  Beziehungsgarantie versprechen.

Technische Details, Stolperfallen und Deploy-Weg stehen in `HANDOFF.md`.

## Windows-Eigenheit: Umlaute

Alle Dateien in diesem Projekt sind UTF-8. Windows-PowerShell liest sie
standardmaessig als ANSI, dann kommen Umlaute verstuemmelt an ("trÃ¤gt" statt
"trägt"). Zum Lesen deshalb immer `Get-Content -Encoding utf8` verwenden,
zum Schreiben `Set-Content -Encoding utf8`.
