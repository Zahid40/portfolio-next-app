"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { usePathname } from "next/navigation";

function Navbar() {
  var pathname = usePathname();

  const [NavState, setNavState] = useState(true);
  const [NavLocation, setNavLocation] = useState("Home");

  useEffect(() => {
    if (pathname == "/") {
      setNavLocation("Home")
    }
    else if (pathname.startsWith("/about")) {
      setNavLocation("About")
    }
    else if (pathname.startsWith("/projects")) {
      setNavLocation("Projects")
    }
    else if (pathname.startsWith("/blogs")) {
      setNavLocation("Blogs")
    }
    else if (pathname.startsWith("/components")) {
      setNavLocation("Components")
    }
    else if (pathname.startsWith("/PrivacyPolicy")) {
      setNavLocation("Privacy Policy")
    }
    else{ setNavLocation("Invalid page")}
    
  }, [pathname])
  

  return (
    <>
    
    <nav
      className={`${"backdrop-brightness-0 backdrop-blur-[140px]" } flex items-center justify-between gap-4 px-6 py-4 md:px-8 md:py-4 sticky top-0 z-50 bg-black border-b border-1 border-gray-700`}
    >
      <div className="w-full flex justify-between items-center gap-4">
        <Link href={"/"}>
          <img src="/assets/ZahidSig.svg" alt="logo" className="w-20 md:w-28" />
        </Link>

        <ul className="hidden md:flex items-center justify-center md:gap-12 gap-4 text-sm md:text-sm w-full ">
          <li>
            <Link
              href="/"
              className={
                pathname == "/"
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                pathname.startsWith("/about")
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={
                pathname.startsWith("/projects")
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={
                pathname.startsWith("/blogs")
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/components"
              className={
                pathname.startsWith("/components")
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              Components
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className="italic hidden md:flex justify-center items-center gap-2 py-2 md:px-8 px-4 border  rounded-full  border-zprimary-800  hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] md:w-48 w-40 text-sm"
        >
          Let&apos;s Talk
        </Link>

        <button className="flex md:hidden justify-center items-center gap-2 py-2 px-6 border rounded-full  border-zprimary-800 text-sm" onClick={()=>setNavState(!NavState)}>
          <p className="text-sm font-normal">{NavLocation}</p>
          <HiOutlineMenuAlt1 className="text-2xl" /> 
        </button>
      </div>

    </nav>


      <div className={`${NavState ? "translate-y-[100vh]" : "translate-y-0"} fixed bottom-0 transition ease-in-out delay-150  z-50  w-full h-screen flex md:hidden justify-center items-end `} onClick={()=>setNavState(!NavState)}>
        <div className="p-12 backdrop-brightness-50 backdrop-blur-[140px] w-[90vw] rounded-t-3xl">
        <ul className="flex flex-col items-center justify-center md:gap-12 gap-4 text-sm md:text-sm w-full ">
          <li>
            <Link
              href="/"
              className={
                pathname == "/"
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                pathname.startsWith("/about")
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={
                pathname.startsWith("/projects")
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={
                pathname.startsWith("/blogs")
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/components"
              className={
                pathname.startsWith("/components")
                  ? "text-sm text-zprimary-400 font-semibold"
                  : "text-sm text-zgary2 font-semibold"
              }
            >
              Components
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
