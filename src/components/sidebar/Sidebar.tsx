import React from "react";
import ToggleBtn from "./ToggleBtn";
import "./Sidebar.scss";
import { motion, transform } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

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
  const links = ["About", "Skills", "Projects", "Education"];
  return (
    <aside className={``}>
      <ToggleBtn setOpen={setOpen} open={open} />
      <motion.div
        className={`sidebar ${open ? "open" : ""} `}
        variants={variants}
        animate={open ? "open" : "closed"}
      >
        <motion.div className="links" variants={linkVariants}>
          {links.map((item, index) => (
            <motion.a
              href={`#${item}`}
              key={`${index}`}
              variants={itemVariants}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
