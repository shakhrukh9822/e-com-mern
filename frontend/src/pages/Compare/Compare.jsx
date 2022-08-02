import React from "react";
import { useSelector } from "react-redux";
import { selectAllCategories } from "store/slices/categories_slice/categories.slice";
import { selectAllComparedProducts } from "store/slices/compare_products_slice/compare.products.slice";

const Compare = () => {
  const AllComparedProducts = useSelector(selectAllComparedProducts);
  const allCategories = useSelector(selectAllCategories);

  console.log(AllComparedProducts);
  console.log(allCategories);

  return <div>Compare</div>;
};

export default Compare;
