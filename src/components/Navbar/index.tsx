import React from "react";
import RenderRootNavbar from "./root/RenderRootNavbar";

interface LeadNavbarProps {
  pathname: string;
}

const Navbar: React.FC<LeadNavbarProps> = ({ pathname }) => {
  return (
    <div className="sticky top-0 left-0 right-0 bottom-[auto] overflow-hidden p-4 w-full mx-auto  bg-pink-50 -mt-10">
      <RenderRootNavbar pathname={pathname} />
    </div>
  );
};

export default React.memo(Navbar);
