import React, { useEffect, useState } from "react";
import RenderRootNavbar from "./root/RenderRootNavbar";

interface LeadNavbarProps {
  pathname: string;
}

const Navbar: React.FC<LeadNavbarProps> = ({ pathname }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`-mt-28 sticky top-0 left-0 right-0 z-50 p-4 w-full mx-auto ${
        isScrolled ? "bg-pink-200 shadow-lg" : "bg-transparent"
      } transition-all duration-300`}
    >
      <RenderRootNavbar pathname={pathname} />
    </div>
  );
};

export default React.memo(Navbar);
