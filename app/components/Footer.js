"use client";
import React from "react";
import Link from "next/link";
import BannerScroll from "./things/BannerScroll";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaDribbble, FaBehance, FaFigma, FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiBuymeacoffee } from "react-icons/si";
import { RxArrowTopRight } from "react-icons/rx";

function Footer() {
  return (
    <>
      <div className="bg-zgary overflow-hidden">
        <div className="w-96 h-16 relative top-[-100px] shadow-[0_0px_1000px_30px_var(--zprimary-800)]"></div>
        <div className="p-4 pb-8 md:p-8 md:pb-16 flex flex-col md:flex-row gap-12 md:gap-2">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h2 className="text-5xl font-medium">
              Designed and developed with passion. Crafted to inspire.
            </h2>
            <Link
              href="/contact"
              className="bg-zprimary-600 hover:bg-zprimary-800 w-full md:w-1/2 p-2 flex justify-center items-center gap-6 hover:gap-12 rounded-full hover:shadow-[0_0px_40px_0px_var(--zprimary-800) group"
            >
              Connect With Me
              <RxArrowTopRight className="text-3xl group-hover:rotate-[360deg]" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start md:items-end gap-4">
            <div className="flex flex-wrap justify-start md:justify-end items-center text-2xl gap-4">
              <Link
                target="_blank"
                href="https://github.com/Zahid40"
                className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full hover:border-zprimary-500 group hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105"
              >
                <FaGithub className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">
                  Github
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/zahid-ansari-53354926a/"
                className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105"
              >
                <FaLinkedin className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">
                  Linkedin
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/zahid_w83/"
                className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105"
              >
                <FaInstagram className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">
                  Instagram
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-start md:justify-end items-center text-2xl gap-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/people/Zahid-Ansari/pfbid028ctFpE3qfYDUMTN2n4sJHW54ttWPfqMYm1PktRaLNzJ9xUbuR5iFmBwpKcSG238ol/?mibextid=qi2Omg&rdid=BINyma9I1MPVF5WL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F3MQod3tx9MXBM7AL%2F%3Fmibextid%3Dqi2Omg"
                className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105"
              >
                <FaFacebook className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">
                  Facebook
                </span>
              </Link>
              <Link
                target="_blank"
                href="mailto:zahidanasari17@gmail.com"
                className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105"
              >
                <BiLogoGmail className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">
                  Mail
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-start md:justify-end items-center text-2xl gap-4">
              <Link
                target="_blank"
                href="https://www.figma.com/@zahid8"
                className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105"
              >
                <FaFigma className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">
                  Figma
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://dribbble.com/zahid83"
                className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105"
              >
                <FaDribbble className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">
                  Dribbble
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://www.behance.net/zahidanasari"
                className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105"
              >
                <FaBehance className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">
                  Behance
                </span>
              </Link>
            </div>
            <Link target="_blank" href="https://buymeacoffee.com/zahid40">
              <div className="flex justify-center items-center gap-2 py-2 px-4 border border-zsecondary-600 rounded-full group hover:border-zsecondary-500 hover:shadow-[0_0px_20px_0px_var(--zsecondary-700)] hover:scale-105">
                <SiBuymeacoffee />
                Buy me a coffee
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4  p-4 md:p-8 gap-4">
          {/* <p className="col-span-2 md:col-span-4 text-xl">Usefull Links</p> */}
          <a href="https://www.codewithharry.com/" className="text-sm font-normal text-gray-400 hover:text-white">CodeWithHarry</a>
          <a href="https://www.fffuel.co/" className="text-sm font-normal text-gray-400 hover:text-white">fffuel</a>
          <a href="https://fonts.google.com/" className="text-sm font-normal text-gray-400 hover:text-white">Google Fonts</a>
          <a href="https://fontawesome.com/" className="text-sm font-normal text-gray-400 hover:text-white">Fontawesome</a>
          <a href="https://www.freepik.com/" className="text-sm font-normal text-gray-400 hover:text-white">Freepik</a>
          <a href="https://storyset.com/" className="text-sm font-normal text-gray-400 hover:text-white">Storyset</a>
          <a href="https://www.flaticon.com/" className="text-sm font-normal text-gray-400 hover:text-white">Flaticon</a>
          <Link href={"/"} className="text-sm font-normal text-gray-400 hover:text-white">More Usefull Links</Link>
        </div>

        <BannerScroll />
        <div className="p-4 md:p-8">
          <div className="flex justify-between">
            <small className="text-sm">
              &copy; 2024 | Zahid | All Rights Reserved
            </small>
            <small>
              <Link href="/PrivacyPolicy"> Privacy Policy</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
