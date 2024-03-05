import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Review.scss";
import { FaStar } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../ui/TypeWrite";

const Review = () => {
  const options = {
    items: 1,
    loop: true,
    autoplayTimeout: 3000,
    animateOut: "rotateOut",
    autoplay: true,
    nav: true,
    dots: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      684: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  const words = [
    {
      text: "What",
    },
    {
      text: "Clients",
    },
    {
      text: "Are",
    },
    {
      text: "Saying",
    },

  ];


  return (
    <>
      <div className="p-5 review-container">
        <div className="review-container-opcity text-center">
        
          <h1 className="client-heading"><TypewriterEffectSmooth words={words} /></h1>
          <div className="bg-container">
            <OwlCarousel className="owl-theme" {...options}>
            <div className="review-card pt-9">
              <div className="m-10 mt-15 p-10 review-card-info relative bg-white">
                <img
                  
                  className=" absolute border right-[2rem]  top-[-3rem] z-10 overflow-auto outline-2"
                  src="/person.webp"
                  alt="Person"
                />
                <div className="upper flex justify-between">
                  <div className="bg-[#4A93CF] upper-1">
                    <h3> Karan J. Shrivastav </h3>
                    <div className="stars  float-right flex" ><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                  </div>
                </div>

                <p>
                  Best experience in the Vastu science, I have had a good change
                  in my personal and professional life after following his
                  recommendations which were very effective. I strongly suggest
                  my friends and family to get the corrections done to see the
                  best in their lives.
                </p>
              </div>
            </div>

            <div className="review-card pt-9">
              <div className="m-10 mt-15 p-10 review-card-info relative bg-white">
                <img
                  
                  className=" absolute border right-[2rem]  top-[-3rem] z-10 overflow-auto outline-2"
                  src="/person.webp"
                  alt="Person"
                />
                <div className="upper flex justify-between">
                  <div className="bg-[#4A93CF] upper-1">
                    <h3> Pooja Agarwal </h3>
                    <div className="stars float-right flex" ><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                  </div>
                </div>

                <p className="">
                  I was looking for work in Dubai and recently received a
                  fantastic position with a reputable organization. Mr. Krishna
                  of Universal Chanakya helped make this all feasible. He
                  provided guidance and assistance in implementing the Vastu
                  requirements at my home, and things changed for the better.
                </p>
              </div>
            </div>

            <div className="review-card pt-9">
              <div className="m-10 mt-15 p-10 review-card-info relative bg-white">
                <img
                  
                  className=" absolute border right-[2rem]  top-[-3rem] z-10 overflow-auto outline-2"
                  src="/person.webp"
                  alt="Person"
                />
                <div className="upper flex justify-between">
                  <div className="bg-[#4A93CF] upper-1">
                    <h3>  Amita J </h3>
                    <div className="stars float-right flex" ><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                  </div>
                </div>

                <p>
                We have changed so many rented homes but never found that peace and prosperity in our life. Now our new home is fully backed with Vastu requirements and we are really seeing major positive changes and shifts in our energies and auras. Thank you Krishna for all your guidance and never ending support. Thank you from one of your happiest client.                                
                </p>
              </div>
            </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
