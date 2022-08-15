import React from "react";

const Card = ({ title, amount, graph, symbol, bg, text, textColor }) => {
  return (
    <div
      style={{ background: bg, color: text }}
      className="my-2 rounded-lg drop-shadow-lg py-6 px-6"
    >
      <p style={{color: textColor}} className="text-gray-600 font-bold">{title}</p>
      <div className="flex gap-x-6">
        <div className="text-3xl font-bold pt-6 pb-4">
          <span className="pr-2">{symbol}</span>
          <span>{amount}</span>
        </div>
        <div>{graph}</div>
      </div>
    </div>
  );
};

export default Card;
