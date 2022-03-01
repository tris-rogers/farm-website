import React, { useState } from "react";
import NavLinkStyle from "./NavLinkStyle";
import logo from "../images/desktop/logo.png";

function NavbarMobile() {
  return (
    <nav>
      <span className="navbar-brand">
        <img src={logo} style={{ width: "150px" }} alt="logo" />
      </span>

      <span className="navbar-links">
        <NavLinkStyle to="/" name="Home" />

        <NavLinkStyle to="/about" name="About" />

        <NavLinkStyle to="/produce" name="Products" />

        <NavLinkStyle to="/contact" name="Contact" />
      </span>
    </nav>
  );
}

export default NavbarMobile;
