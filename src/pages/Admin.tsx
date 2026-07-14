import { useEffect, useState } from "react";
import { products as initialProducts, type Product } from "../data/products";

export default function Admin() {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("products");

    if (saved) {
      return JSON.parse(saved);
    }

    return initialProducts;
  });

  
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    image: "",
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

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

    const product: Product = {
      id: editingId ?? Date.now(),
      name: newProduct.name,
      brand: newProduct.brand,
      category: newProduct.category,
      price: Number(newProduct.price),
      image:
        newProduct.image || "/images/placeholder.jpg",
      rating: 5,
      description:
        "New product added from the admin dashboard.",
      stock: 10,
    };

    if (editingId !== null) {
      setProducts(
        products.map((p) =>
          p.id === editingId ? product : p
        )
      );
    } else {
      setProducts([...products, product]);
    }

    setEditingId(null);

    setNewProduct({
      name: "",
      brand: "",
      category: "",
      price: "",
      image: "",
    });
  };

  const handleDeleteProduct = (id: number) => {
    if (!window.confirm("Delete this product?")) return;

    setProducts(
      products.filter((product) => product.id !== id)
    );
  };

  const handleEditProduct = (product: Product) => {
    setEditingId(product.id);

    setNewProduct({
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: product.price.toString(),
      image: product.image,
    });
  };

  const updateStock = (
    id: number,
    amount: number
  ) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              stock: Math.max(
                0,
                product.stock + amount
              ),
            }
          : product
      )
    );
  };

const orders = JSON.parse(
  localStorage.getItem("orders") || "[]"
);

const totalRevenue = orders.reduce(
  (sum: number, order: any) => sum + order.total,
  0
);

const totalOrders = orders.length;

const lowStock = products.filter(
  (product) => product.stock <= 5
).length;

  return (
        <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="mb-10 text-4xl font-bold">
        Admin Dashboard
      </h1>

      {/* Dashboard Statistics */}
      <div className="mb-10 grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-gray-500">
            Products
          </h2>
          <p className="mt-2 text-4xl font-bold">
            {products.length}
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
  <h2 className="text-gray-500">
    Orders
  </h2>

  <p className="mt-2 text-4xl font-bold text-blue-600">
    {totalOrders}
  </p>
</div>
<div className="rounded-2xl border p-6 shadow-sm">
  <h2 className="text-gray-500">
    Revenue
  </h2>

  <p className="mt-2 text-3xl font-bold text-green-600">
    KSh {totalRevenue.toLocaleString()}
  </p>
</div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-gray-500">
            Low Stock
          </h2>
          <p className="mt-2 text-4xl font-bold text-yellow-600">
            {lowStock}
          </p>
        </div>
      </div>

      {/* Add Product */}
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

          <input
            type="text"
            placeholder="Brand"
            value={newProduct.brand}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                brand: e.target.value,
              })
            }
            className="rounded-lg border p-3"
          />

          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                category: e.target.value,
              })
            }
            className="rounded-lg border p-3"
          />

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
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                image: e.target.value,
              })
            }
            className="rounded-lg border p-3 md:col-span-2"
          />
        </div>

        <button
          onClick={handleAddProduct}
          className="mt-6 rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800"
        >
          {editingId !== null
            ? "Update Product"
            : "Add Product"}
        </button>
      </div>
            {/* Products Table */}
      <div className="overflow-hidden rounded-2xl border shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Brand</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{product.name}</td>

                <td className="p-4">{product.brand}</td>

                <td className="p-4">
                  KSh {product.price.toLocaleString()}
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
                      onClick={() =>
                        updateStock(product.id, -1)
                      }
                      className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    >
                      −
                    </button>

                    <button
                      onClick={() =>
                        updateStock(product.id, 1)
                      }
                      className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleEditProduct(product)
                      }
                      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDeleteProduct(product.id)
                      }
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
    </div>
  );
}