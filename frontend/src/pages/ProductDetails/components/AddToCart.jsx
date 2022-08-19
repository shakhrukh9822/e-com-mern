import React from "react";
import { Button } from "components/Buttons";

const AddToCart = ({ cardHandler }) => {
  return (
    <Button
      onClick={() => cardHandler()}
      btnTitle={"add to cart"}
      extraClass={"bg-gray-800 text-white py-2 h-[45px]"}
    />
  );
};

export default AddToCart;
