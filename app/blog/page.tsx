import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Ratgeber",
  alternates: { canonical: "/blog" },
  description:
    "Der Klartext-Liebe-Ratgeber: ehrliche Artikel zu Dating, Kennenlernen, Selbstwert und Beziehungskompetenz – ohne Tricks, ohne Heilsversprechen.",
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.klartext-liebe.de";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  url: `${SITE_URL}/blog`,
  name: "Klartext Liebe Ratgeber",
  description:
    "Ehrliche Artikel zu Dating, Kennenlernen, Selbstwert und Beziehungskompetenz.",
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#organization` },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <PageHero
        eyebrow="Ratgeber"
        title="Klartext zum Nachlesen"
        subtitle="Ehrliche Artikel zu Dating, Kennenlernen und Selbstwert – fundiert, konstruktiv und ohne Flirt-Tricks. Für alle, die bewusster suchen wollen."
      />

      <section className="section">
        <div className="container-kl">
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block focus-visible:outline-none"
              >
                <Card interactive className="h-full">
                  <div className="flex items-center gap-3">
                    <Badge tone="brand">{post.category}</Badge>
                    <span className="text-xs text-ink-400">
                      {post.readingMinutes} Min. Lesezeit
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-ink-900 transition-colors group-hover:text-brand-violet">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {post.description}
                  </p>
                  <p className="mt-4 text-xs text-ink-400">
                    {formatDate(post.date)}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-brand-violet">
                    Artikel lesen →
                  </p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-brand-violet/20 bg-brand-violet/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink-900">
              Lieber persönlich als nachlesen?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-600">
              Artikel geben Orientierung – ersetzen aber keinen ehrlichen Blick
              auf deine konkrete Situation. Im kostenlosen Erstgespräch (ca.
              20 Minuten) klären wir unverbindlich, wo du stehst und ob{" "}
              <Link
                href="/coaching"
                className="font-medium text-brand-violet underline underline-offset-2"
              >
                Coaching
              </Link>{" "}
              für dich sinnvoll ist.
            </p>
            <p className="mt-4">
              <Link
                href="/kontakt"
                className="text-sm font-semibold text-brand-violet"
              >
                Kostenloses Erstgespräch anfragen →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
