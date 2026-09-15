import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { products } from "../data/products";

import ProductGallery from "../components/products/ProductGallery";
import ProductInfo from "../components/products/ProductInfo";
import ProductActions from "../components/products/ProductActions";
import ProductFeatures from "../components/products/ProductFeatures";
import ProductCard from "../components/products/ProductCard";
import ProductTrust from "../components/products/ProductTrust";
import ProductSpecifications from "../components/products/ProductSpecifications";

import { CartContext } from "../context/CartContext";
import ProductHighlights from "../components/products/ProductHighlights";
import ProductReviews from "../components/products/ProductReviews";

export default function ProductDetails() {
  const { id } = useParams();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext missing");
  }

  const { addToCart } = cartContext;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl py-24 text-center">
        <h1 className="text-4xl font-bold">
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
      <div className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28">

      <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">

        <Link
          to="/"
          className="transition hover:text-royal"
        >
          Home
        </Link>

        <span>/</span>

        <Link
          to="/shop"
          className="transition hover:text-royal"
        >
          Shop
        </Link>

        <span>/</span>

        <span>{product.category}</span>

        <span>/</span>

        <span className="font-semibold text-navy">
          {product.name}
        </span>

      </nav>
  
<div className="grid items-start gap-14 lg:grid-cols-2">

</div>

        <ProductGallery
          product={product}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        <div className="lg:sticky lg:top-24 lg:self-start">

  <ProductInfo
    product={product}
  />

  <ProductActions
    product={product}
    selectedSize={selectedSize}
    setSelectedSize={setSelectedSize}
    selectedColor={selectedColor}
    setSelectedColor={setSelectedColor}
    quantity={quantity}
    setQuantity={setQuantity}
    addToCart={addToCart}
  />

  <ProductHighlights />
  <ProductTrust />
  <ProductSpecifications product={product} />
   <ProductFeatures />
   
       </div>
      </div>

      <section className="mt-14">
        <h2 className="mb-8 text-3xl font-bold">
          Related Products
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((related) => (
            <ProductCard
              key={related.id}
              product={related}
            />
          ))}
        </div>
      </section>

      <ProductReviews />

    </div>
  

);
}