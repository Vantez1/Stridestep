import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import BrandShowcase from "../components/home/BrandShowcase";
import ShopByCategory from "../components/home/ShopByCategory";
import Stats from "../components/home/Stats";
import Newsletter from "../components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <BrandShowcase />
      <ShopByCategory />
      <Stats />
      <Newsletter />
    </>
  );
}