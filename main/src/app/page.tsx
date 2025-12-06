import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-screen bg-hero bg-cover bg-center bg-fixed flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-navy to-transparent opacity-80" />

        <div className="relative z-10 max-w-5xl">
          <div className="gsap-hero opacity-0 translate-y-10">
            <p className="text-gold uppercase tracking-[0.3em] font-semibold text-sm md:text-base mb-6">
              Established 1987 | Export Excellence
            </p>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 leading-none">
              Weaving the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-yellow-200">
                Fabric of Life
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              A premier vertically integrated textile company in Pakistan. From spinning raw cotton to stitching luxury home textiles, we define quality at every thread.
            </p>
          </div>

          <div className="gsap-hero opacity-0 translate-y-10 flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/divisions" className="px-10 py-4 bg-gold text-navy font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300">
              Our Operations
            </Link>

            <Link href="/investors" className="px-10 py-4 border border-white text-white font-bold tracking-widest uppercase hover:bg-white hover:text-navy transition-colors duration-300">
              Financial Reports
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold text-2xl">
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-text">
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Who We Are</span>

            <h2 className="text-5xl font-serif font-bold text-navy mt-4 mb-8 leading-tight">
              One of Pakistan&apos;s Largest Textile Powerhouses
            </h2>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Zahidjee Textile Mills Limited is synonymous with quality and trust. With an annual turnover exceeding <span className="text-navy font-bold">$130 Million</span>, we stand as a pillar of the national economy.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our journey began in 1987. Today, we operate four major divisions: Spinning, Weaving, Finishing, and Power Generation. We are 100% export-oriented, delivering premium home textiles to global markets.
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              <div>
                <div className="text-4xl font-serif font-bold text-gold counter" data-target="130">0</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mt-2">$ Million Turnover</div>
              </div>

              <div>
                <div className="text-4xl font-serif font-bold text-gold counter" data-target="37">0</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mt-2">Years of Legacy</div>
              </div>

              <div>
                <div className="text-4xl font-serif font-bold text-gold">4</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mt-2">Major Divisions</div>
              </div>
            </div>
          </div>

          <div className="relative reveal-image">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-lg" />
            <Image
              src="https://images.unsplash.com/photo-1563121578-8316c1f1737e?q=80&w=1000"
              alt="Textile Factory"
              width={1000}
              height={600}
              className="relative rounded-lg shadow-2xl w-full object-cover h-[600px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
