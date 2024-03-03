import "./Header.scss";
import { NavLink } from "react-router-dom";
import NavData from "./NavData";
import Sidebar from "../sidebar/Sidebar";
import Logo from "../Logo";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavabarVariants } from "../../assets/animations/Navbar";
const Header = () => {

  return (
    <motion.nav
      variants={NavabarVariants}
      initial="initial"
      animate="animate"
      className={`navbar`}
    >
      <div className="logo">
        <Logo w={"300"} />
      </div>
        <Sidebar />
    </motion.nav>
  );
};

export default Header;
