import React from "react";

const Stars = ({ rating }) => {
  let stars = [];
  const giverating = () => {
    for (let i = 1; i <= 5; i++) {
      const bs = {
        borderInlineStartWidth: `${
          i < rating ? 15 : (1 - (i - rating)) * 15
        }px`,
      };
      stars.push(<div key={i} className={"star"} style={bs}></div>);
    }
    return stars;
  };
  return <div className={"flex flex-row gap-1"}>{giverating()}</div>;
};

export default Stars;
