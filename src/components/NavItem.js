import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => {
  const activeLink = "bg-red-500 text-black text-blue-700 font-medium";
  const normalLink = "";

  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        to={item.path}
      >
        <div className="flex gap-x-4 items-center text-gray-600 py-4 w-6/12">
          <span>{item.icon}</span>
          <p className="text-lg">{item.text}</p>
          <p className="pl-8"> {item.icon2}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavItem;
