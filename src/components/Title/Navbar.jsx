import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  //   const [menu, toggleMenu] = useState(false);

  return (
    <div className="navbar">
      <ul className="menu-items">
        <li>
          <a className="nav-links" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-links" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="nav-links" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="nav-links" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
