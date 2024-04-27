"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const urls_for_hero_gif = [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXNwd3lrb243czNnaWF1YTRtaDNxbWx5d2VnZG1iNHo0NWh0dDk4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4WSTSdQZXwME0/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHB3aTExOGdnbXJzZnQweHg1YXUycXVoc2oxZHU0ZDZjanM2bGNqcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3q3SUqPnxZGQpMNcjc/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hyc2x6NGEzam96cXN2ZTMwM2dtMG5laHp4ZWsydzYwODhvaDVyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S93ZDkcpYf6kw632hm/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RjM2s1emMyZWFzcnhieGtoNDRiOTdnb29wdjdpc2k2a3V5NjRmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOhqA8rf4IwuDoM0QI/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTcyN2prcnNwZmloNmh2NjA0Z2lrMGZvdzNjZGF3bDN5YmpyMGF5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1XQtHpcQKDpdWHSL9X/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExengxamtmOGg3NzBjbnNyeWxodWdjNmNsbmcxbWZzMnphZndkejd5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Xabj5L1Of4i6LyQ1Q/giphy.gif",
  ];

  return (
    <>
      <div>
        <div
          className="bg-center bg-origin-border bg-no-repeat w-full h-80 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${urls_for_hero_gif[1]})`,
            backgroundSize: "110%",
          }}
        ></div>

        <div className="flex justify-between items-center py-16 flex-wrap">

        <div className="w-3/5 flex flex-col gap-2">

          <div className="flex justify-start items-center">
            <h2 className="mr-4 text-5xl ">Hey ! I'm </h2>
            <div className="flex items-center bg-zgary pr-8 rounded-[500px]">
            <div
              className="bg-cover bg-center bg-no-repeat w-20 aspect-square rounded-full"
              style={{ backgroundImage: `url('/zahid_image.png')` }}
            ></div>
            <h2 className="ml-4 text-5xl font-medium italic  text-zsecondary-500">Zahid</h2>
            </div>
          </div>

          <div className="text-7xl">
            Web Developer
          </div>

          <p className="text-xl">Based in INDIA</p>

        </div>

        <div className="rounded-full w-32 h-32  bg-zprimary-700 flex justify-center items-center">
          {/* hello  */}
        </div>
        </div>

      </div>
    </>
  );
}
