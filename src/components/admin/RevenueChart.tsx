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
    <div className="mb-10 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Revenue Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}