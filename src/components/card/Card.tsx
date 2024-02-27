import { useState } from "react";
import AnimateText from "../../assets/animations/AnimateText";
import "./Card.scss";

const Card = ({ heading, para, img }) => {
  return (
    <div className="bg">
      <div className="card">
        <AnimateText>
          <div className="item card-img">
            <img src={`/${img}`} alt="image" />
          </div>
        </AnimateText>

        <AnimateText>
          <div className="item card-title">
            <h2>{heading}</h2>
          </div>
        </AnimateText>

        <AnimateText>
          <div className="item card-paragraph">
            <p>{para}</p>
          </div>
        </AnimateText>
        <AnimateText>
          <button className="read-more">Read More</button>
        </AnimateText>
      </div>
    </div>
  );
};

export default Card;
