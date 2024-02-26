import { useParams } from "react-router-dom";
import { ChanakyaData, NumerologyData, VastuData } from "../../Services";
import Card from "../../components/card/Card";
import "./OtherPage.scss";
import { AnimatePresence } from "framer-motion";

const OtherPage = () => {
  const { route } = useParams();

  const ShowData =
    route === "vastu"
      ? VastuData
      : route === "numerology"
      ? NumerologyData
      : ChanakyaData;

  return (
    <div className="nav-pages main">
      <div className="section-poster main">
        <div className="container">
          <img src={`/${ShowData.main_image}`} alt="image" />
          <div className="text">
            <div className="opacity">
              <h3>{ShowData.main_heading}</h3>
              <p>{ShowData.main_paragraph}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-cards main">
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
