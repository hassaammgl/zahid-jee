import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/shared/home/Hero'), {
  loading: () => <p>Loading...</p>,
})

const About = dynamic(() => import('@/shared/home/About'), {
  loading: () => <p>Loading...</p>,
})

const Gallery = dynamic(() => import('@/shared/home/Gallery'), {
  loading: () => <p>Loading...</p>,
})

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
