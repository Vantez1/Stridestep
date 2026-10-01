import type { Dispatch, SetStateAction } from "react";

type ProductFormProps = {
  editingId: number | null;

  newProduct: any;

  setNewProduct: Dispatch<SetStateAction<any>>;

  brands: string[];
  setBrands: React.Dispatch<React.SetStateAction<string[]>>;

  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;

  handleAddProduct: () => void;
  handleCancelEdit: () => void;
};

export default function ProductForm({
  editingId,
  newProduct,
  setNewProduct,
  brands,
  setBrands,
  categories,
  setCategories,
  handleAddProduct,
  handleCancelEdit,
}: ProductFormProps) {
  const inputClassName =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-blue-700">
              PRODUCT MANAGEMENT
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {editingId !== null ? "Edit Product" : "Add Product"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {editingId !== null
                ? "Update the details of this product."
                : "Add a new product to your store catalog."}
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
            {editingId !== null ? "✏️" : "➕"}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Product Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Product Name
            </label>

            <input
              type="text"
              placeholder="e.g. Air Max 270"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  name: e.target.value,
                })
              }
              className={inputClassName}
            />
          </div>

          {/* Brand */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Brand
            </label>

            <select
              value={newProduct.brand}
              onChange={(e) => {
                if (e.target.value === "__new__") {
                  const brand = prompt("Enter new brand");

                  if (
                    brand &&
                    !brands.includes(brand)
                  ) {
                    setBrands([...brands, brand]);

                    setNewProduct({
                      ...newProduct,
                      brand,
                    });
                  }

                  return;
                }

                setNewProduct({
                  ...newProduct,
                  brand: e.target.value,
                });
              }}
              className={inputClassName}
            >
              <option value="">Select Brand</option>

              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}

              <option value="__new__">
                ➕ Add New Brand
              </option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Category
            </label>

            <select
              value={newProduct.category}
              onChange={(e) => {
                if (e.target.value === "__new__") {
                  const category = prompt("Enter new category");

                  if (
                    category &&
                    !categories.includes(category)
                  ) {
                    setCategories([
                      ...categories,
                      category,
                    ]);

                    setNewProduct({
                      ...newProduct,
                      category,
                    });
                  }

                  return;
                }

                setNewProduct({
                  ...newProduct,
                  category: e.target.value,
                });
              }}
              className={inputClassName}
            >
              <option value="">Select Category</option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}

              <option value="__new__">
                ➕ Add New Category
              </option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Price
            </label>

            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
                KSh
              </span>

              <input
                type="number"
                placeholder="0"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: e.target.value,
                  })
                }
                className={`${inputClassName} pl-14`}
              />
            </div>
          </div>

          {/* Sale Price */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Sale Price
              <span className="ml-2 font-normal text-slate-400">
                Optional
              </span>
            </label>

            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
                KSh
              </span>

              <input
                type="number"
                placeholder="Optional sale price"
                value={newProduct.salePrice}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    salePrice: e.target.value,
                  })
                }
                className={`${inputClassName} pl-14`}
              />
            </div>
          </div>

          {/* Stock */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Initial Stock
            </label>

            <input
              type="number"
              placeholder="e.g. 25"
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  stock: e.target.value,
                })
              }
              className={inputClassName}
            />
          </div>

          {/* Rating */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Product Rating
            </label>

            <select
              value={newProduct.rating}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  rating: e.target.value,
                })
              }
              className={inputClassName}
            >
              <option value="5">★★★★★ (5)</option>
              <option value="4.5">★★★★☆ (4.5)</option>
              <option value="4">★★★★ (4)</option>
              <option value="3.5">★★★☆ (3.5)</option>
              <option value="3">★★★ (3)</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-slate-700">
                Product Image
              </label>

              <p className="mt-1 text-xs text-slate-400">
                Upload a product image from your computer.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 transition-colors hover:border-blue-400 hover:bg-blue-50/30">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (!file) return;

                  const reader = new FileReader();

                  reader.onloadend = () => {
                    setNewProduct({
                      ...newProduct,
                      image: reader.result as string,
                    });
                  };

                  reader.readAsDataURL(file);
                }}
                className="w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-blue-100 file:px-4 file:py-2 file:font-semibold file:text-blue-700 hover:file:bg-blue-200"
              />
            </div>
          </div>

          {/* Image Preview */}
          {newProduct.image && (
            <div className="md:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Image Preview
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    This image will be used as the main product image.
                  </p>
                </div>
              </div>

              <div className="flex min-h-64 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <img
                  src={newProduct.image}
                  alt="Product preview"
                  className="max-h-64 max-w-full rounded-xl object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  onLoad={(e) => {
                    e.currentTarget.style.display = "block";
                  }}
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Product Description
            </label>

            <textarea
              placeholder="Describe the product, its features, materials, fit, or other useful details..."
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  description: e.target.value,
                })
              }
              rows={5}
              className={`${inputClassName} resize-y`}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
          <button
            type="button"
            onClick={handleAddProduct}
            className="rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md"
          >
            {editingId !== null
              ? "Update Product"
              : "Add Product"}
          </button>

          {editingId !== null && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="rounded-xl border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>
    </section>
  );
}