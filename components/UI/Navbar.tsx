import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex bg-slate-500 justify-between items-center h-16 mx-10">

      <div className="flex gap-24 ">
      {/* Logo */}
        <div className="font-semibold tracking-widest">
            Frontier
        </div>
        <ul className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
        </ul>
      </div>
      
      <div>
        {/* Cart */}
        <button className="w-32 h-10 rounded-full bg-slate-600">Cart: 0</button>
      </div>
    </nav>
  );
};

export default Navbar;
