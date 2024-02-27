import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Review.scss";

const Review = () => {
  const options = {
    items: 1,
    loop: true,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
    autoplay: true,
    nav: true,
    navText: [
      '<button type="button" class="custom-nav-btn prev"><</button>',
      '<button type="button" class="custom-nav-btn next">></button>',
    ],
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

  return (
    <>
      <div className="p-5 review-container">
        <h1 className="client-heading">What Clients Are Saying</h1>
        <div className="bg-container">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="review-card">
                <img style={{width:"50px", height:"50px"}} className="w-[3rem]" src="/person.webp" alt="Person" />
                <div className="review-card-info">
                    <h2>CLIENT TESTIMONIAL</h2>
                    <hr />
                    <p>
                      Best experience in the Vastu science, I have had a good change in my personal and professional life after following his recommendations which were very effective. I strongly suggest my friends and family to get the corrections done to see the best in their lives.</p>
                    <h3>  Karan J. Shrivastav </h3>
                </div>
            </div>
            <div className="review-card">
                <img style={{width:"50px", height:"50px"}} className="w-[3rem]" src="/person.webp" alt="Person" />
                <div className="review-card-info">
                    <h2>CLIENT TESTIMONIAL</h2>
                    <hr />
                    <p> 
                   We have changed so many rented homes but never found that peace and prosperity in our life. Now our new home is fully backed with Vastu requirements and we are really seeing major positive changes and shifts in our energies and auras. Thank you Krishna for all your guidance and never ending support. Thank you from one of your happiest client.                                  </p>
                    <h3  > Amita J </h3>
                </div>
            </div>
            <div className="review-card">
                <img style={{width:"50px", height:"50px"}} className="w-[3rem]" src="/person.webp" alt="Person" />
                <div className="review-card-info">
                    <h2>CLIENT TESTIMONIAL</h2>
                    <hr />
                    <p> I was looking for work in Dubai and recently received a fantastic position with a reputable organization. Mr. Krishna of Universal Chanakya helped make this all feasible. He provided guidance and assistance in implementing the Vastu requirements at my home, and things changed for the better. </p>
                    <h3>  Pooja Agarwal </h3>
                </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Review;
