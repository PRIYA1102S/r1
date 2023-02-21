import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <div className="navbar">
        <div>
            <a className="logo" href="/">
                <img src="/kabadi__techno__logo.6c4c85c9.png" alt="" />
            </a>
            <ul className="navlist">
                <li>
                    <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/joinus">JOIN US</NavLink>
                </li>
                <li>
                    <NavLink to="/sell">SELL</NavLink>
                </li>
                <li>
                    <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>
                <li class="navitem active__navlink">
                    <NavLink to="/signin">SIGN IN<span class="sr-only"></span></NavLink>
                </li>
            </ul>
            
        </div>
    </div>
      </>
    );
};

export default Navbar;