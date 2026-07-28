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
  return (
    <div className="mb-10 grid gap-6 md:grid-cols-4">
      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="text-gray-500">Products</h2>
        <p className="mt-2 text-4xl font-bold">
          {products}
        </p>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="text-gray-500">Orders</h2>
        <p className="mt-2 text-4xl font-bold text-blue-600">
          {orders}
        </p>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="text-gray-500">Revenue</h2>
        <p className="mt-2 text-3xl font-bold text-green-600">
          KSh {revenue.toLocaleString()}
        </p>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="text-gray-500">Low Stock</h2>
        <p className="mt-2 text-4xl font-bold text-yellow-600">
          {lowStock}
        </p>
      </div>
    </div>
  );
}