// "use client"

// import { useRef } from "react";
// import Image from "next/image";
// import SplitText from "@/components/SplitText/SplitText";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const Power = () => {
//   const img1Ref = useRef();
//   const img2Ref = useRef();

//   useGSAP(() => {
//     gsap.from([img1Ref.current, img2Ref.current], {
//       clipPath: "inset(100% 0 0 0)",
//       y: 400,
//       delay: -1,
//       opacity: 0,
//       duration: 3,
//       ease: "circ.inOut",
//       stagger: 0,
//     });
//   });

//   return (
//     <div className="h-screen relative text-white flex justify-center items-center">
//       <SplitText
//         text={"Power Genration"}
//         as="h2"
//         splitType="words"
//         className="absolute leading-52 text-white/40 text-[12vw] text-center font-[Special_Gothic_Expanded_One]"
//       />
//       <div className="flex justify-center items-center w-screen">
//         <SplitText
//           splitType="words"
//           text={
//             "The company boasts 25MW generation capabilities, which includes gas, heavy furnace oil, and solar power plants. Moreover, it has a grid 20MW. These power plants ensure cost-efficient operations and eliminate any chance of black-shutdowns which results in timely deliveries. We have relied on world leading brands to provide machinery such as Jenbacher, Wartsilla, Jinko for catering our energy needs."
//           }
//           className="font-[Bodoni_Moda] text-4xl w-1/2 text-center"
//         />
//         <Image
//           src={"/devisions/power.jpg"}
//           className="object-fill absolute bottom-12 right-20 mix-blend-exclusion"
//           height={100}
//           ref={img1Ref}
//           width={300}
//           alt=""
//           />
//         <Image
//           src={"/devisions/power2.jpg"}
//           ref={img2Ref}
//           className="object-fill absolute top-24 left-28 mix-blend-exclusion"
//           height={100}
//           width={400}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Power;

"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import SplitText from "@/components/SplitText/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Power = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();
  const containerRef = useRef();

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Set initial state
  useLayoutEffect(() => {
    gsap.set([img1Ref.current, img2Ref.current], {
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
      y: 400,
    });
  }, []);

  // Animation with ScrollTrigger
  useGSAP(
    () => {
      const images = [img1Ref.current, img2Ref.current];

      images.forEach((img, index) => {
        gsap.to(img, {
          clipPath: "inset(0% 0 0 0)",
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none",
            markers: false, // Set to true for debugging
          },
          delay: index * 0.2, // Add staggered delay
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="h-screen relative text-white flex justify-center items-center overflow-hidden">
      <SplitText
        text={"Power Generation"}
        as="h2"
        splitType="words"
        className="absolute leading-52 text-white/40 text-[12vw] text-center font-[Special_Gothic_Expanded_One] pointer-events-none"
      />

      <div
        ref={containerRef}
        className="flex justify-center items-center w-screen h-full relative"
      >
        <SplitText
          splitType="words"
          text={
            "The company boasts 25MW generation capabilities, which includes gas, heavy furnace oil, and solar power plants. Moreover, it has a grid 20MW. These power plants ensure cost-efficient operations and eliminate any chance of black-shutdowns which results in timely deliveries. We have relied on world leading brands to provide machinery such as Jenbacher, Wartsilla, Jinko for catering our energy needs."
          }
          className="font-[Bodoni_Moda] text-4xl w-1/2 text-center relative z-10"
        />

        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={"/devisions/power.jpg"}
            className="object-cover absolute top-12 right-1/4 mix-blend-exclusion"
            height={100}
            width={300}
            ref={img1Ref}
            alt="Power generation facility"
            priority
          />
          <Image
            src={"/devisions/power2.jpg"}
            ref={img2Ref}
            className="object-cover absolute bottom-24 left-28 mix-blend-exclusion"
            height={100}
            width={400}
            alt="Power plant machinery"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Power;
