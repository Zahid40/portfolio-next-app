import React  from "react";
import Card from "@/app/components/projectsComponents/Card";
import c_data from '@/public/courseData.json'

export const metadata = {
  title: "Projects",
  description: "Designing",
};


function Projects() {
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
        {Object.keys(data).map((projectName) => (
          <Card key={projectName} data={data[projectName]} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
