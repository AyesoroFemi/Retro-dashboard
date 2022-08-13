import React from "react";
import { BiSearch } from "react-icons/bi";
import Admin from "../assets/admin.png";

function Search() {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row justify-between pb-4">
      <div className="flex justify-between px-6 rounded-lg bg-blue-100 items-center flex-0.5">
        <input
          placeholder="Search..."
          className="p-4 pl-2 outline-0 bg-blue-100"
        />
        <span className="">
          <BiSearch size={24} color="gray" />
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
