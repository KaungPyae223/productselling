import React from "react";

const Title = ({ title }) => {
  return (
    <div
      className={
        "mt-12 md:w-4/5 mx-5 md:mx-auto flex flex-row justify-center items-center gap-3"
      }
    >
      <div className={"pt-0.5 bg-neutral-400 grow"}></div>
      <p className={"font-heading text-lg font-medium"}>{title}</p>
      <div className={"pt-0.5 bg-neutral-400 grow"}></div>
    </div>
  );
};

export default Title;
