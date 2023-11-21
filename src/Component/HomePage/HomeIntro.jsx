import React from "react";
import HomeShopping from "../../Photos/HomeShopping.svg";
import { motion } from "framer-motion";
import { textLeft, textRight } from "../../Animate/Animate.js";

const HomeIntro = () => {
  return (
    <div
      className={
        "h-[90vh] w-full md:w-4/5 mx-auto overflow-hidden align-middle"
      }
    >
      <div className={"flex gap-12 py-16 h-full flex-row"}>
        <div className={"basis-2/5 self-center"}>
          <motion.p
            variants={textLeft}
            whileInView={"enter"}
            initial={"initial"}
            className={"font-heading font-bold text-3xl"}
            viewport={{ once: true }}
            custom={2}
          >
            Seamless Convenience, Instant Gratification
          </motion.p>
          <motion.p
            variants={textLeft}
            whileInView={"enter"}
            initial={"initial"}
            className={"mt-4 font-paragraph"}
            viewport={{ once: true }}
            custom={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur dolorum est hic minus modi nisi nulla obcaecati sequi
            similique voluptas?
          </motion.p>
        </div>

        <motion.div
          className={"basis-3/5"}
          variants={textRight}
          whileInView={"enter"}
          initial={"initial"}
          viewport={{ once: true }}
        >
          <img
            src={HomeShopping}
            alt="Home Shopping"
            className={"w-full h-full"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeIntro;
