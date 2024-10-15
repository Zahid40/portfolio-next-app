import { BottomNavLinks } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 w-full  left-0 z-10   flex-row border-r flex justify-center ">
      <div className="grid grid-cols-4 place-items-center bg-background px-3  border-t shadow-sm  w-full ">
        {BottomNavLinks.map((e) => {
          const isActiveRoute =
          e.link === "/"
            ? pathname === e.link
              ? true
              : false
            : pathname.includes(e.link)
            ? true
            : false;
          return(
          <Link
            key={e.for}
            href={e.link}
            className={
              `relative text-sm font-semibold bg-transparent   flex justify-center items-center w-full h-14 text-white border-t-2  ${ isActiveRoute ? 'border-primary-400' : 'border-background'}`
            }
          >
            <div className="flex justify-center items-center flex-col font-normal h-full w-full "> 
              <e.icon className={`h-5 w-5 ${ isActiveRoute ? 'text-primary-300' : ''}`} />
              <p className={`text-[10px] text-center ${ isActiveRoute ? 'text-primary-300' : ''}`}>{e.name}</p>
            </div>
          </Link>
        )})}
      </div>
    </nav>
  );
}

export default BottomNav;
