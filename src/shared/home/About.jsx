"use client";
import SplitText from "@/components/SplitText/SplitText";
import gsap from "gsap";
import { SplitText as GSAPSplitText } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const paragraphRef = useRef();
  const bgRef = useRef(); 
  const containerRef = useRef();
  const leftContentRef = useRef();

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Text animation setup
    const paraSplit = new GSAPSplitText(paragraphRef.current, {
      type: "words",
    });
    gsap.from(paraSplit.words, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    // Lerp effect setup
    const bg = bgRef.current;
    const container = containerRef.current;

    if (!bg || !container) return;

    // Set initial position
    gsap.set(bg, { backgroundPosition: "50% 50%" });

    // Create smooth updater functions
    const xTo = gsap.quickTo(bg, "backgroundPositionX", {
      duration: 0.8,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(bg, "backgroundPositionY", {
      duration: 0.8,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      // Calculate normalized position (-1 to 1)
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      // Apply movement (adjust multiplier for intensity)
      xTo(50 + x * 10 + "%"); // 10% movement range
      yTo(50 + y * 10 + "%");
    };

    container.addEventListener("mousemove", handleMouseMove);

    // ScrollTrigger animations
    // Left content animation (text)
    gsap.from(leftContentRef.current, {
      scrollTrigger: {
        trigger: leftContentRef.current,
        start: "top bottom", // when top of element hits bottom of viewport
        end: "bottom center", // when bottom of element hits center of viewport
        scrub: 1, // smooth scrubbing effect
        markers: false, // set to true for debugging
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Right content animation (background image)
    gsap.from(bg, {
      scrollTrigger: {
        trigger: bg,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      y: 100
    });

    // Additional effect: Parallax on scroll
    gsap.to(bg, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      backgroundPosition: "50% 30%", // moves up as you scroll
      ease: "none"
    });

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      paraSplit.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-screen flex-col bg-black flex justify-center">
      <SplitText
        as="h2"
        delay={2}
        text={"About us"}
        duration={1.5}
        splitType="chars"
        className="text-center text-9xl text-white font-[Tangerine] mb-14"
      />
      <div ref={containerRef} className="w-full h-screen flex">
        <div 
          ref={leftContentRef} 
          className="w-1/2 h-full text-white p-10 text-6xl font-[Poiret_One]"
        >
          Zahidjee Textile Mills Limited was established in 1987. Having an
          annual turnover of $130 million, It is one the largest vertically
          integrated textile companies in Pakistan. It consists of spinning,
          weaving, processing, stitching and power generation facilities. It is
          a hundred percent export based company. It is a leading home textile
          exporter.
        </div>
        <div className="w-1/2 h-full p-9">
          <div
            ref={bgRef}
            className="w-full h-full about-textures rounded-3xl p-9"
            style={{
              backgroundImage: "url('/ceo.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;