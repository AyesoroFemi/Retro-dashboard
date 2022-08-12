import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Category from "./Category";

export const ProductCategory = () => {
  return (
    <div className="flex gap-x-4">
      <div className="h-96 w-5/12 border-2 my-4 border-teal-800"></div>
      <div className="h-96 w-full bg-[#ffffff] pt-8 mt-4 px-6 rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-500 font-bold">Latest Added Products</p>
          <span>
            <BsThreeDots size={24} color="#6b7280" />
          </span>
        </div>
        <Category
          img="https://images.pexels.com/photos/9163132/pexels-photo-9163132.jpeg?auto=compress&cs=tinysrgb&w=800"
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
          img="https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=800"
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
          img="https://media.istockphoto.com/photos/elegant-grey-wool-womens-coat-picture-id1277716606?b=1&k=20&m=1277716606&s=612x612&w=0&h=PB9gqyl_I7IYAspfp466yXNezCXPq3QnzVHDY92vu7E="
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
          img="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=800"
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
