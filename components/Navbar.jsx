"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  House,
  UserRound,
  FlaskConical,
  Origami,
  Component,
} from "lucide-react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { motion, useScroll, useSpring } from "framer-motion";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
      link: "/about",
      icon: <UserRound />,
    },
    {
      name: "Projects",
      link: "/project",
      icon: <FlaskConical />,
    },
    {
      name: "Blogs",
      link: "/blog",
      icon: <Origami />,
    },
  ];

  const navItem_ActiveState_Class_d =
    "text-xs text-primary-300 hover:text-primary-200 font-semibold";
  const navItem_InActiveState_Class_d =
    "text-xs text-neutral-400 hover:text-primary-200 font-semibold";

  return (
    <>
      <motion.div
        className="fixed top-0  w-full h-[2px]  mx-auto bg-primary-500 origin-left rounded-full "
        style={{ scaleX }}
      />
      <nav className="fixed top-2 w-full mx-auto z-50">
        <div className=" w-4/5  mx-auto border-2  border-neutral-800 rounded-full bg-background overflow-hidden">
          <div className="flex justify-between items-center gap-4 px-4 py-4 md:px-4 md:py-2">
            <Link href={"/"} className="relative w-24 h-12">
              <Image
                src="/assets/ZahidSig.svg"
                alt="logo"
                sizes="100px"
                fill
                style={{ objectFit: "contain" }}
              />
            </Link>
            <div className="flex gap-2">
              <ul className="hidden md:flex items-center justify-center md:gap-12 gap-4 text-sm md:text-sm w-full ">
                {navItems.map((item) => {
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.link}
                        className={
                          pathname == item.link
                            ? navItem_ActiveState_Class_d
                            : navItem_InActiveState_Class_d
                        }
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Button asChild varient="outline">
              <Link href="/contact" className="">
                Let&apos;s Talk
              </Link>
            </Button>

            <Button
              className=" md:hidden  gap-2 py-2 px-6 border rounded-full  border-primary-500 text-sm"
              onClick={() => setNavState(!NavState)}
            >
              <p className="text-sm font-normal">{NavLocation}</p>
              <HiOutlineMenuAlt1 className="text-2xl" />
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
