// src/pages/OrderTracking.tsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Package, Truck, CheckCircle, Clock, MapPin, ArrowRight } from 'lucide-react';
import { FadeIn, SectionTag, BtnPrimary, StatusBadge } from '../components/ui';
import { DEMO_SHIPMENTS } from '../data';
import type { Shipment } from '../types';

const STATUS_STEPS = [
  { key: 'pending', label: 'Pending', icon: <Clock size={14} /> },
  { key: 'picked_up', label: 'Picked Up', icon: <Package size={14} /> },
  { key: 'in_transit', label: 'In Transit', icon: <Truck size={14} /> },
  { key: 'at_warehouse', label: 'At Warehouse', icon: <MapPin size={14} /> },
  { key: 'out_for_delivery', label: 'Out for Delivery', icon: <ArrowRight size={14} /> },
  { key: 'delivered', label: 'Delivered', icon: <CheckCircle size={14} /> },
];

function getStepIndex(status: Shipment['status']) {
  return STATUS_STEPS.findIndex(s => s.key === status);
}

function ShipmentResult({ shipment }: { shipment: Shipment }) {
  const activeStep = getStepIndex(shipment.status);
  const badgeVariant = shipment.status === 'delivered' ? 'delivered' : shipment.status === 'pending' ? 'pending' : 'transit';

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy to-royal p-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Order Number</p>
          <p className="font-display font-bold text-xl text-white">{shipment.trackingNumber}</p>
        </div>
        <StatusBadge variant={badgeVariant}>
          {shipment.status === 'in_transit' ? '� In Transit'
            : shipment.status === 'delivered' ? '✅ Delivered'
            : shipment.status === 'picked_up' ? '📦 Picked Up'
            : '⏳ Pending'}
        </StatusBadge>
      </div>

      <div className="p-6 space-y-6">
        {/* Route */}
        <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4">
          <div className="flex-1">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">From</p>
            <p className="font-semibold text-navy text-sm">{shipment.from}</p>
            <p className="text-xs text-slate-400 mt-0.5">{shipment.pickupDate}</p>
          </div>
          <ArrowRight size={20} className="text-amber-brand shrink-0" />
          <div className="flex-1 text-right">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">To</p>
            <p className="font-semibold text-navy text-sm">{shipment.to}</p>
            <p className="text-xs text-slate-400 mt-0.5">ETA: {shipment.estimatedDelivery}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between relative">
            <div className="absolute left-0 right-0 top-4 h-0.5 bg-slate-200 z-0" />
            <div
              className="absolute left-0 top-4 h-0.5 bg-royal z-0 transition-all duration-700"
              style={{ width: `${(activeStep / (STATUS_STEPS.length - 1)) * 100}%` }}
            />
            {STATUS_STEPS.map((step, i) => (
              <div key={step.key} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  i < activeStep ? 'bg-royal text-white' :
                  i === activeStep ? 'bg-amber-brand text-white shadow-lg shadow-amber-brand/30' :
                  'bg-slate-200 text-slate-400'
                }`}>
                  {step.icon}
                </div>
                <span className={`text-xs font-medium text-center w-16 leading-tight ${
                  i <= activeStep ? 'text-navy' : 'text-slate-400'
                }`}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Cargo Type', value: shipment.type },
            { label: 'Weight', value: shipment.weight },
            { label: 'Mode', value: shipment.mode },
            { label: 'Driver', value: shipment.driver },
          ].map(d => (
            <div key={d.label} className="bg-slate-50 rounded-xl p-3">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{d.label}</p>
              <p className="text-sm font-semibold text-navy">{d.value}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-display font-semibold text-navy mb-4">Order Timeline</h3>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-slate-200" />
            {shipment.events.map((ev, i) => (
              <div key={i} className="relative pb-5 last:pb-0">
                <div className={`absolute -left-4 top-1 w-4 h-4 rounded-full border-2 border-white ${
                  ev.status === 'completed' ? 'bg-royal' :
                  ev.status === 'current' ? 'bg-amber-brand shadow-md shadow-amber-brand/40' :
                  'bg-slate-200'
                }`} />
                <p className="text-xs text-slate-400 mb-0.5">{ev.time}</p>
                <p className="text-sm font-semibold text-navy">{ev.event}</p>
                <p className="text-xs text-slate-500 mt-0.5">{ev.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
          <BtnPrimary onClick={() => alert('SMS updates enabled! You\'ll receive updates for this order.')}>
            🔔 Get SMS Updates
          </BtnPrimary>
          <button
            onClick={() => window.print()}
            className="px-5 py-3 rounded-xl border-2 border-slate-200 text-sm font-semibold text-slate-700 hover:border-navy hover:text-navy transition-colors"
          >
            🖨️ Print
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OrderTracking() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [submitted, setSubmitted] = useState(!!searchParams.get('q'));
  const [shipment, setShipment] = useState<Shipment | null>(
    searchParams.get('q') ? (DEMO_SHIPMENTS[searchParams.get('q')!] ?? null) : null
  );
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (searchParams.get('q')) {
      const q = searchParams.get('q')!;
      const found = DEMO_SHIPMENTS[q] ?? null;
      setShipment(found);
      setNotFound(!found);
      setSubmitted(true);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = DEMO_SHIPMENTS[query.trim()] ?? null;
    setShipment(found);
    setNotFound(!found);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #0a2d46, #0F3D5E)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <span>Home</span><span>/</span><span className="text-white">Track Order</span>
            </div>
            <SectionTag>Live Tracking</SectionTag>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-2 mb-3">Track Your Order</h1>
            <p className="text-white/70 text-lg max-w-lg">
              Enter your order number to follow your pair from our store to your doorstep.
            </p>
          </FadeIn>

          <FadeIn delay={150} className="mt-8 max-w-2xl">
            <form onSubmit={handleSearch} className="flex gap-3">
              <div className="flex-1 relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Enter order number e.g. SS-1048"
                  className="w-full pl-10 pr-4 py-4 rounded-xl border-0 bg-white/12 text-white placeholder:text-white/40 text-sm outline-none focus:bg-white/18 transition-colors"
                />
              </div>
              <BtnPrimary type="submit" className="px-7 py-4">Track Now</BtnPrimary>
            </form>
            <p className="text-white/40 text-xs mt-3">
              Try: <button onClick={() => setQuery('SS-1048')} className="text-amber-brand hover:underline">SS-1048</button>
              {' · '}
              <button onClick={() => setQuery('SS-2091')} className="text-amber-brand hover:underline">SS-2091</button>
              {' · '}
              <button onClick={() => setQuery('SS-3157')} className="text-amber-brand hover:underline">SS-3157</button>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Result */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {submitted && shipment && (
            <FadeIn><ShipmentResult shipment={shipment} /></FadeIn>
          )}
          {submitted && notFound && (
            <FadeIn>
              <div className="text-center py-20">
                <span className="text-6xl block mb-4">🔍</span>
                <h2 className="font-display font-bold text-2xl text-navy mb-2">No order found</h2>
                <p className="text-slate-500 max-w-sm mx-auto">
                  No order found for <strong>"{query}"</strong>. Please check your order number and try again.
                </p>
              </div>
            </FadeIn>
          )}
          {!submitted && (
            <FadeIn>
              <div className="text-center py-20">
                <span className="text-6xl block mb-5">📦</span>
                <h2 className="font-display font-bold text-2xl text-navy mb-2">Enter Your Order Number</h2>
                <p className="text-slate-500 max-w-sm mx-auto mb-8">
                  Your order number appears in your confirmation email, SMS, or customer portal.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-left">
                  {['Order confirmation email', 'Customer portal → My Orders', 'Delivery receipt'].map(s => (
                    <div key={s} className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-amber-brand font-bold">✓</span>{s}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <SectionTag>Real-Time Visibility</SectionTag>
            <h2 className="font-display font-bold text-2xl text-navy mt-1">How Order Tracking Works</h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📡', title: 'Live Delivery Updates', desc: 'Stay informed as your order moves from our store to your doorstep.' },
              { icon: '📱', title: 'SMS & WhatsApp', desc: 'Automatic notifications at every milestone — packing, dispatch, and delivery.' },
              { icon: '🌐', title: 'Online Portal', desc: 'Full order history and status updates available 24/7 in your portal.' },
              { icon: '✅', title: 'Delivery Confirmation', desc: 'Receive a clear confirmation as soon as your order arrives.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="text-center p-5">
                  <span className="text-4xl block mb-3">{item.icon}</span>
                  <h4 className="font-display font-semibold text-navy text-sm mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
