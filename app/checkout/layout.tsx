import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";

export default function CheckoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}
