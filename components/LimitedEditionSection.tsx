export default function LimitedEditionSection() {
  const editions = [
    {
      label: "Ultra Rare",
      number: "≤50",
      description: "Pieces in existence for our most exclusive references.",
    },
    {
      label: "Limited",
      number: "51–500",
      description: "Small batches that celebrate design milestones.",
    },
    {
      label: "Boutique Only",
      number: "501–1000",
      description: "Regional releases available through select boutiques.",
    },
  ];
  return (
    <section className="bg-greenSurface py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
          Limited Edition Intelligence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editions.map((ed) => (
            <div
              key={ed.label}
              className="bg-greenDark p-6 rounded-lg shadow text-center"
            >
              <span className="block text-5xl font-serif font-bold text-gold">
                {ed.number}
              </span>
              <h3 className="mt-2 text-xl font-serif font-semibold text-gold">
                {ed.label}
              </h3>
              <p className="mt-2 text-sm text-ivoryMuted">{ed.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}