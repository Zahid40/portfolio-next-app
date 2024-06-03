import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import Marquee from "react-fast-marquee";

function HeroSection() {
  return (
    <>
      <div className="md:w-96 w-56 md:h-56 h-48 bg-zprimary-900 absolute md:top-[30%] top-[25%] md:left-[39%] left-[10%] z-10 "></div>
      <div
        className="py-12 md:py-24  flex flex-col justify-between relative  z-20 backdrop-blur-[140px] h-svh  bg-contain bg-no-repeat "
        style={{
          backgroundImage:
            "url('/assets/grid-style.svg'), url('/assets/grid-style180.svg')",
          backgroundPosition: "right 25rem top 0rem, left 25rem top 0rem",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "140%, 140%",
        }}
      >
        <div className="flex flex-col  justify-center items-center md:px-8 px-4 md:py-16 py-8 flex-wrap ">
          <div className=" flex flex-col md:flex-row  justify-between items-center gap-6 ">
            <div className="flex md:grid  grid-cols-2 justify-items-end gap-6 ">
              <Image
                src="/assets/html.svg"
                width={60}
                height={60}
                alt="html"
                className="bg-white rounded-2xl h-16 w-16 p-[16px] col-span-2"
              />
              <Image
                src="/assets/tailwindcss.svg"
                width={60}
                height={60}
                alt="tailwind"
                className="bg-white rounded-2xl h-16 w-16 p-[16px]"
              />
              <Image
                src="/assets/Nextjs.svg"
                width={60}
                height={60}
                alt="nextjs"
                className="bg-white rounded-2xl h-16 w-16 p-[16px]"
              />
              <Image
                src="/assets/css.svg"
                width={60}
                height={60}
                alt="css"
                className="bg-white rounded-2xl h-16 w-16 p-[16px]"
              />
            </div>
            <div className="md:w-3/5 flex flex-col justify-center items-center gap-6">
              <p className="text-xs md:text-base font-normal tracking-wide">
                Hello world - this is a portfolio page
              </p>
              <h2 className=" md:text-6xl text-4xl text-center">
                My Name is{" "}
                <span className="text-zprimary-400 leading-normal">Zahid</span>
                <br />
                Frontend Web Developer
              </h2>
              <p className="text-xs md:text-base font-normal text-center w-2/3 text-neutral-300 tracking-wide">
                In addition to being a web developer, I am also a skilled web
                designer. I specialize in UI design, responsive web design, and
                visual development.
              </p>
            </div>
            <div className="flex md:grid  grid-cols-2 justify-items-end gap-6">
              <Image
                src="/assets/javascript.svg"
                width={60}
                height={60}
                alt="javascript"
                className="bg-white rounded-2xl h-16 w-16 p-[16px] col-span-2 justify-self-start"
              />
              <Image
                src="/assets/bootstrap.svg"
                width={60}
                height={60}
                alt="bootstrap"
                className="bg-white rounded-2xl h-16 w-16 p-[16px]"
              />
              <Image
                src="/assets/reactjs.svg"
                width={60}
                height={60}
                alt="react"
                className="bg-white rounded-2xl h-16 w-16 p-[16px]"
              />
              <Image
                src="/assets/vitejs.svg"
                width={60}
                height={60}
                alt="vite"
                className="bg-white rounded-2xl h-16 w-16 p-[16px] col-span-2"
              />
            </div>
          </div>
          <div className="flex gap-8 py-12">
            <div className="flex flex-col justify-center items-center relative">
              <a
                href="/ZahidCV.pdf"
                className="btn border  rounded-full group border-zprimary-800  hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-light  flex justify-center items-center gap-4"
              >
                Download CV <FiDownload className=" text-base md:text-xl" />
              </a>
              <small className="text-xs font-light italic text-gray-400 absolute bottom-[-20px]">
                0.8 Mb
              </small>
            </div>
            <Link
              href="/contact"
              className="btn bg-zprimary-800 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-light rounded-full  flex justify-center items-center gap-4 hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)]"
            >
              Contact Me <FiArrowUpRight className="text-base md:text-xl" />
            </Link>
          </div>
        </div>

        <div className="relative flex gap-12 overflow-x-hidden  h-full">
          <Marquee>
            <span className="text-5xl  md:text-6xl font-normal mx-4">
              Develop
            </span>
            <Image
              src="/assets/Star.svg"
              width={60}
              height={60}
              alt="html"
              className="h-16 w-16 p-[16px] col-span-2"
            />
            <span className="text-5xl  md:text-6xl font-normal mx-4">
              Create
            </span>
            <Image
              src="/assets/Star.svg"
              width={60}
              height={60}
              alt="html"
              className="h-16 w-16 p-[16px] col-span-2"
            />
            <span className="text-5xl  md:text-6xl font-normal mx-4">
              Design
            </span>
            <Image
              src="/assets/Star.svg"
              width={60}
              height={60}
              alt="html"
              className="h-16 w-16 p-[16px] col-span-2"
            />
            <span className="text-5xl  md:text-6xl font-normal mx-4">
              Develop
            </span>
            <Image
              src="/assets/Star.svg"
              width={60}
              height={60}
              alt="html"
              className="h-16 w-16 p-[16px] col-span-2"
            />
            <span className="text-5xl  md:text-6xl font-normal mx-4">
              Create
            </span>
            <Image
              src="/assets/Star.svg"
              width={60}
              height={60}
              alt="html"
              className="h-16 w-16 p-[16px] col-span-2"
            />
            <span className="text-5xl  md:text-6xl font-normal mx-4">
              Design
            </span>
            <Image
              src="/assets/Star.svg"
              width={60}
              height={60}
              alt="html"
              className="h-16 w-16 p-[16px] col-span-2"
            />
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
