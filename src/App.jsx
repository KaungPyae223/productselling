import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Nav from "./Component/Navigation/Nav.jsx";
import Products from "./Pages/Products.jsx";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <div className={"w-full overflow-hidden"}>
      <Nav />
      <AnimatePresence mode={"wait"} initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
