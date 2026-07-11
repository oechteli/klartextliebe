import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.klartext-liebe.de";

// Alle öffentlichen Routen mit grober Priorisierung.
const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/starte-jetzt", priority: 0.9, changeFrequency: "monthly" },
  { path: "/coaching", priority: 0.9, changeFrequency: "monthly" },
  { path: "/persoenliches-coaching", priority: 0.9, changeFrequency: "monthly" },
  { path: "/so-funktionierts", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/analyse", priority: 0.8, changeFrequency: "monthly" },
  { path: "/community", priority: 0.8, changeFrequency: "weekly" },
  { path: "/kluge-koepfe", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ueber-mich", priority: 0.7, changeFrequency: "monthly" },
  { path: "/events", priority: 0.7, changeFrequency: "weekly" },
  { path: "/marktplatz", priority: 0.6, changeFrequency: "monthly" },
  { path: "/youtube", priority: 0.6, changeFrequency: "weekly" },
  { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" },
  { path: "/agb", priority: 0.2, changeFrequency: "yearly" },
  // Ratgeber-Artikel (aus lib/blog-posts.tsx, bleibt automatisch synchron)
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
