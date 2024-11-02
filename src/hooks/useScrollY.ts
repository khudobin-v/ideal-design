import { useEffect, useState } from "react";

export const useScrollY = (scrollYPixels: number = 0) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > scrollYPixels ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return isScrolled;
};
