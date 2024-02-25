import { Link } from "react-router-dom";
import "./SIcons.scss";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Sicons = () => {
  return (
    <div className="social-icons">
      <span className="icon">
        <Link to={""}>
          <FaFacebook />
        </Link>
      </span>
      <span className="icon">
        <Link to={""}>
          <FaTwitter />
        </Link>
      </span>
      <span className="icon">
        <Link to={""}>
          <FaLinkedin />
        </Link>
      </span>
      <span className="icon">
        <Link to={""}>
          <FaInstagramSquare />
        </Link>
      </span>
    </div>
  );
};

export default Sicons;
