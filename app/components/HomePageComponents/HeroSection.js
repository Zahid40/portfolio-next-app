"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import Marquee from "react-fast-marquee";

const BannerItem = ({ text }) => {
  const bannertextclass = "text-4xl md:text-5xl  md:text-6xl font-normal mx-4";
  return (
    <>
      <span className={bannertextclass}>{text}</span>
      <Image
        src="/assets/Star.svg"
        width={60}
        height={60}
        alt={text}
        className="h-16 w-16 p-[16px] col-span-2"
      />
    </>
  );
};

function HeroSection() {
  const items = [
    "Imagin",
    "Code",
    "Design",
    "Develop",
    "Create",
    "Animate",
    "Edit",
    "Post",
    "Think",
  ];
  const icons = [
    "html",
    "tailwindcss",
    "nextjs",
    "css",
    "javascript",
    "bootstrap",
    "reactjs",
    "vitejs",
  ];

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "Designer"],
      typeSpeed: 0,
      backSpeed: 0,
      fadeOut: true,
      cursorChar: "",
      backDelay: 5000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="py-12 md:py-24  flex flex-col justify-between relative  z-20 backdrop-blur-[140px]  bg-contain bg-no-repeat "
      >
        <div className="flex flex-col  justify-center items-center md:px-8 px-4 md:py-16 py-8 flex-wrap relative">
          <div className=" flex flex-col md:flex-row  justify-center items-center gap-6 ">
            {/* <div className="absolute ">
              {icons.map((icon, index) => {
                return (
                  <Image
                    key={icon}
                    src={`/assets/${icons[index]}.svg`}
                    width={40}
                    height={40}
                    alt={icon}
                    className={"z-10"}
                  />
                );
              })}
            </div> */}
            <div className="md:w-3/5 flex flex-col justify-center items-center gap-6">
              <p className="text-xs md:text-base font-normal tracking-wide">
                Hello world - this is a portfolio page
              </p>
              <h2 className=" md:text-6xl text-5xl text-center">
                My Name is{" "}
                <span className="text-primary-400 leading-normal">Zahid</span>
                <br />
                Frontend Web <br />{" "}
                <span className="h-20 block" ref={el}>
                  Developer
                </span>
              </h2>
              <p className="text-xs md:text-base font-normal text-center w-2/3 text-neutral-300 tracking-wide">
                In addition to being a web developer, I am also a skilled web
                designer. I specialize in UI design, responsive web design, and
                visual development.
              </p>
            </div>
          </div>
          <div className="flex gap-8 py-12">
            <div className="flex flex-col justify-center items-center relative">
              <a
                href="/ZahidCV.pdf"
                className="btn border  rounded-full group border-primary-800  hover:border-primary-500 hover:shadow-[0_0px_40px_0px_var(--primary-800)] px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-light  flex justify-center items-center gap-4"
              >
                Download CV <FiDownload className=" text-base md:text-xl" />
              </a>
              <small className="text-xs font-light italic text-gray-400 absolute bottom-[-20px]">
                0.8 Mb
              </small>
            </div>
            <Link
              href="/contact"
              className="btn bg-primary-800 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-light rounded-full  flex justify-center items-center gap-4 hover:border-primary-500 hover:shadow-[0_0px_40px_0px_var(--primary-800)]"
            >
              Contact Me <FiArrowUpRight className="text-base md:text-xl" />
            </Link>
          </div>
        </div>

        <div className=" flex gap-12 overflow-x-hidden  h-24 -rotate-3 ">
          <Marquee
            direction="right"
            gradient
            gradientColor={"black"}
            gradientWidth={50}
          >
            {items.map((item, index) => (
              <div className="flex justify-center items-center" key={index}>
                <BannerItem text={item} />
              </div>
            ))}
          </Marquee>
        </div>
        <div className=" flex gap-12 overflow-x-hidden  h-24 -rotate-3 ">
          <Marquee
            direction="left"
            gradient
            gradientColor={"black"}
            gradientWidth={50}
          >
            {items.map((item, index) => (
              <div className="flex justify-center items-center" key={index}>
                <BannerItem text={item} />
              </div>
            ))}
          </Marquee>
        </div>
        <div className=" flex gap-12 overflow-x-hidden  h-24 -rotate-3 ">
          <Marquee
            direction="right"
            gradient
            gradientColor={"black"}
            gradientWidth={50}
          >
            {items.map((item, index) => (
              <div className="flex justify-center items-center" key={index}>
                <BannerItem text={item} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
