import "./Home.scss"


const Home = () => {
  return (
   <>
    <div className="main">
      <video className="video" autoFocus autoPlay  loop>
        <source src="/Astrology Background - 19 - Trim.mkv.mp4" type="video/mp4" />
          </video>
    </div>

    <div className="owner-section"   >
     <div className="opcity">
        <h1>About The Happiness & Wealth Coach</h1>
        {/* <hr className="white-hr"  style={{textAlign: "center"}} /> */}
         <div className="img-text">
          <img src="//universalchanakya.com/wp-content/uploads/2023/04/Untitled-design.jpg"  />
           <div className="owner-text-section">
             <h3> Krishna Prasadd Nair </h3>
             <p> He is a Vastu Consultant and Celebrity Numerologist based in Dubai. He has been in the field of Mystical Science for the past 15 years. His experience in the field of Vastu Shastra has enabled him to spread the light of wealth, happiness, health and success. He has been successfully catering to the needs of his clients from all spheres such as residential town houses, commercial buildings, Aviation Institutes, corporate etc. with the principles of Vastu Shastra and Numerology </p>
            <h4> Get your first online Numerology report free. </h4>
           </div>
         </div>
     </div>
    </div>
    </>
  );
};

export default Home;