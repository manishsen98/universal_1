import "./Header.scss";
import { NavLink } from "react-router-dom";
import NavData from "./NavData";
import Sidebar from "../sidebar/Sidebar";
import Logo from "../Logo";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo w={"300"} />
      </div>
      {window.innerWidth >= 784 ? (
        <>
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
        </>
      ) : (
        <Sidebar />
      )}
    </nav>
  );
};

export default Header;
