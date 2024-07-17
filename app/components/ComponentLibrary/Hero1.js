"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSwiper } from 'swiper/react';
import Link from "next/link";
import Image from "next/image";
import { IoArrowDown } from "react-icons/io5";
// import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Typed from "typed.js";
// import Swiper core and required modules
import { EffectCoverflow, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-coverflow";
import "swiper/css";

function HeroSection() {
  // Create reference to store the DOM element containing the animation
  const mainhead = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(mainhead.current, {
      strings: [
        "Identify Your Security Gaps Before The Hackers",
        "Uncover Your Vulnerabilities Before Cyber Criminals Do",
        "Detect Weaknesses Before Threats Exploit Them",
        "Secure Your Network Before Hackers Break In",
        "Strengthen Your Defenses Before Cyber Attacks Strike",
      ],
      typeSpeed: 5,
      backSpeed: 5,
      backDelay: 6000,
      startDelay: 5,
      cursorChar: " ",
      fadeOut: true,
      loop: true,
      onStringTyped: ()=> { 
        swiperRef.current.swiper.slideNext();
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultPlaybackRate = 0.4;
      video.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);
  return (
    <>
      <div className="px-8 md:px-16 py-8 md:py-36 flex flex-col justify-between h-[90vh] md:h-auto relative overflow-hidden">
        <video
          width="1000"
          height="500"
          autoPlay
          loop
          ref={videoRef}
          className="relative md:absolute top-0 left-0 w-[200%] h-full  z-0 scale-x-[250%] scale-y-[375%] md:scale-x-[110%] md:scale-y-[110%]"
        >
          <source src="/video/bg-hero2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex flex-col-reverse md:grid grid-cols-3 z-10 relative w-full h-full">
          <div className="flex flex-col gap-8 z-10 w-full pt-24 col-span-2">
            <div className="h-32 md:h-48 w-full">
              <h1 className="font-normal text-4xl md:text-7xl " ref={mainhead}>
                Identify Your Security Gaps Before The Hackers
              </h1>
            </div>
            <p className="text-light text-sm md:text-base w-full md:w-2/3">
              We use real-world attack scenarios to identify potential
              vulnerabilities and security gaps in your systems and
              applications.
            </p>
            {/* <Button
              color="primary"
              variant="flat"
              className="text-[13px] md:text-[14px]  bg-primary-700 hover:bg-primary-500 hover:text-white hover:shadow-[0_35px_60px_-15px_var(--primary-500)] rounded-full py-1 px-6 md:px-12 md:w-56 flex gap-4"
              onClick={(e) => {
                const element = document.querySelector("#scroll");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore More <IoArrowDown className="text-lg animate-bounce" />
            </Button> */}
          </div>

          <div className="w-full h-full md:h-[150%] min-h-[80%] relative top-[50px] md:top-[-100px] aspect-video ">
            <Swiper
              ref={swiperRef}
              // install Swiper modules
              modules={[EffectCoverflow, A11y, Autoplay]}
              direction="vertical"
              centeredSlides={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 30,
                modifier: 1,
                scale:0.8 ,
                slideShadows:false,
              }}
              spaceBetween={10}
              slidesPerView={3}
              grabCursor={false}
              allowTouchMove= {false}
              loop
              className="w-full h-full aspect-video"
            >
               {[
                "https://www.freecodecamp.org/news/content/images/2022/01/alexander-sinn-KgLtFCgfC28-unsplash.jpg",
                "https://www.freecodecamp.org/news/content/images/2022/01/alexander-sinn-KgLtFCgfC28-unsplash.jpg",
                "https://www.freecodecamp.org/news/content/images/2022/01/alexander-sinn-KgLtFCgfC28-unsplash.jpg",
                "https://www.freecodecamp.org/news/content/images/2022/01/alexander-sinn-KgLtFCgfC28-unsplash.jpg",
                "https://www.freecodecamp.org/news/content/images/2022/01/alexander-sinn-KgLtFCgfC28-unsplash.jpg",
                "https://www.freecodecamp.org/news/content/images/2022/01/alexander-sinn-KgLtFCgfC28-unsplash.jpg",
              ].map((src, index) => (
                <SwiperSlide key={index} className="swiper-slide transition-transform duration-300">
                  <div className="flex justify-center items-center w-full h-full rounded-2xl">
                    <img src={src} className="rounded-2xl  w-full" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
