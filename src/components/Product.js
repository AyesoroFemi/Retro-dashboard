import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Category from "./Category";
import Image from "../assets/admin.png";

export const ProductCategory = () => {
  return (
    <div className="flex gap-x-4">
      <div className="h-96 w-4/12 border-4 my-4 border-teal-500"></div>
      <div className="h-96 w-full border-4 my-4 border-teal-500">
        <div className="flex justify-between items-center">
          <p>Latest Added Products</p>
          <span>
            <BsThreeDots size={24} color="#ccc" />
          </span>
        </div>
        <Category
          img={Image}
          title="PSG Stadium 20/21"
          subtitle="3 Variant"
          num={8600844}
          name="Jerseys"
          date="12.11.2020"
          btn="Published"
          bg="#f0fdfa"
          textColor="#0d9488"
        />
        <Category
          img={Image}
          title="Los Angeles Lakers City"
          subtitle="5 Variant"
          num={8608647}
          name="Jerseys"
          date="12.11.2020"
          btn="Pending"
          bg="#ffe4e6"
          textColor="#f43f5e"
        />
        <Category
          img={Image}
          title="Miami Heat Courtside"
          subtitle="4 Variant"
          num={8609824}
          name="Outwear"
          date="10.11.2020"
          btn="Published"
          bg="#f0fdfa"
          textColor="#0d9488"
        />
        <Category
          img={Image}
          title="Liverpool FC 20/21 Stadium"
          subtitle="3 Variant"
          num={8609474}
          name="Jerseys"
          date="07.11.2020"
          btn="Published"
          bg="#f0fdfa"
          textColor="#0d9488"
        />
      </div>
    </div>
  );
};
