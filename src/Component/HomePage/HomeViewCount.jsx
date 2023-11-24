import React from "react";
import CountComponent from "./CountComponent.jsx";

const HomeViewCount = () => {
  return (
    <div className={"md:w-4/5 mx-5 md:mx-auto"}>
      <div
        className={
          "w-4/5 mx-auto py-6 border-2 border-sky-500 rounded-xl flex flex-row justify-around"
        }
      >
        <CountComponent value={100} type={"Customer"} />
        <CountComponent value={25} type={"Services"} />
        <CountComponent value={100} type={"Products"} />
      </div>
    </div>
  );
};

export default HomeViewCount;
