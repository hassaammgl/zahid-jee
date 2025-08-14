"use client";
import SplitText from "@/components/SplitText/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText as GSAPSplitText } from "gsap/all";
import { useRef,useState } from "react";
import CountUp from "@/components/CountUp/CountUp";
import CircularGallery from "@/components/CircularGallery/CircularGallery";

export default function Home() {
  const titleRef = useRef(null);
  const titleRef2 = useRef(null);
  const paragraphRef = useRef(null);
  const [showcount, setShowcount] = useState(false);

  useGSAP(() => {
    const titleSplit = new GSAPSplitText(
      [titleRef.current, titleRef2.current],
      { type: "chars" }
    );
    const paragraphSplit = new GSAPSplitText(paragraphRef.current, {
      type: "chars",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });
    gsap.from(paragraphSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
      onComplete:()=> setShowcount(true)
    });
  });

  return (
    <main className="relative w-screen">
      <video
        src="/hero.mp4"
        className="object-cover fixed -z-10 h-screen w-screen opacity-40"
        autoPlay
        loop
        muted
      />
      <section className="relative h-screen flex items-center text-white">
        <div className="w-screen mb-10">
          <h2
            ref={titleRef}
            className="selection:bg-black selection:text-white text-[12vw] pl-4 leading-40 mt-40 font-extrabold font-[Oswald]"
          >
            ZAHIDJEE TEXTILE
          </h2>
          <h2
            ref={titleRef2}
            className="selection:bg-black selection:text-white text-end text-[12vw] pr-4 font-extrabold font-[Oswald]"
          >
            MILLS LIMITED
          </h2>
          <div ref={paragraphRef} className="selection:bg-black selection:text-white text-[8vw] pl-4 leading-40 font-extrabold font-[Birthstone]">
            SINCE,
            {showcount && <CountUp duration={2} className="ml-4 font-[Tangerine]" value={1957} />}
          </div>
        </div>
        <div className="bottom-gradient-sec absolute -bottom-2 w-screen h-40" />
      </section>
      <section className=" h-screen flex items-end">
        {/* <SplitText
          as="h1"
          delay={2}
          text={"this is textd fdfhgfdg"}
          duration={1}
          splitType="chars"
          className=" text-9xl text-white"
        /> */}
        <CircularGallery  bend={3} textColor="#ffffff" borderRadius={0} scrollEase={0.02}/>
      </section>
      <section className=" h-screen flex items-end">
        <SplitText
          as="h1"
          delay={2}
          text={"this is textd fdfhgfdg"}
          duration={1}
          className=" text-9xl text-white"
        />
      </section>
      <section className=" h-screen flex items-end">
        <SplitText
          as="h1"
          delay={2}
          text={"this is textd fdfhgfdg"}
          duration={1}
          className=" text-9xl text-white"
        />
      </section>
    </main>
  );
}
