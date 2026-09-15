import { Link } from 'react-router-dom';

export default function Returns() {
  return (
    <section className="pt-0 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="mb-8 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Returns & Exchanges</span>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">Returns & Exchanges</h1>
        <p className="max-w-3xl text-slate-600 mb-8">
          Need a different size or want to exchange your order? Our returns process is simple and customer-friendly.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Easy Exchanges</h2>
            <p className="text-slate-600 leading-7">
              Exchanges are available within 14 days of delivery. Keep your original packaging and receipt for the fastest handling.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Return Policy</h2>
            <p className="text-slate-600 leading-7">
              If you’re not satisfied, return any unused pair in original condition for a refund or store credit.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">How to Start</h2>
            <p className="text-slate-600 leading-7">
              Contact our support team at info@stridestep.co.ke or use the contact page to request a return authorization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
