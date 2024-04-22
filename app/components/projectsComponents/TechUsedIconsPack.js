import React from 'react'
import { SiNextdotjs , SiReact , SiHtml5 , SiTailwindcss , SiVite , SiCss3 , SiJavascript  ,SiFigma   } from "react-icons/si";

function TechUsedIconsPack(props) {
    const arricons = props.icons
  return (
    <div className='flex flex-col justify-center items-center'>
    {arricons.includes("nextjs") && <SiNextdotjs />}
    {arricons.includes("vite") && <SiVite />}
    {arricons.includes("react") && <SiReact />}
    {arricons.includes("js") && <SiJavascript />}
    {arricons.includes("html") && <SiHtml5 />}
    {arricons.includes("tailwind") && <SiTailwindcss />}
    {arricons.includes("css") && <SiCss3 />}
      
    </div>
  )
}

export default TechUsedIconsPack
