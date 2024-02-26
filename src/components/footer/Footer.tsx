import { Link } from "react-router-dom";
import Sicons from "../social-icons/Sicons";
import { animateScroll } from "react-scroll";
import "./Footer.scss";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300, smooth: "easeInOutQuad" });
  };
  return (
    <section className="footer main">
      <div className="footer-cols">
        <div className="footer-cols--col-1">
          <img src="/logo.png" alt="NLP Dubai" />
          <Sicons />
        </div>
        <div className="footer-cols--col">
          <h3>Important links</h3>
          <ul className="footer-cols--col-links">
            <li>
              <Link onClick={scrollToTop} to={"/shop"}>
                Shop
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/services"}>
                Services
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/privacy-policy"}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-cols--col">
          <h3>UseFul Links</h3>
          <ul className="footer-cols--col-links">
            <li>
              <Link onClick={scrollToTop} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/contact"}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-cols--col">
          <h3>Contact Info</h3>
          <ul className="footer-cols--col-links info">
            <li>
              <IoLocationSharp />
              <address>
                Attrium Business Center - Business Attrium Building - 2nd Street
                - Dubai - United Arab Emirates
              </address>
            </li>
            <li>
              <FaPhoneAlt />
              <b>+971 50 103 7666</b>
            </li>
            <li>
              <FaPhoneAlt />
              <b>+971 56 199 0123</b>
            </li>
            <li>
              <MdOutlineMailOutline />
              <b>info@universalchanakya.com</b>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; Copyright NLPTrainingDubai 2018. All Right Reserved. Designed and
        Developed by <Link to="">SyStos Technology</Link>
      </div>
    </section>
  );
};

export default Footer;
