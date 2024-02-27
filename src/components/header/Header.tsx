import "./Header.scss";
import { NavLink } from "react-router-dom";
import NavData from "./NavData";
import Sidebar from "../sidebar/Sidebar";
import Logo from "../Logo";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavabarVariants } from "../../assets/animations/Navbar";
const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = useCallback(() => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  }, [window.scrollY, lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <motion.nav
      variants={NavabarVariants}
      initial="initial"
      animate="animate"
      className={`navbar navbar-${show}`}
    >
      <div className="logo">
        <Logo w={"300"} />
      </div>
      {window.innerWidth >= 784 ? (
        <ul className="navbar-items">
          {NavData.map((item) => {
            return (
              <li className="navbar-item">
                <NavLink to={item.route}>{item.heading}</NavLink>
                {item.subheadings ? (
                  <div className="link-dropdown">
                    {item.subheadings.map((subitem, index) => {
                      return (
                        <NavLink
                          className="link-dropdown-item"
                          key={index}
                          to={`${item.route}${subitem.route}`}
                        >
                          {subitem.heading}
                        </NavLink>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <Sidebar />
      )}
    </motion.nav>
  );
};

export default Header;
