import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountComponent = ({ value, type }) => {
  const [Counter, setCounter] = useState(false);

  return (
    <div className={"flex align-middle flex-col"}>
      <ScrollTrigger onEnter={() => setCounter(true)}>
        <p className={"font-heading text-2xl font-semibold text-center"}>
          {Counter && <CountUp end={value} start={0} duration={2} delay={0} />}
        </p>
        <p className={"font-paragraph text-center"}>{type}</p>
      </ScrollTrigger>
    </div>
  );
};

export default CountComponent;
