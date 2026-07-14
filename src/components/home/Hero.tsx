import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center lg:py-36">

        <span className="mb-6 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-wider">
          New Collection 2026
        </span>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Walk Beyond Limits
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl">
          Discover premium sneakers from Nike, Adidas,
          Puma and New Balance designed for comfort,
          performance and everyday style.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            to="/products"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            Shop Now
          </Link>

          <Link
            to="/about"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            Learn More
          </Link>

        </div>

        <div className="mt-20 grid grid-cols-3 gap-10">

          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="text-gray-300">
              Premium Shoes
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">25K+</h2>
            <p className="text-gray-300">
              Happy Customers
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">4.9★</h2>
            <p className="text-gray-300">
              Customer Rating
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}