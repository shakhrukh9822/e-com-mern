import React from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

// Material Ui Component
import Slider from "@material-ui/core/Slider";

// settings

import { MIN, MAX } from "settings/productRangeSliderPrice";

const FilterProductsByPrice = ({ setPrice, price }) => {
  const navigate = useNavigate();

  const priceHandler = (e, newprice) => {
    setPrice(newprice);
    localStorage.setItem("filterPrice", JSON.stringify(price));
  };

  const filterProductsByPrice = () => {
    if (price) {
      navigate(`/search?price=${price}`);
    }
  };

  return (
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
  );
};

FilterProductsByPrice.propTypes = {
  price: PropTypes.array,
  setPrice: PropTypes.func,
};

export default FilterProductsByPrice;
