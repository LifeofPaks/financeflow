import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import Insta from "../../assets/insta.png";
import LinkedIn from "../../assets/linked in.png";
import FB from "../../assets/facebook.png";
import { Link } from "react-router-dom";
import AppButton from "../Button/AppButton";

const Footer = () => {
  return (
    <footer className="ft">
      <div className="title flex">
        <Logo />
        <div className="socialIcons flex">
          <img src={Insta} alt="sicon" />
          <img src={FB} alt="sicon" />
          <img src={LinkedIn} alt="sicon" />
        </div>
      </div>
      <div className="menu flex title">
        <div className="left">
          <h4>Menu</h4>
          <div className="links flex title">
            <div className="ll">
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link to="/pricing">pricing</Link>
            </div>

            <div className="rl">
              <Link to="/tokens">tokens</Link>
              <Link to="/blog">blog</Link>
              <Link to="/contact">contact us</Link>
            </div>
          </div>
        </div>

        <div className="right">
          <h4>Download our Application</h4>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer
          </p>
          <div className="btnWrapper flex title">
            <AppButton
              buttonName="App store"
              variantType="blueButton"
              iconTrue={true}
              buttonIcon="apple"
            />
            <AppButton
              buttonName="Play store"
              variantType="blueButton"
              iconTrue={true}
              buttonIcon="playstore"
            />
          </div>
        </div>
      </div>
      <div className="cr">
        <p className="rights">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
