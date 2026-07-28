import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { WishlistContext } from "../../context/WishlistContext";


interface ProductGalleryProps {
  product: any;
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

export default function ProductGallery({
  product,
  selectedImage,
  setSelectedImage,
}: ProductGalleryProps) {

const wishlist = useContext(WishlistContext);

if (!wishlist) {
  throw new Error("WishlistContext missing");
}

const {
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
} = wishlist;

const [showViewer, setShowViewer] = useState(false);

useEffect(() => {
  if (!showViewer) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowViewer(false);
    }

    if (event.key === "ArrowLeft") {
      setSelectedImage(
        selectedImage === 0
          ? product.images.length - 1
          : selectedImage - 1
      );
    }

    if (event.key === "ArrowRight") {
      setSelectedImage(
        selectedImage === product.images.length - 1
          ? 0
          : selectedImage + 1
      );
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [
  showViewer,
  selectedImage,
  product.images.length,
  setSelectedImage,
]);

  return (
    <div className="space-y-6">

      {/* Main Image */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">

        {product.id <= 2 && (
          <span className="absolute left-5 top-5 z-20 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
            SALE
          </span>
        )}

        {product.id === 4 && (
          <span className="absolute left-5 top-5 z-20 rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white">
            NEW
          </span>
        )}

<button
  onClick={() => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast("Removed from Wishlist 💔");
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
  className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
>
  <span className="text-2xl">
    {isInWishlist(product.id) ? "❤️" : "🤍"}
  </span>
</button>

           <img
             src={product.images[selectedImage]}
             alt={product.name}
             onClick={() => setShowViewer(true)}
             className="h-[520px] w-full cursor-zoom-in object-contain transition duration-500 hover:scale-105"
            />

      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto">

        {product.images.map((image: string, index: number) => (

          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              selectedImage === index
                ? "border-blue-700"
                : "border-slate-200 hover:border-blue-500"
            }`}
          >
            <img
              src={image}
              alt={`${product.name}-${index}`}
              className="h-24 w-24 object-cover"
            />
          </button>

        ))}

            </div>

      {/* Fullscreen Image Viewer */}
      {showViewer && (
        <div
          onClick={() => setShowViewer(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
        >
          <button
            onClick={() => setShowViewer(false)}
            className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-2xl font-bold shadow-lg"
          >
            ✕
          </button>

<button
  onClick={(e) => {
    e.stopPropagation();

    setSelectedImage(
      selectedImage === 0
        ? product.images.length - 1
        : selectedImage - 1
    );
  }}
  className="absolute left-6 rounded-full bg-white p-4 text-3xl shadow-lg transition hover:scale-110"
>
  ‹
</button>

          <img
            src={product.images[selectedImage]}
            alt={product.name}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl bg-white p-4 shadow-2xl"
          />
<button
  onClick={(e) => {
    e.stopPropagation();

    setSelectedImage(
      selectedImage === product.images.length - 1
        ? 0
        : selectedImage + 1
    );
  }}
  className="absolute right-6 rounded-full bg-white p-4 text-3xl shadow-lg transition hover:scale-110"
>
  ›
</button>

        </div>
      )}

    </div>
  );
}