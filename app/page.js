"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import BannerScroll from "./components/things/BannerScroll";
import HeroSection from "./components/HomePageComponents/HeroSection";
import AboutDetailsSection from "./components/HomePageComponents/AboutDetailsSection";


export default function Home() {
  // Create reference to store the DOM element containing the animation
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Web Developer", "UI Designer"],
  //     typeSpeed: 60,
  //     backSpeed: 60,
  //     fadeOut: true,
  //     loop: true,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <>
      <HeroSection />
      <AboutDetailsSection/>
    </>
  );
}
