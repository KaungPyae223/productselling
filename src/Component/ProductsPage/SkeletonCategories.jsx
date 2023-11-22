import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardUp } from "../../Animate/Animate.js";
import Stars from "../ProductComponents/Stars.jsx";
import { motion } from "framer-motion";
const SkeletonCategories = () => {
  return (
    <SkeletonTheme baseColor="#6B7280" highlightColor="#FFFFFF">
      <div
        className={
          "bg-neutral-500 px-3 py-1 rounded-2xl w-fit cursor-pointer hover:text-white duration-300"
        }
      >
        <Skeleton width={70} />
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCategories;
