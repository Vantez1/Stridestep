import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FadeIn, SectionTag, SectionHeading, FormInput, FormSelect, FormTextarea, BtnPrimary } from '../components/ui';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  return (
    <>
      <section className="pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #0a2d46, #1565C0)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link to="/" className="hover:text-white no-underline text-white/50">Home</Link>
            <span>/</span><span className="text-white">Contact</span>
          </div>
          <SectionTag>Get In Touch</SectionTag>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-2 mb-3">
            We’d love to help you find your next pair
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Visit our store, ask about sizing, or place an order for delivery straight to your door.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <FadeIn direction="left">
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <h3 className="font-display font-bold text-xl text-white mb-2">Visit StrideStep Shoes</h3>
                  <p className="text-white/60 text-sm mb-8">We are here for fittings, product questions, and easy online ordering.</p>

                  <div className="space-y-5 mb-8">
                    {[
                      { Icon: Phone, label: 'Phone', lines: ['+254 712 345 678'] },
                      { Icon: Mail, label: 'Email', lines: ['info@stridestepshoes.co.ke'] },
                      { Icon: MapPin, label: 'Store Address', lines: ['Moi Avenue, Nairobi CBD', 'Nairobi, Kenya'] },
                      { Icon: Clock, label: 'Business Hours', lines: ['Mon–Fri: 8:00 AM – 8:00 PM', 'Sat: 9:00 AM – 6:00 PM'] },
                    ].map(({ Icon, label, lines }) => (
                      <div key={label} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-brand/20 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-amber-brand" />
                        </div>
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{label}</p>
                          {lines.map(l => <p key={l} className="text-sm text-white/85">{l}</p>)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[['👟 Store Visit', 'Moi Avenue, Nairobi CBD'], ['🚚 Delivery', 'Home delivery across Nairobi']].map(([title, addr]) => (
                      <div key={title} className="bg-white/8 rounded-xl p-4">
                        <p className="text-xs text-amber-brand font-semibold mb-1">{title}</p>
                        <p className="text-xs text-white/65 leading-relaxed">{addr}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs text-white/35 uppercase tracking-wider mb-3">Follow Us</p>
                    <div className="flex gap-2">
                      {['📘', '🐦', '💼', '📸'].map((icon, i) => (
                        <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sm hover:bg-amber-brand transition-colors">
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn direction="right">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  {sent ? (
                    <div className="text-center py-12">
                      <span className="text-6xl block mb-4">✉️</span>
                      <h2 className="font-display font-bold text-2xl text-navy mb-2">Message Sent!</h2>
                      <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
                        Thanks for reaching out. We will reply with sizing help or order details shortly.
                      </p>
                      <button onClick={() => setSent(false)} className="text-royal font-semibold text-sm hover:underline">
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-display font-bold text-xl text-navy mb-1">Send Us a Message</h3>
                      <p className="text-slate-400 text-sm mb-6">Tell us what you need and we’ll help you choose the right pair.</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormInput label="First Name *" id="cf-fn" placeholder="John" required />
                          <FormInput label="Last Name *" id="cf-ln" placeholder="Kamau" required />
                          <FormInput label="Email *" id="cf-em" type="email" placeholder="john@example.com" required />
                          <FormInput label="Phone" id="cf-ph" type="tel" placeholder="+254 712 345 678" />
                        </div>
                        <FormInput label="Preferred Style" id="cf-co" placeholder="e.g. Running shoes" />
                        <FormSelect
                          label="Subject *"
                          id="cf-sub"
                          required
                          options={['Select a subject...', 'Order Help', 'Product Availability', 'Sizing Advice', 'Exchange Request', 'Delivery Question', 'Wholesale Inquiry', 'Other']}
                        />
                        <FormTextarea label="Message *" id="cf-msg" rows={5} placeholder="Tell us how we can help..." required />
                        <div className="flex items-start gap-3">
                          <input type="checkbox" id="consent" required className="mt-1" />
                          <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                            I agree to StrideStep Shoes collecting my data for the purpose of responding to my inquiry. See our{' '}
                            <a href="#" className="text-royal">Privacy Policy</a>.
                          </label>
                        </div>
                        <BtnPrimary type="submit" disabled={sending} className="w-full justify-center py-4 text-base">
                          {sending ? 'Sending...' : 'Send Message →'}
                        </BtnPrimary>
                      </form>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <a
                    href="https://wa.me/254712345678"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm no-underline hover:bg-[#1ebe5a] transition-colors"
                  >
                    💬 Chat on WhatsApp
                  </a>
                  <Link
                    to="/services"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-amber-brand text-white font-semibold text-sm no-underline hover:bg-amber-600 transition-colors"
                  >
                    👟 Browse Collection
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn className="mt-16">
            <h2 className="font-display font-bold text-xl text-navy mb-4">Find Our Store</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100" style={{ height: '360px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.757721937707!2d36.80258!3d-1.2696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0x27e9b2b5ad6a2c1f!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="StrideStep Shoes Nairobi Store"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <SectionTag>FAQ</SectionTag>
            <SectionHeading>Quick Answers</SectionHeading>
          </FadeIn>
          <FadeIn>
            <FAQList />
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function FAQList() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: 'How quickly do you respond to questions?', a: 'We reply to most inquiries within a few hours during business hours and can help with sizing, availability, or delivery guidance.' },
    { q: 'Do you offer home delivery?', a: 'Yes. We deliver selected pairs to customers across Nairobi for a simple and convenient checkout experience.' },
    { q: 'Can I visit the store in person?', a: 'Absolutely. We welcome walk-ins at our Moi Avenue location and are happy to help you try on a few options.' },
    { q: 'What if I need a different size?', a: 'We can guide you through our exchange process and help you find the right fit quickly.' },
  ];
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-5 py-4 flex justify-between items-center font-semibold text-navy text-sm hover:bg-slate-50 transition-colors"
          >
            {faq.q}
            <span className={`text-slate-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
