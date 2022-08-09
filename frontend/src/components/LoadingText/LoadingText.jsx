import React from "react";
import { PropTypes } from "prop-types";

const LoadingText = ({ title }) => {
  return (
    <div className="animate-pulse">
      <div className="absolut top-0 left-0 bg-slate-100 w-[100%] h-[74.2vh] flex items-center justify-center">
        <h1 className="text-[54px]">{title}...</h1>
      </div>
    </div>
  );
};

LoadingText.propTypes = {
  title: PropTypes.string,
};

export default LoadingText;
