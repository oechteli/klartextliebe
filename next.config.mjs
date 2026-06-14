/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Statischer Export für Cloudflare Pages
  output: "export",
  images: {
    // Bei statischem Export muss die Next.js-Bildoptimierung deaktiviert sein
    unoptimized: true,
    // YouTube-Thumbnails & spätere Supabase-Storage-Domains hier erlauben
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
