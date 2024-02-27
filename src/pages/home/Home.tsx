import { AnimatePresence, motion } from "framer-motion";
import "./Home.scss";
import { useEffect, useState } from "react";
import VideoText from "../../components/videoText/VideoText";
import AnimateText from "../../assets/animations/AnimateText";
import AnimateImage from "../../assets/animations/AnimateImage";
import AnimateFromRight from "../../assets/animations/AnimateFromRight";
const Home = () => {
  return (
    <>
      <VideoText />
      <div className=" owner-section">
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
      <div className=" main-bg-services h-[100vh]">
        <div className="h-full flex flex-col gap-[5rem] sm:gap-0 sm:flex-row justify-center items-center mr-[-5rem]">
          <div className="flex">
            <AnimateImage>
              <img src="/our-ser.png" alt="Our Services" />
            </AnimateImage>
          </div>
          <div className="flex flex-col gap-20 sm:gap-12">
            <AnimateFromRight>
              <div className="item">
                <img src="/serviesCardImg1.png" alt="" className="item-img" />
                <div className="item-text">
                  <h4>Vastu</h4>
                  {/* <div className="color"></div> */}
                </div>
              </div>
            </AnimateFromRight>
            <AnimateFromRight>
              <div className="item ml-0 sm:ml-[10rem] ">
                <img
                  src="/serviesCardImg2.png"
                  alt=""
                  className="item-img item-img2"
                />
                <div className="item-text">
                  <h4> Numerology </h4>
                  {/* <div className="color"></div> */}
                </div>
              </div>
            </AnimateFromRight>
            <AnimateFromRight>
              <div className="item ml-0 sm:ml-[17rem] ">
                <img
                  src="/serviesCardImg3.png"
                  alt=""
                  className="item-img left-0"
                />
                <div className="item-text">
                  <h4> Feng Shui </h4>
                  {/* <div className="color"></div> */}
                </div>
              </div>
            </AnimateFromRight>
            <AnimateFromRight>
              <div className="item ml-0 sm:ml-[10rem]">
                <img
                  src="/serviesCardImg4.png"
                  alt=""
                  className="item-img item-img2"
                />
                <div className="item-text text-right ">
                  <h4 className="ml-[4rem]">Chanakya Academy </h4>
                  {/* <div className="color"></div> */}
                </div>
              </div>
            </AnimateFromRight>
            <AnimateFromRight>
              <div className="item">
                <img src="/serviesCardImg5.png" alt="" className="item-img" />
                <div className="item-text">
                  <h4> Shop </h4>
                  {/* <div className="color"></div> */}
                </div>
              </div>
            </AnimateFromRight>
          </div>
        </div>
      </div>

      {/* Clients-Are-Saying-section */}
    </>
  );
};

export default Home;
