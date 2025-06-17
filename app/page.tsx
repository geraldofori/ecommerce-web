import Hero from "@/components/ui/Hero";
import Footer from "@/components/layout/footer";
import BestGear from "@/components/ui/BestGear";
import ProductsSection from "@/components/ui/ProductsSection";
import ProductsBento from "@/components/ui/ProductsBento";
import NavBar from "@/components/layout/navbar";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProductsSection />
      <ProductsBento />
      <BestGear />
      <Footer />
    </>
  );
}
