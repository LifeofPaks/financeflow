import React from "react";
import "./LatestNews.scss";
import DP from "../../../assets/dp.png";
import Glow from "../../../assets/glow.png";
import AppButton from "../../Button/AppButton";

const LatestNews = () => {
  return (
    <div className="ln">
      <div className="title flex">
        <h2>Browse our latest news</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque
          orci amet, amet .
        </p>
      </div>
      <div className="more flex">
        <div className="card">
          <img src={Glow} alt="ln-img" className="gl" />
          <div className="details">
            <h4>The Basics about Cryptocurrency</h4>
            <p className="detail">
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
              Scelerisque viverra donec diammeo.
            </p>
            <div className="profile flex">
              <img src={DP} alt="dp-img" className="dp" />
              <div className="info">
                <h5>Alex Turner</h5>
                <p className="date">August 2, 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Glow} alt="ln-img" className="gl" />
          <div className="details">
            <h4>The Basics about Cryptocurrency</h4>
            <p className="detail">
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
              Scelerisque viverra donec diammeo.
            </p>
            <div className="profile flex">
              <img src={DP} alt="dp-img" className="dp" />
              <div className="info">
                <h5>Alex Turner</h5>
                <p className="date">August 2, 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Glow} alt="ln-img" className="gl" />
          <div className="details">
            <h4>The Basics about Cryptocurrency</h4>
            <p className="detail">
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
              Scelerisque viverra donec diammeo.
            </p>
            <div className="profile flex">
              <img src={DP} alt="dp-img" className="dp" />
              <div className="info">
                <h5>Alex Turner</h5>
                <p className="date">August 2, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="buttonWraps btnWrap">
      <AppButton
          buttonName="View all articles"
          variantType="grayButton"
          className="btn"
        />
      </div>
    </div>
  );
};

export default LatestNews;
