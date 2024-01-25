import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import AppButton from "../Button/AppButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Logo />
        <div className="navLinks">
          <NavLink className="link" activeclassname="active" to="/">Home</NavLink>
          <NavLink className="link" activeclassname="active" to="/about">About</NavLink>
          <NavLink className="link" activeclassname="active" to="/pricing">pricing</NavLink>
          <NavLink className="link" activeclassname="active" to="/tokens">tokens</NavLink>
          <NavLink className="link" activeclassname="active" to="/blog">blog</NavLink>
          <NavLink className="link" activeclassname="active" to="/contact">contact us</NavLink>
        </div>
      </div>

      <div className="right">
        <AppButton
          buttonName="Download App"
          variantType="blueButton"
        />
      </div>
    </div>
  );
};

export default Navbar;
