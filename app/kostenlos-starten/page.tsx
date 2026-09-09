import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FreeStartSection } from "@/components/sections/FreeStartSection";
import { CoursesSection } from "@/components/sections/CoursesSection";

export const metadata: Metadata = {
  title: "Kostenlos starten – Selbsttest, Erstgespräch, YouTube",
  alternates: { canonical: "/kostenlos-starten" },
  description:
    "Drei kostenlose Wege bei Klartext Liebe: Selbsttest mit KI-Coach (3 Minuten), Erstgespräch mit Monika (20 Minuten) und Videos auf YouTube. Ohne Newsletter, ohne Login.",
};

/**
 * Einstiegsseite seit dem Relaunch 07.09.2026. Entscheidung der Inhaberin:
 * kein Newsletter, keine E-Mail-Sammlung. Darum keine Geschenk-gegen-Adresse-
 * Mechanik, sondern drei Wege, die sofort funktionieren.
 */
export default function KostenlosStartenPage() {
  return (
    <>
      <PageHero
        eyebrow="Kostenlos starten"
        title="Erst schauen, dann entscheiden"
        subtitle="Du musst nichts kaufen und nirgends deine E-Mail-Adresse hinterlassen, um herauszufinden, ob Klartext Liebe zu dir passt."
      />
      <FreeStartSection compact />
      <section className="pb-4">
        <div className="container-kl">
          <div className="mx-auto max-w-2xl rounded-2xl border border-cream-200 bg-white p-6 text-center text-sm text-ink-600">
            <strong className="text-ink-800">Mein Tipp:</strong> Mach den Selbsttest,
            dann das Erstgespräch. In 25 Minuten weißt du mehr über dich als nach
            einem Jahr Swipen.
          </div>
        </div>
      </section>
      <CoursesSection />
    </>
  );
}
