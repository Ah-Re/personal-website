import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


function Navbar() {

    const [menu, toggleMenu] = useState(false);

    

    return (
        <div className="navbar">
            <h1 id="not-blurry" className="logo">AR</h1>
            {!menu ? <FontAwesomeIcon onClick={() => {
                toggleMenu(true);
                document.body.style.overflow = "hidden";
                document.getElementsByClassName("menu-items")[0].style.backgroundColor = "#323232";
                

            }} className="menu-bars" icon={faBars} size="2x"/> :
            <FontAwesomeIcon onClick={() => {
                toggleMenu(false);
                document.body.style.overflow= "";
                document.getElementsByClassName("menu-items")[0].style.backgroundColor = "";
                
            }}className="menu-bars" icon={faTimes} size="2x"/>
            }
            
            
        
            <ul className="menu-items" style={menu ? {transform: "translateX(0)"} : null}>
                <li><a className="nav-links"  href="#about">about</a></li>
                <li><a className="nav-links" href="#projects">projects</a></li>
                <li><a className="nav-links" href="#skills">skills</a></li>
                <li><a className="nav-links" href="#contact">contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;