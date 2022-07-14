import React from "react";
import NavBarLikedProductList from "./NavBarLikedProductList";

// components
import NavBarSearchButton from "./NavBarSearchButton";
import NavBarShoppingButton from "./NavBarShoppingButton";
import NavBarUserAccountButton from "./NavBarUserAccountButton";
import NavBarViewed from "./NavBarViewed";

const NavOptions = () => {
  return (
    <div className="flex h-[100%] pl-2">
      <NavBarViewed />
      <NavBarSearchButton />
      <NavBarLikedProductList />
      <NavBarShoppingButton />
      <NavBarUserAccountButton />
    </div>
  );
};

export default NavOptions;
