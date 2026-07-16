import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Brian Mwangi",
    location: "Nairobi",
    review:
      "StrideStep delivered my shoes the next day. The quality exceeded my expectations and the customer service was excellent.",
  },
  {
    name: "Grace Wanjiku",
    location: "Mombasa",
    review:
      "Very comfortable sneakers and the ordering process was simple. I'll definitely shop here again.",
  },
  {
    name: "Kevin Otieno",
    location: "Kisumu",
    review:
      "Authentic products, fair prices and fast delivery. Highly recommend StrideStep.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            CUSTOMER REVIEWS
          </p>

          <h2 className="mt-3 font-display text-5xl font-bold text-navy">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="animate-fade-up rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="mb-5 flex text-amber-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="mb-8 leading-8 text-slate-600">
                "{item.review}"
              </p>

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-slate-500">
                {item.location}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}