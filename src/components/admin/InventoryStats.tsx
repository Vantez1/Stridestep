type InventoryStatsProps = {
  totalProducts: number;
  inStock: number;
  lowStock: number;
  outOfStock: number;
  inventoryValue: number;
};

export default function InventoryStats({
  totalProducts,
  inStock,
  lowStock,
  outOfStock,
  inventoryValue,
}: InventoryStatsProps) {
  const stats = [
    {
      label: "Total Products",
      value: totalProducts.toLocaleString(),
      description: "Products in your catalog",
      icon: "📦",
      iconBg: "bg-blue-100",
      iconText: "text-blue-700",
      valueText: "text-slate-900",
    },
    {
      label: "In Stock",
      value: inStock.toLocaleString(),
      description: "Products with available stock",
      icon: "✓",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-700",
      valueText: "text-emerald-700",
    },
    {
      label: "Low Stock",
      value: lowStock.toLocaleString(),
      description: "Products with 5 or fewer items",
      icon: "⚠️",
      iconBg: "bg-amber-100",
      iconText: "text-amber-700",
      valueText: "text-amber-700",
    },
    {
      label: "Out of Stock",
      value: outOfStock.toLocaleString(),
      description: "Products currently unavailable",
      icon: "×",
      iconBg: "bg-red-100",
      iconText: "text-red-700",
      valueText: "text-red-700",
    },
  ];

  return (
    <section className="mb-10">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-900">
          Inventory Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monitor your current product stock levels.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold ${stat.iconBg} ${stat.iconText} transition-transform duration-200 group-hover:scale-110`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Inventory Value
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              KSh {inventoryValue.toLocaleString()}
            </p>
          </div>

          <p className="text-sm text-slate-400">
            Based on current product prices and stock
          </p>
        </div>
      </div>
    </section>
  );
}