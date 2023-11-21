import React from "react";
import { motion } from "framer-motion";
import { Categoryfade } from "../../Animate/Animate.js";

const CategoriesComponent = ({ title, index }) => {
  return (
    <motion.div
      variants={Categoryfade}
      whileInView={"enter"}
      initial={"initial"}
      custom={index}
      className={
        "bg-amber-200 text-neutral-600 px-3 py-1 rounded-2xl w-fit cursor-pointer hover:bg-gray-700 hover:text-white duration-300"
      }
    >
      <p className={"text-sm"}>{title}</p>
    </motion.div>
  );
};

export default CategoriesComponent;
