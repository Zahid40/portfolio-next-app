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
          <div className="w-1/2">
            <h2 className="text-5xl">
              Designed and developed with passion. Crafted to inspire.
            </h2>
            <Link href="/contact" className="bg-zsecondary-500 w-1/3 p-2 flex justify-center items-center ">Connect With Me</Link>
          </div>
          <div className="w-1/2 flex flex-col justify-start items-end gap-4">
            <div className="flex justify-end items-center text-2xl gap-4">
              <Link href="/">
                <FaGithub className="" />
              </Link>
              <Link href="/">
                <FaLinkedin className="" />
              </Link>
              <Link href="/">
                <FaInstagram className="" />
              </Link>
            </div>
            <div className="flex justify-end items-center text-2xl gap-4">
              <Link href="/">
                <FaFacebook className="" />
              </Link>
              <Link href="/">
                <BiLogoGmail className="" />
              </Link>
            </div>
            <div className="flex justify-end items-center text-2xl gap-4">
              <Link href="/">
                <FaFigma className="" />
              </Link>
              <Link href="/">
                <FaDribbble className="" />
              </Link>
              <Link href="/">
                <FaBehance className="" />
              </Link>
            </div>
            <div className="bg-zsecondary-500 w-1/3 p-2 flex justify-center items-center gap-2">
              <SiBuymeacoffee />
              Buy Me a Chai
            </div>
          </div>
        </div>

        <BannerScroll />
        <div className=" md:p-8">
          <div className="flex justify-between">
            <small className="text-sm">
              &copy; 2024 | Zahid | All Rights Reserved
            </small>
            <small>
              <Link href="/">Privacy Policy</Link> |
              <Link href="/"> Privacy Policy</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
