import {
  FaTruck,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: FaTruck,
    title: "Free Delivery",
    description: "Fast and reliable delivery across Kenya.",
  },
  {
    icon: FaShieldAlt,
    title: "100% Authentic",
    description: "Original products from trusted brands.",
  },
  {
    icon: FaUndoAlt,
    title: "Easy Returns",
    description: "Simple exchange and return process.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Our team is always ready to help.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            WHY CHOOSE US
          </p>

          <h2 className="mt-3 font-display text-5xl font-bold text-navy">
            Shopping Made Better
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="animate-fade-up rounded-3xl border bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-royal text-2xl text-white">
                  <Icon />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}