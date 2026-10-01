import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Product = {
  category: string;
};

type CategorySalesChartProps = {
  products: Product[];
};

const COLORS = [
  "#2563EB",
  "#16A34A",
  "#F59E0B",
  "#DC2626",
  "#7C3AED",
  "#0891B2",
  "#EA580C",
  "#65A30D",
];

export default function CategorySalesChart({
  products,
}: CategorySalesChartProps) {
  const categoryMap: Record<string, number> = {};

  products.forEach((product) => {
    categoryMap[product.category] =
      (categoryMap[product.category] || 0) + 1;
  });

  const data = Object.entries(categoryMap).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Sales by Category
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            View how your product catalog is distributed across categories.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-xl">
          🥧
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        {data.length === 0 ? (
          <div className="flex h-80 flex-col items-center justify-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
              📊
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              No category data yet
            </h3>

            <p className="mt-1 max-w-sm text-sm text-slate-500">
              Category information will appear here once products are added
              to your store.
            </p>
          </div>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  outerRadius={105}
                  innerRadius={55}
                  paddingAngle={3}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {data.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                      stroke="#ffffff"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value) => [
                    `${Number(value).toLocaleString()} products`,
                    "Products",
                  ]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    boxShadow:
                      "0 10px 25px rgba(15, 23, 42, 0.08)",
                  }}
                />

                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  wrapperStyle={{
                    fontSize: "13px",
                    color: "#64748b",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </section>
  );
}