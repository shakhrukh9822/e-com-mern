import React from "react";
import { PropTypes } from "prop-types";

const MainTitle = ({ title, extraClasses }) => {
  return (
    <div
      className={`
      mainTitle 
      w-max
      mt-3
      text-[1.8rem] 
      capitalize 
      md:text-[2.3rem] 
      relative 
      before:border-b-[1px] 
      before:w-[100%] 
      before:absolute 
      before:border-textColor
      before:bottom-0
      before:left-0
      ${extraClasses}`}
    >
      {title}
    </div>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string,
  extraClasses: PropTypes.string,
};

MainTitle.defaultProps = {
  title: "Enter Title",
  extraClasses: "",
};

export default MainTitle;
