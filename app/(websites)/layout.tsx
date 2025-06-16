import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
import BestGear from "@/components/ui/BestGear";
import ProductsSection from "@/components/ui/ProductsSection";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <ProductsSection />
      <BestGear />
      <Footer />
    </>
  );
}
