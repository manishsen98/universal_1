import { AnimatePresence, motion } from "framer-motion";
import "./Home.scss";
import { useEffect, useState } from "react";
import VideoText from "../../components/videoText/VideoText";
import AnimateText from "../../assets/animations/AnimateText";
import AnimateImage from "../../assets/animations/AnimateImage";
const Home = () => {
  return (
    <>
      <VideoText />
      <div className="main owner-section">
        <div className="opcity">
          <h1>About The Happiness & Wealth Coach</h1>
          {/* <hr className="white-hr"  style={{textAlign: "center"}} /> */}
          <div className="img-text">
            <AnimateImage>
              <img src="//universalchanakya.com/wp-content/uploads/2023/04/Untitled-design.jpg" />
            </AnimateImage>
            <div className="owner-text-section">
              <AnimateText>
                <h3> Krishna Prasadd Nair </h3>
              </AnimateText>
              <AnimateText>
                <p>
                  {" "}
                  He is a Vastu Consultant and Celebrity Numerologist based in
                  Dubai. He has been in the field of Mystical Science for the
                  past 15 years. His experience in the field of Vastu Shastra
                  has enabled him to spread the light of wealth, happiness,
                  health and success. He has been successfully catering to the
                  needs of his clients from all spheres such as residential town
                  houses, commercial buildings, Aviation Institutes, corporate
                  etc. with the principles of Vastu Shastra and Numerology{" "}
                </p>
              </AnimateText>
              <h4> Get your first online Numerology report free. </h4>
            </div>
          </div>
        </div>
      </div>

      {/* our servies section */}
      <div className="main main-bg-services">
        <h1> Our Servies </h1>
        <div className="our-Services-section">
          <img src="serviesImg23.png" className="our-Services-section-img" />
          <div className="card-main-container">
            <div className="card-container">
              {/* card 1 */}
              <div className="card">
                <img src="//universalchanakya.com/wp-content/uploads/2023/04/vastu-e1681134359461.png" />
              </div>

              <div className="card">
                <img src="//universalchanakya.com/wp-content/uploads/2023/04/numerology-e1681134497453.png" />
              </div>
            </div>

            <div className="card-container">
              {/* card 1 */}
              <div className="card">
                <img src="//universalchanakya.com/wp-content/uploads/2023/04/fengshui-e1681134683446.png" />
              </div>

              <div className="card">
                <img src="//universalchanakya.com/wp-content/uploads/2023/04/academy-e1681134828161.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
