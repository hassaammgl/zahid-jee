"use client";

import dynamic from "next/dynamic";

const ContactHeader = dynamic(() => import("@/sections/contact/header"), { ssr: false });
const ContactInfo = dynamic(() => import("@/sections/contact/info"), { ssr: false });
const ContactForm = dynamic(() => import("@/sections/contact/form"), { ssr: false });

export default function ContactPage() {
    return (
        <main className="w-full bg-white">
            <ContactHeader />
            <div className="py-12 sm:py-16 md:py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] sm:min-h-[700px]">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}

