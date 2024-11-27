import React from "react";
import UserDropdown from "./userDropdown";
import CustomLink from "@/components/customLink";


interface LeadNavbarProps {}

const RootNavbar: React.FC<LeadNavbarProps> = () => {
  return (
    <nav role="navigation" className="flex justify-between items-center px-20">
      <div className="text-pink-500 font-primaryBold flex items-center justify-start w-full gap-8">
        <CustomLink href="/home" title="Home" />
        <CustomLink href="/topics" title="Temas" />
        <CustomLink href="/dedicatory" title="Dedicatoria" />
      </div>
      <UserDropdown />
    </nav>
  );
};

export default React.memo(RootNavbar);
