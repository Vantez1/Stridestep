import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import type { Product } from "../../data/products";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaTruck,
} from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";



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
const wishlistContext = useContext(WishlistContext);

if (!wishlistContext) {
  throw new Error("WishlistContext is not available.");
}

const {
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
} = wishlistContext;

const liked = isInWishlist(product.id);

  return (
   <div
     className="
  group
  relative
  overflow-hidden
  rounded-3xl
  border
  border-transparent
  bg-white
  shadow-lg
  transition-all
  duration-500
  hover:-translate-y-3
  hover:border-amber-brand/40
  hover:shadow-[0_30px_70px_rgba(15,23,42,0.18)]
"
>
{/* Premium Hover Glow */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    bg-gradient-to-br
    from-white/40
    via-transparent
    to-transparent
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
  "
/>

      {/* Product Image */}
      <div className="relative overflow-hidden bg-slate-100">

        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-contain p-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
      {/* Premium Gradient Overlay */}
      <div
  className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t
             from-black/25
             via-transparent
             to-transparent
             opacity-0
             transition-opacity
             duration-500
             group-hover:opacity-100"
/>

        {/* Wishlist */}
        <button
  onClick={() => {
  if (liked) {
    removeFromWishlist(product.id);

    toast("Removed from Wishlist ❤️", {
      icon: "💔",
    });
  } else {
    addToWishlist({
      id: product.id,
      brand: product.brand,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    toast.success("Added to Wishlist ❤️");
  }
}}
  className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 ${
  liked
    ? "bg-red-500 text-white scale-110"
    : "bg-white/80 text-slate-700 hover:bg-red-500 hover:text-white"
}`}
  aria-label="Wishlist"
>
  <FaHeart size={18} />
</button>

        <div
  className="
    absolute bottom-5 left-1/2 z-20
    flex -translate-x-1/2 translate-y-8 items-center gap-3
    opacity-0 transition-all duration-300
    group-hover:translate-y-0
    group-hover:opacity-100
  "
>
  <Link
    to={`/product/${product.id}`}
    className="rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
    title="View Product"
  >
    👁
  </Link>

  <button
    onClick={() => {
     addToCart({
  id: product.id,
  brand: product.brand,
  name: product.name,
  price: product.price,
  image: product.image,
  size: "42",
  color: "Black",
});

      setAdded(true);

      setTimeout(() => setAdded(false), 2000);
    }}
    className="rounded-full bg-royal p-3 text-white shadow-lg transition hover:scale-110"
    title="Add to Cart"
  >
    <FaShoppingCart size={18} />
  </button>
</div>

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

          <span className="text-sm font-medium text-slate-600">
  {product.rating}
</span>

<span className="text-sm text-slate-400">
  • 248 Reviews
</span>

        </div>

        {/* Price */}
       <div className="space-y-1">

  <div className="flex items-center gap-3">

    <div className="space-y-1">
  {product.salePrice ? (
    <>
      <p className="text-sm text-slate-500 line-through">
        KSh {product.price.toLocaleString()}
      </p>

      <p className="text-2xl font-bold text-red-600">
        KSh {product.salePrice.toLocaleString()}
      </p>

      <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-600">
        SALE
      </span>
    </>
  ) : (
    <p className="text-2xl font-bold text-royal">
      KSh {product.price.toLocaleString()}
    </p>
  )}
</div>

    <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-600">
      20% OFF
    </span>

  </div>

  <p className="text-sm text-slate-400 line-through">
    KSh {Math.round(product.price * 1.25).toLocaleString()}
  </p>

</div>
        {/* Delivery */}
        <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
          <FaTruck className="text-base" />
          <span>Free Delivery Across Kenya</span>
        </div>




        {/* Stock */}
        <div>
          {product.stock > 10 ? (
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              ✓ Ready to Ship
            </span>
          ) : product.stock > 0 ? (
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
              ⚠ Only a Few Left
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
  size: "42",
  color: "Black",
});

            setAdded(true);

            setTimeout(() => {
              setAdded(false);
            }, 2000);
          }}
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white transition ${
            product.stock === 0
              ? "cursor-not-allowed bg-gray-400"
              : "bg-royal hover:scale-105 active:scale-95 hover:bg-navy"
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