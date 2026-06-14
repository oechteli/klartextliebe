import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Klartext Liebe – Dating für reflektierte Singles mit Tiefe",
    template: "%s · Klartext Liebe",
  },
  description:
    "Klartext Liebe verbindet Singlecoaching, Datingberatung, Persönlichkeitsanalyse, Community und kuratierte Begegnungen für reflektierte Singles, Akademiker und Menschen mit Tiefgang.",
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
    siteName: "Klartext Liebe",
    title: "Klartext Liebe – Dating für reflektierte Singles mit Tiefe",
    description:
      "Singlecoaching, Persönlichkeitsanalyse, Community und kuratierte Begegnungen für Menschen, die mehr suchen als Smalltalk und Swipen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klartext Liebe – Dating für reflektierte Singles mit Tiefe",
    description:
      "Singlecoaching für echte Verbindung. Orientierung statt Garantie.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
