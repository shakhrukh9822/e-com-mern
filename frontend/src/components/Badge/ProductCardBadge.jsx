import React from "react";
import { PropTypes } from "prop-types";

const ProductCardBadge = ({ title }) => {
  return (
    <span className="bg-gray-200 text-gray-800 text-[18px] border border-gray-400 font-semibold mr-2 px-2.5 rounded dark:bg-gray-600 dark:text-gray-300 py-1">
      {title}
    </span>
  );
};

ProductCardBadge.propTypes = {
  title: PropTypes.string,
};

ProductCardBadge.defaultProps = {
  title: "badge",
};

export default ProductCardBadge;
