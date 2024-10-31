import { Noto_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

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
                <StoreProvider>
                    <main>{children}</main>
                </StoreProvider>
            </body>
        </html>
    );
}
