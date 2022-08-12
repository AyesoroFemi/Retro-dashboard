import React from "react";
import { BiSearch } from "react-icons/bi";
import Admin from "../assets/admin.png";

function Search() {
  return (
    <div className="flex justify-between">
      <div className="flex px-6 rounded-lg bg-gray-100 items-center">
        <input placeholder="Search..." className="pl-2 outline-0 bg-gray-100" />
        <span>
          <BiSearch color="gray" />
        </span>
      </div>
      <div className="flex gap-x-4">
        <div className="flex flex-col justify-end items-end ">
          <p>Jamesbrown@example.com</p>
          <span className="text-sm text-gray-500">Admin</span>
        </div>
        <img className="w-14 h-14" src={Admin} alt="admin_image" />
      </div>
    </div>
  );
}

export default Search;