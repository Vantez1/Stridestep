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
    <section className="bg-gradient-to-r from-navy via-royal to-navy py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="animate-fade-up rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/20"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div className="mb-6 flex justify-center text-5xl text-amber-brand">
                <Icon />
              </div>

              <h3 className="mb-2 text-5xl font-bold">
                {item.number}
              </h3>

              <p className="text-lg text-slate-200">
                {item.label}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}