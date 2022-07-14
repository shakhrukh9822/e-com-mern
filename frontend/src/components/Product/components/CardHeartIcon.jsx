import React from "react";

// component
import CardOptionsButton from "./CardOptionsButton";

// icons
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

const CardHeartIcon = ({ isLiked }) => {
  return (
    <CardOptionsButton title={"Like"} extraClasses={"mx-1"}>
      {isLiked ? <BsFillHeartFill size={22} /> : <BsHeart size={22} />}
    </CardOptionsButton>
  );
};

export default CardHeartIcon;
