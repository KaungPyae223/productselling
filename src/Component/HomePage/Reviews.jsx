import React from "react";
import ReviewsCard from "./ReviewsCard.jsx";

const Reviews = () => {
  return (
    <div className={"mt-24 grid grid-cols-3 gap-10 w-4/5 mx-auto "}>
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
    </div>
  );
};

export default Reviews;
