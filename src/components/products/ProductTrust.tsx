import {
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const items = [
  {
    icon: FaTruck,
    title: "Free Delivery",
    text: "Countrywide on eligible orders",
  },
  {
    icon: FaUndo,
    title: "Easy Returns",
    text: "30-day return policy",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Checkout",
    text: "Protected payment process",
  },
  {
    icon: FaCheckCircle,
    title: "Authentic Products",
    text: "100% genuine footwear",
  },
];

export default function ProductTrust() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-amber-brand hover:shadow-lg"
          >
            <div className="rounded-xl bg-amber-brand/10 p-3 text-amber-brand">
              <Icon size={20} />
            </div>

            <div>
              <h4 className="font-semibold text-navy">
                {item.title}
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}