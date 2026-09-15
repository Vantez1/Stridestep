import type { Dispatch, SetStateAction } from "react";

type ProductFormProps = {
  editingId: number | null;

  newProduct: any;

  setNewProduct: Dispatch<SetStateAction<any>> 

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

  return (
      <div className="mb-10 rounded-2xl border p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold">
          {editingId !== null
            ? "Edit Product"
            : "Add Product"}
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          
<input
  type="text"
  placeholder="Product Name"
  value={newProduct.name}
  onChange={(e) =>
    setNewProduct({
      ...newProduct,
      name: e.target.value,
    })
  }
  className="rounded-lg border p-3"
/>

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
  className="rounded-lg border p-3"
>
  <option value="">Select Brand</option>

  {brands.map((brand) => (
    <option
      key={brand}
      value={brand}
    >
      {brand}
    </option>
  ))}

  <option value="__new__">
    ➕ Add New Brand
  </option>
</select>

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
  className="rounded-lg border p-3"
>
  <option value="">Select Category</option>

  {categories.map((category) => (
    <option
      key={category}
      value={category}
    >
      {category}
    </option>
  ))}

  <option value="__new__">
    ➕ Add New Category
  </option>
</select>

          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                price: e.target.value,
              })
            }
            className="rounded-lg border p-3"
          />

<input
  type="number"
  placeholder="Sale Price (Optional)"
  value={newProduct.salePrice}
  onChange={(e) =>
    setNewProduct({
      ...newProduct,
      salePrice: e.target.value,
    })
  }
  className="rounded-lg border p-3"
/>

<input
  type="number"
  placeholder="Initial Stock"
  value={newProduct.stock}
  onChange={(e) =>
    setNewProduct({
      ...newProduct,
      stock: e.target.value,
    })
  }
  className="rounded-lg border p-3"
/>

<select
  value={newProduct.rating}
  onChange={(e) =>
    setNewProduct({
      ...newProduct,
      rating: e.target.value,
    })
  }
  className="rounded-lg border p-3"
>
  <option value="5">★★★★★ (5)</option>
  <option value="4.5">★★★★☆ (4.5)</option>
  <option value="4">★★★★ (4)</option>
  <option value="3.5">★★★☆ (3.5)</option>
  <option value="3">★★★ (3)</option>
</select>

          <div className="md:col-span-2">
  <label className="mb-2 block font-semibold">
    Product Image
  </label>

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
    className="w-full rounded-lg border p-3"
  />

  {newProduct.image && (
    <img
      src={newProduct.image}
      alt="Preview"
      className="mt-4 h-40 w-40 rounded-xl border object-cover"
    />
  )}
</div>

{newProduct.image && (
  <div className="md:col-span-2">
    <p className="mb-2 font-semibold text-slate-700">
      Image Preview
    </p>

    <img
      src={newProduct.image}
      alt="Preview"
      className="h-64 w-full rounded-xl border object-contain bg-slate-50"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
      onLoad={(e) => {
        e.currentTarget.style.display = "block";
      }}
    />
  </div>
)}

<textarea
  placeholder="Product Description"
  value={newProduct.description}
  onChange={(e) =>
    setNewProduct({
      ...newProduct,
      description: e.target.value,
    })
  }
  rows={5}
  className="rounded-lg border p-3 md:col-span-2"
/>

        </div>

        <div className="mt-6 flex flex-wrap gap-3">

  <button
    onClick={handleAddProduct}
    className="rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800"
  >
    {editingId !== null
      ? "Update Product"
      : "Add Product"}
  </button>

  {editingId !== null && (
    <button
      type="button"
      onClick={handleCancelEdit}
      className="rounded-xl border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 hover:bg-slate-50"
    >
      Cancel Edit
    </button>
  )}

</div>
      </div>
      
    );
}