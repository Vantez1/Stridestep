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

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-100 text-emerald-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "Shipped":
        return "bg-purple-100 text-purple-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-amber-100 text-amber-700";
    }
  };

  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            The latest customer orders from your store.
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
          🛒
        </div>
      </div>

      {/* Orders */}
      {recentOrders.length === 0 ? (
        <div className="p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
            🛍️
          </div>

          <h3 className="mt-4 font-semibold text-slate-900">
            No orders yet
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            New customer orders will appear here.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col gap-4 p-5 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
            >
              {/* Customer */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600">
                  {order.customer
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {order.customer}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {order.createdAt ??
                      `Order #${order.id}`}
                  </p>
                </div>
              </div>

              {/* Order Details */}
              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <div className="text-left sm:text-right">
                  <p className="font-bold text-slate-900">
                    KSh{" "}
                    {order.total.toLocaleString()}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Order #{order.id}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${getStatusStyles(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}