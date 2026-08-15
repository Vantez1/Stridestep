type PaymentMethodProps = {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
};

const methods = [
  {
    id: "M-Pesa",
    title: "M-Pesa",
    description: "Pay instantly using Safaricom M-Pesa",
    icon: "📱",
  },
  {
    id: "Card",
    title: "Credit / Debit Card",
    description: "Visa, Mastercard & more",
    icon: "💳",
  },
  {
    id: "Cash on Delivery",
    title: "Cash on Delivery",
    description: "Pay when your order arrives",
    icon: "💵",
  },
];

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodProps) {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-royal">
          Payment
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Choose Payment Method
        </h2>

        <p className="mt-2 text-slate-500">
          Select how you'd like to pay for your order.
        </p>
      </div>

      <div className="space-y-4">

        {methods.map((method) => (
          <label
            key={method.id}
            className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 p-5 transition ${
              paymentMethod === method.id
                ? "border-royal bg-blue-50"
                : "border-slate-200 hover:border-royal"
            }`}
          >
            <div className="flex items-center gap-4">

              <div className="text-3xl">
                {method.icon}
              </div>

              <div>
                <h3 className="font-bold">
                  {method.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {method.description}
                </p>
              </div>

            </div>

            <input
              type="radio"
              checked={paymentMethod === method.id}
              onChange={() =>
                setPaymentMethod(method.id)
              }
            />
          </label>
        ))}

      </div>

    </div>
  );
}