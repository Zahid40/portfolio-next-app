"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  House,
  UserRound,
  FlaskConical,
  Origami,
  Component,
} from "lucide-react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { IoFlask } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa6";
import { LuComponent } from "react-icons/lu";

function Navbar() {
  var pathname = usePathname();

  const [NavState, setNavState] = useState(true);
  const [NavLocation, setNavLocation] = useState("Home");

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <House />,
    },
    {
      name: "About Me",
      link: "#AboutMe",
      icon: <UserRound />,
    },
    {
      name: "Projects",
      link: "#Projects",
      icon: <FlaskConical />,
    },
    {
      name: "Blogs",
      link: "/blogs",
      icon: <Origami />,
    },
    {
      name: "Components",
      link: "/components",
      icon: <Component />,
    },
  ];

  const navItem_ActiveState_Class_d = "text-sm text-primary-300 hover:text-primary-200";
  const navItem_InActiveState_Class_d = "text-sm text-neutral-400 hover:text-primary-200"; 

  return (
  
      <nav className="flex items-center justify-between gap-4 px-6 py-4 md:px-8 md:py-4 sticky md:sticky top-0 md:top-0 z-50 bg-black ">
        <div className="w-full flex justify-between items-center gap-4">
          <Link href={"/"}>
            <img
              src="/assets/ZahidSig.svg"
              alt="logo"
              className="w-20 md:w-28"
            />
          </Link>
          <div className="flex gap-2">

          <ul className="hidden md:flex items-center justify-center md:gap-12 gap-4 text-sm md:text-sm w-full ">
            {navItems.map((item) => {
              return (
                <li key={item.name}>
                  <Link href={item.link}  className={pathname == item.link ? navItem_ActiveState_Class_d : navItem_InActiveState_Class_d }>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="italic hidden md:flex justify-center items-center gap-2 py-2 md:px-8 px-4 border  rounded-full  border-primary-800  hover:border-primary-500 hover:shadow-[0_0px_40px_0px_var(--primary-800)] md:w-48 w-40 text-sm"
          >
            Let&apos;s Talk
          </Link>
          </div>


          <button
            className="flex md:hidden justify-center items-center gap-2 py-2 px-6 border rounded-full  border-primary-800 text-sm"
            onClick={() => setNavState(!NavState)}
          >
            <p className="text-sm font-normal">{NavLocation}</p>
            <HiOutlineMenuAlt1 className="text-2xl" />
          </button>
        </div>
      </nav>
  );
}

export default Navbar;
