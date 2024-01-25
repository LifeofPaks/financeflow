import React from "react";
import "./Explore.scss";
import Ep1 from "../../../assets/epr.png";
import Ep2 from "../../../assets/epl.png";
import AppButton from "../../Button/AppButton";

const Explore = () => {
  return (
    <div className="explore flex">
      <div className="left">
        <h2>Explore endless possibilities with FinanceFlow</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <AppButton
          buttonName="Download App"
          variantType="whiteButton"
        />
      </div>

      <div className="right flex">
        <img src={Ep2} alt="eimage" className="lei" />
        <img src={Ep1} alt="eimage" />
      </div>
     
    </div>
  );
};

export default Explore;
