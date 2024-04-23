import React from 'react'
import { SiNextdotjs , SiReact , SiHtml5 , SiTailwindcss , SiVite , SiCss3 , SiJavascript  ,SiFigma   } from "react-icons/si";

function TechUsedIconsPack(props) {
    const arricons = props.icons
  return (
    <div className='flex flex-col justify-center items-center gap-2'>

    {arricons.includes("nextjs") && <div className='bg-zbg p-2 rounded-full'> <SiNextdotjs  className='text-xl' /> </div> }
    {arricons.includes("vite") && <div className='bg-zbg p-2 rounded-full'> <SiVite  className='text-xl text-[#a74df7]' /> </div> }
    {arricons.includes("react") && <div className='bg-zbg p-2 rounded-full'> <SiReact  className='text-xl text-[#61dafb]' /> </div> }
    {arricons.includes("js") && <div className='bg-zbg p-2 rounded-full'> <SiJavascript  className='text-xl text-[#efd81d]' /> </div> }
    {arricons.includes("html") && <div className='bg-zbg p-2 rounded-full'> <SiHtml5 className='text-xl text-[#dd4b25]' /> </div> }
    {arricons.includes("tailwind") && <div className='bg-zbg p-2 rounded-full'> <SiTailwindcss  className='text-xl text-[#37bdf8]' /> </div> }
    {arricons.includes("css") && <div className='bg-zbg p-2 rounded-full'> <SiCss3  className='text-xl text-[#2862e9]' /> </div> }
      
    </div>
  )
}

export default TechUsedIconsPack
