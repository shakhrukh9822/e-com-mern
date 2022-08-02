import React from "react";

import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MIN, MAX } from "settings/productRangeSliderPrice";
import { useSelector } from "react-redux";
import { selectAllCategories } from "store/slices/categories_slice/categories.slice";
import { get } from "lodash";
import { raitings } from "settings/filterRatings";

const ProductsFilterAside = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState([0, 2000]);
  const allCategories = useSelector(selectAllCategories);

  const filterProductsByPrice = () => {
    if (price) {
      navigate(`/search?price=${price}`);
    }
  };

  const filterProductByCategory = (category = "") => {
    if (category) {
      navigate(`/search?price=${price}&category=${category}`);
    }
  };

  const filterProductByRatings = (ratings) => {
    if (ratings) {
      navigate(`/search?price=${price}&ratings=${ratings}`);
    }
  };

  const priceHandler = (e, newprice) => {
    setPrice(newprice);
    localStorage.setItem("filterPrice", JSON.stringify(price));
  };

  return (
    <div
      className="w-[100%] h-[91vh] sticky top-[80px] mb-3 rounded-sm p-4"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      <h1 className="text-[24px]">Filter Products</h1>
      <div>
        <span className="text-[20px]">
          By Price: From {MIN}$ to {MAX}$
        </span>
        <span className="block w-[95%] mx-auto">
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={MIN}
            max={MAX}
            style={{
              color: "#101010",
            }}
          />
        </span>
        <button
          className="text-[18px] capitalize border px-2 ml-auto flex items-center justify-center rounded-sm w-[100%] hover:bg-gray-800 hover:text-white"
          type="button"
          onClick={filterProductsByPrice}
        >
          filter
        </button>
      </div>
      <div className="mt-4">
        <span className="text-[20px] mb-2 flex">By Category:</span>
        <ul className="category-list-scroll max-h-[30vh] overflow-y-auto pr-2">
          {allCategories.map((category) => (
            <li
              className="text-[18px] capitalize border mb-2 px-2 rounded-sm cursor-pointer hover:border-gray-500"
              key={category.slug}
              onClick={() => filterProductByCategory(category.name)}
            >
              {get(category, "name", null)}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <span className="text-[20px] mb-2 flex">By Ratings:</span>
        <ul className="pr-2">
          {raitings.map((rating) => (
            <li
              className="border mb-2 px-2 rounded-sm cursor-pointer hover:border-gray-500"
              onClick={() => filterProductByRatings(rating.rating)}
              key={rating.rating}
            >
              {rating.stars}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsFilterAside;
