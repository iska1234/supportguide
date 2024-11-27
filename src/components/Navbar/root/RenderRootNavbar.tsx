import React from "react";
import RootNavbar from "./RootNavbar";

interface RenderRootNavbarProps {
  pathname: string;
}

const RenderRootNavbar: React.FC<RenderRootNavbarProps> = ({ pathname }) => {
  switch (pathname) {
    case "/home":
    case "/topics":
    case "/dedicatory":
      return <RootNavbar />;

    default:
      return null;
  }
};

export default React.memo(RenderRootNavbar);
