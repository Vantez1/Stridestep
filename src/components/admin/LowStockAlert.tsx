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
      <div className="mb-10 rounded-2xl border border-green-200 bg-green-50 p-6">
        <h2 className="text-xl font-bold text-green-700">
          ✅ Inventory Healthy
        </h2>

        <p className="mt-2 text-green-600">
          All products have sufficient stock.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-10 rounded-2xl border border-yellow-300 bg-yellow-50 p-6">
      <h2 className="mb-4 text-xl font-bold text-yellow-800">
        ⚠ Low Stock Alerts
      </h2>

      <div className="space-y-3">
        {lowStockProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm"
          >
            <div>
              <p className="font-semibold">
                {product.name}
              </p>

              <p className="text-sm text-slate-500">
                {product.brand}
              </p>
            </div>

            <span className="rounded-full bg-red-100 px-4 py-2 font-bold text-red-700">
              {product.stock} left
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}