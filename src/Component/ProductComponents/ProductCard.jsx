import React, { useState } from "react";
import Stars from "./Stars.jsx";
import { AnimatePresence, motion } from "framer-motion";
import ItemDetailed from "./ItemDetailed.jsx";
import { CardUp, textLeft } from "../../Animate/Animate.js";

const ProductCard = (props) => {
  const { id, title, description, rating, thumbnail, price, index } = props;
  const [isDetailed, Detailed] = useState(false);
  return (
    <AnimatePresence>
      {!isDetailed && (
        <motion.div
          className={
            "rounded-lg overflow-hidden border border-neutral-300 card_shadow flex flex-col"
          }
          layoutId={id}
          variants={CardUp}
          whileInView={"enter"}
          initial={"initial"}
          custom={index}
          viewport={{ once: true }}
        >
          <img
            src={thumbnail}
            className={"h-[200px] object-contain bg-black"}
          />
          <div className={"p-3"}>
            <p className={"font-link font-bold"}>{title}</p>
            <div>
              <Stars rating={rating} />
            </div>
            <p className={"font-paragraph text-sm mt-3"}>
              {description.length > 100
                ? description.substring(0, 50) + "..."
                : description}
            </p>
          </div>
          <div
            className={"mt-1 pt-2 px-3 border-t border-t-neutral-500 mt-auto"}
          >
            <p className={"text-xl font-medium"}>{price} $</p>
            <button
              className={
                "w-full py-1.5 bg-black text-white rounded-lg mb-2 mt-1"
              }
              onClick={() => {
                Detailed(!isDetailed);
              }}
            >
              See More
            </button>
          </div>
        </motion.div>
      )}

      {isDetailed && (
        <div>
          <ItemDetailed key={id} {...props} detailed={Detailed} />
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductCard;
