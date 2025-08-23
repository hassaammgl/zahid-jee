// "use client";
// import SplitText from "@/components/SplitText/SplitText";
// import gsap from "gsap";
// import { SplitText as GSAPSplitText } from "gsap/all";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const About = () => {
//   const paragraphRef = useRef();
//   const bgRef = useRef();
//   const containerRef = useRef();
//   const leftContentRef = useRef();

//   gsap.registerPlugin(ScrollTrigger);

//   useGSAP(() => {
//     const paraSplit = new GSAPSplitText(paragraphRef.current, {
//       type: "words",
//     });
//     gsap.from(paraSplit.words, {
//       yPercent: 100,
//       opacity: 0,
//       duration: 0.8,
//       ease: "expo.out",
//       stagger: 0.05,
//       delay: 1,
//     });

//     const bg = bgRef.current;
//     const container = containerRef.current;

//     if (!bg || !container) return;

//     gsap.set(bg, { backgroundPosition: "50% 50%" });

//     const xTo = gsap.quickTo(bg, "backgroundPositionX", {
//       duration: 0.8,
//       ease: "power3.out",
//     });

//     const yTo = gsap.quickTo(bg, "backgroundPositionY", {
//       duration: 0.8,
//       ease: "power3.out",
//     });

//     const handleMouseMove = (e) => {
//       const rect = container.getBoundingClientRect();

//       const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
//       const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

//       xTo(50 + x * 10 + "%");
//       yTo(50 + y * 10 + "%");
//     };

//     container.addEventListener("mousemove", handleMouseMove);

//     gsap.from(leftContentRef.current, {
//       scrollTrigger: {
//         trigger: leftContentRef.current,
//         start: "top bottom",
//         end: "bottom center",
//         scrub: 1,
//         markers: false,
//       },
//       x: -100,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out"
//     });

//     gsap.from(bg, {
//       scrollTrigger: {
//         trigger: bg,
//         start: "top bottom",
//         end: "bottom center",
//         scrub: 1,
//         markers: false,
//       },
//       scale: 0.9,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power3.out",
//       y: 100
//     });

//     gsap.to(bg, {
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true
//       },
//       backgroundPosition: "50% 30%",
//       ease: "none"
//     });

//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       paraSplit.revert();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section className="w-screen flex-col bg-black flex justify-center">
//       <SplitText
//         as="h2"
//         delay={2}
//         text={"About us"}
//         duration={1.5}
//         splitType="chars"
//         className="text-center text-9xl text-white font-[Tangerine] mb-14"
//       />
//       <div ref={containerRef} className="w-full h-screen flex flex-col-reverse justify-center items-center">
//         <SplitText
//           as="div"
//           delay={2}
//           text={`Zahidjee Textile Mills Limited was established in 1987. Having an
//           annual turnover of $130 million, It is one the largest vertically
//           integrated textile companies in Pakistan. It consists of spinning,
//           weaving, processing, stitching and power generation facilities. It is
//           a hundred percent export based company. It is a leading home textile
//           exporter.`}
//           duration={1.5}
//           splitType="words"
//           className="w-full h-full text-white p-10 text-2xl font-[Poiret_One]"
//           // className="w-full h-full text-white p-10 text-6xl font-[Poiret_One]"
//         />
//         {/* <div className="w-full h-full p-9"> */}
//         <div className="w-full p-9">
//           <div
//             ref={bgRef}
//             className="w-full h- about-textures rounded-3xl p-9"
//             // className="w-full h-full about-textures rounded-3xl p-9"
//             style={{
//               backgroundImage: "url('/ceo.jpeg')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat"
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

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

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const paraSplit = new GSAPSplitText(paragraphRef.current, { type: "words" });
    gsap.from(paraSplit.words, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    const bg = bgRef.current;
    const container = containerRef.current;
    if (!bg || !container) return;

    gsap.set(bg, { backgroundPosition: "50% 50%" });

    const xTo = gsap.quickTo(bg, "backgroundPositionX", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(bg, "backgroundPositionY", { duration: 0.8, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      xTo(50 + x * 10 + "%");
      yTo(50 + y * 10 + "%");
    };

    container.addEventListener("mousemove", handleMouseMove);

    gsap.from(leftContentRef.current, {
      scrollTrigger: {
        trigger: leftContentRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(bg, {
      scrollTrigger: {
        trigger: bg,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      y: 100
    });

    gsap.to(bg, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      backgroundPosition: "50% 30%",
      ease: "none"
    });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      paraSplit.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-screen bg-black flex flex-col items-center py-20">
      <SplitText
        as="h2"
        delay={2}
        text="About us"
        duration={1.5}
        splitType="chars"
        className="text-center text-5xl md:text-7xl lg:text-8xl text-white font-[Tangerine] mb-14"
      />

      {/* Responsive Grid Layout */}
      <div ref={containerRef} className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

        {/* Text */}
        <div ref={leftContentRef} className="flex flex-col justify-center text-white space-y-6">
          <SplitText
            as="p"
            delay={2}
            text={`Zahidjee Textile Mills Limited was established in 1987. Having an
            annual turnover of $130 million, It is one of the largest vertically
            integrated textile companies in Pakistan. It consists of spinning,
            weaving, processing, stitching and power generation facilities. It is
            a hundred percent export-based company and a leading home textile
            exporter.`}
            duration={1.5}
            splitType="words"
            className="text-lg md:text-3xl xl:text-4xl font-[Poiret_One] leading-relaxed"
          />
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <div
            ref={bgRef}
            className="w-full h-96 md:h-[500px] lg:h-[700px] rounded-3xl shadow-lg about-textures"
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
