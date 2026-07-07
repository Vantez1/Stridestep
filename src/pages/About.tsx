import { Link } from 'react-router-dom';
import { FadeIn, SectionTag, SectionHeading, BtnPrimary } from '../components/ui';

const MILESTONES = [
  { year: '2020', title: 'First Storefront', desc: 'Opened our first boutique at Moi Avenue with a focus on comfort, style, and personal service.' },
  { year: '2021', title: 'Expanded Collections', desc: 'Added sports, kids, and formal categories to serve more lifestyles and occasions.' },
  { year: '2023', title: 'Online Ordering', desc: 'Launched home delivery and simple order tracking for busy shoppers across Nairobi.' },
  { year: '2025', title: 'Growing Community', desc: 'Built a reputation for fit advice, reliable delivery, and quality footwear for every step.' },
];

const TEAM = [
  { name: 'Njeri Maina', role: 'Founder & Store Lead', initials: 'NM', gradient: 'from-navy to-royal', bio: 'Passionate about helping customers find the right pair for work, travel, and everyday life.' },
  { name: 'Wambui Kibet', role: 'Head of Retail', initials: 'WK', gradient: 'from-amber-brand to-amber-light', bio: 'Keeps our store experience smooth, welcoming, and stylish for every visitor.' },
  { name: 'Kevin Otieno', role: 'E-Commerce Manager', initials: 'KO', gradient: 'from-emerald-700 to-emerald-500', bio: 'Ensures online ordering and delivery updates feel simple and dependable.' },
  { name: 'Amina Yusuf', role: 'Customer Experience Lead', initials: 'AY', gradient: 'from-purple-800 to-purple-500', bio: 'Brings care, fit guidance, and thoughtful support to every customer journey.' },
];

const VALUES = [
  { icon: '👟', title: 'Comfort', desc: 'We choose soft cushioning, strong support, and well-made pairs that feel good from day one.' },
  { icon: '✨', title: 'Style', desc: 'Every collection is curated to balance trend, quality, and everyday wearability.' },
  { icon: '🚚', title: 'Convenience', desc: 'Online ordering, home delivery, and helpful support make shopping effortless.' },
  { icon: '💡', title: 'Guidance', desc: 'We help customers find the right fit with advice that feels personal, not pushy.' },
  { icon: '🌍', title: 'Community', desc: 'We serve families, professionals, and students across Nairobi with care and consistency.' },
  { icon: '🛡️', title: 'Trust', desc: 'Our customers come back because they know we stand behind the quality and service.' },
];

export default function About() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #0a2d46, #1565C0)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link to="/" className="hover:text-white no-underline text-white/50">Home</Link><span>/</span><span className="text-white">About</span>
          </div>
          <SectionTag>Our Story</SectionTag>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-2 mb-3">Shoes That Fit<br />Every Part of Life</h1>
          <p className="text-white/70 text-lg max-w-xl">StrideStep Shoes brings together quality footwear, smart styling, and friendly service for shoppers across Nairobi.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { bg: 'bg-navy', icon: '🎯', title: 'Our Mission', text: 'To make every shopper feel confident in their footwear choices with comfort-first styles that suit real life.' },
              { bg: 'bg-royal', icon: '🔭', title: 'Our Vision', text: 'To become Nairobi’s go-to destination for quality shoes that blend style, durability, and everyday ease.' },
              { bg: 'bg-amber-brand', icon: '💫', title: 'Our Purpose', text: 'Great shoes help people move through work, play, and celebration with comfort and confidence.' },
            ].map(card => (
              <FadeIn key={card.title}>
                <div className={`${card.bg} rounded-2xl p-8 text-white h-full`}>
                  <span className="text-4xl block mb-4">{card.icon}</span>
                  <h3 className="font-display font-bold text-lg text-white mb-3">{card.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <SectionTag>Our History</SectionTag>
              <SectionHeading className="mb-5">Built for Everyday Comfort</SectionHeading>
              <p className="text-slate-500 leading-relaxed mb-4">
                StrideStep Shoes began with a simple idea: people deserve footwear that feels as good as it looks. We set out to create a store that helps shoppers find dependable, stylish pairs for every part of their day.
              </p>
              <p className="text-slate-500 leading-relaxed mb-4">
                What started as a single storefront in Nairobi has grown into a trusted retail space offering men's, women's, kids', sports, and formal footwear along with convenient delivery options.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Today, shoppers visit us for fit advice, quality brands, and an experience that feels welcoming from the moment they walk in.
              </p>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative pl-8">
                <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-slate-200" />
                {MILESTONES.map(m => (
                  <div key={m.year} className="relative pb-7 last:pb-0">
                    <div className="absolute -left-8 top-1 w-5 h-5 rounded-full bg-amber-brand border-2 border-white shadow" />
                    <p className="text-xs font-bold text-amber-brand uppercase tracking-wider mb-1">{m.year}</p>
                    <h4 className="font-display font-semibold text-navy mb-1">{m.title}</h4>
                    <p className="text-slate-500 text-sm">{m.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <SectionTag>What We Stand For</SectionTag>
            <SectionHeading>Our Core Values</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 70}>
                <div className="border-l-4 border-amber-brand bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-display font-semibold text-navy mb-2">{v.icon} {v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <SectionTag>Our Team</SectionTag>
            <SectionHeading>Meet the People Behind StrideStep</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m, i) => (
              <FadeIn key={m.name} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
                  <div className={`h-40 bg-gradient-to-br ${m.gradient} flex items-center justify-center`}>
                    <span className="font-display font-black text-4xl text-white">{m.initials}</span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-semibold text-navy">{m.name}</h4>
                    <p className="text-amber-brand text-xs font-semibold mb-2">{m.role}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <SectionTag>Why Shoppers Return</SectionTag>
            <SectionHeading>Thoughtful service, every time</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {[
              { icon: '👞', title: 'Premium Quality', sub: 'Durable materials and great finishes' },
              { icon: '📍', title: 'Central Location', sub: 'Easy to visit in Nairobi CBD' },
              { icon: '🚚', title: 'Home Delivery', sub: 'Fast and convenient doorstep service' },
              { icon: '💬', title: 'Friendly Support', sub: 'Helpful advice when you need it' },
            ].map(c => (
              <FadeIn key={c.title}>
                <div className="text-center p-6 border border-slate-200 rounded-xl hover:border-amber-brand transition-colors">
                  <span className="text-3xl block mb-2">{c.icon}</span>
                  <h4 className="font-semibold text-navy text-sm">{c.title}</h4>
                  <p className="text-slate-400 text-xs mt-1">{c.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F3D5E, #1565C0)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display font-black text-3xl text-white mb-3">Visit us or shop online</h2>
            <p className="text-white/70 mb-8">Whether you are building a new wardrobe or replacing a favourite pair, we are here to help.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services"><BtnPrimary className="px-8 py-4">Browse Shoes</BtnPrimary></Link>
              <Link to="/contact" className="px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-sm hover:bg-white hover:text-navy transition-all no-underline">Visit Our Store</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
