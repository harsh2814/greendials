export const metadata = {
  title: "About | GreenDials",
  description: "Learn about the mission and team behind GreenDials.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
        About GreenDials
      </h1>
      <p className="text-ivoryMuted mb-6 max-w-3xl">
        GreenDials was founded by watch collectors who believe that timepieces
        are more than accessories — they are art, engineering and history
        combined. We create a space where knowledge, culture and utility meet,
        empowering enthusiasts to discover and engage with the world of
        horology.
      </p>
      <p className="text-ivoryMuted mb-6 max-w-3xl">
        Our team consists of designers, technologists and watch lovers united
        by a passion for storytelling and craftsmanship. Together we aim to
        make rare watch knowledge accessible and to build tools that modern
        collectors need.
      </p>
      <p className="text-ivoryMuted max-w-3xl">
        This is just the beginning. In future iterations, GreenDials will
        introduce interactive features such as collection tracking, rarity
        alerts and a marketplace connecting buyers and sellers. We invite you
        to join us on this journey.
      </p>

      {/* Leadership information */}
      <div className="mt-12">
        <h2 className="text-2xl font-serif font-bold text-gold mb-4">
          Our Leadership
        </h2>
        <p className="text-ivoryMuted max-w-3xl">
          GreenDials is led by CEO<strong> Krish Gangani</strong>, whose passion for
          rare timepieces guides our vision. On the technical side,
          <strong> Harsh Parmar</strong> serves as our Technology and Support lead,
          bringing the platform to life and ensuring a world‑class
          experience for our community.
        </p>
      </div>
    </div>
  );
}