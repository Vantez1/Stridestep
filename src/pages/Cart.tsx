import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available.");
  }

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = cartContext;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 rounded-xl border p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">
                    {item.brand}
                  </p>

                  <p className="font-semibold">
                    KSh {item.price.toLocaleString()}
                  </p>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-6 text-red-600 hover:text-red-800 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border bg-gray-50 p-6 shadow-sm">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>KSh {total.toLocaleString()}</span>
            </div>

            <div className="mt-2 flex justify-between text-lg">
              <span>Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>KSh {total.toLocaleString()}</span>
            </div>

            <button className="mt-6 w-full rounded-xl bg-blue-700 py-4 text-white font-semibold hover:bg-blue-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}