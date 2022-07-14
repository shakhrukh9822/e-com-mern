import React from "react";
import { useSelector } from "react-redux";
import { selectAllViewedProducts } from "store/slices/viewed_product_slice/viewed.product.slice";

const Viewed = () => {
  const AllViewedProducts = useSelector(selectAllViewedProducts);

  console.log(AllViewedProducts.length);

  return <div>Viewed</div>;
};

export default Viewed;
