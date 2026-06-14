import { Hero } from "@/components/sections/Hero";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { CommunityPreview } from "@/components/sections/CommunityPreview";
import { AnalysisPreview } from "@/components/sections/AnalysisPreview";
import { MatchingPreview } from "@/components/sections/MatchingPreview";
import { EventPreview } from "@/components/sections/EventPreview";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* A) Hero */}
      <Hero />
      {/* B) Was ist Klartext Liebe? */}
      <WhatIsSection />
      {/* C) Problemsektion */}
      <ProblemSection />
      {/* D) Lösungssektion */}
      <SolutionSection />
      {/* E) Coachingangebote Preview (3 Karten) */}
      <OfferSection preview />
      {/* F) Community Preview */}
      <CommunityPreview />
      {/* G) KI-Persönlichkeitsanalyse Preview */}
      <AnalysisPreview />
      {/* H) Kuratiertes Matching Preview */}
      <MatchingPreview />
      {/* I) Live-Treffen Preview */}
      <EventPreview preview />
      {/* J) CTA Abschluss */}
      <CtaSection />
    </>
  );
}
