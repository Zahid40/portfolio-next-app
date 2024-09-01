import React from "react";
import { Button } from "../ui/button";
import { MyAddress, MyEmail, MyPhone } from "@/const";
import { Mail, PhoneCall, MapPin } from "lucide-react";

function DetailsSection() {
  return (
    <div className="w-full  py-12 px-main ">
      <div className="max-w-6xl m-auto w-full ">
        <div className="md:w-1/2 m-auto pb-12 md:pb-20">
          <h4 className="text-center font-light text-clamp-lg ">
            With <span className="text-primary-300 font-medium">4 years</span>{" "}
            of coding experience and 2 year in{" "}
            <span className="text-primary-300 font-medium">
              full-stack development
            </span>
            , creating applications is my passion, turned into a profession.
          </h4>
        </div>

        <div className="grid md:grid-cols-3 gap-4 py-20 md:py-24 place-items-center md:place-items-start place-content-center border-b-2 ">
          <h2 className="col-span-1 text-center font-light  text-2xl md:text-4xl ">
            HI!. I&apos;m a Full-Stack Web Developer
          </h2>
          <div className="col-span-1 space-y-2 md:pl-12 flex flex-col justify-center items-center">
            {[
              {
                title: "Email",
                icon: <Mail className="h-4 w-4" />,
                link: MyEmail,
              },
              {
                title: "Phone",
                icon: <PhoneCall className="h-4 w-4" />,
                link: MyPhone,
              },
              {
                title: "Address",
                icon: <MapPin className="h-4 w-4" />,
                link: MyAddress,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {item.icon}
                <span className="text-sm">{item.link}</span>
              </div>
            ))}
          </div>

          <Button className="place-self-center px-20 py-6 bg-gradient-one text-white font-light">
            Hire Me
          </Button>
        </div>

        <div className="py-12 m-auto flex flex-col gap-3">
          {[
            {
              number: 7,
              title: "Successful Missions",
              desc: "With 4 years of coding experience and 1 year in full-stack development, creating applications is my passion, turned into a profession.With 4 years of coding and 1 year in full-stack development, creating applications is my passion, turned into a profession.",
            },
            {
              number: 10,
              title: "Successful Missions2",
              desc: "With 4 years of coding experience and 1 year in full-stack development, creating applications is my passion, turned into a profession.With 4 years of coding and 1 year in full-stack development, creating applications is my passion, turned into a profession.",
            },
            {
              number: 23,
              title: "Successful Missions3",
              desc: "With 4 years of coding experience and 1 year in full-stack development, creating applications is my passion, turned into a profession.With 4 years of coding and 1 year in full-stack development, creating applications is my passion, turned into a profession.",
            },
          ].map((e) => (
            <div
              key={e.title}
              className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-12 justify-center items-center"
            >
              <div className="flex gap-4 justify-center items-center col-span-1">
                <h3 className="text-7xl md:text-9xl flex-1 text-center md:text-right">{e.number}</h3>
                <p className="md:flex-1 md:w-1/2 w-full text-sm font-normal">{e.title}</p>
              </div>
              <p className="col-span-2 text-xs md:text-sm font-light">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsSection;
