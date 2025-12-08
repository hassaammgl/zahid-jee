"use client";

import dynamic from "next/dynamic";

const GovernanceHeader = dynamic(() => import("@/sections/governance/header"), { ssr: false });
const BoardSection = dynamic(() => import("@/sections/governance/board"), { ssr: false });
const CommitteesSection = dynamic(() => import("@/sections/governance/committees"), {
    ssr: false,
});
const ComplianceSection = dynamic(() => import("@/sections/governance/compliance"), {
    ssr: false,
});

export default function GovernancePage() {
    return (
        <main className="w-full bg-white">
            <GovernanceHeader />
            <div className="py-20">
                <BoardSection />
                <CommitteesSection />
                <ComplianceSection />
            </div>
        </main>
    );
}
