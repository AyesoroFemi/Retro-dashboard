import React from "react";
import Expense from "../components/Expense";
import Main from "../components/Main";
import { ProductCategory } from "../components/Product";
import Search from "../components/Search";
import SideBar from "../components/SideBar";

const Dashboard = () => {

  return (
    <div className="flex flex-col lg:flex-row border-2 border-gray-100">
      <div className="">
        <SideBar />
      </div>
      <div className="flex-1 bg-blue-50 px-6 pt-4 pb-8 rounded-tl-3xl">
        <Search />
        <div className="h-[85vh] overflow-y-scroll">
          <Main />
          <Expense />
          <ProductCategory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// bg-[#ffffff]