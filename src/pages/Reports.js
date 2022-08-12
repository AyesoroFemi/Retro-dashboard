import React from "react";
import SideBar from "../components/SideBar";

function Reports() {
  return (
    <div className="flex mx-8 my-10 border-2 border-gray-100">
      <div className="">
        <SideBar />
      </div>
      <div className="flex-1 bg-blue-50 px-6 py-4 rounded-tl-3xl">
        <h1 className="text-4xl">Reports</h1>
      </div>
    </div>
  );
}

export default Reports;
