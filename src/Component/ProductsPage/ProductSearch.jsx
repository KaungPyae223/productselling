import React from "react";

const ProductSearch = () => {
  return (
    <div
      className={
        "w-4/5 mx-auto overflow-hidden my-3 border border-sky-600 rounded-[50px] flex flex-row items-center justify-between"
      }
    >
      <input
        type={"text"}
        className={"w-full focus:ring-0 focus:outline-none text-lg my-2.5 mx-6"}
        placeholder={"Search here"}
      />
      <button
        className={
          "bg-gray-700 text-white self-stretch px-8 rounded-3xl text-lg"
        }
      >
        Search
      </button>
    </div>
  );
};

export default ProductSearch;
