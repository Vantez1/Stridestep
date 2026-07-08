import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

type Product = {
  id: number;
  brand: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
};

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

      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full rounded-lg object-cover"
      />

      <h3 className="mt-4 text-xl font-bold">{product.name}</h3>

      <p className="text-gray-500">{product.brand}</p>

      <p className="mt-3 text-2xl font-bold text-blue-700">
        KSh {product.price.toLocaleString()}
      </p>

      <p className="mt-2">⭐ {product.rating}</p>

      <button
  onClick={() => {
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
  className="mt-5 w-full rounded-xl bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
>
  {added ? "✅ Added!" : "🛒 Add to Cart"}
</button>
    </div>
  );
}