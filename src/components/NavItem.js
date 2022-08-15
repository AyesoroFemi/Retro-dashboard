import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => {
  const path = window.location.pathname;

  return (
    <div>
      <NavLink to={item.path}>
        <div
          className={`flex gap-x-4 items-center text-gray-600 pl-4 py-2 my-2 w-12/12 ${
            path === item.path &&
            "bg-blue-100 text-black text-blue-700 font-bold w-full pl-4 rounded-lg"
          }`}
        >
          <span>{item.icon}</span>
          <p className="text-lg">{item.text}</p>
          <p className="pl-6"> {item.icon2}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavItem;
