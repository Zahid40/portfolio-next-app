import Loginpage3d from "@/app/components/Loginpage3d";
import React from "react";

function Contact() {
  return (
    <div className=" rounded-xl overflow-hidden w-full h-full flex items-center justify-center">
      <div className="w-[1080px] h-[600px] flex justify-center">
        <div className="rounded-3xl overflow-hidden w-1/2 h-full">
          <Loginpage3d />
        </div>
        <div className="w-1/2">
            <h1 className="text-5xl font-medium ">Let’s Make Something Phenomenol</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
