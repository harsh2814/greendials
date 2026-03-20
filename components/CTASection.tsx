import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
          Join the Collector Circle
        </h2>
        <p className="text-ivoryMuted mb-6">
          Be the first to know when our app launches and new collector stories
          drop. Connect with us today and stay updated on all things rare
          watches.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold text-greenDark px-8 py-3 rounded-md font-medium hover:bg-goldLight transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}