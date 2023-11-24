import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../../Animate/Animate.js";
import Stars from "./Stars.jsx";
import { RxCross1 } from "react-icons/rx";
import { createcontextCustom } from "../../Context/StateContext.jsx";
const ItemDetailed = (props) => {
  const {
    id,
    brand,
    title,
    description,
    rating,
    thumbnail,
    price,
    detailed,
    category,
    images,
  } = props;

  const [ImageSrc, setSrc] = useState(thumbnail);
  const { dispatch, setMainTotal, MainTotal, state } = createcontextCustom();
  const { craft } = state;

  const AlreadyCrafted = craft.some((el) => el.id === id);
  console.log(craft);
  const AddtoCraft = () => {
    if (AlreadyCrafted) {
      const { Quantity } = craft.find((el) => (el.id = id));
      setMainTotal(MainTotal - Quantity * price);
      dispatch({ type: "removeCraft", id: id });
    } else {
      dispatch({
        type: "addCraft",
        payload: {
          id: id,
          thumbnail: thumbnail,
          title: title,
          price: price,
          Quantity: 1,
        },
      });
      setMainTotal(MainTotal + price);
    }
  };
  return (
    <motion.div
      variants={FadeIn}
      initial={"initial"}
      exit={"exit"}
      animate={"enter"}
      className={
        "fixed w-full h-[100vh] top-0 left-0 filterbackground z-50 flex justify-center items-center"
      }
    >
      <motion.div
        layoutId={id}
        className=" bg-white card_shadow rounded-xl relative flex flex-col md:flex-row mx-5 overflow-hidden"
      >
        <div className={"flex flex-col"}>
          <img
            src={ImageSrc}
            className={"max-w-[400px] object-contain bg-black h-[400px]"}
          />
          <div
            className={
              "flex flex-row mt-auto gap-1 h-[80px] items-center overflow-hidden max-w-[400px] overflow-x-scroll scroll-smooth pt-3"
            }
          >
            {images.map((el, i) => {
              return (
                <img
                  src={el}
                  key={i}
                  onClick={() => {
                    setSrc(el);
                  }}
                  className={
                    "w-[100px] h-[80px] object-contain bg-black hover:scale-125 duration-500"
                  }
                />
              );
            })}
          </div>
        </div>

        <div className="p-4 flex flex-col">
          <p className={"font-heading text-2xl font-bold"}>{title}</p>
          <p className={"font-link font-semibold"}>{brand}</p>
          <p
            className={
              "text-sm w-fit px-2 py-1 bg-neutral-200 rounded-2xl mt-2"
            }
          >
            {category}
          </p>
          <div
            className={"mt-2 flex flex-row items-center justify-start gap-3"}
          >
            <Stars rating={rating} />
            <p className={"font-medium"}>{rating} / 5</p>
          </div>
          <p className={"max-w-[350px] mt-3 overflow-y-scroll max-h-16"}>
            {description}
          </p>
          <div className={"border-t border-t-neutral-300 pt-1 mt-auto"}>
            <p className={"text-xl font-medium"}>{price} $</p>
            <button
              className={`${
                AlreadyCrafted
                  ? "bg-green-400 text-black"
                  : "bg-black text-white"
              } w-full py-1.5  rounded-lg mb-2 mt-1`}
              onClick={AddtoCraft}
            >
              {AlreadyCrafted ? "Remove from Craft" : "Add to Craft"}
            </button>
          </div>
        </div>
        <div
          className={
            "w-[30px] h-[30px] rounded-[25px] bg-neutral-300 flex items-center justify-center absolute top-3 right-3 cursor-pointer"
          }
          onClick={() => {
            detailed(false);
          }}
        >
          <RxCross1 />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ItemDetailed;
