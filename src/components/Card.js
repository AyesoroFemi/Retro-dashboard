import React from "react";

const Card = ({ title, amount, graph, symbol, bg, text }) => {
  return (
    <div
      style={{ background: bg, color: text }}
      className="mx-8 my-2 rounded-lg drop-shadow-lg py-6 px-6"
    >
      <p className="text-gray-600 font-bold">{title}</p>
      <div>
        <div className="text-3xl font-bold pt-6 pb-4">
          <span>{symbol}</span>
          <span>{amount}</span>
        </div>
        <div>{graph}</div>
      </div>
    </div>
  );
};

export default Card;
