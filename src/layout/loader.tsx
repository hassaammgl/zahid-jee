"use client";

import { useEffect, useState } from "react";

export default function Loader() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(true);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = Math.min(prev + 2, 100);
                if (next === 100) {
                    clearInterval(interval);
                    setAnimateOut(true);
                    setTimeout(() => setVisible(false), 500);
                }
                return next;
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);

    if (!visible) return null;

    return (
        <div
            id="loader"
            className="fixed inset-0 z-100 bg-navy flex flex-col items-center justify-center transition-transform duration-1000"
            style={{
                clipPath: animateOut ? 'inset(0 0 100% 0)' : 'inset(0 0 0 0)',
                transition: 'clip-path 0.7s ease-in-out'
            }}
        >
            <div className="flex items-center gap-4 animate-pulse">
                <div className="text-6xl text-gold font-serif font-bold">Z</div>
                <div className="text-white text-3xl font-serif tracking-widest">ZAHIDJEE</div>
            </div>
            <div className="mt-4 h-1 w-48 bg-gray-800 overflow-hidden rounded-full">
                <div
                    className="h-full bg-gold transition-all duration-200"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}