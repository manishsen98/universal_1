import "./Card.scss";

const Card = ({ heading, para, img }) => {
  return (
    <div className="bg">
      <div className="card">
        <div className="item card-img">
          <img src={`/${img}`} alt="image" />
        </div>
        <div className="item card-title">
          <h2>{heading}</h2>
        </div>
        <div className="item card-paragraph">
          <p>{para}</p>
        </div>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default Card;
