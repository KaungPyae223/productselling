import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import Hamburger from "./Hamburger.jsx";
import { AnimatePresence } from "framer-motion";
const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={
        "w-100 mx-5  md:w-4/5 md:mx-auto py-4 border-b border-b-amber-400 flex justify-between items-center"
      }
    >
      <Link to={"/"}>
        <h2 className={"font-heading text-2xl"}>Grab & GO</h2>
      </Link>
      <div
        className={
          "font-link text-xl cursor-pointer md:flex flex-row gap-5 items-center hidden"
        }
      >
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/products"}>
          <p>Products</p>
        </NavLink>
        <NavLink to={"/about"}>
          <p>About</p>
        </NavLink>
        <Link to={"/craft"}>
          <div
            className={
              "w-[35px] h-[35px] flex items-center justify-center rounded-[30px] bg-blue-500 border-2 border-sky-600"
            }
          >
            <CiShoppingCart className={"text-white font-bold"} />
          </div>
        </Link>
      </div>
      <div
        onClick={() => setActive(!active)}
        className={
          "w-[40px] h-[40px] relative rounded-[35px] shadow-2xl border-neutral-500 bg-neutral-500 z-30 overflow-hidden card_shadow block md:hidden"
        }
      >
        <div
          className={`hamburger_stick -translate-x-1/2 ${
            active ? "top-1/2 -rotate-45" : "top-1/3  "
          }`}
        ></div>
        <div
          className={`hamburger_stick top-1/2 ${
            active ? "translate-x-12" : "-translate-x-1/2"
          }`}
        ></div>
        <div
          className={`hamburger_stick -translate-x-1/2 ${
            active ? "top-1/2 rotate-45" : "top-2/3  "
          }`}
        ></div>
      </div>
      <div className={"absolute block md:hidden"}>
        <AnimatePresence mode={"wait"}>
          {active && <Hamburger />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;
