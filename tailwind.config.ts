import type { Config } from "tailwindcss";

/**
 * Klartext-Liebe-Branding
 * Akzentfarben aus dem Logo (Türkis, Blau, Pink, Orange, Violett),
 * bewusst gedämpft & harmonisch – NICHT regenbogenartig.
 * Basis ist warmes Creme/Weiß mit viel Weißraum.
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
        // Markenpalette
        brand: {
          turquoise: "#3FB9C7",
          blue: "#3B82C4",
          violet: "#7C6BC4",
          pink: "#E06A9E",
          orange: "#F0945A",
        },
        // Neutrale, warme Basis
        cream: {
          50: "#FDFCFA",
          100: "#FAF7F2",
          200: "#F3EDE4",
        },
        ink: {
          900: "#1E2233",
          700: "#3A4055",
          500: "#5C6378",
          400: "#858CA0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(30, 34, 51, 0.10)",
        card: "0 8px 40px -12px rgba(30, 34, 51, 0.14)",
      },
      backgroundImage: {
        // Haupt-Gradient: Türkis→Blau→Violett (bewusst OHNE Pink -> ausgewogen,
        // geschlechtsneutral, edel). Wird für Buttons, Logo-Box etc. genutzt.
        "brand-gradient":
          "linear-gradient(120deg, #3FB9C7 0%, #3B82C4 50%, #7C6BC4 100%)",
        // Voller Markenverlauf inkl. Pink – nur für gezielte Akzente.
        "brand-gradient-full":
          "linear-gradient(120deg, #3FB9C7 0%, #3B82C4 30%, #7C6BC4 65%, #E06A9E 100%)",
        // Dezenter Hintergrund-Wash, kühl/neutral getönt.
        "brand-soft":
          "linear-gradient(135deg, rgba(63,185,199,0.10) 0%, rgba(59,130,196,0.10) 50%, rgba(124,107,196,0.10) 100%)",
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
