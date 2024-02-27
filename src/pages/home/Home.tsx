import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="main">
        <video className="video" autoFocus autoPlay loop>
          <source
            src="/Astrology Background - 19 - Trim.mkv.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="owner-section">
        <div className="opcity">
          <h1>About The Happiness & Wealth Coach</h1>
          {/* <hr className="white-hr"  style={{textAlign: "center"}} /> */}
          <div className="img-text">
            <img src="//universalchanakya.com/wp-content/uploads/2023/04/Untitled-design.jpg" />
            <div className="owner-text-section">
              <h3> Krishna Prasadd Nair </h3>
              <p>
                {" "}
                He is a Vastu Consultant and Celebrity Numerologist based in
                Dubai. He has been in the field of Mystical Science for the past
                15 years. His experience in the field of Vastu Shastra has
                enabled him to spread the light of wealth, happiness, health and
                success. He has been successfully catering to the needs of his
                clients from all spheres such as residential town houses,
                commercial buildings, Aviation Institutes, corporate etc. with
                the principles of Vastu Shastra and Numerology{" "}
              </p>
              <h4> Get your first online Numerology report free. </h4>
            </div>
          </div>
        </div>
      </div>

      {/* our servies section */}
      <div className="main-bg-services">
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

    {/* Clients-Are-Saying-section */}
    <div className="Clients-bg-section">
        <h1 className="client-heading">What Clients Are Saying</h1>
        <h4 className="client-headingh4" > Testimonials That Speak Volumes! </h4>
     <div className="client-cart-section">
       <div className="client-section">
          <img src="//universalchanakya.com/wp-content/uploads/2023/03/title-bg.jpg"/>
          
       </div>
     </div>
    </div>
    </>
  );
};

export default Home;
