import React from "react";
import HomeIntro from "../Component/HomePage/HomeIntro.jsx";
import HomeViewCount from "../Component/HomePage/HomeViewCount.jsx";
import ProductsContainer from "../Component/ProductComponents/ProductsContainer.jsx";
import Title from "../Component/Title.jsx";
import OurServices from "../Component/HomePage/OurServices.jsx";
import Reviews from "../Component/HomePage/Reviews.jsx";
import Footer from "../Component/Footer.jsx";
import { motion } from "framer-motion";
import { PageChange } from "../Animate/Animate.js";

const Home = () => {
  return (
    <motion.div
      variants={PageChange}
      initial={"initial"}
      exit={"exit"}
      animate={"enter"}
    >
      <HomeIntro />
      <HomeViewCount />
      <Title title={"New Items"} />
      <ProductsContainer />
      <Title title={"Our Services"} />
      <OurServices />
      <Title title={"Customers Reviews"} />
      <Reviews />
      <Footer />
    </motion.div>
  );
};

export default Home;
