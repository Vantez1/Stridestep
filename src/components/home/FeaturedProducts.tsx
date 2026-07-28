import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="mb-16 text-center">
  <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
    ⭐ Premium Collection
  </span>

  <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
    Featured Products
  </h2>

  <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
    Discover premium footwear crafted for comfort, durability and style.
    Every pair is carefully selected to give you the perfect balance of
    performance and fashion.
  </p>
</div>

        {/* Products */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* View All Button */}

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-700"
          >
            View All Products →
          </Link>
        </div>

      </div>
    </section>
  );
}