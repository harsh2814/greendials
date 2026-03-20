export const metadata = {
  title: "Celebrity Collections | GreenDials",
  description: "Explore famous watch collections and the stories behind them.",
};

export default function CelebrityCollectionsPage() {
  const celebs = [
    {
      name: "Cristiano Ronaldo",
      description:
        "Ronaldo’s love of luxury extends to his wrist, where you’ll often see rare Rolex and Patek Philippe models.",
    },
    {
      name: "Jay‑Z",
      description:
        "Rapper and mogul Jay‑Z is known for his taste in Audemars Piguet and Richard Mille, often choosing highly limited references.",
    },
    {
      name: "John Mayer",
      description:
        "Musician and noted watch enthusiast John Mayer has a collection spanning vintage Rolex Daytonas to modern Patek complications.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
        Celebrity Collections
      </h1>
      <p className="text-ivoryMuted mb-8 max-w-2xl">
        Learn what watches inspire the world’s biggest names. These stories shed
        light on why certain pieces become icons and how celebrity tastes shape
        trends.
      </p>
      <div className="space-y-8">
        {celebs.map((celeb) => (
          <div key={celeb.name} className="bg-greenSurface p-6 rounded-lg shadow">
            <h2 className="text-2xl font-serif font-bold text-gold mb-2">
              {celeb.name}
            </h2>
            <p className="text-ivoryMuted text-sm">{celeb.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}