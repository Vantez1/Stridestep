import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

import { useScrollY, useMobileMenu } from "../../hooks";
import { NAV_LINKS } from "../../data";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export default function Navbar() {
  const { pathname } = useLocation();

  const scrollY = useScrollY();
  const { open, toggle, close } = useMobileMenu();

  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);

  if (!cartContext) {
    throw new Error("CartContext is not available.");
  }

  if (!wishlistContext) {
    throw new Error("WishlistContext is not available.");
  }

  const { cart } = cartContext;
  const { wishlist } = wishlistContext;

  const scrolled = scrollY > 40;

  /*
   * Pages with light backgrounds need a dark-text navbar
   * immediately instead of waiting for the user to scroll.
   */
  const lightPages = new Set([
    "/shop",
    "/services",
    "/quote",
    "/shipping",
    "/returns",
    "/faqs",
    "/careers",
    "/order-tracking",
    "/checkout",
    "/order-success",
    "/orders",
    "/cart",
  ]);

  const isHome = pathname === "/";
  const isLightPage =
    lightPages.has(pathname) || pathname.startsWith("/product");

  /*
   * Homepage:
   * - Transparent over the Hero
   * - White navigation
   *
   * After scrolling:
   * - Deep navy glass effect
   *
   * Other pages:
   * - White navbar on light pages
   * - Dark navbar on dark pages
   */
  const headerClass = isHome
    ? scrolled
      ? "bg-[#071126]/90 backdrop-blur-xl shadow-lg border-b border-white/10"
      : "bg-transparent"
    : isLightPage
      ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200"
      : "bg-[#071126]/95 backdrop-blur-xl shadow-lg border-b border-white/10";

  const textClass =
    isHome || !isLightPage
      ? "text-white"
      : "text-slate-900";

  const navLinkClass =
    isHome || !isLightPage
      ? "text-white/85 hover:text-white hover:bg-white/10"
      : "text-slate-700 hover:text-navy hover:bg-slate-100";

  const iconClass =
    isHome || !isLightPage
      ? "bg-white/10 text-white hover:bg-white/20"
      : "bg-slate-100 text-slate-800 hover:bg-slate-200";

  const portalClass =
    isHome || !isLightPage
      ? "border-white/30 text-white hover:bg-white hover:text-navy"
      : "border-slate-300 text-slate-800 hover:border-navy hover:bg-slate-50";

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlist.length;

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ====================================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={close}
            className="flex shrink-0 items-center no-underline"
          >
            <img
              src={
                isHome || !isLightPage
                  ? "/brands/logo-full-white.png"
                  : "/brands/logo-full.png"
              }
              alt="StrideStep"
              className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 lg:h-11"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative rounded-xl px-4 py-2.5 text-sm font-semibold no-underline transition-all duration-200 ${
                    active
                      ? "bg-amber-50 text-amber-600 shadow-sm"
                      : navLinkClass
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT SIDE ACTIONS
          ================================================= */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* Wishlist */}

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${iconClass}`}
            >
              <FaHeart size={17} />

              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}

            <Link
              to="/cart"
              aria-label="Shopping cart"
              className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${iconClass}`}
            >
              <FaShoppingBag size={17} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-brand text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Divider */}

            <div
              className={`mx-1 h-7 w-px ${
                isHome || !isLightPage
                  ? "bg-white/15"
                  : "bg-slate-200"
              }`}
            />

            {/* Customer Portal */}

            <Link
              to="/portal"
              className={`rounded-xl border px-4 py-2.5 text-sm font-semibold no-underline transition-all duration-200 ${portalClass}`}
            >
              Customer Portal
            </Link>

            {/* Book a Visit */}

            <Link
              to="/quote"
              className="rounded-xl bg-amber-brand px-5 py-3 text-sm font-bold text-white no-underline shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-500 hover:shadow-lg"
            >
              Book a Visit
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={toggle}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all lg:hidden ${
              isHome || !isLightPage
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >

        {/* Backdrop */}

        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />

        {/* Drawer */}

        <aside
          className={`absolute right-0 top-0 flex h-full w-[320px] max-w-[85vw] flex-col bg-[#071126] px-6 pb-8 pt-6 shadow-2xl transition-transform duration-300 ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          {/* Mobile Header */}

          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Link
              to="/"
              onClick={close}
              className="no-underline"
            >
              <img
                src="/brands/logo-full-white.png"
                alt="StrideStep"
                className="h-10 w-auto"
              />
            </Link>

            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
              aria-label="Close menu"
            >
              <X size={21} />
            </button>
          </div>

          {/* Mobile Navigation */}

          <nav className="mt-6 flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={close}
                  className={`rounded-xl border-b border-white/10 px-3 py-4 text-sm font-semibold no-underline transition-colors ${
                    active
                      ? "bg-amber-brand/10 text-amber-brand"
                      : "text-white/85 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Wishlist / Cart */}

          <div className="mt-7 flex justify-center gap-4">

            <Link
              to="/wishlist"
              onClick={close}
              className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
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
              className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <FaShoppingBag size={18} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-brand text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

          {/* Mobile Actions */}

          <div className="mt-auto flex flex-col gap-3">

            <Link
              to="/portal"
              onClick={close}
              className="rounded-xl border border-white/25 px-5 py-3.5 text-center text-sm font-semibold text-white no-underline transition hover:bg-white/10"
            >
              Customer Portal
            </Link>

            <Link
              to="/quote"
              onClick={close}
              className="rounded-xl bg-amber-brand px-5 py-3.5 text-center text-sm font-bold text-white no-underline transition hover:bg-amber-500"
            >
              Book a Visit
            </Link>

          </div>
        </aside>
      </div>
    </>
  );
}