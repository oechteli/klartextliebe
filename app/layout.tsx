import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Produktions-URL als Fallback (Cloudflare-Worker). Per NEXT_PUBLIC_SITE_URL
// überschreibbar, sobald eine eigene Domain angebunden ist.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://klartextliebe.monika-oechtering.workers.dev";

const OG_IMAGE = {
  url: "/brand/header.jpg",
  width: 1920,
  height: 1080,
  alt: "Klartext Liebe – Singlecoaching für echte Verbindung",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Klartext Liebe – Dating für reflektierte Singles mit Tiefe",
    template: "%s · Klartext Liebe",
  },
  description:
    "Klartext Liebe verbindet Singlecoaching, Datingberatung, Persönlichkeitsanalyse, Community und kuratierte Begegnungen für reflektierte Singles, Akademiker und Menschen mit Tiefgang.",
  alternates: { canonical: "/" },
  keywords: [
    "Singlecoaching",
    "Datingcoaching",
    "Singleberatung",
    "Datingberatung",
    "Akademiker Dating",
    "Dating für Akademiker",
    "sapiosexuell",
    "sapiosexuelle Singles",
    "Dating mit Tiefgang",
    "Beziehung finden",
    "Liebe finden",
    "Kommunikation beim Dating",
    "Selbstwert",
    "Online-Dating",
    "Dating ohne Spielchen",
    "reflektierte Singles",
  ],
  authors: [{ name: "Klartext Liebe" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Klartext Liebe",
    title: "Klartext Liebe – Dating für reflektierte Singles mit Tiefe",
    description:
      "Singlecoaching, Persönlichkeitsanalyse, Community und kuratierte Begegnungen für Menschen, die mehr suchen als Smalltalk und Swipen.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klartext Liebe – Dating für reflektierte Singles mit Tiefe",
    description:
      "Singlecoaching für echte Verbindung. Orientierung statt Garantie.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#7C6BC4",
  colorScheme: "light",
};

// Strukturierte Daten (schema.org) für bessere Suchmaschinen-Darstellung.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Klartext Liebe",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/logo.jpg`,
      description:
        "Singlecoaching, Datingberatung, Persönlichkeitsanalyse und kuratierte Begegnungen für reflektierte Singles.",
      sameAs: ["https://youtube.com/@klartextliebe"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Klartext Liebe",
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-900 focus:shadow-card"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="hauptinhalt" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* KI-Chat-Widget (selbst-injizierend, spricht mit /api/chat) */}
        <script src="/chat.js" defer />
      </body>
    </html>
  );
}
