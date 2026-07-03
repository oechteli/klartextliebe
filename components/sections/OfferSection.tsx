import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { offers } from "@/lib/mock-data";
import { stripeLinks } from "@/lib/stripe-links";

interface OfferSectionProps {
  /** Nur die ersten 3 Karten zeigen (Startseiten-Preview) */
  preview?: boolean;
  withHeading?: boolean;
}

export function OfferSection({
  preview = false,
  withHeading = true,
}: OfferSectionProps) {
  const items = preview ? offers.slice(0, 3) : offers;

  return (
    <section className="section">
      <div className="container-kl">
        {withHeading && (
          <SectionHeading
            eyebrow="Coaching"
            title={
              preview ? "Begleitung, die wirklich weiterbringt" : "Coachingangebote"
            }
            subtitle="Persönlich, klar und ohne manipulative Datingtricks – für reflektierte Singles mit Anspruch."
          />
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((offer) => {
            const url = stripeLinks[offer.stripeKey];

            return (
              <Card
                key={offer.id}
                highlight={offer.highlight}
                interactive
                className="flex flex-col"
              >
                {offer.highlight && (
                  <Badge tone="brand" className="absolute -top-3 left-6">
                    Beliebt
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-ink-900">
                  {offer.title}
                </h3>
                <p className="mt-2 text-2xl font-bold text-ink-900">
                  {offer.price}
                </p>
                <p className="mt-3 text-sm text-ink-500">{offer.description}</p>

                {offer.features && (
                  <ul className="mt-4 space-y-2">
                    {offer.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-ink-700"
                      >
                        <span className="mt-0.5 text-brand-turquoise">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-6">
                  <Button
                    href={url}
                    variant={offer.stripeKey === "vipMatchklarheit" ? "outline" : undefined}
                    className="w-full"
                  >
                    {offer.cta}
                  </Button>
                  <p className="mt-2 text-center text-xs text-ink-400">
                    Anfrage per Kontaktformular · Antwort in 24 h
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {preview && (
          <div className="mt-10 text-center">
            <Button href="/coaching" variant="outline">
              Alle Coachingangebote ansehen
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
