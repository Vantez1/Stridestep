import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import type { Product } from "../../data/products";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

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
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-slate-100">

        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow transition hover:scale-110">
         <FaHeart size={18} />
        </button>

        {/* Badges */}
        {product.id <= 2 && (
          <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
            SALE
          </span>
        )}

        {product.id === 4 && (
          <span className="absolute left-4 top-14 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
            NEW
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-4 p-6">

        <p className="text-sm uppercase tracking-wide text-slate-500">
          {product.brand}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="block text-2xl font-bold transition hover:text-royal"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">

          <div className="flex text-amber-brand">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={16}
                className={
                  index < Math.round(product.rating)
                    ? "text-amber-brand"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <span className="text-sm text-slate-500">
            ({product.rating})
          </span>

        </div>

        {/* Price */}
        <p className="text-3xl font-bold text-royal">
          KSh {product.price.toLocaleString()}
        </p>

        {/* Stock */}
        <div>
          {product.stock > 10 ? (
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              In Stock
            </span>
          ) : product.stock > 0 ? (
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
              Low Stock
            </span>
          ) : (
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
              Out of Stock
            </span>
          )}
        </div>

        {/* Button */}
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
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white transition ${
            product.stock === 0
              ? "cursor-not-allowed bg-gray-400"
              : "bg-royal hover:scale-[1.02] hover:bg-navy"
          }`}
        >
          <FaShoppingCart size={18} />

          {product.stock === 0
            ? "Out of Stock"
            : added
            ? "Added to Cart!"
            : "Add to Cart"}
        </button>

      </div>
    </div>
  );
}