import toast from "react-hot-toast";

type ProductActionsProps = {
  product: {
    id: number;
    brand: string;
    name: string;
    price: number;
    image: string;
    stock: number;
  };

  selectedSize: string;
  setSelectedSize: (size: string) => void;

  selectedColor: string;
  setSelectedColor: (color: string) => void;

  quantity: number;
  setQuantity: (value: number) => void;

  addToCart: (
  item: {
    id: number;
    brand: string;
    name: string;
    price: number;
    image: string;
    size: string;
    color: string;
  },
  quantity?: number
) => void;
};

export default function ProductActions({
  product,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
  addToCart,
}: ProductActionsProps) {

console.log("Stock:", product.stock);
console.log("Quantity:", quantity);

  return (
    <div className="space-y-8">

      {/* Size */}

      <div>

        <h3 className="mb-3 text-lg font-bold">
          Select Size
        </h3>

        <div className="flex flex-wrap gap-3">

          {["40", "41", "42", "43", "44"].map((size) => (

            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`h-12 w-12 rounded-xl border-2 font-bold transition ${
                selectedSize === size
                  ? "border-royal bg-royal text-white"
                  : "border-slate-300 hover:border-royal"
              }`}
            >
              {size}
            </button>

          ))}

        </div>

      </div>

      {/* Color */}

      <div>

        <h3 className="mb-3 text-lg font-bold">
          Colour
        </h3>

        <div className="flex gap-4">

          {[
            "Black",
            "White",
            "Blue",
          ].map((color) => (

            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`rounded-xl border px-5 py-3 transition ${
                selectedColor === color
                  ? "border-royal bg-royal text-white"
                  : "border-slate-300"
              }`}
            >
              {color}
            </button>

          ))}

        </div>

      </div>

      {/* Quantity */}

      <div>

        <h3 className="mb-3 text-lg font-bold">
          Quantity
        </h3>

        <div className="flex w-fit items-center rounded-xl border">

          <button
  disabled={quantity >= product.stock}
  onClick={() => setQuantity(quantity + 1)}
  className={`px-5 py-3 ${
    quantity >= product.stock
      ? "cursor-not-allowed text-gray-400"
      : ""
  }`}
>
  +
</button>

          <span className="px-6 font-bold">
            {quantity}
          </span>

          <button
  disabled={quantity >= product.stock}
  onClick={() => setQuantity(quantity + 1)}
  className={`px-5 py-3 transition ${
    quantity >= product.stock
      ? "cursor-not-allowed text-gray-400"
      : "hover:bg-slate-100"
  }`}
>
  +
</button>

        </div>

{quantity >= product.stock && product.stock > 0 && (
  <p className="mt-2 text-sm font-medium text-amber-600">
    Maximum available stock reached.
  </p>
)}

      </div>

      {/* Buttons */}

<div className="grid gap-4 sm:grid-cols-2">

 <button
  disabled={product.stock === 0}
  onClick={() => {
    if (product.stock === 0) return;

    if (!selectedSize) {
      toast.error("Please select a shoe size 👟");
      return;
    }

    if (!selectedColor) {
      toast.error("Please select a colour 🎨");
      return;
    }

    addToCart(
      {
        id: product.id,
        brand: product.brand,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        color: selectedColor,
      },
      quantity
    );

    toast.success(`${quantity} item(s) added to cart 🛒`);

    // Reset quantity after adding
    setQuantity(1);
  }}
  className={`rounded-2xl py-4 text-lg font-bold text-white transition ${
    product.stock === 0
      ? "cursor-not-allowed bg-gray-400"
      : "bg-royal hover:scale-105 hover:bg-navy"
  }`}
>
  {product.stock === 0
    ? "Out of Stock"
    : `Add ${quantity} to Cart`}
</button>
  <button
    className="rounded-2xl border-2 border-royal py-4 text-lg font-bold text-royal transition hover:bg-royal hover:text-white"
  >
    Buy Now
  </button>

</div>
    </div>
  );
}