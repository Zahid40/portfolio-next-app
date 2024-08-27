"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BannerScroll from "../components/things/BannerScroll";
import HeroSection from "../components/HomePageComponents/HeroSection";
import AboutDetailsSection from "../components/HomePageComponents/AboutDetailsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutDetailsSection/>
    </>
  );
}
