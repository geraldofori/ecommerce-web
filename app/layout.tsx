import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BestGear from "@/components/ui/BestGear";
import ProductsSection from "@/components/ui/ProductsSection";
import ProductsBento from "@/components/ui/ProductsBento";

export const metadata: Metadata = {
  title: "Audiophile",
  description: "E commerce site for audiophile products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <NavBar />
        {children}
        <ProductsSection />
        <ProductsBento />
        <BestGear />
        <Footer />
      </body>
    </html>
  );
}
