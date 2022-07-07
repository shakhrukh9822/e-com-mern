import React from "react";
import NavBarLikedProductList from "./NavBarLikedProductList";

// components
import NavBarSearchButton from "./NavBarSearchButton";
import NavBarShoppingButton from "./NavBarShoppingButton";
import NavBarUserAccountButton from "./NavBarUserAccountButton";

const NavOptions = () => {
  return (
    <div className="flex h-[100%] pl-2">
      <NavBarSearchButton />
      <NavBarLikedProductList />
      <NavBarShoppingButton />
      <NavBarUserAccountButton />
    </div>
  );
};

export default NavOptions;
