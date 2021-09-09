import { useEffect, useState } from "react";

export const useResolution = () => {
  const [resolution, setResolution] = useState({
    mobile: undefined,
    desktop: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setResolution({
        mobile: window.innerWidth <= 768,
        desktop: window.innerWidth > 768,
      });
    };
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return resolution;
};
