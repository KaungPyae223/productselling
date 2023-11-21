import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonCategories = () => {
  return (
    <SkeletonTheme baseColor="#fff3c4" highlightColor="#fce89e">
      <div
        className={
          "bg-amber-200 text-neutral-600 px-3 py-1 rounded-2xl w-fit cursor-pointer hover:text-white duration-300"
        }
      >
        <Skeleton width={70} />
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCategories;
