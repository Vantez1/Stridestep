import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="animate-fade-up">

      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-brand/30 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-amber-300 backdrop-blur">
        <Sparkles size={16} />
        New Collection 2026
      </div>

      <h1 className="max-w-xl font-display text-5xl font-extrabold leading-tight text-white md:text-7xl">
        Step Into

        <span className="block bg-gradient-to-r from-amber-brand to-orange-400 bg-clip-text text-transparent">
          Style
        </span>

        Without Limits
      </h1>

      <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
        Premium footwear engineered for performance,
        everyday comfort and timeless style.
        Discover your perfect pair with StrideStep.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <Link
          to="/shop"
          className="group inline-flex items-center rounded-xl bg-amber-brand px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-orange-500"
        >
          Shop Collection

          <ArrowRight
            className="ml-3 transition group-hover:translate-x-1"
            size={20}
          />

        </Link>

        <Link
          to="/tracking"
          className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          Track Order
        </Link>

      </div>

    </div>
  );
}