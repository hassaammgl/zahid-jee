import React from "react";
import Image from "next/image";

const Finishing = () => {
  return (
    <div className="h-screen relative text-white flex justify-center items-center">
      <h2 className="absolute leading-52 text-white/40 text-[12vw] text-center font-[Special_Gothic_Expanded_One]">
        Finishing & Stitching
      </h2>
      <div className="flex justify-center items-center w-screen">
        <p className="font-[Bodoni_Moda] text-4xl w-1/2 text-center">
          We have a capacity of bleaching, dyeing and printing 150,000 meters
          daily with modern day machinery. It is capable to process 100% cotton
          and poly-cotton blended fabrics. We have a stitching unit with 300
          state of the art machinery capable of filling up a 40FT container on a
          daily basis.
        </p>
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

export default Finishing;
