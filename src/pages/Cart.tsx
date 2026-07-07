// src/pages/Quote.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { FadeIn, SectionTag, FormInput, FormSelect, FormTextarea, BtnPrimary } from '../components/ui';

const STEPS = ['Your Details', 'Style & Fit', 'Delivery Preferences', 'Review & Submit'];

export default function Cart() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [ref] = useState('LLQ-' + Math.floor(Math.random() * 90000 + 10000));
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  if (submitted) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-12 max-w-md w-full text-center shadow-lg">
        <span className="text-6xl block mb-5">✅</span>
        <h2 className="font-display font-bold text-2xl text-navy mb-2">Quote Request Received!</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">Our team will review your request and send a detailed quote to your email within 2 business hours.</p>
        <p className="text-xs text-slate-400 mb-6">Reference: <strong className="text-navy">{ref}</strong></p>
        <Link to="/"><BtnPrimary className="w-full justify-center">Back to Home</BtnPrimary></Link>
      </div>
    </div>
  );

  return (
    <>
      <section className="pt-28 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center gap-2 text-slate-400 text-sm justify-center mb-4">
              <Link to="/" className="hover:text-navy no-underline text-slate-400">Home</Link><span>/</span><span className="text-navy">Get a Quote</span>
            </div>
            <SectionTag>Free Consultation</SectionTag>
            <h1 className="font-display font-black text-4xl text-navy mt-2 mb-2">Book Your Shoe Visit</h1>
            <p className="text-slate-500 max-w-md mx-auto text-sm">Tell us about your style and fit needs, and we’ll help you find the right pair.</p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center mb-10 max-w-2xl mx-auto">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    i < step ? 'bg-royal text-white' :
                    i === step ? 'bg-amber-brand text-white shadow-lg' :
                    'bg-slate-200 text-slate-400'
                  }`}>
                    {i < step ? <Check size={14} /> : i + 1}
                  </div>
                  <span className={`text-xs mt-1.5 font-medium hidden sm:block ${i === step ? 'text-navy' : 'text-slate-400'}`}>{s}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 transition-colors ${i < step ? 'bg-royal' : 'bg-slate-200'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            {/* Step 1 */}
            {step === 0 && (
              <FadeIn>
                <h2 className="font-display font-bold text-xl text-navy mb-6">Your Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput label="First Name *" id="fn" placeholder="John" required />
                  <FormInput label="Last Name *" id="ln" placeholder="Kamau" required />
                  <FormInput label="Email Address *" id="em" type="email" placeholder="john@company.com" required />
                  <FormInput label="Phone Number *" id="ph" type="tel" placeholder="+254 700 000 000" required />
                  <FormInput label="Company Name" id="co" placeholder="Your Company Ltd" />
                  <FormSelect label="Company Type" id="ct" options={['Individual / Personal', 'Small Business (1–50)', 'Medium Business (51–250)', 'Large Enterprise (250+)']} />
                </div>
              </FadeIn>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <FadeIn>
                <h2 className="font-display font-bold text-xl text-navy mb-6">Style & Fit</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <FormSelect label="Shoe Type *" id="cargo" options={['Select shoe type...', 'Casual Shoes', 'Sports & Running', 'Formal Shoes', 'Boots', 'Sandals', 'Kids’ Shoes', 'Work Shoes', 'Other']} />
                  </div>
                  <FormInput label="Preferred Size" id="wt" type="number" placeholder="e.g. 42" min="1" />
                  <FormInput label="How many pairs?" id="pkg" type="number" placeholder="e.g. 2" min="1" />
                  <FormInput label="Budget (KES)" id="val" type="number" placeholder="e.g. 15000" />
                  <div className="sm:col-span-2">
                    <FormTextarea label="Fit or style notes" id="sp" rows={3} placeholder="Wide feet, arch support, neutral colors, gifting, etc." />
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Step 3 */}
            {step === 2 && (
              <FadeIn>
                <h2 className="font-display font-bold text-xl text-navy mb-6">Delivery Preferences</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput label="Preferred store *" id="pu" placeholder="Moi Avenue, Nairobi" required />
                  <FormInput label="Delivery address" id="del" placeholder="Your home or office" />
                  <FormInput label="Preferred visit date *" id="pd" type="date" required />
                  <FormInput label="Preferred delivery date" id="dd" type="date" />
                  <div className="sm:col-span-2">
                    <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">Services Needed *</p>
                    <div className="flex flex-wrap gap-2">
                      {['👟 Fitting help', '📦 Home delivery', '🎁 Gift wrapping', '🧼 Shoe care add-on', '👶 Kids’ sizing', '🏃 Sports advice'].map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                            services.includes(s) ? 'bg-navy border-navy text-white' : 'border-slate-200 text-slate-600 hover:border-navy hover:text-navy'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <FormSelect label="Delivery Option" id="ft" options={['Store pickup', 'Home delivery', 'Same-day pickup', 'Priority delivery']} />
                  <FormSelect label="Preferred Contact" id="inc" options={['Phone call', 'WhatsApp', 'Email', 'In-store visit']} />
                  <div className="sm:col-span-2">
                    <FormTextarea label="Additional Notes" id="notes" rows={3} placeholder="Any special requests or questions..." />
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Step 4 */}
            {step === 3 && (
              <FadeIn>
                <h2 className="font-display font-bold text-xl text-navy mb-6">Review & Submit</h2>
                <div className="bg-slate-50 rounded-xl p-5 mb-5">
                  <h3 className="font-semibold text-navy text-sm mb-3 pb-3 border-b border-slate-200">Quote Request Summary</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[['Service', services.join(', ') || 'Not selected'], ['Delivery Option', 'Store pickup'], ['Shoe Type', 'Casual Shoes'], ['Budget', 'As specified']].map(([k, v]) => (
                      <div key={k}>
                        <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">{k}</p>
                        <p className="font-semibold text-navy">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-800">
                  ✅ Our team will review your request and send a personalised recommendation to your email within <strong>2 business hours</strong>.
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+254712345678" className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-navy no-underline transition-colors">📞 +254 712 345 678</a>
                  <a href="https://wa.me/254712345678" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] rounded-xl text-sm font-medium text-white no-underline">💬 WhatsApp</a>
                </div>
              </FadeIn>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
              {step > 0 ? (
                <button onClick={() => setStep(s => s - 1)} className="flex items-center gap-2 px-5 py-3 border-2 border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-navy hover:text-navy transition-colors">
                  <ArrowLeft size={14} /> Back
                </button>
              ) : <div />}
              {step < STEPS.length - 1 ? (
                <BtnPrimary onClick={() => setStep(s => s + 1)}>
                  Continue <ArrowRight size={14} />
                </BtnPrimary>
              ) : (
                <BtnPrimary onClick={() => setSubmitted(true)}>
                  Submit Quote Request <ArrowRight size={14} />
                </BtnPrimary>
              )}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mt-8">
            {[['⚡', 'Fast Response', 'Quote within 2 business hours'], ['💰', 'Competitive Rates', 'No hidden charges'], ['🤝', 'No Obligation', 'Free, no commitment needed']].map(([icon, t, d]) => (
              <div key={t} className="bg-white rounded-xl p-5 text-center shadow-sm">
                <span className="text-2xl block mb-2">{icon}</span>
                <h4 className="font-semibold text-navy text-sm mb-1">{t}</h4>
                <p className="text-slate-400 text-xs">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
