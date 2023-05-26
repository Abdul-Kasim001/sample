import React, { useState } from "react";
import { Chart } from "primereact/chart";

const Barchart = () => {
  const [basicData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Proposal Accepted",
        backgroundColor: "#42A5F5",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Proposal Rejected",
        backgroundColor: "#FFA726",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  });

  let basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  return (
    <div>
      <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <h5>Proposal Monthly</h5>
        <Chart
          type="bar"
          data={basicData}
          options={basicOptions}
          style={{ position: "relative", overflow: "hidden", display:"block" }}
        />
      </div>
    </div>
  );
};

export default Barchart;
