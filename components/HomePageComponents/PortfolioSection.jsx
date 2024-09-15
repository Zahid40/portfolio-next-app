"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import DynamicPattern from "../things/DynamicPattern";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function PortfolioSection() {
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      console.log(api.slidesInView());
    });
  }, [api]);

  return (
    <div className="relative ">
      <div className="absolute top-16 md:top-1/2 -left-16  md:left-1/4   ">
        <div className="w-full h-full absolute shadow-inner-2xl shadow-black"></div>
        <DynamicPattern
          strokeColor="#444"
          strokeWidth={1}
          width={200}
          height={200}
        />
      </div>
      <div className="absolute -top-1/4 md:top-1/4 left-1/2  md:left-2/3   ">
        <div className="w-full h-full absolute shadow-inner-2xl shadow-black"></div>
        <DynamicPattern
          strokeColor="#444"
          strokeWidth={1}
          width={200}
          height={200}
        />
      </div>
      <div className="absolute  -top-16 md:-top-36 lg:-top-60 w-spiralimage2 h-auto aspect-video opacity-90 drop-shadow-2xl ">
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

      <div className="relative  mx-auto w-full">
        <Carousel
          setApi={setApi}
          className="w-full  mx-auto"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem
                key={index}
                className={`pl-1 md:basis-1/3 lg:basis-1/5 transition-transform duration-300 `}
              >
                <div className="p-1">
                  <Card className="bg-green-600 border-none shadow-xl">
                    <CardContent className="flex aspect-[3/2] items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>

        <div className="max-w-[1440px] mx-auto w-full px-main">
          <div className="md:w-3/4 lg:w-1/2 mx-auto border-2 rounded-xl aspect-[5/6] md:aspect-[3/2] lg:aspect-[3/2]">
            <h2 className="text-2xl">Job Description</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
