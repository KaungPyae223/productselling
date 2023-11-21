import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { motion } from "framer-motion";
import { textLeft } from "../../Animate/Animate.js";

const OurServicesCard = ({ title, icon, index }) => {
  return (
    <motion.div
      className={"bg-sky-400 rounded-xl p-2 relative"}
      variants={textLeft}
      initial={"initial"}
      whileInView={"enter"}
      custom={index}
      viewport={{ once: true }}
    >
      <p className={"text-center font-medium text-lg pt-2"}>{title}</p>
      <p className={"text-justify p-4"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        magni?
      </p>
      <div
        className={
          "text-white text-3xl p-1 bg-blue-800 w-fit rounded-lg absolute top-0 transform -translate-y-1/2"
        }
      >
        {icon}
      </div>
    </motion.div>
  );
};

export default OurServicesCard;
