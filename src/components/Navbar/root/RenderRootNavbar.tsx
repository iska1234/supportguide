import React from "react";
import RootNavbar from "./RootNavbar";

interface RenderRootNavbarProps {
  pathname: string;
}

const RenderRootNavbar: React.FC<RenderRootNavbarProps> = ({ pathname }) => {
  const topicRouteRegex = /^\/topic\/\d+$/;

  switch (true) {
    case pathname === "/home":
    case pathname === "/topics":
    case pathname === "/dedicatory":
    case pathname === "/settings":
    case topicRouteRegex.test(pathname):
      return <RootNavbar />;

    default:
      return null;
  }
};

export default React.memo(RenderRootNavbar);
