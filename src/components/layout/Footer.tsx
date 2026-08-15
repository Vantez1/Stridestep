import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="font-display text-3xl font-bold text-amber-brand">
              StrideStep
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Premium footwear for every journey. From running
              shoes to everyday essentials, StrideStep helps you
              move with confidence.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-amber-brand">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Customer */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-amber-brand">
              Customer Support
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link to="/shipping">Shipping Information</Link>
              </li>
              <li>
                <Link to="/returns">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/order-tracking">Track Order</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-amber-brand">
              Contact Us
            </h3>

            <div className="space-y-5 text-slate-400">


              <div className="flex items-center gap-3">
                <FaPhone className="text-amber-brand" />
                <a href="tel:+254700123456" className="text-slate-400 hover:underline">+254 700 123 456</a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-brand" />
                <a href="mailto:info@stridestep.co.ke" className="text-slate-400 hover:underline">info@stridestep.co.ke</a>
              </div>

              <div className="flex items-center gap-3">
                <FaLocationDot className="text-amber-brand" />
                Nairobi, Kenya
              </div>

            </div>

          </div>

        </div>

        <div className="my-12 h-px bg-slate-700" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-slate-400">
            © {new Date().getFullYear()} StrideStep. All rights reserved.
          </p>

          <div className="flex gap-4">

            <a href="/" className="rounded-full bg-slate-800 p-3 transition hover:bg-amber-brand">
              <FaFacebookF />
            </a>

            <a href="/" className="rounded-full bg-slate-800 p-3 transition hover:bg-amber-brand">
              <FaInstagram />
            </a>

            <a href="/" className="rounded-full bg-slate-800 p-3 transition hover:bg-amber-brand">
              <FaXTwitter />
            </a>

            <a href="/" className="rounded-full bg-slate-800 p-3 transition hover:bg-amber-brand">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}