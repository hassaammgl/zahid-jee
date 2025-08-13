import React from "react";
import Image from "next/image";
import Link from "next/link";

const navs = [
  {
    path: "/",
    name: "Home",
    _id: crypto.randomUUID(),
  },
  {
    path: "/divisions",
    name: "Divisions",
    _id: crypto.randomUUID(),
  },
  {
    path: "/products",
    name: "Products",
    _id: crypto.randomUUID(),
  },
  {
    path: "/governance",
    name: "Governance",
    _id: crypto.randomUUID(),
  },
  {
    path: "/investor",
    name: "Investor",
    _id: crypto.randomUUID(),
  },
  {
    path: "/media",
    name: "Media",
    _id: crypto.randomUUID(),
  },
  {
    path: "/contact",
    name: "Contact",
    _id: crypto.randomUUID(),
  },
];

const Navbar = () => {
  return (
    <nav className="nav w-screen flex flex-col fixed z-10 font-[Fjalla_One] pt-6">
      {/* <div className="border-[#ffff00] border-2 w-screen h-1" /> */}
      <div className="flex justify-center items-center gap-4 mt-2">
        <Image
          src={"/logo1.png"}
          alt="Logo"
          className="inverted"
          width={40}
          height={40}
        />
        <h1 className={`font-extrabold text-4xl title text-[#ffff00]`}>
          ZAHIDJEE TEXTILE MILLS
        </h1>
      </div>
      <div className="text-white font-light flex justify-center items-center mt-4 gap-8">
        {navs.map((nav, i) => (
          <Link
            key={nav._id}
            className="hover:opacity-75 hover:text-[#ffff00] transition-all ease-in-out duration-700"
            href={nav.path}
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
