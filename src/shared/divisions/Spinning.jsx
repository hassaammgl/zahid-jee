// "use client";
// import { useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const Spinning = () => {
//   const img1Ref = useRef();
//   const img2Ref = useRef();

//   useGSAP(() => {
//     gsap.from([img1Ref.current, img2Ref.current], {
//       clipPath: "inset(100% 0 0 0)",
//       ease: "circ.inOut",
//       duration: 3,
//       y: 400,
//       opacity: 0,
//     });
//   }, []);

//   return (
//     <div
//       id="spinning"
//       className="h-screen relative text-white flex justify-center items-center"
//     >
//       <h2 className="absolute text-white/40 text-[16vw] font-[Special_Gothic_Expanded_One]">
//         Spinning
//       </h2>
//       <div className="flex justify-center items-center w-screen">
//         <p className="font-[Bodoni_Moda] text-4xl w-1/2 text-center">
//           The spinning division consists of 175,000 spindles, most of which are
//           recently inducted. All of the machinery is state of the art from
//           leading machinery manufacturers such as Rieter, Toyoda and Marzoli.
//         </p>
//         <Image
//           ref={img1Ref}
//           src={"/imgs/room.jpg"}
//           className="object-fill absolute bottom-12 right-20 mix-blend-exclusion"
//           height={100}
//           width={300}
//           alt=""
//         />
//         <Image
//           ref={img2Ref}
//           src={"/imgs/yarn.jpg"}
//           className="object-fill absolute top-24 left-28 mix-blend-exclusion"
//           height={100}
//           width={400}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Spinning;

"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Spinning = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from([img1Ref.current, img2Ref.current], {
      clipPath: "inset(100% 0 0 0)",
      y: 400,
      opacity: 0,
      duration: 3,
      ease: "circ.inOut",
      stagger: 0, // Animates both at the same time
    });
  }, []);

  return (
    <div
      id="spinning"
      className="h-screen relative text-white flex justify-center items-center"
    >
      <h2 className="absolute text-white/40 text-[16vw] font-[Special_Gothic_Expanded_One]">
        Spinning
      </h2>
      <div className="flex justify-center items-center w-screen">
        <p className="font-[Bodoni_Moda] text-4xl w-1/2 text-center">
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
