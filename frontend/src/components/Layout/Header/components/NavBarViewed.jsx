import React from "react";
// components
import { NavOptionsButton } from "components/Buttons";
// icons

import { BsEye } from "react-icons/bs";
import { selectAllViewedProducts } from "store/slices/viewed_product_slice/viewed.product.slice";
import { useSelector } from "react-redux";

const NavBarViewed = () => {
  const AllViewedProducts = useSelector(selectAllViewedProducts);

  return (
    <NavOptionsButton
      link="viewed"
      hasBadge={true}
      badgeNumber={AllViewedProducts.length}
    >
      <BsEye size={22} />
    </NavOptionsButton>
  );
};

export default NavBarViewed;
