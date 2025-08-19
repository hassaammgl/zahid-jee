"use client"

import { useRef } from "react";
import Image from "next/image";
import SplitText from "@/components/SplitText/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Power = () => {
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
        text={"Power Genration"}
        as="h2"
        splitType="words"
        className="absolute leading-52 text-white/40 text-[12vw] text-center font-[Special_Gothic_Expanded_One]"
      />
      <div className="flex justify-center items-center w-screen">
        <SplitText
          splitType="words"
          text={
            "The company boasts 25MW generation capabilities, which includes gas, heavy furnace oil, and solar power plants. Moreover, it has a grid 20MW. These power plants ensure cost-efficient operations and eliminate any chance of black-shutdowns which results in timely deliveries. We have relied on world leading brands to provide machinery such as Jenbacher, Wartsilla, Jinko for catering our energy needs."
          }
          className="font-[Bodoni_Moda] text-4xl w-1/2 text-center"
        />
        <Image
          src={"/imgs/room.jpg"}
          className="object-fill absolute bottom-12 right-20 mix-blend-exclusion"
          height={100}
          width={300}
          alt=""
        />
        <Image
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

export default Power;
