import React from "react";
import { createcontextCustom } from "../../Context/StateContext.jsx";

const PaginationComponent = ({ title }) => {
  const { setPage, Page } = createcontextCustom();
  return (
    <div
      className={`${
        Page + 1 === title ? "bg-sky-700 text-white" : "bg-white text-black"
      } py-1 px-3 rounded card_shadow  cursor-pointer duration-300 hover:bg-sky-400 hover:text-white`}
      onClick={() => {
        setPage(title - 1);
      }}
    >
      {title}
    </div>
  );
};

export default PaginationComponent;
