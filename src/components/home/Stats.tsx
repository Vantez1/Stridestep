import {
  FaUsers,
  FaShoppingBag,
  FaStore,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: FaShoppingBag,
    number: "15K+",
    label: "Pairs Sold",
  },
  {
    icon: FaUsers,
    number: "12K+",
    label: "Happy Customers",
  },
  {
    icon: FaStore,
    number: "25+",
    label: "Partner Brands",
  },
  {
    icon: FaAward,
    number: "4.9/5",
    label: "Average Rating",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy via-royal to-navy py-24 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-brand/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-300">
            STRIDESTEP IN NUMBERS
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text font-display text-5xl font-bold text-transparent">
            Trusted Across Kenya
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            Thousands of customers trust StrideStep for authentic footwear,
            fast delivery and exceptional service.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
  key={item.label}
  className="group animate-fade-up rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-amber-brand/40 hover:bg-white/20 hover:shadow-[0_25px_50px_rgba(245,158,11,0.25)]"
  style={{
    animationDelay: `${index * 120}ms`,
  }}
>
  <div className="mb-6 flex justify-center text-5xl text-amber-brand transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
    <Icon />
  </div>

  <h3 className="mb-3 text-5xl font-black tracking-tight">
    {item.number}
  </h3>

  <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-amber-brand" />

  <p className="text-lg text-slate-200">
    {item.label}
  </p>
</div>
              
            );
          })}

        </div>

      </div>
    </section>
  );
}