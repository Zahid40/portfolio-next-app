import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiShadcnui,
} from "react-icons/si";

function FloatingSlides() {
  const floatobjecticonstyle =
    "w-8 h-8 text-neutral-400 hover:text-primary-500 hover:scale-125 transition-all duration-500";
  const floatObjectsdev = [
    {
      title: "HTML5",
      icon: <FaHtml5 className={floatobjecticonstyle} />,
    },
    {
      title: "CSS3",
      icon: <FaCss3 className={floatobjecticonstyle} />,
    },
    {
      title: "JavaScript",
      icon: <FaJsSquare className={floatobjecticonstyle} />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className={floatobjecticonstyle} />,
    },
    {
      title: "React.js",
      icon: <FaReact className={floatobjecticonstyle} />,
    },
    {
      title: "Vite.js",
      icon: <SiVite className={floatobjecticonstyle} />,
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs className={floatobjecticonstyle} />,
    },

    {
      title: "Node.js",
      icon: <FaNodeJs className={floatobjecticonstyle} />,
    },
    {
      title: "Express.js",
      icon: <SiExpress className={floatobjecticonstyle} />,
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className={floatobjecticonstyle} />,
    },
  ];

  const floatObjectsdesign = [
    {
      title: "TailwindCSS",
      icon: <SiTailwindcss className={floatobjecticonstyle} />,
    },
    {
      title: "ShadCnUi",
      icon: <SiShadcnui className={floatobjecticonstyle} />,
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap className={floatobjecticonstyle} />,
    },
    {
      title: "Figma",
      icon: <FaFigma className={floatobjecticonstyle} />,
    },
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop className={floatobjecticonstyle} />,
    },
    {
      title: "Adobe Illustrator",
      icon: <SiAdobeillustrator className={floatobjecticonstyle} />,
    },
  ];
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
