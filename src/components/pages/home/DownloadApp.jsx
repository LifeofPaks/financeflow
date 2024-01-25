import React from "react";
import "./DownloadApp.scss";
import AppButton from "../../Button/AppButton";
import IP from "../../../assets/iphonex.png";
import SM from "../../../assets/Samsung Galaxys.png";

const DownloadApp = () => {
  return (
    <div className="da">
      <div className="title flex">
        <h2>Download our app</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque
          orci amet, amet .
        </p>
      </div>
      <div className="more flex">
        <div className="card">
          <h3>Download for iOS</h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>
          <AppButton buttonName="App store" variantType="blueButton" iconTrue={true}
            buttonIcon="apple" />
          <img className="phn" src={IP} alt="phone" />
        </div>

        <div className="card">
          <h3>Download for Android</h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>
          <AppButton
            buttonName="Play store"
            variantType="blueButton"
            iconTrue={true}
            buttonIcon="playstore"
          />
          <img className="phn" src={SM} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
