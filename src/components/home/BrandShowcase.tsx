export default function BrandShowcase() {
  const brands = [
    {
      name: "Nike",
      logo: "/images/brands/nike.png",
    },
    {
      name: "Adidas",
      logo: "/images/brands/adidas.png",
    },
    {
      name: "Puma",
      logo: "/images/brands/puma.png",
    },
    {
      name: "New Balance",
      logo: "/images/brands/newbalance.png",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            TOP BRANDS
          </p>

          <h2 className="mt-3 font-display text-5xl font-bold text-navy">
            Shop By Brand
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            We partner with the world's leading footwear brands.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="animate-fade-up flex h-44 cursor-pointer items-center justify-center rounded-3xl border bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-20 object-contain transition duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}