import "./Header.scss";
import { NavLink } from "react-router-dom";
import NavData from "./NavData";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <ul className="navbar-items">
        {NavData.map((item) => {
          return (
            <li className="navbar-item">
              <NavLink to={item.route}>{item.heading}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className="button">
        <button>Book a consultation now</button>
      </div>
    </nav>
  );
};

export default Header;
