type OrderTotalsProps = {
  subtotal: number;
};

export default function OrderTotals({
  subtotal,
}: OrderTotalsProps) {
  const deliveryFee = subtotal >= 10000 ? 0 : 500;

  const grandTotal = subtotal + deliveryFee;

  const savings = deliveryFee === 0 ? 500 : 0;

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-royal">
          Payment Summary
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Totals
        </h2>
      </div>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-slate-600">
            Subtotal
          </span>

          <span className="font-semibold">
            KSh {subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">
            Delivery
          </span>

          <span className="font-semibold">
            {deliveryFee === 0
              ? "FREE"
              : `KSh ${deliveryFee.toLocaleString()}`}
          </span>
        </div>

        {savings > 0 && (
          <div className="flex justify-between text-green-600">
            <span>You Saved</span>

            <span>
              KSh {savings.toLocaleString()}
            </span>
          </div>
        )}

        <hr />

        <div className="flex justify-between text-2xl font-bold">

          <span>Total</span>

          <span className="text-royal">
            KSh {grandTotal.toLocaleString()}
          </span>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-emerald-50 p-5">

        <p className="font-semibold text-emerald-700">
          🚚 Estimated Delivery
        </p>

        <p className="mt-1 text-sm text-slate-600">
          1–3 business days within Kenya.
        </p>

      </div>

    </div>
  );
}