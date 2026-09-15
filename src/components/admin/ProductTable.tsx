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
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      {/* Table Header */}
      <div className="border-b bg-slate-50 px-6 py-4">
        <h2 className="text-xl font-bold">
          Products
        </h2>

        <p className="text-sm text-slate-500">
          Manage your store products and stock.
        </p>
      </div>

      {/* Empty State */}
      {products.length === 0 ? (
        <div className="p-10 text-center">
          <p className="text-lg font-semibold text-slate-600">
            No products found.
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Try changing your search or add a new product.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead>
              <tr className="border-b text-left text-sm text-slate-500">
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

            <tbody>

              {products.map((product) => (

                <tr
                  key={product.id}
                  className="border-b last:border-b-0 hover:bg-slate-50"
                >

                  {/* Product */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-16 w-16 rounded-xl border object-cover"
                        />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 text-xs text-slate-400">
                          No Image
                        </div>
                      )}

                      <div>
                        <p className="font-bold">
                          {product.name}
                        </p>

                        <p className="text-sm text-slate-500">
                          {product.brand}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Category */}
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                      {product.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5">

                    {product.salePrice ? (
                      <div>
                        <p className="font-bold text-green-600">
                          KSh{" "}
                          {product.salePrice.toLocaleString()}
                        </p>

                        <p className="text-sm text-slate-400 line-through">
                          KSh{" "}
                          {product.price.toLocaleString()}
                        </p>
                      </div>
                    ) : (
                      <p className="font-bold">
                        KSh {product.price.toLocaleString()}
                      </p>
                    )}

                  </td>

                  {/* Stock */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <button
                        onClick={() =>
                          updateStock(product.id, -1)
                        }
                        className="h-8 w-8 rounded-lg border font-bold hover:bg-slate-100"
                      >
                        −
                      </button>

                      <span
                        className={`min-w-10 text-center font-bold ${
                          product.stock === 0
                            ? "text-red-600"
                            : product.stock <= 5
                            ? "text-yellow-600"
                            : "text-green-600"
                        }`}
                      >
                        {product.stock}
                      </span>

                      <button
                        onClick={() =>
                          updateStock(product.id, 1)
                        }
                        className="h-8 w-8 rounded-lg border font-bold hover:bg-slate-100"
                      >
                        +
                      </button>

                    </div>

                    <p className="mt-1 text-xs text-slate-400">
                      {product.stock === 0
                        ? "Out of stock"
                        : product.stock <= 5
                        ? "Low stock"
                        : "In stock"}
                    </p>

                  </td>

                  {/* Rating */}
                  <td className="px-6 py-5">
                    <span className="font-semibold">
                      ⭐ {product.rating}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() =>
                          handleEditProduct(product)
                        }
                        className="rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-slate-100"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteProduct(product.id)
                        }
                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}