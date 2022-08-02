import React from "react";
import { useSelector } from "react-redux";
import { sortProductsByCategory } from "utils/sortProductsByCategory";

// components
import { FilteredProductsByCategorySliders } from "components/FilteredProductsByCategorySliders";

// store
import { selectAllCategories } from "store/slices/categories_slice/categories.slice";
import { selectAllLikedProducts } from "store/slices/liked_products_slice/liked.products.slice";

const LikedProducts = () => {
  const AlllikedProducts = useSelector(selectAllLikedProducts);
  const AllCategories = useSelector(selectAllCategories);

  const filteredProducts = sortProductsByCategory(
    AlllikedProducts,
    AllCategories
  );

  return (
    <FilteredProductsByCategorySliders
      inLikedList={true}
      NoResultsTitle="likedProducts"
      title={"Favourite Products"}
      filteredProducts={filteredProducts}
      helemetTitle="Liked Prducts"
    />
  );
};

export default LikedProducts;
