import type { Dispatch, SetStateAction } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

type Errors = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

type CheckoutFormProps = {
  form: FormData;
  setForm: Dispatch<SetStateAction<FormData>>;
  errors: Errors;
};

export default function CheckoutForm({
  form,
  setForm,
  errors,
}: CheckoutFormProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-royal">
          Customer Information
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Delivery Details
        </h2>

        <p className="mt-2 text-slate-500">
          Enter the details we'll use to deliver your order.
        </p>
      </div>

      <div className="space-y-6">

        {/* Full Name */}

        <div>
          <label className="mb-2 block font-semibold">
            Full Name
          </label>

          <input
            type="text"
            value={form.fullName}
            onChange={(e) =>
              setForm({
                ...form,
                fullName: e.target.value,
              })
            }
            placeholder="John Doe"
            className="w-full rounded-xl border border-slate-300 p-4 transition focus:border-royal focus:outline-none"
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block font-semibold">
            Email Address
          </label>

          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            placeholder="john@example.com"
            className="w-full rounded-xl border border-slate-300 p-4 transition focus:border-royal focus:outline-none"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block font-semibold">
            Phone Number
          </label>

          <input
            type="tel"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            placeholder="+254 712 345 678"
            className="w-full rounded-xl border border-slate-300 p-4 transition focus:border-royal focus:outline-none"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Address */}

        <div>
          <label className="mb-2 block font-semibold">
            Delivery Address
          </label>

          <textarea
            value={form.address}
            onChange={(e) =>
              setForm({
                ...form,
                address: e.target.value,
              })
            }
            placeholder="House Number, Estate, Street, Town"
            rows={5}
            className="w-full rounded-xl border border-slate-300 p-4 transition focus:border-royal focus:outline-none"
          />

          {errors.address && (
            <p className="mt-2 text-sm text-red-600">
              {errors.address}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}