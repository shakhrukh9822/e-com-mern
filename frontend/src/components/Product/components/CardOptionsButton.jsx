import React from "react";
import Tippy from "@tippyjs/react";
import { PropTypes } from "prop-types";

const CardOptionsButton = ({ title, children, onClick, extraClasses }) => {
  return (
    <Tippy content={title}>
      <button
        className={`border-[1.5px] border-gray-300 w-[30px] h-[30px] flex items-center justify-center rounded-sm ${extraClasses}`}
        type="button"
        onClick={onClick ? () => onClick() : null}
      >
        {children}
      </button>
    </Tippy>
  );
};

CardOptionsButton.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  onClick: PropTypes.func,
  extraClasses: PropTypes.string,
};

CardOptionsButton.defaultProps = {
  title: "Enter Title",
  children: {},
  onClick: () => console.log("clicked me"),
  extraClasses: "",
};

export default CardOptionsButton;
