import React from "react";
import { useSelector } from "react-redux";
import { sortProductsByCategory } from "utils/sortProductsByCategory";

// component
import { FilteredProductsByCategorySliders } from "components/FilteredProductsByCategorySliders";

// store
import { selectAllCategories } from "store/slices/categories/categories";
import { selectAllViewedProducts } from "store/slices/viewed_product_slice/viewed.product.slice";

const Viewed = () => {
  const AllViewedProducts = useSelector(selectAllViewedProducts);
  const AllCategories = useSelector(selectAllCategories);

  const filteredProducts = sortProductsByCategory(
    AllViewedProducts,
    AllCategories
  );

  return (
    <FilteredProductsByCategorySliders
      inViewedLaterList={true}
      NoResultsTitle="viewedLater"
      filteredProducts={filteredProducts}
      title={"See Later Prducts"}
    />
  );
};

export default Viewed;
