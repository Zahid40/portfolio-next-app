import React from "react";
import Image from "next/image";
import Link from "next/link";
import DynamicPattern from "../things/DynamicPattern";

function PortfolioSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-16 md:top-1/2 -left-16  md:left-1/4   ">
        <div className="w-full h-full absolute shadow-inner-2xl shadow-black"></div>
        <DynamicPattern
          strokeColor="#444"
          strokeWidth={1}
          width={200}
          height={200}
        />
      </div>
      <div className="absolute -top-1/4 md:top-1/4 left-3/4  md:left-2/3   ">
        <div className="w-full h-full absolute shadow-inner-2xl shadow-black"></div>
        <DynamicPattern
          strokeColor="#444"
          strokeWidth={1}
          width={200}
          height={200}
        />
      </div>
      <div className="absolute  -top-16 md:-top-36 lg:-top-60    w-spiralimage2 h-auto aspect-video opacity-90 drop-shadow-2xl ">
        <Image
          src={"/assets/linepattern3.svg"}
          fill
          style={{
            objectFit: "contain", // cover, contain, none
          }}
          alt="image2"
          className=""
        />
      </div>
      <div className="relative">
        <h1 className="text-clamp-9xl font-medium text-center py-16 md:py-32 z-10">
          {"{ "}Portfolio{" }"}
        </h1>
        <p className="absolute top-2/3 right-1/3 text-clamp-3xl font-medium drop-shadow-2xl shadow-white ">
          What I&apos;ve done previously
        </p>
      </div>
    </div>
  );
}

export default PortfolioSection;
