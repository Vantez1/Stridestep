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
    <div className="mb-10 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Top Selling Products
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="quantity"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}