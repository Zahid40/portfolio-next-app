import Image from "next/image";
import HeroSection from "../components/HomePageComponents/HeroSection";
import DetailsSection from "@/components/HomePageComponents/DetailsSection";
import FloatingSlides from "@/components/HomePageComponents/FloatingSlides";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DetailsSection/>
      <FloatingSlides/>
    </>
  );
}
