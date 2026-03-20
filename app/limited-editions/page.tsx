export const metadata = {
  title: "Limited Editions | GreenDials",
  description: "Explore limited edition watches and understand their production numbers.",
};

export default function LimitedEditionsPage() {
  const categories = [
    {
      label: "Ultra Rare",
      description:
        "Limited to 50 or fewer pieces, ultra rare watches are often made for special anniversaries or unique collaborations.",
    },
    {
      label: "Limited",
      description:
        "Between 51 and 500 units, these watches remain exclusive while still being attainable for dedicated collectors.",
    },
    {
      label: "Boutique Only",
      description:
        "Up to 1000 pieces, typically available through select boutiques or specific regions around the world.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
        Limited Editions
      </h1>
      <p className="text-ivoryMuted mb-8 max-w-2xl">
        Understand what makes a watch limited and how production numbers affect
        collectability. Our limited edition categories help you navigate the
        nuances of rarity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.label} className="bg-greenSurface p-6 rounded-lg shadow">
            <h2 className="text-xl font-serif font-bold text-gold mb-2">
              {cat.label}
            </h2>
            <p className="text-ivoryMuted text-sm">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}