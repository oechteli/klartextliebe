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
      { href: "/community", label: "Community (in Vorbereitung)" },
      { href: "/marktplatz", label: "Matching (in Vorbereitung)" },
      { href: "/events", label: "Events (in Vorbereitung)" },
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

        {/* Abgrenzung + Krisenhinweis (seit 02.09.2026 auf jeder Seite) */}
        <div className="mt-12 rounded-2xl border border-cream-200 bg-white/70 p-5 text-xs leading-relaxed text-ink-500">
          <strong className="text-ink-700">Wichtig:</strong> Coaching ist keine
          Psychotherapie und ersetzt keine ärztliche oder therapeutische
          Behandlung. Wenn es dir akut schlecht geht, ist die Telefonseelsorge
          rund um die Uhr kostenlos für dich da:{" "}
          <a href="tel:08001110111" className="font-semibold text-ink-700 hover:text-brand-violet">
            0800 111 0 111
          </a>{" "}
          oder{" "}
          <a href="tel:08001110222" className="font-semibold text-ink-700 hover:text-brand-violet">
            0800 111 0 222
          </a>
          . In Notfällen wähle die 112.
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-cream-200 pt-6 sm:flex-row sm:items-center">
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
