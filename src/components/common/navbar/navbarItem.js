import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const linkStyle = {
  color: "white",
  textDecoration: "none",
  width: "100%",
};

const NavbarItem = ({ title, link }) => {
  const location = useLocation().pathname;

  if (location !== link) {
    return (
      <li className="nav-item m-2">
        <button className="btn btn-secondary w-100 px-1">
          <NavLink to={link} style={linkStyle}>
            {title}
          </NavLink>
        </button>
      </li>
    );
  }

  return (
    <li className="nav-item active m-2">
      <button className="btn btn-primary px-1">
        <span>{title}</span>
      </button>
    </li>
  );
};

export default NavbarItem;
