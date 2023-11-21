import React, { useEffect, useState } from "react";
import CategoriesComponent from "./CategoriesComponent.jsx";
import SkeletonCategories from "./SkeletonCategories.jsx";

const Categories = () => {
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true);
  const FetchCategories = async () => {
    const api = await fetch("https://dummyjson.com/products/categories");
    const Json = await api.json();
    setcategories(Json);
    setloading(false);
  };
  useEffect(() => {
    FetchCategories();
  }, []);

  return (
    <div className={"w-4/5 mx-auto flex flex-wrap gap-2"}>
      {loading
        ? Array.from({ length: 10 }, (_, i) => <SkeletonCategories key={i} />)
        : categories.map((el, i) => (
            <CategoriesComponent key={i} title={el} index={i} />
          ))}
    </div>
  );
};

export default Categories;
