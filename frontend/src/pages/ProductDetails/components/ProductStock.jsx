import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { toast } from "react-toastify";

const ProductStock = ({
  stock,
  productQty,
  incrementProductQty,
  dicrementProductQty,
}) => {
  useEffect(() => {
    if (productQty === stock) {
      toast.error("You touched all of the products", {
        position: "top-right",
      });
    }
  }, [productQty, stock]);

  return (
    <div className="flex items-center justify-between min-w-[120px]">
      <motion.button
        onClick={incrementProductQty}
        whileTap={{ scale: 0.85 }}
        disabled={productQty === stock}
        className="bg-slate-300 min-w-[28px] h-[28px] rounded-2xl cursor-pointer text-[16px] text-baseColor flex items-center justify-center disabled:opacity-40"
      >
        <AiOutlinePlus />
      </motion.button>
      <span className="mx-3 text-[20px] min-w-[20px] w-[100%] flex justify-center border-[1.5px] border-gray-500 rounded-lg px-1">
        {productQty}
      </span>
      <motion.button
        onClick={dicrementProductQty}
        whileTap={{ scale: 0.85 }}
        disabled={productQty === 1}
        className="bg-slate-300 min-w-[28px] h-[28px] rounded-2xl cursor-pointer text-[16px] text-baseColor flex items-center justify-center disabled:opacity-40"
      >
        <AiOutlineMinus />
      </motion.button>
    </div>
  );
};

export default ProductStock;
