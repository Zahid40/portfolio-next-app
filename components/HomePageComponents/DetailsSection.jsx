import React from "react";
import { Button } from "../ui/button";

function DetailsSection() {
  return (
    <div className="w-full p-16">
      <div className="max-w-[1440px] m-auto w-full ">
        <div className="w-1/2 m-auto">
          <h4 className="text-center font-light text-2xl ">
            With 4 years of coding experience and 1 year in full-stack
            development, creating applications is my passion, turned into a
            profession.
          </h4>
        </div>

        <div className="grid grid-cols-4">
        <h2 className="col-span-1 text-center font-light text-4xl ">
            HI!. I&apos;m a Full-Stack Web Developer
          </h2>
          <div className="col-span-2">

          </div>
          <Button>
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailsSection;
