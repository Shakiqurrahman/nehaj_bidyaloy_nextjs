"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
    const { token, user } = useSelector((state) => state.user);
    useEffect(() => {
        if (!token && user?.role !== "ADMIN") {
            redirect("/");
        }
    }, [token, user]);
    return (
        <div>
            <h1>Hello from DashboardPage</h1>
        </div>
    );
};

export default DashboardPage;
