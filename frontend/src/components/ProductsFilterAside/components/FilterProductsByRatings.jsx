import React from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

// settings
import { raitings } from "settings/filterRatings";

const FilterProductsByRatings = ({ price }) => {
  const navigate = useNavigate();

  const filterProductByRatings = (ratings) => {
    if (ratings) {
      navigate(`/search?price=${price}&ratings=${ratings}`);
    }
  };
  return (
    <div>
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
  );
};

FilterProductsByRatings.propTypes = {
  price: PropTypes.array,
};

export default FilterProductsByRatings;
