export default function ProductFeatures() {
  const features = [
    {
      icon: "👟",
      title: "Premium Materials",
      text: "Crafted using high-quality breathable mesh and durable rubber soles.",
    },
    {
      icon: "💨",
      title: "Lightweight",
      text: "Designed for all-day comfort with minimal weight.",
    },
    {
      icon: "🦶",
      title: "Comfort Fit",
      text: "Soft cushioning provides excellent support for every step.",
    },
    {
      icon: "🛡️",
      title: "1 Year Warranty",
      text: "Manufacturer warranty against production defects.",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold">
        Why You'll Love It
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">
              {feature.icon}
            </div>

            <h3 className="mb-2 text-xl font-bold">
              {feature.title}
            </h3>

            <p className="text-slate-600">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}