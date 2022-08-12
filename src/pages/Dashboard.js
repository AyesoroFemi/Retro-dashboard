import React from "react";
import Expense from "../components/Expense";
import Main from "../components/Main";
import { ProductCategory } from "../components/Product";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  const styles = {
    height: "100vh"
  };

  return (
    <div className="flex border-2 border-gray-100">
      <div style={styles} className="">
        <SideBar />
      </div>
      <div className="flex-1 bg-blue-50 px-6 py-4 rounded-tl-3xl">
        <Main />
        <Expense />
        <ProductCategory />
      </div>
    </div>
  );
};

export default Dashboard;
