"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import DynamicPattern from "../things/DynamicPattern";
import data from '@/public/data'

function PortfolioSection() {
  const proj = data.projects

  return (
    <div className="relative mainContainer">
      
      
      <div className="relative">
        <h1 className="text-clamp-9xl font-medium text-center  z-10">
          Portfolio
        </h1>
        <p className=" text-clamp-sm text-center  drop-shadow-2xl shadow-white ">
          What I&apos;ve done previously
        </p>
      </div>
      <div>
          
      </div>
    </div>
  );
}

export default PortfolioSection;
