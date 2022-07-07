import React from "react";
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

export default Logo;
