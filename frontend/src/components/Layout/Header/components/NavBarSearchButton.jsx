import React from "react";

// components
import { NavOptionsButton } from "components/Buttons";
// icons
import { CgSearch } from "react-icons/cg";

const NavBarSearchButton = () => {
  return (
    <NavOptionsButton>
      <CgSearch size={24} />
    </NavOptionsButton>
  );
};

export default NavBarSearchButton;
