import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DailyIncome = () => {
  return (
    <div>
      <Line
        data={{
          labels: ['', '', ""],
          datasets: [
            {
              label: "",
              data: [1, 1.3, 1.25],
              backgroundColor: ["rgba(54, 162, 235, 0.8)"],
              fill: true,
              borderColor: ["#93c5fd"],
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

export default DailyIncome;
