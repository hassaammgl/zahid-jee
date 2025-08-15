"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Observer, SplitText);

const sectionsData = [
  {
    title: "Scroll down",
    bg: "bg-[url('https://assets.codepen.io/16327/site-landscape-1.jpg')]",
  },
  {
    title: "Animated with GSAP",
    bg: "bg-[url('https://assets.codepen.io/16327/site-landscape-5.jpeg')]",
  },
  {
    title: "GreenSock",
    bg: "bg-[url('https://assets.codepen.io/16327/site-landscape-2.jpg')]",
  },
  {
    title: "Animation platform",
    bg: "bg-[url('https://assets.codepen.io/16327/site-landscape-6.jpg')]",
  },
  {
    title: "Keep scrolling",
    bg: "bg-[url('https://assets.codepen.io/16327/site-landscape-8.jpg')]",
  },
];

export default function AnimatedSections() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const outerRefs = useRef([]);
  const innerRefs = useRef([]);
  const bgRefs = useRef([]);
  const headingRefs = useRef([]);

  useEffect(() => {
    let animating = false;
    let currentIndex = -1;

    const wrap = gsap.utils.wrap(0, sectionsData.length);

    const splitHeadings = headingRefs.current.map(
      (heading) =>
        new SplitText(heading, {
          type: "chars,words,lines",
          linesClass: "clip-text overflow-hidden",
        })
    );

    gsap.set(outerRefs.current, { yPercent: 100 });
    gsap.set(innerRefs.current, { yPercent: -100 });

    function gotoSection(index, direction) {
      if (index >= sectionsData.length) {
        // end → release GSAP Observer so normal scroll works
        Observer.getAll().forEach((obs) => obs.kill());
        return;
      }
      index = wrap(index);
      animating = true;
      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });

      if (currentIndex >= 0) {
        gsap.set(sectionRefs.current[currentIndex], { zIndex: 0 });
        tl.to(bgRefs.current[currentIndex], { yPercent: -15 * dFactor })
          .set(sectionRefs.current[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sectionRefs.current[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [outerRefs.current[index], innerRefs.current[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(
          bgRefs.current[index],
          { yPercent: 15 * dFactor },
          { yPercent: 0 },
          0
        )
        .fromTo(
          splitHeadings[index].chars,
          {
            autoAlpha: 0,
            yPercent: 150 * dFactor,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2
        );

      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, []);

  return (
    <main ref={containerRef} className="relative h-screen w-screen bg-black text-white">
      <header className="fixed flex justify-between items-center px-[5%] w-full z-30 h-28 tracking-[0.5em] text-xs">
        <div>Animated Sections</div>
        <a
          href="https://codepen.io/BrianCross/pen/PoWapLP"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original Inspiration
        </a>
      </header>

      {sectionsData.map((section, i) => (
        <section
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="fixed top-0 left-0 h-full w-full invisible"
        >
          <div
            ref={(el) => (outerRefs.current[i] = el)}
            className="w-full h-full overflow-hidden"
          >
            <div
              ref={(el) => (innerRefs.current[i] = el)}
              className="w-full h-full overflow-hidden"
            >
              <div
                ref={(el) => (bgRefs.current[i] = el)}
                className={`flex items-center justify-center absolute top-0 left-0 h-full w-full bg-cover bg-center ${section.bg}`}
              >
                <h2
                  ref={(el) => (headingRefs.current[i] = el)}
                  className="z-10 text-center w-[90vw] max-w-[1200px] text-[clamp(1rem,8vw,10rem)] font-semibold"
                >
                  {section.title}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Normal scrolling content after animation */}
      <div className="relative z-20 bg-gray-900 text-white pt-[100vh]">
        <div className="p-10 space-y-6">
          <h2 className="text-4xl font-bold">Normal Content Starts Here</h2>
          <p>
            Once you reach the last animated section, this becomes a normal scrollable page.
          </p>
          <p>
            You can add your usual layout, blog posts, images, etc. here.
          </p>
          <div className="h-[200vh] bg-gray-800 mt-10 flex items-center justify-center">
            <span>Keep Scrolling...</span>
          </div>
        </div>
      </div>
    </main>
  );
}
