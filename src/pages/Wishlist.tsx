import { useContext } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaShoppingBag, FaTrash } from "react-icons/fa";

import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

export default function Wishlist() {
  const wishlistContext = useContext(WishlistContext);

  if (!wishlistContext) {
    throw new Error("WishlistContext is not available.");
  }

  const {
  wishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistContext;
  const cartContext = useContext(CartContext);

if (!cartContext) {
  throw new Error("CartContext is not available.");
}

const { addToCart } = cartContext;

function moveAllToCart() {
  wishlist.forEach((item) => {
    addToCart({
  id: item.id,
  brand: item.brand,
  name: item.name,
  price: item.price,
  image: item.image,
  size: "42",
  color: "Black",
});
  });

 clearWishlist();

toast.success("All items moved to cart 🛒");
}

  return (
  <>
    {/* Hero */}
    <section
    className="pt-28 pb-16"
    style={{
      background:
        "linear-gradient(135deg, #0a2d46, #1565C0)"
    }}
  >
    <div className="max-w-7xl mx-auto px-6">

      <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
        <Link
          to="/"
          className="hover:text-white transition-colors no-underline text-white/50"
        >
          Home
        </Link>

        <span>/</span>

        <span className="text-white">
          Wishlist
        </span>
      </div>

      <div className="max-w-2xl">

        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white mb-4">
          ❤️ Saved Items
        </div>

        <h1 className="font-display font-black text-5xl text-white mb-4">
          My Wishlist
        </h1>

        <p className="text-white/70 text-lg mb-6">
          Keep track of the shoes you love and
          return whenever you're ready to buy.
        </p>

        <div className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-bold text-navy">
          {wishlist.length} Saved Item
          {wishlist.length !== 1 ? "s" : ""}
        </div>

      </div>

    </div>
  </section>

  <div className="max-w-7xl mx-auto px-6 py-16">

<div className="mb-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

  <div>
    <h2 className="text-2xl font-bold text-slate-900">
      Saved Shoes
    </h2>

    <p className="text-slate-500">
      {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} waiting for you.
    </p>
  </div>

  <div className="flex gap-3">

    <Link
      to="/shop"
      className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 no-underline transition hover:border-navy hover:text-navy"
    >
      Continue Shopping
    </Link>
    
<button
  onClick={moveAllToCart}
  disabled={wishlist.length === 0}
  className={`rounded-xl px-5 py-3 font-semibold text-white transition ${
    wishlist.length === 0
      ? "cursor-not-allowed bg-gray-400"
      : "bg-emerald-600 hover:bg-emerald-700"
  }`}
>
  Move All to Cart
</button>

    <button
      onClick={clearWishlist}
      disabled={wishlist.length === 0}
      className={`rounded-xl px-5 py-3 font-semibold text-white transition ${
        wishlist.length === 0
          ? "cursor-not-allowed bg-gray-400"
          : "bg-red-600 hover:bg-red-700"
      }`}
    >
      Clear Wishlist
    </button>

  </div>

</div>

      {wishlist.length === 0 ? (

        <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">

          <div className="text-7xl mb-6">
            ❤️
          </div>

          <h2 className="text-3xl font-bold">
            Your wishlist is empty
          </h2>

          <p className="mt-4 text-slate-500">
            Save your favourite shoes and they'll appear here.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-xl bg-amber-brand px-8 py-4 font-semibold text-white no-underline transition hover:scale-105"
          >
            Continue Shopping
          </Link>

        </div>

      ) : (

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

  {wishlist.map((item) => (

    <div
      key={item.id}
      className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >

      <img
        src={item.image}
        alt={item.name}
        className="h-64 w-full bg-slate-50 object-contain p-6"
      />

      <div className="p-6">

        <p className="text-sm uppercase tracking-wide text-slate-500">
          {item.brand}
        </p>

        <h3 className="mt-2 text-xl font-bold">
          {item.name}
        </h3>

        <p className="mt-4 text-2xl font-bold text-royal">
          KSh {item.price.toLocaleString()}
        </p>

        <div className="mt-6 flex gap-2">

          <button
            onClick={() => {
  addToCart({
    id: item.id,
    brand: item.brand,
    name: item.name,
    price: item.price,
    image: item.image,
    size: "42",
    color: "Black",
  });

  toast.success("Added to Cart 🛒");
}}
            className="flex-1 rounded-xl bg-royal py-3 font-semibold text-white transition hover:bg-navy"
          >
            <span className="flex items-center justify-center gap-2">
              <FaShoppingBag />
              Add to Cart
            </span>
          </button>

          <button
            onClick={() => {
  removeFromWishlist(item.id);

  toast("Removed from Wishlist", {
    icon: "💔",
  });
}}
            className="rounded-xl bg-red-500 px-4 text-white transition hover:bg-red-600"
          >
            <FaTrash />
          </button>

        </div>

      </div>

    </div>

  ))}

</div>

      )}

       </div>
  </>
);
}