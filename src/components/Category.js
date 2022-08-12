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
      <div className="grid grid-cols-6 items-center my-4">
        <div className="col-span-2 flex gap-x-4 items-center">
          <img className="w-14 h-14" src={img} alt="image_category" />
          <div>
            <p className="font-bold">{title}</p>
            <span>{subtitle}</span>
          </div>
        </div>
        <p>
          <span>SKU: </span>
          <span className="font-bold">{num}</span>
        </p>
        <p>{name}</p>
        <p>{date}</p>
        <button
          style={{ background: bg, color: textColor }}
          className="rounded-lg font-bold mx-8"
        >
          {btn}
        </button>
      </div>
  );
};

export default Category;
