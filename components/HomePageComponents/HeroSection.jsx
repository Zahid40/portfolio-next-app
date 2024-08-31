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

const floatobjecticonstyle = "w-12 h-12 text-white ";
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
      <div className="w-full  py-12 px-16 max-w-6xl m-auto h-[90svh]  relative ">
        <div className="flex flex-col justify-between items-center h-full ">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex items-end justify-around">
              <h2 className=" md:text-8xl text-6xl text-center inline pb-3">
                {"{ "}Creative &
              </h2>
              <div className="relative h-40 w-52 ">
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
            <div className="w-full flex items-end justify-around">
              <div className=" h-24  w-52 ">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="m-auto w-full "
                  plugins={[plugin.current]}
                >
                  <CarouselContent className="-mt-2 h-[100px] rounded-2xl">
                    {floatObjectsdev.map((ele, index) => (
                      <CarouselItem key={index} className="pt-1 md:basis-1/1 ">
                        <div className="p-2">
                          <Card className="bg-gradient-to-t from-primary-500 to-primary-100 rounded-2xl">
                            <CardContent className="flex items-center justify-center p-0 h-[80px]">
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
              <h2 className=" md:text-8xl text-6xl text-center">
                Experienced <br />
              </h2>
            </div>
            <h2 className=" md:text-8xl text-6xl text-center">
              Web Developer {" }"}
            </h2>
          </div>

          <div className="flex justify-between items-center w-full border-t-2 pt-16">
            <p className="col-span-2 text-sm font-light w-96">
              With 4 years of coding experience and 1 year in full-stack
              development, creating applications is my passion, turned into a
              profession.With 4 years of coding and 1 year in full-stack
              development, creating applications is my passion, turned into a
              profession.
            </p>
            <div className="space-x-4">
              <Button
                variant="outline"
                className="text-white font-light px-8 "
                asChild
              >
                <Link href={"/ZahidCV.pdf"}>
                  Download CV <FiDownload className="ml-2" />
                </Link>
              </Button>
              <Button
                className="bg-gradient-one text-white font-light px-8 "
                asChild
              >
                <Link href={"/contact"}>
                  Let&apos;s Talk <FiArrowUpRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
