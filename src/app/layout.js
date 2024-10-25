import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Nehaj Bidyaloy",
    description: "created by Flytech It",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={notoSans.className}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
