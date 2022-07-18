import React from "react";

import { BsTrash } from "react-icons/bs";

const CardTrashButton = ({ productId, onClick }) => {
  return (
    <BsTrash size={22} onClick={onClick ? () => onClick(productId) : null} />
  );
};

export default CardTrashButton;
