import React, { useEffect, useState } from "react";
import { createcontextCustom } from "../../Context/StateContext.jsx";

const ProductSearch = () => {
  const { setSearch } = createcontextCustom();
  const [value, setValue] = useState("");
  return (
    <form
      className={
        "w-4/5 mx-auto overflow-hidden my-3 border border-sky-600 rounded-[50px] flex flex-row items-center justify-between"
      }
      onSubmit={(event) => {
        event.preventDefault();
        setSearch(value);
      }}
    >
      <input
        type={"text"}
        className={"w-full focus:ring-0 focus:outline-none text-lg my-2.5 mx-6"}
        placeholder={"Search here"}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        className={
          "bg-gray-700 text-white self-stretch px-8 rounded-3xl text-lg"
        }
      >
        Search
      </button>
    </form>
  );
};

export default ProductSearch;
