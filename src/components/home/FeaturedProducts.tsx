import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            PREMIUM COLLECTION
          </p>

          <h2 className="mt-3 font-display text-5xl font-bold text-navy">
            Featured Products
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Discover premium footwear crafted for comfort,
            performance and everyday style.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}