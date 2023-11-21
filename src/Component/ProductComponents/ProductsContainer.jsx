import React, { useEffect } from "react";
import { createcontextCustom } from "../../Context/StateContext.jsx";
import ProductCard from "./ProductCard.jsx";
import Stars from "./Stars.jsx";

const ProductsContainer = () => {
  const {
    state: { items },
  } = createcontextCustom();
  console.log(items);
  return (
    <div
      className={
        "mt-12 w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      }
    >
      {items.slice(0, 4).map((el, i) => {
        return <ProductCard key={el.id} {...el} index={i} />;
      })}
    </div>
  );
};

export default ProductsContainer;
