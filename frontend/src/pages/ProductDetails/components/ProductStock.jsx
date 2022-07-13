import React from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductStock = () => {
  return (
    <div className="flex items-center justify-between min-w-[120px]">
      <motion.button
        whileTap={{ scale: 0.85 }}
        className="bg-slate-300 min-w-[28px] h-[28px] rounded-2xl cursor-pointer text-[16px] text-baseColor flex items-center justify-center"
      >
        <AiOutlinePlus />
      </motion.button>
      <span className="mx-3 text-[20px] min-w-[20px] w-[100%] flex justify-center border-[1.5px] border-gray-500 rounded-lg px-1">
        2
      </span>
      <motion.button
        whileTap={{ scale: 0.85 }}
        className="bg-slate-300 min-w-[28px] h-[28px] rounded-2xl cursor-pointer text-[16px] text-baseColor flex items-center justify-center"
      >
        <AiOutlineMinus />
      </motion.button>
    </div>
  );
};

export default ProductStock;
