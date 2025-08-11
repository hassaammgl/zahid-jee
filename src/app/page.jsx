import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="hero"
        fill
        className="object-cover"
        quality={100}
        priority
      />
    </main>
  );
}