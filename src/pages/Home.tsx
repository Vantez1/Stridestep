import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MapPin, Truck, ChevronRight } from 'lucide-react';
import { FadeIn, SectionTag, SectionHeading, BtnPrimary, BtnOutline } from '../components/ui';
import { useInView, useCounter } from '../hooks';
import { SERVICES, STATS, TESTIMONIALS, INDUSTRIES } from '../data';

function StatCell({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView(0.5);
  const count = useCounter(value, inView);
  return (
    <div ref={ref} className="text-center relative">
      <div className="font-display font-black text-5xl text-white leading-none mb-2">
        {count.toLocaleString()}<span className="text-amber-brand">{suffix}</span>
      </div>
      <div className="text-sm text-white/65 font-medium">{label}</div>
    </div>
  );
}

function TrackingWidget() {
  const [val, setVal] = useState('');
  const navigate = useNavigate();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (val.trim()) navigate(`/tracking?q=${encodeURIComponent(val.trim())}`);
  };
  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-navy/20">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Track Your Order</p>
      <form onSubmit={submit} className="flex gap-2">
        <input
          value={val}
          onChange={e => setVal(e.target.value)}
          placeholder="Enter order number — e.g. SS-1048"
          className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-royal transition-colors"
        />
        <BtnPrimary type="submit">Track</BtnPrimary>
      </form>
      <p className="text-xs text-slate-400 mt-3">
        Demo: <button onClick={() => setVal('SS-1048')} className="text-royal font-semibold hover:underline">SS-1048</button>
        {' '}&middot;{' '}
        <button onClick={() => setVal('SS-3157')} className="text-royal font-semibold hover:underline">SS-3157</button>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section
        className="min-h-screen flex items-center relative overflow-hidden pt-20"
        style={{ background: 'linear-gradient(135deg, #0a2d46 0%, #0F3D5E 50%, #1565C0 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{ background: 'url(/hero-shoes.svg) center/cover no-repeat' }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-brand/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-royal/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-light bg-amber-brand/15 border border-amber-brand/30 px-4 py-2 rounded-full mb-6">
                👟 Every Step Starts with the Right Shoe
              </span>
              <h1 className="font-display font-black text-5xl sm:text-6xl text-white leading-[1.05] mb-5">
                Step Into<br />
                <span className="text-amber-brand">Style</span><br />
                and Comfort
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
                Discover quality footwear for men, women, and kids — from sports and casual pairs to formal favourites and everyday essentials.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/services">
                  <BtnPrimary className="text-base px-8 py-4">
                    Shop Best Sellers <ArrowRight size={16} />
                  </BtnPrimary>
                </Link>
                <Link to="/tracking">
                  <BtnOutline className="text-base px-8 py-4">
                    Track Order
                  </BtnOutline>
                </Link>
              </div>
              <div className="flex gap-8 pt-6 border-t border-white/15">
                {[{ n: '15k+', l: 'Pairs sold' }, { n: '4.9/5', l: 'Customer rating' }, { n: '6', l: 'Convenient stores' }].map(s => (
                  <div key={s.l}>
                    <div className="font-display font-black text-2xl text-white">{s.n}</div>
                    <div className="text-xs text-white/55 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="animate-float">
                <img src="/hero-shoes.svg" alt="StrideStep Shoes collection" className="w-full drop-shadow-2xl" />
              </div>
              <TrackingWidget />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-navy py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              { icon: <Shield size={16} />, text: 'Comfort-first fitting' },
              { icon: <Clock size={16} />, text: 'Fast home delivery' },
              { icon: <Shield size={16} />, text: 'Easy exchanges' },
              { icon: <MapPin size={16} />, text: 'Visit us at Moi Avenue' },
              { icon: <Truck size={16} />, text: 'Online ordering made simple' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <span className="text-amber-brand">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-14">
            <SectionTag>What We Offer</SectionTag>
            <SectionHeading>Find Your Perfect Fit</SectionHeading>
            <p className="text-slate-500 mt-3 max-w-xl text-base leading-relaxed">
              From daily staples to standout occasion shoes, our collection is curated for comfort, style, and every step of the day.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.id} delay={i * 60}>
                <Link
                  to={`/services#${svc.id}`}
                  className="group block bg-white rounded-2xl p-6 border border-slate-100 hover:border-royal/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline h-full"
                >
                  <span className="text-3xl mb-4 block">{svc.icon}</span>
                  <h3 className="font-display font-semibold text-base text-navy mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.description}</p>
                  <span className="text-royal text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    See options <ChevronRight size={14} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F3D5E 0%, #1565C0 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map(s => (
              <StatCell key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                  <img src="/storefront.svg" alt="StrideStep Shoes store" className="w-full object-contain" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-amber-brand rounded-2xl p-5 shadow-xl">
                  <div className="font-display font-black text-3xl text-white leading-none">98%</div>
                  <div className="text-white/85 text-xs mt-1 font-medium">Fit satisfaction</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <SectionTag>Why StrideStep</SectionTag>
              <SectionHeading className="mb-4">Comfort and style, every step of the way</SectionHeading>
              <p className="text-slate-500 leading-relaxed mb-8">
                We blend quality craftsmanship, thoughtful styling, and personal service so every pair feels right from the first wear.
              </p>
              <div className="space-y-5">
                {[
                  { icon: '👣', title: 'Comfort-first design', desc: 'Cushioned soles and supportive fits for everyday movement.' },
                  { icon: '🛍️', title: 'Curated collections', desc: 'Hand-picked styles for work, weekends, sports, and special moments.' },
                  { icon: '🚚', title: 'Fast delivery', desc: 'Order online and get your shoes delivered to your doorstep with ease.' },
                  { icon: '🤝', title: 'Helpful advice', desc: 'Our team helps you choose the right pair for your lifestyle and needs.' },
                ].map(f => (
                  <div key={f.title} className="flex gap-4">
                    <span className="w-11 h-11 rounded-xl bg-royal/8 flex items-center justify-center text-xl shrink-0">{f.icon}</span>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-0.5">{f.title}</h4>
                      <p className="text-slate-500 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <BtnPrimary>Our Story <ArrowRight size={14} /></BtnPrimary>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <SectionTag>Find Your Style</SectionTag>
            <SectionHeading>Something for every occasion</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <FadeIn key={ind.title} delay={i * 70}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-royal/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                  <span className="text-4xl mb-3 block">{ind.icon}</span>
                  <h3 className="font-display font-semibold text-navy mb-2">{ind.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{ind.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <SectionTag>What Our Customers Say</SectionTag>
            <SectionHeading>Trusted by shoppers across Nairobi</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.id} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="text-amber-brand text-sm mb-3">{'★'.repeat(t.rating)}</div>
                  <p className="text-slate-600 text-sm leading-relaxed italic flex-1 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-royal flex items-center justify-center font-display font-bold text-white text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(15,61,94,0.96), rgba(21,101,192,0.92)), url(/images/cta-bg.jpg) center/cover' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-brand/8 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <SectionTag>Visit or Order Online</SectionTag>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mt-2 mb-4 leading-tight">
              Step into a better shoe shopping experience
            </h2>
            <p className="text-white/70 text-lg mb-8">Browse the latest styles, pick your fit, and enjoy fast delivery anywhere in Nairobi.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services"><BtnPrimary className="text-base px-8 py-4">Browse Collection <ArrowRight size={16} /></BtnPrimary></Link>
              <Link to="/contact"><BtnOutline className="text-base px-8 py-4">Visit Our Store</BtnOutline></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
