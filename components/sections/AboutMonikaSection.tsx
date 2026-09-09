import Image from "next/image";
import { Button } from "@/components/ui/Button";

/**
 * Über Monika auf der Startseite (Relaunch 07.09.2026).
 * Die Kupplerin-Geschichte in Monikas Worten aus dem Gespräch vom 07.09.2026,
 * nichts hinzuerfunden: Menschen zusammenbringen seit Jahrzehnten, Beratung im
 * Bekanntenkreis, Psychologie als Lebensthema, Sprachschule 2017 bis 2025.
 */
export function AboutMonikaSection() {
  return (
    <section className="section bg-cream-50">
      <div className="container-kl">
        <div className="grid items-center gap-10 lg:grid-cols-[300px,1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[300px] lg:mx-0">
            <div className="mockup aspect-[3/4]">
              <Image
                src="/brand/monika.png"
                alt="Monika Oechtering, Gründerin von Klartext Liebe"
                width={640}
                height={853}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Über mich</p>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">
              Man nannte mich die <span className="akzentwort">Kupplerin</span>.
            </h2>
            <div className="mt-5 space-y-4 text-ink-600">
              <p>
                Ich bringe Menschen zusammen, seit ich denken kann. Im Freundeskreis
                habe ich mit viel Spaß Paare zusammengebracht. Singles aus
                meinem Umfeld kommen zu mir, wenn es nicht klappt, und ich sage
                ihnen ehrlich, was ich sehe: an der Kleidung, am Auftreten, an der
                Art zu reden, an der Auswahl.
              </p>
              <p>
                Psychologie war immer mein Thema. Ich will verstehen, warum
                Menschen so handeln, wie sie handeln. Acht Jahre lang habe ich eine
                Sprachschule geführt und dabei täglich mit Menschen gearbeitet,
                die etwas Neues lernen wollten. Jetzt mache ich das, was ich mein
                Leben lang nebenbei getan habe, zu meiner Arbeit.
              </p>
              <p className="font-medium text-ink-800">
                Mein Versprechen: Orientierung statt Garantie. Ein klarer Blick von
                außen, wohlwollend, aber ohne Schönfärberei.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/ueber-mich" variant="secondary">
                Meine Geschichte
              </Button>
              <Button href="/kostenlos-starten">Kostenlos starten</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
