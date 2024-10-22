import localFont from "next/font/local";
import "./globals.css";

const adorNoirrit = localFont({
    src: "../../public/fonts/LiAdorNoirritAV1VR-VF.ttf",
    variable: "--font-ador-noirrit",
    weight: "100 900",
});

export const metadata = {
    title: "Nehaj Bidyaloy",
    description: "created by Flytech It",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${adorNoirrit.variable}`}>
            <body>
                <h1>Hello world</h1>
            </body>
        </html>
    );
}
