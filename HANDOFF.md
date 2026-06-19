# Klartext Liebe – Projekt-Handoff & Kontext

> **Zweck dieser Datei:** Vollständiger Kontext, um einen **neuen Chat (z. B. in VS Code / Claude Code)** zu starten, ohne den bisherigen Verlauf zu kennen. Stand: **2026-06-15**.

---

## 1. Was ist Klartext Liebe?

**Klartext Liebe** ist eine Plattform für **Singlecoaching, Datingberatung, Persönlichkeitsanalyse, Community und kuratiertes Matching** – für reflektierte Singles, Akademiker und Menschen mit Tiefgang.

- **Claim:** „Dating für reflektierte Singles mit Tiefe." / „Singlecoaching für echte Verbindung."
- **Grundhaltung:** *Orientierung statt Garantie* – **niemals** eine Match-/Beziehungsgarantie versprechen. Keine manipulativen Dating-Tricks.
- **YouTube-Funnel:** Kanal **@klartextliebe** (Gesichts-/Funnel-Kanal).

---

## 2. Tech-Stack & lokaler Pfad

| | |
|---|---|
| **Lokaler Ordner** | `C:\Users\mail\klartext-liebe` |
| **Framework** | Next.js 14 (App Router) + TypeScript |
| **Styling** | Tailwind CSS (Branding in `tailwind.config.ts`) |
| **Daten/Backend** | Supabase (vorbereitet, **nicht** verbunden) |
| **Payment** | Stripe Payment Links (`lib/stripe-links.ts`, noch Platzhalter) |
| **Build-Modus** | **Statischer Export** (`output: "export"` → Ordner `out/`) |

**Lokal starten:** `npm install` → `npm run dev` → http://localhost:3000
**Bauen:** `npm run build` → erzeugt `out/`

### Markenfarben (aus `tailwind.config.ts`)
- Türkis `#3FB9C7`, Blau `#3B82C4`, Violett `#7C6BC4`, Pink `#E06A9E`, Orange `#F0945A`
- Haupt-Gradient: Türkis→Blau→Violett (bewusst ohne Pink, edel/neutral)
- Basis: warmes Creme `#FDFCFA` / `#FAF7F2`, Schrift `ink`-Töne

---

## 3. Hosting & Deployment (WICHTIG)

| | |
|---|---|
| **GitHub-Repo** | https://github.com/oechteli/klartextliebe (Branch `main`) |
| **Live-URL** | https://klartextliebe.monika-oechtering.workers.dev |
| **Hosting** | Cloudflare **Workers** (Static Assets), **nicht** Pages (`.workers.dev`, nicht `.pages.dev`) |
| **Auto-Deploy** | **Aktiv** – jeder Push auf `main` baut & veröffentlicht automatisch |

### Build-/Deploy-Konfiguration (Cloudflare Workers Builds)
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **`wrangler.toml`** im Repo: liefert `out/` als statische Assets aus
  ```toml
  name = "klartextliebe"
  compatibility_date = "2024-11-01"

  [assets]
  directory = "./out"
  not_found_handling = "404-page"
  ```

### ⚠️ Stolperfallen (unbedingt beachten)
1. **`package-lock.json` MUSS mit npm 10 erzeugt werden!** Das Cloudflare-CI nutzt **npm 10.9.2 / Node 22**. Mit lokalem **npm 11** erzeugte Lock-Dateien lassen `npm ci` im CI **fehlschlagen** (fehlende `@emnapi`-Pakete, Fehler `EUSAGE`).
   - **Fix:** `npx npm@10.9.2 install --package-lock-only` und committen.
2. **`output: "export"`** + **`images.unoptimized: true`** sind nötig (next/image im statischen Export).
3. **Windows-Eigenheiten:** `curl` scheitert lokal an TLS (`CRYPT_E_NO_REVOCATION_CHECK`) → für HTTP-Checks **PowerShell `Invoke-WebRequest`** nutzen. Beim `npm run build` kann ein **`EBUSY`-Lock** auf `out/` auftreten (Antivirus/Indexer) → einfach erneut bauen.
4. **„dachkompass build token"** in Cloudflare ist nur der Name eines wiederverwendeten Account-Tokens – **keine** Verbindung zum dachkompass-Projekt.

---

## 4. Seitenstruktur

```
app/
  layout.tsx          # globale Metadaten, JSON-LD, Header/Footer, Skip-Link
  page.tsx            # Startseite (komponiert Sections)
  ueber-mich, coaching, community, analyse,
  marktplatz, events, youtube, kontakt,
  impressum, datenschutz    # je eigene Seite + Metadaten
  not-found.tsx       # gebrandete 404
  sitemap.ts / robots.ts / manifest.ts / icon.svg   # SEO/Branding
components/
  layout/  (Header, Footer, PageHero)
  ui/      (Button, Card, Badge, SectionHeading)
  sections/(Hero, Problem, Solution, Offer, *Preview, Cta)
  questionnaire/ (Questionnaire, QuestionStep, ResultPreview)
  forms/   (WaitlistForm, ContactForm)   # MVP: simulieren nur das Absenden
lib/
  mock-data.ts, stripe-links.ts, analyze-profile.ts, questionnaire-data.ts
  supabase/ (client.ts, server.ts)
public/
  brand/ (logo.jpg, header.jpg)
  _headers           # Security-Header (von Cloudflare ausgewertet)
supabase/migrations/0001_init.sql   # Datenmodell-Vorschlag
```

---

## 5. In dieser Session erledigt (2026-06-15)

1. **Repo + GitHub:** Git initialisiert, Code nach `oechteli/klartextliebe` gepusht.
2. **Cloudflare-Deploy:** Über den neuen **Workers-Builds**-Flow mit Git verbunden → Auto-Deploy bei jedem Push.
3. **SEO-Politur:**
   - `metadataBase`-Fallback von `localhost` → Produktions-URL korrigiert
   - Pro Seite eigene **Canonical-URL**
   - **sitemap.xml**, **robots.txt**
   - **OpenGraph-/Twitter-Bild** (Markenbanner)
   - **JSON-LD** (Organization + WebSite global; **FAQPage** auf `/coaching`)
4. **Branding/UX:** Marken-**Favicon** (Herz im Gradient), gebrandete **404-Seite**, **Web-App-Manifest**, Theme-Color.
5. **Accessibility:** Skip-Link „Zum Inhalt springen" + `main`-Landmark.
6. **Sicherheit:** `public/_headers` mit nosniff, X-Frame-Options, Referrer-Policy, **HSTS**, Permissions-Policy + Cache-Header.

Alles **live verifiziert** (Status 200, Header aktiv, 404 korrekt).

---

## 6. Noch offen / TODO (Reihenfolge = Vorschlag)

- [ ] **Impressum & Datenschutz** befüllen (aktuell rechtliche Platzhalter – vor echter Datenerhebung nötig!)
- [ ] **Stripe Payment Links** in `lib/stripe-links.ts` eintragen (Buttons schalten dann von „Bald buchbar" auf echten Kauf)
- [ ] **Supabase** verbinden: `.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `..._ANON_KEY`), Migration ausführen, Insert in `WaitlistForm`/`ContactForm` aktivieren
- [ ] **Auth** (Supabase-Login/Registrierung + `profiles`-Trigger)
- [ ] **Community** (geschützter Bereich, Posts, Moderation)
- [ ] **Matching/Marktplatz** (Profil-Erstellung, Admin-Freigabe, kuratierte Vorschläge)
- [ ] **KI-Analyse** echt in `lib/analyze-profile.ts` (aktuell regelbasierter Mock)
- [ ] **Eigene Domain** (z. B. `klartext-liebe.de`) an Cloudflare anbinden; dann `NEXT_PUBLIC_SITE_URL` als Build-Variable setzen
- [ ] **Über-mich-Foto** und **YouTube-Video-Einbettung** ergänzen

---

## 7. Arbeitsweise-Hinweise (für den neuen Chat)

- **Sprache: immer Deutsch** antworten.
- **Vor Deployments/Käufen/Server-Änderungen erst nachfragen** – außer der User gibt ausdrücklich frei.
- **Mit Kopien/Duplikaten arbeiten**, Bestehendes nicht überschreiben.
- Pushes auf `main` lösen **automatisch ein Live-Deploy** aus – also nur bewusst pushen, lokal vorher `npm run build` testen.
- **Texte/Markenstimme** gehören dem User – inhaltliche Umformulierungen nur auf Wunsch.

---

## 8. Empfohlener Projektname für den neuen Chat

**`Klartext Liebe – Website`**  (VS-Code-Ordner: `C:\Users\mail\klartext-liebe`, Repo: `klartextliebe`)
