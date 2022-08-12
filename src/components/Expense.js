import React from 'react'
import Card from './Card';

const Expense = () => {
  return (

    <div className="grid grid-cols-4 gap-x-4">
      <Card
        title="Daily Income"
        amount={345}
        symbol="$"
        bg="linear-gradient(90deg, rgba(0,212,225,1) 0%, rgba(9,50,300,1) 35%, rgba(9,9,200,1) 100%)"
        graph=""
        text="#ffffff"        
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
}

export default Expense