import React from "react";
import { motion } from "framer-motion";
import { PageChange } from "../Animate/Animate.js";
import ProductSearch from "../Component/ProductsPage/ProductSearch.jsx";
import Categories from "../Component/ProductsPage/Categories.jsx";
import AllProductsContainer from "../Component/ProductComponents/AllProductsContainer.jsx";

const Products = () => {
  return (
    <motion.div
      variants={PageChange}
      initial={"initial"}
      exit={"exit"}
      animate={"enter"}
    >
      <ProductSearch />
      <Categories />
      <AllProductsContainer />
    </motion.div>
  );
};

export default Products;
