import React from "react";
import { Button } from "../ui/button";
import { MyAddress, MyEmail, MyPhone } from "@/const";
import { Mail, PhoneCall, MapPin } from "lucide-react";
import { GiTrophyCup } from "react-icons/gi";
import Image from 'next/image'

function DetailsSection() {
  return (
    <div className="w-full  py-12 px-main ">
      <div className="max-w-6xl m-auto w-full ">
        <div className="md:w-1/2 m-auto py-12 md:py-20 relative">
          <div className="animate-shake absolute -top-20 left-1/2 z-10">
            <div className=" -rotate-6 w-28 h-28 bg-gradient-lightpink rounded-xl p-4   flex flex-col justify-end items-end">
              <GiTrophyCup className="text-7xl absolute rotate-12 -top-6 left-1/5 text-yellow-300 drop-shadow-lg" />
              <p className="text-xs text-center leading-tight text-background font-semibold">
                Excellence in Web Dev.
              </p>
            </div>
          </div>
          <div className="animate-shake absolute -bottom-20 -right-56 z-10">
            <div className=" rotate-6 w-28 h-24 bg-gradient-lightgreen rounded-xl p-4   flex flex-col gap-2 justify-between items-start">
              <div className=" flex justify-center items-center text-background font-semibold">
                <div className="w-8 h-8 rounded-full relative overflow-hidden border border-neutral-400">
                  <Image
                    src={"/images/logo.svg"}
                    fill
                    style={{
                      objectFit: "contain", // cover, contain, none
                    }}
                  />
                </div>
                <div className="w-8 h-8 rounded-full relative right-2 overflow-hidden border border-neutral-400 ">
                  <Image
                    src={"/images/logo.svg"}
                    fill
                    style={{
                      objectFit: "contain", // cover, contain, none
                    }}
                  />
                </div>
                <div className="w-8 h-8 rounded-full relative right-4 overflow-hidden border border-neutral-400 ">
                  <Image
                    src={"/images/logo.svg"}
                    fill
                    style={{
                      objectFit: "contain", // cover, contain, none
                    }}
                  />
                </div>
              </div>
              <p className="text-xs text-center text-background leading-tight font-semibold">
                Trust with 50+ Clients
              </p>
            </div>
          </div>
          <div className="animate-shake absolute -bottom-16 -left-56 z-10">
            <div className=" rotate-6 w-36 h-14 bg-gradient-lightblue rounded-xl p-4   flex  justify-between gap-3 items-center ">
              <p className="text-5xl text-background font-semibold">4</p>
              <p className="text-xs text-left text-background font-semibold leading-tight">
                Years of Experience
              </p>
            </div>
          </div>
          <h4 className="text-center font-light text-clamp-lg ">
            With <span className="text-primary-300 font-medium">4 years</span>{" "}
            of coding experience and 2 year in{" "}
            <span className="text-primary-300 font-medium">
              full-stack development
            </span>
            , creating applications is my passion, turned into a profession.
          </h4>
        </div>

        <div className="grid md:grid-cols-3 gap-4 py-20 md:py-36 place-items-center md:place-items-start place-content-center border-b-2 ">
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
                <h3 className="text-7xl md:text-9xl flex-1 text-center md:text-right">
                  {e.number}
                </h3>
                <p className="md:flex-1 md:w-1/2 w-full text-sm font-normal">
                  {e.title}
                </p>
              </div>
              <p className="col-span-2 text-xs md:text-sm font-light">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsSection;
