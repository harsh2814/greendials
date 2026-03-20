export const metadata = {
  title: "Vision | GreenDials",
  description: "See what’s next for GreenDials — from collector tools to marketplace features.",
};

export default function AppVisionPage() {
  const features = [
    {
      title: "Wishlist & Tracking",
      description:
        "Save watches you love, track their availability and receive updates on market activity.",
    },
    {
      title: "Rarity Alerts",
      description:
        "Get notified when ultra rare references surface for sale or at auction.",
    },
    {
      title: "Collector Marketplace",
      description:
        "Buy and sell timepieces with confidence through a vetted community of enthusiasts.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
        The Future of GreenDials
      </h1>
      <p className="text-ivoryMuted mb-8 max-w-2xl">
        Our platform is evolving. Here’s a preview of features under
        development that will empower modern collectors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat) => (
          <div key={feat.title} className="bg-greenSurface p-6 rounded-lg shadow">
            <h2 className="text-xl font-serif font-bold text-gold mb-2">
              {feat.title}
            </h2>
            <p className="text-ivoryMuted text-sm">{feat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}