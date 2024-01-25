import React from "react";
import "./Testimonial.scss";
import AppButton from "../../Button/AppButton";
import { testimonial } from "../../../data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

console.log();
const Testimonial = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      
    ],

  };
  return (
    <div className="tes">
      <div className="title flex">
        <h2>What our users say?</h2>
        <AppButton buttonName="Download App" variantType="blueButton" />
      </div>

      <div className="teswraps">
        <Slider {...settings}>

        {testimonial.map((item, idx) => (
          <div className="tesItem" key={idx}>
            <p className="text">{item.detail}</p>

            <div className="profile">
              <img src={item.dp} alt="dp" className="tesDp" />

              <div className="info">
                <p className="name">{item.name}</p>
                <p className="role">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
        </Slider>
        </div>
    </div>
  );
};

export default Testimonial;
