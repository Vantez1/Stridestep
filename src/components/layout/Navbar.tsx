import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrollY, useMobileMenu } from '../../hooks';
import { NAV_LINKS } from '../../data';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from "../../context/WishlistContext";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  const scrollY = useScrollY();
  const { open, toggle, close } = useMobileMenu();
  const { pathname } = useLocation();
  const scrolled = scrollY > 48;

  const darkThemeRoutes = new Set(["/", "/about", "/contact", "/tracking", "/shoe-marketing", "/wishlist"]);
  const isDarkRoute = darkThemeRoutes.has(pathname);
  // Force the "scrolled" styles on pages with light backgrounds so the
  // navbar content is readable before the user scrolls.
  const lightBgRoutes = new Set([
    '/shop',
    '/services',
    '/quote',
    '/shipping',
    '/returns',
    '/faqs',
    '/careers',
    '/order-tracking',
    '/checkout',
    '/order-success',
    '/orders',
  ]);

  const forceScrolledPages =
    pathname === '/cart' ||
    pathname === '/' ||
    pathname.startsWith('/product') ||
    lightBgRoutes.has(pathname);
  const scrolledLinkColor = isDarkRoute
    ? "text-white hover:text-white/90 hover:bg-slate-950/20"
    : "text-slate-950 hover:text-navy hover:bg-slate-100";
  const scrolledTextColor = isDarkRoute ? "text-white" : "text-slate-950";
  const scrolledIconStyle = isDarkRoute
    ? "bg-slate-950/80 text-white hover:bg-white/10"
    : "bg-white/10 text-slate-950 hover:bg-slate-100";
  const scrolledHeaderStyle = isDarkRoute
    ? "bg-slate-950/15 border-white/10 py-3"
    : "bg-white/10 border-white/10 py-3";
  const scrolledPortalButton = isDarkRoute
    ? "border-white/25 text-white hover:border-white/60 hover:text-white"
    : "border-slate-300 text-slate-950 hover:bg-white/10 hover:text-slate-950";
  const scrolledToggleColor = isDarkRoute ? "text-white" : "text-slate-950";

const cartContext = useContext(CartContext);

if (!cartContext) {
  throw new Error("CartContext is not available.");
}

const { cart } = cartContext;
const wishlistContext = useContext(WishlistContext);

if (!wishlistContext) {
  throw new Error("WishlistContext is not available.");
}

const { wishlist } = wishlistContext;


const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

const wishlistCount = wishlist.length;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || forceScrolledPages
            ? scrolledHeaderStyle
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
<Link
  to="/"
  onClick={close}
  className="flex items-center no-underline"
>
 <img
  src={scrolled || forceScrolledPages ? "/brands/logo-full.png" : "/brands/logo-full-white.png"}
  alt="StrideStep"
  className={`h-16 w-auto object-contain transition-all duration-300 hover:scale-105 ${scrolled || forceScrolledPages ? 'h-20 lg:h-[96px]' : 'lg:h-[72px]'}`}
/>
</Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 no-underline hover:-translate-y-0.5 ${
                  pathname === link.href
                    ? "text-amber-brand bg-amber-50"
                    : scrolled || forceScrolledPages
                        ? scrolledLinkColor
                        : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Wishlist & Cart */}
<div className="hidden lg:flex items-center gap-3">

  {/* Wishlist */}
  <Link
    to="/wishlist"
    className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
      scrolled || forceScrolledPages
        ? scrolledIconStyle
        : "bg-white/10 text-white hover:bg-white/20"
    }`}
  >
    <FaHeart size={18} />

    {wishlistCount > 0 && (
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
        {wishlistCount}
      </span>
    )}
  </Link>

  {/* Cart */}
  <Link
    to="/cart"
    className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
      scrolled || forceScrolledPages
        ? "bg-slate-950/80 text-white hover:bg-white/10"
        : "bg-white/10 text-white hover:bg-white/20"
    }`}
  >
    <FaShoppingBag size={18} />

    {cartCount > 0 && (
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-brand text-[10px] font-bold text-white">
        {cartCount}
      </span>
    )}
  </Link>

</div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/portal"
              className={`text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 no-underline ${
                scrolled || forceScrolledPages
                  ? scrolledPortalButton
                    : 'border-white/40 text-white hover:bg-white hover:text-navy'
              }`}
            >
              Customer Portal
            </Link>
            <Link
              to="/quote"
              className="group relative overflow-hidden rounded-xl bg-amber-brand px-6 py-3 text-sm font-semibold text-white no-underline shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-amber-500 hover:shadow-2xl"
            >
              Book a Visit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggle}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled || forceScrolledPages ? scrolledToggleColor : 'text-white'}`}
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

<div className="mt-6 flex justify-center gap-6">

  <Link
    to="/wishlist"
    onClick={close}
    className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
  >
    <FaHeart size={18} />

    {wishlistCount > 0 && (
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
        {wishlistCount}
      </span>
    )}
  </Link>

  <Link
    to="/cart"
    onClick={close}
    className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
  >
    <FaShoppingBag size={18} />

    {cartCount > 0 && (
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">
        {cartCount}
      </span>
    )}
  </Link>

</div>

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
