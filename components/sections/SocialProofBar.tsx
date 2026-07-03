const items = [
  { icon: "💜", label: "1:1 persönliche Begleitung" },
  { icon: "✓", label: "Ohne Datingtricks & Manipulation" },
  { icon: "🔒", label: "Vertraulich & diskret" },
  { icon: "✨", label: "Ganzheitlicher Ansatz" },
];

export function SocialProofBar() {
  return (
    <div className="border-y border-cream-200 bg-white/80 backdrop-blur-sm">
      <div className="container-kl py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm font-medium text-ink-600"
            >
              <span className="text-brand-violet">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
