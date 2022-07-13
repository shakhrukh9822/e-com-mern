import React from "react";

const ProductDetailsThumbSliderSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-[100%]">
        <div className="bg-gray-200 h-[440px] rounded-md mb-2" />
      </div>
      <div className="flex gap-1">
        <div className="w-[96px] h-[96px] bg-gray-200 rounded-md" />
        <div className="w-[96px] h-[96px] bg-gray-200 rounded-md" />
        <div className="w-[96px] h-[96px] bg-gray-200 rounded-md" />
        <div className="w-[96px] h-[96px] bg-gray-200 rounded-md" />
      </div>
    </div>
  );
};

export default ProductDetailsThumbSliderSkeleton;
