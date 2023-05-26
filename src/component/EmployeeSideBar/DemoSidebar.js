import React  from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { DemoSidebarData } from "./DemoSidebarData";
import SubMenu from "../Sidebar/SubMenu";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: block;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #00acc1;
  width: 200px;
  height: 100vh;
  display: block;
  justify-content: center;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


function Sidebar(props) {
const { collapsed } = props;
  return (
    <div>
      <>
        {collapsed === true ? (
          
          <div>
            <IconContext.Provider value={{ color: "#" }}>
              <SidebarNav sidebar={collapsed}>
                <SidebarWrap>
                  <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={collapsed} />
                  </NavIcon>
                  {DemoSidebarData.map((item, index, role) => {
                    return <SubMenu item={item} key={index} role={role} />;
                  })}
                </SidebarWrap>
              </SidebarNav>
            </IconContext.Provider>
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
}

export default Sidebar;
