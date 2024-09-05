"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiShadcnui,
} from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import DynamicPattern from "../things/DynamicPattern";
import { Sparkle } from "lucide-react";

const floatobjecticonstyle =
  "md:w-24 md:h-24 w-8 h-8 text-white drop-shadow-2xl  ";
const floatObjectsdev = [
  {
    title: "HTML5",
    icon: <FaHtml5 className={floatobjecticonstyle} />,
  },
  {
    title: "CSS3",
    icon: <FaCss3 className={floatobjecticonstyle} />,
  },
  {
    title: "JavaScript",
    icon: <FaJsSquare className={floatobjecticonstyle} />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className={floatobjecticonstyle} />,
  },
  {
    title: "React.js",
    icon: <FaReact className={floatobjecticonstyle} />,
  },
  {
    title: "Vite.js",
    icon: <SiVite className={floatobjecticonstyle} />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className={floatobjecticonstyle} />,
  },

  {
    title: "Node.js",
    icon: <FaNodeJs className={floatobjecticonstyle} />,
  },
  {
    title: "Express.js",
    icon: <SiExpress className={floatobjecticonstyle} />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className={floatobjecticonstyle} />,
  },
  {
    title: "TailwindCSS",
    icon: <SiTailwindcss className={floatobjecticonstyle} />,
  },
  {
    title: "ShadCnUi",
    icon: <SiShadcnui className={floatobjecticonstyle} />,
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap className={floatobjecticonstyle} />,
  },
  {
    title: "Figma",
    icon: <FaFigma className={floatobjecticonstyle} />,
  },
  {
    title: "Photoshop",
    icon: <SiAdobephotoshop className={floatobjecticonstyle} />,
  },
  {
    title: "Adobe Illustrator",
    icon: <SiAdobeillustrator className={floatobjecticonstyle} />,
  },
];

function HeroSection() {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
      <div className="relative w-full h-auto overflow-hidden">
        <div className="absolute z-10 bottom-24 md:-bottom-12  w-spiralimage  aspect-video opacity-90 drop-shadow-2xl ">
          <Image
            src={"/assets/llline.svg"}
            fill
            style={{
              objectFit: "contain", // cover, contain, none
            }}
            alt="zahidimage"
            className="bottom-12"
          />
        </div>
        <div className="w-full  pb-12 pt-[20vh] px-main max-w-6xl m-auto h-svh  relative ">
          <div className="absolute top-20 md:top-24 -left-3 md:left-12   ">
            <div className="w-full h-full absolute shadow-inner-2xl shadow-black"></div>
            <Sparkle className="md:w-12 md:h-12 h-8 w-8 absolute bottom-28 -right-52 md:-bottom-48  md:-left-12 text-5xl font-extrabold  text-primary-600 " />
            <DynamicPattern
              strokeColor="#444"
              strokeWidth={1}
              width={200}
              height={200}
            />
          </div>
          <div className="absolute top-96 md:top-80 -right-3 md:right-12 ">
            <div className="w-full h-full absolute shadow-inner-2xl shadow-black"></div>
            <Sparkle
              fill="#204AD4"
              className="md:w-12 md:h-12 h-8 w-8 absolute bottom-6 md:bottom-80 right-96 md:-right-12  text-primary-500 "
            />
            <DynamicPattern
              strokeColor="#444"
              strokeWidth={1}
              width={200}
              height={200}
            />
          </div>
          <div className="relative flex flex-col justify-between items-center h-full w-full z-20">
            <div className="w-full flex flex-col gap-4 md:gap-6">
              <div className="w-full gap-2 flex flex-row items-end justify-around">
                <h2 className=" md:text-8xl text-[8vw]  inline md:pb-3 w-full md:w-auto text-left">
                  {"{ "}Creative &
                </h2>
                <div className="relative h-[15vw] md:h-40 w-[50vw] md:w-52">
                  <Image
                    src={"/images/herobannerimage1.svg"}
                    fill
                    style={{
                      objectFit: "contain", // cover, contain, none
                    }}
                    alt="zahidimage"
                  />
                </div>
              </div>
              <div className="w-full flex gap-2 flex-row items-center justify-around">
                <div className=" md:h-24 h-16 w-[30vw] md:w-52 bg-gradient-to-t from-primary-600 to-background rounded-2xl relative">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    orientation="vertical"
                    className="m-auto w-[30vw] md:w-52 absolute -top-2 md:-top-6  "
                    plugins={[plugin.current]}
                  >
                    <CarouselContent className="mt-2 md:-mt-2  h-16 md:h-32 rounded-2xl ">
                      {floatObjectsdev.map((ele, index) => (
                        <CarouselItem
                          key={index}
                          className="pt-1 md:basis-1/1  "
                        >
                          <div className="py-0 md:py-2">
                            <Card className=" rounded-2xl bg-transparent  border-none shadow-none ">
                              <CardContent className="flex items-center justify-center p-0 h-16 md:h-[100px] w-[30vw] md:w-52 ">
                                {ele.icon}
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute right-0 top-1/2  hidden">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </Carousel>
                </div>
                <h2 className=" md:text-8xl text-[9vw] text-center">
                  Experienced <br />
                </h2>
              </div>
              <h2 className=" md:text-8xl text-[9vw] text-center">
                Web Developer {" }"}
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-16 gap-6 w-full">
              <p className="col-span-2 text-xs md:text-sm font-light md:w-96">
                Hello ! I&apos;m an experienced web developer and designer , specialized in React frameworks like Next.js etc and Javascript based in <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-green-500">India</span>
              </p>
              <div className="md:space-x-4 space-y-4 w-full md:w-auto">
                <Button
                  variant="outline"
                  className="text-white font-normal text-sm px-8 w-full md:w-auto shadow-md shadow-primary-400/20"
                  asChild
                >
                  <Link href={"/ZahidCV.pdf"}>
                    Download CV <FiDownload className="ml-2 text-lg" />
                  </Link>
                </Button>
                <Button
                  className="bg-gradient-one text-white font-normal text-sm px-8 w-full md:w-auto shadow-md shadow-primary-400/20"
                  asChild
                >
                  <Link href={"/contact"}>
                    Let&apos;s Talk <FiArrowUpRight className="ml-2 text-2xl" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
