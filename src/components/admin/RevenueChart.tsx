import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Order = {
  total: number;
  createdAt?: string;
};

type RevenueChartProps = {
  orders: Order[];
};

export default function RevenueChart({
  orders,
}: RevenueChartProps) {
  const chartData = orders.map((order, index) => ({
    name: `Order ${index + 1}`,
    revenue: order.total,
  }));

  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Revenue Trend
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track revenue generated across your customer orders.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
          📈
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        {chartData.length === 0 ? (
          <div className="flex h-80 flex-col items-center justify-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
              📊
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              No revenue data yet
            </h3>

            <p className="mt-1 max-w-sm text-sm text-slate-500">
              Revenue information will appear here once customers begin
              placing orders.
            </p>
          </div>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
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
                />

                <YAxis
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) =>
                    `KSh ${Number(value).toLocaleString()}`
                  }
                />

                <Tooltip
                  formatter={(value) => [
                    `KSh ${Number(value).toLocaleString()}`,
                    "Revenue",
                  ]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    boxShadow:
                      "0 10px 25px rgba(15, 23, 42, 0.08)",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    strokeWidth: 2,
                    fill: "#ffffff",
                  }}
                  activeDot={{
                    r: 6,
                    strokeWidth: 2,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </section>
  );
}