"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText as GSAPSplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, GSAPSplitText);

const Spinning = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    const titleSplit = new GSAPSplitText(titleRef.current, { type: "chars" });

    const paragraphSplit = new GSAPSplitText(paragraphRef.current, {
      type: "words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });
    gsap.from([img1Ref.current, img2Ref.current], {
      clipPath: "inset(100% 0 0 0)",
      y: 400,
      delay: -1,
      opacity: 0,
      duration: 3,
      ease: "circ.inOut",
      stagger: 0,
    });
    gsap.from(paragraphSplit.words, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });
  }, []);

  return (
    <div
      id="spinning"
      className="h-screen relative text-white flex justify-center items-center"
    >
      <h2
        ref={titleRef}
        className="absolute text-white/40 text-[16vw] font-[Special_Gothic_Expanded_One]"
      >
        Spinning
      </h2>
      <div className="flex justify-center items-center w-screen">
        <p
          ref={paragraphRef}
          className="font-[Bodoni_Moda] text-4xl w-1/2 text-center"
        >
          The spinning division consists of 175,000 spindles, most of which are
          recently inducted. All of the machinery is state of the art from
          leading machinery manufacturers such as Rieter, Toyoda and Marzoli.
        </p>
        <Image
          ref={img1Ref}
          src={"/imgs/room.jpg"}
          className="object-fill absolute bottom-12 right-20 mix-blend-exclusion"
          height={100}
          width={300}
          alt=""
        />
        <Image
          ref={img2Ref}
          src={"/imgs/yarn.jpg"}
          className="object-fill absolute top-24 left-28 mix-blend-exclusion"
          height={100}
          width={400}
          alt=""
        />
      </div>
    </div>
  );
};

export default Spinning;
