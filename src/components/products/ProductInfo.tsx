type ProductInfoProps = {
  product: {
    brand: string;
    name: string;
    price: number;
    salePrice?: number;
    rating: number;
    description: string;
    stock: number;
  };
};

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <div className="space-y-5">

      {/* Brand */}
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-royal">
        {product.brand}
      </p>

      {/* Product Name */}
      <h1 className="text-4xl font-black text-slate-900">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <span className="text-xl text-amber-500">
          ⭐⭐⭐⭐⭐
        </span>

        <span className="text-slate-500">
          {product.rating} / 5
        </span>
      </div>

      {/* Price */}
      <div>
<div className="space-y-2">
  {product.salePrice ? (
    <>
      <p className="text-xl text-slate-500 line-through">
        KSh {product.price.toLocaleString()}
      </p>

      <p className="text-5xl font-black text-red-600">
        KSh {product.salePrice.toLocaleString()}
      </p>

      <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600">
        SALE
      </span>
    </>
  ) : (
    <p className="text-4xl font-black text-royal">
      KSh {product.price.toLocaleString()}
    </p>

  )}
</div>

<p className="font-semibold text-green-600">
  Save{" "}
  {product.salePrice
    ? Math.round(
        ((product.price - product.salePrice) /
          product.price) *
          100
      )
    : 0}
  %
</p>

         <p className="mt-2 text-green-600 font-semibold">
          ✓ Free delivery within Kenya
        </p>

      </div>

      {/* Stock */}
<div
  className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
    product.stock === 0
      ? "bg-red-100 text-red-700"
      : product.stock <= 5
      ? "bg-amber-100 text-amber-700"
      : "bg-green-100 text-green-700"
  }`}
>
  {product.stock === 0
    ? "Out of Stock"
    : product.stock <= 5
    ? `Only ${product.stock} left!`
    : `${product.stock} items in stock`}
</div>

      {/* Description */}
      <p className="leading-8 text-slate-600">
        {product.description}
      </p>

    </div>
  );
}