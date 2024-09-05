import React from 'react'
import RandomBoxGrid from './RandomBoxGrid'
import { getIconObject } from '@/const';
import { Sparkle } from "lucide-react";


function MySkillsSection() {
  const floatobjecticonstyle =
  "md:w-8 w-6 h-6 md:h-8  ";

const imageArray = [
  "/icons/icon.png",
  "/icons/icon.png",
  "/icons/icon.png",
];

// Array of icon names
const iconNames = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vite.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
];

// Generate icon content
const iconArray = iconNames.map((iconName) =>
  getIconObject(iconName, floatobjecticonstyle)
);

// Generate the final contentArray
const contentArray = [
  ...iconNames,
 <Sparkle fill="#204AD4" className="text-primary-500  md:w-8 md:h-8 w-4 h-4" />,
 <Sparkle  className="text-primary-500  md:w-8 md:h-8 w-4 h-4" />,
 <Sparkle fill="#204AD4" className="text-primary-500  md:w-8 md:h-8 w-4 h-4" />,
 <Sparkle  className="text-primary-500  md:w-8 md:h-8 w-4 h-4" />,
 <Sparkle fill="#204AD4" className="text-primary-500  md:w-8 md:h-8 w-4 h-4" />,
 <Sparkle  className="text-primary-500  md:w-8 md:h-8 w-4 h-4" />,
 <Sparkle fill="#204AD4" className="text-primary-500  md:w-8 md:h-8 w-4 h-4" />,
 <Sparkle  className="text-primary-500  md:w-8 md:h-8 w-4 h-4" />,
  ...iconArray.map((iconObj) => iconObj.icon), // Extract just the icon JSX from the iconArray
  ...imageArray, // Add image links directly to the array
];

  return (
    <div className='w-full  py-12 px-0 md:px-main max-w-5xl m-auto'>
      <h2 className='text-center text-clamp-5xl leading-none py-main'>{"{ "} My skills & <br/> expertise {" }"}</h2>
      <RandomBoxGrid width={5} contentArray={contentArray} timeInSeconds={5} />
    </div>
  )
}

export default MySkillsSection
