import DHeader from "@/components/shared/Dashboard-header/DHeader";
import DSideBar from "@/components/shared/Dashboard-header/DSidebar";

export default function AdminRootLayout({ children }) {
    return (
        <>
            <DHeader />
            <div className="lg:flex gap-10">
                <DSideBar />
                <main className="flex-1 mt-4 p-4 md:p-8">{children}</main>
            </div>
            {children}
        </>
    );
}
