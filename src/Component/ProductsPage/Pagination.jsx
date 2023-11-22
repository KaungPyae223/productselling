import React from "react";
import { createcontextCustom } from "../../Context/StateContext.jsx";
import PaginationComponent from "./PaginationComponent.jsx";

const Pagination = () => {
  const {
    state: { total },
  } = createcontextCustom();
  const totalpages = Math.ceil(total / 28);
  console.log(totalpages);
  return (
    <div className={"w-fit mx-auto my-4 flex flex-row gap-2 items-center"}>
      {Array.from({ length: totalpages }, (_, i) => (
        <PaginationComponent key={i} title={i + 1} />
      ))}
    </div>
  );
};

export default Pagination;
