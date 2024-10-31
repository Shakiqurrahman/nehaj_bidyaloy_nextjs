import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";
import Navbar from "@/components/shared/Header/Navbar";

export default function HomeRootLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
