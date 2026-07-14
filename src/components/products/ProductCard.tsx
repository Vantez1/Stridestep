import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import type { Product } from "../../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false);

const cartContext = useContext(CartContext);

if (!cartContext) {
  throw new Error("CartContext is not available.");
}

const { addToCart } = cartContext;

  return (
    <div className="relative rounded-xl border bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md transition hover:scale-110">
        🤍
      </button>


 <div className="relative">
  <Link
  to={`/product/${product.id}`}
  className="block hover:text-blue-600 transition"
>
  <h3 className="text-xl font-bold">
    {product.name}
  </h3>
</Link>


  {product.id <= 2 && (
    <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
      SALE
    </span>
  )}

  {product.id === 4 && (
    <span className="absolute right-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
      NEW
    </span>
  )}
</div>

<div className="mt-2 flex items-center gap-2">
  <span className="text-yellow-500">
    {"★".repeat(Math.floor(product.rating))}
  </span>

  <span className="text-sm text-gray-500">
    ({product.rating})
  </span>
</div>

  <Link
  to={`/product/${product.id}`}
  className="hover:text-blue-600 transition"
>
  <h3 className="text-xl font-bold">
    {product.name}
  </h3>
</Link>

      <p className="text-gray-500">{product.brand}</p>

      <p className="mt-3 text-2xl font-bold text-blue-700">
        KSh {product.price.toLocaleString()}
      </p>

      <p className="mt-2">⭐ {product.rating}</p>

      <button
  disabled={product.stock === 0}
  onClick={() => {
    if (product.stock === 0) return;

    addToCart({
      id: product.id,
      brand: product.brand,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }}
  className={`mt-5 w-full rounded-xl py-3 font-semibold text-white transition ${
    product.stock === 0
      ? "cursor-not-allowed bg-gray-400"
      : "bg-blue-700 hover:bg-blue-800"
  }`}
>
  {product.stock === 0
    ? "❌ Out of Stock"
    : added
    ? "✅ Added!"
    : "🛒 Add to Cart"}
</button>
    </div>
  );
}