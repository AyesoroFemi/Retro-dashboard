import React from "react";
import Search from "./Search";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsArrowUpShort } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";

const Main = () => {
  return (
    <div>
      <div>
        <Search />
      </div>
      <div className="flex justify-between border-b-2 px-8 border-gray-200 items-center py-4 drop-shadow-lg rounded-t-lg mx-4">
        <p className="font-bold">Sales Overview</p>
        <button className="flex items-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-10 py-2 rounded-lg ">
          {" "}
          <span>
            <HiOutlinePlusSm />
          </span>
          Add Offer
        </button>
      </div>
      <div className="pt-10 px-10 flex justify-between">
        <div className="flex gap-x-4 items-center">
          <p className="text-4xl font-bold">$80,630</p>
          <div className="bg-blue-100 rounded-full p-1 font-bold ">
            <span>
              {" "}
              <BsArrowUpShort size={20} color="#0d9488" />
            </span>
          </div>
          <div className="flex items-center">
            {" "}
            <span>
              {" "}
              <HiOutlinePlusSm color="#0d9488" />
            </span>
            <span className="text-teal-600 font-bold">6,7%</span>
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="flex items-center">
            <span>
              <GoPrimitiveDot color="blue" />
            </span>
            <span>Incomes</span>
          </div>
          <div className="flex items-center">
            <span>
              <GoPrimitiveDot color="red" />
            </span>
            <span>Expenses</span>
          </div>
          <div
            className="flex items-center gap-x-10 border-2 border-gray-400 rounded-md px-4 py-1"
            id="yearly"
          >
            <p>Year</p>
            <span>
              <BiChevronDown size={24} color="gray" />
            </span>
          </div>
        </div>
      </div>
      <div className="h-96 border-4 my-4 border-red-500"></div>
    </div>
  );
};

export default Main;
