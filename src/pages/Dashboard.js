import React from "react";
import Expense from "../components/Expense";
import Main from "../components/Main";
import { ProductCategory } from "../components/Product";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div className="">
      <SideBar />
      <Main />
      <Expense />
      <ProductCategory/>
    </div>
  );
};

export default Dashboard;
