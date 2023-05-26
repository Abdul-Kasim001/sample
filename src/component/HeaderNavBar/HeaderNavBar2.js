import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Popover } from "antd";
import { HiUserCircle } from "react-icons/hi";

// styles
import "../../component/Css/HeaderNavbar.scss";
// images
import NkDecibels from "../../assets/nkdecibels.png";

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [logout, setLogout] = React.useState(false);

  const role = localStorage.getItem("role");
  const auth = localStorage.getItem("USER_AUTH_STATE");
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("USER_AUTH_STATE");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("cus-token");
    localStorage.removeItem("emp-token");

    setLogout(true);
  };
  return (
    <div>
      <Navbar className="nav-brand" fixed="top">
        <Container fluid>
          <Navbar.Brand>
            <img
              className="NkDecibels_logo"
              src={NkDecibels}
              alt="add"
              onClick={() => navigate("/")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="collapse-style me-2 ">
              {(auth && role === "Customer") ||
              (auth && role === "Employer") ||
              (auth && role === "admin") ? (
                <Popover
                  content={
                    <div>
                      <Nav.Link>Dashboard</Nav.Link>
                      <hr />
                      <Nav.Link>
                        <NavLink
                          onClick={logoutHandler}
                          className="navbartitle p-3"
                        >
                          LogOut
                        </NavLink>
                      </Nav.Link>
                    </div>
                  }
                  trigger="click"
                  open={open}
                >
                  <HiUserCircle
                    style={{ fontSize: 40, cursor: "pointer" }}
                    onClick={() => setOpen(!open)}
                  />
                </Popover>
              ) : (
                <Nav.Link>
                  <Link className="navbartitle p-3" to="/">
                    Login
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default HeaderNavbar;
