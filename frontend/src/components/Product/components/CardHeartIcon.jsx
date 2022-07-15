import React from "react";

// component
import CardOptionsButton from "./CardOptionsButton";

// icons
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { useActions } from "hooks/actionHooks/useActions";
import { useSelector } from "react-redux";
import { selectAllLikedProducts } from "store/slices/liked_products_slice/liked.products.slice";
import { get } from "lodash";

const CardHeartIcon = ({ isLiked, product }) => {
  const { addLikedProduct, deleteLikedProduct } = useActions();
  const AllLikedProducts = useSelector(selectAllLikedProducts);

  const addedProductToViewList = AllLikedProducts.find(
    (likedProduct) => likedProduct._id === product._id
  );

  return (
    <CardOptionsButton title={"Like"} extraClasses={"mx-1"}>
      {get(addedProductToViewList, "isLiked", false) ? (
        <BsFillHeartFill
          size={22}
          onClick={() => deleteLikedProduct(product._id)}
        />
      ) : (
        <BsHeart
          size={22}
          onClick={() => addLikedProduct({ ...product, isLiked: true })}
        />
      )}
    </CardOptionsButton>
  );
};

export default CardHeartIcon;
