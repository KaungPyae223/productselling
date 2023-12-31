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
          variants={CardUp}
          whileInView={"enter"}
          initial={"initial"}
          layoutId={id}
          custom={index}
        >
          <img
            src={thumbnail}
            className={"h-[200px] object-contain bg-black"}
          />
          <div className={"p-3"}>
            <p className={"font-link font-bold line-clamp-1"}>{title}</p>
            <div>
              <Stars rating={rating} />
            </div>
            <p className={"font-paragraph text-sm mt-3 line-clamp-2"}>
              {description}
            </p>
          </div>
          <div className={"pt-2 px-3 border-t border-t-neutral-500 mt-auto"}>
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
