// src/components/layout/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrollY, useMobileMenu } from '../../hooks';
import { NAV_LINKS } from '../../data';

export default function Navbar() {
  const scrollY = useScrollY();
  const { open, toggle, close } = useMobileMenu();
  const { pathname } = useLocation();
  const scrolled = scrollY > 48;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={close} className="flex items-center gap-2.5 no-underline">
            <span className="w-10 h-10 rounded-xl bg-amber-brand flex items-center justify-center text-xl font-black text-white font-display">SS</span>
            <span className={`font-display font-black text-xl tracking-tight transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>
              StrideStep<span className="text-amber-brand">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                  pathname === link.href
                    ? 'text-amber-brand'
                    : scrolled
                    ? 'text-slate-700 hover:text-navy hover:bg-slate-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/portal"
              className={`text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 no-underline ${
                scrolled
                  ? 'border-slate-200 text-slate-700 hover:border-navy hover:text-navy'
                  : 'border-white/40 text-white hover:bg-white hover:text-navy'
              }`}
            >
              Customer Portal
            </Link>
            <Link
              to="/quote"
              className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-amber-brand text-white hover:bg-amber-600 transition-all duration-200 no-underline shadow-sm hover:shadow-md"
            >
              Book a Visit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggle}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
        <nav
          className={`absolute top-0 right-0 h-full w-72 bg-navy flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={close}
              className={`py-3.5 border-b border-white/10 text-sm font-medium no-underline transition-colors ${
                pathname === link.href ? 'text-amber-brand' : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <Link to="/portal" onClick={close} className="py-3 text-center rounded-lg border border-white/30 text-white text-sm font-semibold no-underline hover:bg-white/10 transition-colors">
              Customer Portal
            </Link>
            <Link to="/quote" onClick={close} className="py-3 text-center rounded-lg bg-amber-brand text-white text-sm font-semibold no-underline hover:bg-amber-600 transition-colors">
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
