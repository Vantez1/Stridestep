import { useEffect, useState } from "react";
import { products as initialProducts, type Product } from "../data/products";
import DashboardStats from "../components/admin/DashboardStats";
import ProductForm from "../components/admin/ProductForm";
import ProductTable from "../components/admin/ProductTable";
import InventoryStats from "../components/admin/InventoryStats";
import LowStockAlert from "../components/admin/LowStockAlert";
import RecentOrders from "../components/admin/RecentOrders";

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
  salePrice: "",
  image: "",
  image2: "",
  image3: "",
  image4: "",
  description: "",
  stock: "0",
  rating: "5",
});

  const [editingId, setEditingId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

const [brands, setBrands] = useState<string[]>(() => {
  return JSON.parse(
    localStorage.getItem("brands") || "null"
  ) ?? defaultBrands;
});

const [categories, setCategories] = useState<string[]>(() => {
  return JSON.parse(
    localStorage.getItem("categories") || "null"
  ) ?? defaultCategories;
});

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  useEffect(() => {
  localStorage.setItem(
    "brands",
    JSON.stringify(brands)
  );
}, [brands]);

useEffect(() => {
  localStorage.setItem(
    "categories",
    JSON.stringify(categories)
  );
}, [categories]);


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
  images: [newProduct.image],
  rating: Number(newProduct.rating),
  description: newProduct.description,
  stock: Number(newProduct.stock),
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
  salePrice: "",
  image: "",
  image2: "",
  image3: "",
  image4: "",
  description: "",
  stock: "0",
  rating: "5",
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

const inStock = products.filter(
  (product) => product.stock > 5
).length;

const outOfStock = products.filter(
  (product) => product.stock === 0
).length;

const inventoryValue = products.reduce(
  (sum, product) => sum + product.price * product.stock,
  0
);

const filteredProducts = products
  .filter((product) => {
    const query = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
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

  return (
        <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="mb-10 text-4xl font-bold">
        Admin Dashboard
      </h1>

<DashboardStats
  products={products.length}
  orders={totalOrders}
  revenue={totalRevenue}
  lowStock={lowStock}
/>
<InventoryStats
  totalProducts={products.length}
  inStock={inStock}
  lowStock={lowStock}
  outOfStock={outOfStock}
  inventoryValue={inventoryValue}
/>
<LowStockAlert
  products={products}
/>

<RecentOrders
  orders={orders}
/>

<ProductForm
  editingId={editingId}
  newProduct={newProduct}
  setNewProduct={setNewProduct}
  brands={brands}
  setBrands={setBrands}
  categories={categories}
  setCategories={setCategories}
  handleAddProduct={handleAddProduct}
/>

 <div className="mb-6">
  <input
    type="text"
    placeholder="🔍 Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
  />
</div>
  <ProductTable
  products={filteredProducts}
  updateStock={updateStock}
  handleEditProduct={handleEditProduct}
  handleDeleteProduct={handleDeleteProduct}
  sortBy={sortBy}
  setSortBy={setSortBy}
  sortOrder={sortOrder}
  setSortOrder={setSortOrder}
/>
    </div>
  );
}