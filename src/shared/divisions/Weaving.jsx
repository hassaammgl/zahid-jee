"use client";
import { useRef } from "react";
import Image from "next/image";
import SplitText from "@/components/SplitText/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Weaving = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();

  useGSAP(() => {
    gsap.from([img1Ref.current, img2Ref.current], {
      clipPath: "inset(100% 0 0 0)",
      y: 400,
      delay: -1,
      opacity: 0,
      duration: 3,
      ease: "circ.inOut",
      stagger: 0,
    });
  });

  return (
    <div className="h-screen relative text-white flex justify-center items-center">
      <SplitText
        text={"Weaving"}
        as="h2"
        className="absolute text-white/40 text-[16vw] font-[Special_Gothic_Expanded_One]"
      />
      <div className="flex justify-center items-center w-screen">
        <SplitText
          splitType="words"
          text={
            "We have four hundred state of the art shuttleless looms capable of producing 100,000 meters daily. We are producing sheeting, lining, pocketing, herringbone, twills and much more."
          }
          className="font-[Bodoni_Moda] text-4xl w-1/2 text-center"
        />
        <Image
          src={"/devisions/weaving.avif"}
          className="object-fill absolute bottom-12 right-20 mix-blend-exclusion"
          height={100}
          width={300}
          ref={img1Ref}
          alt=""
        />
        <Image
          src={"/devisions/weaving3.jpg"}
          ref={img2Ref}
          className="object-fill absolute top-24 left-28 mix-blend-exclusion"
          height={100}
          width={400}
          alt=""
        />
      </div>
    </div>
  );
};

export default Weaving;
