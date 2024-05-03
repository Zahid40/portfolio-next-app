"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiHomeFill } from "react-icons/ri";
import { IoFlaskSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation'

function Navbar() {
  var pathname = usePathname();
  return (
    <nav className="bg-zbg flex items-center justify-between gap-4 px-4 py-2 md:px-8 md:py-4 sticky top-0 z-10">
      <div className="w-full flex justify-between items-center gap-4">
        <img src="/android-chrome-512x512.png" alt="logo" className="w-12 md:w-14" />

        <ul className="flex items-center justify-center md:gap-6 gap-4 text-xs md:text-sm">
          <li>
            <Link
              href="/"
              className={pathname== '/' ? "text-xs text-zprimary-400" : "text-xs text-zgary2"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={pathname== '/projects' ? "text-xs text-zprimary-400" : "text-xs text-zgary2"}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="italic flex justify-center items-center gap-2 py-2 md:px-8 px-4 border  rounded-full group border-zprimary-800  hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)]"
            >
              Let's Talk <div className="w-2 h-2 bg-zsecondary-400 rounded-full animate-ping relative left-4"></div><div className="w-2 h-2 bg-zsecondary-700 rounded-full "></div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
