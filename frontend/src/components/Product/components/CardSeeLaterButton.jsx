import React from "react";
import { get } from "lodash";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import { useActions } from "hooks/actionHooks/useActions";
import { selectAllViewedProducts } from "store/slices/viewed_product_slice/viewed.product.slice";

// component
import CardOptionsButton from "./CardOptionsButton";

// icons
import { BsEye, BsEyeFill } from "react-icons/bs";

const CardSeeLaterButton = ({ product }) => {
  const { addViewedProduct, deleteViewedProduct } = useActions();
  const AllViewedProducts = useSelector(selectAllViewedProducts);

  const addedProductToViewList = AllViewedProducts.find(
    (viewedProduct) => viewedProduct._id === product._id
  );

  return (
    <CardOptionsButton title={"See Later"}>
      {get(addedProductToViewList, "viewLater", false) ? (
        <BsEyeFill size={22} onClick={() => deleteViewedProduct(product._id)} />
      ) : (
        <BsEye
          size={22}
          onClick={() => addViewedProduct({ ...product, viewLater: true })}
        />
      )}
    </CardOptionsButton>
  );
};

CardSeeLaterButton.propTypes = {
  product: PropTypes.object,
};

CardSeeLaterButton.defaultProps = {
  product: {},
};

export default CardSeeLaterButton;
