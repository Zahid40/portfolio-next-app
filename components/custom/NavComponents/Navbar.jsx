"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { House, UserRound, FlaskConical, Origami } from "lucide-react";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { Button } from "../../ui/button";
import { motion, useScroll, useSpring } from "framer-motion";
import useScreenSize from "@/lib/hooks/useScreenSize";
import BottomNav from "./BottomNav";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  var pathname = usePathname();
  const screenSize = useScreenSize();
  const [NavState, setNavState] = useState(true);
  const [NavLocation, setNavLocation] = useState("ds");

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: House,
    },
    {
      name: "About Me",
      link: "/about",
      icon: UserRound,
    },
    {
      name: "Projects",
      link: "/project",
      icon: FlaskConical,
    },
    {
      name: "Blogs",
      link: "/blog",
      icon: Origami,
    },
  ];

  const navItem_ActiveState_Class_d =
    "text-xs text-primary-300 hover:text-primary-200 font-semibold";
  const navItem_InActiveState_Class_d =
    "text-xs text-neutral-400 hover:text-primary-200 font-semibold";

  return (
    <header className="z-50 relative">
      <motion.div
        className="fixed top-0  w-full h-[2px]  mx-auto bg-primary-500 origin-left rounded-full "
        style={{ scaleX }}
      />
      
        <nav className="md:fixed top-2 w-full mx-auto z-50">
          <div className=" md:w-4/5  mx-auto md:border-2  border-neutral-800 md:rounded-full bg-background overflow-hidden">
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
              {screenSize === "default" || screenSize === "sm" || (
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
              )}
              <div className="space-x-4  w-auto">
                <Button
                  variant="outline"
                  className="text-white font-normal text-sm  w-auto shadow-md shadow-primary-400/20"
                  asChild
                >
                  <Link href={"/ZahidCV.pdf"}>
                    Download CV <FiDownload className="ml-2 text-lg" />
                  </Link>
                </Button>
                <Button
                  className="bg-gradient-one text-white font-normal text-sm  w-auto shadow-md shadow-primary-400/20"
                  asChild
                >
                  <Link href={"/contact"}>
                    Let&apos;s Talk <FiArrowUpRight className="ml-2 text-2xl" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      
      {!(screenSize === "default" || screenSize === "sm") || <BottomNav />}
    </header>
  );
}

export default Navbar;
