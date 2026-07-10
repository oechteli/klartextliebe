"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const LOGIN_URL =
  process.env.NEXT_PUBLIC_LOGIN_URL ?? "https://appymindo.de";

// Hauptnavigation (Desktop sichtbar)
const primaryItems = [
  { href: "/", label: "Start" },
  { href: "/coaching", label: "Coaching" },
  { href: "/so-funktionierts", label: "So funktioniert's" },
  { href: "/blog", label: "Ratgeber" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

// Weitere Bereiche (Desktop im "Mehr"-Menü, mobil in eigener Gruppe)
const moreItems = [
  { href: "/analyse", label: "Analyse" },
  { href: "/community", label: "Community" },
  { href: "/marktplatz", label: "Marktplatz" },
  { href: "/events", label: "Events" },
  { href: "/youtube", label: "YouTube" },
  { href: "/kluge-koepfe", label: "Sapiosexuell?" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Klartext Liebe – Startseite">
      <Image
        src="/brand/logo.jpg"
        alt="Klartext Liebe"
        width={160}
        height={160}
        priority
        className="h-12 w-auto"
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Menüs bei Seitenwechsel schließen
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  // "Mehr"-Dropdown bei Klick außerhalb schließen
  useEffect(() => {
    if (!moreOpen) return;
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [moreOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const moreActive = moreItems.some((item) => isActive(item.href));

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/70 bg-cream-50/85 backdrop-blur-md">
      <div className="container-kl flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {primaryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-brand-violet"
                  : "text-ink-700 hover:text-ink-900 hover:bg-cream-100",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}

          {/* "Mehr"-Dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className={[
                "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                moreActive
                  ? "text-brand-violet"
                  : "text-ink-700 hover:text-ink-900 hover:bg-cream-100",
              ].join(" ")}
            >
              Mehr
              <span aria-hidden className="text-xs">
                {moreOpen ? "▴" : "▾"}
              </span>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-cream-200 bg-white p-2 shadow-card">
                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                    className={[
                      "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-brand-violet"
                        : "text-ink-700 hover:bg-cream-100 hover:text-ink-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={LOGIN_URL} variant="ghost" size="sm">
            Login
          </Button>
          <Button href="/coaching" size="sm">
            Coaching ansehen
          </Button>
        </div>

        {/* Mobile-Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-cream-100 lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile-Navigation */}
      {open && (
        <nav
          className="border-t border-cream-200 bg-cream-50 lg:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="container-kl flex flex-col py-3">
            {primaryItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-cream-100"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-wide text-ink-400">
              Entdecken
            </p>
            {moreItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-cream-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 px-3 pt-3">
              <Button href="/coaching" size="sm" className="w-full">
                Coaching ansehen
              </Button>
              <Button
                href={LOGIN_URL}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                Login
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
