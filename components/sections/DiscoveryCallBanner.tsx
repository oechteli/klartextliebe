import { Button } from "@/components/ui/Button";

export function DiscoveryCallBanner() {
  return (
    <div className="border-b border-brand-teal/20 bg-gradient-to-r from-brand-teal/8 via-brand-blue/8 to-brand-violet/8">
      <div className="container-kl py-5">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-violet/10 text-lg">
              💬
            </span>
            <div>
              <p className="font-semibold text-ink-900">
                Noch unsicher, welches Paket passt?
              </p>
              <p className="text-sm text-ink-500">
                Kostenloses 20-Minuten-Erstgespräch – unverbindlich, kein
                Verkaufsgespräch.
              </p>
            </div>
          </div>
          <Button
            href="/kontakt?thema=Kostenloses+Erstgespräch"
            variant="outline"
            size="sm"
            className="shrink-0"
          >
            Jetzt anfragen →
          </Button>
        </div>
      </div>
    </div>
  );
}
