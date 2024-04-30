"use client";
import React from "react";
import Link from "next/link";
import BannerScroll from "./things/BannerScroll";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaDribbble, FaBehance, FaFigma, FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiBuymeacoffee } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="bg-zgary">
        <div className=" md:p-8 md:pb-16 flex">
          <div className="w-1/2 flex flex-col gap-8">
            <h2 className="text-5xl">
              Designed and developed with passion. Crafted to inspire.
            </h2>
            <Link
              href="/contact"
              className="bg-zprimary-500 w-1/3 p-2 flex justify-center items-center rounded-full"
            >
              Connect With Me
            </Link>
          </div>
          <div className="w-1/2 flex flex-col justify-start items-end gap-4">
            <div className="flex justify-end items-center text-2xl gap-4">
              <Link target="_blank" href="https://github.com/Zahid40" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full hover:border-zprimary-500 group hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">
                <FaGithub className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">Github</span>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/zahid-ansari-53354926a/" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">
                <FaLinkedin className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">Linkedin</span>
              </Link>
              <Link target="_blank" href="https://www.instagram.com/zahid_w83/" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">
                <FaInstagram className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">Instagram</span>
              </Link>
            </div>
            <div className="flex justify-end items-center text-2xl gap-4">
              <Link target="_blank" href="https://www.facebook.com/people/Zahid-Ansari/pfbid028ctFpE3qfYDUMTN2n4sJHW54ttWPfqMYm1PktRaLNzJ9xUbuR5iFmBwpKcSG238ol/?mibextid=qi2Omg&rdid=BINyma9I1MPVF5WL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F3MQod3tx9MXBM7AL%2F%3Fmibextid%3Dqi2Omg" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">
                <FaFacebook className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">Facebook</span>
              </Link>
              <Link target="_blank" href="mailto:zahidanasari17@gmail.com" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">
                <BiLogoGmail className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">Mail</span>
              </Link>
            </div>
            <div className="flex justify-end items-center text-2xl gap-4">
              <Link target="_blank" href="https://www.figma.com/@zahid8" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">
                <FaFigma className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">Figma</span>
              </Link>
              <Link target="_blank" href="https://dribbble.com/zahid83" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">
                <FaDribbble className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">Dribbble</span>
              </Link>
              <Link target="_blank" href="https://www.behance.net/zahidanasari" className="flex justify-center items-center gap-2 py-2 px-4 border border-zgray1 rounded-full group hover:border-zprimary-500 hover:shadow-[0_0px_40px_0px_var(--zprimary-800)] hover:scale-105">
                <FaBehance className="" />
                <span className="text-sm font-semibold text-zgary2 group-hover:text-zprimary-200">Behance</span>
              </Link>
            </div>
            <Link target="_blank" href="https://buymeacoffee.com/zahid40">
              <div className=" p-2 flex justify-center items-center gap-2 w-full rounded-full px-4 py-2 border border-zsecondary-500 hover:shadow-[0_0px_40px_0px_var(--zsecondary-400)">
                <SiBuymeacoffee />
                Buy me a coffee
              </div>
            </Link>
          </div>
        </div>

        <BannerScroll />
        <div className=" md:p-8">
          <div className="flex justify-between">
            <small className="text-sm">
              &copy; 2024 | Zahid | All Rights Reserved
            </small>
            <small>
              <Link href="/security-policy"> Privacy Policy</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
