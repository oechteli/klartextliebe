import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CommunityPreview } from "@/components/sections/CommunityPreview";
import { AnalysisPreview } from "@/components/sections/AnalysisPreview";
import { MatchingPreview } from "@/components/sections/MatchingPreview";
import { EventPreview } from "@/components/sections/EventPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* A) Hero */}
      <Hero />
      {/* B) Social Proof Strip */}
      <SocialProofBar />
      {/* C) Was ist Klartext Liebe? */}
      <WhatIsSection />
      {/* D) Problemsektion */}
      <ProblemSection />
      {/* E) Lösungssektion */}
      <SolutionSection />
      {/* F) Coachingangebote Preview (3 Karten) */}
      <OfferSection preview />
      {/* G) Testimonials */}
      <TestimonialsSection />
      {/* H) Community Preview */}
      <CommunityPreview />
      {/* I) KI-Persönlichkeitsanalyse Preview */}
      <AnalysisPreview />
      {/* J) Kuratiertes Matching Preview */}
      <MatchingPreview />
      {/* K) Live-Treffen Preview */}
      <EventPreview preview />
      {/* L) Ratgeber-Vorschau */}
      <BlogPreview />
      {/* M) CTA Abschluss */}
      <CtaSection />
    </>
  );
}
