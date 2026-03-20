import Link from "next/link";

export default function VisionSection() {
  return (
    <section className="bg-greenSurface py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">
          Our Vision
        </h2>
        <p className="max-w-2xl mx-auto text-ivoryMuted text-lg mb-8">
          GreenDials is more than a marketplace. We’re building a platform where
          you can learn about rare watches, follow collector culture and
          eventually track, wishlist and trade the pieces you love. Join us on
          this journey.
        </p>
        <Link
          href="/app-vision"
          className="inline-block bg-gold text-greenDark px-8 py-3 rounded-md font-medium hover:bg-goldLight transition-colors"
        >
          Discover the Future
        </Link>
      </div>
    </section>
  );
}