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
    <section className="mb-10">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-900">
          Sales Analytics
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monitor your store's sales performance and order activity.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Revenue
              </p>

              <p className="mt-3 text-2xl font-bold tracking-tight text-blue-700 sm:text-3xl">
                KSh {totalRevenue.toLocaleString()}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Revenue from all orders
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl transition-transform duration-200 group-hover:scale-110">
              💰
            </div>
          </div>
        </div>

        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Average Order
              </p>

              <p className="mt-3 text-2xl font-bold tracking-tight text-emerald-700 sm:text-3xl">
                KSh{" "}
                {averageOrder.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Average value per order
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl transition-transform duration-200 group-hover:scale-110">
              📊
            </div>
          </div>
        </div>

        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Delivered
              </p>

              <p className="mt-3 text-2xl font-bold tracking-tight text-purple-700 sm:text-3xl">
                {completedOrders.toLocaleString()}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Successfully completed orders
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl font-bold transition-transform duration-200 group-hover:scale-110">
              ✓
            </div>
          </div>
        </div>

        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Pending
              </p>

              <p className="mt-3 text-2xl font-bold tracking-tight text-amber-700 sm:text-3xl">
                {pendingOrders.toLocaleString()}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Orders awaiting completion
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl transition-transform duration-200 group-hover:scale-110">
              ⏳
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

