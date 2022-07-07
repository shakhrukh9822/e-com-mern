import React from "react";
import ReactStars from "react-rating-stars-component";
import { PropTypes } from "prop-types";

const CardProductRating = ({ onChange, rating, numOfReviews }) => {
  return (
    <div>
      <div className="h-[23px] overflow-hidden flex items-center">
        <ReactStars
          onChange={onChange ? onChange : null}
          size={24}
          isHalf={true}
          activeColor="#1a1a1a"
          color="#00000040"
          value={rating}
          edit={false}
        />
      </div>
      <div className="flex justify-between line-height-1 text-[18px]">
        <span>Review{numOfReviews > 1 ? "s" : null} </span>
        <span>({numOfReviews})</span>
      </div>
    </div>
  );
};

CardProductRating.propTypes = {
  onChange: PropTypes.func,
  rating: PropTypes.number,
  numOfReviews: PropTypes.number,
};

CardProductRating.defaultProps = {
  onChange: () => console.log("clicked to stars"),
  rating: 0,
  numOfReviews: 0,
};

export default CardProductRating;
