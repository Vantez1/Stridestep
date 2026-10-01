type DashboardStatsProps = {
  products: number;
  orders: number;
  revenue: number;
  lowStock: number;
};

export default function DashboardStats({
  products,
  orders,
  revenue,
  lowStock,
}: DashboardStatsProps) {
  const stats = [
    {
      label: "Products",
      value: products.toLocaleString(),
      description: "Total products",
      icon: "📦",
      iconBg: "bg-blue-100",
      iconText: "text-blue-700",
      valueText: "text-slate-900",
    },
    {
      label: "Orders",
      value: orders.toLocaleString(),
      description: "Total orders",
      icon: "🛍️",
      iconBg: "bg-indigo-100",
      iconText: "text-indigo-700",
      valueText: "text-indigo-700",
    },
    {
      label: "Revenue",
      value: `KSh ${revenue.toLocaleString()}`,
      description: "Total revenue",
      icon: "💰",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-700",
      valueText: "text-emerald-700",
    },
    {
      label: "Low Stock",
      value: lowStock.toLocaleString(),
      description: "Products needing attention",
      icon: "⚠️",
      iconBg: "bg-amber-100",
      iconText: "text-amber-700",
      valueText: "text-amber-700",
    },
  ];

  return (
    <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                {stat.label}
              </p>

              <p
                className={`mt-3 text-3xl font-bold tracking-tight ${stat.valueText}`}
              >
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {stat.description}
              </p>
            </div>

            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg} text-xl ${stat.iconText} transition-transform duration-200 group-hover:scale-110`}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}