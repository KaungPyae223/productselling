import React from "react";
import { motion } from "framer-motion";
import { PageChange } from "../Animate/Animate.js";
import HomeIntro from "../Component/HomePage/HomeIntro.jsx";
import HomeViewCount from "../Component/HomePage/HomeViewCount.jsx";
import Title from "../Component/Title.jsx";
import ProductsContainer from "../Component/ProductComponents/ProductsContainer.jsx";
import OurServices from "../Component/HomePage/OurServices.jsx";
import Reviews from "../Component/HomePage/Reviews.jsx";
import Footer from "../Component/Footer.jsx";

const Products = () => {
  return (
    <motion.div
      variants={PageChange}
      initial={"initial"}
      exit={"exit"}
      animate={"enter"}
    ></motion.div>
  );
};

export default Products;
