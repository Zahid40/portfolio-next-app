"use client";
import React, { useState , useEffect } from "react";
import Link from "next/link";
import { RiHomeFill } from "react-icons/ri";
import { IoFlaskSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation'

function Navbar() {
  var pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  
  return (
    <nav className={` ${scrolled ? "backdrop-brightness-0 backdrop-blur-[140px]" : "backdrop-brightness-120 backdrop-blur-3xl "} flex items-center justify-between gap-4 px-6 py-4 md:px-8 md:py-4 sticky top-0 z-50`}>
      <div className="w-full flex justify-between items-center gap-4">
        <Link href={"/"}>
        <img src="/assets/ZahidSig.svg" alt="logo" className="w-20 md:w-28" />
        
        </Link>

        <ul className="flex items-center justify-center md:gap-6 gap-4 text-sm md:text-sm">
          <li>
            <Link
              href="/"
              className={pathname== '/' ? "text-sm text-zprimary-400 font-semibold" : "text-sm text-zgary2 font-semibold"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={pathname.startsWith('/projects') ? "text-sm text-zprimary-400 font-semibold" : "text-sm text-zgary2 font-semibold"}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="italic flex justify-center items-center gap-2 py-2 md:px-8 px-4 border  rounded-full group border-zprimary-800  hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)]"
            >
              Let&apos;s Talk 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
