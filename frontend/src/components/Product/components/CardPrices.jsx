import React from "react";
import { PropTypes } from "prop-types";

const CardPrices = ({ hasDiscaunt, price, discauntPrecent }) => {
  const discpountPrice = hasDiscaunt
    ? price - (price * discauntPrecent) / 100
    : price;

  return (
    <div className="flex items-center">
      <span className="line-height-1 font-semibold text-[30px] text-gray-800">
        {discpountPrice} $
      </span>
      {hasDiscaunt ? (
        <span className="w-[2px] h-[22px] mx-1 bg-slate-900 inline-block rotate-12"></span>
      ) : null}
      <div>
        {hasDiscaunt ? (
          <span
            style={{ lineHeight: 1 }}
            className="
                 line-height-1
                 mt-2
                 ml-1
                 inline-block
                 text-[22px] 
                 relative 
               text-slate-500
                 before:inline-block
                 before:w-[120%]
                 before:h-[2px]
               before:bg-slate-700
                 before:absolute
                 before:-left-1
                 before:bottom-[14px]
                 before:-rotate-[5deg]
    "
          >
            {price}
          </span>
        ) : null}
      </div>
    </div>
  );
};

CardPrices.propTypes = {
  hasDiscaunt: PropTypes.bool,
  price: PropTypes.number,
  discauntPrecent: PropTypes.number,
};

CardPrices.defaultProps = {
  hasDiscaunt: false,
  price: 0,
  discauntPrecent: 0,
};

export default CardPrices;
