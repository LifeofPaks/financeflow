import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import AppButton from "../Button/AppButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Logo />
        <div className="navLinks">
          <Link to="/home">Home</Link>
          <Link to="/home">About</Link>
          <Link to="/home">pricing</Link>
          <Link to="/home">tokens</Link>
          <Link to="/home">blog</Link>
          <Link to="/home">contact us</Link>
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
