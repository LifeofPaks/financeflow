import React from "react";
import "./DailyRewards.scss";
import P1 from "../../../assets/iPhone-l.png";
import P2 from "../../../assets/iPhone-r.png";
import Si1 from "../../../assets/si1.svg.png";
import Si2 from "../../../assets/si2.svg.png";
import Si3 from "../../../assets/si3.svg.png";
import Laptop from "../../../assets/laptop.png";
import Si4 from "../../../assets/si4.svg.png";
import Si5 from "../../../assets/si5.svg.png";
import Si6 from "../../../assets/si6.svg.png";
import HeroM from "../../../assets/laptopM.png"

const DailyRewards = () => {
  return (
    <div className="wraps">

    
    <div className="dr">
      <div className="left">
          <img src={P1} alt="phone" className="phoney" />
          <img src={P2} alt="phone" className="lp phoney"/>
      </div>

      <div className="right">
        <h2>Earn daily rewards on your idle tokens</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>

        <div className="itemWraps">
          <div className="item">
            <div className="smallIcon">
              <img src={Si1} alt="smallIcon" className="si" />
            </div>
            <p className="detail">Lowest fees in market</p>
          </div>

          <div className="item">
            <div className="smallIcon">
              <img src={Si2} alt="smallIcon" className="si" />
            </div>
            <p className="detail">Lowest fees in market</p>
          </div>

          <div className="item">
            <div className="smallIcon">
              <img src={Si3} alt="smallIcon" className="si" />
            </div>
            <p className="detail">Lowest fees in market</p>
          </div>
        </div>
      </div>
      </div>

      <div className="dr bottom">
      <div className="left">
          <img src={Laptop} alt="phone" className="lappy" />
          <img src={HeroM} alt="hero-img" className="heroImgM"/>
      </div>

      <div className="right">
        <h2>Earn daily rewards on your idle tokens</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>

        <div className="itemWraps">
          <div className="item">
            <div className="smallIcon">
              <img src={Si4} alt="smallIcon" className="si" />
            </div>
            <p className="detail">100% Private data</p>
          </div>

          <div className="item">
            <div className="smallIcon">
              <img src={Si5} alt="smallIcon" className="si" />
            </div>
            <p className="detail">99.99% Uptime guarantee</p>
          </div>

          <div className="item">
            <div className="smallIcon">
              <img src={Si6} alt="smallIcon" className="si" />
            </div>
            <p className="detail">24/7 Dedicated support</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DailyRewards;
