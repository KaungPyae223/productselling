import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Nav from "./Component/Navigation/Nav.jsx";
import Products from "./Pages/Products.jsx";
import { AnimatePresence } from "framer-motion";
import Craft from "./Pages/Craft.jsx";
import { createcontextCustom } from "./Context/StateContext.jsx";
const App = () => {
  const location = useLocation();
  const { CraftOpen } = createcontextCustom();
  return (
    <div className={"w-full overflow-hidden"}>
      <Nav />
      <AnimatePresence mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <div className={"fixed top-0 right-0 h-[100vh] z-50"}>
        <AnimatePresence mode={"wait"}>
          {CraftOpen && <Craft />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
