import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

// component
import CardOptionsButton from "./CardOptionsButton";

// icons
import { BsEye } from "react-icons/bs";

const CardDetailsButton = ({ link }) => {
  return (
    <CardOptionsButton title={"Show More"}>
      <Link to={`/product/${link}`}>
        <BsEye size={22} />
      </Link>
    </CardOptionsButton>
  );
};

CardDetailsButton.propTypes = {
  link: PropTypes.string,
};

CardDetailsButton.defaultProps = {
  link: "id",
};

export default CardDetailsButton;
