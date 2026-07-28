type Order = {
  id: number;
  customer: string;
  total: number;
  status: string;
  createdAt?: string;
};

type RecentOrdersProps = {
  orders: Order[];
};

export default function RecentOrders({
  orders,
}: RecentOrdersProps) {
  const recentOrders = [...orders]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div className="mb-10 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        🛒 Recent Orders
      </h2>

      {recentOrders.length === 0 ? (
        <p className="text-slate-500">
          No orders yet.
        </p>
      ) : (
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <div>
                <h3 className="font-semibold">
                  {order.customer}
                </h3>

                <p className="text-sm text-slate-500">
                  {order.createdAt ?? `Order #${order.id}`}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold">
                  KSh {order.total.toLocaleString()}
                </p>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Processing"
                      ? "bg-blue-100 text-blue-700"
                      : order.status === "Shipped"
                      ? "bg-purple-100 text-purple-700"
                      : order.status === "Cancelled"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}