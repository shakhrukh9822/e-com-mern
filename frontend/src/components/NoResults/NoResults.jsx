import React from "react";

import NoResultBanner from "assets/images/no-results/no-results.png";
import NoViewedProductsBnnaer from "assets/images/no-viewed/no-viewed.png";
import NoLikedProductsBnnaer from "assets/images/no-liked_products/no-liked_products.png";

const NoResults = ({ type }) => {
  return (
    <div className="w-full h-[100%] flex justify-center items-center flex-col">
      <img
        className="max-w-[50%]"
        src={
          type === "search"
            ? NoResultBanner
            : type === "viewedLater"
            ? NoViewedProductsBnnaer
            : type === "likedProducts"
            ? NoLikedProductsBnnaer
            : null
        }
        alt="No results"
      />
      <h1 className="text-[40px] capitalize">
        {type === "search"
          ? "No Results"
          : type === "viewedLater"
          ? "empty see later list"
          : type === "likedProducts"
          ? "empty favourite products list"
          : null}
      </h1>
    </div>
  );
};

export default NoResults;
