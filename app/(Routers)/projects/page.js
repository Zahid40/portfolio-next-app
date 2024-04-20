"use client"
import React from "react";
import projectdata from "@/public/projectdata.json";
import Card from "@/app/components/projectsComponents/Card";

function Projects() {
  const data = projectdata.projects; 

  return (
    <div className="rounded-xl overflow-hidden w-full h-full flex items-center justify-center">
      <div className="w-full h-full flex justify-center md:p-8 p-4 flex-col gap-12">
        {Object.keys(data).map((projectName) => (
          <Card key={projectName} data={data[projectName]} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
