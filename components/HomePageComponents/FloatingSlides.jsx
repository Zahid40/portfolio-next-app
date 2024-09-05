import { getIconObject } from "@/const";
import Marquee from "react-fast-marquee";

function FloatingSlides() {
  const floatobjecticonstyle =
    "w-8 h-8 text-neutral-400 hover:text-primary-500 hover:scale-125 transition-all duration-500";

  // Generate the floatObjectsdev array by calling getIconObject for each iconName
  const floatObjectsdev = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Vite.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
  ].map((iconName) => getIconObject(iconName, floatobjecticonstyle));

  const floatObjectsdesign = [
    "TailwindCSS",
    "ShadCnUi",
    "Bootstrap",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ].map((iconName) => getIconObject(iconName, floatobjecticonstyle));
  return (
    <div>
      <div className=" flex gap-12 overflow-x-hidden  h-24  ">
        <Marquee
          direction="right"
          gradient
          gradientColor={"black"}
          gradientWidth={150}
        >
          {floatObjectsdev.map((item, index) => {
            const bannertextclass =
              "text-xl  md:text-2xl font-light mx-6 md:mx-12 text-neutral-400";
            return (
              <div className="flex justify-center items-center" key={index}>
                <>
                  {item.icon}
                  <span className={bannertextclass}>{item.title}</span>
                </>
              </div>
            );
          })}
        </Marquee>
      </div>
      <div className=" flex gap-12 overflow-x-hidden  h-24  ">
        <Marquee
          direction="left"
          gradient
          gradientColor={"black"}
          gradientWidth={150}
          autoFill
        >
          {floatObjectsdesign.map((item, index) => {
            const bannertextclass =
              "text-xl  md:text-2xl font-light mx-6 md:mx-12 text-neutral-400";
            return (
              <div className="flex justify-center items-center" key={index}>
                <>
                  {item.icon}
                  <span className={bannertextclass}>{item.title}</span>
                </>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default FloatingSlides;
