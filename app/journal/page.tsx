export const metadata = {
  title: "Journal | GreenDials",
  description: "Read articles about rare watches, collector culture and market insights.",
};

export default function JournalPage() {
  const posts = [
    {
      title: "What Makes a Watch Rare?",
      excerpt:
        "Discover the factors that contribute to a watch’s rarity, from production numbers to historical significance.",
    },
    {
      title: "Top Celebrity Watch Collections",
      excerpt:
        "We take a closer look at famous wristwear and what these collections reveal about the owners.",
    },
    {
      title: "Understanding Limited Editions",
      excerpt:
        "A primer on limited edition references and why they captivate collectors around the globe.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
        Journal
      </h1>
      <p className="text-ivoryMuted mb-8 max-w-2xl">
        Dive into our editorial pieces exploring the intersection of
        craftsmanship, culture and collecting.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.title} className="bg-greenSurface p-6 rounded-lg shadow">
            <h2 className="text-xl font-serif font-bold text-gold mb-2">
              {post.title}
            </h2>
            <p className="text-ivoryMuted text-sm">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}