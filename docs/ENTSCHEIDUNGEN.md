# Entscheidungen

> Was hier steht, wird nicht wieder aufgerollt. Beide Modelle halten sich daran
> und schlagen nichts vor, was einer dieser Festlegungen widerspricht.
> Änderungen trägt nur Monika ein.

## 09.09.2026 — Zwei Modelle, ein Ordner

Claude Code und Codex arbeiten an denselben Dateien statt über kopierte
Markdown-Dateien. Beide laufen über ihre Abo-Anmeldung, nicht über API-Guthaben.
Kein Framework (LangGraph, CrewAI, n8n, OpenRouter), weil diese ausnahmslos
API-Schlüssel brauchen und damit Guthaben verbrauchen würden.

## 11.09.2026 — Direkt online buchen statt Anfrage

Von Monika entschieden: Die Buchungsknöpfe führen direkt zu Stripe, der Vertrag
entsteht mit dem Bezahlen. Vorher: Anfrage übers Kontaktformular, Vertrag erst
mit Monikas Bestätigung. Grund: Kein Umweg über das Kontaktformular, das nur
über das Mailprogramm der Besucherin funktioniert.

Ausnahme **VIP-Matchklarheit (799 €)**: bleibt beim Erstgespräch, weil der
Umfang dort geklärt wird. Den Zahlungslink schickt Monika danach
(`vipMatchklarheitZahlung` in `lib/stripe-links.ts`).

Stripe-Konto: **ACAMINDO**, nicht ein eigenes Klartext-Konto. Von Monika so
entschieden, obwohl Bezahlseite und Kontoauszug dann „ACAMINDO" zeigen.

AGB §3 und §4 entsprechend angepasst, beide Wege sind beschrieben. **Nicht
anwaltlich geprüft.**

## 10.09.2026 — Sessionpakete angeglichen

3er-Paket **319 €** (106,33 € pro Session), 10er-Paket **949 €** (94,90 € pro
Session). Damit ist die offene Stelle aus der Preisentscheidung vom 02.09.
geschlossen.

Begründung: Bei 119 € pro Einzelsession war das alte 3er-Paket zu 219 €
billiger als zwei Einzelsessions (238 €) — das Paket hätte den Einzelpreis
entwertet. Die neuen Preise entsprechen rund 11 % Rabatt beim 3er- und 20 %
beim 10er-Paket, der Preis pro Session sinkt also mit der Paketgröße.

Festgelegt von Claude am 10.09.2026 auf ausdrückliche Anweisung von Monika
(„Du kannst entscheiden"). Falls die Zahlen nicht passen, ändert Monika sie
hier; bis dahin gilt diese Festlegung und wird nicht wieder aufgerollt.

## 02.09.2026 — Preise

Einzelgespräch 60 Min einheitlich 119 €. Schriftliche Profil- und Chat-Analyse
79 €. Paargespräch 90 Min 169 €. Programme 399 € und 799 €. Die Sessionpakete
wurden am 10.09.2026 angeglichen, siehe oben.

## 02.09.2026 — Ehrlichkeit vor Wirkung

Erfundene Testimonials wurden entfernt. Community, Events und Marktplatz sind
als „in Vorbereitung" ausgewiesen und haben nur ein Vormerkformular. Keine
Match- oder Beziehungsgarantie, in keiner Formulierung.

## Hosting

Live-Domain www.klartext-liebe.de hängt am Cloudflare-Pages-Projekt
`klartext-liebe`, Produktions-Branch `main`. Der Worker bedient nur noch
workers.dev.
