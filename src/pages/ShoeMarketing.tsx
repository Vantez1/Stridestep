import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { BtnOutline, BtnPrimary, FadeIn, SectionHeading, SectionTag } from '../components/ui';

const FEATURES = [
  {
    icon: '👟',
    title: 'Footwear-focused strategy',
    description: 'Creative campaigns tailored to shoe launches, retail activations, and e-commerce growth.',
  },
  {
    icon: '📦',
    title: 'End-to-end execution',
    description: 'From product photography and social ads to order fulfilment and retail distribution.',
  },
  {
    icon: '🚀',
    title: 'Fast go-to-market',
    description: 'Launch new drops faster with a marketing system built for timing, storytelling, and sales.',
  },
];

const PACKAGES = [
  {
    title: 'Brand Builder',
    description: 'Position your label with compelling storytelling, influencer partnerships, and retail outreach.',
    items: ['Visual identity', 'Story-driven ads', 'Retail pitch support'],
  },
  {
    title: 'Launch Engine',
    description: 'Drive demand for every new shoe drop with digital campaigns and local activation.',
    items: ['Pre-launch buzz', 'Email + SMS funnels', 'Launch-day fulfilment'],
  },
  {
    title: 'Commerce Growth',
    description: 'Convert shoppers with e-commerce optimisation, repeat purchase flows, and reliable delivery.',
    items: ['Product page conversion', 'Re-targeting', 'Fast fulfilment'],
  },
];

export default function ShoeMarketing() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-navy text-white py-24 sm:py-32">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(248,205,113,0.35),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.35),_transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <div className="max-w-xl">
                <SectionTag>Shoe Marketing System</SectionTag>
                <SectionHeading className="text-white">Launch footwear campaigns that move product fast.</SectionHeading>
                <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed">
                  Build a brand-led marketing system for athletic, streetwear, and fashion footwear. From product storytelling to distribution and digital performance, we help shoe labels scale every drop.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <BtnPrimary className="text-base px-8 py-4">Speak with our team</BtnPrimary>
                  </Link>
                  <Link to="/quote">
                    <BtnOutline className="text-base px-8 py-4">Request a proposal</BtnOutline>
                  </Link>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <div className="font-semibold text-lg">5x</div>
                    <div className="mt-2">Average launch engagement lift</div>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <div className="font-semibold text-lg">24/7</div>
                    <div className="mt-2">Order fulfilment support for campaigns</div>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <div className="font-semibold text-lg">150+</div>
                    <div className="mt-2">Retail and ecommerce activations delivered</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 shadow-2xl backdrop-blur-xl">
                  <div className="rounded-[1.75rem] bg-slate-950 p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Next drop</div>
                        <h3 className="mt-2 text-3xl font-bold text-white">Aurora Runner</h3>
                      </div>
                      <div className="text-4xl">👟</div>
                    </div>
                    <div className="space-y-4 text-slate-300">
                      <p>Complete launch package for high-volume footwear releases. Includes creative, influencer seeding, and premium fulfillment.</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-3xl bg-slate-900 p-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-amber-brand mb-2">Target</div>
                          <div className="font-semibold">Gen Z athletes</div>
                        </div>
                        <div className="rounded-3xl bg-slate-900 p-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-amber-brand mb-2">Channels</div>
                          <div className="font-semibold">Social, ads, retail pop-up</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-10 top-10 h-28 w-28 rounded-full bg-amber-brand/20 blur-3xl" />
                <div className="pointer-events-none absolute -left-12 bottom-6 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <SectionTag>System strengths</SectionTag>
                <SectionHeading>Marketing built for shoe brands</SectionHeading>
                <p className="mt-5 text-slate-600 leading-relaxed max-w-xl">
                  We combine design, digital advertising, and retail operations so your new styles reach shelves, online carts, and eager customers on launch day.
                </p>
                <div className="mt-10 space-y-6">
                  {FEATURES.map(feature => (
                    <div key={feature.title} className="flex gap-4">
                      <div className="min-w-[52px] h-14 rounded-3xl bg-amber-brand/10 text-2xl flex items-center justify-center">{feature.icon}</div>
                      <div>
                        <h3 className="font-semibold text-navy">{feature.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mt-1">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid gap-5 sm:grid-cols-2">
                {['Footwear brands', 'Launch campaigns', 'In-store activations', 'Digital commerce'].map((label, index) => (
                  <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="text-3xl mb-4">{index % 2 === 0 ? '✨' : '📈'}</div>
                    <h3 className="font-semibold text-lg text-navy">{label}</h3>
                    <p className="text-slate-500 text-sm mt-2">Custom services and support for every phase of your shoe marketing journey.</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <SectionTag>Campaign packages</SectionTag>
            <SectionHeading>Choose the package that matches your launch.</SectionHeading>
          </FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map(pkg => (
              <FadeIn key={pkg.title} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-xl text-navy">{pkg.title}</h3>
                    <p className="text-slate-500 text-sm mt-2">{pkg.description}</p>
                  </div>
                  <div className="text-3xl">{pkg.title === 'Brand Builder' ? '🎨' : pkg.title === 'Launch Engine' ? '🚀' : '🛒'}</div>
                </div>
                <ul className="space-y-3 text-slate-600 text-sm">
                  {pkg.items.map(item => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-1 text-amber-brand">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="rounded-[2rem] bg-white p-10 shadow-2xl border border-slate-200">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-brand/10 px-4 py-2 text-amber-brand text-xs uppercase tracking-[0.28em] font-semibold mb-6">
                  <Sparkles size={16} /> Success story
                </div>
                <p className="text-slate-700 text-lg font-semibold leading-relaxed">
                  “With StrideStep Shoes’ marketing system, our brand scaled from a single pop-up to national retail distribution in 90 days. The campaign was precise, fast, and perfectly timed for the season.”
                </p>
                <div className="mt-8 text-slate-500 text-sm">
                  <p className="font-semibold text-navy">Naomi W.</p>
                  <p>Founder, Kiza Footwear</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-navy to-slate-800 text-white p-12 shadow-2xl overflow-hidden relative">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-brand/20 blur-3xl" />
                <div className="absolute left-0 top-24 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="relative">
                  <h3 className="font-display text-3xl font-bold leading-tight">Ready to launch your next shoe drop?</h3>
                  <p className="mt-6 text-slate-200 leading-relaxed">
                    We deliver launch strategy, creative activation, and fulfilment support so your footwear brand lands with momentum and keeps selling.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <BtnPrimary className="bg-white text-slate-950">Book a call</BtnPrimary>
                    </Link>
                    <Link to="/quote">
                      <BtnOutline className="border-white/40 text-white hover:bg-white/10">Request a quote</BtnOutline>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
