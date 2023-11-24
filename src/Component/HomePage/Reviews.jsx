import React from "react";
import ReviewsCard from "./ReviewsCard.jsx";

const Reviews = () => {
  return (
    <div className={"mt-10 grid grid-cols-3 gap-10 md:w-4/5 mx-5 md:mx-auto "}>
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
    </div>
  );
};

export default Reviews;
