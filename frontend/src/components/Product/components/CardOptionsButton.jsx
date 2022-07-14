import React from "react";
import Tippy from "@tippyjs/react";
import { PropTypes } from "prop-types";

const CardOptionsButton = ({ title, children, extraClasses }) => {
  return (
    <Tippy content={title}>
      <button
        className={`border-[1.5px] border-gray-300 w-[30px] h-[30px] flex items-center justify-center rounded-sm ${extraClasses}`}
        type="button"
      >
        {children}
      </button>
    </Tippy>
  );
};

CardOptionsButton.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  extraClasses: PropTypes.string,
};

CardOptionsButton.defaultProps = {
  title: "Enter Title",
  children: {},
  extraClasses: "",
};

export default CardOptionsButton;
