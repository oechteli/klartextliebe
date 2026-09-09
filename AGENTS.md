# Klartext Liebe — Anweisungen für Codex

## Zusammenarbeit mit Claude Code

An diesem Projekt arbeiten zwei Modelle an denselben Dateien: Codex und Claude
Code. Der gemeinsame Notizblock liegt in `docs/`. Vor der Arbeit lesen, nach der
Arbeit fortschreiben — sonst weiß der andere nicht, was passiert ist.

| Datei | Inhalt |
|---|---|
| `docs/AUFTRAG.md` | Was gerade zu tun ist, mit Abnahmekriterien |
| `docs/STAND.md` | Was erledigt wurde, neueste Einträge oben |
| `docs/ENTSCHEIDUNGEN.md` | Getroffene Festlegungen, die nicht wieder aufgerollt werden |
| `docs/PRUEFBERICHT.md` | Befunde aus dem letzten Gegenlesen |

### Rollenverteilung

Wenn du über `pruefen.ps1` gestartet wurdest, liest du gegen und baust nicht.
Schreibe dann nur Befunde, keine Änderungen am Code. Ein Befund nennt Datei,
Zeile, das konkrete Problem und was zu tun ist. Sortiere nach Schwere. Wenn
nichts zu beanstanden ist, schreib das hin, statt Kleinigkeiten zu erfinden.

Wenn Monika dich direkt beauftragt, baust du, und Claude Code liest gegen.

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
