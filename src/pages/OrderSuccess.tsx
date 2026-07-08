import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const orderNumber =
    "SS-" + Math.floor(Math.random() * 900000 + 100000);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg w-full rounded-2xl bg-white p-10 shadow-xl text-center">

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Order Placed!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for shopping with Stridestep.
          Your order has been received.
        </p>

        <div className="rounded-xl bg-gray-100 p-4 mb-8">
          <p className="text-gray-500">
            Order Number
          </p>

          <h2 className="text-2xl font-bold">
            {orderNumber}
          </h2>
        </div>

        <Link
          to="/services"
          className="block rounded-xl bg-blue-700 py-4 text-white font-semibold hover:bg-blue-800 transition"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}