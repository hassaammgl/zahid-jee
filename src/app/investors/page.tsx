"use client";

import dynamic from "next/dynamic";

const InvestorsHeader = dynamic(() => import("@/sections/investors/header"), { ssr: false });
const InvestorsMetrics = dynamic(() => import("@/sections/investors/metrics"), { ssr: false });
const FinancialReports = dynamic(() => import("@/sections/investors/financial-reports"), {
    ssr: false,
});
const CorporateSidebar = dynamic(() => import("@/sections/investors/corporate-sidebar"), {
    ssr: false,
});

export default function InvestorsPage() {
    return (
        <main className="w-full bg-slate">
            <InvestorsHeader />
            <div className="py-20 max-w-7xl mx-auto px-6">
                <InvestorsMetrics />
                <div className="grid lg:grid-cols-3 gap-12">
                    <FinancialReports />
                    <CorporateSidebar />
                </div>
            </div>
        </main>
    );
}
