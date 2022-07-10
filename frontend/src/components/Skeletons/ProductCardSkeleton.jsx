import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="shadow-lg drop-shadow-xl rounded-md">
      <div className="animate-pulse h-[100%] w-[100%]">
        <div className="p-3 border-b-[1px]">
          <div className="w-[100%] h-[275px] bg-gray-200 rounded-md border-[1px] border-gray-200" />
        </div>
        <div className="p-3">
          <div className="mb-3">
            <div className="h-[20px] bg-gray-200 rounded-md mb-1" />
            <div className="h-[20px] bg-gray-200 rounded-md w-[70%]" />
          </div>
          <div className="h-[34px] bg-gray-200 rounded-md mb-2" />
          <div className="h-[20px] bg-gray-200 rounded-md mb-1" />
          <div className="h-[20px] bg-gray-200 rounded-md mb-1 w-[80%]" />
          <div className="h-[20px] bg-gray-200 rounded-md mb-2 w-[80%]" />
          <div className="h-[36px] bg-gray-200 rounded-md " />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
