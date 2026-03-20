import Image from "next/image";

export const metadata = {
  title: "Rare Watches | GreenDials",
  description: "Discover rare and exceptional timepieces in our curated collection.",
};

export default function RareWatchesPage() {
  /**
   * Curated list of rare watches featured on the rare watches page.  Each
   * entry corresponds to one of the royalty‑free photos included under
   * public/images/real and includes a brief description of why the watch is
   * coveted.  These descriptions help visitors understand the significance
   * of each timepiece without requiring any external knowledge.
   */
  const items = [
    {
      title: "Rolex Submariner Date",
      description:
        "This Submariner Date is a symbol of dive watch heritage. Its oystersteel case and black dial have made it a coveted model for decades.",
      img: "/images/real/rolex_submariner.jpg",
    },
    {
      title: "Omega Seamaster Diver 300M",
      description:
        "Known for its blue wave dial and helium escape valve, the Seamaster Diver 300M has become a favourite among professional divers and James Bond alike.",
      img: "/images/real/omega_seamaster.jpg",
    },
    {
      title: "Patek Philippe Golden Ellipse",
      description:
        "With an elliptical case crafted in gold, the Golden Ellipse exemplifies elegance and rarity. Its minimalist design has stood the test of time.",
      img: "/images/real/patek_ellipse.jpg",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
        Rare Watches
      </h1>
      <p className="text-ivoryMuted mb-8 max-w-2xl">
        Our rare watch selection highlights exceptional references produced in
        extremely low quantities. Each piece tells a story of craftsmanship
        and exclusivity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.title} className="bg-greenSurface rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="relative h-56">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-serif font-bold text-gold mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-ivoryMuted flex-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}