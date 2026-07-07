// src/pages/Portal.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard, Truck, Navigation, FileText, Receipt,
  Bell, HeadphonesIcon, User, LogOut, Menu, ChevronRight, ArrowRight
} from 'lucide-react';
import { FormInput, FormSelect, FormTextarea, BtnPrimary, StatusBadge } from '../components/ui';

/* ─── Types ───────────────────────────────────────────────── */
type Panel = 'dashboard' | 'shipments' | 'track' | 'quotes' | 'invoices' | 'notifications' | 'support' | 'profile';

/* ─── Auth screens ────────────────────────────────────────── */
function LoginScreen({ onLogin, onRegister }: { onLogin: () => void; onRegister: () => void }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 1000);
  };
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="w-10 h-10 rounded-xl bg-amber-brand flex items-center justify-center font-display font-black text-white text-xl">SS</span>
          <span className="font-display font-black text-xl text-navy tracking-tight">StrideStep<span className="text-amber-brand">.</span></span>
        </div>
        <h2 className="font-display font-bold text-2xl text-navy mb-1">Welcome back</h2>
        <p className="text-slate-400 text-sm mb-8">Sign in to manage your orders, visits, and favourites.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput label="Email Address *" id="l-email" type="email" placeholder="demo@stridestepshoes.co.ke" defaultValue="demo@stridestepshoes.co.ke" required />
          <FormInput label="Password *" id="l-pw" type="password" placeholder="••••••••" defaultValue="StrideStep@2026" required />
          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-slate-500">
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <a href="#" className="text-royal hover:underline">Forgot password?</a>
          </div>
          <BtnPrimary type="submit" disabled={loading} className="w-full justify-center py-4 text-base">
            {loading ? 'Signing in…' : 'Sign In →'}
          </BtnPrimary>
        </form>
        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-200" /><span className="text-xs text-slate-400">OR</span><div className="flex-1 h-px bg-slate-200" />
        </div>
        <a href="https://wa.me/254712345678" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-slate-200 text-sm font-semibold text-slate-700 hover:border-[#25D366] hover:text-[#25D366] transition-colors no-underline mb-4">
          💬 Access via WhatsApp
        </a>
        <p className="text-center text-sm text-slate-400">
          No account? <button onClick={onRegister} className="text-royal font-semibold hover:underline">Create one free</button>
        </p>
        <div className="mt-5 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
          <strong>Demo:</strong> demo@stridestepshoes.co.ke / StrideStep@2026
        </div>
      </div>
    </div>
  );
}

function RegisterScreen({ onLogin }: { onLogin: () => void }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 1200);
  };
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="w-10 h-10 rounded-xl bg-amber-brand flex items-center justify-center font-display font-black text-white text-xl">SS</span>
          <span className="font-display font-black text-xl text-navy">StrideStep<span className="text-amber-brand">.</span></span>
        </div>
        <h2 className="font-display font-bold text-2xl text-navy mb-1">Create Your Account</h2>
        <p className="text-slate-400 text-sm mb-8">Join shoppers managing orders, size notes, and fitting appointments.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="First Name *" id="r-fn" placeholder="John" required />
            <FormInput label="Last Name *" id="r-ln" placeholder="Kamau" required />
          </div>
          <FormInput label="Email *" id="r-em" type="email" placeholder="john@company.com" required />
          <FormInput label="Phone *" id="r-ph" type="tel" placeholder="+254 700 000 000" required />
          <FormInput label="Company Name" id="r-co" placeholder="Your Company Ltd" />
          <FormInput label="Password *" id="r-pw" type="password" placeholder="Min. 8 characters" required />
          <BtnPrimary type="submit" disabled={loading} className="w-full justify-center py-4 text-base">
            {loading ? 'Creating account…' : 'Create Account →'}
          </BtnPrimary>
        </form>
        <p className="text-center text-sm text-slate-400 mt-5">
          Already have an account? <button onClick={() => window.location.reload()} className="text-royal font-semibold hover:underline">Sign in</button>
        </p>
      </div>
    </div>
  );
}

/* ─── Portal app (authenticated) ─────────────────────────── */
const NAV_ITEMS: { panel: Panel; icon: React.ReactNode; label: string; badge?: number }[] = [
  { panel: 'dashboard', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
  { panel: 'shipments', icon: <Truck size={18} />, label: 'My Orders', badge: 3 },
  { panel: 'track', icon: <Navigation size={18} />, label: 'Track Order' },
  { panel: 'quotes', icon: <FileText size={18} />, label: 'My Visits' },
  { panel: 'invoices', icon: <Receipt size={18} />, label: 'Invoices' },
  { panel: 'notifications', icon: <Bell size={18} />, label: 'Notifications', badge: 5 },
  { panel: 'support', icon: <HeadphonesIcon size={18} />, label: 'Support Tickets' },
  { panel: 'profile', icon: <User size={18} />, label: 'My Profile' },
];

function Sidebar({ active, setActive, onLogout, mobileOpen, setMobileOpen }: {
  active: Panel; setActive: (p: Panel) => void;
  onLogout: () => void; mobileOpen: boolean; setMobileOpen: (b: boolean) => void;
}) {
  return (
    <>
      {/* Overlay */}
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileOpen(false)} />}

      <aside className={`fixed top-0 left-0 h-full w-64 bg-navy z-40 flex flex-col transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-white/10">
          <span className="w-9 h-9 rounded-xl bg-amber-brand flex items-center justify-center font-display font-black text-white">SS</span>
          <span className="font-display font-black text-lg text-white">StrideStep<span className="text-amber-brand">.</span></span>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 px-5 mb-2">Main</p>
          {NAV_ITEMS.slice(0, 5).map(item => (
            <SidebarItem key={item.panel} item={item} active={active === item.panel} onClick={() => { setActive(item.panel); setMobileOpen(false); }} />
          ))}
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 px-5 mt-5 mb-2">Account</p>
          {NAV_ITEMS.slice(5).map(item => (
            <SidebarItem key={item.panel} item={item} active={active === item.panel} onClick={() => { setActive(item.panel); setMobileOpen(false); }} />
          ))}
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 px-5 mt-5 mb-2">Quick Links</p>
          <Link to="/quote" className="flex items-center gap-3 px-5 py-3 text-white/60 text-sm font-medium hover:text-white hover:bg-white/8 transition-all no-underline">
            <FileText size={18} /> Book a Visit
          </Link>
          <Link to="/" className="flex items-center gap-3 px-5 py-3 text-white/60 text-sm font-medium hover:text-white hover:bg-white/8 transition-all no-underline">
            <ChevronRight size={18} /> Back to Website
          </Link>
        </nav>

        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-5 py-4 text-white/50 text-sm font-medium hover:text-white hover:bg-red-500/20 transition-all border-t border-white/10"
        >
          <LogOut size={18} /> Sign Out
        </button>
      </aside>
    </>
  );
}

function SidebarItem({ item, active, onClick }: { item: typeof NAV_ITEMS[0]; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all border-l-[3px] ${
        active
          ? 'bg-white/10 text-white border-amber-brand'
          : 'text-white/60 border-transparent hover:text-white hover:bg-white/8'
      }`}
    >
      {item.icon}
      <span className="flex-1 text-left">{item.label}</span>
      {item.badge && (
        <span className="bg-amber-brand text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>
      )}
    </button>
  );
}

/* ─── Panels ──────────────────────────────────────────────── */
function DashboardPanel({ setActive }: { setActive: (p: Panel) => void }) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-display font-bold text-2xl text-navy">Good morning, John 👋</h3>
        <p className="text-slate-400 text-sm mt-1">Here's what's happening with your orders and visits today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { n: '14', l: 'Total Orders', icon: '👟', color: 'bg-blue-50' },
          { n: '3', l: 'Ready for Pickup', icon: '📦', color: 'bg-amber-50' },
          { n: '2', l: 'Pending Visits', icon: '🗓️', color: 'bg-purple-50' },
          { n: '11', l: 'Delivered', icon: '✅', color: 'bg-emerald-50' },
        ].map(s => (
          <div key={s.l} className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-start">
            <div>
              <p className="font-display font-bold text-2xl text-navy">{s.n}</p>
              <p className="text-slate-400 text-xs mt-0.5">{s.l}</p>
            </div>
            <div className={`w-11 h-11 rounded-xl ${s.color} flex items-center justify-center text-xl`}>{s.icon}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <p className="font-semibold text-navy text-sm mb-3">Quick Actions</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { icon: '📡', label: 'Track Order', panel: 'track' as Panel },
          { icon: '📋', label: 'Book a Visit', panel: null },
          { icon: '🎧', label: 'Open Ticket', panel: 'support' as Panel },
          { icon: '🧾', label: 'View Orders', panel: 'invoices' as Panel },
        ].map(a => (
          a.panel ? (
            <button key={a.label} onClick={() => setActive(a.panel!)} className="bg-white rounded-xl p-4 text-center border border-slate-100 hover:border-royal/30 hover:shadow-sm transition-all cursor-pointer">
              <span className="text-2xl block mb-1.5">{a.icon}</span>
              <p className="text-xs font-semibold text-navy">{a.label}</p>
            </button>
          ) : (
            <Link key={a.label} to="/quote" className="bg-white rounded-xl p-4 text-center border border-slate-100 hover:border-royal/30 hover:shadow-sm transition-all no-underline block">
              <span className="text-2xl block mb-1.5">{a.icon}</span>
              <p className="text-xs font-semibold text-navy">{a.label}</p>
            </Link>
          )
        ))}
      </div>

      {/* Recent shipments */}
      <p className="font-semibold text-navy text-sm mb-3">Recent Orders</p>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              {['Order #', 'Route', 'Service', 'Date', 'Status', ''].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[
              { id: 'SS-1048', route: 'Moi Avenue → Westlands', svc: 'Home Delivery', date: 'Jun 20', status: 'transit' as const },
              { id: 'SS-2091', route: 'CBD → Kilimani', svc: 'Store Pickup', date: 'Jun 18', status: 'transit' as const },
              { id: 'SS-3157', route: 'CBD → Karen', svc: 'Home Delivery', date: 'Jun 17', status: 'delivered' as const },
              { id: 'SS-4022', route: 'Nairobi → Mombasa', svc: 'Express Delivery', date: 'Jun 15', status: 'delivered' as const },
            ].map(s => (
              <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3.5 font-semibold text-navy">{s.id}</td>
                <td className="px-4 py-3.5 text-slate-500">{s.route}</td>
                <td className="px-4 py-3.5 text-slate-500">{s.svc}</td>
                <td className="px-4 py-3.5 text-slate-500">{s.date}</td>
                <td className="px-4 py-3.5">
                  <StatusBadge variant={s.status}>{s.status === 'transit' ? '🚛 In Transit' : '✅ Delivered'}</StatusBadge>
                </td>
                <td className="px-4 py-3.5">
                  <Link to={`/tracking?q=${s.id}`} className="text-royal text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all no-underline">
                    Track <ArrowRight size={11} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ShipmentsPanel() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-display font-bold text-xl text-navy">My Orders</h3>
          <p className="text-slate-400 text-sm">All your order history in one place.</p>
        </div>
        <Link to="/quote" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-brand text-white text-sm font-semibold no-underline hover:bg-amber-600 transition-colors">
          + New Visit
        </Link>
      </div>
      <div className="flex gap-3 mb-5 flex-wrap">
        <input type="text" placeholder="Search order #, route…" className="px-4 py-2.5 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-royal transition-colors max-w-xs" />
        <select className="px-4 py-2.5 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-royal transition-colors">
          <option>All Statuses</option><option>In Transit</option><option>Delivered</option><option>Pending</option>
        </select>
      </div>
      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead className="bg-slate-50">
            <tr>{['Order #', 'From', 'To', 'Service', 'Items', 'Date', 'Status', 'Action'].map(h => (
              <th key={h} className="text-left px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>
            ))}</tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[
              { id: 'SS-1048', from: 'Moi Avenue, Nairobi', to: 'Westlands, Nairobi', svc: 'Home Delivery', wt: '2 pairs', date: 'Jun 20', status: 'transit' as const },
              { id: 'SS-2091', from: 'CBD, Nairobi', to: 'Kilimani, Nairobi', svc: 'Store Pickup', wt: '1 pair', date: 'Jun 18', status: 'transit' as const },
              { id: 'SS-3157', from: 'CBD, Nairobi', to: 'Karen, Nairobi', svc: 'Home Delivery', wt: '3 pairs', date: 'Jun 17', status: 'delivered' as const },
              { id: 'SS-4022', from: 'Nairobi', to: 'Mombasa', svc: 'Express Delivery', wt: '1 pair', date: 'Jun 15', status: 'delivered' as const },
              { id: 'SS-3882', from: 'Eldoret', to: 'Nairobi', svc: 'Store Pickup', wt: '2 pairs', date: 'Jun 10', status: 'delivered' as const },
            ].map(s => (
              <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3.5 font-semibold text-navy">{s.id}</td>
                <td className="px-4 py-3.5 text-slate-500 text-xs">{s.from}</td>
                <td className="px-4 py-3.5 text-slate-500 text-xs">{s.to}</td>
                <td className="px-4 py-3.5 text-slate-500">{s.svc}</td>
                <td className="px-4 py-3.5 text-slate-500">{s.wt}</td>
                <td className="px-4 py-3.5 text-slate-500">{s.date}</td>
                <td className="px-4 py-3.5"><StatusBadge variant={s.status}>{s.status === 'transit' ? '🚛 In Transit' : '✅ Delivered'}</StatusBadge></td>
                <td className="px-4 py-3.5"><Link to={`/tracking?q=${s.id}`} className="text-royal text-xs font-semibold no-underline hover:underline">Track →</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SupportPanel() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };
  return (
    <div>
      <h3 className="font-display font-bold text-xl text-navy mb-6">Support Tickets</h3>
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h4 className="font-semibold text-navy mb-4">Open a New Ticket</h4>
          {submitted ? (
            <div className="text-center py-8">
              <span className="text-4xl block mb-3">✅</span>
              <p className="font-semibold text-navy">Ticket created! We'll respond within 4 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormSelect label="Issue Type *" id="tk-type" required options={['Select issue...', 'Order Delay', 'Sizing Concern', 'Wrong Item', 'Delivery Issue', 'Return Request', 'Store Visit Question', 'Other']} />
              <FormInput label="Related Order # (optional)" id="tk-num" placeholder="SS-1048" />
              <FormTextarea label="Describe Your Issue *" id="tk-desc" rows={5} placeholder="Please provide as much detail as possible..." required />
              <FormSelect label="Priority" id="tk-pri" options={['Normal', 'High — Time Sensitive', 'Urgent — Order Blocked']} />
              <BtnPrimary type="submit" className="w-full justify-center">Submit Ticket →</BtnPrimary>
            </form>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-navy text-sm mb-4">Previous Tickets</h4>
          <div className="space-y-3">
            {[
              { id: 'TKT-4821', title: 'Order Update Delay', desc: 'SS-2091 status wasn\'t updating. Resolved in 2 hours.', status: 'Resolved', color: 'border-emerald-400' },
              { id: 'TKT-4799', title: 'Sizing Question', desc: 'Asked for wider-fitting guidance before pickup.', status: 'In Review', color: 'border-amber-brand' },
            ].map(t => (
              <div key={t.id} className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${t.color}`}>
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold text-navy text-sm">{t.id} — {t.title}</p>
                  <StatusBadge variant={t.status === 'Resolved' ? 'delivered' : 'transit'}>{t.status}</StatusBadge>
                </div>
                <p className="text-slate-400 text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-slate-50 rounded-xl">
            <p className="font-semibold text-navy text-sm mb-3">Need immediate help?</p>
            <div className="space-y-2">
              <a href="tel:+254712345678" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-navy no-underline transition-colors">📞 +254 712 345 678</a>
              <a href="https://wa.me/254712345678" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-medium no-underline hover:bg-[#1ebe5a] transition-colors">💬 WhatsApp Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main portal component ───────────────────────────────── */
export default function Portal() {
  const [auth, setAuth] = useState<'login' | 'register' | 'app'>('login');
  const [activePanel, setActivePanel] = useState<Panel>('dashboard');
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const panelTitles: Record<Panel, string> = {
    dashboard: 'Dashboard', shipments: 'My Orders', track: 'Track Order',
    quotes: 'My Visits', invoices: 'Orders & Payments', notifications: 'Notifications',
    support: 'Support Tickets', profile: 'My Profile',
  };

  if (auth === 'login') return <LoginScreen onLogin={() => setAuth('app')} onRegister={() => setAuth('register')} />;
  if (auth === 'register') return <RegisterScreen onLogin={() => setAuth('app')} />;

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      <Sidebar
        active={activePanel}
        setActive={setActivePanel}
        onLogout={() => setAuth('login')}
        mobileOpen={mobileSidebar}
        setMobileOpen={setMobileSidebar}
      />

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileSidebar(true)} className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100">
              <Menu size={20} />
            </button>
            <h2 className="font-display font-semibold text-lg text-navy">{panelTitles[activePanel]}</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-brand to-amber-light flex items-center justify-center font-bold text-white text-sm">JK</div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-navy leading-none">John Kamau</p>
                <p className="text-xs text-slate-400 mt-0.5">demo@stridestepshoes.co.ke</p>
              </div>
            </div>
          </div>
        </header>

        {/* Panel content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activePanel === 'dashboard' && <DashboardPanel setActive={setActivePanel} />}
          {activePanel === 'shipments' && <ShipmentsPanel />}
          {activePanel === 'track' && (
            <div className="max-w-lg">
              <h3 className="font-display font-bold text-xl text-navy mb-6">Track Your Order</h3>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex gap-3 mb-4">
                  <input type="text" placeholder="e.g. SS-1048" className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-royal transition-colors" id="portal-track-input" />
                  <BtnPrimary onClick={() => { const v = (document.getElementById('portal-track-input') as HTMLInputElement)?.value; if (v) window.open(`/tracking?q=${v}`, '_blank'); }}>Track</BtnPrimary>
                </div>
                <p className="text-xs text-slate-400 mb-3">Or select a recent order:</p>
                <div className="space-y-2">
                  {['SS-1048', 'SS-2091'].map(id => (
                    <Link key={id} to={`/tracking?q=${id}`} className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl text-sm text-navy font-medium no-underline hover:bg-slate-100 transition-colors">
                      🚛 {id} <ArrowRight size={14} className="text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activePanel === 'quotes' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-bold text-xl text-navy">My Visits</h3>
                <Link to="/quote" className="px-4 py-2.5 rounded-xl bg-amber-brand text-white text-sm font-semibold no-underline hover:bg-amber-600 transition-colors">+ New Visit</Link>
              </div>
              <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full text-sm min-w-[600px]">
                  <thead className="bg-slate-50"><tr>{['Visit #', 'Service', 'Route', 'Date', 'Amount', 'Status', 'Action'].map(h => <th key={h} className="text-left px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>)}</tr></thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { id: 'VT-5521', svc: 'Fitting Help', route: 'Moi Avenue', date: 'Jun 19', amt: 'KES 0', status: 'Pending' },
                      { id: 'VT-5498', svc: 'Gift Wrap', route: 'Westlands', date: 'Jun 14', amt: 'KES 1,200', status: 'Pending' },
                      { id: 'VT-5401', svc: 'Home Delivery', route: 'Karen', date: 'Jun 10', amt: 'KES 1,200', status: 'Accepted' },
                    ].map(q => (
                      <tr key={q.id} className="hover:bg-slate-50">
                        <td className="px-4 py-3.5 font-semibold text-navy">{q.id}</td>
                        <td className="px-4 py-3.5 text-slate-500">{q.svc}</td>
                        <td className="px-4 py-3.5 text-slate-500">{q.route}</td>
                        <td className="px-4 py-3.5 text-slate-500">{q.date}</td>
                        <td className="px-4 py-3.5 font-semibold text-navy">{q.amt}</td>
                        <td className="px-4 py-3.5"><StatusBadge variant={q.status === 'Accepted' ? 'delivered' : 'transit'}>{q.status}</StatusBadge></td>
                        <td className="px-4 py-3.5">{q.status === 'Pending' ? <BtnPrimary className="text-xs px-3 py-2">Accept</BtnPrimary> : <span className="text-xs text-royal font-semibold">Invoice →</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activePanel === 'invoices' && (
            <div>
              <h3 className="font-display font-bold text-xl text-navy mb-6">Invoices & Payments</h3>
              <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full text-sm min-w-[650px]">
                  <thead className="bg-slate-50"><tr>{['Order #', 'Item', 'Date', 'Amount', 'Due Date', 'Status', 'Action'].map(h => <th key={h} className="text-left px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>)}</tr></thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { id: 'ORD-2024-081', ship: 'SS-1048', date: 'Jun 20', amt: 'KES 28,500', due: 'Jun 30', paid: false },
                      { id: 'ORD-2024-074', ship: 'SS-4022', date: 'Jun 15', amt: 'KES 14,200', due: 'Jun 25', paid: true },
                      { id: 'ORD-2024-061', ship: 'SS-3157', date: 'Jun 17', amt: 'KES 1,200', due: 'Jun 20', paid: true },
                    ].map(inv => (
                      <tr key={inv.id} className="hover:bg-slate-50">
                        <td className="px-4 py-3.5 font-semibold text-navy">{inv.id}</td>
                        <td className="px-4 py-3.5 text-slate-500">{inv.ship}</td>
                        <td className="px-4 py-3.5 text-slate-500">{inv.date}</td>
                        <td className="px-4 py-3.5 font-semibold text-navy">{inv.amt}</td>
                        <td className="px-4 py-3.5 text-slate-500">{inv.due}</td>
                        <td className="px-4 py-3.5"><StatusBadge variant={inv.paid ? 'delivered' : 'warning'}>{inv.paid ? '✅ Paid' : '⏰ Due Soon'}</StatusBadge></td>
                        <td className="px-4 py-3.5">{inv.paid ? <button onClick={() => alert('Downloading PDF…')} className="text-royal text-xs font-semibold hover:underline">Download PDF</button> : <BtnPrimary className="text-xs px-3 py-2" onClick={() => alert('Pay via M-Pesa: Till 123456')}>Pay Now</BtnPrimary>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activePanel === 'notifications' && (
            <div>
              <h3 className="font-display font-bold text-xl text-navy mb-6">Notifications</h3>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {[
                  { unread: true, text: '� SS-1048 is now in transit — ETA today by 3:00 PM.', time: '2 hours ago' },
                  { unread: true, text: '📋 Your visit VT-5521 is ready for confirmation.', time: '5 hours ago' },
                  { unread: true, text: '🧾 Order ORD-2024-081 (KES 28,500) is due on June 30, 2024.', time: 'Yesterday' },
                  { unread: true, text: '✅ SS-4022 delivered successfully. Please confirm receipt.', time: 'Jun 15' },
                  { unread: true, text: '📦 SS-3157 has been packed and sent to your doorstep.', time: 'Jun 17' },
                  { unread: false, text: '🎉 Welcome to StrideStep Shoes Portal! Your account has been set up.', time: 'Jun 1' },
                ].map((n, i) => (
                  <div key={i} className={`flex gap-4 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors ${n.unread ? '' : 'opacity-60'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${n.unread ? 'bg-amber-brand' : 'bg-slate-300'}`} />
                    <div className="flex-1">
                      <p className="text-sm text-slate-700">{n.text}</p>
                      <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activePanel === 'support' && <SupportPanel />}
          {activePanel === 'profile' && (
            <div>
              <h3 className="font-display font-bold text-xl text-navy mb-6">My Profile</h3>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-brand to-amber-light flex items-center justify-center font-display font-black text-3xl text-white mx-auto mb-4">JK</div>
                  <h4 className="font-display font-semibold text-navy">John Kamau</h4>
                  <p className="text-slate-400 text-sm">demo@stridestepshoes.co.ke</p>
                  <p className="text-xs text-slate-300 mt-2">Member since June 2024</p>
                </div>
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
                  <h4 className="font-semibold text-navy mb-5">Account Details</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput label="First Name" id="pr-fn" defaultValue="John" />
                    <FormInput label="Last Name" id="pr-ln" defaultValue="Kamau" />
                    <FormInput label="Email" id="pr-em" type="email" defaultValue="demo@stridestepshoes.co.ke" />
                    <FormInput label="Phone" id="pr-ph" type="tel" defaultValue="+254 712 345 678" />
                    <FormInput label="Company" id="pr-co" defaultValue="StrideStep Shoes" />
                    <FormSelect label="Notification Preference" id="pr-notif" options={['Email & SMS', 'Email Only', 'SMS Only', 'WhatsApp']} />
                  </div>
                  <BtnPrimary className="mt-5" onClick={() => alert('Profile updated!')}>Save Changes</BtnPrimary>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
