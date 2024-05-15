"use client";
import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import BannerScroll from "./components/things/BannerScroll";
import { SiNextdotjs , SiReact , SiHtml5 , SiTailwindcss , SiVite , SiCss3 , SiJavascript  ,SiFigma   } from "react-icons/si";

export default function Home() {

  // Create reference to store the DOM element containing the animation
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Web Developer", "UI Designer"],
  //     typeSpeed: 60,
  //     backSpeed: 60,
  //     fadeOut: true,
  //     loop: true,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <>
    
        <div className="md:w-96 w-56 md:h-56 h-48 bg-zprimary-900 absolute md:top-[30%] top-[25%] md:left-[39%] left-[10%] z-10 "></div>
      <div className="py-8 h-auto flex flex-col justify-between relative  z-20 backdrop-blur-[140px]">
        <div className="flex flex-col justify-center items-center md:px-8 px-4 md:py-16 py-8 flex-wrap ">
          <div className="md:w-3/5 flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <h2 className="mr-4 md:text-5xl text-3xl">Hey ! I am </h2>
              <div className="flex items-center bg-zgary md:pr-8 pr-6 rounded-[500px]">
                <div
                  className="bg-cover bg-center bg-no-repeat md:w-20 w-12 aspect-square rounded-full"
                  style={{ backgroundImage: `url('/zahid_image.png')` }}
                ></div>
                <h2 className="ml-4 md:text-5xl text-3xl font-medium italic  text-zsecondary-500">
                  Zahid
                </h2>
              </div>
            </div>

            <div className="md:text-7xl text-5xl text-center">
              Frontend Web Developer
            </div>

            <p className="text-sm md:text-3xl">Based in India</p>
          </div>
          <div className="flex gap-8 py-12">
            <button className="btn bg-zprimary-800 px-8 py-4 rounded-xl">Download CV</button>
            <button className="btn bg-zprimary-800 px-8 py-4 rounded-xl">Contact Now</button>
          </div>
        </div>

        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="text-7xl  md:text-9xl font-normal mx-4">Develop</span>
            <span className="text-7xl  md:text-9xl font-normal mx-4">Create</span>
            <span className="text-7xl  md:text-9xl font-normal mx-4">Design</span>
          </div>

          <div className="absolute top-0 py-12 px-2 animate-marquee2 whitespace-nowrap">
            <span className="text-7xl  md:text-9xl font-normal mx-4">Develop</span>
            <span className="text-7xl  md:text-9xl font-normal mx-4">Create</span>
            <span className="text-7xl  md:text-9xl font-normal mx-4">Design</span>
          </div>
        </div>

        <div className="h-24 w-full bg-zprimary-800 rounded-lg"></div>

        {/* <BannerScroll/> */}
      </div>
    </>
  );
}
