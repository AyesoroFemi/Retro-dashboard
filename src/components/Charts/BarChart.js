import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DailyExpense = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["", "", "", ""],
          datasets: [
            {
              label: "",
              data: [1.7, 1.2, 1.5, 2],
              backgroundColor: ["#be123c"],
              fill: true,
              borderColor: ["#be123c"],
              borderWidth: 2,
              tension: 0.8,
            },
          ],
        }}
        height={100}
        width={100}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default DailyExpense;
