import DHeader from "@/components/shared/Dashboard-header/DHeader";
import DSideBar from "@/components/shared/Dashboard-header/DSidebar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight : ['100', '200', '300', '400', '500', '600', '700'],
    display: "swap",
});


export default function AdminRootLayout({ children }) {
    return (
        <main className={poppins.className}>
            <DHeader />
            <div className="lg:flex gap-10">
                <DSideBar />
                <main className="flex-1 mt-4 p-4 md:p-8">{children}</main>
            </div>
            {children}
        </main>
    );
}
