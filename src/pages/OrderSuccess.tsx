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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 pt-28">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl sm:p-10">

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


<h3 className="mb-4 text-2xl font-bold">
  Purchased Items
</h3>

  <div className="space-y-4">
  {latestOrder.items.map((item: any) => (
    <div
      key={`${item.id}-${item.size}-${item.color}`}
      className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 rounded-xl object-cover"
      />

      {/* Product Information */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            {item.brand}
          </p>

          <h4 className="text-lg font-bold text-slate-900">
            {item.name}
          </h4>
        </div>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
          <span>
            Size: <strong>{item.size}</strong>
          </span>

          <span>
            Colour: <strong>{item.color}</strong>
          </span>

          <span>
            Qty: <strong>{item.quantity}</strong>
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col items-end justify-center">
        <p className="text-lg font-bold text-royal">
          KSh {(item.price * item.quantity).toLocaleString()}
        </p>

        <p className="text-xs text-slate-500">
          KSh {item.price.toLocaleString()} each
        </p>
      </div>
    </div>
  ))}
</div>

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

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

  <Link
    to="/orders"
    className="rounded-xl border border-slate-300 px-6 py-4 text-center font-semibold text-slate-700 no-underline transition hover:border-royal hover:text-royal"
  >
    View My Orders
  </Link>

  <Link
    to="/services"
    className="rounded-xl bg-royal px-6 py-4 text-center font-semibold text-white no-underline transition hover:bg-navy"
  >
    Continue Shopping
  </Link>

</div>
      </div>
    </div>
  );
}