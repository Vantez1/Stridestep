// src/App.tsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from "./pages/Shop";
import OrderTracking from './pages/OrderTracking';
import ShoeMarketing from './pages/ShoeMarketing';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Portal from './pages/Portal';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isPortal = pathname === '/portal';
  return (
    <>
      {!isPortal && <Navbar />}
      <main>{children}</main>
      {!isPortal && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Shop />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/shoe-marketing" element={<ShoeMarketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
