import { Link } from 'react-router-dom';

export default function Shipping() {
  return (
    <section className="pt-0 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Shipping Information</span>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">Shipping Information</h1>
        <p className="max-w-3xl text-slate-600 mb-8">
          We offer fast and reliable delivery across Kenya. Review our shipping methods, delivery times, and order tracking options so you always know when your new shoes will arrive.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Standard Shipping</h2>
            <p className="text-slate-600 leading-7">
              Delivery within Nairobi takes 1-2 business days. Outside Nairobi, shipping takes 2-4 business days depending on your location.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Rates</h2>
            <p className="text-slate-600 leading-7">
              Orders over KSh 10,000 qualify for free delivery. Otherwise, flat-rate shipping is KSh 500 within Kenya.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Track Your Order</h2>
            <p className="text-slate-600 leading-7">
              Once your order ships, you can track it from your account page or visit the order tracking page below.
            </p>
            <Link to="/order-tracking" className="mt-5 inline-flex rounded-full bg-amber-brand px-5 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors">
              Track Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
