import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { slide } from "../../Animate/Animate.js";

const Link = ({ link, title, i }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? "BurgerActive" : "")}
    >
      <motion.p
        custom={i}
        variants={slide}
        animate={"enter"}
        initial={"initial"}
        exit={"exit"}
      >
        {title}
      </motion.p>
    </NavLink>
  );
};

export default Link;
