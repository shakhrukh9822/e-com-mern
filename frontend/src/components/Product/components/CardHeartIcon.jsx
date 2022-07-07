import React, { useState } from "react";

// component
import CardOptionsButton from "./CardOptionsButton";

// icons
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

const CardHeartIcon = () => {
  const [isActive, setIsActive] = useState(false);

  const addToLikedList = () => {
    setIsActive(!isActive);
  };

  return (
    <CardOptionsButton
      title={"Wish List"}
      onClick={addToLikedList}
      extraClasses={"mx-1"}
    >
      {isActive ? <BsFillHeartFill size={22} /> : <BsHeart size={22} />}
    </CardOptionsButton>
  );
};

export default CardHeartIcon;
