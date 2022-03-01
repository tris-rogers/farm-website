import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinkStyle(props) {
  const [isHover, setIsHover] = useState(false);

  function mouseOver() {
    setIsHover(true);
  }
  function mouseOut() {
    setIsHover(false);
  }

  const style = {
    fontSize: "2rem",
    textDecoration: "none",
    borderRadius: "5px",
    padding: "0 1rem",
    color: isHover ? "white" : "#eeeeee",
    backgroundColor: isHover ? "rgb(84, 223, 238)" : "#393e46",
    transition: "all 300ms",
    boxShadow: isHover && "-3px 3px #68af22",
  };

  return (
    <NavLink
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      to={props.to}
      style={style}
    >
      {props.name}
    </NavLink>
  );
}

export default NavLinkStyle;
