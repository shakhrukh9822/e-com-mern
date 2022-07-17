import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavOptionsButton = ({ children, link, hasBadge, badgeNumber, type }) => {
  if (type === "button") {
    return (
      <button
        className="ml-3 hover:text-red-600 text-white relative headerNavBadge"
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      to={link}
      className="ml-3 hover:text-red-600 text-white relative headerNavBadge"
      type="button"
    >
      {children}
      {hasBadge ? (
        <span className="absolute -top-3 -right-1 w-[18px] h-[18px] bg-white text-black flex items-center justify-center rounded-full border-[1px]">
          {badgeNumber}
        </span>
      ) : null}
    </Link>
  );
};

NavOptionsButton.propTypes = {
  children: PropTypes.object,
  link: PropTypes.string,
  badgeNumber: PropTypes.number,
  hasBadge: PropTypes.bool,
  type: PropTypes.string,
};

NavOptionsButton.defaultProps = {
  children: {},
  link: "/",
  badgeNumber: 0,
  hasBadge: false,
  type: "",
};

export default NavOptionsButton;
