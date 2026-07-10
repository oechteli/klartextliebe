import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/blog-posts";

/** Startseiten-Vorschau auf den Ratgeber (drei neueste Artikel). */
export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="section bg-cream-100/60">
      <div className="container-kl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Ratgeber</p>
            <h2 className="mt-2 text-3xl font-bold text-ink-900">
              Klartext zum Nachlesen
            </h2>
            <p className="mt-3 max-w-xl text-ink-500">
              Ehrliche Artikel zu Dating, Kennenlernen und Selbstwert – ohne
              Tricks, ohne Heilsversprechen.
            </p>
          </div>
          <Button href="/blog" variant="secondary" size="sm" className="shrink-0">
            Alle Artikel →
          </Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block focus-visible:outline-none"
            >
              <Card interactive className="h-full !p-6">
                <div className="flex items-center gap-3">
                  <Badge tone="brand">{post.category}</Badge>
                  <span className="text-xs text-ink-400">
                    {post.readingMinutes} Min.
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-ink-900 transition-colors group-hover:text-brand-violet">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {post.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
