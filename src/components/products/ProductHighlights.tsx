export default function ProductHighlights() {
  const highlights = [
    {
      icon: "🚚",
      title: "Free Delivery",
      text: "Free delivery within Nairobi for orders over KSh 5,000.",
    },
    {
      icon: "🛡️",
      title: "12-Month Warranty",
      text: "Manufacturer warranty against production defects.",
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      text: "Return or exchange within 30 days.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      text: "M-Pesa, Visa, Mastercard and Bank Transfer.",
    },
  ];

  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-xl font-bold">
        Why shop with StrideStep?
      </h3>

      <div className="space-y-5">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              {item.icon}
            </div>

            <div>
              <h4 className="font-semibold">
                {item.title}
              </h4>

              <p className="text-sm text-slate-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}