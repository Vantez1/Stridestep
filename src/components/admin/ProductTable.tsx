import type { Dispatch, SetStateAction } from "react";
import type { Product } from "../../data/products";

type ProductTableProps = {
  products: Product[];
  updateStock: (id: number, amount: number) => void;
  handleEditProduct: (product: Product) => void;
  handleDeleteProduct: (id: number) => void;

  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;

  sortOrder: "asc" | "desc";
  setSortOrder: Dispatch<SetStateAction<"asc" | "desc">>;
};

export default function ProductTable({
  products,
  updateStock,
  handleEditProduct,
  handleDeleteProduct,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: ProductTableProps) {

const handleSort = (field: string) => {
  if (sortBy === field) {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  } else {
    setSortBy(field);
    setSortOrder("asc");
  }
};

return (
    <div className="max-h-[700px] overflow-auto rounded-2xl border shadow-sm">
      <table className="w-full">
        <thead className="sticky top-0 bg-gray-100 z-10">
          <tr className="border-b bg-gray-100">
            <th className="p-4 text-left">Image</th>
            <th
  className="cursor-pointer p-4 text-left select-none"
  onClick={() => handleSort("name")}
>
  <div className="flex items-center gap-2">
    Product
    <span className="text-xs text-slate-400">
      {sortBy === "name"
        ? sortOrder === "asc"
          ? "▲"
          : "▼"
        : "⇅"}
    </span>
  </div>
</th>
            <th className="p-4 text-left">Brand</th>
            <th
  className="cursor-pointer p-4 text-left select-none"
  onClick={() => handleSort("price")}
>
  Price{" "}
  {sortBy === "price"
    ? sortOrder === "asc"
      ? "▲"
      : "▼"
    : ""}
</th>
            <th
  className="cursor-pointer p-4 text-left select-none"
  onClick={() => handleSort("rating")}
>
  Rating{" "}
  {sortBy === "rating"
    ? sortOrder === "asc"
      ? "▲"
      : "▼"
    : ""}
</th>
            <th className="p-4 text-left">Category</th>
            <th
  className="cursor-pointer p-4 text-left select-none"
  onClick={() => handleSort("stock")}
>
  Stock{" "}
  {sortBy === "stock"
    ? sortOrder === "asc"
      ? "▲"
      : "▼"
    : ""}
</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
  key={product.id}
  className="border-b odd:bg-white even:bg-slate-50 hover:bg-blue-50 transition-colors"
>
              <td className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 rounded-lg border object-cover"
                />
              </td>

              <td className="p-4 font-semibold">
                {product.name}
              </td>

              <td className="p-4">
                {product.brand}
              </td>

              <td className="p-4">
                KSh {product.price.toLocaleString()}
              </td>

              <td className="p-4">
                ⭐ {product.rating}
              </td>

              <td className="p-4">
                {product.category}
              </td>

              <td className="p-4">
                <div className="flex items-center gap-3">

                  {product.stock > 10 ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      In Stock ({product.stock})
                    </span>
                  ) : product.stock > 0 ? (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      Low Stock ({product.stock})
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                      Out of Stock
                    </span>
                  )}

                  <button
                    onClick={() => updateStock(product.id, -1)}
                    className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                  >
                    −
                  </button>

                  <button
                    onClick={() => updateStock(product.id, 1)}
                    className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
                  >
                    +
                  </button>

                </div>
              </td>

              <td className="p-4">
                <div className="flex gap-2">

                  <button
                    onClick={() => handleEditProduct(product)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
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
  );
}