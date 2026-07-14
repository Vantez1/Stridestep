import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/products/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);


  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available.");
  }

  const { addToCart } = cartContext;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">

      <div className="grid gap-12 md:grid-cols-2">

        <img
          src={product.images[selectedImage]}
          alt={product.name}
          className="w-full rounded-2xl shadow-lg transition-all duration-300"
        />

        <div className="mt-4 flex gap-3">

  {product.images.map((image, index) => (

    <button
      key={index}
      onClick={() => setSelectedImage(index)}
      className={`overflow-hidden rounded-lg border-2 transition ${
        selectedImage === index
          ? "border-blue-600"
          : "border-gray-200 hover:border-blue-400"
      }`}
    >

      <img
        src={image}
        alt={`${product.name} ${index + 1}`}
        className="h-20 w-20 object-cover"
      />

    </button>

  ))}

</div>

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-2 text-gray-500">
            {product.brand}
          </p>

          <p className="mt-6 text-3xl font-bold text-blue-700">
            KSh {product.price.toLocaleString()}
          </p>

          <p className="mt-4">
            ⭐ {product.rating}
          </p>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <p className="mt-8 font-semibold">
            Stock: {product.stock}
          </p>

          <div className="mt-8 flex items-center gap-4">

            <button
              onClick={() =>
                setQuantity(Math.max(1, quantity - 1))
              }
              className="rounded-lg bg-gray-200 px-4 py-2"
            >
              −
            </button>

            <span className="text-xl font-bold">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity(
                  Math.min(product.stock, quantity + 1)
                )
              }
              className="rounded-lg bg-gray-200 px-4 py-2"
            >
              +
            </button>

          </div>

          <button
            onClick={() => {
              for (let i = 0; i < quantity; i++) {
                addToCart({
                  id: product.id,
                  brand: product.brand,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                });
              }
            }}
            disabled={product.stock === 0}
            className={`mt-6 w-full rounded-xl py-4 font-semibold text-white ${
              product.stock === 0
                ? "cursor-not-allowed bg-gray-400"
                : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            {product.stock === 0
              ? "Out of Stock"
              : "Add to Cart"}
          </button>

        </div>

      </div>

      <div className="mt-20">

        <h2 className="mb-8 text-3xl font-bold">
          Related Products
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {relatedProducts.length > 0 ? (
            relatedProducts.map((related) => (
              <ProductCard
                key={related.id}
                product={related}
              />
            ))
          ) : (
            <p className="text-gray-500">
              No related products found.
            </p>
          )}

        </div>

      </div>

    </div>
  );
}