import React from "react";

const Category = ({
  title,
  subtitle,
  img,
  num,
  name,
  date,
  btn,
  bg,
  textColor,
}) => {
  return (
    <div className="grid lg:grid-cols-7 items-center my-4">
      <div className="py-4 lg:col-span-3 lg:py-0 flex gap-x-4 items-center">
        <img className="w-12 h-12 rounded-lg" src={img} alt="image_category" />
        <div>
          <p className="text-sm font-bold">{title}</p>
          <span className="text-xs">{subtitle}</span>
        </div>
      </div>
      <p className="text-sm">
        <span>SKU: </span>
        <span className="font-bold">{num}</span>
      </p>
      <p className="px-0 py-2 lg:px-4 text-sm">{name}</p>
      <p className="text-sm">{date}</p>
      <button
        style={{ background: bg, color: textColor }}
        className="rounded-lg text-sm font-bold mx-4"
      >
        {btn}
      </button>
    </div>
  );
};

export default Category;
