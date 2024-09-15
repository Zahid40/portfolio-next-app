import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Sparkle } from 'lucide-react';


const BannerItem = ({ text }) => {
  const bannertextclass = "text-3xl md:text-3xl font-normal mx-4";
  return (
    <>
      <span className={bannertextclass}>{text}</span>
      <Sparkle  className="w-6 h-6 text-primary-500" />
    </>
  );
};

function BannerScroll() {
  const items = ["Develop", "Create", "Design","Develop", "Create", "Design","Develop", "Create", "Design","Develop", "Create", "Design","Develop", "Create", "Design","Develop", "Create", "Design"];

  return (
    <Marquee direction={"right"} gradient gradientColor={"#1a1a1a"} gradientWidth={100} className="flex py-2 overflow-hidden my-4">
      {items.map((item, index) => (
        <div className="flex justify-center items-center" key={index}>
          <BannerItem text={item} />
        </div>
      ))}
    </Marquee>
  );
}

export default BannerScroll;
