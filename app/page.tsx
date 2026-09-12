import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { RightForYouSection } from "@/components/sections/RightForYouSection";
import { AboutMonikaSection } from "@/components/sections/AboutMonikaSection";
import { FreeStartSection } from "@/components/sections/FreeStartSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { YouTubeSection } from "@/components/sections/YouTubeSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

/*
 * Startseite seit dem Relaunch 07.09.2026 (Vorbild chrissurel.com).
 *
 * Archiv der Reihenfolge bis 07.09.2026 (Komponenten bleiben im Repo, nur
 * hier nicht mehr eingebunden):
 *   Hero · SocialProofBar · WhatIsSection · ProblemSection · SolutionSection ·
 *   OfferSection preview · HowIWorkSection · CommunityPreview ·
 *   AnalysisPreview · MatchingPreview · EventPreview preview · BlogPreview ·
 *   CtaSection
 * Entscheidung: Community-, Matching- und Events-Vorschauen („in Vorbereitung")
 * verschwinden von der Startseite. Die Seiten /community, /events, /marktplatz
 * bleiben erreichbar.
 */
export default function HomePage() {
  return (
    <>
      {/* 1 Hero: Gesicht, Claim, ein Hauptbutton */}
      <Hero />
      {/* 2 Vertrauensleiste (keine Zahlen, nur Haltung) */}
      <SocialProofBar />
      {/* 3 Du bist hier richtig, wenn … */}
      <RightForYouSection />
      {/* 4 Über Monika: die Kupplerin-Geschichte */}
      <AboutMonikaSection />
      {/* 5 Kostenlos starten (ohne Newsletter) */}
      <FreeStartSection />
      {/* 6 Die drei Kurse */}
      <CoursesSection />
      {/* 7 1:1 mit Monika (bestehende Formate) */}
      <OfferSection preview />
      {/* 8 Partnervermittlung: am 12.09.2026 entfernt, solange das Gewerbe
          nach § 38 GewO nicht angemeldet ist. Bauteil bleibt im Projekt. */}
      {/* 9 So arbeite ich (Haltung, Grenzen, Krisenhinweis) */}
      <HowIWorkSection />
      {/* 10 YouTube */}
      <YouTubeSection />
      {/* 11 Ratgeber */}
      <BlogPreview />
      {/* 12 Kurz-FAQ */}
      <FaqSection />
      {/* 13 Abschluss: Erstgespräch */}
      <CtaSection />
    </>
  );
}
