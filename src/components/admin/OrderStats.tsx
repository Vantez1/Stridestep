type OrderStatsProps = {
  totalOrders: number;
  pendingOrders: number;
  deliveredOrders: number;
  totalRevenue: number;
};

export default function OrderStats({
  totalOrders,
  pendingOrders,
  deliveredOrders,
  totalRevenue,
}: OrderStatsProps) {
  return (
    <div className="mb-10 grid gap-6 md:grid-cols-4">
      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="text-gray-500">Total Orders</h2>
        <p className="mt-2 text-4xl font-bold">
          {totalOrders}
        </p>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="text-gray-500">Pending</h2>
        <p className="mt-2 text-4xl font-bold text-yellow-600">
          {pendingOrders}
        </p>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="text-gray-500">Delivered</h2>
        <p className="mt-2 text-4xl font-bold text-green-600">
          {deliveredOrders}
        </p>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="text-gray-500">Revenue</h2>
        <p className="mt-2 text-4xl font-bold text-blue-600">
          KSh {totalRevenue.toLocaleString()}
        </p>
      </div>
    </div>
  );
}