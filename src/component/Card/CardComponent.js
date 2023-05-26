import React from "react";
import { Col } from "react-bootstrap";

import "./CardComponent.css";

function Dashboard() {
  const card = [
    {
      icon: <i className="pi pi-shopping-cart" />,
      name: "Orders",
      count: "152",
      newmembers: "24 new",
      footer: "since last visit",
    },
    {
      icon: <i className="pi pi-map-marker" />,
      name: "Revenue",
      count: "$2.100",
      newmembers: "%52+",
      footer: "since last visit",
    },
    {
      icon: <i className="pi pi-inbox" />,
      name: "Customers",
      count: "28441",
      newmembers: "520",
      footer: "newly registered",
    },
    {
      icon: <i className="pi pi-comment" />,
      name: "Comments",
      count: "152 Unread",
      newmembers: "85",
      footer: "responded",
    },
  ];

  return (
    <div className="grid mt-4">
      {card.map((data) => (
        <Col className="card-col" xs={12} md={4} lg={3}>
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round" style={{minHeight:'100%'}}>
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  {data.name}
                </span>
                <div className="text-900 font-medium text-xl">{data.count}</div>
              </div>
              <div className="flex align-items-center justify-content-center bg-cyan-100 border-round card-icons">
                {data.icon}
              </div>
            </div>
            <span className="text-green-500 font-medium">
              {data.newmembers}
            </span>
            <span className="text-500 px-1">{data.footer}</span>
          </div>
        </Col>
      ))}
    </div>
  );
}

export default Dashboard;
