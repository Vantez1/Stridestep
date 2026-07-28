import {
  FaTruck,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
  FaArrowRight,
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
    <section
  className="relative overflow-hidden py-28"
  style={{
    background:
      "linear-gradient(to bottom, #ffffff 0%, #f8fafc 50%, #ffffff 100%)",
  }}
>

{/* Background Decoration */}
<div className="absolute inset-0 overflow-hidden">

  <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-brand/10 blur-[120px]" />

  <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

</div>

      <div className="relative mx-auto max-w-7xl px-6">

    
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 font-display text-5xl font-extrabold leading-tight text-navy lg:text-6xl">
  Why Thousands of Customers
  <span className="block text-amber-brand">
    Choose StrideStep
  </span>
</h2>

<p className="mt-6 text-lg leading-8 text-slate-600">
  Every order is backed by genuine products, fast nationwide delivery,
  secure payments, and dedicated customer support.
</p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
  group
  animate-fade-up
  relative
  overflow-hidden
  rounded-3xl
  border
  border-white/60
  bg-white/80
  p-10
  text-center
  shadow-lg
  backdrop-blur-md
  transition-all
  duration-500
  hover:-translate-y-3
  hover:border-amber-brand/40
  hover:shadow-[0_30px_70px_rgba(15,23,42,0.15)]
"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div
  className="
    relative
    mx-auto
    mb-8
    flex
    h-20
    w-20
    items-center
    justify-center
    rounded-full
    bg-gradient-to-br
    from-royal
    to-navy
    text-3xl
    text-white
    shadow-xl
    transition-all
    duration-500
    group-hover:scale-110
    group-hover:rotate-6
  "
>
                  <>
  <div className="absolute h-20 w-20 rounded-full bg-white/10 blur-xl" />
  <Icon className="relative z-10" />
</>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-navy">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
<div
  className="
    mt-6
    flex
    justify-center
    text-royal
    opacity-0
    transition-all
    duration-300
    group-hover:translate-x-2
    group-hover:opacity-100
  "
>
  <FaArrowRight />
</div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}