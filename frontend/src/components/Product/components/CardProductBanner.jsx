import React from "react";
import { PropTypes } from "prop-types";

const CardProductBanner = ({ image, name }) => {
  return (
    <div className="flex items-center justify-center w-[100%] h-[300px] p-3 border-b-[1px]">
      <img
        className="max-w-[100%] h-[90%] object-fill"
        src={image}
        alt={name}
      />
    </div>
  );
};

CardProductBanner.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

CardProductBanner.defaultProps = {
  image: "Product Img Url",
  name: "Brand",
};

export default CardProductBanner;
