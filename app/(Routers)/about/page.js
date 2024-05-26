import React from 'react'
import Image from "next/image";


export const metadata = {
  title: "About - Zahid",
  description: "Designing",
};

function About() {
  return (
    <>
     <div className='flex flex-col justify-center items-center'>
      <Image src={"/images/zahidaboutimage.svg"} height={300} width={500} alt="Zahid" className='mt-12 h-48 md:h-96'/>
      <h1 className="text-6xl md:text-8xl pt-0 md:pt-0 pb-6 text-center">
        About Me
        <span className="text-zsecondary-600 text-9xl leading-0">.</span>
      </h1>
      <p className="font-light text-base md:text-xl text-center w-5/6 md:w-2/3 pb-8 md:pb-12">
        I&apos;d love to hear from you! Whether you have a question, a project
        idea, or just want to say hello, feel free to get in touch using the
        form below.
      </p>
     </div>
    </>
  )
}

export default About
