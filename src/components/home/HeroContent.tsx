import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="animate-fade-up">

      <h1 className="max-w-xl font-display text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">

  Premium

  <span className="block bg-gradient-to-r from-amber-brand to-orange-400 bg-clip-text text-transparent">
    Footwear
  </span>

  For Every Step

</h1>

      <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
         Discover premium footwear designed for comfort,
         performance and everyday confidence.
         From casual wear to athletic performance,
         StrideStep helps you move in style.
      </p>

      <div className="mt-12 flex flex-wrap gap-5">

        <Link
          to="/shop"
          className="group inline-flex items-center rounded-xl bg-amber-brand px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-orange-500"
        >
          Shop Now

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