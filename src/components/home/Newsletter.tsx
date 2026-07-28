import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24">

      <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-brand/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[150px]" />
    </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-navy via-royal to-navy p-12 text-center text-white shadow-[0_30px_80px_rgba(15,23,42,0.45)]">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-amber-brand/10 blur-[100px]" />

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
            <Mail size={36} className="text-amber-brand" />
          </div>

          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            JOIN OUR COMMUNITY
          </p>

          <h2 className="mt-4 font-display text-5xl font-bold">
            Stay One Step Ahead
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Subscribe to receive exclusive offers, new arrivals,
            seasonal discounts and style inspiration delivered
            straight to your inbox.
          </p>

            <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border border-white/20 bg-white px-6 py-4 text-slate-900 shadow-lg outline-none transition focus:border-amber-brand focus:ring-4 focus:ring-amber-brand/20"
            />

            <button
  className="rounded-xl bg-amber-brand px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:shadow-[0_15px_40px_rgba(245,158,11,0.45)] sm:w-auto"
>
  Subscribe
</button>

          </div>

        </div>

      </div>
    </section>
  );
}