import { appname, url } from "@/const";
import React from "react";


export async function generateMetadata({ params }) {
  let name = params.slug
  return {
    title: "Project - " + name,
    description: "Designing",
    openGraph: {
      title: "Project - " + name,
      description: "Designing",
      url: url,
      siteName: appname,
      images: "/images/ogimage.png",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Project - " + name,
      description: "Designing",
      creator: "@its_zahid83",
      images: [`${url}`], // Must be an absolute URL
    },
  };
}

function page({ params }) {
  return <div>{params.slug}</div>;
}

export default page;
