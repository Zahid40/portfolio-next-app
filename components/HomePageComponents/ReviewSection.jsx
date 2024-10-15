"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DynamicPattern from "../things/DynamicPattern";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ReviewCard from "../projectsComponents/ReviewCard";
import { Reviewer_data } from "@/const";

function ReviewSection() {
  return (
    <div className="relative ">
      
      <div className="relative">
        <h1 className="text-clamp-5xl font-medium text-center py-16 md:py-16 z-10">
          What people say
        </h1>
      </div>

      <div className="relative max-w-[1440px] px-16   mx-auto min-w-auto">
        {Reviewer_data.map((rdata) => (
          <ReviewCard key={rdata.name} rdata={rdata} />
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
