import React from "react";
import Image from "next/image";

const Power = () => {
  return (
    <div className="h-screen relative text-white flex justify-center items-center">
      <h2 className="absolute text-white/40 text-[16vw] font-[Special_Gothic_Expanded_One]">
        Power
      </h2>
      <div className="flex justify-center items-center w-screen">
        <p className="font-[Bodoni_Moda] text-4xl w-1/2 text-center">
          The company boasts 25MW generation capabilities, which includes gas,
          heavy furnace oil, and solar power plants. Moreover, it has a grid
          20MW. These power plants ensure cost-efficient operations and
          eliminate any chance of black-shutdowns which results in timely
          deliveries. We have relied on world leading brands to provide
          machinery such as Jenbacher, Wartsilla, Jinko for catering our energy
          needs.
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

export default Power;
