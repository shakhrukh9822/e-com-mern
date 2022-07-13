import React from "react";
import { PropTypes } from "prop-types";

const Badge = ({ title, extraClass }) => {
  return (
    <span
      className={`bg-gray-200 text-gray-800 text-[18px] border border-gray-400 font-semibold px-2.5 rounded dark:bg-gray-600 dark:text-gray-300 py-1  ${extraClass}`}
    >
      {title}
    </span>
  );
};

Badge.propTypes = {
  title: PropTypes.string,
  extraClass: PropTypes.string,
};

Badge.defaultProps = {
  title: "badge",
  extraClass: "",
};

export default Badge;
