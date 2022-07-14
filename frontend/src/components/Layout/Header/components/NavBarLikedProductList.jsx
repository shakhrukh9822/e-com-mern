import React from "react";
// components
import { NavOptionsButton } from "components/Buttons";
// icons

import { BsHeart } from "react-icons/bs";

const NavBarLikedProductList = () => {
  return (
    <NavOptionsButton link="liked-products">
      <BsHeart size={22} />
    </NavOptionsButton>
  );
};

export default NavBarLikedProductList;
