import React, { useState } from "react";
import NavLinkStyle from "./NavLinkStyle";
import Hamburger from "./Hamburger";
import logo from "../images/mobile/logo.png";

function NavbarMobile() {
  const [navLinksStyle, setNavLinksStyle] = useState({});
  const [navStyle, setNavStyle] = useState({});

  function displayLinks(isExpanded) {
    if (!isExpanded) {
      setNavLinksStyle({
        display: "flex",
      });

      setNavStyle({ flexFlow: "row wrap" });
    } else {
      setNavLinksStyle({
        display: "none",
      });
    }
  }
  return (
    <nav style={navStyle}>
      <span className="navbar-brand">
        <img src={logo} style={{ width: "100px" }} alt="logo" />
      </span>

      <span className="navbar-toggler-icon">
        <Hamburger displayLinks={displayLinks} />
      </span>

      <span className="navbar-links navbar-links-mobile" style={navLinksStyle}>
        <NavLinkStyle to="/" name="Home" />

        <NavLinkStyle to="/about" name="About" />

        <NavLinkStyle to="/produce" name="Products" />

        <NavLinkStyle to="/contact" name="Contact" />
      </span>
    </nav>
  );
}

export default NavbarMobile;
