import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About - Zahid",
  description: "Designing",
};

function About() {
  return (
    <>
      <div className="p-4 md:p-8">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/zahidaboutimage.svg"}
            height={300}
            width={500}
            alt="Zahid"
            className="mt-12 h-48 md:h-96"
          />
          <h1 className="text-6xl md:text-8xl pt-0 md:pt-0 pb-6 text-center">
            About Me
            <span className="text-zsecondary-600 text-9xl leading-0">.</span>
          </h1>
          <p className="font-light text-base md:text-xl text-center w-full md:w-2/3 pb-8 md:pb-12">
            Hi, I&apos;m Zahid! I&apos;m a passionate web developer and designer
            dedicated to creating beautiful and functional websites. With a keen
            eye for detail and a love for coding, I enjoy bringing ideas to life
            through innovative and user-friendly designs.
          </p>
        </div>
        <h2 className="text-4xl md:text-4xl pt-0 md:pt-0 pb-6 ">My Journey</h2>
        <p className="font-light text-base md:text-xl  pb-8 md:pb-12">
          My journey in web development began 4 Years ago when I discovered my
          love for coding and design. Over the years, I have honed my skills in
          various technologies and tools, including HTML, CSS, JavaScript, and
          modern frameworks like React , Vue.js and Next.js .
        </p>

        <h2 className="text-4xl md:text-4xl pt-0 md:pt-0 pb-6 ">What I Do</h2>
        <p className="font-light text-base md:text-xl  pb-8 md:pb-12">
          <b className="font-semibold">Front-End Development </b>: Crafting
          responsive and interactive user interfaces.
          <br />
          <b className="font-semibold">Back-End Development </b>
          : Building robust server-side applications and APIs. <br />{" "}
          <b className="font-semibold">UI/UX Design </b>: Designing intuitive
          and engaging user experiences.
        </p>

        <h2 className="text-4xl md:text-4xl pt-0 md:pt-0 pb-6 ">My Work</h2>
      <p className="font-light text-base md:text-xl  pb-8 md:pb-12">
      I have had the privilege of working on a variety of projects, ranging from small business websites to large-scale web applications. Each project has been a unique opportunity to learn and grow as a developer.

      </p>

        <h2 className="text-4xl md:text-4xl pt-0 md:pt-0 pb-6 ">Let's Collaborate</h2>
      <p className="font-light text-base md:text-xl  pb-8 md:pb-12">
      I'm always excited to take on new challenges and collaborate with other passionate individuals. Whether you have a question, a project idea, or just want to say hello, feel free to get in touch!

      </p>
      </div>
    </>
  );
}

export default About;
