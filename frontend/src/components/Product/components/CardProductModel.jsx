import React from "react";
import { PropTypes } from "prop-types";

const CardProductModel = ({ productModel, brand }) => {
  return (
    <div className="flex flex-col text-[18px] capitalize">
      <div className="line-height-1 mb-1">
        <span>Brand:</span> <span>{brand}</span>
      </div>
      <div className="line-height-1">
        <span>Model:</span> <span>{productModel}</span>
      </div>
    </div>
  );
};

CardProductModel.propTypes = {
  productModel: PropTypes.string,
  brand: PropTypes.string,
};

CardProductModel.defaultProps = {
  productModel: "Product Model",
  brand: "Brand",
};

export default CardProductModel;
