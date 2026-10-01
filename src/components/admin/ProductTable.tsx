import type { Product } from "../../data/products";

type ProductTableProps = {
  products: Product[];
  updateStock: (id: number, amount: number) => void;
  handleEditProduct: (product: Product) => void;
  handleDeleteProduct: (id: number) => void;
};

export default function ProductTable({
  products,
  updateStock,
  handleEditProduct,
  handleDeleteProduct,
}: ProductTableProps) {
  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-100 bg-slate-50/70 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-blue-700">
            CATALOG
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Products
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage your store products, pricing, and stock levels.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
          📦
        </div>
      </div>

      {/* Empty State */}
      {products.length === 0 ? (
        <div className="p-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl">
            📦
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            No products found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Try changing your search or add a new product to your catalog.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="px-6 py-4 font-semibold">
                  Product
                </th>

                <th className="px-6 py-4 font-semibold">
                  Category
                </th>

                <th className="px-6 py-4 font-semibold">
                  Price
                </th>

                <th className="px-6 py-4 font-semibold">
                  Stock
                </th>

                <th className="px-6 py-4 font-semibold">
                  Rating
                </th>

                <th className="px-6 py-4 text-right font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {products.map((product) => {
                const isOutOfStock = product.stock === 0;
                const isLowStock =
                  product.stock > 0 && product.stock <= 5;

                return (
                  <tr
                    key={product.id}
                    className="transition-colors hover:bg-slate-50/80"
                  >
                    {/* Product */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-16 w-16 shrink-0 rounded-xl border border-slate-200 bg-slate-50 object-cover shadow-sm"
                          />
                        ) : (
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-xs font-medium text-slate-400">
                            No Image
                          </div>
                        )}

                        <div className="min-w-0">
                          <p className="truncate font-bold text-slate-900">
                            {product.name}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {product.brand}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-5">
                      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        {product.category}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5">
                      {product.salePrice ? (
                        <div>
                          <p className="font-bold text-emerald-700">
                            KSh{" "}
                            {product.salePrice.toLocaleString()}
                          </p>

                          <p className="mt-1 text-xs text-slate-400 line-through">
                            KSh{" "}
                            {product.price.toLocaleString()}
                          </p>
                        </div>
                      ) : (
                        <p className="font-bold text-slate-900">
                          KSh {product.price.toLocaleString()}
                        </p>
                      )}
                    </td>

                    {/* Stock */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateStock(product.id, -1)
                          }
                          disabled={product.stock === 0}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-lg font-bold text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                          aria-label={`Decrease stock for ${product.name}`}
                        >
                          −
                        </button>

                        <span
                          className={`min-w-10 text-center text-base font-bold ${
                            isOutOfStock
                              ? "text-red-600"
                              : isLowStock
                              ? "text-amber-600"
                              : "text-emerald-600"
                          }`}
                        >
                          {product.stock}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateStock(product.id, 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-lg font-bold text-slate-600 transition-colors hover:bg-slate-100"
                          aria-label={`Increase stock for ${product.name}`}
                        >
                          +
                        </button>
                      </div>

                      <span
                        className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          isOutOfStock
                            ? "bg-red-100 text-red-700"
                            : isLowStock
                            ? "bg-amber-100 text-amber-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {isOutOfStock
                          ? "Out of stock"
                          : isLowStock
                          ? "Low stock"
                          : "In stock"}
                      </span>
                    </td>

                    {/* Rating */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
                        ⭐ {product.rating}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleEditProduct(product)
                          }
                          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteProduct(product.id)
                          }
                          className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-red-700 hover:shadow-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}