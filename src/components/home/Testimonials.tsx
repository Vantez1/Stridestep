import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Brian Mwangi",
    location: "Nairobi",
    avatar: "BM",
    review:
      "StrideStep delivered my shoes the next day. The quality exceeded my expectations and the customer service was excellent.",
    verified: true,
  },
  {
    name: "Grace Wanjiku",
    location: "Mombasa",
    avatar: "GW",
    review:
      "Very comfortable sneakers and the ordering process was simple. I'll definitely shop here again.",
    verified: true,
  },
  {
    name: "Kevin Otieno",
    location: "Kisumu",
    avatar: "KO",
    review:
      "Authentic products, fair prices and fast delivery. Highly recommend StrideStep.",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section
  className="relative overflow-hidden py-28"
  style={{
    background:
      "linear-gradient(to bottom, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
  }}
>

{/* Background Decoration */}
<div className="absolute inset-0 overflow-hidden">

  <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-amber-brand/10 blur-[130px]" />

  <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

</div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            CUSTOMER REVIEWS
          </p>
<h2 className="mt-4 font-display text-5xl font-extrabold leading-tight text-navy lg:text-6xl">
  Loved by Thousands of
  <span className="block text-amber-brand">
    Happy Customers
  </span>
</h2>
<div className="mt-10 flex flex-wrap items-center justify-center gap-6">

  <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">
    <p className="text-3xl font-black text-amber-500">
      ★ 4.9
    </p>
    <p className="text-sm text-slate-500">
      Average Rating
    </p>
  </div>

  <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">
    <p className="text-3xl font-black text-navy">
      10,000+
    </p>
    <p className="text-sm text-slate-500">
      Happy Customers
    </p>
  </div>

  <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">
    <p className="text-3xl font-black text-green-600">
      98%
    </p>
    <p className="text-sm text-slate-500">
      Would Recommend
    </p>
  </div>

</div>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/60
bg-white/90
p-8
shadow-lg
backdrop-blur-md
transition-all
duration-500
hover:-translate-y-3
hover:border-amber-brand/40
hover:shadow-[0_30px_70px_rgba(15,23,42,0.18)]
"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="mb-6 text-4xl text-amber-brand/25">
                   <FaQuoteLeft />
              </div>
              <div className="mb-5 flex gap-1 text-amber-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="mb-8 text-lg leading-8 italic text-slate-600">
                "{item.review}"
              </p>
<div className="mt-8 flex items-center gap-4">

  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-royal to-navy text-lg font-bold text-white">
    {item.avatar}
  </div>

  <div>
{/* Premium Hover Glow */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    bg-gradient-to-br
    from-amber-brand/10
    via-transparent
    to-transparent
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
  "
/>

    <div className="flex items-center gap-2">

      <h3 className="text-lg font-bold">
        {item.name}
      </h3>

      {item.verified && (
        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
          ✓ Verified Purchase
        </span>
      )}

    </div>

    <p className="text-sm text-slate-500">
      {item.location}
    </p>

  </div>

</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}