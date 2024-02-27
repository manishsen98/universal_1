import { useState } from "react";
import "./Card.scss";
import AnimateSlider from "../../assets/animations/AnimateSlider";
import AnimateImage from "../../assets/animations/AnimateImage";

const Card = ({ heading, para, img }) => {
  return (
    <div className="bg">
      <div className="card">
        <AnimateImage>
          <div className="item card-img">
            <img src={`/${img}`} alt="image" />
          </div>
        </AnimateImage>
        <h3 className="text-red-500">hello bhai</h3>
        <AnimateSlider>
          <div className="item card-title">
            <h2>{heading}</h2>
          </div>
        </AnimateSlider>

        <AnimateSlider>
          <div className="item card-paragraph">
            <p>{para}</p>
          </div>
        </AnimateSlider>
        <AnimateSlider>
          <button className="read-more">Read More</button>
        </AnimateSlider>
      </div>
    </div>
  );
};

export default Card;
