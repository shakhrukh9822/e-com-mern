import React from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

import { IoReturnUpBackSharp } from "react-icons/io5";

const GoBackToButton = ({
  extraClasses,
  GoBackButtonWrapper,
  navigatePath,
}) => {
  const navigate = useNavigate();
  return (
    <div className={`${GoBackButtonWrapper}`}>
      <button
        className={
          extraClasses
            ? extraClasses
            : `border py-1 px-4 rounded-md border-gray-900 hover:bg-gray-900 hover:text-white transition-all`
        }
        onClick={() => navigate(navigatePath)}
      >
        <IoReturnUpBackSharp size={30} />
      </button>
    </div>
  );
};

GoBackToButton.propTypes = {
  extraClass: PropTypes.string,
  GoBackButtonWrapper: PropTypes.string,
};

export default GoBackToButton;
