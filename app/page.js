import HeroSection from "../components/HomePageComponents/HeroSection";
import DetailsSection from "@/components/HomePageComponents/DetailsSection";
import FloatingSlides from "@/components/HomePageComponents/FloatingSlides";
import MySkillsSection from "@/components/HomePageComponents/MySkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DetailsSection/>
      <FloatingSlides/>
      {/* <MySkillsSection/> */}
    </>
  );
}
