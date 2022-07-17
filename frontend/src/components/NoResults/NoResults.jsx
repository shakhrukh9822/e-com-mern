import React from "react";

import NoResultBanner from "assets/images/no-results/no-results.png";

const NoResults = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <img src={NoResultBanner} alt="No results" />
    </div>
  );
};

export default NoResults;
