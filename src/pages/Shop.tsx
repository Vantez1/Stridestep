// src/pages/Services.tsx
import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn, SectionTag, SectionHeading, BtnPrimary } from '../components/ui';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #0a2d46, #1565C0)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors no-underline text-white/50">Home</Link>
            <span>/</span><span className="text-white">Services</span>
          </div>
          <SectionTag>Our Services</SectionTag>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-2 mb-3">Footwear for Every Step</h1>
          <p className="text-white/70 text-lg max-w-xl">From everyday casuals to performance runners and kids’ first pairs, we help you find the perfect fit with comfort, style, and confidence.</p>
        </div>
      </section>

      {/* Quick nav */}
      <div className="sticky top-[70px] z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {SERVICES.map(s => (
              <a key={s.id} href={`#${s.id}`} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-navy hover:text-white transition-all no-underline whitespace-nowrap border border-slate-200">
                {s.icon} {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      
    {/* Products */}
<section className="py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    <SectionTag>Featured Products</SectionTag>

    <h2 className="font-display font-black text-3xl text-slate-900 mt-2 mb-8">
      Shop Our Collection
    </h2>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</section>

      {/* Service sections */}
      {SERVICES.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-20 ${idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <FadeIn direction={idx % 2 === 0 ? 'left' : 'right'}>
                <SectionTag>{svc.title}</SectionTag>
                <SectionHeading className="mb-4">{svc.title} Services</SectionHeading>
                <p className="text-slate-500 leading-relaxed mb-6">{svc.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-royal/10 text-royal flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link to="/quote"><BtnPrimary>Get a Quote <ArrowRight size={14} /></BtnPrimary></Link>
                  <Link to="/contact" className="px-5 py-3 rounded-xl border-2 border-slate-200 text-sm font-semibold text-slate-700 hover:border-navy hover:text-navy transition-colors no-underline inline-flex items-center">Talk to an Expert</Link>
                </div>
              </FadeIn>
              <FadeIn direction={idx % 2 === 0 ? 'right' : 'left'}>
                <div className={`rounded-2xl p-10 text-center ${idx % 2 === 0 ? 'bg-gradient-to-br from-navy to-royal' : 'bg-gradient-to-br from-amber-brand to-amber-light'}`}>
                  <span className="text-8xl block mb-4">{svc.icon}</span>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{svc.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F3D5E, #1565C0)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display font-black text-3xl text-white mb-3">Ready to Find Your Fit?</h2>
            <p className="text-white/70 mb-8">Book a visit or request a personalised recommendation for your next pair.</p>
            <Link to="/quote"><BtnPrimary className="text-base px-8 py-4">Book a Visit <ArrowRight size={16} /></BtnPrimary></Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
