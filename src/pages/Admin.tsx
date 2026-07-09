import { useState } from "react";
import { products as initialProducts } from "../data/products";

export default function Admin() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
  name: "",
  brand: "",
  category: "",
  price: "",
  image: "",
});
const handleAddProduct = () => {
  if (
    !newProduct.name ||
    !newProduct.brand ||
    !newProduct.category ||
    !newProduct.price
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const product = {
  id: Date.now(),
  name: newProduct.name,
  brand: newProduct.brand,
  category: newProduct.category,
  price: Number(newProduct.price),
  image: newProduct.image || "/images/placeholder.jpg",
  rating: 5,
  description: "New product added from the admin dashboard.",
};

  setProducts([...products, product]);

  setNewProduct({
    name: "",
    brand: "",
    category: "",
    price: "",
    image: "",
  });
};

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-gray-500">Products</h2>
          <p className="text-4xl font-bold mt-2">
            {products.length}
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-gray-500">Orders</h2>
          <p className="text-4xl font-bold mt-2">
            0
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-gray-500">Customers</h2>
          <p className="text-4xl font-bold mt-2">
            0
          </p>
        </div>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm mb-10">
  <h2 className="text-2xl font-bold mb-6">
    Add New Product
  </h2>

  <div className="grid md:grid-cols-2 gap-4">

    <input
      type="text"
      placeholder="Product Name"
      value={newProduct.name}
      onChange={(e) =>
        setNewProduct({ ...newProduct, name: e.target.value })
      }
      className="rounded-lg border p-3"
    />

    <input
      type="text"
      placeholder="Brand"
      value={newProduct.brand}
      onChange={(e) =>
        setNewProduct({ ...newProduct, brand: e.target.value })
      }
      className="rounded-lg border p-3"
    />

    <input
      type="text"
      placeholder="Category"
      value={newProduct.category}
      onChange={(e) =>
        setNewProduct({ ...newProduct, category: e.target.value })
      }
      className="rounded-lg border p-3"
    />

    <input
      type="number"
      placeholder="Price"
      value={newProduct.price}
      onChange={(e) =>
        setNewProduct({ ...newProduct, price: e.target.value })
      }
      className="rounded-lg border p-3"
    />

    <input
      type="text"
      placeholder="Image URL (optional)"
      value={newProduct.image}
      onChange={(e) =>
        setNewProduct({ ...newProduct, image: e.target.value })
      }
      className="rounded-lg border p-3 md:col-span-2"
    />

  </div>

  <button
    onClick={handleAddProduct}
    className="mt-6 rounded-xl bg-blue-700 px-8 py-3 text-white font-semibold hover:bg-blue-800 transition"
  >
    Add Product
  </button>
</div>

      {/* Products Table */}
      <div className="rounded-2xl border shadow-sm overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 font-bold">
          Product Management
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Product</th>
              <th className="text-left p-4">Brand</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Category</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.brand}
                </td>

                <td className="p-4">
                  KSh {product.price.toLocaleString()}
                </td>

                <td className="p-4">
                  {product.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}