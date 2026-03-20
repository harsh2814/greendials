export default function WhySection() {
  const items = [
    {
      title: "Knowledge",
      text: "We curate detailed insights into rare and limited‑edition watches to help you understand their heritage and value.",
    },
    {
      title: "Culture",
      text: "Explore celebrity collections and stories that shape the world of horology and collector culture.",
    },
    {
      title: "Utility",
      text: "Soon you’ll be able to track, wishlist and trade watches with tools built for modern collectors.",
    },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
          Why GreenDials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="bg-greenSurface p-6 rounded-lg shadow flex flex-col"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold mb-4">
                <span className="text-gold font-semibold text-lg">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gold mb-2">
                {item.title}
              </h3>
              <p className="text-ivoryMuted text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}