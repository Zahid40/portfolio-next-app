import React  from "react";
import Card from "@/components/projectsComponents/Card";
import c_data from '@/public/projectdata.json'
import { appname, url } from "@/const";

export const metadata = {
  title: "Projects by Zahid",
  description: "Designing",
  openGraph: {
    title: "Projects by Zahid",
    description: "Designing",
    url: url,
    siteName: appname,
    images: [
      {
        url: '/images/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'ogimage'
      }
    ],
    type: "website",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by Zahid",
    description: "Designing",
    creator: "@its_zahid83",
    images: [`${url}/images/ogimage.png`], // Must be an absolute URL
  },
};


async function Projects() {
  const data = c_data.projects;

  return (
    <div className="rounded-xl overflow-hidden h-full w-full  pb-12 pt-[10vh] px-main max-w-6xl m-auto min-h-svh  relative ">
      <div className="border-2 p-8 rounded-sm">
      <h1 className="text-clamp-6xl  ">Projects</h1>
      <p className="font-light text-sm w-full md:w-2/3">DotoZ is a powerful todo app designed to help you organize tasks, set priorities, and boost productivity. It's available as a downloadable web app, created with React + Vite.</p>

      </div>
      <div className="w-full h-full flex justify-center md:p-8 p-4 flex-col gap-12 mx-auto ">
        {Object.keys(data).map((projectName) => (
          <Card key={projectName} data={data[projectName]} /> 
        ))}
      </div>
    </div>
  );
}

export default Projects;
