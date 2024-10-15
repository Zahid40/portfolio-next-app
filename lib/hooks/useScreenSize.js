import { useState, useEffect } from "react";

// Define Tailwind's breakpoints in pixels
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("default");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= breakpoints["2xl"]) {
        setScreenSize("2xl");
      } else if (width >= breakpoints.xl) {
        setScreenSize("xl");
      } else if (width >= breakpoints.lg) {
        setScreenSize("lg");
      } else if (width >= breakpoints.md) {
        setScreenSize("md");
      } else if (width >= breakpoints.sm) {
        setScreenSize("sm");
      } else {
        setScreenSize("default"); // For screens smaller than 'sm'
      }
    };

    // Call the function on mount and whenever the window is resized
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize(); // Initial call to set the correct screen size

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
