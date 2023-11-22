import React from "react";
import { motion } from "framer-motion";
import { Categoryfade } from "../../Animate/Animate.js";
import { createcontextCustom } from "../../Context/StateContext.jsx";

const CategoriesComponent = ({ title, index }) => {
  const { SelectedCategory, setSelectedCategory, setPage } =
    createcontextCustom();
  const OnClick = () => {
    SelectedCategory === title
      ? setSelectedCategory(null)
      : (setSelectedCategory(title), setPage(0));
  };
  return (
    <motion.div
      variants={Categoryfade}
      whileInView={"enter"}
      initial={"initial"}
      custom={index}
      className={`px-3 py-1 rounded-2xl w-fit cursor-pointer hover:bg-green-400 hover:text-black duration-300 ${
        SelectedCategory === title
          ? "bg-amber-200 text-neutral-600"
          : "bg-neutral-500 text-white"
      }`}
      onClick={OnClick}
    >
      <p className={"text-sm"}>{title}</p>
    </motion.div>
  );
};

export default CategoriesComponent;
