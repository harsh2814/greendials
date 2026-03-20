import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4 text-gold">
            Discover the Rarest Side of Time
          </h1>
          <p className="text-lg md:text-xl text-ivoryMuted mb-8">
            Explore rare timepieces, limited editions and stories behind the
            watches that define culture.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/rare-watches"
              className="bg-gold text-greenDark px-6 py-3 rounded-md font-medium hover:bg-goldLight transition-colors"
            >
              Explore Watches
            </Link>
            <Link
              href="/contact"
              className="border border-gold text-gold px-6 py-3 rounded-md font-medium hover:bg-greenSurface hover:text-goldLight transition-colors"
            >
              Join the Circle
            </Link>
          </div>
        </div>
        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
          {/* Use a real watch image (Rolex Submariner) as the hero visual */}
          <Image
            src="/images/real/rolex_submariner.jpg"
            alt="Rolex Submariner Date"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}