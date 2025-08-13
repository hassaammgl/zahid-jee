import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fjallaOne } from "@/app/layout";

const Navbar = () => {
  return (
    <nav className="nav flex flex-col fixed z-10">
      <div className="border-[#ffff00] border-2 w-screen h-1" />
      <div className="flex justify-center items-center gap-4 mt-2">
        <Image
          src={"/logo1.png"}
          alt="Logo"
          className="inverted"
          width={40}
          height={40}
        />
        <h1
          className={`font-extrabold text-4xl title text-[#ffff00] ${fjallaOne.variable}`}
        >
          ZAHIDJEE TEXTILE MILLS
        </h1>
      </div>
      <div className="text-white font-light flex justify-center items-center mt-4 gap-8">
        <Link
          className="hover:opacity-75 hover:text-[#ffff00] transition-all ease-in-out duration-700"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="hover:opacity-75 hover:text-[#ffff00] transition-all ease-in-out duration-700"
          href={"/divisions"}
        >
          Divisions
        </Link>
        <Link
          className="hover:opacity-75 hover:text-[#ffff00] transition-all ease-in-out duration-700"
          href={"/products"}
        >
          Products
        </Link>
        <Link
          className="hover:opacity-75 hover:text-[#ffff00] transition-all ease-in-out duration-700"
          href={"/governance"}
        >
          Governance
        </Link>
        <Link
          className="hover:opacity-75 hover:text-[#ffff00] transition-all ease-in-out duration-700"
          href={"/investor"}
        >
          Investor
        </Link>
        <Link
          className="hover:opacity-75 hover:text-[#ffff00] transition-all ease-in-out duration-700"
          href={"/media"}
        >
          Media
        </Link>
        <Link
          className="hover:opacity-75 hover:text-[#ffff00] transition-all ease-in-out duration-700"
          href={"/contact"}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
