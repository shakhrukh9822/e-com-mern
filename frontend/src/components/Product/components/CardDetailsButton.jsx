import React from "react";
import { PropTypes } from "prop-types";

// component
import CardOptionsButton from "./CardOptionsButton";

// icons
import { BsEye, BsEyeFill } from "react-icons/bs";
import { useActions } from "hooks/actionHooks/useActions";

const CardDetailsButton = ({ link, product }) => {
  const { addViewedProduct } = useActions();
  console.log(product?.viewLater);

  return (
    <CardOptionsButton title={"Show More"}>
      {product?.viewLater ? (
        <BsEyeFill />
      ) : (
        <BsEye
          size={22}
          onClick={() => addViewedProduct({ ...product, viewLater: true })}
        />
      )}
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
