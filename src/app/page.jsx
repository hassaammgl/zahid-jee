import Hero from "@/shared/home/Hero";
import About from "@/shared/home/About";
import Gallery from "@/shared/home/Gallery";

export default function Home() {

  return (
    <main className="relative w-screen">
      <video
        src="/hero.mp4"
        className="object-cover fixed -z-10 h-screen w-screen opacity-40"
        autoPlay
        loop
        muted
      />
      <Hero />
      <About />
      <Gallery />
    </main>
  );
}
