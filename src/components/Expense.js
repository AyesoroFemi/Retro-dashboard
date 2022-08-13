import React from "react";
import Card from "./Card";

const Expense = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-x-4">
      <Card
        title="Daily Income"
        amount={345}
        symbol="$"
        bg="#2563eb"
        graph=""
        text="#ffffff"
        textColor="#ffffff"
      />
      <Card
        title="Daily Expense"
        amount={380}
        symbol="$"
        bg="#ffffff"
        graph=""
        text="#000000"
      />
      <Card
        title="Weekly Income"
        amount={5380}
        symbol="$"
        bg="#ffffff"
        graph=""
        text="#000000"
      />
      <Card
        title="Weekly Expense"
        amount={4320}
        symbol="$"
        bg="#ffffff"
        graph=""
        text="#000000"
      />
    </div>
  );
};

export default Expense;
