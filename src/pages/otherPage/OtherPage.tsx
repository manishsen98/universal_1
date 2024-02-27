import { useParams } from "react-router-dom";
import { ChanakyaData, NumerologyData, VastuData } from "../../Services";
import Card from "../../components/card/Card";
import "./OtherPage.scss";
import { AnimatePresence, motion } from "framer-motion";
import AnimateImage from "../../assets/animations/AnimateImage";
import AnimateText from "../../assets/animations/AnimateText";
const OtherPage = () => {
  const { route } = useParams();

  const ShowData =
    route === "vastu"
      ? VastuData
      : route === "numerology"
      ? NumerologyData
      : ChanakyaData;

  return (
    <div className="nav-pages ">
      <div className="section-poster">
        <div className="container">
          <motion.img  variants={{
          hidden: {
            opacity: 0,
            scale: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={"visible"}
        transition={{ duration: 1.5, delay: 0.25 }} src={`/${ShowData.main_image}`} alt="image" />

          <div className="text">
            <div className="opacity">
             <AnimateText>
              <h3>{ShowData.main_heading}</h3>
              </AnimateText>
              <AnimateText>
              <p>{ShowData.main_paragraph}</p></AnimateText>
              
            </div>
          </div>
        </div>
      </div>

      <div className="section-cards ">
        <div className="cards-container">
          <div className="cards">
            {ShowData.cards.map((item) => (
              <Card
                key={item.id}
                heading={item.heading}
                para={
                  item.paragraph.split(" ").slice(0, 15).join(" ") + "....."
                }
                img={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPage;
