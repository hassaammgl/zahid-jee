"use client"

import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp
            lenisRef.current?.lenis?.raf(time)
        }
        frame.update(update, true)

        return () => cancelFrame(update)
    }, [])


    return (
        <>
            <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
            {children}
        </>
    )
}