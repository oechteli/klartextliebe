"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/coaching", label: "Coaching" },
  { href: "/community", label: "Community" },
  { href: "/analyse", label: "Analyse" },
  { href: "/marktplatz", label: "Marktplatz" },
  { href: "/events", label: "Events" },
  { href: "/youtube", label: "YouTube" },
  { href: "/kontakt", label: "Kontakt" },
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

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/70 bg-cream-50/85 backdrop-blur-md">
      <div className="container-kl flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-brand-violet"
                    : "text-ink-700 hover:text-ink-900 hover:bg-cream-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-cream-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 pt-3">
              <Button href="/coaching" size="sm" className="w-full" >
                Coaching ansehen
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
