import React from "react";
import Link from 'next/link'
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import TechUsedIconsPack from "./TechUsedIconsPack";

function Card(props) {
  const data = props.data;
  return (
    <>
      <div className="bg-zgary p-8 rounded-xl flex flex-col gap-4">
        <div className=" flex flex-row gap-4">
          <div className="w-1/2 flex flex-col gap-6">
            <h1 className="text-9xl mb-16">{data.project_name}</h1>
            <img
              src={data.logo_url}
              alt={data.project_name}
              className="rounded-full w-10 aspect-square "
            />
          </div>
          <div className="w-1/2 flex flex-col items-end justify-end gap-6">
            <TechUsedIconsPack icons={data.technologies_used} />
            <p>{data.description}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href={data.project_link}
            type="button"
            className="border border-zprimary-700 hover:bg-zprimary-700 w-full py-2 px-8 rounded-md font-normal text-xl transition duration-300 ease-in-out flex justify-between items-center"
          >
            Visit Now
            <GoArrowUpRight className="font-black text-4xl" />
          </Link>
          <Link
            href={"/projects/" + data.project_name}
            type="button"
            className="border  border-zprimary-700 bg-zprimary-700 w-full py-2 px-8 rounded-md font-normal text-xl transition duration-300 ease-in-out flex justify-between items-center"
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
