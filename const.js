//varible Dependency Imports
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

//App
export const appname = "Zahid 's Portfolio";
export const url = "https://zahid.vercel.app";
export const description =
  "At Zahid Web Solutions, I offer top-tier web development services, specializing in cutting-edge technologies like Next.js, React.js, and JavaScript. Whether you're looking to build a responsive website, a dynamic web application, or need a web designer skilled in Figma, I have the expertise to deliver. My services include JavaScript development, Next.js web applications, React.js front-end development, and custom web design. Let’s create a modern website that’s fast, scalable, and visually appealing, tailored to your business needs.";
export const keywords = [
  "Zahid",
  "zahid",
  "Zahid webz",
  "Zahid web",
  "Zahid dev",
  "Dev",
  "Developer",
  "Web",
  "Website",
  "Designer",
  "Web designer",
  "Code",
  "Zahid Code",
  "Zahid Website",
  "Zahid Design",
  "zahid website",
  "zahid designer",
  "Next.js",
  "React",
  "JavaScript",
  "Web Development",
  "Frontend Development",
  "Web Design",
  "Figma",
  "Responsive Web Design",
  "UI/UX Design",
  "HTML5",
  "CSS3",
  "Node.js",
  "Full-Stack Development",
  "Progressive Web Apps",
  "Single Page Applications",
  "API Integration",
  "Web Animation",
  "Interactive Web Design",
  "SEO-Friendly Websites",
  "Website Optimization",
  "Cross-Browser Compatibility",
  "Web Accessibility",
  "Web Application Development",
  "JavaScript Frameworks",
  "Component-Based Architecture",
  "Modern Web Technologies",
  "Mobile-First Design",
  "User-Centric Design",
  "Digital Product Design",
  "zaid",
  "ahid",
  "sahid",
  "shahid",
  "zahid",
  "zahid ansari",
  "Zahid Ansari",
];

//Social Information
export const MyEmail = "zahidanasari17@gmail.com";
export const MyPhone = "+91 9625162488";
export const MyAddress = "Delhi , India";
export const MyWhatsapp = `https://wa.me/${MyPhone}`;
export const MyInstagramUsername = "zahid_w83";
export const MyInstagram = `https://www.instagram.com/${MyInstagramUsername}`;
export const MyGithubUsername = "Zahid40";
export const MyGithub = `https://github.com/${MyGithubUsername}`;
export const MyFacebookUsername = "Zahid-Ansari";
export const MyFacebook = `https://www.facebook.com/people/${MyFacebookUsername}`;
export const MyLinkdinUsername = "zahid-ansari-53354926a";
export const MyLinkdin = `https://www.linkedin.com/in/${MyLinkdinUsername}`;
export const MyTwitterUsername = "its_zahid83";
export const MyTwitter = `https://x.com/${MyTwitterUsername}`;
export const MyDribbbleUsername = "zahid83";
export const MyDribbble = `https://dribbble.com/${MyDribbbleUsername}`;
export const MyFigmaUsername = "@zahid8";
export const MyFigma = `https://www.figma.com/${MyFigmaUsername}`;
export const MyBehanceUsername = "zahidanasari";
export const MyBehance = `https://www.behance.net/${MyBehanceUsername}`;
export const MyBuyMeACoffeeUsername = "zahid40";
export const MyBuyMeACoffee = `https://buymeacoffee.com/${MyBuyMeACoffeeUsername}`;
export const MySkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vite.js",
  "Next.js",
  "Figma",
  "Photoshop",
  "Illustrator",
  "TailwindCSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
];

//Details
export const detailsArray = [
  {
    number: 7,
    title: "Successful Missions",
    desc: "With over 4 years of coding experience, I’ve successfully completed numerous projects, delivering innovative and reliable solutions. My commitment to excellence ensures every mission achieves its goals efficiently and with high quality.",
  },
  {
    number: 10,
    title: "Personal Projects",
    desc: "I’ve dedicated countless hours to personal projects, exploring new technologies and refining my skills. Each project represents a step forward in my journey, pushing boundaries and turning ideas into functional applications.",
  },
  {
    number: 23,
    title: "Technologies Covered",
    desc: "From front-end frameworks to back-end technologies, I’ve mastered over 23 different tools and languages. My versatility allows me to build full-stack applications that are robust, scalable, and built for the future.",
  },
];

// Function to get the icon object
export const getIconObject = (iconName, classNameStyleForIcon) => {
  const icons = {
    HTML5: FaHtml5,
    CSS3: FaCss3,
    JavaScript: FaJsSquare,
    TypeScript: SiTypescript,
    "React.js": FaReact,
    "Vite.js": SiVite,
    "Next.js": SiNextdotjs,
    "Node.js": FaNodeJs,
    "Express.js": SiExpress,
    MongoDB: SiMongodb,
    TailwindCSS: SiTailwindcss,
    ShadCnUi: SiShadcnui,
    Bootstrap: FaBootstrap,
    Figma: FaFigma,
    "Adobe Photoshop": SiAdobephotoshop,
    "Adobe Illustrator": SiAdobeillustrator,
  };

  const IconComponent = icons[iconName];

  if (!IconComponent) {
    return null;
  }

  return {
    title: iconName,
    icon: <IconComponent className={classNameStyleForIcon} />,
  };
};

export const shemaorgstructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zahid",
  jobTitle: "Web Developer & Designer",
  description: description,
  url: url,
  sameAs: [MyGithub, MyInstagram, MyWhatsapp, MyFacebook, MyTwitter],
  worksFor: {
    "@type": "Organization",
    name: "Zahid WebZ",
    url: url,
  },
  knowsAbout: keywords,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: MyEmail,
    telephone: MyPhone,
    url: url,
  },
};

// Reviewer Data

export const Reviewer_data = [
  {
    name:"Zahid",
    image:"/icons/icon.png"
  }
]
