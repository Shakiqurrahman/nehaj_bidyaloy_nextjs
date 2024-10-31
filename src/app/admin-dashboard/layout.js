import DHeader from "@/components/shared/Dashboard-header/DHeader";

export default function AdminRootLayout({ children }) {
    return (
        <>
            <DHeader />
            {children}
        </>
    );
}
