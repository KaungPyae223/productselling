import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Stars from "./Stars.jsx";

const SkeletonLoadingProductCard = () => {
  return (
    <SkeletonTheme baseColor="#f2f2f2" highlightColor="#e0e0e0">
      <div
        className={
          "rounded-lg overflow-hidden border border-neutral-300 card_shadow flex flex-col "
        }
      >
        <Skeleton className={"w-full h-[200px]"} />
        <div className={"p-3"}>
          <Skeleton width={200} />
          <Skeleton width={100} />
          <Skeleton className={"w-full h-[50px]"} />
        </div>
        <div className={"pt-2 px-3 border-t border-t-neutral-500 mt-auto"}>
          <Skeleton width={80} className={"h-[20px]"} />
          <Skeleton className={"w-full h-[30px] mb-2"} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonLoadingProductCard;
