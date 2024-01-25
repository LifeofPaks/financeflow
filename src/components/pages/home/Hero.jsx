import React from "react";
import "./Hero.scss";
import AppButton from "../../Button/AppButton";
import Hero1 from "../../../assets/Apple Computers.png"

const Hero = () => {
  return (
    <div className="hero section">
      <div className="left">
        <h1>Buy, trade, and hold 350+ cryptocurrencies</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat.
        </p>
        <div className="buttonContainer">
          <AppButton buttonName="Download App" variantType="blueButton" />

          <AppButton buttonName="Download App" variantType="grayButton" />
        </div>
      </div>
      <div className="right">
        <img src={Hero1} alt="hero-img" />
        
      </div>
    </div>
  );
};

export default Hero;
