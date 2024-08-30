import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Sparkle } from "lucide-react";

const BannerItem = ({ text }) => {
  const bannertextclass = "text-4xl md:text-5xl  md:text-6xl font-normal mx-4";
  return (
    <>
      <span className={bannertextclass}>{text}</span>
      <Sparkle className="w-12 h-12 text-primary-500" />
    </>
  );
};

function FloatingSlides() {
  const items = [
    "Imagin",
    "Code",
    "Design",
    "Develop",
    "Create",
    "Animate",
    "Edit",
    "Post",
    "Think",
  ];
  return (
    <div>
      <div className=" flex gap-12 overflow-x-hidden  h-24  ">
        <Marquee
          direction="right"
          gradient
          gradientColor={"black"}
          gradientWidth={50}
        >
          {items.map((item, index) => (
            <div className="flex justify-center items-center" key={index}>
              <BannerItem text={item} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className=" flex gap-12 overflow-x-hidden  h-24  ">
        <Marquee
          direction="left"
          gradient
          gradientColor={"black"}
          gradientWidth={50}
        >
          {items.map((item, index) => (
            <div className="flex justify-center items-center" key={index}>
              <BannerItem text={item} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default FloatingSlides;
