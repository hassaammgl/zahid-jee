import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/layout/loader"), { ssr: true });
const HeroSection = dynamic(() => import("@/sections/home/hero"), { ssr: true });
const IntroSection = dynamic(() => import("@/sections/home/intro"), { ssr: true });
const DivisionsSection = dynamic(() => import("@/sections/home/divisions"), { ssr: true });
const SustainabilitySection = dynamic(() => import("@/sections/home/sustainability"), { ssr: true });

export default function Home() {
  return (
    <main className="w-screen h-full">
      <Loader />
      <HeroSection />
      <IntroSection />
      <DivisionsSection />
      <SustainabilitySection />
    </main>
  );
}
