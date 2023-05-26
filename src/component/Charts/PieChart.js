import React, { useState } from "react";
import { Chart } from "primereact/chart";

const PieChartDemo = () => {
  const [chartData] = useState({
    labels: ["Leads", "Products", "Proposals"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
        hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  return (
    <div>
      <div
        className="surface-0 shadow-2 p-3 border-1 border-50 border-round"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h5>Customer Ratio</h5>
        <Chart
          type="pie"
          data={chartData}
          options={lightOptions}
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
};

export default PieChartDemo;
