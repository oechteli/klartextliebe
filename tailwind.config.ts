import type { Config } from "tailwindcss";

/**
 * Klartext Liebe · Designsystem der Klartext-Familie, Fassung 3.3 (04.09.2026)
 *
 * Bis zum 04.09.2026 hatte diese Seite eine eigene Palette aus Türkis, Blau,
 * Violett, Pink und Orange mit einem Regenbogen-Verlauf. Zwei Gründe für die
 * Umstellung:
 *   1. Türkis ist in allen Marken verboten (Wunsch von Peter).
 *   2. Klartext Liebe gehört zur Klartext-Familie (Auswandern, Bordleben) und
 *      soll wie sie aussehen: Navy #10334A als tragende Farbe, Rosé als Akzent,
 *      Nunito als Schrift (wie teachymindo), warmes Papier als Grund.
 *
 * Die alten Werte stehen als Kommentar daneben, gelöscht wurde nichts.
 *
 * Wichtig: Die Schlüsselnamen (brand.turquoise, brand.violet …) bleiben
 * unverändert, weil rund 400 Stellen in den Komponenten sie benutzen. Nur die
 * Werte wurden getauscht. Wer die Namen später aufräumen will, kann das in einem
 * eigenen Schritt tun; für die Gestaltung ist es nicht nötig.
 *
 * Kontrast: alle Paare erfüllen WCAG AA, geprüft mit
 * Desktop\designsystem\werkzeuge\kontrast-pruefen.mjs.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Markenpalette der Klartext-Familie.
        // alt: turquoise #3FB9C7, blue #3B82C4, violet #7C6BC4, pink #E06A9E, orange #F0945A
        brand: {
          turquoise: "#10334A", // Navy, die tragende Farbe der Familie
          blue: "#1C5C82", //     Linkblau,        9,35:1 auf Papier
          violet: "#7B3F62", //   Pflaume (Kicker), 7,20:1 auf Papier
          pink: "#A5464D", //     Rosé als Schrift, 5,60:1 auf Papier
          rose: "#DD7F86", //     Rosé als Fläche (Schrift darauf: Navy)
          orange: "#9A5D14", //   Bernstein als Schrift, aus der Familie
          amber: "#E8A13D", //    Bernstein als Fläche
          navy: "#10334A",
          "navy-dark": "#0B2435",
        },
        // Warmes Papier statt kühlem Creme.
        // alt: 50 #FDFCFA, 100 #FAF7F2, 200 #F3EDE4
        cream: {
          50: "#F9F1ED", //  Seitenuntergrund: 5 % Rosé auf Papier
          100: "#FAF7F2", // Papier
          200: "#F7EBE7", // Wechselfläche, 10 % Rosé auf Papier
          300: "#F5E4E1", // Höhepunkt, 16 % Rosé auf Papier
        },
        // alt: 900 #1E2233, 700 #3A4055, 500 #5C6378, 400 #858CA0
        // ink-0, ink-300, ink-600 und ink-800 wurden in den Komponenten benutzt,
        // waren aber nie definiert: diese Klassen erzeugten gar keine Farbe.
        ink: {
          0: "#FFFFFF",
          300: "#8A97A0",
          400: "#57646E", // Hinweistext,     6,03:1 auf Papier
          500: "#54636E", // Sekundärtext,    6,30:1
          600: "#3E4C56",
          700: "#22303A", // Fließtext,      12,66:1
          800: "#16394F",
          900: "#10334A", // Überschriften,  12,32:1
        },
      },
      fontFamily: {
        // 04.09.2026: dieselbe Schrift wie teachymindo und die ganze Klartext-Familie.
        // awork setzt Sofia Pro, eine geometrische Groteske - Nunito liegt dort naeher
        // als eine Serifenschrift. "serif" zeigt bewusst auf dieselbe Schrift, damit
        // alle bestehenden font-serif-Klassen ohne Aenderung mitziehen.
        // alt: sans var(--font-sans) mit Inter, serif var(--font-serif) mit Fraunces
        sans: ["var(--font-sans)", "Nunito", "system-ui", "sans-serif"],
        serif: ["var(--font-sans)", "Nunito", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fließtext 14,2 px wie in der ganzen Familie (Vorgabe Monika, awork-Vorbild).
        // alt: Tailwind-Standard sm 0.875rem, base 1rem.
        sm: ["0.8rem", { lineHeight: "1.6" }],
        base: ["0.889rem", { lineHeight: "1.65" }],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem", // alt: 1.5rem – Karten der Familie liegen bei 20 px
        "3xl": "2rem",
      },
      boxShadow: {
        // alt: soft 0 4px 24px -8px rgba(30,34,51,.10), card 0 8px 40px -12px rgba(30,34,51,.14)
        soft: "0 1px 2px rgba(16,51,74,.04), 0 6px 16px rgba(16,51,74,.06)",
        card: "0 1px 2px rgba(16,51,74,.04), 0 6px 16px rgba(16,51,74,.06), 0 16px 36px rgba(16,51,74,.06)",
        "card-hover":
          "0 2px 4px rgba(16,51,74,.06), 0 12px 26px rgba(16,51,74,.10), 0 26px 52px rgba(16,51,74,.10)",
      },
      backgroundImage: {
        // alt: Türkis→Blau→Violett bzw. inkl. Pink.
        // Der Hauptverlauf trägt weiße Schrift; das hellste Ende liegt bei 9,18:1.
        "brand-gradient":
          "linear-gradient(135deg, #2D4B60 0%, #10334A 52%, #0B2435 100%)",
        // Voller Familienverlauf für gezielte Akzente (Flächen ohne kleine Schrift).
        "brand-gradient-full":
          "linear-gradient(120deg, #10334A 0%, #7B3F62 55%, #DD7F86 100%)",
        // Dezenter Hintergrund-Wash, warm getönt.
        "brand-soft":
          "linear-gradient(135deg, rgba(221,127,134,0.10) 0%, rgba(123,63,98,0.08) 55%, rgba(16,51,74,0.08) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
