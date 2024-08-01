"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Nevigation from "./_components/Nevigation";

const MainLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        )
    }
    if (!isAuthenticated) {
        return redirect("/")
    }
    return (
        <div className="h-full flex dark:bg-[#1F1F1F]">
            <Nevigation />
            <main className="flex-1 h-full overflow-auto">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;