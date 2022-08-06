import React from "react";
import { get } from "lodash";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllCategories } from "store/slices/categories_slice/categories.slice";

const FilterProductsByCategory = ({ price }) => {
  const navigate = useNavigate();
  const allCategories = useSelector(selectAllCategories);

  const filterProductByCategory = (category = "") => {
    if (category) {
      navigate(`/search?price=${price}&category=${category}`);
    }
  };

  return (
    <div>
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
  );
};

FilterProductsByCategory.propTypes = {
  price: PropTypes.array,
};

export default FilterProductsByCategory;
