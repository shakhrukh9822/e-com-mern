import React from "react";

// components
import { NavOptionsButton } from "components/Buttons";
// icons
import { GiShoppingCart } from "react-icons/gi";

const NavBarShoppingButton = () => {
  return (
    <NavOptionsButton link="shopping-cart">
      <GiShoppingCart size={24} />
    </NavOptionsButton>
  );
};

export default NavBarShoppingButton;
