import type { Product } from "../../data/products";

type LowStockAlertProps = {
  products: Product[];
};

export default function LowStockAlert({
  products,
}: LowStockAlertProps) {
  const lowStockProducts = products.filter(
    (product) => product.stock <= 5
  );

  if (lowStockProducts.length === 0) {
    return (
      <section className="mb-10 rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
            ✓
          </div>

          <div>
            <h2 className="text-xl font-bold text-emerald-800">
              Inventory Healthy
            </h2>

            <p className="mt-1 text-sm text-emerald-600">
              All products currently have sufficient stock.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-amber-100 bg-amber-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl">
            ⚠️
          </div>

          <div>
            <h2 className="text-xl font-bold text-amber-900">
              Low Stock Alerts
            </h2>

            <p className="mt-1 text-sm text-amber-700">
              {lowStockProducts.length}{" "}
              {lowStockProducts.length === 1
                ? "product needs"
                : "products need"}{" "}
              attention.
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="divide-y divide-slate-100">
        {lowStockProducts.map((product) => {
          const isOutOfStock = product.stock === 0;

          return (
            <div
              key={product.id}
              className="flex flex-col gap-4 p-5 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
                  📦
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {product.name}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {product.brand} · {product.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <span className="text-sm text-slate-500">
                  Stock
                </span>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    isOutOfStock
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {isOutOfStock
                    ? "Out of stock"
                    : `${product.stock} left`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}