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
    <div className="mb-10 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Sales by Category
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}