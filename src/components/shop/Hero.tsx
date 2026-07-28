import { FadeIn, SectionTag } from "../ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-royal to-navy py-28 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-brand/15 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="text-center">

            <SectionTag>
              Premium Collection
            </SectionTag>

            <h1 className="mt-6 font-display text-5xl font-black leading-tight md:text-7xl">
              Find Your
              <span className="block bg-gradient-to-r from-amber-brand to-orange-400 bg-clip-text text-transparent">
                Perfect Pair
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-200">
              Browse authentic footwear from Nike, Adidas, Puma and
              New Balance. Designed for comfort, performance and style.
            </p>

          </div>

          {/* Statistics */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-xl">
              <h2 className="text-5xl font-black">500+</h2>
              <p className="mt-3 text-slate-300">
                Premium Shoes
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-xl">
              <h2 className="text-5xl font-black">25+</h2>
              <p className="mt-3 text-slate-300">
                Trusted Brands
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-xl">
              <h2 className="text-5xl font-black">15K+</h2>
              <p className="mt-3 text-slate-300">
                Happy Customers
              </p>
            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}