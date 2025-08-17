import React from "react";
import Image from "next/image";

const Weaving = () => {
  return (
    <div className="h-screen relative text-white flex justify-center items-center">
      <h2 className="absolute text-white/40 text-[16vw] font-[Special_Gothic_Expanded_One]">
        Weaving
      </h2>
      <div className="flex justify-center items-center w-screen">
        <p className="font-[Bodoni_Moda] text-4xl w-1/2 text-center">
          We have four hundred state of the art shuttleless looms capable of
          producing 100,000 meters daily. We are producing sheeting, lining,
          pocketing, herringbone, twills and much more.
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

export default Weaving;
