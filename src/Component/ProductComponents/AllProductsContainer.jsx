import React from "react";
import { createcontextCustom } from "../../Context/StateContext.jsx";
import ProductCard from "./ProductCard.jsx";
import SkeletonCategories from "../ProductsPage/SkeletonCategories.jsx";
import SkeletonLoadingProductCard from "./SkeletonLoadingProductCard.jsx";

const AllProductsContainer = () => {
  const {
    state: { items },
    ProductLoading,
  } = createcontextCustom();
  return (
    <div
      className={
        "mt-6 w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      }
    >
      {ProductLoading
        ? Array.from({ length: 4 }, (_, i) => (
            <SkeletonLoadingProductCard key={i} />
          ))
        : items.map((el, i) => {
            return <ProductCard key={el.id} {...el} index={(i % 4) + 1} />;
          })}
    </div>
  );
};

export default AllProductsContainer;
