export default function CelebritySpotlight() {
  const stars = [
    {
      name: "Cristiano Ronaldo",
      highlight: "Famous for sporting a range of Rolex and Patek Philippe models.",
    },
    {
      name: "Jay‑Z",
      highlight: "Known for exclusive Audemars Piguet and Richard Mille pieces.",
    },
    {
      name: "John Mayer",
      highlight: "Respected collector of vintage and modern Rolex and Patek references.",
    },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
          Celebrity Watch Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stars.map((star) => (
            <div
              key={star.name}
              className="bg-greenSurface p-6 rounded-lg shadow flex flex-col"
            >
              <h3 className="text-xl font-serif font-bold text-gold mb-2">
                {star.name}
              </h3>
              <p className="text-ivoryMuted text-sm flex-1">
                {star.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}