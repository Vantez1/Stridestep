import { Link } from 'react-router-dom';

export default function FAQs() {
  const faqs = [
    { q: 'How long does shipping take?', a: 'Shipping in Nairobi takes 1-2 business days, while deliveries outside Nairobi usually arrive in 2-4 business days.' },
    { q: 'Can I exchange my shoes if they don’t fit?', a: 'Yes. Exchanges are allowed within 14 days when shoes are returned in original condition and packaging.' },
    { q: 'How can I track my order?', a: 'Use the Track Order page or check your order confirmation email for the latest delivery updates.' },
    { q: 'What if my order is damaged on arrival?', a: 'Contact our support team immediately at info@stridestep.co.ke and we’ll arrange a replacement or refund.' },
  ];

  return (
    <section className="pt-0 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">FAQs</span>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">FAQs</h1>
        <p className="max-w-3xl text-slate-600 mb-10">
          Get quick answers to the most common questions about shipping, returns, tracking, and support.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="font-semibold text-navy text-lg mb-3">{faq.q}</h2>
              <p className="text-slate-600 leading-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
