import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type OrderItem = {
  name: string;
  quantity: number;
};

type Order = {
  items?: OrderItem[];
};

type Props = {
  orders: Order[];
};

export default function TopSellingProductsChart({
  orders,
}: Props) {
  const sales: Record<string, number> = {};

  orders.forEach((order) => {
    order.items?.forEach((item) => {
      sales[item.name] =
        (sales[item.name] || 0) + item.quantity;
    });
  });

  const data = Object.entries(sales)
    .map(([name, quantity]) => ({
      name,
      quantity,
    }))
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5);

  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Top Selling Products
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            See which products are selling the most from your store.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
          🏆
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
              No sales data yet
            </h3>

            <p className="mt-1 max-w-sm text-sm text-slate-500">
              Product sales will appear here once customers begin placing
              orders.
            </p>
          </div>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 10,
                }}
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  stroke="#e2e8f0"
                  vertical={false}
                />

                <XAxis
                  dataKey="name"
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  tickLine={false}
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                  height={55}
                />

                <YAxis
                  allowDecimals={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  formatter={(value) => [
                    `${Number(value).toLocaleString()} sold`,
                    "Quantity",
                  ]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    boxShadow:
                      "0 10px 25px rgba(15, 23, 42, 0.08)",
                  }}
                />

                <Bar
                  dataKey="quantity"
                  fill="#2563eb"
                  radius={[8, 8, 0, 0]}
                  barSize={42}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </section>
  );
}