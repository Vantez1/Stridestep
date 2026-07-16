import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Running",
    image: "/images/nike-airmax.jpg",
    description: "Performance shoes built for speed and endurance.",
  },
  {
    title: "Casual",
    image: "/images/newbalance530.jpg",
    description: "Everyday comfort with timeless style.",
  },
  {
    title: "Lifestyle",
    image: "/images/puma-rsx.jpg",
    description: "Modern sneakers that stand out everywhere.",
  },
  {
    title: "Training",
    image: "/images/adidas-ultraboost.jpg",
    description: "Designed for the gym and active lifestyles.",
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            SHOP BY CATEGORY
          </p>

          <h2 className="mt-3 font-display text-5xl font-bold text-navy">
            Find Your Perfect Pair
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Whether you're training, running or looking for everyday comfort,
            we've got something for every step.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-3"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div className="relative h-[420px] overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                  <h3 className="mb-3 text-3xl font-bold">
                    {category.title}
                  </h3>

                  <p className="mb-6 text-sm leading-6 text-slate-200">
                    {category.description}
                  </p>

                  <button className="flex items-center gap-2 rounded-full bg-amber-brand px-5 py-3 font-semibold transition hover:scale-105">
                    Explore
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}