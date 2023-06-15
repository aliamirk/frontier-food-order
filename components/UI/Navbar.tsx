import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";
import CartButton from "./CartButton";


const Navbar = () => {
  return (
    <Wrapper>
      <nav className="flex bg-slate-800 text-white px-4 justify-between items-center h-16 z-10 sticky">

        <div className="flex gap-24 ">
        {/* Logo */}
          <div className="font-bold text-[18px] tracking-widest">
            Frontier
          </div>
          <div className="flex-row hidden md:block md:gap-6 md:space-x-4">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          </div>
        </div>
      
        <div>
          {/* Cart */}
          <CartButton className="rounded-full bg-slate-600"/>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
