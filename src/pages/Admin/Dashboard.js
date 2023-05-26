import React from "react";
import PieChartDemo from "../../component/Charts/PieChart";
import Barchart from "../../component/Charts/barchart";
import CardComponent from "../../component/Card/CardComponent";
import { Row, Col } from "react-bootstrap";

function AdminDashboard() {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <CardComponent />
        </Col>
      </Row>
      <Row className="mt-1 pb-2">
        <Col className="mb-3" lg={6}>
          <Barchart />
        </Col>
        <Col className="mb-3" lg={6}>
          <PieChartDemo />
        </Col>
      </Row>
    </div>
  );
}

export default AdminDashboard;
