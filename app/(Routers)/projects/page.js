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
    images: "/images/ogimage.png",
    type: "website",
    size : { width: 1200, height: 630 }
    
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

  // const [data, setdata] = useState(0);

  // useEffect(() => {
  //   fetch('/api/database/welcome')
  //   .then(response => response.json())
  //   .then(cdata => {
  //     // Use the data in your project page
  //     console.log(cdata);
  //     setdata(cdata);  
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
  // }, [])

  return (
    <div className="rounded-xl overflow-hidden w-full h-full flex items-center justify-center">
      <div className="w-full h-full flex justify-center md:p-8 p-4 flex-col gap-12">
        {await Object.keys(data).map((projectName) => (
          <Card key={projectName} data={data[projectName]} /> 
        ))}
      </div>
    </div>
  );
}

export default Projects;
