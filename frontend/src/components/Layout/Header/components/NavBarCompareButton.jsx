import React from "react";
import { NavOptionsButton } from "components/Buttons";

import { MdOutlineSignalCellularAlt } from "react-icons/md";

const NavBarCompareButton = () => {
  return (
    <NavOptionsButton link="compare">
      <MdOutlineSignalCellularAlt size={24} />
    </NavOptionsButton>
  );
};

export default NavBarCompareButton;
