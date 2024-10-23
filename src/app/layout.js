import Footer from "@/components/shared/Footer";
import { Noto_Sans, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
    subsets: ["latin", "bengali"],
    display: "swap",
});

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
        <html
            lang="en"
            className={(notoSerifBengali.className, notoSans.className)}
        >
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
