import { useState } from "react";
import "./Card.scss";
import AnimateSlider from "../../assets/animations/AnimateSlider";
import AnimateImage from "../../assets/animations/AnimateImage";
import AnimateText from "../../assets/animations/AnimateText";

const Card = ({ heading, para, img }) => {
  return (
    <div className="w-[50rem] h-[58rem]  md:max-w-md md:max-h-[40rem]  other-card bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <AnimateImage>
    <img className="rounded-t-lg w-[90%] m-auto pt-[1rem] " src={`/${img}`} alt=""  />
  </AnimateImage>
  <div className="p-5">
   <AnimateSlider>
      <h5 className="mb-2 text-6xl md:text-[2rem]  font-bold tracking-tight text-gray-900 dark:text-white">
        {heading}
      </h5>
      </AnimateSlider>

      <AnimateSlider>
    <p className="mb-3 text-4xl md:text-2xl mt-10 font-normal text-gray-700 dark:text-gray-400">
     {para}
    </p></AnimateSlider>
  <AnimateSlider>
    <button
     
      className="inline-flex text-3xl mt-7  md:px-5 md:py-3 rounded-[5rem] items-center px-[5rem] py-[2rem]  font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg> </button></AnimateSlider>
    
  </div>
</div>

  );
};

export default Card;
