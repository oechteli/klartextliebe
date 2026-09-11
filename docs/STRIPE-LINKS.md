# Stripe Payment Links — Klartext Liebe

Angelegt am 11.09.2026 im Stripe-Konto **ACAMINDO** (acct_1D7iunJwM2MznzcL),
Live-Modus. Auf Monikas Entscheidung im ACAMINDO-Konto statt in einem eigenen
Konto. Folge: Bezahlseite, Browser-Tab und Kontoauszug der Kundin zeigen
„ACAMINDO". Der Produktname beginnt deshalb immer mit „Klartext Liebe –", damit
die Kundin ihre Buchung wiedererkennt.

| Nr. | Angebot | Preis | Link |
|---|---|---|---|
| 1 | Profil- und Chat-Analyse | 79 € | https://book.stripe.com/00weVebVYeyH33p9ybak00X |
| 2 | Einzelgespräch 60 Minuten | 119 € | https://book.stripe.com/aFa8wQ9NQ2PZavR11Fak00Y |
| 3 | 3er-Paket Einzelgespräche | 319 € | https://book.stripe.com/6oU28s8JM8ajbzV7q3ak00Z |
| 4 | 10er-Paket Einzelgespräche | 949 € | https://book.stripe.com/28EeVed023U3avR9ybak010 |
| 5 | Paargespräch 90 Minuten | 169 € | https://book.stripe.com/3cI8wQf8a2PZfQbeSvak011 |
| 6 | Kurs Klartext Start | 149 € | https://book.stripe.com/14A5kE5xA2PZ9rN8u7ak012 |
| 7 | Dating-Klarheit-Paket | 399 € | https://book.stripe.com/4gM28s9NQ8ajavR8u7ak013 |
| 8 | VIP-Matchklarheit | 799 € | https://book.stripe.com/14A6oIaRU3U3dI38u7ak014 |

## Einstellungen, bei allen acht gleich

- Einmalzahlung, keine Steuer (Kleinunternehmerin)
- Vollständiger Name wird erfasst, E-Mail sowieso
- Knopf heißt „Buchen" statt „Zahlen"
- Eigene Bestätigungsnachricht nach der Zahlung, kein Rechnungs-PDF (kostet
  0,4 % pro Buchung)
- Pflichtfeld **„Beginn der Leistung (AGB: klartext-liebe.de/agb)"** mit zwei
  Möglichkeiten:
  - Sofort beginnen – bei Widerruf zahle ich anteilig für bereits Erbrachtes
  - Erst nach Ablauf der 14-tägigen Widerrufsfrist beginnen

## Warum das Pflichtfeld statt des AGB-Häkchens

Stripe bietet ein Häkchen „AGB akzeptieren" nur an, wenn im Konto eine
AGB-Adresse hinterlegt ist. Diese Adresse gilt fürs ganze Konto, also auch für
alle ACAMINDO-, toolymindo- und Sprachschul-Links. Die Klartext-AGB dort
einzutragen, hätte die anderen Marken mitbetroffen. Deshalb nicht geändert.

Stripe verlangt bei Auswahlfeldern mindestens zwei Möglichkeiten. Aus der Not
ist etwas Nützliches geworden: Die Kundin erklärt ausdrücklich, ob du vor Ende
der Widerrufsfrist beginnen sollst. Das ist genau die Frage, an der hängt, ob
sie nach einem schon geführten Gespräch noch alles zurückverlangen kann. Du
siehst die Antwort bei jeder Zahlung im Stripe-Dashboard.

**Rechtlich nicht geprüft.** Formulierung vor dem ersten Verkauf von einer
Anwältin oder der Steuerberaterin ansehen lassen.

## Besonderheiten

- **Nr. 6, Kurs:** schließt automatisch nach 8 Buchungen (höchstens acht
  Teilnehmende). Danach erscheint: „Diese Gruppe ist ausgebucht. Die Themen des
  Kurses gibt es auch im Einzelgespräch mit mir: klartext-liebe.de/coaching".
  Keine Warteliste, entsprechend der Regel in `lib/kurse.ts`. Für die nächste
  Gruppe in Stripe die Begrenzung zurücksetzen oder einen neuen Link anlegen.
- **Nr. 5, Paargespräch:** Bestätigungstext spricht beide an („eure Buchung").
- **Nr. 8, VIP:** Auf der Website steht „Umfang klären wir im Erstgespräch".

## Offen im Stripe-Konto (nicht angefasst)

- **Auszahlungen sind ausgesetzt.** Stripe verlangt eine aktualisierte
  Bankverbindung. Zahlungen gehen ein, landen aber nicht auf dem Bankkonto,
  bis Monika das unter Einstellungen → Unternehmen → Kontostatus erledigt.
  Betrifft auch ACAMINDO und alle anderen Marken.
- Als Unternehmenswebsite ist noch `sprachschule-durlach.de` eingetragen.
- Angeboten werden Karte, Apple Pay, Bancontact und eps. Bancontact (Belgien)
  und eps (Österreich) nutzt in Deutschland kaum jemand; PayPal, Klarna oder
  SEPA-Lastschrift wären für deutsche Kundinnen naheliegender. Einstellung gilt
  fürs ganze Konto.
