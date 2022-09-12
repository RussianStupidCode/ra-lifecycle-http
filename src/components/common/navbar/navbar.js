import React from "react";
import NavbarItem from "./navbarItem";

const NavBar = ({ menuList }) => {
  return (
    <nav className="px-2 navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Navbar</span>
      <ul className="navbar-nav d-flex flex-row">
        {menuList.map(({ title, link }) => (
          <NavbarItem key={title} title={title} link={link} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
