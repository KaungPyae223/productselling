import React from "react";
import { createcontextCustom } from "../../Context/StateContext.jsx";
import ProductCard from "./ProductCard.jsx";
import SkeletonCategories from "../ProductsPage/SkeletonCategories.jsx";
import SkeletonLoadingProductCard from "./SkeletonLoadingProductCard.jsx";
import NoProduct from "../ProductsPage/NoProduct.jsx";

const AllProductsContainer = () => {
  const {
    state: { items },
    ProductLoading,
    Search,
  } = createcontextCustom();
  const FilterProduct = () => {
    return items.filter((el) =>
      el.title.toLowerCase().includes(Search.toLowerCase()),
    ).length === 0 ? (
      <NoProduct />
    ) : (
      items
        .filter((el) => el.title.toLowerCase().includes(Search.toLowerCase()))
        .map((el, i) => <ProductCard key={el.id} {...el} index={(i % 4) + 1} />)
    );
  };

  const FilterProductWithApi = () => {
    return items.length === 0 ? (
      <NoProduct />
    ) : (
      items.map((el, i) => (
        <ProductCard key={el.id} {...el} index={(i % 4) + 1} />
      ))
    );
  };
  return (
    <div
      className={
        "mt-6 md:w-4/5 mx-5 md:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      }
    >
      {ProductLoading
        ? Array.from({ length: 4 }, (_, i) => (
            <SkeletonLoadingProductCard key={i} />
          ))
        : //If Don't use search api
          // : FilterProduct()
          // If Use the api to Search
          FilterProductWithApi()}
    </div>
  );
};

export default AllProductsContainer;
