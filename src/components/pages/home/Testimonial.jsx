import React from "react";
import "./Testimonial.scss";
import AppButton from "../../Button/AppButton";

const Testimonial = () => {
  return (
    <div className="tes">
      <div className="title flex">
        <h2>What our users say?</h2>
        <AppButton
          buttonName="Download App"
          variantType="blueButton"
        />
      </div>
    </div>
  );
};

export default Testimonial;
