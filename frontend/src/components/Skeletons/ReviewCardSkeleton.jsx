import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div
      className="animate-pulse h-[234px] p-2 sm:min-w-[350px] sm:max-w-[350px] min-w-[300px] max-w-[300px] rounded-md"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <div className="flex justify-between mb-2">
        <div className="w-[58px] h-[58px] bg-gray-200 rounded-full" />
        <div className="h-[20px] bg-gray-200 w-[100px] mt-2" />
      </div>
      <div className="border my-2 py-1 px-2 rounded-md h-[110px]">
        <div className="h-[16px] w-[90%] bg-gray-200 rounded-[3px] mb-2" />
        <div className="h-[16px] w-[100%] bg-gray-200 rounded-[3px] mb-2" />
        <div className="h-[16px] w-[80%] bg-gray-200 rounded-[3px] mb-2" />
        <div className="h-[16px] w-[50%] bg-gray-200 rounded-[3px] mb-2" />
      </div>
      <div className="h-[26px] w-[50%] bg-gray-200 rounded-[3px] mt-2" />
    </div>
  );
};

export default ReviewCardSkeleton;
