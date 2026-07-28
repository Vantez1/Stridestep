import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
 {
  title: "Running",
  image: "/images/nike-airmax.jpg",
  description: "Performance shoes built for speed and endurance.",
  products: "48 Products",
  badge: "BEST SELLER",
},
 {
  title: "Casual",
  image: "/images/newbalance530.jpg",
  description: "Everyday comfort with timeless style.",
  products: "36 Products",
  badge: "TRENDING",
},
  {
  title: "Lifestyle",
  image: "/images/puma-rsx.jpg",
  description: "Modern sneakers that stand out everywhere.",
  products: "29 Products",
  badge: "NEW",
},
  {
  title: "Training",
  image: "/images/adidas-ultraboost.jpg",
  description: "Designed for the gym and active lifestyles.",
  products: "21 Products",
  badge: "TOP RATED",
},
];

export default function ShopByCategory() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            SHOP BY CATEGORY
          </p>

          <h2 className="mt-3 font-display text-5xl font-bold text-navy">
            Find Your Perfect Pair
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Whether you're training, running, or looking for everyday comfort,
            we've got something for every step.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {categories.map((category, index) => (
            <Link
  key={category.title}
  to="/shop"
  className="group animate-fade-up overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
  style={{
    animationDelay: `${index * 120}ms`,
  }}
>
              <div className="relative h-[430px] overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full bg-amber-brand px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                  {category.badge}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                  <h3 className="text-3xl font-extrabold text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/90">
                    {category.description}
                  </p>

                  <p className="mt-4 font-semibold text-amber-300">
                    {category.products}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition-all duration-300 group-hover:bg-amber-brand group-hover:text-white">
                    Explore Collection

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}