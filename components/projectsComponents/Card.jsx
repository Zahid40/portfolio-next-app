import React from "react";
import Link from 'next/link'
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import TechUsedIconsPack from "./TechUsedIconsPack";

function Card(props) {
  const {data , link} = props;
  return (
    <>
      <div className=" p-8 rounded-xl flex flex-col gap-4">
        <div className=" flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 w-full flex md:flex-col flex-row items-start justify-between gap-6">
            <h1 className="text-6xl md:text-9xl mb-16">{data.project_name}</h1>
            <img
              src={data.logo_url}
              alt={data.project_name}
              className="rounded-full w-10  aspect-square "
            />
          </div>
          <div className="md:w-1/2 w-full flex md:flex-col flex-row-reverse items-end justify-end gap-6">
            <TechUsedIconsPack icons={data.technologies_used} />
            <p className="text-xs md:text-sm">{data.description}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href={data.project_link}
            type="button"
            className="border border-primary-700 hover:bg-primary-700 w-full py-2 px-8 rounded-md font-normal text-xl transition duration-300 ease-in-out flex justify-between items-center"
          >
            Visit Now
            <GoArrowUpRight className="font-black text-4xl" />
          </Link>
          <Link
            href={link}
            type="button"
            className="border border-primary-700 bg-primary-700 w-full py-2 px-8 rounded-md font-normal text-xl transition duration-300 ease-in-out flex justify-between items-center"
          >
            See Journey
            <GoArrowRight className="font-black text-4xl" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
