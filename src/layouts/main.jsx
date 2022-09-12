import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/common/navbar/navbar";
import { ROUTER_PATH } from "../helpers/path";

function MainLayout() {
  const navbarItems = [
    { title: "Clocks (Task 1)", link: ROUTER_PATH.clocks },
    { title: "Notes (Task 2)", link: ROUTER_PATH.notes },
  ];

  return (
    <div className="d-flex flex-column vh-100">
      <NavBar menuList={navbarItems} />
      <div className="container h-100">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
