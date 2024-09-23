import HeroSection from "../components/HomePageComponents/HeroSection";
import DetailsSection from "@/components/HomePageComponents/DetailsSection";
import FloatingSlides from "@/components/HomePageComponents/FloatingSlides";
import MySkillsSection from "@/components/HomePageComponents/MySkillsSection";
import PortfolioSection from "@/components/HomePageComponents/PortfolioSection";
import ReviewSection from "@/components/HomePageComponents/ReviewSection";
import { appname, description, keywords, url } from "@/const";

export const metadata = {
  title: appname,
  description: description,
  keywords: keywords,

  openGraph: {
    title: appname,
    description: description,
    url: url,
    siteName: appname,
    images: [
      {
        url: '/images/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'ogimage'
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: appname,
    description: description,
    creator: "@its_zahid83",
    images: [`${url}/images/ogimage.png`], // Must be an absolute URL
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <DetailsSection/>
      <FloatingSlides/>
      <MySkillsSection/>
      <PortfolioSection/>
      <ReviewSection/>
    </>
  );
}
