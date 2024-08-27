import React from "react";
import Link from "next/link"
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi"; 

function AboutDetailsSection() {
  return (
    <div className="flex md:flex-row flex-col gap-12 p-8">
      <Image src={"/images/zahidimage.png"} className="bg-yellow-500 rounded-full" width={300} height={300} alt="zahidimage"/>
      <div className="flex md:flex-row flex-col justify-center items-center gap-12">
        <p className="text-xl text-center">
          Hi, I&apos;m Zahid! I&apos;m a passionate web developer and designer dedicated
          to creating beautiful and functional websites. With a keen eye for
          detail and a love for coding, I enjoy bringing ideas to life through
          innovative and user-friendly designs.
        </p>
        <Link href={"/about"}>
        <div className="flex  gap-4 justify-center items-center min-w-48 h-48 bg-primary-600 rounded-full ">
          <span className="text-md font-medium">About Me</span>
          <FiArrowUpRight className="text-4xl" />
        </div>
        
        </Link>
      </div>
    </div>
  );
}

export default AboutDetailsSection;
