"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";

function Navbar() {
  const [menuheight, setMenuheight] = useState(14);
  return (
    <nav className="bg-zbg flex items-center justify-between gap-4 p-4 md:p-8 sticky top-0 ">
      <div className="w-full flex justify-between items-center gap-4">
        <img src="/android-chrome-512x512.png" alt="logo" className="w-14" />
        
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">Lets Talk</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
