import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const BannerItem = ({ text }) => {
  const bannertextclass = "text-3xl md:text-3xl font-normal mx-4";
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

function BannerScroll() {
  const items = ["Develop", "Create", "Design","Develop", "Create", "Design","Develop", "Create", "Design"];

  return (
    <Marquee direction={"right"} gradient gradientColor={"#1a1a1a"} gradientWidth={100} className="flex">
      {items.map((item, index) => (
        <div className="flex justify-center items-center" key={index}>
          <BannerItem text={item} />
        </div>
      ))}
    </Marquee>
  );
}

export default BannerScroll;
