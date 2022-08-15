import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "# of Income",
              data: [4, 7, 9, 11, 9, 10, 11, 12, 10, 13, 12, 9],
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              fill: true,
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 2,
              tension: 0.8,
            },
            {
              label: "Expenses",
              data: [6, 8, 8, 10, 8, 11, 12, 11, 11, 12, 11, 14, 10, 10],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "#93c5fd",
              fill: true,
              pointBackgroundColor: "#93c5fd",
              tension: 0.6,
              borderWidth: 2,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default LineChart;
