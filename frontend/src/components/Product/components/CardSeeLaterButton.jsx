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
import CardTrashButton from "./CardTrashButton";

const CardSeeLaterButton = ({ product, inViewedLaterList, inLikedList }) => {
  const { addViewedProduct, deleteViewedProduct } = useActions();
  const AllViewedProducts = useSelector(selectAllViewedProducts);

  const addedProductToViewList = AllViewedProducts.find(
    (viewedProduct) => viewedProduct._id === product._id
  );

  return (
    <CardOptionsButton title={inViewedLaterList ? "Remove" : "See Later"}>
      {get(addedProductToViewList, "viewLater", false) ? (
        <div>
          {inViewedLaterList && !inLikedList ? (
            <CardTrashButton
              productId={product._id}
              onClick={deleteViewedProduct}
            />
          ) : (
            <BsEyeFill
              size={22}
              onClick={() => deleteViewedProduct(product._id)}
            />
          )}
        </div>
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
