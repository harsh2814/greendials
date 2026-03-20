import Image from "next/image";
import Link from "next/link";

/**
 * A list of real-world watches to feature on the homepage.  We replaced the
 * placeholder names and artwork with iconic references and descriptions that
 * match the royalty‑free images placed in public/images/real.  These objects
 * drive the cards in the Featured Rare Watches section.
 */
const watches = [
  {
    id: 1,
    title: "Rolex Submariner Date",
    description:
      "The iconic dive watch with a black dial and unidirectional bezel, known for its timeless design and water resistance.",
    img: "/images/real/rolex_submariner.jpg",
  },
  {
    id: 2,
    title: "Omega Seamaster Diver 300M",
    description:
      "A classic diver’s watch featuring a blue dial, helium escape valve and a reputation for precision under pressure.",
    img: "/images/real/omega_seamaster.jpg",
  },
  {
    id: 3,
    title: "Patek Philippe Golden Ellipse",
    description:
      "An elegant dress watch renowned for its elliptical shape and luxurious gold case, blending art and technology.",
    img: "/images/real/patek_ellipse.jpg",
  },
];

export default function FeaturedWatches() {
  return (
    <section className="bg-greenSurface py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gold">
          Featured Rare Watches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="bg-greenDark rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative h-56">
                <Image
                  src={watch.img}
                  alt={watch.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-semibold mb-2 text-gold">
                  {watch.title}
                </h3>
                <p className="text-sm text-ivoryMuted flex-1">
                  {watch.description}
                </p>
                <Link
                  href="/rare-watches"
                  className="mt-4 inline-block text-gold hover:text-goldLight font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}