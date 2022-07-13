import React from "react";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const Stars = ({ onChange, rating, size = 24 }) => {
  return (
    <ReactStars
      onChange={onChange ? onChange : null}
      size={size}
      isHalf={true}
      activeColor="#1a1a1a"
      color="#00000040"
      value={rating}
      edit={false}
    />
  );
};

Stars.propTypes = {
  onChange: PropTypes.func,
  rating: PropTypes.number,
  size: PropTypes.number,
};

export default Stars;
