import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ color }) => {
  return (
    <Link
      className={`font-bold text-[26px] text-${color}`}
      to={"/"}
      style={{
        fontFamily: "'Abel', sans-serif",
      }}
    >
      E-com
    </Link>
  );
};

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
