"use client";
import SplitText from "@/components/SplitText/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText as GSAPSplitText } from "gsap/all";
import { useRef } from "react";

export default function Home() {
  const titleRef = useRef(null);
  const titleRef2 = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    const titleSplit = new GSAPSplitText(
      [titleRef.current, titleRef2.current],
      { type: "chars" }
    );
    const paragraphSplit = new GSAPSplitText(paragraphRef.current, {
      type: "words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });
    gsap.from(paragraphSplit.words, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
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
            className="selection:bg-black selection:text-white text-[10vw] pl-4 leading-40 mt-40 font-extrabold font-[Oswald]"
          >
            ZAHIDJEE TEXTILE
          </h2>
          <h2
            ref={titleRef2}
            className="selection:bg-black selection:text-white text-end text-[10vw] pr-4 font-extrabold font-[Oswald]"
          >
            MILLS LIMITED
          </h2>
          <p
            ref={paragraphRef}
            className="selection:bg-black selection:text-white text-start w-1/3 pl-5 font-[Bodoni_Moda] text-xl"
          >
            <strong>Zahidjee Textile Mills Limited</strong> was established in{" "}
            <strong> 1987</strong>. Having an annual turnover of{" "}
            <strong> $130 million</strong>, It is one the largest vertically
            integrated textile companies in <strong>Pakistan</strong>. It
            consists of spinning, weaving, processing, stitching and power
            generation facilities. It is a hundred percent export based company.
            It is a leading home textile exporter.
          </p>
        </div>
        <div className="bottom-gradient-sec absolute -bottom-2 w-screen h-40" />
      </section>
      <section className=" h-screen flex items-end">
        <SplitText
          as="h1"
          delay={2}
          text={"this is textd fdfhgfdg"}
          duration={1}
          splitType="chars"
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
