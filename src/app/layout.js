import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata = {
    title: "Nehaj Bidyaloy",
    description: "created by Flytech It",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <main>{children}</main>
                </StoreProvider>
            </body>
        </html>
    );
}
