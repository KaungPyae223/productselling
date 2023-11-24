import React from "react";
import NoData from "../../Photos/NoData.svg";
const NoProduct = () => {
  return (
    <div className={"mx-auto col-span-4  my-12 "}>
      <p className={"text-center mb-12 text-4xl font-heading font-medium"}>
        No Data
      </p>
      <img src={NoData} className={"h-[350px]"} />
    </div>
  );
};

export default NoProduct;
