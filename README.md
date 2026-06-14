# Klartext Liebe

**Dating für reflektierte Singles mit Tiefe** · _Singlecoaching für echte Verbindung._

Moderne Webplattform (MVP) für Singlecoaching, Datingberatung,
Persönlichkeitsanalyse, Community und kuratierte Begegnungen – für reflektierte
Singles, Akademiker und Menschen mit Tiefgang.

## Tech-Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (Branding in `tailwind.config.ts`)
- **Supabase** (Auth, DB, Storage) – vorbereitet, im MVP optional
- **Stripe** (Payment Links) – über `lib/stripe-links.ts`
- Mobile-first, responsive, SEO-freundlich, DSGVO-sensibel

## Lokal starten

```bash
cd klartext-liebe
npm install
cp .env.local.example .env.local   # (Windows: copy .env.local.example .env.local)
npm run dev
```

Dann im Browser: <http://localhost:3000>

> Die Seite läuft **ohne** Supabase/Stripe sofort als Prototyp. Formulare
> simulieren das Absenden, Kaufbuttons zeigen „Bald buchbar“, bis Links
> hinterlegt sind.

## Projektstruktur (Kurzüberblick)

```
app/                 # Seiten (App Router)
  page.tsx           # Startseite
  ueber-mich, coaching, community, analyse,
  marktplatz, events, youtube, kontakt,
  impressum, datenschutz
components/
  layout/            # Header, Footer, PageHero
  ui/                # Button, Card, Badge, SectionHeading
  sections/          # Hero, Problem, Solution, Offer, *Preview, Cta
  questionnaire/     # Questionnaire, QuestionStep, ResultPreview
  forms/             # WaitlistForm, ContactForm
lib/
  mock-data.ts       # alle Platzhalterdaten
  stripe-links.ts    # << hier Stripe-Links eintragen
  analyze-profile.ts # Mock-Analyse (später KI)
  questionnaire-data.ts
  supabase/          # Client/Server-Setup
types/               # index.ts, questionnaire.ts
supabase/migrations/ # 0001_init.sql (Datenmodell-Vorschlag)
```

## Stripe-Links eintragen

Datei: [`lib/stripe-links.ts`](lib/stripe-links.ts)

1. In Stripe **Payment Links** erstellen (pro Angebot).
2. URLs in das `stripeLinks`-Objekt eintragen (statt `"#"`).
3. Buttons schalten automatisch von „Bald buchbar“ auf den echten Kaufbutton.

## Supabase verbinden (optional)

1. Werte in `.env.local` setzen (`NEXT_PUBLIC_SUPABASE_URL`, `..._ANON_KEY`).
2. `supabase/migrations/0001_init.sql` im SQL-Editor ausführen.
3. In `WaitlistForm`/`ContactForm` den markierten `TODO`-Insert aktivieren
   (`createBrowserSupabaseClient()`).

## Was noch Mockup ist

- Warteliste & Kontakt: simuliertes Senden (kein DB-Insert)
- Analyse: regelbasierte Mock-Auswertung (`lib/analyze-profile.ts`)
- Kaufbuttons: Platzhalter-Links
- Community, Marktplatz, Events, Matching: UI + Datenmodell vorbereitet
- Login/Registrierung: noch nicht gebaut (Supabase-Auth vorbereitet)

## Sinnvolle nächste Schritte

1. **Auth**: Supabase-Login/Registrierung + `profiles`-Trigger.
2. **Community**: geschützter Bereich, Posts, Moderation, Regeln.
3. **Matching**: Profil-Erstellung, Admin-Freigabe, kuratierte Vorschläge.
4. **KI-Analyse**: echte Auswertung (Claude/OpenAI) in `analyze-profile.ts`.
5. **Stripe**: echte Checkout-Sessions + Webhook für `coaching_orders`.
6. **Recht**: Impressum & DSGVO-Datenschutzerklärung finalisieren.

---

_Wichtiger Hinweis: Klartext Liebe gibt **keine** Garantie für Beziehungserfolg –
es geht um Orientierung, bessere Passung und bewusstere Partnerwahl._
