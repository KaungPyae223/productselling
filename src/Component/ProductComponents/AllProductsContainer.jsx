import React from "react";
import { createcontextCustom } from "../../Context/StateContext.jsx";
import ProductCard from "./ProductCard.jsx";

const AllProductsContainer = () => {
  const {
    state: { items },
  } = createcontextCustom();
  return (
    <div
      className={
        "mt-6 w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      }
    >
      {items.map((el, i) => {
        return <ProductCard key={el.id} {...el} index={(i % 4) + 1} />;
      })}
    </div>
  );
};

export default AllProductsContainer;
