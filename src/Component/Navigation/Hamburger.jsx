import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { menuslide } from "../../Animate/Animate.js";
import Link from "./Link.jsx";
import Curve from "./Curve.jsx";

const Hamburger = () => {
  const Links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Craft",
      link: "/craft",
    },
  ];
  return (
    <motion.div
      variants={menuslide}
      initial={"initial"}
      animate={"enter"}
      exit={"exit"}
      className={
        "fixed w-[320px] h-full bg-gray-700 top-0 right-0 flex py-3 items-center justify-start gap-28 flex-col z-20"
      }
    >
      <Curve />
      <h2
        className={
          "text-[2.3rem] text-white mt-12 border-b-2 border-b-amber-400"
        }
      >
        Grab and Go
      </h2>
      <div className={"w-full  ps-4 text-white flex gap-4 text-xl flex-col"}>
        {Links.map((el, index) => {
          // return <Link key={index} link={el.link} title={el.title} />;
          return <Link key={index} i={index} title={el.title} link={el.link} />;
        })}
      </div>
      <div className={"text-white mt-auto"}>
        <p className={"text-sm text-center"}>©2023 G&G.com</p>
        <p className={"text-sm text-center"}>All rights is reversed</p>
      </div>
    </motion.div>
  );
};

export default Hamburger;
