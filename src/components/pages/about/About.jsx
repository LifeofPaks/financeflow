import React from "react";
import "./About.scss";
import AB1 from "../../../assets/ab1.png";
import AB2 from "../../../assets/ab2.png";
import AB3 from "../../../assets/ab3.png";
import AB4 from "../../../assets/ab4.png";
import Mission from "./Mission";
const About = () => {
  return (
    <div className="about">
      <div className="heading">
        <h1>About Finance Flow</h1>
        <p className="titleText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae
          dolor non aliquam. Malesuada.
        </p>
      </div>
      <div className="more">
        <div className="title flex">
          <h2>What drives Finance Flow?</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>

        <div className=" grid">
          <div className="item">
            <div className="bigIcon">
              <img src={AB1} alt="about-img" />
            </div>
            <div className="details">
              <h4>Open Source</h4>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="bigIcon">
              <img src={AB2} alt="about-img" />
            </div>
            <div className="details">
              <h4>worldwide</h4>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="bigIcon">
              <img src={AB3} alt="about-img" />
            </div>
            <div className="details">
              <h4>Transparent</h4>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="bigIcon">
              <img src={AB4} alt="about-img" />
            </div>
            <div className="details">
              <h4>Community Driven</h4>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Mission/>
    </div>
  );
};

export default About;
