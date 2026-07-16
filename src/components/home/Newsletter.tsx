import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-navy via-royal to-navy p-12 text-center text-white shadow-2xl">

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
              className="flex-1 rounded-xl border-none px-6 py-4 text-slate-900 outline-none"
            />

            <button className="rounded-xl bg-amber-brand px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-amber-light">
              Subscribe
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}