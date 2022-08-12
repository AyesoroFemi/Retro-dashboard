import React from "react";
import { navContent } from "./data";
import NavItem from "./NavItem";

const SideBar = () => {
  return (
    <div className="h-screen mx-10">
      <h1 className="text-6xl uppercase ">Retro</h1>

      <div className="mt-8">
        {navContent.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
