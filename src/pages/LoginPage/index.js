import React, { useState } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { Radio, Space } from "antd";
import "./Loginpage.css";
import { useLocation } from "react-router-dom";
import EmployerLogin from "./EmployerLogin";
import AdminLogin from  "./AdminLogin";
import Speaker from "../../assets/speakers2.png";

const Login = () => {
  const { state } = useLocation();
  const [role, setrole] = useState("Employer");
  const [a, setA] = useState(state);
  const onChange = (e) => {
    setrole(e.target.value);
    setA(e.target.value);
  };

  const stateCheck = typeof state !== "object" ? (state ? a : role) : role;

  return (
    <div className="Login-page-main">
      <div className="d-flex justify-content-center align-items-center">
        <Container>
          <Row className="login_page">
            <Col sm={12} md={4} className="d-grid align-items-center">
              <div>
                <Card className="left-contents" style={{ height: "300px" }}>
                {typeof state !== "object" && state ? (
                    <div className="contents">
                    <Radio.Group
                      className="contents"
                      onChange={onChange}
                      value={a}
                    >
                      <Space direction="vertical">
                        <Radio value={"Employer"} className="login-option">
                          Employer
                        </Radio>
                        <Radio value={"Admin"} className="login-option mt-1">
                          Admin
                        </Radio>
                      </Space>
                    </Radio.Group>
                    </div>
                  ) : (
                    <div className="contents">
                    <Radio.Group
                      className="contents"
                      onChange={onChange}
                      value={role}
                    >
                      <Space direction="vertical">
                        <Radio value={"Employer"} className="login-option">
                          Employer
                        </Radio>
                        <Radio value={"Admin"} className="login-option mt-1">
                          Admin
                        </Radio>
                      </Space>
                    </Radio.Group>
                    </div>
                  )}
                  <img
                    src={Speaker}
                    className="png-image"
                    alt="speaker-img"
                  >
                  </img>
                </Card>
              </div>
            </Col>
            <Col sm={12} md={8} className="mt-1">
              <Card
                className="right-contents py-5 px-5"
                style={{ height: "440px" }}
              >
                <h4
                  className="d-flex justify-content-center"
                  style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
                >
                  {`${stateCheck + " " + "Login"}`}
                </h4>
                <br />
                {state &&
                  typeof state === "string" &&
                  (a === "Employer" ? (
                    <EmployerLogin role={role} />
                  ) : (
                    a === "Admin" && <AdminLogin />
                  ))}
                {(typeof state !== "string" || !state) &&
                  (role === "Employer" ? (
                    <EmployerLogin role={role} />
                  ) : (
                    role === "Admin" && <AdminLogin />
                  ))}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
