type Order = {
  total: number;
  status: string;
};

type SalesAnalyticsProps = {
  orders: Order[];
};

export default function SalesAnalytics({
  orders,
}: SalesAnalyticsProps) {
  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const averageOrder =
    orders.length > 0
      ? totalRevenue / orders.length
      : 0;

  const completedOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  return (
    <div className="mb-10 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        📈 Sales Analytics
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-xl bg-blue-50 p-5">
          <p className="text-slate-500">
            Total Revenue
          </p>

          <h3 className="mt-2 text-3xl font-bold text-blue-700">
            KSh {totalRevenue.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-xl bg-green-50 p-5">
          <p className="text-slate-500">
            Average Order
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-700">
            KSh {averageOrder.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </h3>
        </div>

        <div className="rounded-xl bg-purple-50 p-5">
          <p className="text-slate-500">
            Delivered
          </p>

          <h3 className="mt-2 text-3xl font-bold text-purple-700">
            {completedOrders}
          </h3>
        </div>

        <div className="rounded-xl bg-yellow-50 p-5">
          <p className="text-slate-500">
            Pending
          </p>

          <h3 className="mt-2 text-3xl font-bold text-yellow-700">
            {pendingOrders}
          </h3>
        </div>
      </div>
    </div>
  );
}