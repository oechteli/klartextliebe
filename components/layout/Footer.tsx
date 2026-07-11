import Link from "next/link";
import Image from "next/image";

const YOUTUBE_URL =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL ?? "https://youtube.com/@klartextliebe";

const columns = [
  {
    title: "Angebot",
    links: [
      { href: "/starte-jetzt", label: "Starte jetzt – kostenlos" },
      { href: "/coaching", label: "Coaching" },
      { href: "/persoenliches-coaching", label: "Persönliches Coaching" },
      { href: "/so-funktionierts", label: "So funktioniert's" },
      { href: "/analyse", label: "Persönlichkeitsanalyse" },
      { href: "/community", label: "Community" },
      { href: "/marktplatz", label: "Marktplatz" },
      { href: "/events", label: "Events" },
    ],
  },
  {
    title: "Ratgeber",
    links: [
      { href: "/blog", label: "Alle Artikel" },
      { href: "/blog/warum-dating-apps-frustrieren", label: "Dating-App-Frust" },
      { href: "/blog/kennenlernen-ab-30-40", label: "Kennenlernen ab 30/40" },
      { href: "/blog/rote-flaggen-beim-kennenlernen", label: "Rote Flaggen erkennen" },
      { href: "/blog/selbstwert-vor-partnersuche", label: "Selbstwert stärken" },
    ],
  },
  {
    title: "Mehr",
    links: [
      { href: "/ueber-mich", label: "Über mich" },
      { href: "/faq", label: "FAQ" },
      { href: "/youtube", label: "YouTube" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
      { href: "/agb", label: "AGB" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-cream-200 bg-cream-100/60">
      <div className="container-kl py-14">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
          {/* Marke */}
          <div className="max-w-xs">
            <Image
              src="/brand/logo.jpg"
              alt="Klartext Liebe"
              width={160}
              height={160}
              className="h-14 w-auto"
            />
            <p className="mt-4 text-sm text-ink-500">
              Dating für reflektierte Singles mit Tiefe.
            </p>
            <p className="mt-1 text-sm text-ink-400">
              Singlecoaching für echte Verbindung.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink-900">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-violet"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {col.title === "Mehr" && (
                  <li>
                    <a
                      href={YOUTUBE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-500 transition-colors hover:text-brand-violet"
                    >
                      YouTube-Kanal ↗
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Klartext Liebe. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-ink-400">
            Orientierung statt Garantie – echte Verbindung statt Masse.
          </p>
        </div>
      </div>
    </footer>
  );
}
