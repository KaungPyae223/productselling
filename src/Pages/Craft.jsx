import React, { useEffect, useState } from "react";
import { createcontextCustom } from "../Context/StateContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { CraftAppear } from "../Animate/Animate.js";
import EmptyCraft from "../Photos/EmptyCraft.svg";
import CraftItem from "../Component/Craft/CraftItem.jsx";
const Craft = () => {
  const {
    state: { craft },
    setCraftOpen,
    MainTotal,
  } = createcontextCustom();

  // const Total = () => craft?.reduce((pv, cv) => pv + cv.price, 0);

  const NoItemInCraft = () => {
    return (
      <div>
        <img src={EmptyCraft} className={"w-4/5 mx-auto"} alt="Empty Craft" />
        <p className={"text-center mt-4 text-2xl"}>No Item in Craft</p>
      </div>
    );
  };
  const CraftItemsContainer = () => {
    return (
      <>
        <div
          className={
            "h-full w-full overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-neutral-500"
          }
        >
          <AnimatePresence mode={"wait"}>
            {craft.map((el, i) => {
              return <CraftItem key={i} {...el} index={i} />;
            })}
          </AnimatePresence>
        </div>
        <div className={"py-1 w-full"}>
          <p className={"text-xl font-medium text-end"}>
            Total Amount {MainTotal} $
          </p>
        </div>
      </>
    );
  };

  return (
    <motion.div
      className={
        "relative card_shadow border border-sky-600 p-3 h-full w-[350px] bg-white"
      }
      variants={CraftAppear}
      initial={"initial"}
      animate={"enter"}
      exit={"exit"}
    >
      <div
        className={
          "w-[30px] h-[30px] rounded-[25px] bg-neutral-300 flex items-center justify-center absolute top-3 right-3 cursor-pointer"
        }
        onClick={() => {
          setCraftOpen(false);
        }}
      >
        <RxCross1 />
      </div>
      <div className={"pt-10 flex flex-col gap-10 items-start h-full"}>
        <p className={"text-2xl font-heading font-semibold"}>Craft</p>
        {craft.length === 0 ? NoItemInCraft() : CraftItemsContainer()}
      </div>
    </motion.div>
  );
};

export default Craft;
