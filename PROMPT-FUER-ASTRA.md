# Prompt für ChatGPT Astra

**So benutzt du ihn:** Alles ab der Trennlinie markieren, kopieren und in ChatGPT einfügen. Astra antwortet dann mit Texten und Gestaltungsvorgaben, die du mir hier im Chat zurückgibst. Ich baue sie ein.

---

Du bist mein Design- und Text-Partner für den Relaunch meiner Webseite. Ich bin Monika Oechtering-Sorg aus Karlsruhe, 2017 bis 2025 hatte ich eine Sprachschule, jetzt mache ich mein Herzensthema zum Beruf: **Klartext Liebe** (www.klartext-liebe.de), Singlecoaching mit Kursen und persönlicher Partnervermittlung.

Ich bin keine Programmiererin. Die technische Umsetzung macht Claude Code auf meinem Rechner. Von dir brauche ich **fertige Texte und konkrete Gestaltungsvorgaben**, die ich Claude weitergeben kann. Bitte antworte auf Deutsch.

## 1. Wer ich bin und was ich anbiete

Man nannte mich früher die Kupplerin. Ich bringe Menschen zusammen, seit ich denken kann, und habe im Freundeskreis mit viel Spaß Paare gestiftet. Singles aus meinem Umfeld kommen zu mir, wenn es nicht klappt, und ich sage ihnen ehrlich, was ich sehe: an der Kleidung, am Auftreten, an der Art zu reden, an der Auswahl, an den Hobbys. Psychologie war immer mein Thema, ich hätte es gerne studiert. Ich will verstehen, warum Menschen handeln, wie sie handeln, und hinterfrage alles.

Ich trete mit meinem Gesicht auf, das ist für mich kein Problem. Ein YouTube-Kanal (@klartextliebe) soll wöchentlich laufen.

**Angebot heute:**

| Was | Preis |
|---|---|
| Erstgespräch, 20 Minuten | kostenlos |
| Schriftliche Profil- und Chat-Analyse | 79 € |
| Einzelgespräch, 60 Minuten online | 119 € |
| Paargespräch, 90 Minuten online | 169 € |
| Dating-Klarheit-Paket, 3 Gespräche | 399 € |
| VIP-Matchklarheit (Intensivbegleitung) | 799 € |
| **Kurs 1 „Klartext Start", Live-Gruppe** | **149 €** |

Kleinunternehmerin nach § 19 UStG, alle Preise sind Endpreise ohne Umsatzsteuer.

**Die drei geplanten Kurse** (aufeinander aufbauend, einzeln buchbar):

1. **Klartext Start. Warum du noch Single bist.** 149 €. Muster erkennen, Selbstbild, blinde Flecken, Plan. Läuft als **Live-Gruppe**: vier Abende à 90 Minuten per Video, höchstens acht Teilnehmende, Workbook, persönliches Feedback, Aufzeichnung. Erste Gruppe im Oktober 2026. **Nur dieser Kurs ist heute buchbar.**
2. **Wirkung. Wie du gesehen wirst.** 199 €. Stil, Auftreten, Fotos, Profil, erste Nachricht, Small Talk, Hobbys als Begegnungsräume. Folgt als Videokurs.
3. **Vom Date zur Beziehung.** 199 €. Auswahl, rote Flaggen, Tempo, Kommunikation, Bindung. Folgt als Videokurs.

Bundle später 449 €.

**Partnervermittlung:** Heute nur persönlich für Menschen aus der Intensivbegleitung, die ich gut kenne. Wenn ich in meinem Umfeld jemanden sehe, der passen könnte, frage ich beide und stelle sie einander vor. Kein Pool, keine Datenbank, keine Quote. Eine eigene Vermittlung mit Bewerbung und Aufnahmegespräch kommt später.

## 2. Das Vorbild für die Struktur: chrissurel.com

Chris Surel ist Schlaf- und Energiecoach und hat aus seinem Herzensthema ein sehr erfolgreiches Business gemacht. Seine Seitenstruktur will ich übernehmen: Hero mit Gesicht und einem Claim, „Du bist hier richtig, wenn", die eigene Geschichte, ein kostenloser Einstieg, drei Kurse, 1:1, Content-Hub, FAQ. Sein Motor ist die Kette kostenloser Inhalt, dann kleines Produkt, dann großes Produkt.

**Ein Unterschied:** Er sammelt E-Mail-Adressen über ein Gratis-Video und einen Newsletter. **Ich will keinen Newsletter und keine E-Mail-Sammlung.** Mein kostenloser Einstieg sind drei Wege, die sofort funktionieren: ein Selbsttest auf der Seite mit anschließendem KI-Chat, das kostenlose Erstgespräch mit mir und die YouTube-Videos.

## 3. Das Vorbild für die Gestaltung: awork.com/de

Meine ganze Markenfamilie (Klartext Auswandern, Klartext Bordleben, Klartext Liebe) orientiert sich gestalterisch an **awork.com/de**, ausschließlich als Prinzip: keine Texte, keine Illustrationen, keine Schrift und kein Code von dort. Was ich meine, sind die Gestaltungsmittel: viel Luft, große weiche Formen, geschwungene Farbbänder im Hintergrund, leicht gekippte Rahmen um Screenshots, freundliche runde Ecken, mehrfarbige Überschriften, ein sehr dunkler Abschnitt mit leuchtenden Kartenrändern als Kontrastpunkt.

**Die Bausteine sind schon gebaut und heißen im Code so:**

- `.band` / `.band-warm` / `.band-kuehl`: selbst gezeichnetes SVG-Farbband hinter einem Abschnitt, Deckkraft 16 %, mit sehr langsamer Schimmer-Animation (28 s)
- `.akzentwort`, `.akzentwort-2`, `.akzentwort-3`: einzelne Wörter in einer Überschrift in Rosé, Navy oder Pflaume
- `.hero-kachel`: eine kleine weiße Kachel mit farbigem Punkt, leicht gekippt, mitten in einer Überschrift
- `.section-dunkel`: sehr dunkler Abschnitt (#071A26) mit `.karte-dunkel` (Karten mit leuchtendem Verlaufsrand)
- `.mockup` / `.mockup-rechts`: gekippter Rahmen mit weißem Rand und starkem Schatten um Bilder
- `.objekt`: freigestellte Objekte, die langsam schweben
- Alles respektiert `prefers-reduced-motion` und hat eine Druckansicht

**Die Farben und Werte (Tailwind, Fassung 3.3):**

```
Navy      #10334A   tragende Farbe, Überschriften, Fließtext-Dunkel
Navy tief #0B2435
Linkblau  #1C5C82
Pflaume   #7B3F62   Kicker/Eyebrow
Rosé Text #A5464D
Rosé Fläche #DD7F86
Bernstein Text #9A5D14, Fläche #E8A13D

Papier/Grund:  #F9F1ED (Seite), #FAF7F2 (Karten-Papier),
               #F7EBE7 (Wechselfläche), #F5E4E1 (Höhepunkt)
Text:          #22303A (Fließtext), #54636E (sekundär), #10334A (Überschriften)

Schrift:       Nunito, selbst gehostet, auch für Überschriften
Fließtext:     14,2 px (0.889rem), Zeilenhöhe 1.65
Radius:        Karten 20 px (2xl = 1.25rem), groß 2rem
Schatten:      dreilagig, sehr weich, Navy-getönt statt Grau
Hauptverlauf:  linear-gradient(135deg, #2D4B60, #10334A 52%, #0B2435)
Voller Verlauf: linear-gradient(120deg, #10334A, #7B3F62 55%, #DD7F86)
```

Türkis ist in der ganzen Markenfamilie verboten. Alle Farbpaare erfüllen WCAG AA.

**Technik:** Next.js 14 mit App Router, TypeScript, Tailwind, statischer Export auf Cloudflare Pages. Keine externen Schriften, keine Cookies, keine Tracker.

## 4. Was schon umgesetzt ist

Die neue Startseite hat diese Reihenfolge:

1. Hero: mein Foto in einem gekippten Rahmen rechts, links der Claim „Klartext Liebe. Damit aus Suchen Finden wird.", Buttons „Kostenlos starten" und „Die Kurse"
2. Vertrauensleiste (vier kurze Aussagen, keine Zahlen)
3. „Du bist hier richtig, wenn" mit drei Karten
4. Über mich: die Kupplerin-Geschichte
5. Kostenlos starten: drei Karten (Selbsttest, Erstgespräch, YouTube)
6. Die drei Kurse
7. Die 1:1-Angebote
8. Partnervermittlung als dunkler Abschnitt
9. So arbeite ich: Haltung, Grenzen, Krisenhinweis
10. YouTube
11. Ratgeber-Vorschau
12. Kurz-FAQ als Aufklapper
13. Abschluss mit Erstgespräch

Neue Seiten: /kostenlos-starten, /kurse, /kurse/klartext-start, /partnervermittlung.

## 5. Was ich von dir brauche

### A) Texte

1. **Drei Claim-Alternativen** zu „Klartext Liebe. Damit aus Suchen Finden wird." Kurz, ohne Floskel, deutsch.
2. **Verkaufstext für Kurs 1** in voller Länge: Überschrift, Einleitung, „für wen", die vier Wochen mit je zwei bis drei Sätzen, „was du am Ende hast", Einwandbehandlung, Abschluss. Ich will, dass jemand nach dem Lesen weiß, ob es für ihn ist.
3. **Zehn YouTube-Videotitel** mit je einem Aufhänger für die ersten zehn Sekunden, ein Stichpunkt-Skript von etwa acht Punkten und einer Videobeschreibung. Ich lese nicht ab, ich spreche frei.
4. **„Du bist hier richtig, wenn"**: drei Situationen, die einen Menschen wirklich treffen, ohne ihn zu beschämen.
5. **Über mich**: eine Fassung meiner Geschichte in etwa 250 Wörtern, in meiner Sprache, warm und ohne Pathos.

### B) Gestaltung

6. **Wo setze ich die awork-Mittel ein?** Sag mir pro Abschnitt der Startseite, welches Mittel passt (Farbband warm oder kühl, dunkler Abschnitt, gekippter Rahmen, Akzentwort, Kachel) und wo ich besser nichts mache. Zu viel davon wirkt unruhig.
7. **Rhythmus der Seite:** Welche Abschnitte bekommen Papier, welche die Wechselfläche, wo kommt der eine dunkle Block hin? Ich will genau einen starken Kontrastpunkt, nicht drei.
8. **Die drei Kurskarten:** Wie mache ich sichtbar, dass nur Kurs 1 buchbar ist, ohne dass Kurs 2 und 3 wie Platzhalter wirken?
9. **Bildkonzept:** Welche Fotos brauche ich von mir und in welcher Anmutung? Ich habe bisher ein Porträt.

## 6. Regeln, die nicht verhandelbar sind

- **Keine erfundenen Kundenstimmen, keine Sterne, keine Zahlen.** Ich habe noch keine Teilnehmer. Erfundene Bewertungen sind in Deutschland abmahnfähig (§ 5 UWG, Anhang Nr. 23b).
- **Keine Erfolgsgarantie.** Mein Versprechen heißt „Orientierung statt Garantie".
- **Keine Wartelisten und nichts anbieten, was es nicht gibt.** Was nicht buchbar ist, wird als „folgt" gekennzeichnet und hat keinen Button.
- **Kein Newsletter, keine E-Mail-Sammlung.**
- **Keine Pick-up-Taktiken, keine Manipulation.** Das Angebot ist für Frauen und Männer.
- **Coaching ist keine Psychotherapie.** Auf jeder Seite steht der Hinweis auf die Telefonseelsorge (0800 111 0 111).
- **Keine Werbesprache.** Kein „revolutionär", kein „einzigartig", keine Ausrufezeichen-Ketten. Schreib so, wie ein kluger Mensch spricht. Keine Gedankenstrich-Häufung, keine Dreierfiguren in jedem Satz, keine Überschrift „Fazit".
- **Duzen** auf der Webseite, **siezen** in den Rechtstexten.

## 7. Format deiner Antwort

Fang mit Teil A an (Texte), dann Teil B (Gestaltung). Liefere fertigen Text, keine Beschreibung von Text. Wenn dir etwas fehlt, frag mich, statt zu raten. Wenn du an meinem Konzept etwas falsch findest, sag es deutlich, aber liefere trotzdem.
