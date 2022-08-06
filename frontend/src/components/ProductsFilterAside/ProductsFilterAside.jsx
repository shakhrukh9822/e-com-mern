import React, { useState } from "react";

// components
import FilterProductsByPrice from "./components/FilterProductsByPrice";
import FilterProductsByRatings from "./components/FilterProductsByRatings";
import FilterProductsByCategory from "./components/FilterProductsByCategory";

const ProductsFilterAside = () => {
  const [price, setPrice] = useState([0, 2000]);

  return (
    <div
      className="w-[100%] h-[91vh] sticky top-[80px] mb-3 rounded-sm p-4"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      <h1 className="text-[24px]">Filter Products</h1>
      <FilterProductsByPrice price={price} setPrice={setPrice} />

      <div className="mt-4">
        <FilterProductsByCategory price={price} />
      </div>
      <div className="mt-4">
        <FilterProductsByRatings price={price} />
      </div>
    </div>
  );
};

export default ProductsFilterAside;
