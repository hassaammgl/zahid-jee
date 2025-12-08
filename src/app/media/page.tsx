"use client";

import dynamic from "next/dynamic";

const MediaHeader = dynamic(() => import("@/sections/media/header"), { ssr: false });
const NoticesSection = dynamic(() => import("@/sections/media/notices"), { ssr: false });
const MembershipsSection = dynamic(() => import("@/sections/media/memberships"), { ssr: false });
const ActivitiesSection = dynamic(() => import("@/sections/media/activities"), { ssr: false });

export default function MediaPage() {
    return (
        <main className="w-full bg-white">
            <MediaHeader />
            <div className="py-20">
                <NoticesSection />
                <MembershipsSection />
                <ActivitiesSection />
            </div>
        </main>
    );
}
