import type { CartItem } from "../../context/CartContext";

type OrderSummaryProps = {
  cart: CartItem[];
};

export default function OrderSummary({
  cart,
}: OrderSummaryProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8">

        <p className="text-sm font-semibold uppercase tracking-widest text-royal">
          Your Order
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Order Summary
        </h2>

      </div>

      <div className="space-y-6">

        {cart.length === 0 ? (
          <p className="text-slate-500">
            Your cart is empty.
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={`${item.id}-${item.size}-${item.color}`}
              className="flex gap-4 border-b pb-5"
            >
              {/* Product Image */}

              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 rounded-2xl border bg-slate-100 object-contain p-2"
              />

              {/* Details */}

              <div className="flex-1">

                <p className="font-bold">
                  {item.name}
                </p>

                <p className="text-sm text-slate-500">
                  {item.brand}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">
                    Size {item.size}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">
                    {item.color}
                  </span>

                  <span className="rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">
                    Qty {item.quantity}
                  </span>

                </div>

              </div>

              {/* Price */}

              <div className="text-right">

                <p className="font-bold text-royal">
                  KSh {(item.price * item.quantity).toLocaleString()}
                </p>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}