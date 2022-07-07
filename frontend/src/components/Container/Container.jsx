import React from "react";
import PropTypes from "prop-types";

const Container = ({ children, extraClasses }) => {
  return (
    <div className={`container mx-auto px-3 ${extraClasses}`}>{children}</div>
  );
};

Container.propTypes = {
  extraClasses: PropTypes.string,
};

Container.defaultProps = {
  extraClasses: "",
};

export default Container;
