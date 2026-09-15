import { useEffect, useState } from "react";
import { products as initialProducts, type Product } from "../data/products";

import DashboardStats from "../components/admin/DashboardStats";
import ProductForm from "../components/admin/ProductForm";
import ProductTable from "../components/admin/ProductTable";
import InventoryStats from "../components/admin/InventoryStats";
import LowStockAlert from "../components/admin/LowStockAlert";
import RecentOrders from "../components/admin/RecentOrders";
import SalesAnalytics from "../components/admin/SalesAnalytics";
import RevenueChart from "../components/admin/RevenueChart";
import CategorySalesChart from "../components/admin/CategorySalesChart";
import TopSellingProductsChart from "../components/admin/TopSellingProductsChart";

const defaultBrands = [
  "Nike",
  "Adidas",
  "Puma",
  "New Balance",
  "Jordan",
  "Reebok",
  "Converse",
  "Vans",
];

const defaultCategories = [
  "Running",
  "Basketball",
  "Casual",
  "Training",
  "Football",
  "Hiking",
  "Boots",
  "Sandals",
];

const emptyProduct = {
  name: "",
  brand: "",
  category: "",
  price: "",
  salePrice: "",
  image: "",
  image2: "",
  image3: "",
  image4: "",
  description: "",
  stock: "0",
  rating: "5",
};

export default function Admin() {
  /* =========================
     PRODUCTS
  ========================= */

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("products");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialProducts;
      }
    }

    return initialProducts;
  });

  const [newProduct, setNewProduct] = useState(emptyProduct);

  const [editingId, setEditingId] = useState<number | null>(null);

  /* =========================
     SEARCH & SORT
  ========================= */

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("name");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  /* =========================
     BRANDS & CATEGORIES
  ========================= */

  const [brands, setBrands] = useState<string[]>(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("brands") || "null") ??
        defaultBrands
      );
    } catch {
      return defaultBrands;
    }
  });

  const [categories, setCategories] = useState<string[]>(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("categories") || "null") ??
        defaultCategories
      );
    } catch {
      return defaultCategories;
    }
  });

  /* =========================
     SAVE PRODUCTS
  ========================= */

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  /* =========================
     SAVE BRANDS
  ========================= */

  useEffect(() => {
    localStorage.setItem("brands", JSON.stringify(brands));
  }, [brands]);

  /* =========================
     SAVE CATEGORIES
  ========================= */

  useEffect(() => {
    localStorage.setItem(
      "categories",
      JSON.stringify(categories)
    );
  }, [categories]);

  /* =========================
     ADD / UPDATE PRODUCT
  ========================= */

  const handleAddProduct = () => {
    console.log("New Product:", newProduct);

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

      salePrice: newProduct.salePrice
        ? Number(newProduct.salePrice)
        : undefined,

      image: newProduct.image,

      images: [
        newProduct.image,
        newProduct.image2,
        newProduct.image3,
        newProduct.image4,
      ].filter(Boolean),

      rating: Number(newProduct.rating),

      description: newProduct.description,

      stock: Number(newProduct.stock),
    };

    setProducts((currentProducts) => {
      if (editingId !== null) {
        return currentProducts.map((existingProduct) =>
          existingProduct.id === editingId
            ? product
            : existingProduct
        );
      }

      return [...currentProducts, product];
    });

    const wasEditing = editingId !== null;

    setEditingId(null);

    setNewProduct({
      ...emptyProduct,
    });

    alert(
      wasEditing
        ? "Product updated successfully!"
        : "Product added successfully!"
    );
  };

  /* =========================
     CANCEL EDIT
  ========================= */

  const handleCancelEdit = () => {
    setEditingId(null);

    setNewProduct({
      ...emptyProduct,
    });
  };

  /* =========================
     EDIT PRODUCT
  ========================= */

  const handleEditProduct = (product: Product) => {
    setEditingId(product.id);

    setNewProduct({
      name: product.name,

      brand: product.brand,

      category: product.category,

      price: product.price.toString(),

      salePrice: product.salePrice?.toString() ?? "",

      image: product.images?.[0] ?? product.image,

      image2: product.images?.[1] ?? "",

      image3: product.images?.[2] ?? "",

      image4: product.images?.[3] ?? "",

      description: product.description,

      stock: product.stock.toString(),

      rating: product.rating.toString(),
    });
  };

  /* =========================
     DELETE PRODUCT
  ========================= */

  const handleDeleteProduct = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== id
      )
    );

    if (editingId === id) {
      handleCancelEdit();
    }
  };

  /* =========================
     UPDATE STOCK
  ========================= */

  const updateStock = (
    id: number,
    amount: number
  ) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
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

  /* =========================
     ORDERS
  ========================= */

  const orders = (() => {
    try {
      return JSON.parse(
        localStorage.getItem("orders") || "[]"
      );
    } catch {
      return [];
    }
  })();

  /* =========================
     DASHBOARD STATISTICS
  ========================= */

  const totalRevenue = orders.reduce(
    (sum: number, order: any) =>
      sum + Number(order.total || 0),
    0
  );

  const totalOrders = orders.length;

  const lowStock = products.filter(
    (product) => product.stock <= 5
  ).length;

  const inStock = products.filter(
    (product) => product.stock > 5
  ).length;

  const outOfStock = products.filter(
    (product) => product.stock === 0
  ).length;

  const inventoryValue = products.reduce(
    (sum, product) =>
      sum + product.price * product.stock,
    0
  );

  /* =========================
     SEARCH & SORT PRODUCTS
  ========================= */

  const filteredProducts = products
    .filter((product) => {
      const query = search.toLowerCase().trim();

      if (!query) return true;

      return (
        product.name
          .toLowerCase()
          .includes(query) ||
        product.brand
          .toLowerCase()
          .includes(query) ||
        product.category
          .toLowerCase()
          .includes(query)
      );
    })
    .sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;

        case "price":
          comparison = a.price - b.price;
          break;

        case "stock":
          comparison = a.stock - b.stock;
          break;

        case "rating":
          comparison = a.rating - b.rating;
          break;

        default:
          comparison = 0;
      }

      return sortOrder === "asc"
        ? comparison
        : -comparison;
    });

  /* =========================
     PAGE
  ========================= */

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="mb-10 text-4xl font-bold">
        Admin Dashboard
      </h1>

      {/* DASHBOARD STATS */}

      <DashboardStats
        products={products.length}
        orders={totalOrders}
        revenue={totalRevenue}
        lowStock={lowStock}
      />

      {/* SALES ANALYTICS */}

      <SalesAnalytics orders={orders} />

      <RevenueChart orders={orders} />

      <CategorySalesChart products={products} />

      <TopSellingProductsChart orders={orders} />

      {/* INVENTORY */}

      <InventoryStats
        totalProducts={products.length}
        inStock={inStock}
        lowStock={lowStock}
        outOfStock={outOfStock}
        inventoryValue={inventoryValue}
      />

      <LowStockAlert products={products} />

      {/* RECENT ORDERS */}

      <RecentOrders orders={orders} />

      {/* PRODUCT FORM */}

      <ProductForm
        editingId={editingId}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        brands={brands}
        setBrands={setBrands}
        categories={categories}
        setCategories={setCategories}
        handleAddProduct={handleAddProduct}
        handleCancelEdit={handleCancelEdit}
      />

      {/* SEARCH & SORT */}

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none md:col-span-2"
        />

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="rounded-xl border border-slate-300 p-3"
        >
          <option value="name">
            Sort by Name
          </option>

          <option value="price">
            Sort by Price
          </option>

          <option value="stock">
            Sort by Stock
          </option>

          <option value="rating">
            Sort by Rating
          </option>
        </select>
      </div>

      {/* SORT ORDER */}

      <div className="mb-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() =>
            setSortOrder("asc")
          }
          className={`rounded-xl px-5 py-2 font-semibold ${
            sortOrder === "asc"
              ? "bg-blue-700 text-white"
              : "border bg-white text-slate-700"
          }`}
        >
          ↑ Ascending
        </button>

        <button
          type="button"
          onClick={() =>
            setSortOrder("desc")
          }
          className={`rounded-xl px-5 py-2 font-semibold ${
            sortOrder === "desc"
              ? "bg-blue-700 text-white"
              : "border bg-white text-slate-700"
          }`}
        >
          ↓ Descending
        </button>
      </div>

      {/* PRODUCT TABLE */}

      <ProductTable
        products={filteredProducts}
        updateStock={updateStock}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
}