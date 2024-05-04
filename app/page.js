"use client";
import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import BannerScroll from "./components/things/BannerScroll";

export default function Home() {
  const urls_for_hero_gif = [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXNwd3lrb243czNnaWF1YTRtaDNxbWx5d2VnZG1iNHo0NWh0dDk4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4WSTSdQZXwME0/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHB3aTExOGdnbXJzZnQweHg1YXUycXVoc2oxZHU0ZDZjanM2bGNqcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3q3SUqPnxZGQpMNcjc/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hyc2x6NGEzam96cXN2ZTMwM2dtMG5laHp4ZWsydzYwODhvaDVyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S93ZDkcpYf6kw632hm/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RjM2s1emMyZWFzcnhieGtoNDRiOTdnb29wdjdpc2k2a3V5NjRmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOhqA8rf4IwuDoM0QI/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTcyN2prcnNwZmloNmh2NjA0Z2lrMGZvdzNjZGF3bDN5YmpyMGF5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1XQtHpcQKDpdWHSL9X/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExengxamtmOGg3NzBjbnNyeWxodWdjNmNsbmcxbWZzMnphZndkejd5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Xabj5L1Of4i6LyQ1Q/giphy.gif",
  ];

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
      <div className="py-8 h-auto flex flex-col justify-between">
      

        {/* <div
          className="bg-center bg-origin-border bg-no-repeat w-full h-80  overflow-hidden"
          style={{
            backgroundImage: `url(${urls_for_hero_gif[3]})`,
            backgroundSize: "110%",
          }}
        ></div> */}

        <div className="flex justify-center items-center md:px-8 px-4 md:py-16 py-8 flex-wrap">
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

            <p className="text-sm md:text-4xl">Based in INDIA</p>
          </div>

          {/* <div className="rounded-full w-32 h-32  bg-zprimary-700 flex justify-center items-center">
          </div> */}
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

        {/* <BannerScroll/> */}
      </div>
    </>
  );
}
