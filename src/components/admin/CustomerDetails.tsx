type CustomerDetailsProps = {
  customer: string;
  phone?: string;
  email?: string;
  address?: string;
  paymentMethod?: string;
  total: number;
};

export default function CustomerDetails({
  customer,
  phone,
  email,
  address,
  paymentMethod,
  total,
}: CustomerDetailsProps) {
  return (
    <div className="mt-8 grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="mb-3 text-lg font-bold">
          Customer
        </h3>

        <p>{customer}</p>

        <p className="mt-2 text-slate-600">
          📞 {phone ?? "-"}
        </p>

        <p className="text-slate-600">
          📧 {email ?? "-"}
        </p>

        <p className="mt-3 text-slate-600">
          📍 {address ?? "-"}
        </p>

        <p className="mt-3 text-slate-600">
          💳 Payment: <strong>{paymentMethod ?? "-"}</strong>
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-bold">
          Total
        </h3>

        <p className="text-3xl font-black text-royal">
          KSh {total.toLocaleString()}
        </p>
      </div>
    </div>
  );
}