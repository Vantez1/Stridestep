// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const services = [
  { label: 'Men’s Shoes', href: '/services#mens' },
  { label: 'Women’s Shoes', href: '/services#womens' },
  { label: 'Kids’ Shoes', href: '/services#kids' },
  { label: 'Sports & Running', href: '/services#sports' },
  { label: 'Formal & Casual', href: '/services#casual' },
  { label: 'Shoe Care', href: '/services#care' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Order Tracking', href: '/tracking' },
  { label: 'Book a Visit', href: '/quote' },
  { label: 'Contact', href: '/contact' },
  { label: 'Customer Portal', href: '/portal' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 no-underline mb-4">
              <span className="w-9 h-9 rounded-xl bg-amber-brand flex items-center justify-center text-lg font-black text-white font-display">SS</span>
              <span className="font-display font-black text-xl text-white tracking-tight">
                StrideStep<span className="text-amber-brand">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Your go-to store for men’s, women’s, and kids’ footwear, plus expert fitting advice, fast delivery, and dependable aftercare.
            </p>
            <div className="flex items-center gap-2">
              {['📘', '🐦', '💼', '📸'].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-sm hover:bg-amber-brand transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-display">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-slate-400 hover:text-amber-brand transition-colors no-underline">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-display">Company</h4>
            <ul className="space-y-2.5">
              {company.map(c => (
                <li key={c.href}>
                  <Link to={c.href} className="text-sm text-slate-400 hover:text-amber-brand transition-colors no-underline">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-display">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-amber-brand mt-0.5 shrink-0" />
                <span className="text-sm">Moi Avenue, Nairobi CBD, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-amber-brand shrink-0" />
                <a href="tel:+254712345678" className="text-sm hover:text-amber-brand transition-colors no-underline">+254 712 345 678</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-amber-brand shrink-0" />
                <a href="mailto:info@stridestepshoes.co.ke" className="text-sm hover:text-amber-brand transition-colors no-underline">info@stridestepshoes.co.ke</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <span>© 2024 StrideStep Shoes. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-brand transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="hover:text-amber-brand transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/254712345678?text=Hello%20StrideStep%20Shoes!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </footer>
  );
}
