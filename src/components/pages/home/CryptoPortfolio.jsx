import React from "react";
import "./CryptoPortfolio.scss";
import iPhone from "../../../assets/iPhones.png";
import Ci1 from "../../../assets/ci1.svg.png";
import Ci2 from "../../../assets/ci2.svg.png";
import Ci3 from "../../../assets/ci3.svg.png";
import Ci4 from "../../../assets/ci4.svg.png";
import AppButton from "../../Button/AppButton";

const CryptoPortfolio = () => {
  return (
    <div className="cf">
      <div className="title">
        <h2>Build your crypto portfolio</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
      </div>

      <div className="more">
        <div className="left">
          <div className="item">
            <div className="bigIcon">
              <img className="bIcon" src={Ci1} alt="bIcon" />
            </div>
            <h4>Send & Receive</h4>
            <p className="detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>
          </div>

          <div className="item">
            <div className="bigIcon">
              <img className="bIcon" src={Ci2} alt="bIcon" />
            </div>
            <h4>100% Secure Wallet</h4>
            <p className="detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>
          </div>
        </div>

        <div className="center">
          <h4>iOS & Android App</h4>
          <p className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet,
            morbi non at sed neque.
          </p>
          <img className="phone" src={iPhone} alt="iphone" />
        </div>

        <div className="left">
          <div className="item">
            <div className="bigIcon">
              <img className="bIcon" src={Ci3} alt="bIcon" />
            </div>
            <h4>Trading Charts</h4>
            <p className="detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>
          </div>

          <div className="item">
            <div className="bigIcon">
              <img className="bIcon" src={Ci4} alt="bIcon" />
            </div>
            <h4>Real Time Trading</h4>
            <p className="detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>
          </div>
        </div>
      </div>
      <div className="buttonWraps">
        <AppButton buttonName="Download App" variantType="blueButton" />
      </div>
    </div>
  );
};

export default CryptoPortfolio;
