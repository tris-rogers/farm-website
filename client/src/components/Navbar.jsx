import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Gnagara Pty Ltd</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <MenuIcon />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
