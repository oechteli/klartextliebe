import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.klartext-liebe.de";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      locale: "de_DE",
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "Klartext Liebe",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "de-DE",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}/brand/header.jpg`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ratgeber",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  const weitere = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd]),
        }}
      />

      {/* Artikelkopf */}
      <section className="relative overflow-hidden border-b border-cream-200 bg-brand-soft">
        <div
          aria-hidden
          className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-brand-violet/15 blur-3xl"
        />
        <div className="container-kl py-14 sm:py-16">
          <nav aria-label="Brotkrumen" className="text-sm text-ink-400">
            <Link href="/blog" className="hover:text-brand-violet">
              Ratgeber
            </Link>{" "}
            <span aria-hidden>/</span>{" "}
            <span className="text-ink-500">{post.category}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.15] sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-ink-400">
            <Badge tone="brand">{post.category}</Badge>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} Min. Lesezeit</span>
          </div>
        </div>
      </section>

      {/* Artikelinhalt */}
      <article className="section">
        <div className="container-kl">
          <div className="prose-kl mx-auto max-w-3xl text-base">
            {post.content}
          </div>

          {/* Abschluss-CTA */}
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-brand-teal/20 bg-brand-teal/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink-900">
              Du möchtest das auf deine Situation übertragen?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Im kostenlosen Erstgespräch (ca. 20 Minuten) schauen wir
              unverbindlich, wo du gerade stehst – ehrlich und ohne
              Verkaufsdruck. Alle Angebote findest du auf der{" "}
              <Link
                href="/coaching"
                className="font-medium text-brand-violet underline underline-offset-2"
              >
                Coaching-Seite
              </Link>
              , Antworten auf häufige Fragen in den{" "}
              <Link
                href="/faq"
                className="font-medium text-brand-violet underline underline-offset-2"
              >
                FAQ
              </Link>
              .
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

          {/* Weitere Artikel */}
          <div className="mx-auto mt-14 max-w-3xl">
            <h2 className="text-xl font-bold text-ink-900">
              Weiterlesen im Ratgeber
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {weitere.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block focus-visible:outline-none"
                >
                  <Card interactive className="h-full !p-5">
                    <Badge tone="brand">{p.category}</Badge>
                    <h3 className="mt-3 text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-violet">
                      {p.title}
                    </h3>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
