import { Link } from "react-router-dom";

export default function CheckoutHero() {
  return (
    <section
      className="pt-28 pb-16"
      style={{
        background:
          "linear-gradient(135deg, #0a2d46, #1565C0)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}

        <div className="mb-5 flex items-center gap-2 text-sm text-white/60">

          <Link
            to="/"
            className="text-white/60 no-underline transition hover:text-white"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/cart"
            className="text-white/60 no-underline transition hover:text-white"
          >
            Cart
          </Link>

          <span>/</span>

          <span className="font-semibold text-white">
            Checkout
          </span>

        </div>

        {/* Heading */}

        <div className="max-w-2xl">

          <div className="mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white">
            🔒 Secure Checkout
          </div>

          <h1 className="font-display text-5xl font-black text-white">
            Complete Your Order
          </h1>

          <p className="mt-5 text-lg text-white/70">
            You're one step away from receiving your new pair of premium shoes.
          </p>

        </div>

      </div>
    </section>
  );
}