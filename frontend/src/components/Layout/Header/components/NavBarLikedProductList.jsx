import React from "react";
// components
import { NavOptionsButton } from "components/Buttons";
// icons

import { BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectAllLikedProducts } from "store/slices/liked_products_slice/liked.products.slice";

const NavBarLikedProductList = () => {
  const AllLikedProducts = useSelector(selectAllLikedProducts);

  return (
    <NavOptionsButton
      link="liked-products"
      hasBadge={true}
      badgeNumber={AllLikedProducts.length}
    >
      <BsHeart size={22} />
    </NavOptionsButton>
  );
};

export default NavBarLikedProductList;
