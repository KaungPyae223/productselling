import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiTrash } from "react-icons/ci";
import { createcontextCustom } from "../../Context/StateContext.jsx";
import { CraftItemAnimation } from "../../Animate/Animate.js";
const CraftItem = (props) => {
  const { dispatch, setMainTotal, MainTotal } = createcontextCustom();
  const { title, thumbnail, price, Quantity, id, index } = props;
  const [qty, setqty] = useState(1);
  useEffect(() => {
    setqty(Quantity);
  }, []);
  let SubTotal = qty * price;
  const AddQty = () => {
    setqty(qty + 1);
    dispatch({ type: "modifyQty", id: id, payload: qty + 1 });
    setMainTotal(MainTotal + price);
  };
  const MinusQty = () => {
    if (qty > 1) {
      setqty(qty - 1);
      dispatch({ type: "modifyQty", id: id, payload: qty - 1 });
      setMainTotal(MainTotal - price);
    }
  };
  return (
    <motion.div
      className={
        "w-full border-b border-b-neutral-500 py-3 flex flex-row gap-2 relative"
      }
      variants={CraftItemAnimation}
      initial={"initial"}
      animate={"enter"}
      custom={index}
    >
      <img
        src={thumbnail}
        className={"w-[100px] h-[100px] object-contain object-top"}
      />
      <div className={"flex flex-col gap-0.5 w-full"}>
        <p className={"font-link font-bold text-lg"}>{title}</p>
        <p className={"font-link font-bold"}>{price} $</p>
        <p className={"text-sm"}>Quantity</p>
        <div
          className={
            "flex flex-row gap-3 border border-neutral-500 justify-center items-center mt-1 rounded-lg px-1 w-fit me-auto"
          }
        >
          <button className={"text-2xl"} onClick={MinusQty}>
            <CiCircleMinus />
          </button>
          <p className={"text-xl"}>{qty}</p>
          <button className={"text-2xl"} onClick={AddQty}>
            <CiCirclePlus />
          </button>
        </div>
        <div
          className={"ms-auto flex mt-1 text-lg flex-row gap-3 items-center"}
        >
          <p>Sub Total</p>
          <p className={"text-2xl font-bold"}>{SubTotal} $</p>
        </div>
      </div>
      <div
        className={
          "w-[30px] h-[30px] rounded-[25px] bg-neutral-100 flex items-center justify-center absolute bottom-3 left-3 cursor-pointer text-2xl"
        }
        onClick={() => {
          setMainTotal(MainTotal - SubTotal);
          dispatch({ type: "removeCraft", id: id });
        }}
      >
        <CiTrash />
      </div>
    </motion.div>
  );
};

export default CraftItem;
