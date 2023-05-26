import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DemoSidebar from "../../component/EmployeeSideBar/DemoSidebar"
import "../../component/Sidebar/Sidebar.css";
import "../../component/HeaderNavBar/HeaderNavBar.css"
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import NkDecibels from "../../assets/nkdecibels.png";

function DefaultLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const handleChange = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();

  const UserName = localStorage.getItem("name");

  const [logout, setLogout] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("USER_AUTH_STATE")) navigate("/EmployeeLogin");
  }, [logout]);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("USER_AUTH_STATE");
    localStorage.removeItem("Role");
    localStorage.removeItem("id");
    localStorage.removeItem("emp-token");
    localStorage.removeItem("name");
    setLogout(true);
  };
  return (
    <>
      <div>
        <div onChange={handleChange}>
          <div className="dashboards__headerNavs">
            <div className="dashboards__headerNavs--container">
              <div className="d-flex flex-row align-items-center">
                <span
                  className="navMenu p-2"
                  onClick={() => setCollapsed((prev) => !prev)}
                >
                  {collapsed ? <AiOutlineClose/> : <GiHamburgerMenu/>}
                </span>
                <img
                  className="test_logo"
                  src={NkDecibels}
                  alt="add"
                  onClick={() => navigate("/")}
                />
              </div>
              <span className="navName px-2" onClick={() => navigate("/")}>
                {UserName}
              </span>
              <div onClick={logoutHandler}>
                <Link to="/" className="login-btn-clr">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
        <DemoSidebar collapsed={collapsed} />
      </div>
      <div
        className={collapsed === true ? "main-content open" : "main-content"}
        style={{backgroundColor:'transparent'}}
      >
        <Outlet />
      </div>
    </>
  );
}

export default DefaultLayout;
