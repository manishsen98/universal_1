import React, { useState } from "react";
import ToggleBtn from "./ToggleBtn";
import "./Sidebar.scss";
import { motion, transform } from "framer-motion";
import { Link } from "react-router-dom";
import NavData from "../header/NavData";
import { FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [navOpen , setNavOpen] = useState("close")
  const variants = {
    open: { clipPath: "circle(120rem)" },
    closed: {
      clipPath: "circle(0rem at calc(100% - 3.5rem) 3.2rem)",
      transition: {
        delay: 0.5,
        type: "spring",
        damping: 40,
        stiffness: 400,
      },
    },
  };

  const linkVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <aside>
      <ToggleBtn setOpen={setOpen} open={open} />
      <motion.div
        className={`sidebar ${open ? "open" : ""} `}
        variants={variants}
        animate={open ? "open" : "closed"}
      >
        <motion.div className="links" variants={linkVariants}>
          {NavData.map((item, index) => (
            <motion.span
            className="navroutes grid grid-cols-2 justify-items-center items-center gap-3"
              key={`${index}`}
              variants={itemVariants}
              // whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.route=='#services'?<a href={item.route}>{item.heading}</a>: <Link to={item.route}>{item.heading}</Link>}
              {item.subheadings && <button><FaChevronDown className={`transition-all ease-in-out duration-300 btn-${navOpen}`} onClick={()=>setNavOpen((prev)=>prev=='close'?"open":"close")}  /></button>}
              <div className={`flex flex-col col-start-1 col-end-3 ${navOpen}`}>
                {item.subheadings?.map((subitem)=>{
              return <Link to={`/services${subitem.route}`}>{subitem.heading}</Link>
               
                })}
              </div>
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
