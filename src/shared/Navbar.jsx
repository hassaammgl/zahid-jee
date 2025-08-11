import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fjallaOne } from "@/app/layout";

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      <div className="border-[#ffff00] border-2 w-screen h-1" />
      <div className="flex justify-center items-center gap-4 mt-2">
        <Image
          src={"/logo1.png"}
          alt="Logo"
          className="inverted"
          width={50}
          height={50}
        />
        <h1 className={`text-white ${fjallaOne.variable}`}>ZAHIDJEE TEXTILE MILLS</h1>
      </div>
      <div className="text-white flex justify-center items-center mt-4 gap-8">
        <Link className="hover:text-[#ffff00] transition-colors ease-in-out duration-700" href={"/"}>Home</Link>
        <Link className="hover:text-[#ffff00] transition-colors ease-in-out duration-700" href={"/divisions"}>Divisions</Link>
        <Link className="hover:text-[#ffff00] transition-colors ease-in-out duration-700" href={"/products"}>Products</Link>
        <Link className="hover:text-[#ffff00] transition-colors ease-in-out duration-700" href={"/governance"}>Governance</Link>
        <Link className="hover:text-[#ffff00] transition-colors ease-in-out duration-700" href={"/investor"}>Investor</Link>
        <Link className="hover:text-[#ffff00] transition-colors ease-in-out duration-700" href={"/media"}>Media</Link>
        <Link className="hover:text-[#ffff00] transition-colors ease-in-out duration-700" href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
