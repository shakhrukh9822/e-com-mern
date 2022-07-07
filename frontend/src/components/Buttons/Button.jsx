import React from "react";
import { PropTypes } from "prop-types";

const Button = ({ type, btnTitle, btnHtmlType, onClick }) => {
  if (type === "dark") {
    return (
      <button
        className="w-[100%] 
          py-1.5 
          px-5 
          text-[18px] 
          uppercase 
          font-medium 
        text-gray-900 
          focus:outline-none 
        bg-white rounded-lg 
          border 
        border-gray-200 
        hover:bg-gray-100 
        hover:text-gray-800 
          focus:z-10 
          focus:ring-4 
        focus:ring-gray-200 
        dark:focus:ring-gray-700 
        dark:bg-gray-800 
        dark:text-gray-400 
        dark:border-gray-600 
        dark:hover:text-white 
        dark:hover:bg-gray-700"
        type={btnHtmlType}
        onClick={onClick ? () => onClick() : null}
      >
        {btnTitle}
      </button>
    );
  }
  return <div>Button</div>;
};

Button.propTypes = {
  type: PropTypes.string,
  btnTitle: PropTypes.string,
  btnHtmlType: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "dark",
  btnTitle: "btn",
  btnHtmlType: "button",
  onClick: () => console.log("pressed me"),
};

export default Button;
