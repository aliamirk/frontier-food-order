import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Containers/Wrapper";
import CartButton from "./CartButton";

const Navbar = () => {
  return (
    // MLLM
    <Wrapper>
      <nav className="flex bg-slate-800 text-white px-4 justify-between items-center h-16 z-10 sticky">
        <div className="flex gap-24 ">
          {/* Logo */}
          <div className="font-bold text-[18px] tracking-widest">Frontier</div>
          <div className="flex-row hidden md:block md:gap-6 md:space-x-4">
            <Link
              href="/"
              className=" hover:border-b-slate-500 hover:border-b-2  duration-500 transition"
            >
              Home
            </Link>
            <Link
              href="/About"
              className=" hover:border-b-slate-500 hover:border-b-2  duration-500 transition"
            >
              About
            </Link>
          </div>
        </div>

        <div>
          {/* Cart */}
          <CartButton className="rounded-full bg-slate-600" />
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
