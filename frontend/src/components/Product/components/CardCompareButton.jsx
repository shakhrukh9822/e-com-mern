import React from "react";

import { IoMdStats } from "react-icons/io";
import CardOptionsButton from "./CardOptionsButton";

const CardCompareButton = () => {
  return (
    <CardOptionsButton title={"Compare"}>
      <IoMdStats size={24} />
    </CardOptionsButton>
    // <button className="border-[1.5px] border-gray-300">
    // </button>
  );
};

export default CardCompareButton;
