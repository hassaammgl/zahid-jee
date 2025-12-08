"use client";

import dynamic from "next/dynamic";

const Spinning = dynamic(() => import("@/sections/divisions/spinning"), {
    ssr: false,
    loading: () => <div className="h-screen w-screen bg-navy flex items-center justify-center text-gold">Loading Spinning...</div>,
});
const Weaving = dynamic(() => import("@/sections/divisions/weaving"), {
    ssr: false,
    loading: () => <div className="h-screen w-screen bg-navy flex items-center justify-center text-gold">Loading Weaving...</div>,
});
const Finishing = dynamic(() => import("@/sections/divisions/finishing"), {
    ssr: false,
    loading: () => <div className="h-screen w-screen bg-navy flex items-center justify-center text-gold">Loading Finishing...</div>,
});
const Power = dynamic(() => import("@/sections/divisions/power"), {
    ssr: false,
    loading: () => <div className="h-screen w-screen bg-navy flex items-center justify-center text-gold">Loading Power...</div>,
});

export default function Divisions() {
    return (
        <main className="relative w-screen h-full bg-navy">
            <Spinning />
            <Weaving />
            <Finishing />
            <Power />
        </main>
    );
}