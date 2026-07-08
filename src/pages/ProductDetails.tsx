import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available.");
}

const { addToCart } = cartContext;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-2xl shadow-lg"
        />

        <div>

          <p className="text-gray-500">
            {product.brand}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.name}
          </h1>

          <p className="text-yellow-500 text-lg mt-3">
            ⭐ {product.rating}
          </p>

          <p className="text-3xl font-bold text-blue-700 mt-4">
            KSh {product.price.toLocaleString()}
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            {product.description}
          </p>
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                brand: product.brand,
                name: product.name,
                price: product.price,
                image: product.image,
           })
         }
         className="mt-8 rounded-xl bg-blue-700 px-8 py-4 text-white font-semibold transition hover:bg-blue-800"
       >
         🛒 Add to Cart
      </button>

        </div>

      </div>
    </div>
  );
}