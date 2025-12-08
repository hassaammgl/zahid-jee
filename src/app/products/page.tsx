"use client";

import dynamic from "next/dynamic";

const ProductsHeader = dynamic(() => import("@/sections/products/header"), { ssr: false });
const YarnSection = dynamic(() => import("@/sections/products/yarn"), { ssr: false });
const FabricSection = dynamic(() => import("@/sections/products/fabric"), { ssr: false });
const FinishedSection = dynamic(() => import("@/sections/products/finished"), { ssr: false });
const ProductsCTA = dynamic(() => import("@/sections/products/cta"));

export default function ProductsPage() {
    return (
        <main className="w-full">
            <ProductsHeader />
            <div className="py-20 overflow-hidden">
                <YarnSection />
                <FabricSection />
                <FinishedSection />
            </div>
            <ProductsCTA />
        </main>
    );
}