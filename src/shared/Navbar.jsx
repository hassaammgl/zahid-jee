import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="border-[#ffff00] border-2 w-screen" />
      <Image
        src={"/logo.png"}
        alt="Logo"
        className="inverted"
        width={2}
        height={4}
      />
      <div>
        <Link href={""}>Home</Link>
        <Link href={""}>Divisions</Link>
        <Link href={""}>Products</Link>
        <Link href={""}>Governance</Link>
        <Link href={""}>Investor</Link>
        <Link href={""}>Media</Link>
        <Link href={""}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
