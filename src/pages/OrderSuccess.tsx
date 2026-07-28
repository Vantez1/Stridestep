import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const latestOrder = JSON.parse(
    localStorage.getItem("latestOrder") || "null"
  );

  if (!latestOrder) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">No recent order found.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg w-full rounded-2xl bg-white p-10 shadow-xl text-center">

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Order Placed!
        </h1>

        <p className="mb-6 text-gray-600">
            Thank you <strong>{latestOrder.customer}</strong>!

        <br />

             Your order has been received successfully.
        </p>

        <div className="rounded-xl bg-gray-100 p-4 mb-8">
          <p className="text-gray-500">
            Order Number
          </p>

          <h2 className="text-2xl font-bold">
              {latestOrder.orderNumber}
          </h2>
        </div>

<div className="mb-8 rounded-xl border p-5 text-left">

  <h3 className="mb-4 text-lg font-bold">
    Order Summary
  </h3>

  {latestOrder.items.map((item: any) => (
    <div
      key={`${item.id}-${item.size}-${item.color}`}
      className="mb-3 border-b pb-3"
    >
      <p className="font-semibold">
        {item.name}
      </p>

      <p className="text-sm text-slate-600">
        Size: {item.size}
      </p>

      <p className="text-sm text-slate-600">
        Colour: {item.color}
      </p>

      <p className="text-sm text-slate-600">
        Qty: {item.quantity}
      </p>
    </div>
  ))}

  <div className="mt-4 flex justify-between font-bold text-lg">
    <span>Total</span>
    <span>
      KSh {latestOrder.total.toLocaleString()}
    </span>
  </div>

</div>

<div className="mb-8 rounded-xl bg-green-50 p-4 text-left">

  <h3 className="font-bold text-green-700">
    Delivery Details
  </h3>

  <p className="mt-2">
    📍 {latestOrder.address}
  </p>

  <p>
    📞 {latestOrder.phone}
  </p>

  <p>
    📧 {latestOrder.email}
  </p>

  <p className="mt-3 font-semibold text-green-700">
    Estimated Delivery: 2–4 Business Days
  </p>

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